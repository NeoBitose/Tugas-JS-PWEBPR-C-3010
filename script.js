const content = document.getElementById("content")
const title_content = document.getElementById("title-content");
const desc_text = document.getElementById("desc-text");
const box = document.getElementById("box")
const desc_img = document.getElementById("desc-img");
const button_group = document.getElementById("button-group");
const button_true = document.getElementById("button-true");
const button_false = document.getElementById("button-false");

button_true.addEventListener('click', ()=> {
  title_content.innerHTML = "Anda Berbohong!";
  desc_text.innerHTML = "Anda adalah seorang Teknisi";
  box.style.backgroundColor = "#E12E2E";
  desc_img.src = "Assets/teknisi.svg";
  button_group.style.display = 'none';
  content.classList.add("animation-getar");
});

button_false.addEventListener('click', ()=> {
  title_content.innerHTML = "Anda Benar!";
  desc_text.innerHTML = "Anda adalah seorang Mahasiswa";
  box.style.backgroundColor = "#6FD240"
  desc_img.src = "Assets/mahasiswa.svg";
  button_group.style.display = 'none';
  content.classList.add("animation-naikturun");
});
