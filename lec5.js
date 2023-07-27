// function add() {
//   let a = +prompt("enter 1st number");
//   let b = +prompt("enter 2nd number");
//   let c = a + b;
//   document.write(c);
// }
// add();

// function myfun() {
//   alert("btn was clicked");
//   console.log("btn was clicked");
// }

function per() {
  let tm = document.querySelector("#tm1").value;
  console.log(tm);
  let om = document.querySelector("#om1").value;

  let res = (om / tm) * 100;
  document.write(`yor are got ${res}%  `);
  console.log(`you are got ${res}%`);
}
