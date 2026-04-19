// 平滑滚动入场动画
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.work-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(item);
});

// 简单的视差效果
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    document.querySelector('.hero-video-wrap').style.transform = `translateY(${scroll * 0.1}px)`;
});