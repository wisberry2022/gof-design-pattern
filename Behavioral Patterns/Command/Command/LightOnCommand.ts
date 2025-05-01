import { LightReceiver, RemoteCommand } from "../type.ts";

export class LightOnCommand implements RemoteCommand {
  receiver: LightReceiver;

  constructor(receiver: LightReceiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.on();
  }

  undo() {
    this.receiver.off();
  }
}
