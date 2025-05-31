import { ConsoleDisplay, HTMLTagDisplay } from "./Display/Display.ts";
import { ConsoleDisplayer, HTMLTagDisplayer } from "./DisplayImpl/Displayer.ts";

const consoleDisplayer = new ConsoleDisplayer(new ConsoleDisplay());
const htmlDisplayer = new HTMLTagDisplayer(new HTMLTagDisplay());

consoleDisplayer.rawShow("보기!");
htmlDisplayer.rawShow("보기!");
