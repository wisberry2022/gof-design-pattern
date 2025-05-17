export type PlayStatus = "STOP" | "PLAYING" | "PAUSE";

export interface VideoPlayer {
  addUrl(url: string): void;
  play(url: string): void;
  pause(url: string): void;
  getStream(): { [key: string]: Playable };
}

export interface Playable {
  play(): void;
  pause(): void;
  end(): void;
  getStatus(): PlayStatus;
}
