import Music from "../Entities/Music";

export default class MusicManager {
  protected constructor() {
    this.musicRun = null;
    this.isPlay = false;
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
  }

  stop() {
    this.isPlay = false;
  }

  setMusic(m: Music) {
    this.musicRun = m;
  }
}
