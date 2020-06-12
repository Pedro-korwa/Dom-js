// ? BErmain dengan Warna Dan Berinteraksi Dengan Dom//
const ubah = document.getElementById("ajaib");
ubah.addEventListener("click", function () {
  // document.body.style.backgroundColor = "lime";
  document.body.classList.toggle("biru-muda");
});

//?Membuat button baru melalui Vanila JavaScript//
const random = document.createElement("button");
const tulisan = document.createTextNode("acak warna");
random.appendChild(tulisan);
random.setAttribute("type", "button");
ubah.after(random);

random.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + " , " + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + " , " + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + " , " + b + ")";
});

//! Mengatur Pergerakan Mouse Pada layar//

document.body.addEventListener("mousemove", function (napi) {
  //? Mencari tau Posisi Mouse yang di gunakan oleh user//
  // console.log(napi.clientX);
  //? mencari ukuran brouser
  // console.log(window.innerWidth);
  const xPos = Math.round((napi.clientX / window.innerWidth) * 255);
  const yPos = Math.round((napi.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
