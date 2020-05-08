//April 18th

/*Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
an amount needed and a property saying whether it is bought or not. Write a few functions for working with this array: 
1) 
Function for displaying the entire list; 
*/

 let groceriesList =[
  {
    name : 'bread',
    amount : 100,
    purchased: true
  },
  
  {
   name : 'milk',
   amount : 200,
   purchased: true
 },
 {
   name : 'sugar',
   amount : 200,
   purchased: false
 },
 {
   name : 'flour',
   amount : 300,
   purchased: true
 },

 {
   name : 'oil',
   amount : 50,
   purchased: false
 }

 ];

    function displayGroceryList(inputList){

   for(let i = 0; i<inputList.length; i++){
     console.log(inputList[i]);
     console.log(i);


   }
 }
 
  displayGroceryList(groceriesList);

   

   /*2) Function for adding a purchase to the list. Note that if a product already exists in the array,
   the amount needs to be increased in the existing purchase, not in a new one; */

   //function addListItem(inputList, groceryName, groceryAmount){

     let newPurchase = {
       name : groceryName,
       amount : groceryAmount,
       purchased : true
       }

     let itemExists = checkIfItemExists(inputList, groceryName);
     if (itemExists == true){
       inputList = incrementAmount(inputList, groceryName, groceryAmount);
     }else{
       inputList.push(newPurchase);

     }

   

   function incrementAmount (inputList, groceryName, groceryAmount){
     for(let grocery of inputList){
       if(grocery.name == groceryName){
         grocery.amount = grocery.amount + groceryAmount;
       }
     }
     return inputList;
   }
   function checkIfItemExists (inputList, groceryName){
     let returnValue = false;
     for(let grocery of inputList){
       if (grocery.name == groceryName){
         returnValue = true;
       }
     }
     console.log(returnValue);
     return returnValue;
   }
   console.log('before:');
   
   addListItem(groceriesList, 'salt', 15 );
   addListItem(groceriesList, 'oil', 15 );
   addListItem(groceriesList, 'milk', 15 );
   console.log('after:');

   displayGroceryList(groceriesList);

   

   
   /*3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.g*/

   function purchaseProduct (inputList, groceryName){
     for(let grocery of inputList){
       if(grocery.name == groceryName){
         grocery.purchased = true;
       }
     }
   }

   purchaseProduct(groceriesList, 'sugar');
   console.log('after2:');

   displayGroceryList(groceriesList);


   


/* Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for.
 Write a few functions for working with it:

  1) Display all the classrooms; */

 let classrooms =[
   {
     name : 'peoplesRights',
     numberOfSeats : 15,
     faculty:'socialSciences',
   },
   
   {
     name : 'anatomy',
     numberOfSeats : 17,
     faculty: 'sciences',
  },
  {
     name : 'english',
     numberOfSeats : 15,
     faculty: 'linguistics',
  },
  {
     name : 'bingBang',
     numberOfSeats : 20,
     faculty: 'sciences',
  },

  {
     name : 'syntax',
     numberOfSeats : 10,
     faculty: 'math'
  }

  ];

 


  function displayClassrooms(inputList){
   
   for(let i = 0; i<inputList.length; i++){
     console.log(inputList[i]);
     

 }
  
}
displayClassrooms(classrooms);
function displayClassrooms(inputList){
  for(let classroom of inputList){
    console.log(classroom)
  }
}

displayClassrooms(classrooms)

//2) Display all the classrooms for a given faculty

  function sameFaculty(inputList, inputFaculty) {
  for(let classroom  of inputList){
    if(classroom.faculty === inputFaculty){
    console.log(classroom);
    }
  }
};
sameFaculty(classrooms, 'sciences');

/*3) Display only the classrooms that would fit a given group. A group object contains a name, the number of students, 
 and the faculty name.*/

function givenGroup(inputList, number){
  for( let classroom of inputList){
    if(classroom.numberOfSeats >= number){
      console.log(classroom)

    }
  }
}
 givenGroup(classrooms, 15);
 givenGroup(classrooms, 20);
 
