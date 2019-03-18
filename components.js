//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////*********CARDS COMPONENTS*****////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let assetDetail = `<a href="#housedetail" class="card-asset-container col-es-4 col-s-6 col-4">
                        <div class ="card-outer-space">
                            <div class="card-asset ">
                                <div class="img-cont card-asset-img" style = "background-image: url(./img/asset-1.webp)">
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
                    </a>`;

let assetDetailScroll = `<a href="#housedetail" class="card-asset-container asset-card-scroll">
                    <div class ="card-outer-space">
                        <div class="card-asset ">
                            <div class="img-cont card-asset-img" style = "background-image: url(./img/asset-1.webp)">
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
                </a>`;
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
                    <button onclick="location.hash='#newsdetail'" class="news-card-button">Details</button>
                </div>`;
let newsCard = `<div class="col-es-4 col-s-6 col-4">
                    <div class="news-outer-space">
                    <div class="news-card">
                    <div class="news-card-img col-12"role="img" aria-label="A picture of a new" style="background-image: url('./img/place-holders/news.jpg')">
                    </div>
                    <h5 class="news-card-head">New project in the new capital</h5>
                    <p class="news-card-desc">Greyhound divisively hello coldly wonderfully marginally far…</p>
                    <button onclick="location.hash='#newsdetail'" class="news-card-button">Details</button>
                    </div>
                    </div>
                </div>`;

let browseNewsCard = `<div class="col-12">
                        <div class="news-outer-space">
                        <div class="news-card">
                        <div class="news-card-img col-12"role="img" aria-label="A picture of a new" style="background-image: url('./img/place-holders/news.jpg')">
                        </div>
                        <h5 class="news-card-head">New project in the new capital</h5>
                        <p class="news-card-desc">Greyhound divisively hello coldly wonderfully marginally far…</p>
                        <button onclick="location.hash='#newsdetail'" class="news-card-button">Details</button>
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
                                    <button onclick="location.hash='#housedetail'" class="fav-details-button"><span class="fav-details-text">Details</span></button>
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
let similarCard = `<div class="fav-container col-12">
                <div class="card-outer-space">
                    <div class="fav-card row">
                        <div class="col-7">
                            <div>
                                <h4>Nasr City</h4>
                                <p>Super Lux apartment in nasrcity overlooking makram ebid street</p>
                                <button onclick="location.hash='#housedetail'" class="fav-details-button"><span class="fav-details-text">Details</span></button>
                            </div>
                        </div>
                        <div class="col-5">
                            <div>
                                <img class="fav-img" style="background-image: url(./img/place-holders/2.jpg)">
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
                 <button onclick="location.hash='#housedetail'" class="posts-details-button"><span class="posts-details-text">Details</span></button>
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
let loginModal = `<div class="login-modal-content">
                    <h2>LOG IN</h2>
                    <form action="" method="post">
                        <label for="login-email">E-mail</label>
                        <input class="modal-input modal-email" type="email" name="login-email" id="login-email" placeholder="Email">
                        <label for="login-password">Password</label>
                        <input class="modal-input modal-password"type="password" name="login-password" id="login-password" placeholder="Password">
                        <p><strong>Invalid Email or Password.</strong> Please check your info is 
                                correctly writtern.</p>
                        <button type="submit" class="modal-submit col-5 col-offset-7">Next</button>
                    </form>
                    </div>`;
let installCalculator = `<div class="installment-calculator">
                        <label class="modal-label" for="deposit-amount">Deposit</label>
                        <p class="modal-desc">Minimum 10% of the actual price</p>
                        <input class= "modal-input" type="Text" name="deposit-amount" id="deposit-amount">
                        <label for="period-duration" class="modal-label">Period(Monthes)</label>
                        <p class="modal-desc">The seller interest is 2% yearly</p>
                        <input class="modal-input" type="number" name="period-duration" id="period-duration">
                        <div class="row">
                            <div class="col-7">
                                <p class="payment-desc">Your monthly payment would be: </p>
                                <p class="payment-amount">122,416 EGP</p>
                            </div>
                            <div class="button-cont col-5">
                                <button class="calc-button">Calculate</button>
                            </div>
                        </div>
                        </div>`;
let searchFilet = `<div class="search-modal">
                    <h4>Budget</h4>
                    <div class="row">
                        <div class="col-5">
                            <label for="budget-from" class="modal-label">From</label>
                            <input type="text" name="budget-from" id="budget-from" class="modal-input">
                        </div>
                        <div class="col-offset-2 col-5">
                                <label for="budget-to" class="modal-label">To</label>
                                <input type="text" name="budget-to" id="budget-to" class="modal-input">
                        </div>
                    </div>
                    <h4>Bedrooms:</h4>
                        <div class="row">
                            <p class="slider-value col-2 col-offset-1">1</p>
                            <div class="col-6">
                                <input class="slider" type="range" name="" id="" min="1" max="12">
                            </div>
                            <p class="slider-value col-2">12</p>
                        </div>
                    <h4>Livingrooms:</h4>
                        <div class="row">
                            <p class="slider-value col-2 col-offset-1">1</p>
                            <div class="col-6">
                                <input class="slider" type="range" name="" id="" min="1" max="8">
                            </div>
                            <p class="slider-value col-2">8</p>
                        </div>
                    <select class="landing-select-menu col-6" name="type" id="landing-search-type">
                        <option value="" selected disabled hidden>Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Commerical">Commerical</option>
                        <option value="Chalets">Chalets</option>
                    </select>
                    <button class="modal-submit col-offset-9 col-3">Ok</button>
                    </div>`;