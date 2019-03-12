//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////*********CARDS COMPONENTS*****////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let assetDetail = `<div class="card-asset-container col-es-4 col-s-6 col-4">
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


let cityCard = `<div class="city-card">
                    <div class="city-card-img col-12"role="img" aria-label="A picture of a city" style="background-image: url('./img/place-holders/nasrcity.jpg')">
                    </div>
                    <h5 class="city-card-head">Nasr City</h5>
                    <p class="city-card-subhead">Cairo</p>
                </div>`;


let newsCardScroll = `<div class="news-card-scroll">
                    <div class="news-card-img col-12"role="img" aria-label="A picture of a new" style="background-image: url('./img/place-holders/news.jpg')">
                    </div>
                    <h5 class="news-card-head">New project in the new capital</h5>
                    <p class="news-card-desc">Greyhound divisively hello coldly wonderfully marginally far…</p>
                </div>`;
let newsCard = `<div class="col-es-4 col-s-6 col-4">
                    <div class="news-outer-space">
                    <div class="news-card">
                    <div class="news-card-img col-12"role="img" aria-label="A picture of a new" style="background-image: url('./img/place-holders/news.jpg')">
                    </div>
                    <h5 class="news-card-head">New project in the new capital</h5>
                    <p class="news-card-desc">Greyhound divisively hello coldly wonderfully marginally far…</p>
                    </div>
                    </div>
                </div>`;
//The col-3 Indicates that Big Screens (Desktops and Laptops usually) Each Container
//Takes 1/4 of The Page.
let favCard = `<div class="fav-container col-es-4 col-s-6 col-3">
                    <div class="card-outer-space">
                        <div class="fav-card row">
                            <div class="col-7">
                                <div>
                                    <h4>Nasr City</h4>
                                    <p>Super Lux apartment in nasrcity overlooking makram ebid street</p>
                                    <button class="fav-details-button"><span class="fav-details-text">Details</span></button>
                                </div>
                            </div>
                            <div class="col-5">
                                <div>
                                    <img class="fav-img" style="background-image: url(./img/place-holders/5.jpg)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

let postCard = `<div class="posts-container col-es-4 col-s-6 col-4">
 <div class="card-outer-space">
     <div class="posts-card row">
         <div class="col-8">
             <div>
                 <h4>Offer ID : 12345678</h4>
                 <p>Super Lux apartment in nasrcity overlooking makram ebid street</p>
                 <button class="posts-details-button"><span class="posts-details-text">Details</span></button>
             </div>
         </div>
         <div class="col-4">
             <div>
                 <img class="posts-img" style="background-image: url(./img/place-holders/5.jpg)">
                 <p class = "offerStatusApproved">Approved</p>
             </div>
         </div>
     </div>
 </div>
</div>
 `;