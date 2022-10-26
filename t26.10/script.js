/********************   1   ******************/

/*let num = 10;
num = ++num;
num = num--;
console.log(num);*/
/********************   2   ******************/
/*let num = 47;
num += num 7;
num -= num 18;
num *= num 10;
num /= num 15;
alert(num);*/
/********************   3   ******************/
/*let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++ ;
num --;
alert(num);*/
/********************   &&   ******************/
let user_age = 22;
let user_name = 'Niia';
let user_company = 'monolit';
let user_profession = 'JS';

let result1 = user_age < 18 && user_name === 'Niia';
let result2 = user_company === 'monolit' && user_profession === 'Java';
let result3 = user_name === 'kutman' && user_company === 'megacom';
let result4 = user_age > 18 && user_name === 'Niia' && user_company === 'monolit' && user_profession === 'JS';

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


/*1 false + true = false
2 true + false =false
3 false + false = false
4 true + true + true + true= true*/

/********************   ||   ******************/
let user_height = 174;
let user_nationality = 'KG';
let result5 = user_height <= 180 || user_nationality === 'KZ';
let result6 = user_height >= 180 || user_nationality === 'KG';
let result7 = user_height >= 174 || user_nationality === 'KG';
let result8 = user_height >= 180 || user_nationality === 'KZ';

console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
/*
5 true + false = true
6 false + true = true
7 true + true = true
8 false + false = false*/
