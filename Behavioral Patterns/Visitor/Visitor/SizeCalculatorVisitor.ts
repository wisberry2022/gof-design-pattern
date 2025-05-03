import { Directory } from "../FileSystem/Directory.ts";
import { File } from "../FileSystem/File.ts";
import { Visitor } from "../type.ts";

export class SizeCalculatorVisitor implements Visitor {
  calcFileSize(system: File) {
    console.log(`${system.getName()} 용량 - ${system.getSize()}`);
  }

  calcDirSize(system: Directory): void {
    console.log(
      `${system.getName()} 디렉토리 - 파일: ${system.getFilesName()} - 총 용량: ${system.getSize()}`
    );
  }
}
