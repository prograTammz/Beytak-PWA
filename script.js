//fillContWithBigCard fills the provided container by it's id in the DOM by passing it's id
//and data provided to fill the card, it loops over each item and generate a card for it.
//currently it's has fixed data (NOT DONE).
function fillContWithBigCard(id,data){
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
        let pageContent = document.getElementById(id);
        for (let i = 0; i < 15; i++) {
            pageContent.innerHTML += cardElm
            
        };
}   


function toggleDrawer(event){
    document.body.scrollTop= 0;
    document.documentElement.scrollTop = 0;
    var scrollToggled = document.body.classList.toggle("no-scroll");
    var drawerToggled = document.getElementById("navigation-drawer").classList.toggle("show-drawer");
    var menuButtonInner = document.querySelector('.navMenu').innerHTML;
    if(drawerToggled && scrollToggled && event.target.className == "material-icons"){
        menuButtonInner = "close";
    }else{
        menuButtonInner = "menu";
    }
}
fillContWithBigCard("pageContent");
   
   
   
    