const homeslides = [
    {
    text: "Welcome to my Personal Websites",
    image: "homebar1.jpg",
    textColor: "#ffffff",
    align: "left",
    icon: ""
    },
    {
        text: "Exploring Robotics Automation & IOT",
        image: "homebar2.jpg",
        textColor: "#ffffff",
        align: "left",
        icon: "fa-solid fa-robot"
    },

    {
        text: "Turning Ideas Into Real Tech Projects",
        image: "background3.jpg",
        textColor: "#12102b",
        align: "right",
        icon: "fa-solid fa-lightbulb"
    }
];

let currentslide = 0;
const rotatingText = document.getElementByld('rotating-text');
const rotatingIcon = document.getElementByld('rotating-icon');
const homesection = document.getElementByld('home');

function applyslide(index) {
    const slide = homeslides[index];

    homesection.style.backgroundimage = 'Url("${slide.image}")';
    homesection.style.alignitems = slide.align === "right" ? "flex-end" : "flex-start";
    homesection.style.textAlign = slide.align;

    rotatingText.style.color = slide.textColor;
    rotatingText.textContent = slide.text;

    if (slide.icon) {
        rotatingIcon.className = slide.icon;
        rotatingIcon.style.display = "block";
    } else{
        rotatingIcon.style.display = "none";
    }
}

applyslide(0);

setInterval(() => {
    rotatingText.style.opacity = 0;
    rotatingText.style.opacity = 0;

    setTimeout(() => {
        currentslide = (currentSlide+1) % homeslides.length;
        applySlide(currentSlide);
        rotatingText.style.opacity = 1;
        rotatingIcon.style.opacity = 1;
    }, 500);
}, 4000);
