var OPEN_PROJECT = false;
var PROJECT_QUANTITY = 0;
let cursor = document.querySelector('#cursor');
let slidesArea = document.querySelector('#projects-view-area');
let currentLevel = 1;
let arrowUp = document.getElementById('up-arrow');
let arrowDown = document.getElementById('down-arrow');
let surroundingContainer = document.getElementById('projects-container');
let isViewingElem = false;

let cursorPostions = [0, 0];

window.addEventListener("mousemove", (e) => {
    cursorPostions[0] = e.pageX;
    cursorPostions[1] = e.pageY;
});


let allInteractiveElems = document.getElementsByClassName('cursor-hover-interact');

Array.from(allInteractiveElems).forEach(element => {
    element.addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 100px;width: 100px;opacity: 0.05;transform: translate(-50px, -50px);")});
    element.addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});

});

// projectElem[0].addEventListener('mouseenter', () => {mouseOverElem = true; if(!isViewingElem){cursor.setAttribute('style', "height: 100px;width: 100px;opacity: 0.05;transform: translate(-50px, -50px);")}});
// projectElem[0].addEventListener('mouseout', () => {mouseOverElem = false; cursor.setAttribute('style', "height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});


arrowUp.addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
arrowUp.addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});
arrowDown.addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
arrowDown.addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});


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
    if(currentLevel!=3){
        arrowDown.style.pointerEvents = "all";
        arrowDown.style.opacity = 1;
    }
})

arrowDown.addEventListener('click', ()=> {
    currentLevel++;
    slidesArea.style.top = -1*(currentLevel-1)*100+"vh";
    if(currentLevel==3) {
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


let projectHover = document.getElementsByClassName('project-elem');

Array.from(projectHover).forEach(element => {
    element.addEventListener('mouseover', () => {mouseOverElem = true; if(!OPEN_PROJECT){cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 100px;width: 100px;opacity: 0.05;transform: translate(-50px, -50px);")}});
    element.addEventListener('mouseout', () => {mouseOverElem = false; cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});

    element.addEventListener('click', () => {

        element.classList.add('selected-elem');
        arrowDown.style.pointerEvents = "none"; arrowUp.style.pointerEvents = "none";
        arrowDown.style.opacity = 0; arrowUp.style.opacity = 0;
        cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);");
        document.getElementById(`inside-`+element.id).style.opacity = 1;
        document.getElementById(`inside-`+element.id).style.pointerEvents = 'all';
        document.getElementById(`title-`+element.id).style.opacity = 0;
        setTimeout(()=>{document.getElementById(`title-`+element.id).style.pointerEvents = 'none'; }, 300)
        OPEN_PROJECT = true;
        
    });

});

surroundingContainer.addEventListener('click', () => {

    if(OPEN_PROJECT && !mouseOverElem) {
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
        else if(currentLevel!=PROJECT_QUANTITY || currentLevel!=1){
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

for(let i = 0; i < PROJECT_QUANTITY; i ++) {
    document.getElementById(`left-arrow-${projectsArray[i].id}`).addEventListener('click', ()=>{projectsArray[0].moveSlideLeft()})
    document.getElementById(`right-arrow-${projectsArray[i].id}`).addEventListener('click', ()=>{projectsArray[0].moveSlideRight()})
    document.getElementById(`left-arrow-${projectsArray[i].id}`).addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
    document.getElementById(`left-arrow-${projectsArray[i].id}`).addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});
    document.getElementById(`right-arrow-${projectsArray[i].id}`).addEventListener('mouseover', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 80px;width: 80px;opacity: 0.05;transform: translate(-40px, -40px);")});
    document.getElementById(`right-arrow-${projectsArray[i].id}`).addEventListener('mouseout', () => {cursor.setAttribute('style', "top:"+cursorPostions[1]+"px; left:"+cursorPostions[0]+"px; height: 40px;width: 40px;opacity: 1;transform: translate(-20px, -20px);")});

}
