import { DocumentEditor } from "./Context/DocumentEditor.ts";
import { Edit } from "./States/Edit.ts";
import { Publish } from "./States/Publish.ts";
import { Reviewing } from "./States/Reviewing.ts";

const editor = new DocumentEditor();
editor.setContent("안녕하세요");
editor.read();

const editMode = new Edit();
const reviewMode = new Reviewing();
const publishMode = new Publish();

editor.setState(reviewMode);
editor.setContent("안녕하세요 이택조입니다.");

editor.read();

editor.setContent("이번엔 에러뜰걸?");

editor.read();

editor.setState(publishMode);
editor.setContent("수정할거지롱");

editor.read();

editor.setState(editMode);
editor.setContent("이번엔 편집모드라서 수정가능함 ㅋㅋ");

editor.read();
