let currentIndex = 0;
let isgame = false;
const images = document.querySelectorAll('.img-box2 img');
const indicators = document.querySelectorAll('.check-box ul li');
const totalImages = images.length;
let namebox = document.getElementById('name');

 // 页面加载完成后默认选中第一个选项
 window.onload = function() {
    const firstOption = document.querySelector('.option');
    if (firstOption) {
        selectOption(firstOption); // 调用 selectOption 函数选中第一个选项
    }
}

// 选项点击事件
function orgame(num) {
    const OptionList = document.querySelectorAll('.option');
    if (num == 0||num == 1||num == 2) {
        isgame = true;
        selectOption(OptionList[0]);
        namebox.innerHTML = '三国杀'; 
    }
    else {
        isgame = false;
        selectOption(OptionList[1]);
        namebox.innerHTML= '流萤';
    }
}
function selectOption(selectedOption) {
    // 移除之前选中的选项的 "active" 类
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('active');
    });

    // 给当前选中的选项添加 "active" 类
    selectedOption.classList.add('active');
    if (isgame == true) {
        isgame = false;   
    }

    else {
        isgame = true;
    }

}

function showImage(index) {
   
    // 隐藏所有图片
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    // 更新指示器的激活状态
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    // 更新当前索引
    currentIndex = index;

    orgame(index);
}

function nextImage() {
    let nextIndex = (currentIndex + 1) % totalImages;
    showImage(nextIndex);
}

// 自动播放
let autoPlayInterval = setInterval(nextImage, 10000);

// 点击指示器切换图片
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showImage(index);
        clearInterval(autoPlayInterval); // 重置自动播放
        autoPlayInterval = setInterval(nextImage, 10000);
    });
});

// 点击左右按钮切换图片
document.querySelector('.box-left').addEventListener('click', () => {
    let prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(prevIndex);
    clearInterval(autoPlayInterval); // 重置自动播放
    autoPlayInterval = setInterval(nextImage, 10000);
});

document.querySelector('.box-right').addEventListener('click', () => {
    nextImage();
    clearInterval(autoPlayInterval); // 重置自动播放
    autoPlayInterval = setInterval(nextImage, 10000);
});

// 鼠标悬停时暂停自动播放
document.querySelector('.img-box2').addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

// 鼠标离开时恢复自动播放
document.querySelector('.img-box2').addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextImage, 10000);
});