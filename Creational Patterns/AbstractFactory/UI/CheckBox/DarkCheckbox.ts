import { Checkbox } from "./Checkbox.ts";

export class DarkCheckbox extends Checkbox {
  constructor(backgroundColor: string, label: string) {
    super(backgroundColor, label);
  }

  getStyle() {
    console.log(`Dark Checkbox - ${this.backgroundColor} ${this.label}`);
  }
}
