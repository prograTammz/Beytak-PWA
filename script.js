
function fillElm(elm,selector,count,scroll = false ,width = 0){
    let container = document.querySelector(selector);
    for (let i = 0; i < count; i++) {
        container.innerHTML += elm;
         
     }
     if(scroll){
        container.style.width = count*width +"px";
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

//route class, usage: new Route(name,htmlname,init).
//name ex:home,aboutus.
//htmlName ex: home.html,aboutus.html
//init: means if it will be run by init function as start route (later on)
function Route(name,htmlName,init,builder){
    this.name = name;
    this.htmlName = htmlName;
    this.init = init;
    this.builder = builder;
}
let home = new Route('home','home.html',true,()=>{
    fillElm(cityCard, ".city-card-inner", 10, true, 155);
    fillElm(newsCard,".news-card-inner",10,true,300);
    fillElm(assetDetail, ".featured-home-container",4);
});
let Router = [home];
//init function that fills the page with home.html when page is loaded
function init(){
    goToRoute(Router[0].name);
    
}
 window.addEventListener('hashchange',function(e){
     if(window.location.hash == ""){
         goToRoute('home');
     }
     goToRoute(window.location.hash.substr(1));
 });
//goToRoute, fills the page with the required path by the name
//loops over each bottomNavelement and remove active css class
//if the navigation drawer is open it will toggle it.
function goToRoute(name){
    if(name != "home"){
        Router.push(name);
    }
    window.location.hash = name;
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
                    for (const route of Router) {
                        if(route.name == page){
                            route.builder();
                        }
                    }
                    
                }
            );
        }
    );
}
init();

    