const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 문자열의 길이(개수)
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); // 2 - 1 = [1] ; index[1] = banana
console.clear();

// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach() // 'cmd' button, click 'api' => api가 선언된 곳으로 이동
fruits.forEach((fruit) => console.log(fruit));

// searching
// index0f: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

//includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

//lastIndex0f
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

// 자바스크립트의 배열에서 가장 기본적인 api 
// api; application program 'interface'


// Q1
{
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');
console.log(result);
}

// Q2
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split();
    console.log(result);
}

// Q3
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

// Q4
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}