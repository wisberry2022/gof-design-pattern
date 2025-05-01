import { RemoteCommand, TVReceiver } from "../type";

export class TVTurnOffCommand implements RemoteCommand {
  receiver: TVReceiver;

  constructor(receiver: TVReceiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.off();
  }

  undo() {
    this.receiver.on();
  }
}
