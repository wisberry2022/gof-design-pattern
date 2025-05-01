import { Button } from "./Button.ts";

export class LightButton extends Button {
  constructor(color: string, text: string) {
    super(color, text);
  }

  getStyle() {
    console.log(`Light Button - ${this.color} ${this.text}`);
  }
}
