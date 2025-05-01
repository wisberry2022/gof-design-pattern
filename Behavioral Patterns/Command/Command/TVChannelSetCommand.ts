import { RemoteCommand, TVReceiver } from "../type.ts";

export class TVChannelSetCommand implements RemoteCommand {
  receiver: TVReceiver;

  constructor(receiver: TVReceiver) {
    this.receiver = receiver;
  }

  execute(option: { channel: number }) {
    this.receiver.setChannel(option.channel);
  }

  undo() {
    this.receiver.channelBack();
  }
}
