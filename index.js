let currentSlide = 0;
        const images = document.querySelectorAll('#carouselImages img');
        const totalSlides = images.length;

        function showSlide(slideIndex) {
            const carouselImages = document.getElementById('carouselImages');
            const indicators = document.querySelectorAll('.carousel-indicators span');
            if (slideIndex >= totalSlides) {
                currentSlide = 0;
            } else if (slideIndex < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = slideIndex;
            }
            carouselImages.style.transform = `translateX(${-currentSlide * 600}px)`;
            
            indicators.forEach(indicator => indicator.classList.remove('active-indicator'));
            indicators[currentSlide].classList.add('active-indicator');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function goToSlide(slideIndex) {
            showSlide(slideIndex);
        }