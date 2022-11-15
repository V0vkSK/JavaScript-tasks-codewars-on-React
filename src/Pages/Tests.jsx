import styles from '../Pages/css/Tests.module.scss';
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

// const input = ["Ryan", "Kieran", "Jason", "Yous"]

// function friend(friends) {
// return (friends.filter(element => element.length === 4));
// };
// console.log(friend(input));

//? Банкоматы позволяют использовать 4 - или 6 - значные PIN - коды,
//? а PIN - коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
//? Если функции передана допустимая строка PIN - кода, верните true, иначе верните false.

// const Test = () => {

//     function validatePIN(pin) {

//    const checkLength = pin.length === 4 || pin.length === 6;

//     const numMatch = /^[0-9]/g
//     var er = /^-?[0-9]+$/;

//         if (er.test(pin)) {
//         if (checkLength && pin.match(numMatch)){
//         return true;
//         }
//         }
//         return false;
//         }

//     const a = validatePIN('12.00');

//     console.log(`answer ${a}`);

//     }
// export default Test;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке.
// ?Все пробелы в строке должны быть сохранены.
// ? "This is an example!" ==> "sihT si na !elpmaxe"
// ? "double  spaces"      ==> "elbuod  secaps"

// const Test = () => {
// function reverseWords(str) {
//     return (
//         // split -- разбивает строку на символы;
//         // reverse -- переворачивает массив;
//         // join -- собирает строку из массива.
// str.split("").reverse().join("") )
//     }
//     const a = "fgdfg trth fgh"
//     console.log(reverseWords(a));

// }
// export default Test;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ?Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива
// ?минимум из 4 положительных целых чисел.Не будут переданы числа с плавающей запятой или неположительные целые числа.
// ?Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.
// ?[10, 343445353, 3453445, 3453545353453] должен вернуть 3453455.

// const Test = () => {

//     const numbers = [0, 6, 100, 7, 9562, 10545, 1, 356, 2];
//     function sumTwoSmallestNumbers(numbers) {
//         numbers.sort((a, b) => a - b)
//         return numbers[0]+numbers[1]

// }

//     console.log(sumTwoSmallestNumbers(numbers));

// }
// export default Test;

// ?Сможете ли вы найти иголку в стоге сена?
// ?Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иглу».
// ?После того, как ваша функция найдет иглу, она должна вернуть сообщение(в виде строки),
// ? в котором говорится: "найдена игла в положении " плюс индекс, в котором она нашла иглу, поэтому:

// const Test = () => {
// const haystackArr = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

//     function findNeedle(haystack) {
//         return haystack.findIndex(isNeedle => isNeedle === 'needle')
//     }

//     console.log(`найдена игла в положении: ${findNeedle(haystackArr)}`);

//     }
// export default Test;

// ?Учитывая массив целых чисел, вернуть новый массив с удвоением каждого значения.
// ?Например:
// ?[1, 2, 3] --> [2, 4, 6]
// maps = x => x.map(e => e * 2);

// const Test = () => {
//     const xx =[1, 2, 3,12]
// function maps(x){
// return x.map(number =>number * 2)
//     }
//     console.log(maps(xx));

// }
//     export default Test;

// ?Натан любит кататься на велосипеде.
// ?Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
// ?Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан,
// ?округленное до наименьшего значения.

// const Test = () => {
//     const time = 5;
//     const litres = time => Math.floor(time * 0.5)
//     // const litres = time => ~~(time * 0.5)      одно и тоже

//     console.log(litres(time));

// }
// export default Test;

// ? Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// ? Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real

// const Test = () => {
//     var str = "How can mirrors be real if our eyes aren't real";

//     String.prototype.toJadenCase = function () {
//         return console.log(
//             this.split(' ')
//                 .map(el => el.charAt(0).toUpperCase() + el.slice(1))
//                 .join(' '),
//         );
//     };
//     str.toJadenCase();
// };

// export default Test;

// ?Изограмма — это слово, в котором нет повторяющихся букв, последовательных
// ?или непоследовательных.Реализуйте функцию, определяющую, является ли строка,
// ?содержащая только буквы, изограммой.Предположим, что пустая строка является
// ?изограммой.Игнорировать регистр букв.
// ?"Dermatoglyphics" --> true
// ?"aba" --> false
// ?"moOse" --> false (ignore letter case)

// const Test = () => {
//     const str = 'kfjdhtWE1231';
//     function isIsogram(str) {
//         const arr = str.toLowerCase().split('');
//         return new Set(arr).size === str.length ? true : false;
//     }
//     console.log(isIsogram(str));
// };
// export default Test;

// ?Рассмотрим массив / список овец, где некоторые овцы могут отсутствовать на своем месте.
// ?Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве(true означает наличие).
// ?Hint: Don't forget to check for bad values like null/undefined

// const Test = () => {
//     const array1 = [
//         true,
//         true,
//         true,
//         false,
//         true,
//         true,
//         true,
//         true,
//         true,
//         false,
//         true,
//         false,
//         true,
//         false,
//         false,
//         true,
//         true,
//         true,
//         true,
//         true,
//         false,
//         false,
//         true,
//         true,
//     ];
//     function countSheeps(arrayOfSheep) {
//         return arrayOfSheep.reduce((acc, sheep) => {
//             console.log(sheep);
//             return (acc += sheep === true);
//         }, 0);
//     }
//     console.log(countSheeps(array1));
// };
// export default Test;

// ?Дан массив целых чисел.
// ?Возвращает массив, где первый элемент — это количество положительных чисел,
// ?а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
// ?Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
//? For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// const Test = () => {
//     const testData = null;

//     function countPositivesSumNegatives(input) {
//         if (!input || !input.length) return [];

//         const countPositive = input.reduce((acc, number) => {
//             return (acc += number > 0);
//         }, 0);
//         const summNegative = input.reduce((acc, number) => {
//             return number < 0 ? (acc = acc + number) : (acc = acc);
//         }, 0);

//         return [countPositive, summNegative];
//     }
//     console.log(countPositivesSumNegatives(testData));
// };
// export default Test;

// ?Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.
// ?Дайте ответ в виде строки, соответствующей «нечетному» или «четному».
// ?Если входной массив пуст, рассматривайте его как: [0] (массив с нулем).

// const Test = () => {
//     const arr = [1, 2, 56, 6, 9, 7, 5, 4, -12, -456];

//     function oddOrEven(array) {
//         const sumArray = array.reduce((acc, num) => {
//             return acc + num;
//         }, 0);
//         return sumArray % 2 === 0 ? 'even' : 'odd';
//     }
//     console.log(oddOrEven(arr));
// };
// export default Test;

// ?Тролли атакуют ваш раздел комментариев!
// ?Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// ?Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
// ?Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!».
// ?Примечание: для этой ката y не считается гласной.

// const Test = () => {
//     console.log('-------------------------------');
//     // Example:
//     const str =
//         "No offense but,\nYour writing is among the worst I've ever read";
//     //          "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//     // Function
//     function disemvowel(str) {
//         const vowels = 'aeiouAEIOU';

//         return str
//             .split('')
//             .filter(el => !vowels.split('').includes(el))
//             .join('');
//         // Another variants
//         // disemvowel = str => str.replace(/[aeiou]/gi, '');
//     }

//     // Calling function
//     console.log(disemvowel(str));
//     // ------------------------------------------

//     return (
//         <div className={styles.container}>
//             <h1>Test Page</h1>
//         </div>
//     );
// };
// export default Test;

// ?Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open.
// ?Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, в какую категорию они будут помещены.
// ?Чтобы быть Senior, член должен быть не моложе 55 лет и иметь гандикап больше 7.
// ?В этом крокетном клубе гандикап варьируется от - 2 до + 26; чем лучше игрок, тем ниже гандикап.
// ?Input
// ?Ввод будет состоять из списка пар. Каждая пара содержит информацию об одном потенциальном члене.
// ?Информация состоит из целого числа для возраста человека и целого числа для инвалидности человека.
// ?Output
// ?Вывод будет состоять из списка строковых значений (в Haskell и C: Open или Senior), указывающих,
// ?должен ли соответствующий член быть помещен в категорию Senior или Open.

// const Test = () => {
//     console.log('-------------------------------');
//     // Example:
//     const input = [
//         [18, 20],
//         [45, 2],
//         [61, 12],
//         [37, 6],
//         [21, 21],
//         [78, 9],
//     ];
//     //  output = ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior'];
//     // Function
//     function openOrSenior(data) {
//         let arrOutput = [];
//         data.map(el =>
//             el[0] > 55 && el[1] > 0
//                 ? arrOutput.push('Senior')
//                 : arrOutput.push('Open'),
//         );
//         return arrOutput;
//     }
//     // Calling function
//     console.log(openOrSenior(input));
//     // ------------------------------------------

//     return (
//         <div className={styles.container}>
//             <h1>Test Page</h1>
//         </div>
//     );
// };
// export default Test;

// ?Дезоксирибонуклеиновая кислота, ДНК является основной молекулой хранения информации в биологических системах.
// ?Он состоит из четырех оснований нуклеиновых кислот гуанина(«G»), цитозина(«C»), аденина(«A») и тимина(«T»).
// ?Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках.
// ?РНК немного отличается от ДНК своей химической структурой и не содержит тимина.
// ?В РНК тимин заменен другой нуклеиновой кислотой урацилом(«U»).
// ?Создайте функцию, которая переводит заданную строку ДНК в РНК.
// ?Например:
// ?"GCAT" => "GCAU"
// ?Входная строка может быть произвольной длины, в частности, она может быть пустой.
// ? Все входные данные гарантированно верны, т.е.каждая входная строка будет состоять только из букв «G», «C», «A» и / или «T».

// const Test = () => {
//     console.log('-------------------------------');
//     // Example:
//     const dna = 'TTTT';
//     // Function
//     function DNAtoRNA(dna) {
//         return dna.replaceAll('T', 'U');
//     }
//     // Calling function
//     console.log(DNAtoRNA(dna));
//     // ------------------------------------------

//     return (
//         <div className={styles.container}>
//             <h1>Test Page</h1>
//         </div>
//     );
// };
// export default Test;

// ?Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// ?Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины, и false в любом другом случае.
// ?(В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).

// const Test = () => {
//     console.log('-------------------------------');
//     // Example:
//     const a = 1;
//     const b = 2;
//     const c = 3;
//     // Function
//     function isTriangle(a, b, c) {
//         return a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b
//             ? true
//             : false;
//     }
//     // Calling function
//     console.log(isTriangle(a, b, c));
//     // ------------------------------------------

//     return (
//         <div className={styles.container}>
//             <h1>Test Page</h1>
//         </div>
//     );
// };
// export default Test;

// ?Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.
// ?На выходе должны быть две заглавные буквы с точкой, разделяющей их.
// ?Это должно выглядеть так:
// ?Сэм Харрис => SH
// ?Патрик Фини => P.F.

// const Test = () => {
//     console.log('-------------------------------');
//     // Example:
//     const fullName = 'Patricia Finn';

//     // Function
//     function abbrevName(name) {
//         return name
//             .split(' ')
//             .map(el => el[0])
//             .join('.')
//             .toUpperCase();
//     }
//     // Calling function
//     console.log(abbrevName(fullName));
//     // ------------------------------------------

//     return (
//         <div className={styles.container}>
//             <h1>Test Page</h1>
//         </div>
//     );
// };
// export default Test;

// ?Создайте функцию с двумя аргументами, которая будет возвращать массив первых n кратных x.
// ?Предположим, что и заданное число, и количество подсчетов будут положительными числами больше 0.
// ?Возвращайте результаты в виде массива или списка (в зависимости от языка).
// ?Примеры
// ?countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// ?countBy(2, 5) === [2, 4, 6, 8, 10]

const Test = () => {
    console.log('-------------------------------');
    // Example:

    // Function
    function countBy(x, n) {
        let z = [];
        let i = 1;
        let count = 0;
        do {
            console.log(i);
            if (i % x === 0) {
                z.push(i);
                i++;
                count++;
            } else i = i;
        } while (count < n);

        return z;
    } // Calling function
    console.log(countBy(2, 5));
    // ------------------------------------------

    return (
        <div className={styles.container}>
            <h1>Test Page</h1>
        </div>
    );
};
export default Test;
