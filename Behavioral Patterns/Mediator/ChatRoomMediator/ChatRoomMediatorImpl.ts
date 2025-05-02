import { ChatRoomMediator, JoinInfo, User } from "../type.ts";

export class ChatRoomMediatorImpl implements ChatRoomMediator {
  private joinTable: Map<string, JoinInfo[]>;
  private rooms: Map<string, User[]>;

  constructor() {
    this.joinTable = new Map();
    this.rooms = new Map();
  }

  sendMessage(sender: User, message: string) {
    const room = this.joinTable
      .get(sender.getName())
      ?.find((table) => table.connect)?.joinRoomName;
    if (!room) {
      console.log("참여하고 있는 채팅 방이 없습니다!");
      return;
    }
    console.log(`${sender.getName()}: ${message}`);
  }

  createChatRoom(user: User, name: string) {
    if (this.rooms.get(name)) {
      console.log("이미 존재하는 채팅방입니다!");
      return;
    }
    this.rooms.set(name, [user]);
    this.join(user, name);
    console.log(`>>>>>>>>>>>>>>>> ${name} 채팅방이 생성되었습니다!`);
  }

  join(user: User, room: string) {
    if (!this.rooms.get(room)) {
      console.log("존재하지 않는 채팅방입니다!");
      return;
    }
    this.rooms.get(room)?.push(user);
    this.addJoinTable(user, room);
    console.log(
      `>>>>>>>>>>>>>>>> ${user.getName()}님이 ${room} 채팅방에 참여하였습니다!`
    );
  }

  private addJoinTable(user: User, room: string) {
    const userName = user.getName();
    if (!this.joinTable.get(userName)) {
      this.joinTable.set(userName, [{ joinRoomName: room, connect: true }]);
    } else {
      let newJoinTable = [];
      const joinTable = this.joinTable.get(userName);
      joinTable?.forEach((info) => {
        newJoinTable.push({
          ...info,
          connect: false,
        });
      });

      newJoinTable.push({ joinRoomName: room, connect: true });
      this.joinTable.set(userName, newJoinTable);
    }
  }
}
