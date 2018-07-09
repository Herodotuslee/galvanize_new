let screen = document.getElementById('screen');
let screenString ='0';
let operators1 = ["+","-","/","*"];
let operators2 = ["."];
let buttons = document.querySelector('.buttons');
let numbers= ['1','2','3','4','5','6','7','8','9','0']


buttons.addEventListener('click', function(){
 if(numbers.includes(event.target.innerHTML)){
   let screenArray =screenString.split('')
   screenArray.push(event.target.innerHTML)

   if(screenArray[0]==='0' && screenArray[1]=='0'){
     screenString ='0'
     update()

   }else if(screenArray[0]==='0' && screenArray.length===1){
      screenString ='0'
       update()

   } else if(screenArray[0]!=='0'){

     screenString =screenArray.join('')
         update()

   }else if(screenArray[0]==='0' && screenArray[1]!='0' && !(operators1.includes(screenArray[1]))){

     screenArray.shift()
     screenString =screenArray.join('')
      update()
   }
   else if(screenArray[0]==='0' && screenArray[1]!='0' && (operators1.includes(screenArray[1]))){

     screenString =screenArray.join('')
     update()
   }

 }else if(operators1.includes(event.target.innerHTML)){
   let screenArray =screenString.split('')
   let last =screenString.length-1
     if(operators1.includes(screenArray[last])){
       screenArray[last]=event.target.innerHTML
     }else{
       screenArray.push(event.target.innerHTML)
     }
      screenString = screenArray.join('');
      update()

 }else if(event.target.innerHTML == 'AC'){
   screenString = "0";
   update()

 }else if(event.target.innerHTML == 'CE'){
  if(screenString.length===1){
    screenString = "0";
    update()

  }else{
      let screenArray =screenString.split('')
      screenArray.pop();
      screenString = screenArray.join('');
      update()
  }

 }else if(event.target.innerHTML == '='){
    result()
 }
 // else if(event.target.innerHTML == '.'){
 //   let screenArray =screenString.split('')
 //    screenArray.push(event.target.innerHTML)
 //    screenString = screenArray.join('');
 //    update()
 // }

})


function result(){
  let last =screenString.length-1
  let screenArray =screenString.split('')
  if(operators1.includes(screenArray[last])){
    screenArray.pop()
    screenString = screenArray.join('');
    screen.innerHTML =eval(screenString)

  }
  else{
    screen.innerHTML =eval(screenString)
    screenString =eval(screenString).toString()

  }
}


function update(){
   screen.innerHTML = screenString
}
