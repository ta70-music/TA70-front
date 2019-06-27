import Music from "../Entities/Music";

interface CallBack {
  (): void;
}

export default class MusicManager {
  private playCallback: CallBack[];
  private stopCallback: CallBack[];

  protected constructor() {
    this.musicRun = null;
    this.isPlay = false;
    this.playCallback = [];
    this.stopCallback = [];
  }

  static singleton: MusicManager;
  isPlay: boolean;
  musicRun: Music;

  static get(): MusicManager {
    if (!MusicManager.singleton) {
      MusicManager.singleton = new MusicManager();
    }
    return MusicManager.singleton;
  }

  play() {
    this.isPlay = true;
    this.playCallback.forEach((e) => {
      e();
    })
  }

  stop() {
    this.isPlay = false;
    this.stopCallback.forEach((e) => {
      e();
    })
  }

  setMusic(m: Music) {
    this.musicRun = m;
  }

  addStopCallback(e: CallBack): number {
    this.stopCallback.push(e);
    return  this.stopCallback.length-1;
  }

  addPlayCallback(e: CallBack): number {
    this.playCallback.push(e);
    return  this.playCallback.length-1;
  }
}
