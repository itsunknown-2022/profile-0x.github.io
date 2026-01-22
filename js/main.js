/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add animation class
    themeButton.classList.add('theme-animate')
    
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

    // Remove animation class after it's done
    setTimeout(() => {
        themeButton.classList.remove('theme-animate')
    }, 500)
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 500,
    reset: false
})

sr.reveal(`.change-theme`, {origin: 'right', distance: '20px', delay: 1000, opacity: 0, duration: 2000, scale: 0.8})
sr.reveal(`.profile__border`, {origin: 'center', scale: 0.5, duration: 1500, opacity: 0})
sr.reveal(`.profile__perfil-container`, {origin: 'center', scale: 0.8, duration: 1500, delay: 200, opacity: 0})
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})
console.log(
  "%c Coder : TuanDz %c",
  'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',
  "font-size:12px;color:#999999;"
);

/*============================ rainbow ========+====================*/
function rainbow(div, text){
  let k = 0;
  let aa = new Array();
  let itsunknown = new Array("#FF0000", "#FF4000", "#FF8000", "#FFC000", "#FFFF00", "#C0FF00", "#80FF00", "#40FF00", "#00FF00", "#00FF40", "#00FF80", "#00FFC0", "#00FFFF", "#00C0FF", "#0080FF", "#0040FF", "#0000FF", "#4000FF", "#8000FF", "#C000FF", "#FF00FF", "#FF00C0", "#FF0080", "#FF0040");
  const startColor = () => {
    for (var b = 0; b < aa.length; b++) {
      document.getElementById(b).style.color = itsunknown[b]
    }
    for (var c = 0; c < itsunknown.length; c++) {
      itsunknown[c - 1] = itsunknown[c]
    }
    itsunknown[itsunknown.length - 1] = itsunknown[-1];
    setTimeout(() => startColor(), 60);
  }
  while (itsunknown.length<text.length){itsunknown=itsunknown.concat(itsunknown);}
  while (k<=text.length){aa[k]=text.charAt(k);k++;}
  for(var d=0;d<aa.length;d++){div.innerHTML+=`<span id='${d}' class='${d}'>${aa[d]}</span>`}
  startColor();
}

const txt = document.getElementById('test');
rainbow(txt, `© 2026 | Developed By \nBundas Andrian`);

/*=============== AUTO CHANGE TEXT (TYPING ANIMATION) ===============*/
const dynamicText = document.getElementById('dynamic-text');
const messages = [
    "life is too short to wait",
    "dream big, work hard",
    "stay hungry, stay foolish",
    "keep pushing forward",
    "make it happen",
    "never give up",
    "believe in yourself",
    "be the change you wish to see",
    "the best is yet to come",
    "happiness is a choice",
    "focus on the good",
    "work hard in silence",
    "your only limit is you",
    "stay positive, work hard",
    "kindness is free",
    "dream it, wish it, do it",
    "don't stop until you're proud",
    "small steps every day",
    "be a warrior, not a worrier",
    "do what you love",
    "choose joy every day",
    "live, laugh, love",
    "every moment matters",
    "be the best version of you",
    "start where you are",
    "use what you have",
    "do what you can",
    "keep it simple",
    "enjoy the little things",
    "grateful heart, happy life",
    "brave & beautiful",
    "magic happens outside your comfort zone",
    "your energy is contagious",
    "shine like the sun",
    "breathe and let go",
    "limitless possibilities",
    "create your own sunshine",
    "the journey is the reward",
    "keep moving forward",
    "you are enough",
    "adventure is calling",
    "peace of mind is wealth",
    "consistency is key",
    "growth over perfection",
    "make today amazing",
    "trust the process"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    if (!dynamicText) return;

    const currentMessage = messages[messageIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        dynamicText.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typeSpeed = 500; // Pause before next
    }

    setTimeout(typeEffect, typeSpeed);
}

if (dynamicText) {
    dynamicText.style.opacity = 1;
    typeEffect();
}
