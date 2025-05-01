import { Notification } from "./Notification.js";

export class EmailNoti extends Notification {
  constructor() {
    super("EMAIL");
  }

  send(message) {
    console.log(`[${this.type}] ${message} 전송`);
  }
}
