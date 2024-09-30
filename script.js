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
