import { TVReceiver } from "../type.ts";

export class TV implements TVReceiver {
  status: "ON" | "OFF";
  currentChannel: number;
  channelCue: number[] = [];

  constructor() {
    this.status = "OFF";
    this.currentChannel = 1;
    this.channelCue = [];
  }

  on() {
    this.status = "ON";
    console.log("TV 켜짐!");
  }

  off() {
    this.status = "OFF";
    console.log("TV 꺼짐!");
  }

  upChannel() {
    console.log(`${++this.currentChannel}번으로 이동했습니다!`);
    this.channelCue.push(this.currentChannel);
  }

  downChannel(): void {
    console.log(`${--this.currentChannel}번으로 이동했습니다!`);
    this.channelCue.push(this.currentChannel);
  }

  setChannel(channel: number) {
    this.currentChannel = channel;
    this.channelCue.push(channel);
    console.log(`${this.currentChannel}번으로 이동했습니다!`);
  }

  channelBack() {
    this.channelCue.pop();
    this.currentChannel = this.channelCue.at(-1) ?? 1;
    console.log(`${this.currentChannel}번으로 이동했습니다!`);
  }
}
