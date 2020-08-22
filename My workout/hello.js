//loop
const  generate = "Hello";
const numberOfTimes = 25;
let answerBox = '';

for (let i = 0 ; i <= numberOfTimes ; i++) {
    answerBox += generate;
}
console.log (answerBox);
// function 
const addTen = (number) => {
    return number + 10;
}
const experiment = addTen(20);
console.log(experiment)
// Jniko Greeting , funtion.
const jnikoPresentation =  (name,lastname,nickname,degree) => {
     return `${name} ${lastname}  Moulaqab b ${nickname} Khelaq f bni makada mqawed w kherej ${degree}.`;
}
 console.log (jnikoPresentation('walid','Rguig','Wally','Dj'))
 //scope 
 let expirementScope = 'im transparent';
  
    const addTwenty = (number2) => {
        expirementScope = " IM SO POWERFUL "
        let randomSecret = 'I did A lot of Drugs';
        return number2 + 20;
    }
      randomSecret = 'I love Food'
    console.log(addTwenty(5));
    
    console.log(expirementScope);
    // Look exercice .
    // first expirement sucess baby .
    // Math Methods Builin JavaScript Methods
let name = 'Mohcine rghouni';
console.log(name.substr(3,12))
//Object & Arrays:
    const me  = {
    name: 'Nizar',
    age:  '23',
    nickName:'Capman',
    favoriteFood:'Anything From Grandma',
    siblings: 'Bachar,Houda,Inass',
    imIHungry: true,
    numberOfLsdTrips: 55,
    goodPerson:true,
    passions: {
        passion1:'Tech-lover',
        passion2:'videogames',
        passiom3:'Music'
    }
};

// object in a function :
    const person1 = {
    name:'brahim',
    lastName:'bencsheikh',
    age:'21',
    passions: {
        passion1:'dance',
        passion2:'videogames',
        passiom3:'Music'
    }
       
};
 function objectFuntion1 (someone) {
    if(someone.age === '21' ) {
        console.log("its brahim");
    } else if (someone.age === '23'){
        console.log('Its Nizar');
    } else {
        console.log('cannot find person')
    }

}
objectFuntion1(me);
// method creation:
const cat = {
    name:'rasha',
    sound() {
        console.log('meow,meow')
}
}
cat.sound();
// Arrays functional  programing:
//Array 0
const monthOfTheYear = [
    'January',
    'Februaty',
    'March',
    'April',
    'MAY',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
console.log(monthOfTheYear)
//Array 1
const myFriends = [
    'Seuros',
    'Lord',
    'T0x',
]
console.log(myFriends.join(' | '))
console.log(myFriends.length)
myFriends.push('Dad')
console.log(myFriends)
// The Dom


