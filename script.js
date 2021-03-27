let angka = 12;

let siswa = [
  {
    nama: "A",
    kelas: "RPL",
  },
  {
    nama: "B",
    kelas: "RPL",
  },
  {
    nama: "C",
    kelas: "RPL",
  },
];

for (index in siswa) {
  console.log(siswa[index].nama);
}

function tambahAngka(num) {
  return num + 2;
}
console.log("ANGKA", angka);
console.log("ANGKA", tambahAngka(angka));

// const data = document.getElementById("title");

// const databaru = data.innerText;

// data.innerHTML = databaru + " Pontem";
// // console.log(data.innerHTML);

const btn = document.getElementById("buttonClick");

let data = document.getElementById("cat").innerText;
// localStorage.setItem("Cat", data);
let cat = localStorage.getItem("Cat");
if (cat) {
  console.log("DATA", cat);
  document.getElementById("cat").innerHTML = cat;
  //   data.innerText++;
}

btn.addEventListener("click", function (event) {
  localStorage.setItem("Cat", data++);
  data.innerHTML = data;
});
