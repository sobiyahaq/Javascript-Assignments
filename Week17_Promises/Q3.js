const person = {
  firstName: 'Mithun',
  lastName: 'S',
  age: 20 
};

function ageInDays(person, logResult) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365; 
  logResult = `The person's full name is ${fullName} and their age in days is ${ageInDays}.`;
  function printResult(){
    console.log(logResult);
  }
  return printResult;
}
const result ="";
const logResult = ageInDays(person,result);
logResult(); 
