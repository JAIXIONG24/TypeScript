// TypeScript Data type
/*
基本的な型
プリミティブ型
boolean: 真偽値。
number: 数値。
string: 文字列。
bigint: 大きな整数。
symbol: 一意の値を示す。
undefined: 値が定義されていない状態を示す。
null: 値が存在しない状態を示す。
*/
const message : string = "Hello World!";
const isReady : boolean = false;
const age: number = 20;
const fullName: string = "Taro Narita";
const uniqueSymbo: symbol = Symbol("unique");
const notDefined: undefined = undefined;
const empty: null = null;


/*
特殊な型
any: 何でも代入できる型。型が不明な場合に使用する。その値に対する操作の制限がなく、型の安全性は弱まる。
unknown: any型と似て、何でも代入できる型。その値に対する操作は制限され、型の安全性が保たれる。
void: 値が存在しないことを示す。関数が何も返さない場合に使用する。
never: 決して何も返さないことを示す。エラーを投げる関数や無限ループの関数の戻り値として使用する。
*/

const x: any = 100;
console.log(x * 3); // 出力　：　300

const y: unknown = 200; // 代入できる
// console.log(y * 2); // 操作できない

// 戻り値のない関数
function doSomething(): void{

}

// 戻り値を返すことがありえない関数
function throwError(): never{
    throw new Error();
}



function add(a : number, b : number): number{
    return a + b;
}

console.log(fullName);
console.log(age);
console.log(message);
console.log(add(10, 50));

/*
How to compile run Typescript with ts-node 
ts-node [fileName].ts 
*/