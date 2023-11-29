// 객체 자료형
let number = new Number(273);
let string = new String('hello');
let boolean = new Boolean(true);

// 자료형 출력
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

// 변수를 선언합니다.
let number1 = 273.5210332;

// 출력합니다.
console.log(number1.toFixed(1));
console.log(number1.toFixed(4)); 

// 변수를 선언합니다.
let string1 = 'abcdefg';

// 출력합니다.
string1 = string1.toUpperCase();
console.log(string1);

// 변수를 선언합니다.
let string3 =  '안녕하세요. 좋은 아침입니다.';

// 문자열 내부에 "아침"이라는 문자열이 있는지 확인합니다.
if (string3.indexOf('아침') >= 3) {
    console.log('좋은 아침이에요!');
}



