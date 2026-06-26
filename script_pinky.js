const semuaTombol = document.querySelectorAll(".btn-tambah");

semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {

    // Ambil nama produk dari tabel
    const namaProduk =
      tombol.parentElement.parentElement.children[0].textContent;

    // Ubah tombol saat diklik
    tombol.textContent = "✅ Ditambahkan";
    tombol.style.backgroundColor = "#531448";

    // Notifikasi alert
    alert(namaProduk + " berhasil ditambahkan ke keranjang 🩷");

    // Kembalikan tombol seperti semula
    setTimeout(function () {
      tombol.textContent = "+ Tambah";
      tombol.style.backgroundColor = "#ff90e0";
    }, 1500);
  });
});



const formKontak = document.getElementById("form-kontak");
const pesanSukses = document.getElementById("pesan-sukses");

// Sembunyikan pesan sukses saat awal
pesanSukses.style.display = "none";

formKontak.addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil isi input
  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const pesan = document.getElementById("pesan").value;

  // Validasi sederhana
  if (nama === "" || telepon === "" || pesan === "") {
    alert("⚠️ Semua form wajib diisi!");
    return;
  }

  // Tampilkan pesan sukses
  pesanSukses.style.display = "block";

  // Reset form
  formKontak.reset();

  // Hilangkan pesan sukses setelah 2 detik
  setTimeout(function () {
    pesanSukses.style.display = "none";
  }, 2000);
});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

  if (window.scrollY > 20) {
    navbar.style.backgroundColor = "#ffc5f2";
    navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  } else {
    navbar.style.backgroundColor = "#ffd4f2";
    navbar.style.boxShadow = "none";
  }

});


const heroImg = document.querySelector(".hero-img");

heroImg.addEventListener("mouseover", function () {
  heroImg.style.transform = "scale(1.05)";
  heroImg.style.transition = "0.3s";
});

heroImg.addEventListener("mouseout", function () {
  heroImg.style.transform = "scale(1)";
});