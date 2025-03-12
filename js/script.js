// ini file js

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

// lightbox
// Open Lightbox
function openLightbox(imgSrc) {
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Attach Click Event to All Images
document.querySelectorAll(".achievement-content .column img").forEach(img => {
    img.addEventListener("click", function () {
        openLightbox(this.src);
    });
});



function replaceName() {
  let name = prompt("Please Enter your name", "Ramadhan");
  document.getElementById("name").innerHTML = name;
}

// function
document.getElementById("tombol").addEventListener("click", function () {
  replaceName();
});

let nameInput = document.getElementById("name-input");

document.getElementById("kirim").addEventListener("click", function () {
  const name = nameInput.value;

  if (name == "") {
    document.getElementById("error-name").innerHTML =
      "Nama tidak boleh Kosong!";
  } else {
    document.getElementById("name").innerHTML = nama;
  }
});

function validateForm() {
    const name = document.forms['message-form']['name-input'].value;
    const birthDate = document.forms['message-form']['birth-input'].value;
    const messages = document.forms['message-form']['messages'].value;

    let gender = "";
    let genderMale = document.getElementById("male").checked;
    let genderFemale = document.getElementById("female").checked;

    let isValid = true; // untuk validasi

    // validate Name
    if (name.trim() === '') {
        document.getElementById("error-name").innerText = "Nama tidak boleh kosong!";
        isValid = false;
    } else {
        document.getElementById("error-name").innerText = "";
    }

    // validate Gender
    if (genderMale) {
        gender = "Laki-laki";
    } else if (genderFemale) {
        gender = "Perempuan";
    } else {
        document.getElementById("error-gender").innerText = "Pilih jenis kelamin!";
        isValid = false;
    }

    // hapus pesan error gender kalau sudah dipilih
    checkGender();

    //  stop pengiriman form jika tidak valid
    if (!isValid) {
        return false;
    }

    // update ui jika valid
    setName(name);
    setSenderUI(name, birthDate, gender, messages);

    return false; // mencegah refresh halaman
}


function deleteErrorGender() {
  document.getElementById("error-gender").innerText = ""; // Clear error message
}

function checkGender() {
    let genderMale = document.getElementById("male").checked;
    let genderFemale = document.getElementById("female").checked;
  
    if (genderMale || genderFemale) {
      deleteErrorGender();
    }
  }
  

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}

function setName(name) {
  document.getElementById("name").innerHTML = name;
  document.getElementById("error-name").innerHTML = "";
}

// lightbox js
