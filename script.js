particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// let logo = document.querySelector("#logo");
// let logoArray = [ "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Fface3.svg?v=1634494868770", 
//                  "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Fface5.svg?v=1634494868531", 
//                  "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Fface8.svg?v=1634494868882", 
//                  "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Fface7.svg?v=1634494868700", 
//                  "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Fface6.svg?v=1634494868659", 
//                  "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Fface5.svg?v=1634494868531", 
//                  "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Fface4.svg?v=1634494868531"];
// let b=0;
// logo.addEventListener("mouseenter", ()=> { 
//     b++;
//         if (b>logoArray.length-1) {
//             b=0
//         }
//     document.querySelector('#logo').src=logoArray[b];
// });
// logo.addEventListener("click", ()=> { 
//     b++;
//         if (b>logoArray.length-1) {
//             b=0
//         }
//     document.querySelector('#logo').src=logoArray[b];
// });


// let logoOne = document.querySelector("#logoOne");
// let logoArrayOne = ["https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Flike111.svg?v=1634240679046",
//                     "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Flike222.svg?v=1634240679046", 
//                     "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Flike333.svg?v=1634240679145", 
//                     "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Flike111.svg?v=1634240679046", 
//                     "https://cdn.glitch.me/c9f6a575-f4bf-432e-91ea-d12f3bd25314%2Flike.svg?v=1634240679046"];
// let c=0;
// logoOne.addEventListener("mouseover", ()=> { 
//     c++;
//         if (c>logoArrayOne.length-1) {
//             c=0
//         }
//     document.querySelector('#logoOne').src=logoArrayOne[c];
// });

// logoOne.addEventListener("click", ()=> { 
//     c++;
//         if (c>logoArrayOne.length-1) {
//             c=0
//         }
//     document.querySelector('#logoOne').src=logoArrayOne[c];
// });

let $body = $('body'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');


function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {

	let sxPos = (cx / $body.width()*100 - 50)*2 ;
	let syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -500",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.08 * sxPos,
		rotationX: 0.09 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -500",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	tilt($body.width()/2, $body.height()/2);
})
initTilt();
console.clear();

window.onscroll = function() {
    myFunctionSticky()
};
let navbar = document.querySelector("#myNav");
let sticky = navbar.offsetTop;
function myFunctionSticky() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}

function myFunctionMobile() {
    let links = document.querySelector("#hidden");
    if (links.style.display == "block" && window.innerWidth <= 1370) {
        links.style.display = "none";
    }
    else {
        links.style.display = "block";
    }
};
function myFunctionMobilePlus() {
    let links = document.querySelector("#hidden");
    if (links.style.display == "block") {
        links.style.display = "none";
    }
    else {
        links.style.display = "block";
    }
};



let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrapp">'+this.txt+'</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
    };

window.onload = function() {
    let elements = document.querySelectorAll(".txt-rotate");
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrapp { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
    };

let ctt = document.querySelector("#ctt");
ctt.addEventListener("click", ()=>{
    let hiddenform = document.querySelector(".hiddenform");
    hiddenform.style.display = "block";
});

let fermer = document.querySelector("#fermer");
fermer.addEventListener("click", ()=>{
    let hiddenform = document.querySelector(".hiddenform");
    hiddenform.style.display = "none";
});

let ctt2 = document.querySelector("#ctt2");
ctt2.addEventListener("click", ()=>{
    let hiddenform2 = document.querySelector(".hiddenform2");
    hiddenform2.style.display = "block";
});

let fermer2 = document.querySelector("#fermer2");
fermer2.addEventListener("click", ()=>{
    let hiddenform2 = document.querySelector(".hiddenform2");
    hiddenform2.style.display = "none";
});



function flyBig() {

    if (window.innerWidth <= 500) {
        gsap.fromTo(".fly",{x:-300, y:200}, {x:400, y:-100, duration:10, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:700,y:-100, rotate:-10}, {x:-500, y:-350, duration:8, repeat:-1, ease: "none", delay:6, rotate:10, repeatDelay:5});
    }

    else if (window.innerWidth <= 800) {
        gsap.fromTo(".fly",{x:-10,y:200}, {x:790, y:-100, duration:20, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1000, rotate:-10}, {x:-500, y:-250, duration:8, repeat:-1, ease: "none", delay:5, rotate:10, repeatDelay:6});
    }

    else if (window.innerWidth <= 1030) {
        gsap.fromTo(".fly",{x:-10,y:200}, {x:1000, y:-100, duration:20, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1000, rotate:-10}, {x:-500, y:-250, duration:8, repeat:-1, ease: "none", delay:5, rotate:10, repeatDelay:6});
    }

    else if (window.innerWidth <= 1370) {
        gsap.fromTo(".fly",{x:-10,y:200}, {x:1300, y:-100, duration:30, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1300, rotate:-10}, {x:-500, y:-250, duration:12, repeat:-1, ease: "none", delay:6, rotate:10, repeatDelay:10});
    }
    else  {
        gsap.fromTo(".fly",{x:-200,y:200}, {x:1600, y:-100, duration:30, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1600, rotate:-10}, {x:-500, y:-250, duration:12, repeat:-1, ease: "none", delay:6, rotate:10, repeatDelay:10});
    }

}
flyBig();

let modal = document.getElementById("myModal");
let btnMod = document.querySelector(".flyOne");
let span = document.getElementsByClassName("close")[0];


btnMod.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}




let modalTwo = document.getElementById("myModalTwo");
let btnModTwo = document.querySelector(".fly");
let spanTwo = document.getElementsByClassName("closeTwo")[0];


btnModTwo.onclick = function() {
    modalTwo.style.display = "block";
}

spanTwo.onclick = function() {
    modalTwo.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal || event.target == modalTwo) {
        modal.style.display = "none";
        modalTwo.style.display = "none";
    }
};





// const btnRu = document.querySelector("#btnRu");
// const btnEn = document.querySelector("#btnEn");
// const btnFr = document.querySelector("#btnFr");

// const graphiste = document.querySelector(".graphiste");
const me = document.querySelector(".me");
const applications = document.querySelector(".applications");
const web = document.querySelector(".web");

const contact = document.querySelector(".contact");
const visit = document.querySelector(".visit");
const travail = document.querySelector(".travail");
const linelink = document.querySelector(".linelink");
const contactMe = document.querySelector(".contactMe");
const hiddenlabelmail = document.querySelector(".hiddenlabelmail");
const hiddenlabelmessage = document.querySelector(".hiddenlabelmessage");
const envoyer = document.querySelector(".send");
const myApplications = document.querySelector(".myApplications");
const easy = document.querySelector(".easy");
const webRazdel = document.querySelector(".webRazdel");
const webJob = document.querySelector(".webJob");
// const logosRazdel = document.querySelector(".logosRazdel");
// const logosTravail = document.querySelector(".logosTravail");

// const flyerRazdel = document.querySelector(".flyerRazdel");
// const flyerTravail = document.querySelector(".flyerTravail");

// const tarifsRazdel = document.querySelector(".tarifsRazdel");
// const tarifsTravail = document.querySelector(".tarifsTravail");

const un = document.querySelector(".un");
const unUn = document.querySelector(".unUn");
const deux = document.querySelector(".deux");
const deuxDeux = document.querySelector(".deuxDeux");
const trois = document.querySelector(".trois");
const troisTrois = document.querySelector(".troisTrois");
const quatre = document.querySelector(".quatre");
const quatreQuatre = document.querySelector(".quatreQuatre");
const cinq = document.querySelector(".cinq");
const cinqCinq = document.querySelector(".cinqCinq");
const sixx = document.querySelector(".sixx");
const sixxSixx = document.querySelector(".sixxSixx");
const sept = document.querySelector(".sept");
const septSept = document.querySelector(".septSept");
const huit = document.querySelector(".huit");
const huitHuit = document.querySelector(".huitHuit");
const neuf = document.querySelector(".neuf");
const neufNeuf = document.querySelector(".neufNeuf");
const dix = document.querySelector(".dix");
const dixDix = document.querySelector(".dixDix");
const onze = document.querySelector(".onze");
const onzeOnze = document.querySelector(".onzeOnze");
const douze = document.querySelector(".douze");
const douzeDouze = document.querySelector(".douzeDouze");
const treize = document.querySelector(".treize");
const treizeTreize = document.querySelector(".treizeTreize");
const quatze = document.querySelector(".quatze");
const quatzeQuatze = document.querySelector(".quatzeQuatze");
const quinze = document.querySelector(".quinze");
const quinzeQuinze = document.querySelector(".quinzeQuinze");
const sieze = document.querySelector(".seize");
const seizeSeize = document.querySelector(".seizeSeize");
const dixsept = document.querySelector(".dixsept");
const dixseptDixsept = document.querySelector(".dixseptDixsept");
const dixhuit = document.querySelector(".dixhuit");
const dixhuitDixhuit = document.querySelector(".dixhuitDixhuit");
const dixneuf = document.querySelector(".dixneuf");
const dixneufDixneuf = document.querySelector(".dixneufDixneuf");
const vingt = document.querySelector(".vingt");
const vingtVingt = document.querySelector(".vingtVingt");

const unPar = document.querySelector(".unPar");
const deuxPar = document.querySelector(".deuxPar");
const troisPar = document.querySelector(".troisPar");
const quatrePar = document.querySelector(".quatrePar");
const cinqPar = document.querySelector(".cinqPar");
const sixPar = document.querySelector(".sixPar");
const septPar1 = document.querySelector(".septPar1");
const septPar2 = document.querySelector(".septPar2");
const septPar3 = document.querySelector(".septPar3");
const huitPar = document.querySelector(".huitPar");
const neufPar = document.querySelector(".neufPar");
const dixPar = document.querySelector(".dixPar");
const onzePar = document.querySelector(".onzePar");
const douzePar = document.querySelector(".douzePar");
const treizePar = document.querySelector(".treizePar");
const quatorzePar = document.querySelector(".quatorzePar");
const quinzePar = document.querySelector(".quinzePar");
const seizePar = document.querySelector(".seizePar");
const dixseptPar = document.querySelector(".dixseptPar");
const dixhuitPar = document.querySelector(".dixhuitPar");
const dixneufPar = document.querySelector(".dixneufPar");
const vingtPar = document.querySelector(".vingtPar");

const logoUn = document.querySelector(".logoUn");
const logoDeux = document.querySelector(".logoDeux");
const logoTrois = document.querySelector(".logoTrois");
const logoQuatre = document.querySelector(".logoQuatre");
const logoCinq = document.querySelector(".logoCinq");
const logoSix = document.querySelector(".logoSix");
const logoSept = document.querySelector(".logoSept");
const logoHuit = document.querySelector(".logoHuit");
const logoNeuf = document.querySelector(".logoNeuf");
const logoDix = document.querySelector(".logoDix");
const logoOnze = document.querySelector(".logoOnze");
const logoDouze = document.querySelector(".logoDouze");
const logoTreize = document.querySelector(".logoTreize");
const logoQuatorze = document.querySelector(".logoQuatorze");
const logoQuinze = document.querySelector(".logoQuinze");
const logoSeize = document.querySelector(".logoSeize");
const logoDixsept = document.querySelector(".logoDixsept");
const logoDixhuit = document.querySelector(".logoDixhuit");

// const flyerUn = document.querySelector(".flyerUn");
// const flyerDeux = document.querySelector(".flyerDeux");
// const flyerTrois = document.querySelector(".flyerTrois");

// const headPriceUn = document.querySelector(".headPriceUn");
// const startfromUn = document.querySelector(".startfromUn");
// const tarifparUn1 = document.querySelector(".tarifparUn1");
// const tarifparUn2 = document.querySelector(".tarifparUn2");
// const tarifparUn3 = document.querySelector(".tarifparUn3");
// const tarifparUn4 = document.querySelector(".tarifparUn4");
// const comUn = document.querySelector(".comUn");

// const headPriceDeux = document.querySelector(".headPriceDeux");
// const startfromDeux = document.querySelector(".startfromDeux");
// const tarifparDeux1 = document.querySelector(".tarifparDeux1");
// const tarifparDeux2 = document.querySelector(".tarifparDeux2");
// const tarifparDeux3 = document.querySelector(".tarifparDeux3");
// const tarifparDeux4 = document.querySelector(".tarifparDeux4");
// const comDeux = document.querySelector(".comDeux");

// const headPriceTrois = document.querySelector(".headPriceTrois");
// const startfromTrois = document.querySelector(".startfromTrois");
// const tarifparTrois1 = document.querySelector(".tarifparTrois1");
// const tarifparTrois2 = document.querySelector(".tarifparTrois2");
// const tarifparTrois3 = document.querySelector(".tarifparTrois3");
// const tarifparTrois4 = document.querySelector(".tarifparTrois4");
// const comTrois = document.querySelector(".comTrois");

// const headPriceQuatre = document.querySelector(".headPriceQuatre");
// const startfromQuatre = document.querySelector(".startfromQuatre");
// const tarifparQuatre1 = document.querySelector(".tarifparQuatre1");
// const tarifparQuatre2 = document.querySelector(".tarifparQuatre2");
// const tarifparQuatre3 = document.querySelector(".tarifparQuatre3");
// const tarifparQuatre4 = document.querySelector(".tarifparQuatre4");
// const comQuatre = document.querySelector(".comQuatre");


// const headPriceCinq = document.querySelector(".headPriceCinq");
// const tarifparCinq1 = document.querySelector(".tarifparCinq1");
// const tarifparCinq2 = document.querySelector(".tarifparCinq2");
// const tarifparCinq3 = document.querySelector(".tarifparCinq3");
// const tarifparCinq4 = document.querySelector(".tarifparCinq4");
// const comCinq = document.querySelector(".comCinq");


// const headPriceSix = document.querySelector(".headPriceSix");
// const startfromSix = document.querySelector(".startfromSix");
// const tarifparSix1 = document.querySelector(".tarifparSix1");
// const tarifparSix2 = document.querySelector(".tarifparSix2");
// const tarifparSix3 = document.querySelector(".tarifparSix3");
// const tarifparSix4 = document.querySelector(".tarifparSix4");
// const comSix = document.querySelector(".comSix");

const contactTravail = document.querySelector(".contactTravail");
const contactMe2 = document.querySelector(".contactMe2");
const hiddenlabelmail2 = document.querySelector(".hiddenlabelmail2");
const hiddenlabelmessage2 = document.querySelector(".hiddenlabelmessage2");
const send2 = document.querySelector(".send2");



btnEn.addEventListener("click", () => { 
    graphiste.textContent = "WEB Developer & Graphic Designer.";
    moi.textContent = "ABOUT";
    applications.textContent = "APPLICATIONS";
    contacter.textContent = "Contact";
    visit.textContent = "visit counter";
    travail.textContent = "I am a freelancer -  Front-End Developerr and Graphic Designer. I do websites, logotypes, classic print design, branding and development. And i like my work!";
    linelink.textContent = "My certificates.";
    meContacter.textContent = "CONTACT ME"
    hiddenlabelmail.textContent = "Your e-mail:"
    hiddenlabelmessage.textContent = "Your message:";
    submit.textContent= "SUBMIT";
    mesApplications.textContent= "Applications";
    faciliter.textContent= "Making your life easy.";

    un.textContent= "TAX";
    unUn.textContent= "CALCULATOR";
    deux.textContent= "shopping";
    deuxDeux.textContent= "list";
    trois.textContent= "eclipse";
    troisTrois.textContent= "countdown";
    quatre.textContent= "meteo";
    quatreQuatre.textContent= "now";
    cinq.textContent= "day";
    cinqCinq.textContent= "motivation";
    sixx.textContent= "kitchen";
    sixxSixx.textContent= "timer";
    sept.textContent= "your";
    septSept.textContent= "meditation";
    huit.textContent= "tea";
    huitHuit.textContent= "time";
    neuf.textContent= "day";
    neufNeuf.textContent= "prediction";
    dix.textContent= "quiz";
    dixDix.textContent= "minute";
    onze.textContent= "event";
    onzeOnze.textContent= "countdown";
    douze.textContent= "sale";
    douzeDouze.textContent= "calculator";
    treize.textContent= "grandma";
    treizeTreize.textContent= "recipes";
    quatze.textContent= "dinner";
    quatzeQuatze.textContent= "idea";
    dixneuf.textContent= "animation";
    dixneufDixneuf.textContent= "hi";
    vingt.textContent= "5 minuts for";
    vingtVingt.textContent= "mom";

    unPar.textContent= "simple and efficient";
    deuxPar.textContent= "forget nothing";
    troisPar.textContent= "12 august 2026";
    quatrePar.textContent= "In real time";
    cinqPar.textContent= "Find the motivation";
    sixPar.textContent= "easy cook";
    septPar1.textContent= "WAVES";
    septPar2.textContent= "RAIN";
    septPar3.textContent= "NATURE";
    huitPar.textContent= "for tea lovers";
    neufPar.textContent= "Trust the universe";
    dixPar.textContent= "check your knowledge";
    onzePar.textContent= "always remember";
    douzePar.textContent= "easy shopping";
    treizePar.textContent= "taste of childhood";
    quatorzePar.textContent= "easy choice";
    quinzePar.textContent= "stay online";
    seizePar.textContent= "Present the new menu";
    dixseptPar.textContent= "new image";
    dixhuitPar.textContent= "bring in new customers";
    dixneufPar.textContent= "free use";
    vingtPar.textContent= "children busy";

    // webRazdel.textContent = " WEB SITES";
    webTravail.textContent= "Looking for a beautiful website with a cool mobile version? With a pleasure!";


    contactTravail.textContent = "If you have any questions about my services, or want to work together, feel free to contact me.";
    meContacter2.textContent = "CONTACT ME"
    hiddenlabelmail2.textContent = "Your e-mail:"
    hiddenlabelmessage2.textContent = "Your message:";
    s2.textContent= "SEND";
});

