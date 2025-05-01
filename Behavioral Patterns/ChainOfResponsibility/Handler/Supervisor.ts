import { RequestInterface } from "../type.ts";
import { CSHandler } from "./Handler.ts";

export class Supervisor extends CSHandler {
  handle(request: RequestInterface) {
    if (request.getType() === "REFUND") {
      console.log("환불 요청을 하실건가요? 저한테 물어보세요!");
      return;
    }
    console.log("환불부서 >> 담당부서로 연결해 드리겠습니다!");
    super.handle(request);
  }
}
