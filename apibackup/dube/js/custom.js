    var swiper = new Swiper(".mySwiper", {
        loop: true,  // Infinite loop mode
        autoplay: {
            delay: 8000, // Auto-slide every 8 seconds
            disableOnInteraction: false,
        },
        rtl: true, // Right-to-left sliding
        slidesPerView: 1, // Show only one slide at a time
        slidesPerGroup: 1, // Move one slide at a time
        centeredSlides: true, // Center the active slide
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });