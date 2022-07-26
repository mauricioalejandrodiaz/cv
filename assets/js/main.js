function hideEn() {
    let languageClass = document.getElementsByClassName('en');
    for (let divs of languageClass) {
        divs.classList.add('hide');
        divs.classList.remove('show');
    }
    languageClass = document.getElementsByClassName('es');
    for (let divs of languageClass) {
        divs.classList.add('show');
        divs.classList.remove('hide');
    }
}
function hideEs() {
    let languageClass = document.getElementsByClassName('en');
    for (let divs of languageClass) {
        divs.classList.add('show');
        divs.classList.remove('hide');
    }
    languageClass = document.getElementsByClassName('es');
    for (let divs of languageClass) {
        divs.classList.add('hide');
        divs.classList.remove('show');
    }
}
function load() {
    document.addEventListener('animationend', function (e) {
        if (e.animationName === 'hide') {
            let disappearDiv = document.getElementsByClassName('hide');
            for (let divs of disappearDiv) {
                divs.classList.add('disappear');
                divs.classList.remove('appear');
            }
            let apperDiv = document.getElementsByClassName('show');
            for (let divs of apperDiv) {
                divs.classList.add('appear');
                divs.classList.remove('disappear');
            }
        }
    });
    var es = document.getElementById("es");
    es.addEventListener("click", hideEn, false);
    var en = document.getElementById("en");
    en.addEventListener("click", hideEs, false);
}
document.addEventListener("DOMContentLoaded", load, false);

