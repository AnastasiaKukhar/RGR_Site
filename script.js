//слайдер
$(document).ready(function(){
    $('.next').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});
//закріплення хедеру
$(document).ready(function() {
    var header = $('.header');
    var headerOffset = header.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > headerOffset) {
            header.css({
                'position': 'fixed',
                'top': '0'
            });
        } else {
            header.css({
                'position': 'static'
            });
        }
    });
});
//робота кнопок меню
$(document).ready(function() {
    $(".about-site").on("click", function() {
        window.location.href = "index.html#maininfo";
    });
    
    $(".gallery").on("click", function() {
        window.location.href = "gallery.html";
    });

    $(".menunews").on("click", function() {
        window.location.href = "news.html";
    });

    $(".contacts").on("click", function() {
        window.location.href = "contacts.html";
    });
});
//Новинна стрічка 
$(document).ready(function() {
    var currentIndex = 0;
    var itemsPerSlide = 4;
    var totalItems = $(".news-slide").length;
    var scrollAmount = 200; 

    function updateSlider() {
        var offset = currentIndex * itemsPerSlide * -scrollAmount;
        $(".news-slider").css("transform", "translateY(" + offset + "px)");
    }

    $(".news-prev, .news-next").on("click", function() {
        var direction = $(this).hasClass("news-prev") ? -1 : 1;
        var newIndex = currentIndex + direction;

        if (newIndex >= 0 && newIndex <= totalItems - itemsPerSlide) {
            currentIndex = newIndex;
            updateSlider();
        }
    });
});






$(document).ready(function() {
    $('.mobile-menu-button').on('click', function() {
        $('.mobile-menu-content').toggle();
    });

    $(document).mouseup(function(e) {
        var container = $(".mobile-menu-content");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
});

