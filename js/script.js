body = document.querySelector(".body");
social = document.querySelector(".social");
socialFollower = document.querySelector(".socialFollower");
mode = document.querySelector(".mode");
toggleBtn = document.querySelector(".toggleBtn");
lightMode = document.querySelector(".light-mode");
cardwrapper = document.querySelectorAll(".card-wrapper");
para = document.querySelectorAll(".para");
strong = document.querySelectorAll(".strong");
follower = document.querySelectorAll(".follower");
overviewPara = document.querySelector(".overview-para");
cardWapper = document.querySelectorAll(".card-wapper");
page = document.querySelectorAll(".page");
likes = document.querySelectorAll(".likes");

console.log(para, strong, follower, likes, overviewPara);

toggleBtn.addEventListener('click', () => {

    body.classList.toggle("lightBody");
    social.classList.toggle("lightSocial");
    socialFollower.classList.toggle("lightSocialFollower");
    mode.classList.toggle("lightMode");
    toggleBtn.classList.toggle("lightToggle");
    lightMode.classList.toggle("darkmode");
    overviewPara.classList.toggle("lightOverview");


    cardwrapper.forEach(cardwrapper => {
        cardwrapper.classList.toggle("lightCardwrapper");
    });
    para.forEach(para => {
        para.classList.toggle("lightPara");
    });
    strong.forEach(strong => {
        strong.classList.toggle("lightStrong");
    });
    follower.forEach(follower => {
        follower.classList.toggle("lightFollower");
    });
    cardWapper.forEach(cardWapper => {
        cardWapper.classList.toggle("lightCard");
    });
    page.forEach(page => {
        page.classList.toggle("lightPage");
    });
    likes.forEach(likes => {
        likes.classList.toggle("lightLikes");
    });
});