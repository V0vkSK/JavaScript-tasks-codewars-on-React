//? Четные из массива

// import { element } from "prop-types";

// import { string } from "prop-types";

// const Tests = () => {
//     const array1 = [12, 1, 6,18, 5, 9, 45];

//     const odd = array1.filter(item => (item % 2 === 0))
//     console.log(...odd);
    
    
// }
// export default Tests;


//? Напишите функцию bmi, вычисляющую индекс массы тела. (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
 
// const Test = () => {
//     function bmi (weight, height) {
//         const bmi = weight / height ** 2;
//          return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

        // if (bmi <= 18.5) { return "Underweight" }
        // else if (bmi <= 25) { return "Normal" }
        // else if (bmi <= 30) { return "Overweight" }
        // else if (bmi > 30) { return "Obese" }
        // else return "";
//     }
//     console.log(bmi(90, 1.80));

// }
// export default Test;

// ? Массив из чисел от n до 1
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// const Test = () => {
//     const revMass = [];
//     const reverseSeq = n => {
//         for (let i = n; i > 0; --i) {
//             revMass.push(i)
//         }

//     return revMass;
//     }
    
//    console.log(reverseSeq(77));
// };

// export default Test;

// ? Сумма чисел в массиве от 1 до num

// const Test = () => {
   
//     const array = [];


//     var summation = function (num) {
//         for (let i = 1; i < num + 1; ++i){
//       array.push(i);


//         }
//        const tre =  array.reduce((acc, num) => {
//         const accd = acc + num
//             return accd
//         },0)
//         return tre;

// }

//     console.log(summation(15000));
// }
// export default Test;

// ? Расчет века из года

// const Test = () => {
// function century(year) {
//     if (Number.isInteger(year / 100)) {
//         return year / 100;
//     }
//     else { return Math.trunc(year / 100 + 1) }
  
// }
//     console.log(century(101));
    
// }
// export default Test;

// ? Среднее число в массиве

// const Test = () => {
    // const arrayStart = [];
//     function find_average(array) {
//         if (array.length>0) {
//             const arrayStart = () => array.reduce((acc, item) => {
//                 return acc + item;
//             }, 0)
//             const av = arrayStart() / array.length;
//             return av;
//         }
//         else return 0;
//     }
//     console.log(find_average([]));
// }

    

// export default Test;

// ! 7кю
// ? Напишите функцию, которая разбивает строку и преобразует ее в массив слов.


// const Test = () => {
// function stringToArray(string){
// return string.split(' ')
// }
// console.log(stringToArray('fdgdf hgfd edyfrjfg dfgh'));

// }
// export default Test;

// ? Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1».
// ? Верните полученную строку.
// ? Примечание: ввод никогда не будет пустой строкой

// const Test = () => {
    
//     function fakeBin(x) {
        //   ? лучший вариант
        
//         return x.split('').map(n => n < 5 ? 0 : 1).join('');
    // }
//?  мой вариант
        
    // const newMassive = [];
    //     const numb = [...x];

    // numb.map(item => (item < 5 ? newMassive.push(0) : newMassive.push(1)))
    
    // return newMassive.join('');
     
    // }
//    console.log(fakeBin('723235457548'));
    
// }
// export default Test;

//? Our football team finished the championship. The result of each match look like "x:y".
// ? Results of all matches are recorded in the collection.
//? For example: ["3:1", "2:2", "0:1", ...]
//? Write a function that takes such collection and counts the points of our team in the championship.
// ? Rules for counting points for each match:
//? if x > y: 3 points
//?if x < y: 0 point
//?if x = y: 1 point
//?Notes:
//?there are 10 matches in the championship
//?0 <= x <= 4
//?0 <= y <= 4

// const Tests = () => {
//     const games = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"];
//   ! лучший метод
//     const points = games => games.reduce((output, current) => {
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
//   },0)
//  ! мой метод 
    // let point = 0;
    
    // function points(games) {
    //    games.forEach(element => {
    //         const nanoElement = [...element];
    //         if (nanoElement[0] > nanoElement[2]) {
    //             point += 3
    //         } else if
    //             (nanoElement[0] === nanoElement[2]) {
    //             point += 1
    //         } else {
    //             point += 0
    //         }
            
    //         return point;

    //     })
        
    //     return point; 
//  
    // }   
//     console.log(points(games));
// }        
    
// export default Tests;

// ?Проверьте, содержит ли строка одинаковое количество «x» и «o». 
// ?Метод должен возвращать логическое значение и не учитывать регистр.
// ?Строка может содержать любой символ.
// ?Examples input/output:
// ?XO("ooxx") => true
// ?XO("xooxx") => false
// ?XO("ooxXm") => true
// ?XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// ?XO("zzoo") => false

// const Tests = () => {
//     const strXO = '';
//     function XO(str) {
//         let x=0;
//         let y=0;
//         let ans;

//         const countStr = str.toLowerCase();
//         for (let i = 0; i < countStr.length; ++i){
//             countStr[i] === 'x' ? x += 1 : countStr[i] === 'o' ? y += 1 : x += 0; 
//             ans = x === y ? true : x === 0 && y === 0 ? true : false;
//             console.log(x);
//             console.log(y);
            
//         }
//         return ans

// };
//     console.log(XO(strXO));
// }
// export default Tests;

//? Создайте программу, которая фильтрует список строк и возвращает список,
// ?содержащий только имена ваших друзей.
// ?Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом!\
//? В противном случае, вы можете быть уверены, что он не...

//? Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

const Test = () => {
    const input = ["Ryan", "Kieran", "Jason", "Yous"]
    
    function friend(friends) {
    return (friends.filter(element => element.length === 4));        
    

    };
    console.log(friend(input));
    
}
       
 
export default Test;