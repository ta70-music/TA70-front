import * as Cookie from 'js-cookie';
import {User} from '../Entities/User';
import {environment} from "../environments/environment";

export default class UserSession {
  protected constructor() {
    this.token = null;
    this.connected = false;
  }

  static session: UserSession;
  public connected: boolean;
  private user: User;
  private token: string;
  private lastPathRequest: string;

  static get(): UserSession {
    if (!UserSession.session) {
      UserSession.session = new UserSession();
      try {
        UserSession.session.load();
      } catch (e) {
        UserSession.session.connected = false;
      }
    }
    return UserSession.session;
  }

  getToken() {
    return this.token;
  }

  setToken(token: string): UserSession {
    this.token = token;
    this.save();
    return this;
  }

  load() {
    const v = Cookie.get('version');
    if (v && v === environment.cookieVersion) {
      this.token = Cookie.get('token');
    } else {
      throw Error('Cookie not set');
    }
  }

  save() {
    if (!this.token) {
      throw Error('Token need to be set');
    }
    Cookie.set('version', environment.cookieVersion);
    Cookie.set('token', this.token);
  }

  remove() {
    this.token = null;
    this.connected = false;
    Cookie.remove('version');
    Cookie.remove('token');
  }

  setUser(u: User): UserSession {
    this.user = u;
    this.connected = true;
    return this;
  }

  getUser(): User {
    return this.user;
  }

  disconnected() {
    this.user = null;
    this.connected = false;
    this.remove();
  }

  setLastPathRequest(path: string) {
    this.lastPathRequest = path;
  }

  getLastPathRequest(): string {
    if (this.lastPathRequest) {
      return this.lastPathRequest;
    } else {
      return '/';
    }
  }
}
