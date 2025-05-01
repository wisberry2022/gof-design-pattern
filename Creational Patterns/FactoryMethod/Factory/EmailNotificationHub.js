import { NotificationHub } from "./NotificationHub.js";
import { EmailNoti } from "../Notification/EmailNoti.js";

export class EmailNotificationHub extends NotificationHub {
  createNoti() {
    return new EmailNoti();
  }
}
