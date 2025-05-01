import { ButtonType, CheckboxType } from "../UI/type.ts";
import { ComponentFactoryType } from "./type.ts";

export abstract class ComponentFactory implements ComponentFactoryType {
  abstract createButton(text: string): ButtonType;
  abstract createCheckbox(label: string): CheckboxType;
}
