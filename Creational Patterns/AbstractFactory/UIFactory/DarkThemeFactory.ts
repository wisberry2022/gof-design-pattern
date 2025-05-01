import { DarkButton } from "../UI/Button/DarkButton.ts";
import { DarkCheckbox } from "../UI/CheckBox/DarkCheckbox.ts";
import { ButtonType, CheckboxType } from "../UI/type.ts";
import { ComponentFactory } from "./ComponentFactory.ts";

export class DarkThemeFactory extends ComponentFactory {
  createButton(text: string): ButtonType {
    return new DarkButton("#000", text);
  }

  createCheckbox(label: string): CheckboxType {
    return new DarkCheckbox("#000", label);
  }
}
