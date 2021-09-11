window.addEventListener("load", function() {
    var pos = 0,
        oldX = 0,
        isMoving = false;
    const header = document.querySelector(".header"),
        bannerSlider = document.querySelector(".banner-slider"),
        items = document.querySelectorAll(".slide-item"),
        slideArrow = document.querySelectorAll(".slide-arrow"),
        menuToggle = document.querySelector(".menu-toggle");

    bannerSlider && renderStyled();
    window.addEventListener("resize", function() {
        bannerSlider && renderStyled();
    })
    
    slideArrow && slideArrow.forEach((item) => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            if (isMoving) return;

            let index = this.getAttribute("data-index");
            isMoving = true;
            onHandleSlide(parseInt(index));
        })
    })
    menuToggle && menuToggle.addEventListener("click", function(e) {
        e.preventDefault();

        document.body.classList.toggle("menu-opened");
    })
    document.addEventListener("scroll", function(e) {
        if (window.scrollY > 0) header.classList.add("scrolled")
        else header.classList.remove("scrolled")
    })

    function onHandleSlide(index) {

        if (index === 1) {
            pos++;

            renderStyled(-pos * window.innerWidth);
            if (pos >= items.length) {
                renderStyled(0);
                pos = 0;
            }
        } else {
            pos--;
            if (pos < 0) pos = items.length - 1;
            renderStyled(-pos * window.innerWidth);
        }

        setTimeout(() => {
            renderStyled(oldX, false);
            isMoving = false;
        }, 800);
    }

    function renderStyled(translateX = 0, animated = true) {
        let styled = `opacity: 1;width: ${window.innerWidth * items.length}px;`;
        styled += `transform: translate3d(${translateX}px, 0, 0);`;
        if (animated) styled += 'transition: transform 800ms ease 0s';

        oldX = translateX;
        bannerSlider.style = styled;
    }
})



