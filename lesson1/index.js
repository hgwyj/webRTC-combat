const mediaStreamContrains = {
    video: {
        frameRate: {min: 20}, //视频采集帧率
        width: {min: 640, ideal: 1280}, //视频宽度
        height: {min: 360, ideal: 720}, // 视频高度
        aspectRatio: 16 / 9 //宽高比 16:9
    }, audio: {
        echoCancellation: true,
        noiseSuppression: true, //音频开启降噪
        autoGainControl: true
    }
};
const localVideo = document.querySelector("video");
window.navigator.mediaDevices.getUserMedia(mediaStreamContrains).then((res) => {
    console.log('media', res);
    localVideo.srcObject = res;
}).catch((err) => {
    console.log('err', err);
});