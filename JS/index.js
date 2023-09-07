//   Session 11


/*

    Higher Order Function 

    Array Object 


*/


/* Map ((element , index ,arr)=>{} ) */

// let products = [2000 , 4000 ,6000 ,10000] ; 

/*

elemnt 6000 
index 2
arr  [2000 , 4000 ,6000 ,10000 ]

*/




// let result =  arr.map((element , index ,array)=>{
   
//     console.log(`The Element => ${element}`)
//     console.log(`The Index => ${index}`)
//     console.log(`The array => ${array}`)
//     return element * 100 ; 
// })

// console.log(result) ;







// Map ((element , index , arr)=>  , thisArg)
// 1 - مثال الاسع التربيعي مثال شركة الشحن
// 2 - مثال الاسم الاول والاخير نجمعهم







// let originalArray = [
//     {
//         firstName : "karim" ,
//         lastName : "Mohamed" , 
//         skills :["html" , "css" , "js"]
//     },
//     {
//         firstName :"Khaled" , 
//         lastName : "Mohamed" , 
//         skills : ["React" , "Cyper Security"] 
//     } ,
//     {
//         firstName : "Hassan" ,
//         lastName :"Ashref" , 
//         skills : ["Angular" , "Bootstrap" , "php" , ".net"]
//     }
// ]


// let nweArr = originalArray.map((element , index ,arr)=>{
//     console.log(element) ;
//     return element.firstName + " " + element.lastName ;
// })

// console.log(nweArr) ; 






// filter ((element , index , arr)=>{} )

/*
element = 17

Test Cae 1  X
Test Cae 2  X
Test Cae 3  true
Test Cae 4 true
Test Cae 5  true

*/

// let grades = [2.7 , 2.3 , 4 , 3.2 , 3.6 , 3] ;


// let newGrades = grades.filter((element)=> element >= 3)

// console.log(newGrades) ; 




// 1 - مثال الاعمار 
// 2 - مثال الكلمات الاكبر من 5

// let grades = [75 , 34 ,50 ,20 , 99 , 15 , 85] ; 

// let AcceptedGrade = grades.filter((element , index , arr)=>{
//     return element >= 50 ; 
// })

// console.log(AcceptedGrade) ; // Expected Output : [75, 50, 99, 85]


// let numbers = [1 ,2 ,3 ,4 ,5 ,6] ; 

// let results = numbers.filter((element , index , arr)=>{
//     return true ;
// })

// console.log(results) ; // Expected Output : [1 ,2 ,3 ,4 ,5 ,6]






// Reduce ( (acc , current , index ,array) =>   , initialValue )

// Map ==> [] 
// Reduce 


// 1 - الكلمة الاكبر في المصفوفة
// 2 - مثال جمع الاعداد
// 3 - مثال المنتجات 





// let arr = [ 10 ,20 ,30 ,40 ,50] ; 

/**
    acc = 30
    current = 30
    index = 1

 */






// let cart = [
//     {
//         name : "shirt1" , 
//         price : 40 , 
//         qun : 3
//     } , 
//     {
//         name : 'shirt2' , 
//         price : 50 ,
//         qun : 2
//     }
// ]

/*
MEMORY
acc = 5
current = 
*/


// let numberOfProduct = cart.reduce((acc , current)=>{
// return  acc = acc + current.qun
// } , 0)

// let TotlaPrice = cart.reduce((acc , current)=>{
//     return acc += current.price * current.qun
// } , 0)

// console.log("The Number Of Product " + numberOfProduct) ; 

// console.log("Totla Price " + TotlaPrice) ; 





// forEach
// 1 - مثال الاسماء
// 2 - مثال المنتحات الي بتضاف للصفحة 












// const array = ["Ahmed" , "Mohamed" , "Abdo" , "Karim"] ;

// array.forEach((element , index ,array )=>{
//     console.log(`The Element => ${element}`) ;
//     console.log(`The Index => ${index}`) ;
// } )


// let proudcts = [
//     {
//         name : "Iphone" , 
//         price : 300 ,
//         img : "./../images/iphone.png"
        
//     }, 
//     {
//         name : "Lenovo Legion 5" , 
//         price : 500  , 
//         img : "./../images/lab.webp"
//     }, 
//     {
//         name : "Shoes" , 
//         price : 8000 , 
//         img : "./../images/vans.png"
//     } , 
//     {
//         name : "Samsung" , 
//         price : 320000 , 
//         img : "./../images/sam.webp"
//     }

// ]  ;


// let groupElement = document.querySelector(".group") ; 


// proudcts.forEach((element)=>{
//     groupElement.innerHTML += ` <div class="card">
//         <div class="image">
//             <img src="${element.img}" alt="">
//         </div>
//         <div class="info">
//             <h2>${element.name}</h2>
//             <p>${element.price}$</p>
//         </div>
//     </div>`
// })
















