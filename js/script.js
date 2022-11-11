// const calcAge = function(birthYear){
//     return 2037-birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65-age

//     if (retirement > 0 ){
//         return `${firstName} retires in ${retirement} years`
//     }else{
//         return `${firstName} has already retired`
//     }

// }

// result = yearsUntilRetirement(1970, 'Victor')
// console.log(result)

// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3

// avgDolphins = calcAverage(85,54,41)
// avgKoalas = calcAverage(23,34,27)

// const checkWinner = function(avgDolphins, avgKoalas){
//     if (avgDolphins > avgKoalas*2 ){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     }else if(avgKoalas > avgDolphins*2){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     }else{
//         console.log('No winner')
//     }

// }
// checkWinner(avgDolphins,avgKoalas)

// const friends = ['John', 'Michael', 'Peter']
// friends[1] = 'Jay'
// friends.push('Michael')
// friends.unshift('Steven')
// friends.pop()
// friends.shift()
// console.log(friends.includes('John'))

// const calTip = function(bill){
//     if(bill> 50 && bill<300){
//         return bill*0.15
//     }else{
//         return bill*0.20
//     }
// }

// const bills = [125,555,44]
// const tips = [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])]
// const total =[bills[0]+': ' +tips[0],bills[1]+': ' +tips[1],bills[2]+': ' +tips[2]]

// console.log(bills)
// console.log(tips)
// console.log(total)

// const victor = {
//     firstName : 'Vctor',
//     lastName : 'Kituku',
//     statusR : 'dating',
//     profession: 'programmer',
//     languages : ['swahili', 'kamba', 'English'],
//     hasDriversLicense: false ,
//     birthYear:1993,
//     calcAge : function(){
//         return 2022-this.birthYear
//     },
//     // statement: `${this.firstName} is a ${this.calcAge} year old ${this.profession}, he has ${this.hasDriversLicense? 'a' : 'no'} Drivers license`,

// }
// victor.location = 'Kenya'
// victor['twitter'] = 'vik_theafrican'

// statement = `${victor.firstName} speaks ${victor.languages.length} laguages and his best is ${victor.languages[0]}`
// console.log(statement)

// console.log(victor.calcAge())

// statement = `${victor.firstName} is a ${victor.calcAge()} year old ${victor.profession}, he has ${victor.hasDriversLicense? 'a' : 'no'} Drivers license`
// console.log(statement)

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height:1.69,
//     calcBmi: function(){
//         return this.mass/(this.height*this.height)

//     }

// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height:1.95,
//     calcBmi: function(){
//         return this.mass/(this.height*this.height)

//     }

// }

// if (john.calcBmi() > mark.calcBmi()){
//     console.log(`John Smiths BMI(${john.calcBmi()}) is higher than Mark Millers BMI(${mark.calcBmi()})`)
// }else if(mark.calcBmi() > john.calcBmi()){
//     console.log(`Mark Millers BMI(${mark.calcBmi()}) is greater than John Smiths BM(${john.calcBmi()})`)
// }else{
//     console.log(mark.calcBmi());
// }

// for(let rep =1; rep<=10; rep++){
//     console.log(`Lifting weights repetition ${rep}`)
// }

// const victorArray = [
//     'Victor',
//     'Kituku',
//     29,
//     'Programmer',
//     ['peter', 'john', 'mark'],
//     true
// ]

// for(let i = 0; i< victorArray.length; i++){
//     console.log(victorArray[i])
// }

// const years = [1991,2007,1969, 2020]
// const ages = []

// for(let i = 0; i < years.length; i++){
//     ages.push(2037-years[i])
// }

// console.log(ages)

// const victorArray = [
//     'Victor',
//     'Kituku',
//     29,
//     'Programmer',
//     ['peter', 'john', 'mark'],
//     true
// ]

// for(let i  = victorArray.length - 1; i => 0; i--){
//     console.log(victorArray[i])
// }

// let rep = 1

// while(rep <= 10 ){
//     console.log(`Lifting weights repetition ${rep}`)
//     rep++
// }
// let dice = Math.trunc(Math.random() * 6)+1

// console.log(dice)

// while (dice !== 6){
//     console.log(`you rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6)+1
// }

// const bills = [22,295,176,440,37,105,10,1100,86,52]
// const tips = []
// const totals = []

// for (let i = 0; i < bills.length; i++){
//     const calTip = function(bills){
//         if(bills[i]> 50 && bills[i]<300){
//             tips.push(bills[i]*0.15)
//             totals.push(bills[i] + tips[i])

//         }else{
//             tips.push(bills[i]*0.2)
//             totals.push(bills[i] + tips[i])
//         }
//     }

//     calTip(bills)

// }

// console.log(bills)
// console.log(tips)
// console.log(totals)

// const calcAverage = function(arr){
//     let sum = 0
//     for (let i = 0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum/arr.length

// }

// console.log(calcAverage(bills))

// setTimeout(()=>{
//     console.log('Hello world')
// },2000)

// Async JS Traversy Crash Course //

// const posts = [
//     {title:'Post 1', body:'This is post one'},
//     {title:'Post 2', body:'This is post two'}
// ]

// function getPosts(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post, index)=>{
//             output+=`<li>${post.title}</li>`
//         })
//     document.body.innerHTML = output;
//     },1000)
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);

//             const error =  false;
//             if(error){
//                 resolve()
//             }else{
//                 reject('Something went wrong')
//             }
//         })
//     })
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post)
//             const error = false
//         if(!error){
//             resolve()

//         }else{
//             reject('Something went wrong')
//         }
//         },2000);

//     })
// }

// createPost({title:'Post 3', body:'This is post three'}).then(getPosts).catch(error=>console.log(error))

// async function init(){
//     await createPost({title:'Post 3', body:'This is post three'});

//     getPosts();
// }

// init()
// const promise1 = Promise.resolve('Hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'Good Bye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(values=>console.log(values))

// Fetch API //
// fetch('https://reqres.in/api/users').then(res=>{
//     if (res.ok){
//         return res.json()
//         console.log('SUCCESS')
//     }else{
//         console.log('FAILED')
//     }
// }).then(data=>console.log(data))

// const names =['james', 'jess', 'lilly', 'sevy']

// names.forEach((name)=> console.log(name))

// const myForEach = (arr, cb)=>{
//     for (let i = 0;i<arr.length;i++){
//         const element = arr[i]
//         cb(element)
//     }
// }
// myForEach(names,(name)=>{
//     console.log(name)
// })

// ARROW FUNCTIONS //
// let age = 1
// let name = age>10 ? "pedro" : "victor"
// console.log(name)
// let description = age>=18? "you are an a adult" :"You are a kid"
// console.log(description)

// OBJECTS //
// const person = {
//     name:"Victor",
//     age:"29",
// }

// const person2 = {...person, name:"jack"}

// const{ name, age, } = person2

// console.log(name, age, )

// let names = ["pedro", 'jessica', 'carol', 'pedro', 'pedro']

// const newNames = names.map(name=>{
//     return name+"1"
// })

// newNames.forEach(name=>{
//     console.log(name)
// })

// const withoutPedro = names.filter(name=>{
//     return name !== 'pedro'
// })

// withoutPedro.forEach(name=>{
//     console.log(name)
// })

// const page = (
//   <nav>
//     <h1>Victor Kituku</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
// ReactDOM.render(page, document.getElementById("root"));

// const h1 = document.createElement("h1");
// const textNode = document.createTextNode("Hello React");
// h1.appendChild(textNode);
// h1.classList.add("header");
// console.log(h1);

// const mainroot = document.getElementById("root");
// mainroot.append(h1);

// const practicePage = (
//   <div>
//     <h2>Blog one</h2>
//     <p>introduction to the blog post</p>
//     <ul>
//       <li>Point 1</li>
//       <li>Point 2</li>
//       <li>Point 3</li>
//       <li>Point 4</li>
//     </ul>
//   </div>
// );

// console.log(practicePage);

// document.getElementById("root").append(JSON.stringify(practicePage));

// ReactDOM.render(practicePage, document.getElementById("root"));

// function TempName() {
//   return (
//     <div>
//       <img src="/images/react-logo.png" width="40px" />
//       <h1>Fun facts about react</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100kk stars on github</li>
//         <li>Is maintained by facebook</li>
//         <li>Powers thousands of apps</li>
//         <li>Is composable</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<TempName />, document.getElementById("root"));

import Header from "Header.js";

function Body() {
  return (
    <div>
      <h1>Reasons why i'm learning react:</h1>
      <ol>
        <li>Get a job</li>
        <li>Expand my network</li>
        <li>Build useful tools</li>
        <li>Improve My Thinking and coding skills</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2022 Kituku Development. All rights reserved</p>
    </footer>
  );
}

function ReasonsPage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

ReactDOM.render(<ReasonsPage />, document.getElementById("root"));
