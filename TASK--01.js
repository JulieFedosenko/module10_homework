//Вариант--1
//Вариант--1 этап--1


let value = prompt('Введите значение');
let numberValue = +value;
console.log(typeof numberValue)//в этапе--2 эта строка стирается

//Вариант--1 этап--2

if (isNaN(numberValue)) {
  console.log("Упс, кажется, вы ошиблись");
} else if (numberValue % 2 === 0) {
  console.log("Чётное число");
} else {
  console.log("Нечётное число");
}

//Вариант--2

let value1 = prompt('Введите значение');
let numberValue1 = +value1;
if (typeof numberValue1 === 'number'&& !isNaN(numberValue1)){
    if (numberValue1 %2 === 0){
        console.log("четное число");
    } else {
        console.log ("нечетное число");
    }
  

} else{
  console.log("Упс, кажется, вы ошиблись");
}