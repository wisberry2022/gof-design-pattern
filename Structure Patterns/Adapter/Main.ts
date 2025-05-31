import { AdapteeImpl } from "./Adaptee/Adaptee.ts";
import { Adapter } from "./Adapter/Adapter.ts";

const FirstAdaptee = new AdapteeImpl();
const FirstAdapter = new Adapter(FirstAdaptee);

FirstAdapter.display("안녕하세요");
