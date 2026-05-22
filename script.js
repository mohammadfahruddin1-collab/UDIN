const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width: window.innerWidth,
        height: window.innerHeight,

        size: "stretch",

        minWidth: window.innerWidth,
        maxWidth: window.innerWidth,

        minHeight: window.innerHeight,
        maxHeight: window.innerHeight,

        showCover: false,

        usePortrait: true,

        mobileScrollSupport: false,

        autoSize: true,

        maxShadowOpacity: 0.2,

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
