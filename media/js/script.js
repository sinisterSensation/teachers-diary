function pageOnLoad() {
    go();
}

function blockBackBtn() {
    window.location.href = 'login.html';
}

// переход на главную страницу
function backToMainFirst() {
    window.location.href = 'mainUnconfirmed.html';
}

function backToMainSecond() {
    window.location.href = 'mainConfirmed.html';
}

function goToSchedule() {
    window.location.href = 'schedule.html';
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
    const username = document.getElementById('showed_username').value;
    const newMail = document.getElementById('mail').value;
    const newPassword = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('login', newMail);
    localStorage.setItem('password', newPassword);
    if (username == '' || newMail == '' || newPassword == '') {
    document.getElementById('login_error').innerText = 'Все поля должны быть заполнены';
    } else {
        window.location.href = 'login.html';
    }
}

// вход
function login() {
    const newMail = document.getElementById('mail').value;
    const newPassword = document.getElementById('password').value;
    const userMail = localStorage.getItem('login');
    const userPassword = localStorage.getItem('password');
    if (newMail == userMail && newPassword == userPassword) {
        window.location.href = 'mainConfirmed.html';
    } else {
        document.getElementById('login_error').innerText = 'Неверный логин или пароль'; // сообщение об ошибке ввода данных
    }
}

// дабавляем имя пользовтеля

let usernamefield = localStorage.getItem('username');
document.getElementById('userHeader').innerText = usernamefield;

