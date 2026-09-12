const homeSlides = [
    {
    text: "Welcome to my Personal Website",
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
        image: "homebar3.jpg",
        textColor: "#12102b",
        iconColor: "orange",
        align: "right",
        icon: "fa-solid fa-lightbulb"
    }
];

let currentSlide = 0;
const rotatingText = document.getElementById('rotating-text');
const rotatingIcon = document.getElementById('rotating-icon');
const homeSection = document.getElementById('home');

function applySlide(index) {
    const slide = homeSlides[index];

    homeSection.style.backgroundImage = `url("${slide.image}")`;
    homeSection.style.alignItems = slide.align === "right" ? "flex-end" : "flex-start";
    homeSection.style.textAlign = slide.align;

    rotatingText.style.color = slide.textColor;
    rotatingText.textContent = slide.text;
    rotatingIcon.style.color = slide.iconColor || slide.textColor;

    if (slide.icon) {
        rotatingIcon.className = slide.icon;
        rotatingIcon.style.display = "block";
    } else{
        rotatingIcon.style.display = "none";
    }
}

applySlide(0);

setInterval(() => {
    rotatingText.style.opacity = 0;
    rotatingIcon.style.opacity = 0;

    setTimeout(() => {
        currentSlide = (currentSlide+1) % homeSlides.length;
        applySlide(currentSlide);
        rotatingText.style.opacity = 1;
        rotatingIcon.style.opacity = 1;
    }, 500)
}, 4000);

document.querySelectorAll('.devlog-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const entry = button.closest('.devlog-entry');
        entry.classList.toggle('active');
    });
});
