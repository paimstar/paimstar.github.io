// 该文件用于初始化播放器，并监听播放按钮点击事件，切换播放音频。
function initAudioPlayer() {
    // 获取图片元素
    const playButton = document.getElementById('playButton');
    if (!playButton) {
        console.error('未找到 id 为 playButton 的元素');
        return;
    }
    // 获取所有音频元素
    const audioElements = document.querySelectorAll('#audio1, #audio2, #audio3, #audio4');
    if (audioElements.length === 0) {
        console.error('未找到任何音频元素');
        return;
    }
    // 当前播放的音频索引
    let currentAudioIndex = 0;
    // 给图片添加点击事件监听器
    playButton.addEventListener('click', function () {
        // 先暂停当前正在播放的音频
        audioElements.forEach(audio => audio.pause());
        // 获取当前要播放的音频
        const currentAudio = audioElements[currentAudioIndex];
        // 重置音频播放位置到开头
        currentAudio.currentTime = 0;
        // 播放当前音频
        currentAudio.play().catch((error) => {
            console.error('播放音频失败:', error);
        });
        // 更新索引到下一首音频，如果已经是最后一首则回到第一首
        currentAudioIndex = (currentAudioIndex + 1) % audioElements.length;
    });
}
initAudioPlayer();

