import { NotificationHub } from "./NotificationHub.js";
import { SMSNoti } from "../Notification/SMSNoti.js";

export class SMSNotificationHub extends NotificationHub {
  createNoti() {
    return new SMSNoti();
  }
}
