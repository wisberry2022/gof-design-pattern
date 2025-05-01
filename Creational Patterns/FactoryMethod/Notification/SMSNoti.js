import { Notification } from "./Notification.js";

export class SMSNoti extends Notification {
  constructor() {
    super("SMS");
  }

  send(message) {
    console.log(`[${this.type}] ${message} 전송`);
  }
}
