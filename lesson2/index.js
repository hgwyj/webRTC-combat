// 音视频设备的检测

//获取可用输入输出设备列表
window.navigator.mediaDevices.enumerateDevices().then((mediaDevices) => {
    mediaDevices.forEach(device => {
        console.log(device);
    });
});