const mediaContrains = {
    audio: false,
    video: true
};
const videoPlay = document.querySelector("video#videoPlay");
const btns = document.querySelectorAll("button");
const filtersSelect = document.querySelector('select#filter');
const pic = document.querySelector("canvas#picture");
const ctx = pic.getContext("2d");
pic.height = 480;
pic.width = 640;
btns[0].onclick = () => {
    const select = filtersSelect.value;
    if (select === "sepia") {
        ctx.filter = "sepia(1)";
    } else if (select === "grayscale") {
        ctx.filter = "grayscale(1)";
    } else if (select === "blur") {
        ctx.filter = "blur(3px)";
    } else if (select === "invert") {
        ctx.filter = "invert(1)";
    } else {
        ctx.filter = "none";
    }
    ctx.drawImage(videoPlay, 0, 0, pic.width, pic.height);
};
btns[1].onclick = () => {
    const a = document.createElement("a");
    a.download = "photo";
    a.href = pic.toDataURL("image/jpeg");
    a.click();
};
filtersSelect.onchange = function () {
    videoPlay.className = filtersSelect.value;
}
window.navigator.mediaDevices.getUserMedia(mediaContrains).then((media) => {
    videoPlay.srcObject = media;
}).catch((err) => {
    console.error(err);
});