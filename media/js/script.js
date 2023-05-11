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


// отчет

const table = document.createElement('table');

const students = [
{name:'Александров Артур', marks:[4, 5 ,6]},
{name:'Андреев Георгий', marks:[2, 3]},
{name:'Антонов Иван', marks:[4, 5 ,6]},
{name:'Архипова Елена', marks:[2]},
{name:'Баюков Кирилл', marks:[4, 5 ,6]},
{name:'Боронин Артем', marks:[4, 5 ,6]},
{name:'Волков Семен', marks:[4, 5 ,6]},
{name:'Гаврилов Дмитрий', marks:[4, 5 ,6]},
{name:'Иванов Дмитрий', marks:[4, 5 ,6]},
{name:'Комиссаров Борис', marks:[4, 5 ,6]},
{name:'Краснов Максим', marks:[2, 3]},
{name:'Лазарев Никита', marks:[2, 3]},
{name:'Мартынов Никита', marks:[4, 5 ,6]},
{name:'Назаров Станислав', marks:[2, 3]},
{name:'Наусов Данил', marks:[2, 3]},
{name:'Прокопьев Денис', marks:[2, 3]},
{name:'Романов Кирилл', marks:[4, 5 ,6]},
{name:'Сергеев Дмитрий', marks:[2, 3]},
{name:'Сергеев Кирилл', marks:[2, 3]},
{name:'Федорашко Сергей', marks:[2, 3]},
{name:'Федоров Иван', marks:[4, 5 ,6]},
{name:'Федорова Анна', marks:[2, 3]},
{name:'Яковлев Сергей', marks:[4, 5 ,6]},
];

students.forEach(student => {
const row = document.createElement('tr');
const cell = document.createElement('td');
cell.textContent = student.name;
row.appendChild(cell);
table.appendChild(row);
cell.setAttribute('style', 'color:#a0a0a0; border: 1px solid #ff5300; height: 30px; width: 155px; font-size: 14px;  padding-left: 10px;')
table.setAttribute('style', 'background-color:#1f1f1f; border-collapse: collapse;')
student.marks.forEach(mark => {
    const newCell = document.createElement('td');
    newCell.textContent = mark;
    row.appendChild(newCell);
    newCell.setAttribute('style', 'color:#a0a0a0; border: 1px solid #ff5300; height: 30px; width: 30px; font-size: 14px; text-align: center;')
    }); 
});

document.body.appendChild(table);

