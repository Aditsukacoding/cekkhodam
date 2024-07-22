function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value;
    if (!nameInput) {
        Swal.fire({
            title: 'GAK BOLEH KOSONG WOIIIIII 😤😤',
            icon: 'error',
            confirmButtonText: 'OKEYY'
        });
        return;
    }
    document.getElementById('loading').style.display = 'block'; // Tampilkan spinner
    setTimeout(() => {
        const khodams = [
            { name: "Joko kopling" },
            { name: "Dzaki indomie" },
            { name: "Alok hamil" },
            { name: "Es lilin" },
            { name: "Alien" },
            { name: "Manusia purba" },
            { name: "Sepatu" },
            { name: "Jepit rambut" },
            { name: "Tuperware" },
            { name: "Gelas" },
            { name: "Piring" },
            { name: "Kotak pensil" },
            { name: "Minyak telon" },
            { name: "Gunung kembar" },
            { name: "Guling" },
            { name: "Magicom" },
            { name: "Lemari" },
            { name: "Kipas angin" },
            { name: "Iwak wader" },
            { name: "Gurami bakar" },
            { name: "Ayam bumbu rujak" },
            { name: "Kosong" },
            { name: "Jokowi" },
            { name: "Kardus" },
            { name: "Rambutan" },
            { name: "Sandal japit" },
            { name: "Beruang nolep" },
            { name: "Kelinci rabies" },
            { name: "Manuk" },
            { name: "Ambatron" },
            { name: "Gofood" },
            { name: "Sepatu terbang" },
            { name: "Kelly bencong" },

        // Tambahkan khodam lainnya sesuai kebutuhan
        ];
        const khodam = khodams[Math.floor(Math.random() * khodams.length)];
        document.getElementById('khodamName').innerText = `Khodam: ${khodam.name}`;
        document.getElementById('result').style.display = 'block';
        document.getElementById('loading').style.display = 'none'; // Sembunyikan spinner
    }, 2000); // Delay untuk simulasi loading
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').style.display = 'none';
}