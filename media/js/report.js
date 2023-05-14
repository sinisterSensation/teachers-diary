// отчет

const table = document.createElement('table');

const students = [
    {numbers: '1', name:'Александров Артур', marks:[]},
    {numbers: '2', name:'Андреев Георгий', marks:[]},
    {numbers: '3', name:'Антонов Иван', marks:[]},
    {numbers: '4', name:'Архипова Елена', marks:[]},
    {numbers: '5', name:'Баюков Кирилл', marks:[]},
    {numbers: '6', name:'Боронин Артем', marks:[]},
    {numbers: '7', name:'Волков Семен', marks:[]},
    {numbers: '8', name:'Гаврилов Дмитрий', marks:[]},
    {numbers: '9', name:'Иванов Дмитрий', marks:[]},
    {numbers: '10', name:'Комиссаров Борис', marks:[]},
    {numbers: '11', name:'Краснов Максим', marks:[]},
    {numbers: '12', name:'Лазарев Никита', marks:[]},
    {numbers: '13', name:'Мартынов Никита', marks:[]},
    {numbers: '14', name:'Назаров Станислав', marks:[]},
    {numbers: '15', name:'Наумов Данил', marks:[]},
    {numbers: '16', name:'Прокопьев Денис', marks:[]},
    {numbers: '17', name:'Романов Кирилл', marks:[]},
    {numbers: '18', name:'Сергеев Дмитрий', marks:[]},
    {numbers: '19', name:'Сергеев Кирилл', marks:[]},
    {numbers: '20', name:'Федорашко Сергей', marks:[]},
    {numbers: '21', name:'Федоров Иван', marks:[]},
    {numbers: '22', name:'Федорова Анна', marks:[]},
    {numbers: '23', name:'Яковлев Сергей', marks:[]},
];

const marksNameCell = document.createElement('td');
const fio = document.createElement('td');
const numRowCell = document.createElement('td');
const headerRow = document.createElement('tr');

numRowCell.textContent = '№';
fio.textContent = 'ФИО';
marksNameCell.textContent = 'Оценки';

headerRow.appendChild(numRowCell);
headerRow.appendChild(fio);
headerRow.appendChild(marksNameCell);

table.appendChild(headerRow);

numRowCell.style = 'height: 40px; padding: 5px; text-align: center';
fio.style = 'height: 40px; text-align: center';
marksNameCell.style = 'height: 40px; text-align: center';
marksNameCell.colSpan = 50;


students.forEach(student => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');

    const cellForNum = document.createElement('td');
    cellForNum.textContent = student.numbers;
    row.appendChild(cellForNum);
    cellForNum.setAttribute('style', 'color:#a0a0a0; border: 1px solid #ff5300; height: 40px; width: 40px; font-size: 14px; text-align: center;')

    cell.textContent = student.name;
    row.appendChild(cell);
    table.appendChild(row);
    cell.setAttribute('style', 'color:#a0a0a0; border: 1px solid #ff5300; height: 40px; width: 170px; font-size: 14px;  padding-left: 10px;')
    table.setAttribute('style', 'background-color:#1f1f1f; border-collapse: collapse; margin: 50px auto 50px auto')
    
    student.marks.forEach(mark => {
        const newCell = document.createElement('td');
        newCell.textContent = mark;
        row.appendChild(newCell);
        newCell.setAttribute('style', 'color:#a0a0a0; border: 1px solid #ff5300; height: 40px; width: 40px; font-size: 14px; text-align: center;')
        }); 
    });
    
document.body.appendChild(table);  




cell.addEventListener('click', () => {
    choose();
})





function choose() {
    prompt('Введите оценку', ['от 2 до 5']);
}