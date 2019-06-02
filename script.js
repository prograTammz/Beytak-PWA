//JS promises pollyfil
//as it checks if the Promise does exist on the browse or not,
// if not it will use the pollyfil file
if(!window.Promise){
    window.Promise = Promise;
}

//route class, usage: new Route(name,htmlname,init).
//name ex:home,aboutus.
//htmlName ex: home.html,aboutus.html
//builder: function that has building functions the will fill
function Route(title,name,htmlName,builder){
    this.title= title;
    this.name = name;
    this.htmlName = htmlName;
    this.builder = builder;
}

//Routing Objects
let home = new Route('Beytak','home','home.html',()=>{
    fillElm(cityCard, ".city-card-inner", 10, true, 155);
    fillElm(newsCardScroll,".news-card-inner",10,true,300);
    fillData(fillAssetDetail,".featured-home-container","houses");
});
//Fills The fav-body with 12 Items instead of Writting it 12 Times.
let favs = new Route('Favourites','favs','favs.html',()=>{
    fillElm(favCard, ".fav-body", 12);
});
let posts = new Route('My posts','posts', 'posts.html',()=>{
    fillElm(postCard, ".posts-body", 12);
});
let housedetail = new Route('House Details','housedetail','housedetail.html',()=>{
    fillElm(similarCard,'.house-detail-similar-houses',6);
});
let search = new Route('Search','search','search.html',()=>{
    fillElm(cityCard, ".search-explore-card-inner", 10, true, 155);
    fillElm(favCard, ".search-result-card-inner", 10);
})
let news = new Route('News','news','news.html',()=>{
    fillElm(newsCard, ".news-page-Container",10);
})
let advices = new Route('Advices','advices','advices.html',()=>{

});
let aboutus = new Route('About us','aboutus','aboutus.html',()=>{

});
let newsDetails = new Route('News Detail','newsdetail','newsdetail.html',()=>{
    fillElm(browseNewsCard, ".more-news-container",4);
});
let houselist = new Route('Houses List','houselist','houselist.html',()=>{
    fillElm(assetDetailScroll,".house-detail-card-container",10, true,300);
    fillElm(favCard,".houses-container",8);
});
let register = new Route('Register','register','register.html',()=>{

});
let addnews = new Route('Add News','addnews','addnews.html',()=>{
    
});
let addhouse = new Route('Add House','addhouse','addhouse.html',()=>{

});
//When a new Route is being added it should be also pleace in the Routes array (missing part)
let Routes = [home,favs,housedetail,search,posts,news,advices,aboutus,newsDetails,houselist,register];
let Router = [home];

//init function that fills the page with home.html when page is loaded
function init(){
    goToRoute(Router[0].name);
}

function fillElm(elm,selector,count,scroll = false ,width = 0){
    let container = document.querySelector(selector);
    for (let i = 0; i < count; i++) {
        container.innerHTML += elm;
         
     }
     if(scroll){
        container.style.width = count*width +"px";
     }
}
function fillData(fun,selector,data){
    let container = document.querySelector(selector);
    fetch(`./data/${data}.json`).then((res)=>{
        res.json().then((res)=>{
            container.innerHTML = fun(res);
        })
    })
    
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



//Listens to any change to the hash(ex:google.com/#ahashlink) and routes to it
 window.addEventListener('hashchange',function(e){
     if(window.location.hash != "home"){
        goToRoute(window.location.hash.substr(1));
         
     }else{
        goToRoute('home');
     }
     
 });
//goToRoute, fills the page with the required path by the name
//loops over each bottomNavelement and remove active css class
//if the navigation drawer is open it will toggle it.
function goToRoute(name){
    let route = Routes.find((route)=>route.name == name)
        Router.push(route);
    window.location.hash = name;
    fillContent(name,route);
    actionNavButton(route);
    recheckBottomNavActiveState(route);
    
    if(document.getElementById("navigation-drawer").classList[0] == "show-drawer"){
        toggleDrawer();
    }
    
}
function recheckBottomNavActiveState(route){
    var elms = document.getElementsByClassName("bottomNavElm");
    for (let i = 0; i < elms.length; i++) {
        elms[i].classList.remove("active");
        
    }
    try {
        document.querySelector("."+route.name).classList.add("active");
    } catch (error) {
        console.log(`%c There is an error about not finding a DOM element: ${error} `, 'background: #333333; color: white; padding: 20px; border-radius: 10px; font-family: Roboto');
    }
};


function actionNavButton(route){
    let title = document.querySelector('.navTitle');
    let returnButton = document.getElementById('top-nav-back');
    let burgerButton = document.getElementById('top-nav-burger');
    title.innerHTML=route.title;
    if(route.name != "home"){
        burgerButton.classList.add('hide');
        returnButton.classList.add('show');
    }else{
        burgerButton.classList.remove('hide');
        returnButton.classList.remove('show');
    }
}
//it take page name then make a fetch request, after it gets the html
//file it will turn it to text, then it will await and place the content
//in the pageContent DOM element
function fillContent(page,route){
    document.getElementById("pageLoading").classList.toggle("show");
    let pageContent = document.getElementById("pageContent");
    
    fetch(`./views/${page}.html`).then(
        function(res){
            res.text().then(
                (content)=>{
                    pageContent.classList.add("pre-animation");
                    document.getElementById("pageLoading").classList.toggle("show");
                    document.getElementById("pageContent").innerHTML = content;
                    setTimeout(function(){
                        pageContent.classList.remove('pre-animation')
                    },300)
                    route.builder();
                    
                }
            );
        }
    );
}

//Registering the service worker for the offline mechanism
if('serviceWorker' in navigator){
    //registering the service worker with global scope "/" the root folder, which is
    //the default setting remove the object if not needed.
    navigator.serviceWorker.register("sw.js",{scope: '/'})
    //remove if you want, just showing it's a JS promise.
    // .then(()=>console.log("Service worker is working !"))
}

function previousPage(){
    Router.pop();
    let nextRoute = Router.pop();
    goToRoute(nextRoute.name);
}
function showNumber(event){
    event.target.classList.toggle("hide");
    document.querySelector(".house-detail-seller-detail").classList.toggle("hide");
}

//these functions do validate email inputs
function validateEmail(input) {
    
    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExp.test(input[0].value);
}
function validatePassword(input1,input2){
    let regExp = RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    return input1[0].value == input2[0].value && regExp.test(input1[0].value);
}

function openModal(modalName){
    let modalContainer = document.querySelector(".modal-container");
    let modalContent = document.querySelector(".modal-content");
    
    modalContainer.classList.add("show");
    modalContent.innerHTML = modalName;

}
function closeModal(){
    let modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove("show");
}

init();

    