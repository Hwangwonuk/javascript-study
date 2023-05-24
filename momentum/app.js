// object
const player = {
  name: "uk",
  points: 10,
  fat: false,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

// 여기서의 const는 object이기 때문에 내부의 필드값은 수정할 수 있다.
player.fat = true;
player.lashName = "potato";
console.log(player)


// function
function sayHello(nameOfPerson, age) {
  console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("uk", 10);
sayHello("lynn", 20);
sayHello("dal", 30);


function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

plus(); // NaN Not a Number 출력됨
plus(8, 60);


const player2 = {
  name: "uk",
  sayHello: function (othersPersonsName) {
    console.log("Hello! " + othersPersonsName + "nice to meet you!");
  },
};

console.log(player2.name);
player2.sayHello("lynn");

