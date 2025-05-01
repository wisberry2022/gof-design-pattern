import { Notification } from "./Notification.js";

export class PushNoti extends Notification {
  constructor() {
    super("PUSH");
  }

  send(message) {
    console.log(`[${this.type}] ${message} 전송`);
  }
}
