import { LightReceiver, RemoteCommand } from "../type.ts";

export class LightOffCommand implements RemoteCommand {
  receiver: LightReceiver;

  constructor(receiver: LightReceiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.off();
  }

  undo() {
    this.receiver.on();
  }
}
