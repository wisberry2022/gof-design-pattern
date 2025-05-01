import { Button } from "./Button.ts";

export class DarkButton extends Button {
  constructor(color: string, text: string) {
    super(color, text);
  }

  getStyle() {
    console.log(`Dark Button - ${this.color} ${this.text}`);
  }
}
