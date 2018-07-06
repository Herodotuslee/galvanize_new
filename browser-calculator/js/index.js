
let screen = document.getElementById('screen');
let screenString ='';
let operators1 = ["+","-","/","*"];
let buttons = document.querySelector('.buttons');
let numbers= ['1','2','3','4','5','6','7','8','9','0']


buttons.addEventListener('click', function(){
 if(numbers.includes(event.target.innerHTML)){

   let screenArray =screenString.split('')

   screenArray.push(event.target.innerHTML)
   // console.log(screenArray)
   if(screenArray[0]==='0' && screenArray[1]=='0'){
     screenArray =['0']
     screenString =screenArray.join('')
          screen.innerHTML = screenString

   }else if(screenArray[0]!=='0'){
     screenString =screenArray.join('')
          screen.innerHTML = screenString

   }else if(screenArray[0]==='0' && screenArray[1]!='0'){
      screenArray.shift()
      console.log(screenArray)
     screenString =screenArray.join('')
      screen.innerHTML = screenString

   }else if(event.target.innerHTML===0){
      screenArray =['0']
      screenString =screenArray.join('')
      screen.innerHTML = screenString
   }

   // if(screenArray[0]!='0'){
   //   screenArray.push(event.target.innerHTML)
   //   screenString =screenArray.join('')
   //   screen.innerHTML = screenString
   //
   // }else{
   //   screenArray.pop()
   //   screenArray.push(event.target.innerHTML)
   //   screenString =screenArray.join('')
   //        screen.innerHTML = screenString
   // }



 }else if(operators1.includes(event.target.innerHTML)){
   let screenArray =screenString.split('')
   let last =screenString.length-1
     if(operators1.includes(screenArray[last])){
       screenArray[last]=event.target.innerHTML
     }else{
       screenArray.push(event.target.innerHTML)
     }
      screenString = screenArray.join('')
      screen.innerHTML = screenString

 }else if(event.target.innerHTML == 'AC'){
   screenString = ""
   screen.innerHTML = screenString

 }else if(event.target.innerHTML == '='){
    result(screenString)
 }
})


function result(){
  let last =screenString.length-1
  let screenArray =screenString.split('')
  if(operators1.includes(screenArray[last])){
  screen.innerHTML='Error'

  }
  else{
    screen.innerHTML =eval(screenString)
    screenString =eval(screenString).toString()

  }
}








//
//
// let nb0 = document.getElementById('zero');
// let nb1 = document.getElementById('1');
// let nb2 = document.getElementById('2');
// let nb3 = document.getElementById('3');
// let nb4 = document.getElementById('4');
// let nb5 = document.getElementById('5');
// let nb6 = document.getElementById('6');
// let nb7 = document.getElementById('7');
// let nb8 = document.getElementById('8');
// let nb9 = document.getElementById('9');
// let equal = document.getElementById('equals');
// let clear = document.getElementById('clear');
// let devide = document.getElementById('÷');
// let x = document.getElementById('x');
// let minus = document.getElementById('-');
// let plus = document.getElementById('plus');


//
// function logic(x){
// let screenArray =screenString.split('')
// let last =screenString.length-1
//
//   if(operators1.includes(screenArray[last])){
//     screenArray[last]=x
//   }else{
//     screenArray.push(x)
//
//   }
//   return screenArray.join('')

// }




//
// clear.addEventListener('click', function() {
//   screenString =''
//   screen.innerHTML = screenString
// })
//
//
// plus.addEventListener('click', function() {
//   screenString =logic('+')
//   console.log()
//   screen.innerHTML = screenString
// })
//
//
// minus.addEventListener('click', function() {
//   screenString =logic('-')
//   screen.innerHTML = screenString
// })
//
//
// x.addEventListener('click', function() {
//   screenString =logic('*')
//   screen.innerHTML = screenString
// })
//
// devide.addEventListener('click', function() {
//   screenString =logic('/')
//   screen.innerHTML = screenString
// })
//
//
//
// nb0.addEventListener('click', function() {
//   screenString +='0'
//   screen.innerHTML = screenString
// })
//
// nb1.addEventListener('click', function() {
//   screenString +='1'
//   screen.innerHTML = screenString
// })
//
//
// nb2.addEventListener('click', function() {
//   screenString +='2'
//   screen.innerHTML = screenString
// })
//
//
// nb3.addEventListener('click', function() {
//   screenString +='3'
//   screen.innerHTML = screenString
// })
//
// nb4.addEventListener('click', function() {
//   screenString +='4'
//   screen.innerHTML = screenString
// })
//
// nb5.addEventListener('click', function() {
//   screenString +='5'
//   screen.innerHTML = screenString
// })
// nb6.addEventListener('click', function() {
//   screenString +='6'
//   screen.innerHTML = screenString
// })
//
// nb7.addEventListener('click', function() {
//   screenString +='7'
//   screen.innerHTML = screenString
// })
//
// nb8.addEventListener('click', function() {
//   screenString +='8'
//   screen.innerHTML = screenString
// })
//
// nb9.addEventListener('click', function() {
//   screenString +='9'
//   screen.innerHTML = screenString
// })
