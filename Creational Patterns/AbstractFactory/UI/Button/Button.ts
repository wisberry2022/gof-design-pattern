import { ButtonType } from "../type.ts";

export class Button implements ButtonType {
  color;
  text;

  constructor(color: string, text: string) {
    this.color = color;
    this.text = text;
  }

  getStyle() {
    console.log(`Button - ${this.color} ${this.text}`);
  }
}
