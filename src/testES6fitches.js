import React, { Component } from 'react';

class App extends Component {
  render() {

    // Let и const

    let a = "vi"
    a = "rr"

    const aa ={name: "bob",
              age:25,
            }
    aa.name= "sdfdsfs"

    for (let i= 0; i < 3 ; i++) {
      setTimeout(function(){
        console.log(i)
      } , i*100)
    }

    // стрелочная функция
    function square(x) {
      return x*x;
    }
    const sq = (x) => {
     return  x*x;
    }
    console.log(sq(3))

    const arr = ['1' , '2' , '3' , '5'];

    const res = arr
      .map((el) => parseInt(el))
      .filter((num) => num%2)
      .reduce((max, value) => Math.max(max, value), 0) 


    console.log(res);


    const greeter = {
      greet: function (name) {
        console.log("Hello" , name)
      },

      greetAll: function (names) {
          names.forEach(
            (name) => {
              this.greet(name);
            }
          )
      }
    }

    greeter.greetAll(["bob" , "Sara" , "Oleg"]);

// значения по умолчанию

  function name(count =10 , start = 0) {
    console.log('start' , count , 'orders' , start);
  }
  name();



  // Rest параметр

  function maxi(a, b, ... num) {
    console.log(num);
  }
  maxi(1,3,5,6,7);


  // spread оператор

  let arrr = [1, 2, 3];
  let arrr2 = [5, 34, 4324];


    const shallowCopy = [...arrr, ...arrr2, 41]

    let ress = Math.max(...arrr, 4 ,...arrr2);
    console.log(shallowCopy);

    // Destructuring деструктуризация

   const person = {
     name: {
       first : 'Peter',
       last: 'Smith',
     },
     age: 27,
     role: 'admin',
   };

    // const firstName = person.firstName;
    // const lastName = person.lastName;

    const { name: { first: firstName, last: lastName} } = person;
    const {role ="user"} = person;
    console.log(role);
    console.log(firstName, lastName);


    function connect({
      host = 'localhost',
      port = 12345,
      user ='guest'}={}) {
      console.log(user, port, host);
    };
    connect();


   const dict ={
     duck:'quack',
     dog: 'wuff',
     mouse: 'squeak',
   }

    const { duck , ... allPets } = dict;
    console.log(allPets);


    // Array Destructuring

    const fib =[1,2,3,5,8,13];
    const [, bb, , cc] =fib;
    console.log(bb, cc);

    const line =[[10,17], [14,7]];
    const [[p1x , p1y] , [p2x,p2y]] =  line;
    console.log(p1x, p1y, p2x, p2y);

    const people = ['chis' , 'sandra' ,'sandra11'];
    const [chis, ...others] = people;
    console.log(chis, others);


    const dict1 ={
      duck:'quack',
      dog: 'wuff',
      mouse: 'squeak',
      hamster: 'squeak',
    };

    const resss = Object.entries(dict1)
      .filter(([, value])=> value=== 'squeak')
      .map(([key]) => key);
    console.log(resss);


    const shape = {
      type:'segment',
      coord: {
        start: [10, 15],
        end: [10, 17],
      }
    }
    const {coord:
        {start: [startX, startY],
         end: [endX, endY]}} = shape;

    console.log(startX, startY, endX, endY);


    // template listerals
    const user = 'Bob';
    const num =17;
    const txt = 'Htllo,' + user + 'you have' + num + 'letters in your inbox';

    const txt2 = `Hello ${Date.now()} ${user} you have ${2+2} letters in your inbox`;

    const items =['tea' , 'coffee']
    
    const templateHtml = `
    <ul>
      <li>${items[0]}</li>
      <li>${items[1]}</li>
    </ul>
    `;
    console.log(templateHtml);


  /*   objects */

  const x= 10;
  const y = 30;

  // const point = {
  //   x:x,
  //   y:y,

  //   draw : function () {
  //     // ...
  //   }
  // };

  // const p ={
  //   x,
  //   y
  //   draw(ctx){
  //     //...
  //   }
  // };


  const prefix = '_blah';

  const data111 = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23,
  };

  console.log(data111);


  const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
  };
  const opts = {
    user: 'John',
    pass: 'utopia',
  };

  const rest = Object.assign({} ,defaults, opts);

  console.log(rest);




  const persons = {
    names: 'Bob',
    friendss: ['Mark' , 'Bob']
  };

  const shallowCopy1 = Object.assign({} , persons);

  persons.friendss.push('Jane');


  console.log(shallowCopy1);


   /*   spread operator for objects */



   const defaultsOp = {
    host: 'localhostsdsa',
    dbName: 'blog',
    user: 'admin'
  };
  const optsOp = {
    user: 'John',
    pass: 'utopia',
  };
  const port = 8080;


  const ress1 = {
    ...defaultsOp,
    ...optsOp
    , port
    };

  console.log(ress1);

  /*  Prototypes */


  function Animal(names, voices) {
    this.names = names;
    this.voices = voices;
  };

  Animal.prototype.say =  function() {
    console.log(this.names , 'goes' , this.voices);
  }


  const dog = new Animal('Dog' , 'woff');
  const cat = new Animal('cat' , 'meow');

  dog.say();
  cat.say();

  // 3 варианта использования
  // 1. Object.sayPrototypeOf
  // 2. Object.create
  // 3. using new

// Создание объекта без прототипа:
const obj = Object.create(null);




 /*  Classes */

 class Animal1 {

  constructor(names,voices) {
    this.names = names;
    this.voices = voices;
  }
  say() {
    console.log(this.names , 'goes' , this.voices);
  }
 }

/*  duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null */
 class Bird extends Animal1 {
  constructor(names,voices, canFly) {
    super(names,voices);
    super.say();
    this.canFly = canFly;
  }

  say() {
    console.log('birbs don`t like to talk');
  }

 };

 const duck1 = new Bird('Duck', 'quack' , true);

 duck1.say();

//  модули в JS

// export {
//   add, subtract , divide as d
// }

// import {
//   {add as a, subtract} from './mymath'
// }

// import * as calc  from './mymath' (сохраняет всё в один объект)

// console.log(calc.add(1,2));

// export default Graph;

// import Graph from './mymath'


// import '.main/css'; (только в сборщиках работает)


// import joceker from 'one-linear-joke' (для библиотек- без пути)


    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <p>

            Привет гайз
          </p>
        </header>
      </div>
    );
  }
}

export default App;
