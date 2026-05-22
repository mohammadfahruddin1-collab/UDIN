
# 3. FILE script.js

```javascript
const targetDate = new Date("July 12, 2026 08:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        clearInterval(countdown);
    }

}, 1000);


const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.getElementById("invitation")
    .scrollIntoView({
        behavior: "smooth"
    });

});
```

---

# FOTO YANG DISARANKAN

## Background Cover:

* Foto masjid pondok
* Lampu malam pondok
* Santri mengaji siluet
* Kaligrafi samar

## Galeri:

* Muhadhoroh
* Hafalan Qur'an
* Kegiatan kebersihan
* Hadroh
* Pengajian umum
* Foto kebersamaan santri

---

# MUSIK YANG COCOK

Bisa gunakan:

* Sholawat instrumental
* Gambus lembut
* Piano islami
* Maher Zain instrumental

---

# HOSTING GRATIS

Bisa upload di:

* GitHub Pages
* Netlify
* Vercel

---

# BAGIAN YANG NANTI BISA KAMU GANTI

Cari tulisan ini di HTML:

```html
KH. Ahmad Syafi'i
```

Ganti nama kiai.

---

Cari ini:

```javascript
July 12, 2026
```

Ganti tanggal acara.

---

Cari folder:

```text
images/
```

Masukkan foto pondokmu sendiri.
