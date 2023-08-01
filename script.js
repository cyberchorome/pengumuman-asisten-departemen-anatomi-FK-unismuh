const dataMahasiswa = [
    { nim: "105421107721", nama: "Anugrah Febriani", karyaTulis: "Myologi Extremitas Superior", lulus: true },
    { nim: "105421108921", nama: "Zalfaa Zaahirah Ramli", karyaTulis: "Myologi Extremitas Inferior", lulus: true },
    { nim: "105421113121", nama: "AISYAH NIDA SALSABILA", karyaTulis: "Plexus Brachialis", lulus: true },
    { nim: "105421102521", nama: "Andi Azzahra Aqilah M", karyaTulis: "Plexus Lumbosacralis", lulus: true },
    { nim: "105421103021", nama: "Rahma alfiah", karyaTulis: "Vaskularisasi Extremitas Superior", lulus: true },
    { nim: "105421105921", nama: "Ghani Ghazali", karyaTulis: "Vaskularisasi Extremitas Inferior", lulus: true },
    { nim: "105421106921", nama: "ANDI MUHAMMAD FADHEL", karyaTulis: "Sistem Respirasi", lulus: true },
    { nim: "105421111821", nama: "Andreas Yubilium Moa", karyaTulis: "Sistem Kardiovascular", lulus: true },
    { nim: "105421113221", nama: "ANISA MAYAWATI B. LANGODAY", karyaTulis: "Sistem Urogenitalia", lulus: true },
    { nim: "105421105121", nama: "Wa Ode Jibrah Safira", karyaTulis: "Sistem Gastroenterohepatologi", lulus: true },
    { nim: "105421108721", nama: "Muthi'ah Fahmiatul Ummuniah", karyaTulis: "Sistem Neurologi", lulus: true },
    { nim: "105421101821", nama: "Rosmila Sari", karyaTulis: "Sistem Endokrin", lulus: true },
    { nim: "105421110021", nama: "Rezky Wadiah B", karyaTulis: "AIK Gerakan Shalat", lulus: true },
    { nim: "105421115221", nama: "Harits Herman", karyaTulis: "Myologi Extremitas Superior", lulus: true },
    { nim: "105421114821", nama: "Fadlia Adila Hafza", karyaTulis: "Myologi Extremitas Inferior", lulus: true },
    { nim: "105421103521", nama: "Miftahul Jannah", karyaTulis: "Plexus Brachialis", lulus: true },
    { nim: "105421108221", nama: "Sarah Febrya Noor", karyaTulis: "Plexus Lumbosacralis", lulus: true },
    { nim: "105421114921", nama: "Titin Vanna", karyaTulis: "Vaskularisasi Extremitas Superior", lulus: true },
    { nim: "105421108821", nama: "Dian Fitriani Hairuddin", karyaTulis: "Vaskularisasi Extremitas Inferior", lulus: true },
    { nim: "105421111621", nama: "Muh. Naufal Mufadhdhol Najhik", karyaTulis: "Sistem Respirasi", lulus: true },
    { nim: "105421107321", nama: "Fatimah Azzahra DS Makka", karyaTulis: "Sistem Kardiovascular", lulus: true },
    { nim: "105421107921", nama: "Amalia Kartika Syahrir", karyaTulis: "Sistem Urogenitalia", lulus: true },
    { nim: "105421104521", nama: "Natasya Kurnia Mur", karyaTulis: "Sistem Gastroenterohepatologi", lulus: true },
    { nim: "105421109821", nama: "Afifah Noor Andini", karyaTulis: "Sistem Neurologi", lulus: true },
    { nim: "105421107622", nama: "Andi Rifky Dwi Wanandi", karyaTulis: "Sistem Endokrin", lulus: true },
    { nim: "195421106022", nama: "A. Deswita Alisza Aprianti", karyaTulis: "AIK Gerakan Shalat", lulus: true },
    { nim: "105421110222", nama: "Shalsa Anindita Laga", karyaTulis: "Myologi Extremitas Superior", lulus: true },
    { nim: "105421104422", nama: "Ni Ketut Puan Rahmadani Sucipta", karyaTulis: "Myologi Extremitas Inferior", lulus: true },
    { nim: "105421110722", nama: "Nabila Salzabila Rauf", karyaTulis: "Plexus Brachialis", lulus: true },
    { nim: "105421117922", nama: "Nurul Hikmah Aulia", karyaTulis: "Plexus Lumbosacralis", lulus: true },
    { nim: "105421103922", nama: "Ikhwandi Chandra Nugraha", karyaTulis: "Vaskularisasi Extremitas Superior", lulus: true },
    { nim: "105421100722", nama: "Dian Eka Putri", karyaTulis: "Vaskularisasi Extremitas Inferior", lulus: true },
    { nim: "105421118422", nama: "Muhammad Amrullah", karyaTulis: "Sistem Respirasi", lulus: true },
    { nim: "105421105522", nama: "Wanda Faizah Aqillah S", karyaTulis: "Sistem Kardiovascular", lulus: true },
    { nim: "105421101322", nama: "Alisha Zahra Saadiya", karyaTulis: "Sistem Urogenitalia", lulus: true },
    { nim: "105421100322", nama: "Zharifah Rahmadina", karyaTulis: "Sistem Gastroenterohepatologi", lulus: true },
    { nim: "105421102922", nama: "Shadira Dara Nur Halizah Anggraeni", karyaTulis: "Sistem Neurologi", lulus: true },
    { nim: "105421104622", nama: "Putri Fatima Azzahra", karyaTulis: "Sistem Endokrin", lulus: true },
    { nim: "105421104722", nama: "Andi Mukrimah Nur Rahmat", karyaTulis: "AIK Gerakan Shalat", lulus: true },
    { nim: "105421105422", nama: "Alifya Mugni Azzahra", karyaTulis: "Myologi Extremitas Superior", lulus: true },
    { nim: "105421121922", nama: "Evi Mulia Rezki", karyaTulis: "Myologi Extremitas Inferior", lulus: true },
    { nim: "105421122222", nama: "Surezky Amalia", karyaTulis: "Plexus Brachialis", lulus: true },
    { nim: "105421106922", nama: "Nur Sriharni Syam", karyaTulis: "Plexus Lumbosacralis", lulus: true },
    { nim: "105421110422", nama: "Ridha Novriyana Bhakti", karyaTulis: "Vaskularisasi Extremitas Superior", lulus: true },
    { nim: "105421121922", nama: "Evi Mulia Rezki", karyaTulis: "Myologi Extremitas Inferior", lulus: true },
    { nim: "105421122222", nama: "Surezky Amelia", karyaTulis: "Plexus Brachialis", lulus: true },
    { nim: "105421101721", nama: "Sunarti Anatza", karyaTulis: "Sistem Endokrin", lulus: true },
    { nim: "105421112221", nama: "Nurul Amelia. R", karyaTulis: "AIK Gerakan Shalat", lulus: true },
    { nim: "105421112021", nama: "Mustika Ratu Rahma Sapri", karyaTulis: "Myologi Extremitas Superior", lulus: true },
    { nim: "105421105521", nama: "Jihan Nur Rahmah Suharto", karyaTulis: "Myologi Extremitas Inferior", lulus: true },
    { nim: "105421115421", nama: "Muhammad Putra Jaya Fadli Syam", karyaTulis: "Plexus Brachialis", lulus: true },
    { nim: "105421109421", nama: "Firdah Sri Anugrah", karyaTulis: "Plexus Lumbosacralis", lulus: true },
    { nim: "105421108521", nama: "Lany Agrivina Ruslan", karyaTulis: "Vaskularisasi Extremitas Superior", lulus: true },
    { nim: "105421106221", nama: "Waode Syafa Aina Tamsila", karyaTulis: "Vaskularisasi Extremitas Inferior", lulus: true },
    { nim: "105421110921", nama: "Risal Anugrah", karyaTulis: "Sistem Respirasi", lulus: true },
    { nim: "105421115321", nama: "Nur Hikmah Anugrah Tahir", karyaTulis: "Sistem Kardiovascular", lulus: true },
    { nim: "105421106621", nama: "Mutmainna Fadillah", karyaTulis: "Sistem Urogenitalia", lulus: true },
    { nim: "105421105221", nama: "La Ode Muh Isya Cansero", karyaTulis: "Sistem Gastroenterohepatologi", lulus: true },
    { nim: "105421103321", nama: "Alif Yasir", karyaTulis: "Sistem Neurologi", lulus: true },
    { nim: "105421118522", nama: "Afifah Magfirah Jafar", karyaTulis: "Vaskularisasi Extremitas Inferior", lulus: true },
    { nim: "105421107322", nama: "Muhammad Hidayat Nurwahid", karyaTulis: "Sistem Respirasi", lulus: true },
    { nim: "105421103122", nama: "Khairun Nafiah Ahliddin", karyaTulis: "Sistem Kardiovascular", lulus: true },
    { nim: "105421107022", nama: "Fakhrana Aris", karyaTulis: "Sistem Urogenitalia", lulus: true },
];

const formNIM = document.getElementById("formNIM");
const resultDiv = document.getElementById("result");

formNIM.addEventListener("submit", (e) => {
    e.preventDefault();
    const nimInput = document.getElementById("nim");
    const nim = nimInput.value;
    const mahasiswa = dataMahasiswa.find((m) => m.nim === nim);
    if (mahasiswa) {
        showResult(mahasiswa);
    } else {
        showResult({ nama: "-", karyaTulis: "-", lulus: false });
    }
    nimInput.value = "";
});

function showResult(mahasiswa) {
    const statusLulus = mahasiswa.lulus ?  "<strong><span class='passed'> Lulus</span></strong>": "<strong><span class='not-passed'>Tidak Lulus</span></strong>";
    resultDiv.innerHTML = `
        <h2>Hasil Pengumuman:</h2>
        <p><strong>Keterangan:</strong> ${statusLulus}</p>
        <p><strong>Nama:</strong> ${mahasiswa.nama}</p>
        <p><strong>Karya Tulis Ilmiah:</strong> ${mahasiswa.karyaTulis}</p>
    `;
}
