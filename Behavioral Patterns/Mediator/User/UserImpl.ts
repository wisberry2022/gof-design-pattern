import { ChatRoomMediator, User } from "../type.ts";

export class UserImpl implements User {
  private server: ChatRoomMediator;
  name: string;

  constructor(name: string, server: ChatRoomMediator) {
    this.server = server;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  createChatRoom(name: string) {
    this.server.createChatRoom(this, name);
  }

  join(room: string) {
    this.server.join(this, room);
  }

  sendMessage(message: string) {
    this.server.sendMessage(this, message);
  }
}
