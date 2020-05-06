/* Create a “groceries list” array. Each element of the array is an object that contains the name of a product, 
     an amount needed and a property saying whether it is bought or not. Write a few functions for working with this array: */

    
      
    // 1) Function for displaying the entire list;
     
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
    the amount needs to be increased in the existing purchase, not in a new one; 

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
    /*function checkIfItemExists (inputList, groceryName){//This is just added but not requested, although it helps
      let returnValue = false;
      for(let grocery of inputList){
        if (grocery.name == groceryName){
          returnValue = true;
        }
      }
      console.log(returnValue);
      return returnValue;
    }
    addListItem(groceriesList, 'salt', 15 );
    addListItem(groceriesList, 'oil', 15 );
    addListItem(groceriesList, 'milk', 15 );*/

    /*3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.g*/

        function purchaseProduct (inputList, groceryName){
          for(let grocery of inputList){
            if(grocery.name == groceryName){
              grocery.purchased = true;
            }
          }
        }

        purchaseProduct(groceriesList, 'sugar');
        

        

