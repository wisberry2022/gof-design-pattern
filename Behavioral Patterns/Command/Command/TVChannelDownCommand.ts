import { RemoteCommand, TVReceiver } from "../type.ts";

export class TVChannelDownCommand implements RemoteCommand {
  receiver: TVReceiver;

  constructor(receiver: TVReceiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.downChannel();
  }

  undo() {
    this.receiver.upChannel();
  }
}
