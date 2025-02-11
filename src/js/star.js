const starsContainer = document.getElementById('stars');
        const throttleInterval = 50;
        let lastTime = 0;
        const starPool = [];
        const poolSize = 50;
        for (let i = 0; i < poolSize; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.display = 'none';
            star.addEventListener('animationend', function () {
                star.style.display = 'none';
            });
            starsContainer.appendChild(star);
            starPool.push(star);
        }
        function throttle(func, interval) {
            return function (e) {
                const now = Date.now();
                if (now - lastTime >= interval) {
                    func(e);
                    lastTime = now;
                }
            };
        }
        function handleMouseMove(e) {
            const availableStar = starPool.find(star => star.style.display === 'none');
            if (availableStar) {
                // 使用 pageX 和 pageY 考虑滚动偏移量
                availableStar.style.left = e.pageX + 'px';
                availableStar.style.top = e.pageY + 'px';
                availableStar.style.display = 'block';
            }
        }
        document.addEventListener('mousemove', throttle(handleMouseMove, throttleInterval));