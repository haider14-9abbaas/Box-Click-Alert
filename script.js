document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            showAlert(box.innerText);
        });
    });

    function showAlert(boxTitle) {
        alert(boxTitle);
    }
});
