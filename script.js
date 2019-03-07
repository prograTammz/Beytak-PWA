
    let cardElm = `<div class="card-asset-container col-es-4 col-s-6 col-4">
            <div class ="anything">
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
        </div>`
    let pageContent = document.getElementById("pageContent");
    pageContent.innerHTML= cardElm;
    for (let i = 0; i < 15; i++) {
        pageContent.innerHTML += cardElm
        
    }