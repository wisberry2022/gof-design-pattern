import { RequestInterface } from "../type.ts";
import { CSHandler } from "./Handler.ts";

export class CustomerServiceAgent extends CSHandler {
  handle(request: RequestInterface) {
    if (request.getType() === "FAQ") {
      console.log("문의사항이 있으신가요? 저한테 물어보세요!");
      return;
    }
    console.log("CS부서 >> 담당부서로 연결해 드리겠습니다!");
    super.handle(request);
  }
}
