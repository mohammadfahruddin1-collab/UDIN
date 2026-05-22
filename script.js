/* ======================
   PAGE FLIP
====================== */

const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width: 1000,
        height: 700,

        size: "stretch",

        minWidth: 320,
        maxWidth: 2000,

        minHeight: 400,
        maxHeight: 2000,

        showCover: true,

        usePortrait: true,

        mobileScrollSupport: false,

        autoSize: true,

        maxShadowOpacity: 0.3,

        flippingTime: 1000
    }
);

pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);

/* ======================
   OPEN BUTTON
====================== */

document
.getElementById("openBook")
.addEventListener("click", () => {

    pageFlip.flipNext();

});

/* ======================
   COUNTDOWN
====================== */

const targetDate = new Date(
"2026-06-17T06:00:00"
).getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

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
