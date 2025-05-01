import { RemoteCommand, TVReceiver } from "../type.ts";

export class TVChannelUpCommand implements RemoteCommand {
  receiver: TVReceiver;

  constructor(receiver: TVReceiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.upChannel();
  }

  undo() {
    this.receiver.downChannel();
  }
}
