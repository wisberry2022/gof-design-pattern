export interface User {
  name: string;
  getName(): string;
}

export interface ChatRoomMediator {
  sendMessage(sender: User, message: string): void;
  createChatRoom(user: User, name: string): void;
  join(user: User, room: string): void;
}

export type JoinInfo = {
  joinRoomName: string;
  connect: boolean;
};
