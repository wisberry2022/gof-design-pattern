import { NotificationHub } from "./NotificationHub.js";
import { PushNoti } from "../Notification/PushNoti.js";

export class PushNotificationHub extends NotificationHub {
  createNoti() {
    return new PushNoti();
  }
}
