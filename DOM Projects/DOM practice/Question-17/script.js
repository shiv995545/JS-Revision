const in01 = document.getElementById("in01");

let count = 0

in01.addEventListener("keydown", function (event) {
  if (event.key === "Backspace") {
    if(count > 0)
        count--
    document.getElementById("demo").innerHTML = `${count}`;
  }else{
    count++
    document.getElementById("demo").innerHTML = `${count}`;
  }
});
