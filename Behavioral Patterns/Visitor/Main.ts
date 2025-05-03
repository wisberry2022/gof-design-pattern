import { Directory } from "./FileSystem/Directory.ts";
import { File } from "./FileSystem/File.ts";
import { SizeCalculatorVisitor } from "./Visitor/SizeCalculatorVisitor.ts";

const visitor = new SizeCalculatorVisitor();

const AFile = new File("파일 A", 34);
const BFile = new File("파일 B", 5);
const CFile = new File("파일 C", 115);
const parent = new Directory("디렉토리1");

const DFile = new File("파일 D", 300);

const parent2 = new Directory("두번째 디렉토리");
parent.addFile(AFile);
parent.addFile(BFile);
parent.addFile(CFile);
parent2.addFile(DFile);
parent.addFile(parent2);

AFile.accept(visitor);
BFile.accept(visitor);
CFile.accept(visitor);
DFile.accept(visitor);

parent.accept(visitor);
parent2.accept(visitor);
