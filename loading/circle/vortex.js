(function ($) {
    $(document).ready(function (e) {
        const vortex = $("#vortex"),
            kids = vortex.children();

            var vortexHalfHeight = vortex.height() / 2,
            vortexHalfWidth = vortex.width() / 2,
            positionsCount = kids.length * 4,
            radiantFactor = (positionsCount / 2) / Math.PI,
            timeEach = (1.2 / (kids.length - 1)).toFixed(1);

        kids.each(function (i) {
            var kidHalfHeight = $(this).height() / 2;
            var kidHalfWidth = $(this).width() / 2;

            var kidPositions = [];

            for (var j = 0; j < positionsCount; j += 1) {
                kidPositions
                    .push({
                        top: ((1 + Math.sin(Math.PI +
                                (j / radiantFactor))) * vortexHalfHeight) -
                            kidHalfHeight,
                        left: vortexHalfWidth *
                            (1 + Math.cos(j / radiantFactor)) -
                            kidHalfWidth
                    });

            }

            var positionIndex = i *
                Math.round(positionsCount / kids.length);

            $(this).css({
                top: kidPositions[positionIndex].top,
                left: kidPositions[positionIndex].left,
                animationDelay: i * -timeEach + 's'
            });

        });
    })
})(jQuery);