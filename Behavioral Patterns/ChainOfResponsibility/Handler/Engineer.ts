import { RequestInterface } from "../type.ts";
import { CSHandler } from "./Handler.ts";

export class Engineer extends CSHandler {
  handle(request: RequestInterface) {
    if (request.getType() === "SUPPORT") {
      console.log("기술지원이 필요하신가요? 저한테 물어보세요!");
      return;
    }
    console.log("기술부서>> 담당부서로 연결해 드리겠습니다!");
    super.handle(request);
  }
}
