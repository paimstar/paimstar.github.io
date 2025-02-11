// 获取图片元素
const image = document.getElementById('playButton');
// 定义两张图片的 URL
const imageUrls = [
    '/src/images/jushou1.jpg',
    '/src/images/jushou2.png'
];
// 当前显示图片的索引
let thisIndex = 0;
let index=0;
// 给图片添加点击事件监听器
image.addEventListener('click', function () {
    // 切换索引
    if(index%2==0&&index!=0){
    thisIndex = (thisIndex + 1) % imageUrls.length;
    // 更新图片的 src 属性
    image.src = imageUrls[thisIndex];
    }
    index++;
});