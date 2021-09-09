(function(e) {
    $(document).ready(function(e) {
        const sidebar = document.querySelectorAll(".sidebar"),
            header = document.querySelector(".navbar"),
            heightHeader = header ? header.offsetHeight : 0;
        
        if (sidebar.length > 0) {
            $.each(sidebar, function(key, ele) {
                var find = $(ele).parent().find(".scrollbar-line");
                find.length > 0 && ($(find).css('height', ele.offsetHeight + heightHeader));
            })
        }
        $(".sidebar__wrapper").on('scroll', function(e) {
            var track = $(this).find('.scrollbar-track');
            if (track.length > 0) {
                $(track).css('transform', 'translateY(' + $(this).scrollTop() + 'px)');
            }
        })
    })
})(jQuery)