import { ButtonType, CheckboxType } from "../UI/type.ts";

export interface ComponentFactoryType {
  createButton(text: string): ButtonType;
  createCheckbox(checkbox: string): CheckboxType;
}
