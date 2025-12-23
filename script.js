const scriptURL =
  "https://script.google.com/macros/s/AKfycbwLh2F2GykqZEHpE3vfHHz0mqUwmKBXSxOJfjHS2j26nLo8n82E27hpvCsh1pDPxbcZRw/exec";

const form = document.getElementById("depositForm");
const resultArea = document.getElementById("resultArea");
const ticketNumberEl = document.getElementById("ticketNumber");
const detailInfo = document.getElementById("detailInfo");
const namaInput = document.getElementById("nama");
const barangInput = document.getElementById("barang");
const btnSubmit = document.getElementById("btnSubmit");
const loadingText = document.getElementById("loadingText");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nama = namaInput.value;
  const barang = barangInput.value;

  const data = new FormData();
  data.append("nama", nama);
  data.append("barang", barang);

  btnSubmit.disabled = true;
  btnSubmit.innerText = "Sedang Memproses...";
  loadingText.style.display = "block";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: data,
    });

    const responseData = await response.json();

    ticketNumberEl.innerText = responseData.noTiket;
    detailInfo.innerText = `A.n ${nama} - ${barang}`;

    form.style.display = "none";
    resultArea.style.display = "block";
  } catch (error) {
    alert("Gagal menyimpan data");
    btnSubmit.disabled = false;
    btnSubmit.innerText = "Ambil Nomor Tiket";
    loadingText.style.display = "none";
  }
});
