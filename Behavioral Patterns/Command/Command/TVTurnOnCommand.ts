import { RemoteCommand, TVReceiver } from "../type";

export class TVTurnOnCommand implements RemoteCommand {
  receiver: TVReceiver;

  constructor(receiver: TVReceiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.on();
  }

  undo() {
    this.receiver.off();
  }
}
