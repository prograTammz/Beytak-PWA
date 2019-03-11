//fillContWithBigCard fills the provided container by it's id in the DOM by passing it's id
//and data provided to fill the card, it loops over each item and generate a card for it.
//currently it's has fixed data (NOT DONE).
function fillContWithBigCard(selector,data){
    let cardElm = `<div class="card-asset-container col-es-4 col-s-6 col-4">
            <div class ="card-outer-space">
            <div class="card-asset ">
                <div class="img-cont card-asset-img" style = "background-image: url(./asset-1.webp)">
                </div>
                <div class="card-asset-content">
                    <div class="row">
                        <div class="col-6">
                            <p class="card-asset-type">apartment</p>
                        </div>
                        <div class="col-6 center-vertically">
                            <div class="icon-container">
                                <i class="material-icons vertical-center card-asset-icon">location_on</i>
                            </div>
                            <p class="card-asset-loc">nasr city</p>
                        </div>
                    </div>
                    <p class="card-asset-desc">
                        Super Lux apartment in nasrcity
                        overlooking makram ebid street
                    </p>
                    <div class="row">
                        <div class="col-6 center-vertically">
                            <div class="icon-container">
                                <i class="material-icons vertical-center card-asset-icon">local_hotel</i>
                            </div>
                            <p class="card-asset-detail">3 Bedroom</p>
                        </div>
                        <div class="col-6 center-vertically">
                            <div class="icon-container">
                                <i class="material-icons vertical-center card-asset-icon">weekend</i>
                            </div>
                            <p class="card-asset-detail">2 Livingroom</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 center-vertically">
                            <div class="icon-container">
                                <i class="material-icons vertical-center card-asset-icon">settings_overscan</i>
                            </div>
                            <p class="card-asset-detail">160 Sq.m</p>
                        </div>
                        <div class="col-6 center-vertically">
                            <div class="icon-container">
                                <i class="material-icons vertical-center card-asset-icon">attach_money</i>
                            </div>
                            <p class="card-asset-detail">1,600,000 EGP</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>`;
        let pageContent = document.querySelector(selector);
        for (let i = 0; i < 4; i++) {
            pageContent.innerHTML += cardElm
            
        };
}   
function fillCityCard(selector){
    let card = 
    `<div class="city-card">
        <div class="city-card-img col-12"role="img" alt="A picture of a city" style="background-image: url('./img/place-holders/nasrcity.jpg')">
        </div>
        <h5 class="city-card-head">Nasr City</h5>
        <p class="city-card-subhead">Cairo</p>
    </div>`;
    let container = document.querySelector(selector);
    for (let i = 0; i < 10; i++) {
       container.innerHTML += card;
        
    }
    container.style.width = 10*155 +"px";
}
function fillNewCard(selector){
    let card = 
    `<div class="news-card">
        <div class="news-card-img col-12"role="img" alt="A picture of a city" style="background-image: url('./img/place-holders/news.jpg')">
        </div>
        <h5 class="news-card-head">New project in the new capital</h5>
        <p class="news-card-desc">Greyhound divisively hello coldly wonderfully marginally far…</p>
    </div>
    `;
    let container = document.querySelector(selector);
    for (let i = 0; i < 10; i++) {
       container.innerHTML += card;
        
    }
    container.style.width = 300*10+"px";
}
function fillElm(elm,selector,count,scroll,width){
    let container = document.querySelector(selector);
    for (let i = 0; i < count; i++) {
        container.innerHTML += elm;
         
     }
     if(scroll){
        container.style.width = 10*155 +"px";
     }
}
//toggleDrawer, scrolls the page to the top with 2 approaches one for all
//browser support and one for IOS safari support,
//then it will stop the scrolling in the body object.
//then it will show the naviation drawer and change the menu button to close
//and vice versa
function toggleDrawer(event){
    document.body.scrollTop= 0;
    document.documentElement.scrollTop = 0;
    var scrollToggled = document.body.classList.toggle("no-scroll");
    var drawerToggled = document.getElementById("navigation-drawer").classList.toggle("show-drawer");
    var menuButtonInner = document.querySelector('.navMenu i');
    if(drawerToggled && scrollToggled && event.target.className == "material-icons"){
        menuButtonInner.innerHTML = "close";
    }else{
        menuButtonInner.innerHTML = "menu";
    }
}
//init function that fills the page with home.html when page is loaded
function init(){
    fillContent("home");
    
}
//route class, usage: new Route(name,htmlname,init).
//name ex:home,aboutus.
//htmlName ex: home.html,aboutus.html
//init: means if it will be run by init function as start route (later on)
function Route(name,htmlName,init){
    this.name = name;
    this.htmlName = htmlName;
    this.init = init;
}
//goToRoute, fills the page with the required path by the name
//loops over each bottomNavelement and remove active css class
//if the navigation drawer is open it will toggle it.
function goToRoute(name){
    fillContent(name);
    var elms = document.getElementsByClassName("bottomNavElm");
    for (let i = 0; i < elms.length; i++) {
        elms[i].classList.remove("active");
        
    }
    if(document.getElementById("navigation-drawer").classList[0] == "show-drawer"){
        toggleDrawer();
    }
    
}
//it take page name then make a fetch request, after it gets the html
//file it will turn it to text, then it will await and place the content
//in the pageContent DOM element
function fillContent(page){
    fetch(`./views/${page}.html`).then(
        function(res){
            res.text().then(
                (content)=>{
                    document.getElementById("pageContent").innerHTML = content;
                    //temp placement
                    fillCityCard(".city-card-inner");
                    fillNewCard(".news-card-inner ");
                    fillContWithBigCard(".featured-home-container");
                }
            );
        }
    );
}
   
// fillContWithBigCard("pageContent");
init();

    