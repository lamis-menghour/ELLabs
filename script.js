// ############################# Nav-bar #############################  //
var navBar = document.getElementById('navbar');
var LOGO = document.getElementById('LOGO');
window.addEventListener("scroll", function () {
    if (this.scrollY < 400) {
        LOGO.setAttribute("src", "img/Artboard 5.png");
        navBar.style.cssText = `background-color: #EA8607;`;
    }
    else {
        LOGO.setAttribute("src", "img/Artboard 4.png");
        navBar.style.cssText = `background-color: #333333;
                                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`;
    };
});


// ############################# Menu-Icon #############################  //
var menuIcon = document.getElementById("menu-icon");
var menu = document.getElementById("menu");
var menuClose = document.getElementById('menuClose');

function maxNavBar() {
    menuIcon.style.cssText = 'display : none;';
    menu.style.cssText = `display: flex;
                          flex-direction: row;`;
};

function minNavBar() {
    menu.style.cssText = "display : none;";
    menuIcon.style.cssText = 'display : block;';
    menuIcon.addEventListener("click", function () {
        menuIcon.style.cssText = 'display : none;';
        menu.style.cssText = `display: flex;
                             flex-direction: column`;
    });
    menuClose.addEventListener("click", function () {
        menu.style.cssText = "display : none;";
        menuIcon.style.cssText = 'display : block;';
    });
};


// ############################# My Progress #############################  //
var myProgress = document.getElementById('myProgress');
function progressFunction() {
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (window.innerWidth * window.pageYOffset) / height;
    document.getElementById("myBar").style.width = scrolled + "px";
};

window.addEventListener('scroll', () => {
    if (scrollY >= 100) {
        myProgress.style.display = "flex";
        progressFunction();
    }
    else {
        myProgress.style.display = "none";
    };
});


// ############################# Text Animation #############################  //
"use strict";
var words = document.querySelectorAll("span.word");
words.forEach((word) => {
    var letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        var span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

var currentWordIndex = 0;
var maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

var rotateText = () => {
    var currentWord = words[currentWordIndex];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // reveal and rotate in letters of next word
    var nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);


// ############################# Gallery #############################  //

var images_1 = {
    src: "img/slider01.jpg"
};
var images_2 = {
    src: "img/slider1.jpg"
};
var images_3 = {
    src: "img/slider.jpg"
};
var images_4 = {
    src: "img/1.JPG"
};
var images_5 = {
    src: "img/2.JPG"
};
var images_6 = {
    src: "img/3.JPG"
};
var images_7 = {
    src: "img/4.JPG"
};
var images_8 = {
    src: "img/slider2.jpg"
};
var images_9 = {
    src: "img/slider3.jpg"
};
var IMAGES = [images_1, images_2, images_3, images_4, images_5, images_7, images_6, images_8, images_9];

var galleryImages = document.getElementById("galleryImages");
var bgImage = document.getElementById("bgImage");

function createGalleryImage(index) {
    var galleryImage = document.createElement('img');
    galleryImage.className = "galleryImage";
    galleryImage.setAttribute("src", IMAGES[index].src);
    galleryImages.appendChild(galleryImage);
    galleryImage.onclick = function () {
        bgImage.setAttribute("src", galleryImage.src);
    };
};

function imageSlider() {
    for (i = 0; i < IMAGES.length; i++) {
        createGalleryImage(i);
    };
};

window.addEventListener("load", imageSlider());


// ############################# Go-Up #############################  //
var goUp = document.getElementById('goUp');
window.addEventListener("scroll", function () {
    if (scrollY >= 800) {
        goUp.style.opacity = 1;
    }
    else {
        goUp.style.opacity = 0;
    };
});

function goUpFunction() {
    // document.body............. for Safari
    // document.documentElement............. for Chrome, Firefox, Opera
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
goUp.addEventListener("click", goUpFunction);


// ############################# Courses #############################  //
var course_0 = {
    src: "",
    title: "",
    details: "",
    price: ""
};
var course_1 = {
    src: "img/S2.JPG",
    title: "Scratch 1",
    details: "It is the introductory level to the world of programming.",
    price: "8000 DA"

};
var course_2 = {
    src: "img/scratch2.jpg",
    title: "Scratch 2",
    details: "In which the basics of programming are covered in detail with more practical examples.",
    price: "8000 DA"
};
var course_3 = {
    src: "img/slider01.jpg",
    title: "Arduino 1",
    details: "It is an introductory level to enter the world of electronics and robotics by integrating programming with electronics.",
    price: "12000 DA"
};
var course_4 = {
    src: "img/slider2.jpg",
    title: "Arduino 2",
    details: "it is delved deeper into the world of robotics through the completion of several applied projects and getting acquainted with other programming languages.",
    price: "12000 DA"
};
var course_5 = {
    src: "img/basic-Robotics.jpg",
    title: "Robotics workshops",
    details: "These workshops enabled the completion of several applied projects in the field of robotics by adding what the trainees learned in the previous educational courses of programming and electronics.",
    price: "12000 DA"
};
var course_6 = {
    src: "img/2D-design.jpg",
    title: "2D Design",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis ",
    price: "---- DA"
};
var course_7 = {
    src: "img/3D-design.jpg",
    title: "Desgin & Imperssion 3D",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis ",
    price: "---- DA"
};
var COURSES = [course_0, course_1, course_2, course_3, course_4, course_5, course_6, course_7];

function createCourse(index) {
    // Create elemnets
    var course = document.createElement("div");
    var courseImageDiv = document.createElement("div");
    var courseImage = document.createElement("img");
    var courseTitle = document.createElement("div");
    var courseDetail = document.createElement("div");
    var coursePrice = document.createElement("div");

    // Add className
    course.className = "course"
    courseImageDiv.className = "courseImageDiv";
    courseImage.className = "courseImage";
    courseTitle.className = "courseTitle";
    courseDetail.className = "courseDetail";
    coursePrice.className = "coursePrice";

    // Append Children
    course.appendChild(courseImageDiv);
    courseImageDiv.appendChild(courseImage);
    course.appendChild(courseTitle);
    course.appendChild(courseDetail);
    course.appendChild(coursePrice);


    courseImage.setAttribute("src", `${COURSES[index].src}`);

    // Create Text Node
    var titleText = document.createTextNode(COURSES[index].title);
    var detailsText = document.createTextNode(COURSES[index].details);
    var priceText = document.createTextNode(COURSES[index].price);

    // Append Children
    courseTitle.appendChild(titleText);
    courseDetail.appendChild(detailsText);
    coursePrice.appendChild(priceText);

    var courses = document.getElementById("courses");
    courses.appendChild(course);

    if (index > 5) {
        var soon = document.createElement("div");
        soon.className = "soon";
        course.style.position = "relative";
        var soonText = document.createTextNode("comming soon");
        soon.appendChild(soonText);
        course.appendChild(soon);
    }
}


// ############################# Add Courses #############################  //
const cardLimit = COURSES.length - 1;
var cardIncrease;
var pageCount;
let currentPage = 0;
function addCourses(pageIndex) {
    currentPage = pageIndex;
    const startRange = pageIndex * cardIncrease;
    const endRange = currentPage == pageCount ? cardLimit : (pageIndex + 1) * cardIncrease;
    for (let i = startRange + 1; i <= endRange; i++) {
        createCourse(i);
    }
};
window.onload = () => {
    addCourses(currentPage);
};

var courses = document.getElementById("courses");
const handleAddCourses = () => {
    const endOfCourses = window.innerHeight + window.scrollY >= courses.offsetTop + courses.offsetHeight + 200;
    if (endOfCourses) {
        addCourses(currentPage + 1);
    };
    if (currentPage === pageCount - 1) {
        removeAddCourses();
    };
};
window.addEventListener("scroll", handleAddCourses);

const removeAddCourses = () => {
    loader.remove();
    window.removeEventListener("scroll", handleAddCourses);
};

// ############################# Loading Cards for Courses #############################  //
var loadingCards = document.getElementsByClassName('loading-card');
var loader = document.getElementById('loader');
function LOADER(index) {
    Array.from(loadingCards).forEach(card => card.remove());
    for (let i = 0; i < index; i++) {
        var loadingCard = document.createElement("div");
        loadingCard.className = "loading-card";
        loader.appendChild(loadingCard);
    };
};

// ############################# Trainers #############################  //
var trainer_1 = {
    src: "img/yassine.jpg",
    name: "Yacine Menhour",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var trainer_2 = {
    src: "img/imed.jpeg",
    name: "Imad Roula",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var trainer_3 = {
    src: "img/lamis.jpg",
    name: "Lamis Menghour",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var trainer_4 = {
    src: "img/mouna.jpg",
    name: "Mouna Frioui",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var trainer_5 = {
    src: "img/alima.jpg",
    name: "Alima Bounar",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var trainer_6 = {
    src: "img/adem.jpg",
    name: "Adem Djellit",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var trainer_7 = {
    src: "img/aya.jpg",
    name: "Aya Belhadef",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var trainer_8 = {
    src: "img/isra.jpg",
    name: "Isra Brahimi",
    dscp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, voluptas alias nam praesentium dolores perspiciatis "
};
var TEAM = [trainer_1, trainer_2, trainer_3, trainer_4, trainer_5, trainer_6, trainer_7, trainer_8];

var trainers = document.getElementById("trainers");
function createTrainer(index) {
    // Create elemnets
    var trainer = document.createElement("div");
    var courseImageDiv = document.createElement("div");
    var trainerImage = document.createElement("img");
    var trainerName = document.createElement("div");
    var trainerDscp = document.createElement("div");

    // Append Children
    trainer.appendChild(courseImageDiv);
    courseImageDiv.appendChild(trainerImage);
    trainer.appendChild(trainerName);
    trainer.appendChild(trainerDscp);

    // Add className
    trainer.className = "trainer";
    courseImageDiv.className = "courseImageDiv";
    trainerImage.className = "trainerImage";
    trainerName.className = "trainerName";
    trainerDscp.className = "trainerDscp";

    trainerImage.setAttribute("src", `${TEAM[index].src}`);

    // Create Text Node
    var nameText = document.createTextNode(TEAM[index].name);
    var dscpText = document.createTextNode(TEAM[index].dscp);

    // Append Children
    trainerName.appendChild(nameText);
    trainerDscp.appendChild(dscpText);
    trainers.appendChild(trainer);
};

// ############################# Media-Query for Trainers #############################  //
var left = document.getElementById('left');
var right = document.getElementById('right');

// @media only screen and (min-width: 800px) {}
function maxTrainers() {
    createTrainer(0);
    createTrainer(1);
    createTrainer(2);
    localStorage.INDEX = 2;

    left.onclick = function leftClicked() {
        localStorage.INDEX--
        var trainerParent = document.querySelector('.trainer').parentNode;
        var removeTrainer = document.querySelectorAll("div .trainer");
        if (localStorage.INDEX <= -1) {
            localStorage.INDEX = TEAM.length;
        }
        else if (localStorage.INDEX >= 0 && localStorage.INDEX <= TEAM.length) {
            removeTrainer[2].remove();
            // createTrainer(localStorage.INDEX);
            trainerParent.insertBefore(createTrainer(localStorage.INDEX), trainerParent);
        };
    };

    right.onclick = function rightClicked() {
        localStorage.INDEX++;
        var removeTrainer = document.querySelectorAll("div .trainer");
        if (localStorage.INDEX < TEAM.length) {
            removeTrainer[0].remove();
            createTrainer(localStorage.INDEX);
        }
        else if ((localStorage.INDEX >= TEAM.length)) {
            localStorage.INDEX = -1;
        };
    };
};

// @media only screen and (max-width: 800px) {}
function minTrainers() {
    createTrainer(0);
    localStorage.INDEX = 0;

    left.onclick = function leftClicked() {
        var removeTrainer = document.querySelectorAll("div .trainer");
        removeTrainer.forEach(e => e.remove());
        if (localStorage.INDEX == 0) {
            localStorage.INDEX = TEAM.length - 1;
        }
        else {
            localStorage.INDEX--;
        };
        createTrainer(localStorage.INDEX);
    };

    right.onclick = function rightClicked() {
        var removeTrainer = document.querySelectorAll("div .trainer");
        removeTrainer.forEach(e => e.remove());
        if (localStorage.INDEX == TEAM.length - 1) {
            localStorage.INDEX = 0;
        }
        else {
            localStorage.INDEX++
        };
        createTrainer(localStorage.INDEX);
    };
};


// ############################# Initial Media-Query  #############################  //
function initialMediaQuery(e) {
    // Check if the media query is true
    if (e.matches) {
        maxNavBar();
        maxTrainers();
        cardIncrease = 2;
        pageCount = Math.ceil(cardLimit / cardIncrease);
        LOADER(2);
    }
    else {
        minNavBar();
        minTrainers();
        cardIncrease = 1;
        pageCount = Math.ceil(cardLimit / cardIncrease);
        LOADER(1);
    };
};

// Create a condition that targets viewports at least 800px wide
var mediaQueryCheck = window.matchMedia('(min-width: 800px)');

// Initial check
window.addEventListener("load", initialMediaQuery(mediaQueryCheck));


// #############################  Media-Query on Resizing the window #############################  //
window.addEventListener("resize", function () {
    var removeTrainer = document.querySelectorAll("div .trainer");
    removeTrainer.forEach(e => e.remove());
    if (mediaQueryCheck.matches) {
        maxNavBar();
        maxTrainers();
        cardIncrease = 2;
        pageCount = Math.ceil(cardLimit / cardIncrease);
        LOADER(2);
    }
    else {
        minNavBar();
        minTrainers();
        cardIncrease = 1;
        pageCount = Math.ceil(cardLimit / cardIncrease);
        LOADER(1);
    };
});


// ############################# Counting #############################  //
var countContainer = document.getElementById("section-6");
var COUNTS = document.querySelectorAll(".counts");
var started = false ; // function started ? NO

function countingFunction() {
    if (window.scrollY >= countContainer.offsetTop - 200) {
        if (!started) {
            COUNTS.forEach(element => {
                var goal = element.dataset.goal;
                var count = setInterval(() => {
                    element.textContent++;
                    if (element.textContent == goal) {
                        clearInterval(count);
                    }
                }, 2000 / goal);
            });
        };
        started = true;
    };
};
window.addEventListener("scroll", countingFunction);











// #############################  End Of Code #############################  //