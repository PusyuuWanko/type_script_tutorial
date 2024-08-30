const suuti:number = 2003;
const mozi:string = "私は平成１５年生まれです。";
const bool:boolean= true;
const time:Date = new Date();
const hairetu:string[] = ["今","あ","な","た","は","何","を","し","て","る","か","な","?"];

let dispHairetu:string = "";
hairetu.forEach((atai)=> {
  dispHairetu += atai;
});
console.log(dispHairetu);

console.log(mozi + "西暦に直すと" + suuti + "年です。");

console.log("現在の時刻は" + time.getTime() + "です。");