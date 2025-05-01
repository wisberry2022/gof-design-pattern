import { LightButton } from "../UI/Button/LightButton.ts";
import { LightCheckbox } from "../UI/CheckBox/LightCheckbox.ts";
import { ButtonType, CheckboxType } from "../UI/type.ts";
import { ComponentFactory } from "./ComponentFactory.ts";

export class LightThemeFactory extends ComponentFactory {
  createButton(text: string): ButtonType {
    return new LightButton("#fff", text);
  }

  createCheckbox(label: string): CheckboxType {
    return new LightCheckbox("#fff", label);
  }
}
