import { Playable, VideoPlayer } from "../Type.ts";
import { Video } from "../Playable/Video.ts";

export class TSPlayer implements VideoPlayer {
  private stream: { [key: string]: Playable } = {};

  addUrl(url: string) {
    this.stream = {
      ...this.stream,
      [url]: new Video(url),
    };
  }

  play(url: string) {
    const video = this.stream[url];

    if (!video) {
      console.log(`${url}은 등록되지 않았습니다.`);
      return;
    }

    console.log(`${url} 재생!`);
    video.play();
  }

  pause(url: string) {
    const video = this.stream[url];

    if (!video) {
      console.log(`${url}은 등록되지 않았습니다.`);
      return;
    }

    video.pause();
    console.log(`${url} 재생 중지!`);
  }

  getStream() {
    return this.stream;
  }
}
