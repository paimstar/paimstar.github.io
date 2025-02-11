// 鼠标切换页面逻辑
const sections = document.querySelectorAll(".section1,.section2,.section3,.section4,footer");
let currentSectionIndex = 0;

if (sections.length < 2) {
    console.error("Not enough sections to scroll through.");
} else {
    let isScrolling = false;

    window.addEventListener("wheel", function (event) {
        if (isScrolling) return;

        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 500); // 设置一个合理的延迟时间

        if (event.deltaY > 0) {
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                scrollToSection(currentSectionIndex);
            }
        } else {
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                scrollToSection(currentSectionIndex);
            }
        }
    });
    
    function scrollToSection(index) {
        const section = sections[index];
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
        });
    }
}

