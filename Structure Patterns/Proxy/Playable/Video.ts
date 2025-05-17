import { Playable, PlayStatus } from "../Type.ts";

export class Video implements Playable {
  private status: PlayStatus = "STOP";
  private url: string = "";
  private streams: string[] = [];
  private index = 0;
  private limitStreamSize = 20;
  private interval!: NodeJS.Timeout;

  constructor(url: string) {
    this.url = url;
    this.streams = Array.from({ length: this.limitStreamSize }).map((_, i) =>
      (i + 1).toString()
    );
  }

  play() {
    this.status = "PLAYING";
    this.interval = setInterval(() => {
      if (this.index === this.limitStreamSize) {
        this.end();
        return;
      }
      console.log(`${this.url} - ${this.streams[this.index++]}`);
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
    this.status = "PAUSE";
    console.log("영상이 중지되었습니다!");
  }

  end() {
    clearInterval(this.interval);
    this.status = "STOP";
    console.log("영상이 끝났습니다!");
  }

  getStatus() {
    return this.status;
  }
}
