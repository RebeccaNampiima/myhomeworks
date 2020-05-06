/*Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for.
      Write a few functions for working with it: 1) Display all the classrooms; 2) Display all the classrooms for a given faculty; 
      3) Display only the classrooms that would fit a given group. A group object contains a name, the number of students, 
      and the faculty name.*/

      let classrooms =[
        {
          name : 'peoplesRights',
          numberOfSeats : 15,
          faculty:'socialSciences'
        },
        
        {
          name : 'anatomy',
          numberOfSeats : 17,
          faculty: 'sciences'
       },
       {
          name : 'english',
          numberOfSeats : 15,
          faculty: 'linguistics'
       },
       {
          name : 'bingBang',
          numberOfSeats : 20,
          faculty: 'sciences'
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
          console.log(i);

      }
    }

    displayClassrooms(classrooms);

   // 2) Display all the classrooms for a given faculty; 

   /*for (let sameFaculty of classrooms){
       if(sameFaculty.faculty == "sciences"){
           console.log(sameFaculty.faculty);
       }
   }*/

  function sameFaculty (inputList,inputFaculty){
    let outPutList = [];
   for(let classroom of inputList){
     if (classroom.faculty == inputFaculty){
       outPutList.push(classroom);
       console.log('nampiima');
    }

  }
  return outPutList;
}


  

//console.log("classrooms is:" + classrooms.name);
let scienceClassrooms = sameFaculty(classrooms, 'linguistics');
displayClassrooms(scienceClassrooms);

 


 
