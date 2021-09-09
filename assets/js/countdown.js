    var countdownDate = 1631224673 * 1000;
    const lock = document.querySelectorAll(".lock-block");
    countdown();

    var timer = setInterval(function() {
        countdown();
    }, 1000);

    function countdown() {
        var today = new Date().getTime(),
            distance = countdownDate - today;
        
        if (distance < 0) {
            clearInterval(timer);
            return;
        }

        var data = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        }

        if (lock.length > 0) {
            lock.forEach((ele, index) => {
                let type = ele.getAttribute("data-type"),
                value = data.hasOwnProperty(type) ? data[type] : "00";
                if (value.toString().length < 2) {
                    value = "0" + value;
                }
                ele.firstElementChild.innerHTML = value;
            })
        }
    }