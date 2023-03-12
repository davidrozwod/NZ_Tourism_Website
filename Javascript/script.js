//On page load
document.addEventListener("DOMContentLoaded", function (event) {
    // Load page at #myCarousel
    event.stopPropagation(true);
    window.location.href = "#myCarousel";

    // Limits declaration to news page
    if (window.location.href.indexOf("/news.html#myCarousel") != -1) {
        // Declaring form and email ID's
        var form = document.getElementById("modalForm");
        var email = document.getElementById("email");
        form.addEventListener("submit", validationEvent);
    }
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $("#myCarousel").carousel("next");
    });
    // Keeps modal active
    $("#staticBackdrop").modal();

    // Creating event function
    function validationEvent(evt) {
        // Conditional for email characters
        if (email.value.includes(".","@")) {
            alert('Thank you for signing up!');
            var var1 = document.getElementById("email");
            //Clearing type field
            var1.value = '';
            return;
        }
        // Prevent submition if not valid
        else {
            alert("Please enter a valid email!");
            evt.preventDefault();
            evt.stopPropagation();
            return;
        }
    }
    // Get all paths with shapeMap tag
    [].forEach.call(document.querySelectorAll('path.shapeMap'), function (item) {
        // Click Function
        item.addEventListener('click', function () {
            // Open new window with respective link
            window.open(this.getAttribute('data-link'));
        });
    });
});

