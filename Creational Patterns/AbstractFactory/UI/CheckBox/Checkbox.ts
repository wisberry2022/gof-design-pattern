import { CheckboxType } from "../type.ts";

export class Checkbox implements CheckboxType {
  backgroundColor;
  label;

  constructor(backgroundColor: string, label: string) {
    this.backgroundColor = backgroundColor;
    this.label = label;
  }

  getStyle() {
    console.log(`CheckBox - ${this.backgroundColor} ${this.label}`);
  }
}
