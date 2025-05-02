import { ChatRoomMediatorImpl } from "./ChatRoomMediator/ChatRoomMediatorImpl.ts";
import { UserImpl } from "./User/UserImpl.ts";

const TSChatServer = new ChatRoomMediatorImpl();

const AUser = new UserImpl("안영이", TSChatServer);
const BUser = new UserImpl("장백기", TSChatServer);
const CUser = new UserImpl("한석율", TSChatServer);

AUser.createChatRoom("동기 톡방");

BUser.join("동기 톡방");
CUser.join("동기 톡방");

CUser.sendMessage("ㅎㅇ 나 석율임");
BUser.sendMessage("안녕하세요 장백기입니다.");
AUser.sendMessage("나는 안영이");

CUser.createChatRoom("새로운 톡방");
