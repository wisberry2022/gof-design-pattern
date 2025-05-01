import { DarkThemeFactory } from "./UIFactory/DarkThemeFactory.ts";
import { LightThemeFactory } from "./UIFactory/LightThemeFactory.ts";

const LightTheme = new LightThemeFactory();
const DarkTheme = new DarkThemeFactory();

const lightButton = LightTheme.createButton("하얀색 버튼");
const darkButton = DarkTheme.createButton("검은색 버튼");

const lightCheckbox = LightTheme.createCheckbox("하얀색 체크박스");
const darkCheckbox = DarkTheme.createCheckbox("검은색 체크박스");

lightButton.getStyle();
darkButton.getStyle();

lightCheckbox.getStyle();
darkCheckbox.getStyle();
