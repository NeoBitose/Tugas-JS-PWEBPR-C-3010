var content = document.getElementById("content")
var title_content = document.getElementById("title-content");
var desc_text = document.getElementById("desc-text");
var box = document.getElementById("box")
var desc_img = document.getElementById("desc-img");
var button_group = document.getElementById("button-group");

title_content.innerHTML = "Yakin kan Profesi Anda !";
desc_text.innerHTML = "Apakah anda seorang Detective ?";
desc_img.src = "Assets/detektif.svg"

function trueButton(){
  title_content.innerHTML = "Anda Berbohong!";
  desc_text.innerHTML = "Anda adalah seorang Teknisi";
  box.style.backgroundColor = "#E12E2E";
  desc_img.src = "Assets/teknisi.svg";
  button_group.style.display = 'none';
  content.classList.add("animation-getar");
}

function falseButton(){
  title_content.innerHTML = "Anda Benar!";
  desc_text.innerHTML = "Anda adalah seorang Mahasiswa";
  box.style.backgroundColor = "#6FD240"
  desc_img.src = "Assets/mahasiswa.svg";
  button_group.style.display = 'none';
  content.classList.add("animation-naikturun");
}