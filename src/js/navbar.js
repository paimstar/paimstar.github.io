// 监听滚动事件
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section1,.section2,.section3,.section4');
    const navLinks = document.querySelectorAll('.navbar a');

    let currentSection = '';
    
    // 检测当前滚动到的section
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // 高亮导航栏
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// 点击导航时，平滑滚动到对应的section
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
