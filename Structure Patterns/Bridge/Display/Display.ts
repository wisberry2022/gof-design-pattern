export abstract class Display {
  abstract show(text: string): void;
}

export class ConsoleDisplay extends Display {
  show(text: string) {
    console.log(`Console >>> ${text}`);
  }
}

export class HTMLTagDisplay extends Display {
  show(text: string) {
    console.log(`HTMLTag >>> ${text}`);
  }
}
