import { CustomerServiceAgent } from "./Handler/CustomerServiceAgent.ts";
import { Engineer } from "./Handler/Engineer.ts";
import { Supervisor } from "./Handler/Supervisor.ts";
import { FAQRequest } from "./Request/FAQRequest.ts";
import { RefundRequest } from "./Request/RefundRequest.ts";
import { SupportRequest } from "./Request/SupportRequest.ts";

const CSAgent = new CustomerServiceAgent();
const engineer = new Engineer();
const refund = new Supervisor();

const faqRequest = new FAQRequest();
const techSupportRequest = new SupportRequest();
const refundRequest = new RefundRequest();

CSAgent.setNext(engineer);
engineer.setNext(refund);

console.log(">>>>>>>>>>>>>>>>>>>>>> FAQ");
CSAgent.handle(faqRequest);
console.log(">>>>>>>>>>>>>>>>>>>>>> 기술지원");
CSAgent.handle(techSupportRequest);
console.log(">>>>>>>>>>>>>>>>>>>>>> 환불요청");
CSAgent.handle(refundRequest);
