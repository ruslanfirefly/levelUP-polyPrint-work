if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

(function() {

    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function() {
            if (this.value == '') {
                this.classList.remove('dirty');
            } else {
                this.classList.add('dirty');
            }
        }, false);
    }

})();