// 1. computed property // 관련: 배열
// 배열의 key 값을 다른 곳에서 할당한 변수로 사용하고 싶을 때.

let a = 'age';

// ex.
// 연산자 사용도 가능.
const human = {
    name: 'mike',
    [a]: 20,
    [1+3]: 4
}

for (let key in human) {
    alert(`${key}: ${human[key]}`);
}

// result: 
// name: mike
// age: 20
// 4: 4

///////////////////////////////////////////////////
// 2. 객체에서 사용할 수 있는 몇가지 메소드들

// Object.assign(param1, param2) // 객체 복사. 
// 이 메소드를 통하지 않으면 참조값만 복사됨. param1은 초기값, param2는 복사할 값
// 초기값에 두번째 인자가 병합되는 매커니즘.
// ex:

const cloneHuman = Object.assign({}, human);  // human을 복제

// Object.keys(param): key 배열을 반환. 객체명을 인수로 받는다.
// Object.values(param): value 배열을 반환. 객체명을 인수로 받는다.
// Object.entries(param): key와 value를 쌍으로 묶은 2중배열로 반환. 객체명을 인수로 받는다.

// ex
Object.keys(human); // result: ['name', 'age', 4]
Object.values(human); // result: ['mike', 20, 4]
Object.entries(human); // result: [['name', 'mike'], ['age', 20], [4, 4]]

// Object.fromEntries(param): 위와 반대로, key와 value가 묶인 entry를 객체로 반환함.

//////////////////////////////////////////////////
// 3. 심볼
// 객체의 프로퍼티 키는 문자열, 또는 심볼형으로 반환할 수 있다.
// symbol은 유일한 식별자. new를 붙여 생성하지 않는다.
// 심볼형은 유일성이 보장된다. 파라미터로 받는 것은 일종의 이름짓기로, 설명을 덧붙이는 것이다.

const id = Symbol('id');
//이 심볼을 객체의 key로 사용할 수 있다.
// 여기서 for-in, Object.keys, Object.values, Object.entries 등은 순회할 때 키가 심볼인 프로퍼티는 건너뛴다.
// 원본 객체에 자신이 추가한 프로퍼티를 덧붙여 사용할 때, 원본 객체를 해치지 않도록 symbol을 사용할 수 있다.
// 심볼은 이름이 같아도 모두 다른 존재. 이때 Symbol.for(); 메소드를 사용하여 생성하면 이름이 같으면 있는 것을 반환,
// 이름이 없으면 새로 심볼을 생성한다. 이때 만들어진 심볼들은 전역심볼이다.
// 심볼 함수는 매번 다른 심볼값을 생성하지만, symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 심볼을 공유한다.

// 심볼 순회 조회가 절대로 불가능한 것은 아니다.
// Object.getOwnPropertySymboles(객체명); 메소드를 사용하여 심볼 값만 볼 수 있다.
// Reflect.ownKeys(객체명); 메소드를 사용해 심볼을 포함한 모든 key를 볼 수 있다.


/////////////////////////////////////////////////
// 4. Math 내장객체
// Math.ceil(param); // 올림.
// Math.floor(param); // 내림.
// Math.round(param); // 반올림.
// 정수로 반환함.

// toFixed(param); // param으로 받은 자릿수까지 반올림하여 표현. 통계나 지표작업 할때 많이 쓰이나 반환값이 문자열이라는게 주의점
// isNaN(); // NaN인지 아닌지 확인 메소드. boolean값 반환
// parseInt(); 문자열을 정수로 변환. 여기서 특이한 것은, 문자와 숫자가 섞여있을 때 Number()은 NaN을 띄우지만 parseInt는 그 문자열이 숫자로 시작할경우
// 읽을 수 있는 곳까지 숫자로 읽고 난 다음에 반환한다는 것. 또한 두번째 인자로 진법변환이 가능.
// ex)
let b = '10px';
Number(b); // NaN
parseInt(b); // 10

// parseFloat(param); 문자열을 실수로 반환.

// Math.random() // 0~1 사이의 숫자 무작위생성
// Math.max(param1, param2 .... paramN) // 가장 큰 값 반환
// Math.min(param1, param2 .... paramN) // 가장 작은 값 반환
// Math.abs(param) // 절대값
// Math.pow(param1, param2) // 거듭제곱
// Math.sqrt(param) // 제곱근

// 5. String 내장 객체
// length: 문자열 길이
// 문자열도 배열이라 index로 접근가능, but 값을 변경하는 것은 불가능.
// toUpperCase() // 대문자로
// toLowerCase() // 소문자로
// indexOf(param) // 문자열에서 param의 위치 인덱스를 반환. 없으면 -1 반환. 포함된 것이 여러개일지라도 첫번째것만 반환
// slice(n, m) // 문자열에서 n에서 m까지 잘라 반환. 없으면 문자열 끝까지, 음수면 끝에서부터 셈.
// substring(n, m) n과 m사이 문자열을 반환하는데 앞뒤를 바꿔도 동작.
// substr(n, m) // n에서 시작해셔 m개 문자를 가져옴.
// trim() // 앞뒤공백제거
// repeat(n)// n번 반복

// 문자열의 비교
// 아스키코드 크기로 비교 가능. ('a' < 'c') // true;


////////////////////////////////////////////////
// 배열메소드 // 자바스크립트 중급 강좌 (코딩앙마) 참조
////////////////////////////////////////////////

// 6. 구조 분해 할당
// 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식.
// ex
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); //2

let users = ['mike', 'tom', 'jane'];
let [user1, user2, user3] = users;

// key에 해당하는 값이 없으면 undefined가 들어감.
// 각 변수에 미리 디폴트값을 설정하면 이를 방지할 수 있음. // 기본값
let [user11 = 'user', user22 = 'user', user33 = 'user', user44 = 'unknown user'] = users; // user11 = mike, user22 = tom, user33 = jane, user44 = unknown user;
// 공백과 쉼표를 이용하여 필요없는 요소를 생략할 수 있음. // 일부 반환값 무시
let [user111, , user333] = users; // user111 = mike, user333 = jane;
// 값을 바꿔치기 할 수 있다.
let c = 1;
let d = 2;
[c, d] = [d, c]; // c = 2, d = 1;


// 객체의 구조 분해
let user = {name: 'mike', age: 30};
let {age, name} = user; // key의 순서를 신경쓸 필요가 없음.
console.log(age); // 30
// 새로운 변수 이름을 할당할 수 있다.
let {name: userName, age: userAge} = user;
console.log(userName); // mike;
// 기본값을 사용할 수 있다. 사용방법은 배열과 동일.

// 나머지 매개변수와 전개구문 할 차례


