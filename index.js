let data = [
    {
        id: 0, title: "Axie Tri-Force", description: 
        "This casual game combines Little Green Games and SkyMavis, with an axie character inspired by the popular SkyMavis game Axie Infinity ",
        image: "./crossads/images/com.SkyMavis.AxieMiniTriforce.png",
        imageGooglePlay: "./imageWeb/gitbook.png",
        linkGooglePlay: "https://littlegreen.gitbook.io/axie-mini-tri-force/",
        textHeaderGooglePlay: "Gitbook", textMoreGooglePlay: "(available)",
        imageAppStore: "./imageWeb/skymavis.png",
        textHeaderAppStore: "Mavis Hub", textMoreAppStore: "(available)",
        linkAppStore: "https://welcome.skymavis.com/download/",
    },
    {
        id: 1, title: "Only Way Is UP", description: 
        "Prepare to push your limits and embark on an adrenaline-fueled adventure in Only Way Is UP - Climb Parkour! This dynamic and heart-racing game is the perfect fusion of parkour and climbing, offering an exhilarating experience that will keep you on the edge of your seat.",
        image: "./crossads/images/com.onlywayisup.climbparkour.png",
        imageGooglePlay: "./imageWeb/googleplay.png",
        linkGooglePlay: "https://drive.google.com/file/d/14bXehyUJxSm1QWwOIV0xBkdY9aqVcE-k/view?usp=sharing",
        textHeaderGooglePlay: "Google Play", textMoreGooglePlay: "(available)",
        imageAppStore: "./imageWeb/itchio.png",
        textHeaderAppStore: "Website", textMoreAppStore: "(available)",
        linkAppStore: "https://littlegreengames.itch.io/only-way-is-up",
    }
];


let renderHtml = function (arr) {
    let html = "";
    arr.map((item, index) => {
        html += `
        <div class="row boder mt-4" style = "background-color: #ffffff">
               <div class="col-lg-3 " style=" padding: 25px">
                        <div class=" ">
                            <img style="border-radius: 10px; width: 70%;"
                                class="img-fluid "
                                alt=""
                                src="${item.image}">
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row text-left mt-4">
                            <div class="text-left">
                                <h4>${item.title}</h4>
                            </div>
                            <div>
                                <p style = "font-size: 12px;">${item.description}</p>
                            </div>
                        </div>
                        <div class="row text-left mt-2" id="listButton">
                            <div class="col-lg-4" onclick="openLink(this)" data-link="${item.linkGooglePlay}">
                                <div class="btn btn-info button" style="">
                                    <div style="padding: 5px;">
                                        <img src="${item.imageGooglePlay}" alt="" style="width: 30px; height: 30px; padding: 5px">
                                    </div>
                                    <div style="margin-left: 30px;">
                                        <span style="font-size: 14px; padding: 0px;margin: 0px;">${item.textHeaderGooglePlay}</span>
                                        <p style="font-size: 12px;padding: 0px; margin: -5px;">${item.textMoreGooglePlay}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4" onclick="openLink(this)" data-link="${item.linkAppStore}">
                                <div class="btn btn-info button" style="">
                                    <div style="padding: 5px;">
                                        <img src="${item.imageAppStore}" alt="" style="width: 30px; height: 30px; padding: 5px">
                                    </div>
                                    <div style="margin-left: 30px;">
                                        <span style="font-size: 14px; padding: 0px; margin: 0px;">${item.textHeaderAppStore}</span>
                                        <p style="font-size: 12px;padding: 0px;margin: -5px;">${item.textMoreAppStore}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
        </div>
        `
    })
    $("#content").append(html);
}
renderHtml(data);
let openLink = function (item) {
    let link = $(item).data("link");
    window.open(link)
}