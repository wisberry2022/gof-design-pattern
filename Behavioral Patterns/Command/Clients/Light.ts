import { LightReceiver } from "../type";

export class Light implements LightReceiver {
  on() {
    console.log("켜짐!");
  }

  off() {
    console.log("꺼짐!");
  }
}
