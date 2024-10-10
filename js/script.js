document.addEventListener("DOMContentLoaded", function() {
    const text = "Culinary Enthusiast"; // Teks yang akan ditampilkan
    let index = 0; // Indeks untuk melacak posisi karakter yang sedang ditampilkan
    const typingText = document.getElementById("typing-text"); // Mengambil elemen dengan ID 'typing-text'

    // Fungsi untuk menampilkan teks dengan efek pengetikan
    function typeText() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index); // Menambahkan karakter satu per satu
            index++;
            setTimeout(typeText, 100); // Mengatur kecepatan pengetikan
        }
    }
    setTimeout(typeText, 2000);
});

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 5000; // Ubah menjadi 5000 (5 detik)

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click(); // Ubah next.click() menjadi nextDom.click()
}, timeAutoNext)
function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click(); // Ubah next.click() menjadi nextDom.click()
    }, timeAutoNext)
}

// Mulai slider otomatis saat halaman dimuat
showSlider('next');

$(document).ready(function() {
    $('.filter-item').click(function() {
      const value = $(this).attr('data-filter');
  
      if (value === 'all') {
        $('.post-box').show('1000');
      }
      else {
        $('.post-box').not('.' + value).hide('1000');
        $('.post-box').filter('.' + value).show('1000');
      }
    });
});

// Add active to btn
$(".filter-item").click(function() {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });