import { EmailNotificationHub } from "./Factory/EmailNotificationHub.js";
import { SMSNotificationHub } from "./Factory/SMSNotificationHub.js";
import { PushNotificationHub } from "./Factory/PushNotificationHub.js";

const emailHub = new EmailNotificationHub();
const smsHub = new SMSNotificationHub();
const pushHub = new PushNotificationHub();

const emailSender = emailHub.createNoti();
const smsSender = smsHub.createNoti();
const pushSender = pushHub.createNoti();

emailSender.send("알림");
smsSender.send("알림");
pushSender.send("알림");
