export default class HomeTopic {
  maintitle: string;
  subtitle: string;
  button: string;
  buttonlink: string;
  img: string;

  /**
   * Constructor of HomeTopic
   */
  constructor() {
    this.maintitle = null;
    this.subtitle = null;
    this.button = null;
    this.img = null;
    this.buttonlink = null;
  }

  setmaintitle(maintitle: string) {
    this.maintitle = maintitle;
    return this;
  }

  setsubtitle(subtitle: string) {
    this.subtitle = subtitle;
    return this;
  }

  setbutton(button: string) {
    this.button = button;
    return this;
  }

  setimg(img: string) {
    this.img = img;
    return this;
  }

  setbuttonlink(buttonlink: string) {
    this.buttonlink = buttonlink;
    return this;
  }
}
