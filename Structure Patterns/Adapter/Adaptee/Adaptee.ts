import { Adaptee } from "../Type.ts";

export class AdapteeImpl implements Adaptee {
  specificRequest(text: string) {
    console.log("text", text);
  }
}
