let boksikk = document.getElementById("#box");
let boksik = document.getElementById("box3");

let boksik3 = document.getElementById("box4");

let boksik1 = document.getElementById("box2");
document.getElementById("b1").addEventListener("click", () => {
  let id = setInterval(ValueCount, 10);
  {
    document.querySelector("#b3").addEventListener("click", () => {
      boksik.innerHTML = 0;
      boksik1.innerHTML = 0;
      boksik3.innerHTML = 0;
      document.querySelector("#b1").disabled = false;
      clearInterval(id);
      return;
    });
  }

  document.querySelector("#b2").addEventListener("click", () => {
    clearInterval(id);
    document.getElementById("b1").disabled = false;
  });

  document.querySelector("#b1").addEventListener("click", () => {
    document.getElementById("b1").disabled = true;
  });
});

function ValueCount() {
  document.getElementById("b1").disabled = true;
  boksik3.innerHTML++;

  if (boksik3.innerHTML == 100) {
    boksik3.innerHTML = 0;

    boksik.innerHTML++;
  } else if (boksik.innerHTML == 60) {
    boksik.innerHTML = 0;
    boksik1.innerHTML++;
  } else if (boksik1.innerHTML == 60) {
    boksik1.innerHTML = 0;
    boksikk.innerHTML++;
  }
}
