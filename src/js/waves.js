import anime from 'animejs/lib/anime.es.js';
///////////
var OPEN_PROJECT = false;
var PROJECT_QUANTITY = 0;
var cursor = document.querySelector('#cursor');
let slidesArea = document.querySelector('#projects-view-area');
let currentLevel = 1;
let arrowUp = document.getElementById('up-arrow');
let arrowDown = document.getElementById('down-arrow');
let surroundingContainer = document.getElementById('projects-container');
let isViewingElem = false;
let mouseOverElem = false;


let allInteractiveElems = document.getElementsByClassName('cursor-hover-interact');



    arrowUp.style.pointerEvents = "none";
    arrowUp.style.opacity = 0;

    arrowDown.style.pointerEvents = "all";
    arrowDown.style.opacity = 1;

arrowUp.addEventListener('click', ()=> {
    currentLevel--;
    slidesArea.style.top = -1*(currentLevel-1)*100+"vh";
    if(currentLevel==1) {
        arrowUp.style.pointerEvents = "none";
        arrowUp.style.opacity = 0;
    }
    if(currentLevel!=PROJECT_QUANTITY){
        arrowDown.style.pointerEvents = "all";
        arrowDown.style.opacity = 1;
    }
})

arrowDown.addEventListener('click', ()=> {
    currentLevel++;
    slidesArea.style.top = -1*(currentLevel-1)*100+"vh";
    if(currentLevel==PROJECT_QUANTITY) {
        arrowDown.style.pointerEvents = "none";
        arrowDown.style.opacity = 0;
    }
    if(currentLevel!=1){
        arrowUp.style.pointerEvents = "all";
        arrowUp.style.opacity = 1;
    }
})
class projectElem {
    constructor(params) {
        PROJECT_QUANTITY++;
        /*
        {
        title: 't',
        subtitle: 's',
        description: 'd',
        link: 'l',
        imgPath: 'p',
        imgSlideList: ['e','e','e']
        }
        */
        this.title = params.title;
        this.subtitle = params.subtitle;
        this.description = params.description;
        this.link = params.link;
        this.opened = false;
        this.imgPath = params.imgPath;
        this.id = params.id;
        this.slideList = params.imgSlideList;
        this.slideLength = params.imgSlideList.length;
        this.currentSlide = 0;
        this.generatedElem = 
        '<div class="project-frame">'+
            '<div id="'+this.id+'" style="background-position: center; background-size: cover; background-image: url('+ this.imgPath +')" class="project-elem">' +
                '<div id="title-'+this.id+'" class="project-elem-title"><h3 class="project-elem-title-content">'+ this.title +'</h3><p class="project-elem-subtitle-content">' + this.subtitle + '</p>' +
                '</div>'+
                '<div id="inside-'+this.id+'" class="inside-project-elem">'+
                    '<div class="info-inside-elem">'+
                        '<div>'+
                            '<h4 class="title-inside-elem">'+ this.title +'</h4>'+
                            '<h5 class="subtitle-inside-elem">'+ this.subtitle +'</h5>'+
                        '</div>'+
                        '<p class="description-inside-elem">'+ this.description +'</p>'+
                        '<a class="link-inside-elem" target="_blank" href="http://www.'+this.link+'">'+ this.link +'</a>'+
                    '</div>'+
                    '<div id="slide-'+this.id+'" class="projects-inside-slide-area">'+
                        '<img src="./src/images/arrow.svg" class="left-arrow" id="left-arrow-'+this.id+'">'+
                        '<img src="./src/images/arrow.svg" class="right-arrow" id="right-arrow-'+this.id+'">'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    }

    moveSlideRight() {
        this.currentSlide++;
        if(this.slideLength-1 < this.currentSlide) {
            this.currentSlide = 0;
        }
        else if(0 > this.currentSlide) {
            this.currentSlide = this.slideLength - 1;
        }
        document.getElementById('slide-'+this.id).style.backgroundSize = 'center';
        document.getElementById('slide-'+this.id).style.backgroundSize = 'cover';
        document.getElementById('slide-'+this.id).style.backgroundImage = `url(${this.slideList[this.currentSlide]})`
    }
    moveSlideLeft() {
        
        this.currentSlide--;
        if(this.slideLength-1 < this.currentSlide) {
            this.currentSlide = 0;
        }
        else if(0 > this.currentSlide) {
            this.currentSlide = this.slideLength - 1;
        }
        document.getElementById('slide-'+this.id).style.backgroundSize = 'center';
        document.getElementById('slide-'+this.id).style.backgroundSize = 'cover';
        document.getElementById('slide-'+this.id).style.backgroundImage = `url(${this.slideList[this.currentSlide]})`
    }

    insertElem() {
        document.getElementById('projects-view-area').innerHTML += this.generatedElem;
    }
}
let projectsArray = []
projectsArray[0] = new projectElem({
    title: 'Terrestrial Traveler',
    subtitle: 'web-based game',
    description: 'Terrestrial Traveler is a web-based game that was inspired by Lunar Lander. Like Lunar Lander, you can land your ship, but the objective of this game is distance traveled rather than simply landing. The game uses only an HTML canvas and vanilla Javascript.',
    link: 'terrestrialtraveler.io',
    id: 'terr-trav',
    imgPath: './src/images/terr-trav-img.jpg',
    imgSlideList: ['./src/images/terr-trav-thumb.png','./src/images/ss-logo+name.png','./src/images/terr-trav-thumb.png','./src/images/terr-trav-img.jpg']
})

projectsArray[0].insertElem();

projectsArray[1] = new projectElem({
    title: 'Social Sight',
    subtitle: 'social network',
    description: 'Social Sight is a Reddit-like website in which anonymous users can create posts on variouse messaging boards. It differs in that an account is not nessesary and images are not currently supported.',
    link: 'socialsight.com',
    id: 'soc-site',
    imgPath: './src/images/ss-logo+name.png',
    imgSlideList: ['./src/images/terr-trav-thumb.png','./src/images/terr-trav-thumb.png','./src/images/terr-trav-img.jpg']
})

projectsArray[1].insertElem();

projectsArray[2] = new projectElem({
    title: 'Social Sight',
    subtitle: 'social network',
    description: 'Social Sight is a Reddit-like website in which anonymous users can create posts on variouse messaging boards. It differs in that an account is not nessesary and images are not currently supported.',
    link: 'socialsight.com',
    id: 'coming-soon',
    imgPath: './src/images/ss-logo+name.png',
    imgSlideList: ['./src/images/terr-trav-thumb.png','./src/images/ss-logo+name.png','./src/images/terr-trav-thumb.png','./src/images/terr-trav-img.jpg']
})

projectsArray[2].insertElem();


let projectHover = document.getElementsByClassName('project-elem');



surroundingContainer.addEventListener('click', () => {

    if(OPEN_PROJECT && !mouseOverElem && !MIGHT_BE_MOBILE) {
        for(let i = 0; i < PROJECT_QUANTITY; i++) {
            projectHover[i].classList.remove('selected-elem');
            document.getElementById(`inside-`+projectHover[i].id).style.opacity = 0;
            document.getElementById(`inside-`+projectHover[i].id).style.pointerEvents = 'none';
            document.getElementById(`title-`+projectHover[i].id).style.pointerEvents = 'all';
            document.getElementById(`title-`+projectHover[i].id).style.opacity = 1;
        }

        if(currentLevel==1) {
            arrowDown.style.pointerEvents = "all";arrowUp.style.pointerEvents = "none";
            arrowDown.style.opacity = 1;arrowUp.style.opacity = 0;
        }
        else if(currentLevel!=PROJECT_QUANTITY && currentLevel!=1){
            arrowDown.style.pointerEvents = "all";arrowUp.style.pointerEvents = "all";
            arrowDown.style.opacity = 1;arrowUp.style.opacity = 1;
        }
        else if(currentLevel==PROJECT_QUANTITY){
            arrowDown.style.pointerEvents = "none";arrowUp.style.pointerEvents = "all";
            arrowDown.style.opacity = 0;arrowUp.style.opacity = 1;
        }
        OPEN_PROJECT = false;   
    }
    else if(MIGHT_BE_MOBILE && OPEN_PROJECT) {
        for(let i = 0; i < PROJECT_QUANTITY; i++) {
            projectHover[i].classList.remove('selected-elem');
            document.getElementById(`inside-`+projectHover[i].id).style.opacity = 0;
            document.getElementById(`inside-`+projectHover[i].id).style.pointerEvents = 'none';
            document.getElementById(`title-`+projectHover[i].id).style.pointerEvents = 'all';
            document.getElementById(`title-`+projectHover[i].id).style.opacity = 1;
        }

        if(currentLevel==1) {
            arrowDown.style.pointerEvents = "all";arrowUp.style.pointerEvents = "none";
            arrowDown.style.opacity = 1;arrowUp.style.opacity = 0;
        }
        else if(currentLevel!=PROJECT_QUANTITY && currentLevel!=1){
            arrowDown.style.pointerEvents = "all";arrowUp.style.pointerEvents = "all";
            arrowDown.style.opacity = 1;arrowUp.style.opacity = 1;
        }
        else if(currentLevel==PROJECT_QUANTITY){
            arrowDown.style.pointerEvents = "none";arrowUp.style.pointerEvents = "all";
            arrowDown.style.opacity = 0;arrowUp.style.opacity = 1;
        }
        OPEN_PROJECT = false;  
    }
});



/////
function animateInAbout() {

    if(!MIGHT_BE_MOBILE) {
        document.getElementById('about-container').style.display = 'block';
        document.getElementById('about-container').style.opacity = 1;
        anime({
            targets: '.fade-title',
            opacity: 0,
            easing: 'easeInCubic',
            duration: 1000,
            direction: 'reverse'
        })
        anime({
            targets: '.fade-up-and-in',
            opacity: 0,
            translateY: 50,
            easing: 'easeInElastic(4, 1.3)',
            duration: 1000,
            direction: 'reverse',
            endDelay: 2000,
            delay: anime.stagger(250, {direction: 'reverse'})
        })
        anime({
            targets: '.fade-in',
            opacity: 0,
            easing: 'easeInElastic(4, 1.3)',
            duration: 2000,
            direction: 'reverse',
            endDelay: 2500,
            delay: anime.stagger(500, {direction: 'reverse'})
        })
        anime({
            targets: '.fade-in-left',
            opacity: 0,
            translateX: -100,
            easing: 'easeInElastic(4, 1.3)',
            duration: 1000,
            direction: 'reverse',
            endDelay: 350,
            delay: anime.stagger(350, {direction: 'reverse'})
        })
        anime({
            targets: '.scale-in-left',
            scale: 0,
            easing: 'easeInCubic',
            duration: 2000,
            direction: 'reverse'
        })
        anime({
            targets: '.scale-in',
            scale: 0,
            easing: 'easeInCubic',
            duration: 1200,
            direction: 'reverse',
            endDelay: 2000,
            delay: anime.stagger(700, {direction: 'reverse'})
        })
    }
    else {
        document.getElementById('about-container').style.display = 'block';
        document.getElementById('about-container').style.opacity = 1
    }
}
function animateOutAbout() {

    if(!MIGHT_BE_MOBILE) {
        anime({
            targets: '.fade-title',
            opacity: 0,
            easing: 'easeInCubic',
            duration: 1000,
        })
        anime({
            targets: '.fade-up-and-in',
            opacity: 0,
            translateY: 50,
            easing: 'easeInElastic(4, 1.3)',
            duration: 250,
            delay: anime.stagger(100)
        })
        anime({
            targets: '.fade-in',
            opacity: 0,
            easing: 'easeInElastic(4, 1.3)',
            duration: 250,
            delay: anime.stagger(250)
        })
        anime({
            targets: '.fade-in-left',
            opacity: 0,
            translateX: -100,
            easing: 'easeInElastic(4, 1.3)',
            duration: 250,
            delay: anime.stagger(200)
        })
        anime({
            targets: '.scale-in-left',
            scale: 0,
            easing: 'easeInCubic',
            duration: 300,
        })
        anime({
            targets: '.scale-in',
            scale: 0,
            easing: 'easeInCubic',
            duration: 300,
            delay: anime.stagger(200)
        })
        setTimeout(()=>{
            Array.from(document.getElementsByClassName('fade-title')).forEach((elem) => {elem.style.opacity = 1;})
            Array.from(document.getElementsByClassName('fade-up-and-in')).forEach((elem) => {elem.style.opacity = 1; elem.style.transform = "translateY(0px)"})
            Array.from(document.getElementsByClassName('fade-in')).forEach((elem) => {elem.style.opacity = 1;})
            Array.from(document.getElementsByClassName('fade-in-left')).forEach((elem) => {elem.style.opacity = 1; elem.style.transform = "translateX(0px)"})
            Array.from(document.getElementsByClassName('scale-in-left')).forEach((elem) => {elem.style.opacity = 1; elem.style.transform = "scale(1)"})
            Array.from(document.getElementsByClassName('scale-in')).forEach((elem) => {elem.style.opacity = 1; elem.style.transform = "scale(1)"})
            

            document.getElementById('about-container').style.display = 'none';
        }, 1500)
    }
    else {
        document.getElementById('about-container').style.opacity = 0;
        document.getElementById('about-container').style.display = 'none';
    }

}

function animateInContact() {

    if(!MIGHT_BE_MOBILE) {

        document.getElementById('contact-container').style.display = 'block';
        document.getElementById('contact-container').style.opacity = 1;

        anime({
            targets: '.fade-contact-title',
            opacity: 0,
            easing: 'easeInCubic',
            duration: 1000,
            direction: 'reverse'
        })
        anime({
            targets: '.fade-contact-up',
            opacity: 0,
            translateY: 100,
            easing: 'easeInCubic',
            duration: 1500,
            direction: 'reverse'
        })
        anime({
            targets: '.fade-form-in',
            opacity: 0,
            scale: 0,
            easing: 'easeInCubic',
            duration: 1500,
            endDelay: 700,
            direction: 'reverse'
        })
    }
    else {
        document.getElementById('contact-container').style.display = 'block';
        document.getElementById('contact-container').style.opacity = 1;
    }

}
function animateOutContact() {

    if(!MIGHT_BE_MOBILE) {
        anime({
            targets: '.fade-contact-title',
            opacity: 0,
            easing: 'easeInCubic',
            duration: 500,
        })
        anime({
            targets: '.fade-contact-up',
            opacity: 0,
            translateY: 100,
            easing: 'easeInCubic',
            duration: 700,
        })
        anime({
            targets: '.fade-form-in',
            opacity: 0,
            scale: 0,
            easing: 'easeInCubic',
            duration: 700,
        })
    
        setTimeout(()=>{
            Array.from(document.getElementsByClassName('fade-contact-title')).forEach((elem) => {elem.style.opacity = 1; elem.style.transform = "translateY(0px)";})
            Array.from(document.getElementsByClassName('fade-contact-up')).forEach((elem) => {elem.style.opacity = 1; elem.style.transform = "translateY(0px)";})
            Array.from(document.getElementsByClassName('fade-form-in')).forEach((elem) => {elem.style.opacity = 1; elem.style.transform = "scale(1)";})
    
            document.getElementById('contact-container').style.display = 'none';
            document.getElementById('contact-container').style.opacity = 0;
        }, 1500)
    }
    else {
        document.getElementById('contact-container').style.opacity = 0;
        document.getElementById('contact-container').style.display = 'none'
    }
}

function animateInProjects() {

    if(!MIGHT_BE_MOBILE) {

        document.getElementById('projects-container').style.display = 'block';
        document.getElementById('projects-container').style.opacity = 1;
        document.getElementsByClassName('large-fade-in')[0].style.opacity = 0;

        anime({
            targets: '.projects-title-fade',
            opacity: 0,
            easing: 'easeInCubic',
            duration: 1000,
            direction: 'reverse'
        })
        anime({
            targets: '.large-fade-in',
            opacity: 1,
            easing: 'easeInCubic',
            duration: 1000,
            delay: 100
        })
        anime({
            targets: '.large-fade-in',
            translateY: anime.get(document.getElementById('projects-view-area'), 'height', 'px'),
            easing: 'linear',
            duration: 1000,
            direction: 'reverse'
        })
        setTimeout(()=>{
            if(currentLevel==1) {
                arrowDown.style.pointerEvents = "all";arrowUp.style.pointerEvents = "none";
                arrowDown.style.opacity = 1;arrowUp.style.opacity = 0;
            }
            else if(currentLevel!=PROJECT_QUANTITY && currentLevel!=1){
                arrowDown.style.pointerEvents = "all";arrowUp.style.pointerEvents = "all";
                arrowDown.style.opacity = 1;arrowUp.style.opacity = 1;
                console.log(PROJECT_QUANTITY);
                
            }
            else if(currentLevel==PROJECT_QUANTITY){
                arrowDown.style.pointerEvents = "none";arrowUp.style.pointerEvents = "all";
                arrowDown.style.opacity = 0;arrowUp.style.opacity = 1;
            }
        }, 1250)
    }
    else {
        document.getElementById('projects-container').style.display = 'block';
        document.getElementById('projects-container').style.opacity = 1;
    }

}
function animateOutProjects() {

    if(!MIGHT_BE_MOBILE) {
        anime({
            targets: '.projects-title-fade',
            opacity: 0,
            easing: 'easeInCubic',
            duration: 500
        })
        anime({
            targets: '.large-fade-in',
            opacity: 0,
            translateY: anime.get(document.getElementById('projects-view-area'), 'height', 'px'),
            easing: 'easeInCubic',
            duration: 700,
        })

        Array.from(document.getElementsByClassName('arrow-fade-in')).forEach((elem) => {elem.style.opacity = 0;})

        setTimeout(()=>{
            Array.from(document.getElementsByClassName('large-fade-in')).forEach((elem) => {elem.style.opacity = 0; elem.style.transform = "translateY(0px)";})
            Array.from(document.getElementsByClassName('projects-title-fade')).forEach((elem) => {elem.style.opacity = 1;})
    
    
            document.getElementById('projects-container').style.display = 'none';
        }, 1500)
    }
    else {
        document.getElementById('projects-container').style.opacity = 0;
        document.getElementById('projects-container').style.display = 'none';
    }

}

var MIGHT_BE_MOBILE = false;
var INTERVAL_IS_RUNNING = true;

function takeActionForMobile() {
    if(MIGHT_BE_MOBILE) {

        cursor.style.opacity = 0;
        cursor.style.display = 'none !important';
        if(INTERVAL_IS_RUNNING) {
            clearInterval(dotAnimation);
            // DOT_QUANTITY = 50;
            INTERVAL_IS_RUNNING = false;
        }
    }
    else {  
        cursor.style.display = 'block !important';
        cursor.style.opacity = 1;
        if(!INTERVAL_IS_RUNNING) {
            if(mobileDotAnimation != undefined) {
                clearInterval(mobileDotAnimation);
            }
            // DOT_QUANTITY = 700;
            console.log("THIS IS THE CULPRIT")
            dotAnimation = setInterval(intervalEvents, 1000/60);
            INTERVAL_IS_RUNNING = true;
        }
    }
}

function checkMobile() {

    if(window.innerWidth < 800) {
        MIGHT_BE_MOBILE = true;
        console.log("IS MOBILE PHONE");
    }
    else {
        MIGHT_BE_MOBILE = false;
    }
}

checkMobile()
 //deals with window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // checkMobile()
    // takeActionForMobile()
});

//deals with cursor position
var cursorPostions = [0, 0];
let rotationOffset = 0;

window.addEventListener("mousemove", (e) => {
    cursorPostions[0] = e.pageX;
    cursorPostions[1] = e.pageY;

    cursor.style.top = e.pageY+"px";
    cursor.style.left = e.pageX+"px"
});

function actionsAfterDOMLoads() {

    Array.from(projectHover).forEach(element => {
        if(!MIGHT_BE_MOBILE) {
            element.addEventListener('mouseover', () => {mouseOverElem = true; if(!OPEN_PROJECT){cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 100px;width: 100px;opacity: 0.05;transform: translate(-50px, -50px);")}});
            element.addEventListener('mouseout', () => {mouseOverElem = false; cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});    
        }
    
        element.addEventListener('click', () => {
    
            element.classList.add('selected-elem');
            arrowDown.style.pointerEvents = "none"; arrowUp.style.pointerEvents = "none";
            arrowDown.style.opacity = 0; arrowUp.style.opacity = 0;
            if(!MIGHT_BE_MOBILE){cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);");}
            document.getElementById(`inside-`+element.id).style.opacity = 1;
            document.getElementById(`inside-`+element.id).style.pointerEvents = 'all';
            document.getElementById(`title-`+element.id).style.opacity = 0;
            setTimeout(()=>{document.getElementById(`title-`+element.id).style.pointerEvents = 'none'; }, 300)
            OPEN_PROJECT = true;
            
        });
    
    });

    Array.from(allInteractiveElems).forEach(element => {
        if(!MIGHT_BE_MOBILE) {
            element.addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 100px;width: 100px;opacity: 0.05;transform: translate(-50px, -50px);")});
            element.addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});    
        }
    });
    
    if(!MIGHT_BE_MOBILE) {
        arrowUp.addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
        arrowUp.addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});
        arrowDown.addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
        arrowDown.addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});
    }

    document.getElementById('loading-progress').style.display = "none"
    document.body.style.cursor = 'url(./src/images/basic-circle-cursor.svg) 5 5, auto';
    if(!MIGHT_BE_MOBILE) {
        document.getElementById('cursor').setAttribute('style', "top: "+cursorPostions[1]+"px; left: "+cursorPostions[0]+"px;height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);");
    }
    for(let i = 0; i < PROJECT_QUANTITY; i ++) {
        document.getElementById(`left-arrow-${projectsArray[i].id}`).addEventListener('click', ()=>{projectsArray[i].moveSlideLeft()})
        document.getElementById(`right-arrow-${projectsArray[i].id}`).addEventListener('click', ()=>{projectsArray[i].moveSlideRight()})
        if(!MIGHT_BE_MOBILE){
            document.getElementById(`left-arrow-${projectsArray[i].id}`).addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
            document.getElementById(`left-arrow-${projectsArray[i].id}`).addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});
            document.getElementById(`right-arrow-${projectsArray[i].id}`).addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
            document.getElementById(`right-arrow-${projectsArray[i].id}`).addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});   
    
        }
    }
}

var DOM_IS_READY = false;
var DOM_DID_LOAD = false;
//init of dot array
let dotArray = [];
document.addEventListener("DOMContentLoaded", function() {
    DOM_DID_LOAD = true;
    document.body.style.background = "black";
    checkMobile()
    setTimeout(()=>{
        takeActionForMobile()
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.getElementById('title-container').classList.add('fade-title-container-in')
        
        document.getElementById('loading-progress').style.opacity = "0"

        DOM_IS_READY = true;
        setTimeout(()=>{actionsAfterDOMLoads()}, 420)
        dotsOpenInit()
    }, 5000)
    
});

// setTimeout(()=>{
//     if(!DOM_DID_LOAD) {
//         console.log("this is internet explorer");
        
//         DOM_DID_LOAD = true;
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         document.getElementById('title-container').classList.add('fade-title-container-in')        
//         document.getElementById('loading-progress').style.opacity = "0"    
//         DOM_IS_READY = true;
//         setTimeout(()=>{actionsAfterDOMLoads()}, 420)
//         dotsOpenInit()
//     }
// }, 5000)


function dotsOpenInit() {

    document.body.style.background = "#002258";
    
    for(let i = 0; i < DOT_QUANTITY; i++) {
        let randomPositionCircular = Math.random() * 2
        let randomFactor = (Math.random()*4)+0.5
        dotArray[i] = {
            position: [window.innerWidth/2, window.innerHeight/2],
            velocity: [Math.cos(randomPositionCircular*Math.PI)*randomFactor, Math.sin(randomPositionCircular*Math.PI)*randomFactor],
            color: '',
            isTerminated: false
        }

        DOTS_TERMINATED--;

             if(i % 2 == 0) {dotArray[i].color = '#06337a'}
        else if(i % 2 == 1) {dotArray[i].color = '#0e72a1'}
    }
}

//some static declarations
var DOT_QUANTITY = 130;
var DOTS_TERMINATED = DOT_QUANTITY;
var DOT_SIZE = 50;
var TRANSITION = false;
var OPEN=false;
var CLOSE=false;
var STATE = 'OPEN';
var PREVIOUSE_STATE = STATE;
var BOUNDRIES = true;
var cursorColor = '#3b89ac'

//canvas reference
const canvas = document.querySelector("#mainstage");
const ctx = canvas.getContext("2d");

const displacement = document.getElementById('displacement');
console.log(displacement)

var count = 0;
let loadScreen = document.getElementById('loading-screen');
let loadProgress = document.getElementById('loading-progress');
var isLoaded = false;
var toggleCountUp = true;

var dotAnimation = setInterval(intervalEvents, 1000/45);

function intervalEvents() {

    if(count <= 100 & !isLoaded) {
        loadProgress.innerHTML = count;
        count++

    }
    if(count > 100 && !isLoaded) {

        loadScreen.style.opacity = 0;
        loadScreen.style.pointerEvents = 'none';
        isLoaded = true;
        setTimeout(()=>{loadScreen.style.display = 'none';}, 1500)
    }

    if(DOM_IS_READY) {
        clear();

        animateDots();
    
        if(!MIGHT_BE_MOBILE){cursorInteraction();}
    
        if(OPEN && DOTS_TERMINATED>=DOT_QUANTITY && STATE=='OPEN') {dotsOpenInit(); OPEN=false; TRANSITION=false; DOT_SIZE = 50;
            document.getElementById('opening-container').classList.remove('fadeout');
            document.getElementById('opening-container').classList.add('fadein');
            displacement.setAttribute("xChannelSelector", "A");
            displacement.setAttribute("yChannelSelector", "A");
            cursorColor = '#3b89ac'
        }
        if(TRANSITION && CLOSE && PREVIOUSE_STATE=='OPEN') {EXITopen(); CLOSE=false; setTimeout(failSafe, 2500);}
    
        if(DOTS_TERMINATED>=DOT_QUANTITY && STATE=='ABOUT' && OPEN==true) {initMovementForAbout(); OPEN=false; TRANSITION=false; DOT_SIZE = 20;
            displacement.setAttribute("xChannelSelector", "R");
            displacement.setAttribute("yChannelSelector", "G");
            animateInAbout()
            cursorColor = '#8a8a8a'
        }
        if(TRANSITION && CLOSE && PREVIOUSE_STATE=='ABOUT') {EXITabout(); animateOutAbout(); CLOSE=false; setTimeout(failSafe, 3500);}
    
        if(DOTS_TERMINATED>=DOT_QUANTITY && STATE=='PROJECTS' && OPEN==true) {initDotMovementForProjects(); OPEN=false; TRANSITION=false; DOT_SIZE = 10;
            displacement.setAttribute("xChannelSelector", "R");
            displacement.setAttribute("yChannelSelector", "G");
            animateInProjects()
            cursorColor = '#cc981f'
        }
        if(TRANSITION && CLOSE && PREVIOUSE_STATE=='PROJECTS') {EXITprojects(); animateOutProjects(); CLOSE=false; setTimeout(failSafe, 3500);}
    
        if(DOTS_TERMINATED>=DOT_QUANTITY && STATE=='CONTACT' && OPEN==true) {initDotMovementForContact(); OPEN=false; TRANSITION=false; DOT_SIZE = 27;
            displacement.setAttribute("xChannelSelector", "R");
            displacement.setAttribute("yChannelSelector", "G");
            animateInContact()
            cursorColor = '#3fa17d'
        }
        if(TRANSITION && CLOSE && PREVIOUSE_STATE=='CONTACT') {EXITcontact(); animateOutContact(); CLOSE=false; setTimeout(failSafe, 3500);}
    }

}

function mobileNavigation() {
    
    if(STATE=='OPEN') {OPEN=false; TRANSITION=false; DOT_SIZE = 20;
        document.getElementById('opening-container').classList.remove('fadeout');
        document.getElementById('opening-container').classList.add('fadein');
        displacement.setAttribute("xChannelSelector", "A");
        displacement.setAttribute("yChannelSelector", "A");
        document.body.style.background = "#002258";
    }
    else if(PREVIOUSE_STATE=='OPEN') {CLOSE=false;}

    if(STATE=='ABOUT') {OPEN=false; TRANSITION=false; DOT_SIZE = 20;
        displacement.setAttribute("xChannelSelector", "R");
        displacement.setAttribute("yChannelSelector", "G");
        animateInAbout();
        document.body.style.background = "#1c1c1c"
    } 
    else if(PREVIOUSE_STATE=='ABOUT') {animateOutAbout(); CLOSE=false;}

    if(STATE=='PROJECTS') {OPEN=false; TRANSITION=false; DOT_SIZE = 10;
        displacement.setAttribute("xChannelSelector", "R");
        displacement.setAttribute("yChannelSelector", "G");
        animateInProjects();
        document.body.style.background = "#110830"
    }
    else if(PREVIOUSE_STATE=='PROJECTS') {animateOutProjects(); CLOSE=false;}

    if(STATE=='CONTACT') {OPEN=false; TRANSITION=false; DOT_SIZE = 20;
        displacement.setAttribute("xChannelSelector", "R");
        displacement.setAttribute("yChannelSelector", "G");
        animateInContact();
        document.body.style.background = "#002d3b";
    }
    else if(PREVIOUSE_STATE=='CONTACT') {animateOutContact(); CLOSE=false;}
}

var mobileDotAnimation;

//Moves and renders each dot
function animateDots() {

    for(let i = 0; i < DOT_QUANTITY; i++) {

        //Open Screen anims
        if(STATE=='OPEN'  && !TRANSITION) {
            dotBoundries(i);
        }
        if(TRANSITION && PREVIOUSE_STATE=='OPEN') {
            checkTerminationCondition(i);
        }

        // About screen anims
        if(STATE=='ABOUT' && !TRANSITION) {
            if(dotArray[i].isTerminated) {createNewDotsForAbout(i);}
        }

        // Contact screen anims
        if(STATE=='CONTACT' && !TRANSITION) {
            if(dotArray[i].isTerminated) {createNewContactDot(i);}
        }

        //Projects screen anim
        if(i < 50 && STATE=='PROJECTS' && !TRANSITION) {
            if(dotArray[i].isTerminated) {createNewProjectsDot(i);}
        }

        if(!dotArray[i].isTerminated) {checkIfExceedsBoundries(i);}

        moveAndRenderDots(i);

    }

}

function failSafe() {
    if(DOTS_TERMINATED != DOT_QUANTITY && TRANSITION) {
        for(let i = 0; i < DOT_QUANTITY; i++) {

            dotArray[i].isTerminated = true;
    
        }
        DOTS_TERMINATED = DOT_QUANTITY;
    }
}

function checkTerminationCondition(i) {
        let x = (canvas.width/2) - dotArray[i].position[0];
        let y = (canvas.height/2) - dotArray[i].position[1];
        if(Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5) < 20) {
            
            dotArray[i] = {
                position: [100, 100],
                velocity: [0, 0],
                color: '',
                isTerminated: true
            }

            DOTS_TERMINATED++;
            
        }
}

function moveAndRenderDots(i) {
    dotArray[i].position[0] += dotArray[i].velocity[0];
    dotArray[i].position[1] += dotArray[i].velocity[1];

    if(!dotArray[i].isTerminated) {
        ctx.beginPath();
        ctx.arc(dotArray[i].position[0], dotArray[i].position[1], DOT_SIZE, 0, 2 * Math.PI);
        ctx.fillStyle = dotArray[i].color;
        ctx.fill();
        ctx.closePath();
    }
}

function dotBoundries(i) {
    if(BOUNDRIES) {
        if(dotArray[i].position[0] < 0 || dotArray[i].position[0] > canvas.width) {dotArray[i].velocity[0]*=-1}
        if(dotArray[i].position[1] < 0 || dotArray[i].position[1] > canvas.height) {dotArray[i].velocity[1]*=-1}
    }
}

function cursorInteraction() {

    rotationOffset += 0.08;
    ctx.beginPath();
    ctx.moveTo(cursorPostions[0]-(Math.cos(rotationOffset)*30), cursorPostions[1]-(Math.sin(rotationOffset)*29));
    ctx.lineTo(cursorPostions[0]+(Math.cos(rotationOffset)*30), cursorPostions[1]+(Math.sin(rotationOffset)*29));
    ctx.lineWidth = 20;
    ctx.strokeStyle = cursorColor;
    ctx.stroke();
    ctx.closePath();

}

function EXITopen() {

    for(let i = 0; i < DOT_QUANTITY; i++) {

        let x = (canvas.width/2) - dotArray[i].position[0];
        let y = (canvas.height/2) - dotArray[i].position[1];

        let randomFactor = Math.random()*0.02
        dotArray[i].velocity[0] = x*(0.025+randomFactor);
        dotArray[i].velocity[1] = y*(0.025+randomFactor);

    }
}

function EXITabout() {

    for(let i = 0; i < DOT_QUANTITY; i++) {

        if(dotArray[i].velocity[0] < 0) {
            dotArray[i].velocity[0] = -22;
        }
        else {
            dotArray[i].velocity[0] = 22;
        }

    }
}

function EXITcontact() {

    for(let i = 0; i < DOT_QUANTITY; i++) {

        let randomFactor = Math.random()*5
        dotArray[i].velocity[0] *= (0.01);
        dotArray[i].velocity[1] *= (10+randomFactor);

    }
}

function EXITprojects() {
    
    for(let i = 0; i < DOT_QUANTITY; i++) {

        let randomFactor = Math.random()*5
        dotArray[i].velocity[0] *= (15+randomFactor);
        dotArray[i].velocity[1] *= (15+randomFactor);

    }
}

//clears canvas and takes care of pre frame duties
function clear() {
    // ctx.beginPath();
    // ctx.rect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = canvColor;
    // ctx.fill();
    // ctx.closePath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


/*
    #002535
    #003851
    #3b89ac
    #bfd2d9
    #22646e


    #002258
    #06337a
    #0e72a1
    #055073
*/

const aboutButton = document.querySelector('#About');
const projectsButton = document.querySelector('#Projects');
const contactButton = document.querySelector('#Contact');
aboutButton.addEventListener('click', () => {
    if(STATE!='ABOUT') {
        // document.getElementById('contact-container').style.display = "none";
        // document.getElementById('about-container').style.display = "block";
        // document.getElementById('projects-container').style.display = "none";
        projectsButton.innerHTML = "Projects";
        aboutButton.innerHTML = "Home";
        contactButton.innerHTML = "Contact";
        buttonPressState('ABOUT')
    }
    else if(STATE=='ABOUT') {
        moveingHomeButton()
    }

});

projectsButton.addEventListener('click', () => {
    if(STATE!='PROJECTS') {
        // document.getElementById('contact-container').style.display = "none";
        // document.getElementById('about-container').style.display = "none";
        // document.getElementById('projects-container').style.display = "block";
        projectsButton.innerHTML = "Home";
        aboutButton.innerHTML = "About";
        contactButton.innerHTML = "Contact";
        buttonPressState('PROJECTS')
    }
    else if(STATE=='PROJECTS') {
        moveingHomeButton()
    }
});
contactButton.addEventListener('click', () => {
    if(STATE!='CONTACT') {
        // document.getElementById('contact-container').style.display = "block";
        // document.getElementById('about-container').style.display = "none";
        // document.getElementById('projects-container').style.display = "none";
        projectsButton.innerHTML = "Projects";
        aboutButton.innerHTML = "About";
        contactButton.innerHTML = "Home";
        buttonPressState('CONTACT')
    }
    else if(STATE=='CONTACT') {
        moveingHomeButton();
    }
});

function buttonPressState(state) {
    PREVIOUSE_STATE = STATE;
    STATE = state;
    BOUNDRIES = false;
    TRANSITION = true;
    CLOSE = true;
    OPEN = true;
    document.getElementById('opening-container').classList.remove('fadein');
    document.getElementById('opening-container').classList.add('fadeout');
    if(MIGHT_BE_MOBILE){mobileNavigation()}

}

function moveingHomeButton() {
    PREVIOUSE_STATE = STATE;
    STATE = 'OPEN';
    BOUNDRIES = true;
    TRANSITION = true;
    CLOSE = true;
    OPEN = true;

    projectsButton.innerHTML = "Projects";
    aboutButton.innerHTML = "About";
    contactButton.innerHTML = "Contact";

    if(MIGHT_BE_MOBILE){mobileNavigation()}
    // document.getElementById('contact-container').style.display = "none";
    // document.getElementById('about-container').style.display = "none";
    // document.getElementById('projects-container').style.display = "none";
}


function initDotMovementForProjects() {

    document.body.style.background = "#110830"

    for(let i=0; i < 5; i++) {
        createNewProjectsDot(i)
    }

}

function createNewProjectsDot(i) {
    let colorDecider = Math.random() * 3;
    if(colorDecider > 0 && colorDecider <= 0.3) {dotArray[i].color = '#cc981f'}
    else if(colorDecider > 0.3 && colorDecider <= 2) {dotArray[i].color = '#38296e'}
    else if(colorDecider > 2 && colorDecider <= 3) {dotArray[i].color = '#230c75'}
    
    
    if(Math.random() > 0.5) {
        dotArray[i].position[0] = 0 - 80;
        dotArray[i].position[1] = Math.random()*(canvas.height);
        dotArray[i].velocity[0] = Math.random()*6+1;
        dotArray[i].velocity[1] = Math.random()*12 - 6;
    }
    else {
        dotArray[i].position[0] = canvas.width + 80;
        dotArray[i].position[1] = Math.random()*(canvas.height);
        dotArray[i].velocity[0] = -(Math.random()*6+1);
        dotArray[i].velocity[1] = Math.random()*12 - 6;
    }

    dotArray[i].isTerminated = false;
    DOTS_TERMINATED--;
}

/*
#1c1c1c
#262626
#2b2b2b
#303030

#2e0007
#45040e
#54000d
#400000

#bdd4f0
#e0eeff
#c4deff
#dbebff
*/

function initMovementForAbout() {

    document.body.style.background = "#1c1c1c"

    for(let i=0; i < DOT_QUANTITY; i++) {
        if(i % 3 == 0) {dotArray[i].color = '#262626'}
        else if(i % 3 == 1) {dotArray[i].color = '#2b2b2b'}
        else if(i % 3 == 2) {dotArray[i].color = '#303030'}
    
        
        if(Math.random() > 0.5) {
            dotArray[i].position[0] = 0 - 200;
            dotArray[i].position[1] = (Math.random()*200-100)+canvas.height*(1/4);
            dotArray[i].velocity[0] = Math.random()*16;
            dotArray[i].velocity[1] = 0;
        }
        else {
            dotArray[i].position[0] = canvas.width + 200;
            dotArray[i].position[1] = (Math.random()*200-100)+canvas.height*(3/4);
            dotArray[i].velocity[0] = -(Math.random()*16);
            dotArray[i].velocity[1] = 0;
        }
    
        dotArray[i].isTerminated = false;
        DOTS_TERMINATED--;
    }

}

function createNewDotsForAbout(i) {

    if(i % 3 == 0) {dotArray[i].color = '#2e2e2e'}
    else if(i % 3 == 1) {dotArray[i].color = '#262525'}
    else if(i % 3 == 2) {dotArray[i].color = '#262525'}

    
    if(Math.random() > 0.5) {
        dotArray[i].position[0] = 0 - (Math.random()*200);
        dotArray[i].position[1] = (Math.random()*200-100)+canvas.height*(1/4);
        dotArray[i].velocity[0] = Math.random()*14+2;
        dotArray[i].velocity[1] = Math.random()*0.1-0.05;
    }
    else {
        dotArray[i].position[0] = canvas.width + (Math.random()*200);
        dotArray[i].position[1] = (Math.random()*200-100)+canvas.height*(3/4);
        dotArray[i].velocity[0] = -(Math.random()*14+2);
        dotArray[i].velocity[1] = Math.random()*0.1-0.05;
    }

    dotArray[i].isTerminated = false;
    DOTS_TERMINATED--;
}

/*
    #25003d
    #39045c
    #4d1870


*/

function initDotMovementForContact() {
    document.body.style.background = "#002d3b";

    for(let i = 0; i < DOT_QUANTITY; i++) {
        createNewContactDot(i)
    }

}

function createNewContactDot(i) {
    
    if(i % 3 == 0) {dotArray[i].color = '#034b61'}
    else if(i % 3 == 1) {dotArray[i].color = '#174f52'}
    else if(i % 3 == 2) {dotArray[i].color = '#0d3f4f  '}
    
    if(Math.random() > 0.5) {
        dotArray[i].position[0] = 0 - 80;
        dotArray[i].position[1] = (Math.random()*(canvas.height/2)+canvas.height/2);
        dotArray[i].velocity[0] = Math.random()*5+1;
        dotArray[i].velocity[1] = Math.random()*8+0.5;
    }
    else {
        dotArray[i].position[0] = canvas.width + 80;
        dotArray[i].position[1] = (Math.random()*(canvas.height/2)+canvas.height/2);
        dotArray[i].velocity[0] = -Math.random()*5+1;
        dotArray[i].velocity[1] = Math.random()*8+0.5;
    }

    dotArray[i].isTerminated = false;
    DOTS_TERMINATED--;

}

function checkIfExceedsBoundries(i) {

    if(dotArray[i].position[0] > canvas.width + 250 || dotArray[i].position[0] < - 250) {
        dotArray[i].isTerminated = true;
        DOTS_TERMINATED++;
    }
    else if(dotArray[i].position[1] > canvas.height + 250 || dotArray[i].position[1] < - 250) {
        dotArray[i].isTerminated = true;
        DOTS_TERMINATED++;
    }

}


