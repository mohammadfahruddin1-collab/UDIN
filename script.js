/* =========================
   PAGE FLIP 3D
========================= */

const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width: 900,
        height: 600,

        size: "stretch",

        minWidth: 315,
        maxWidth: 1200,

        minHeight: 400,
        maxHeight: 800,

        showCover: true,

        mobileScrollSupport: true,

        flippingTime: 1200,

        usePortrait: true,

        startPage: 0,

        autoSize: true,

        maxShadowOpacity: 0.5
    }
);

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);

/* =========================
   OPEN BUTTON
========================= */

document
.getElementById("openBook")
.addEventListener("click", () => {

    pageFlip.flipNext();

});

/* =========================
   COUNTDOWN
========================= */

const targetDate = new Date(
    "2026-06-17T06:00:00"
).getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        return;
    }

    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    document.getElementById(
        "days"
    ).innerHTML = days;

    document.getElementById(
        "hours"
    ).innerHTML = hours;

    document.getElementById(
        "minutes"
    ).innerHTML = minutes;

    document.getElementById(
        "seconds"
    ).innerHTML = seconds;
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);
