function pageOnLoad() {
    go();
    addUsername();
}

function blockBackBtn() {
    window.location.href = 'login.html';
}

//Запускает таймер
function go() {
    window.timerId = window.setInterval(timer, 500);
}
function timer() {
    var clock = document.getElementById('clock');
    var date = new Date();
    clock.innerHTML = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}
function addZero(num) {
    if (num <= 9) return '0' + num;
    else return num;
}

// регистрация
function registration() {
    const newMail = document.getElementById('mail').value;
    const newPassword = document.getElementById('password').value;
    localStorage.setItem('login', newMail);
    localStorage.setItem('password', newPassword);
    window.location.href = 'login.html';
}

// вход
function login() {
    const newMail = document.getElementById('mail').value;
    const newPassword = document.getElementById('password1').value;
    const userMail = localStorage.getItem('login');
    const userPassword = localStorage.getItem('password');
    if (newMail == userMail && newPassword == userPassword) {
        window.location.href = 'mainConfirmed.html';
    } else {
        var newParagraph = document.createElement('p');
        var textNode = document.createTextNode('Неверный логин или пароль');
        newParagraph.appendChild(textNode);
        var existingElement = document.getElementsByTagName('button')[0];
        var parentElement = existingElement.parentNode;
        parentElement.insertBefore(newParagraph, existingElement);
        newParagraph.style.color = '#ff5300';
        newParagraph.style.fontSize = '15px';
        newParagraph.style.position = 'absolute';
        newParagraph.style.bottom = '110px';
        if (!parentElement.contains(newParagraph)) {
            parentElement.insertBefore(newParagraph, existingElement);
        }


    }
}

// дабавляем имя пользовтеля
function addUsername() {
    var newParagraph = document.createElement('p');
    var textNode = document.createTextNode('Баюков Кирилл');
    newParagraph.appendChild(textNode);
    var existingParagraph = document.getElementsByTagName('p')[0];
    var parentElement = existingParagraph.parentNode;
    parentElement.insertBefore(newParagraph, existingParagraph);
    newParagraph.style.fontSize = '18px';
    newParagraph.style.alignItems = 'center';
    newParagraph.style.display = 'flex';

}

// переход на главную страницу
function backToMainFirst() {
    window.location.href = 'mainUnconfirmed.html';
}

function backToMainSecond() {
    window.location.href = 'mainConfirmed.html';
}





