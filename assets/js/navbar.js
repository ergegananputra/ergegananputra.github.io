$(document).ready(function() {
    $(window).scroll(function() {
        $('section').each(function() {
            var sectionId = $(this).attr('id');
            var height = $(this).outerHeight();
            var offset = $(this).offset().top - 50;
            var scrollTop = $(window).scrollTop();

            if (scrollTop > offset && scrollTop < offset + height) {
                $(".nav-link[href='#" + sectionId + "']").addClass('active');
            } else {
                $(".nav-link[href='#" + sectionId + "']").removeClass('active');
            }
        });
    });
});