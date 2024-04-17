

const left = document.querySelector('.angleLeft')
const right = document.querySelector('.anglesRight')
const FirstSec =document.querySelector('.FirstSec')
const secondSechide =document.querySelector('.secondSechide')
const thirdSechide =document.querySelector('.thirdSechide')


const hideSectionHeader = document.querySelector('.hideSectionHeader')
let count = 0;
hideSectionHeader.innerHTML=array[count]
right.addEventListener('click',()=>{
   count++
   if(count>=array.length){
 
      count=array.length
   }else{
    hideSectionHeader.innerHTML=array[count]

}
});

left.addEventListener('click',()=>{
    count--
    if(count<=0){
       count = 0
    }else{
        hideSectionHeader.innerHTML=array[count]
    }
 })

