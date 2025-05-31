import { ConsoleDisplay, Display, HTMLTagDisplay } from "../Display/Display.ts";

export abstract class Displayer {
  protected display: Display;

  constructor(display: Display) {
    this.display = display;
  }

  rawShow(text: string) {
    this.display.show(text);
  }
}
export class ConsoleDisplayer extends Displayer {
  constructor(display: ConsoleDisplay) {
    super(display);
  }

  rawShow(text: string) {
    this.display.show(text);
  }
}

export class HTMLTagDisplayer extends Displayer {
  constructor(display: HTMLTagDisplay) {
    super(display);
  }

  rawShow(text: string) {
    this.display.show(text);
  }
}
