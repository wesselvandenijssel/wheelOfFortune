function spin() {
  var x = 1024;
  var y = 9999;
  var deg = Math.floor(Math.random() * (x - y)) + y;
  document.getElementById("box").style.transform = "rotate(" + deg + "deg)";
  console.log(deg);

  var element = document.getElementById("mainbox");
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);
}
function update() {
  let values = [];
  for (a = 1; a < 9; a++) {
    values.push(document.getElementById("input" + a).value);
  }
  for (let v = 1; v < 9; v++) {
    document.getElementById("e"+v).innerHTML = "<b>" + values[v-1] + "</b>";
  }
}