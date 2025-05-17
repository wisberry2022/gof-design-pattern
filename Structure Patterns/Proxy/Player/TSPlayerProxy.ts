import { VideoPlayer } from "../Type.ts";
import { TSPlayer } from "./TSPlayer.ts";

export class TSPlayerProxy implements VideoPlayer {
  private origin: VideoPlayer;

  constructor() {
    this.origin = new TSPlayer();
  }

  addUrl(url: string) {
    this.origin.addUrl(url);
  }

  play(url: string) {
    const stream = this.origin.getStream();
    if (stream[url].getStatus() === "PLAYING") {
      console.log(`${url}은 이미 재생중입니다!`);
      return;
    }
    this.origin.play(url);
  }

  pause(url: string) {
    const stream = this.origin.getStream();
    if (stream[url].getStatus() === "PAUSE") {
      console.log(`${url}은 이미 멈췄습니다!`);
      return;
    }
    this.origin.pause(url);
  }

  getStream() {
    return this.origin.getStream();
  }
}
