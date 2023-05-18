// отчет

const table = document.createElement('table');

const students = [
    {numbers: '1', name:'Александров Артур', marks:[2,2,3]},
    {numbers: '2', name:'Андреев Георгий', marks:[]},
    {numbers: '3', name:'Антонов Иван', marks:[]},
    {numbers: '4', name:'Архипова Елена', marks:[4]},
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
    table.setAttribute('style', 'background-color:#1f1f1f; border-collapse: collapse; margin: 40px 400px 40px 400px')
    
    student.marks.forEach(mark => {
        const newCell = document.createElement('td');
        newCell.textContent = mark;
        row.appendChild(newCell);
        newCell.setAttribute('style', 'color:#a0a0a0; border: 1px solid #ff5300; height: 40px; width: 40px; font-size: 14px; text-align: center;')
        });   
    //     cell.addEventListener('click', () => {
    //         choose(); 
    // });
});

document.body.appendChild(table);  

    // function choose() {
    
    //     let chooseMarkBlock = document.createElement('div');
    //     let choose2 = document.createElement('button');
    //     let choose3 = document.createElement('button');
    //     let choose4 = document.createElement('button');
    //     let choose5 = document.createElement('button');
    //     let chooseNB = document.createElement('button');
    
    //     choose2.innerText = '2';
    //     choose3.innerText = '3';
    //     choose4.innerText = '4';
    //     choose5.innerText = '5';
    //     chooseNB.innerText = 'НБ';
    
    //     chooseMarkBlock.appendChild(choose2);
    //     chooseMarkBlock.appendChild(choose3);
    //     chooseMarkBlock.appendChild(choose4);
    //     chooseMarkBlock.appendChild(choose5);
    //     chooseMarkBlock.appendChild(chooseNB);
    //     document.body.appendChild(chooseMarkBlock);
    
    //     chooseMarkBlock.style = 'position: fixed; margin-top: 50vh; margin-left: 50vh; background-color: #181818; width: 450px; height: 60px; z-index: 100; top:50%; left:50%; margin:-100px 0 0 -100px;';      
    //     choose2.style = 'background-color: #ff5300; width: 70px; height: 40px; margin: 10px; color: white; border: none';
    //     choose3.style = 'background-color: #ff5300; width: 70px; height: 40px; margin: 10px; color: white; border: none';
    //     choose4.style = 'background-color: #ff5300; width: 70px; height: 40px; margin: 10px; color: white; border: none';
    //     choose5.style = 'background-color: #ff5300; width: 70px; height: 40px; margin: 10px; color: white; border: none';
    //     chooseNB.style = 'background-color: #ff5300; width: 70px; height: 40px; margin: 10px; color: white; border: none';
    
    // }

// choose2.addEventListener('click', () => { 
//     addMark2();
// });
// choose3.addEventListener('click', () => { 
//     addMark3();
// });
// choose4.addEventListener('click', () => { 
//     addMark4();
// });
// choose5.addEventListener('click', () => { 
//     addMark5();
// });
// chooseNB.addEventListener('click', () => { 
//     addMarkNB();
// });

// function addMark2() {
//     students.marks.push(2);
//     chooseMarkBlock.style = 'display: none';
    
//     }
    
//     function addMark3() {
//     students.marks.push(3);
//     chooseMarkBlock.style = 'display: none';
//     }
    
//     function addMark4() {
//     students.marks.push(4);
//     chooseMarkBlock.style = 'display: none';
//     }
    
//     function addMark5() {
//     students.marks.push(5);
//     chooseMarkBlock.style = 'display: none';
//     }
    
//     function addMarkNB() {
//     students.marks.push('НБ');
//     chooseMarkBlock.style = 'display: none';
//     }






