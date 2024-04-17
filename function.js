

const left = document.querySelector('.angleLeft')
const right = document.querySelector('.anglesRight')
const FirstSec =document.querySelector('.FirstSec')
const secondSechide =document.querySelector('.secondSechide')
const thirdSechide =document.querySelector('.thirdSechide')


const hideSectionHeader = document.querySelector('.hideSectionHeader')
let count = 0
console.log(count)
hideSectionHeader.innerHTML=array[count]
right.addEventListener('click',()=>{
    console.log('HELOO');
   count++
console.log(count)
   if(count>=array.length){
      count=array.length
   }else{
    hideSectionHeader.innerHTML=array[count]

}
});

left.addEventListener('click',()=>{
    count--
    console.log(count)
    if(count<=0){
       count = 0
    }else{
        hideSectionHeader.innerHTML=array[count]
    }
 })

