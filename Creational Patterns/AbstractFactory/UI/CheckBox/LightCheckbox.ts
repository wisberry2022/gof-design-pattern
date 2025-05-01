import { Checkbox } from "./Checkbox.ts";

export class LightCheckbox extends Checkbox {
  constructor(backgroundColor: string, label: string) {
    super(backgroundColor, label);
  }

  getStyle() {
    console.log(`Light Checkbox - ${this.backgroundColor} ${this.label}`);
  }
}
