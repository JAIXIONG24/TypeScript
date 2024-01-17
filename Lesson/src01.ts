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

/*
配列
配列リテラル
配列の値を作るには配列リテラル([])を使う。
[要素1, 要素2, ...]の形で配列の初期値を設定できる。
*/

const numbers = [1, 2, 3];
 
for (const num of numbers) {
  console.log(num); // 1, 2, 3と出力される
}

/*
条件分岐
TypeScriptではJavaScriptと同様に、条件分岐にはif構文やswitch構文が利用できる。
*/

const score: number = 20;

if (score >= 20) {
    console.log("この結果はif文の結果です。");
} else {
    console.log("この結果はelse文の結果です。");
}

// switch 文

const color: string = "red";
 
switch (color) {
    case "red":
        console.log("色は赤いです。");
        break;

    case "blue":
        console.log("色は青いです。");
        break;

    default:
        console.log("色は赤いと青いと違う色です。");
}
 
// 分割代入により、オブジェクトのプロパティを個別の変数へ代入できる(オブジェクトの分割代入)。

const obj = {
    subject: "Math",
    math_score: 20,
};
   
const { subject, math_score } = obj;
console.log(subject);
console.log(math_score);






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