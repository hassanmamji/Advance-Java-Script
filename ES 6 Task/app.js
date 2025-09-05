// GLOBAL SCOPE...
         
// var variable = "hello world";
// console.log(variable);

// let Variable = "Hello from let!";
// console.log(variable);

// const myGlobalVariable = 42;
// console.log(myGlobalVariable);

// const constVar = 'I am const';
// let letVar = 'I am let';
// var varVar = 'I am var';

// console.log(constVar);
// console.log(letVar);
// console.log(varVar);


         // FUNCTION SCOPE...

// function myFunction() {
//     var insideVar = 'I am inside the function';
//     console.log(insideVar);
// }
// console.log(insideVar);
// myFunction(); 


// function myFunction() {
//     let insideLet = 'This is a let variable inside the function';
//     console.log(insideLet);
// }
// myFunction(); 


// function myFunction() {
//     const insideConst = 'This is a const variable inside the function';
//     console.log(insideConst);
// }
// myFunction(); 


// function myFunction() {
//     var varVar = 'I am var inside function';
//     let letVar = 'I am let inside function';
//     const constVar = 'I am const inside function';

//     console.log('Inside function:');
//     console.log(varVar);   
//     console.log(letVar);   
//     console.log(constVar); 
// }
// myFunction();


         // BLOCK SCOPE...

// if (true) {
//     var varInIf = 'I am declared with var inside an if block'; 
// }
// console.log('Inside if block:', varInIf);
 

// if (true) {
//     let letInIf = 'I am declared with let inside an if block';
// }
// console.log('inside if block:', letInIf);


// if (true) {
//     const constInIf = 'I am declared with const inside an if block';
//     console.log('Inside if block:', constInIf); 
// }


// if (true) {
//     var varInBlock = 'I am var';
//     let letInBlock = 'I am let';
//     const constInBlock = 'I am const';

//     console.log('Inside block:');
//     console.log(varInBlock);   
//     console.log(letInBlock);   
//     console.log(constInBlock); 
// }

        // HOISTING WITH VAR...
         
// console.log(myVar); 
// var myVar = 'Hello, var!';

        // HOISTING WITH lET AND CONST...
        
// let myVar = 10;
// console.log(myVar); 

// const myConst = 42;
// console.log(myConst); 

        // RE-DECLARATION...
 
// var greeting = "Hello";
// var greeting = "Hi";

// console.log(greeting);

        // RE-ASSIGNING...

// var message = "Hello, world!"; 
// console.log(message);

// message = "Hello again!";       
// console.log(message);

// let count = 10;       
// console.log(count);   

// count = 25;           
// console.log(count);   
        
// const name = "Alice";   
// console.log(name);      

 
                //Temporal Dead Zone (TDZ)
                
// {
//     console.log(message); 
//     let message = "Hello!";
// }
                
// {
//     console.log(color); 
//     const color = "blue";
// }

                // When To Use Var, Let, And Const

// function createCounters() {
//     var counters = [];

//     for (var i = 0; i < 3; i++) {
//         counters.push(function() {
//             console.log(i);
//         });
//     }

//     return counters;
// }

// const funcctions = createCounters();


// function createCounters() {
//     const counters = [];

//     for (let i = 0; i < 3; i++) {
//         counters.push(function() {
//             console.log(i);
//         });
//     }

//     return counters;
// }

// const funcs = createCounters();

// funcs[0]();  
// funcs[1](); 
// funcs[2](); 

                
// const CONFIG = {
//     apiBaseUrl: "https://api.example.com",
//     timeout: 5000
// };

// console.log(CONFIG.apiBaseUrl); 


                //String Interpolation:

// let firstName = "John";
// let lastName = "Doe";

// console.log(firstName); 
// console.log(lastName);  
                

// let firstName = "John";
// let lastName = "Doe";

// / let fullName = ${firstName} ${lastName};
// console.log(fullName);


        // Multi-line Strings:

// const address = `123 Main Street
// Apartment 4B
// Springfield, IL 62704
// USA`;

// console.log(address);

    
        // Simple Expressions:
       
        
// let num1 = 7;
// let num2 = 12;

// let sumString = The sum of the numbers is ${num1 + num2}.;
// console.log(sumString);

            
        //Function Calls:

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(4, 5)); 


// function greet(name) {
//   return Hello, ${name}!;
// }

// console.log(The greeting is: ${greet('Alice')});


              // Creating a Tagged Template:         

// function logTemplate(strings, ...values) {
//   console.log("Strings:", strings);
//   console.log("Values:", values);
// }

// // Use the tag function with a template literal
// const name = "Alice";
// const age = 30;

// logTem

// Tag function
// function logTemplate(strings, ...values) {
//   console.log("Strings:", strings);
//   console.log("Values:", values);
// }

// // Variables to interpolate
// const product = "

        //      Loops within Template Literals:

// const shoppingList = [
//   "Apples",
//   "Bread",
//   "Milk",
//   "Eggs",
//   "Cheese",
//   "Tomatoes"
// ];

// const shoppingList = [
//   "Apples",
//   "Bread",
//   "Milk",
//   "Eggs",
//   "Cheese",
//   "Tomatoes"
// ];


        //       Escaping Backticks:

// const stringWithBacktick = This is a backtick: \`;
// console.log(stringWithBacktick);

// const stringWithBacktick = This is a backtick: \`;
// console.log(stringWithBacktick);

                // Nested Template Literals:
      
// const data = [
//   ["Name", "Age", "City"],
//   ["Alice", 30, "Paris"],
//   ["Bob", 25, "New York"],
//   ["Charlie", 35, "London"]
// ];

// const tableRows = data.map(row => `
//   <tr>
//     ${row.map(cell => <td>${cell}</td>).join('')}
//   </tr>
// `).join('');

// const table = `
//   <table border="1">
//     ${tableRows}
//   </table>
// `;

// console.log(table);
                

// const data = [
//   ["Name", "Age", "City"],
//   ["Alice", 30, "Paris"],
//   ["Bob", 25, "New York"],
//   ["Charlie", 35, "London"]
// ];

// const tableRows = data.map(row => `
//   <tr>
//     ${row.map(cell => <td>${cell}</td>).join('')}
//   </tr>
// `).join('');

// const table = `
//   <table border="1">
//     ${tableRows}
//   </table>
// `;

// console.log(table);

        //      Simple Condition:

// const age = 25;
        
// const age = 25;  

// const canVote = age >= 18 ? "Yes" : "No";

// console.log(canVote);  

         
        //    Even or Odd:

// const number = 42;

// const number = 42; 

// const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

// console.log(evenOrOdd);  

        //    Grade Evaluation:

// const score = 85;  

// const grade = score >= 90 ? "A" :
//               score >= 80 ? "B" :
//               score >= 70 ? "C" :
//               score >= 60 ? "D" : "F";

// console.log(grade);  


        //      Login Status:

        // const isLoggedIn = true;   

// const isLoggedIn = true;  

// const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

// console.log(statusMessage);


        //  Discount Eligibility:

// const isMember = true;       
// const purchaseAmount = 150;  

// const isMember = true;        
// const purchaseAmount = 150;   

// const discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;

// console.log(discount); 


                // Determine Max Value:

// function maxValue(a, b) {
//   return a > b ? a : b;
// }

// const result = maxValue(10, 25);

// console.log(result);  
                
// function greet(name) {
//   return name && name.trim() !== '' ? Hello, ${name}! : "Hello, guest!";
// }

// console.log(greet("Alice")); 

// console.log(greet(""));      

// console.log(greet());         


//                 //   Mapping Values:

// const numbers = [10, 20, 30, 40, 50];


// const numbers = [10, 15, 20, 25, 30];

// const transformed = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);

// console.log(transformed);

                // Filtering Values:

// const strings = ["cat", "house", "dog", "elephant", "sun"];

// const filtered = strings.filter(str => str.length > 3 ? true : false);

// console.log(filtered);


                //    Copying an Array:

// const originalArray = [1, 2, 3, 4, 5];

// const originalArray = [1, 2, 3, 4, 5];

// const copiedArray = [...originalArray];

// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);

// console.log("Are contents equal?", JSON.stringify(originalArray) === JSON.stringify(copiedArray)); // true

// console.log("Same reference?", originalArray === copiedArray); 


                //       Merging Arrays:
                
// const array1 = [1, 2, 3];
// const array2 = ['a', 'b', 'c'];

// const mergedArray = [...array1, ...array2];

// console.log(mergedArray);

                //   Adding Elements to an Array:

//  const numbers = [5, 10, 15, 20, 25];
               
// const numbers = [5, 10, 15, 20, 25];

// const updatedNumbers = [0, ...numbers, 30];

// console.log(updatedNumbers);

        //        Copying an Object:

// const originalObject = {
//   name: "Alice",
//   age: 30,
//   city: "Paris"
// };

// const originalObject = {
//   name: "Alice",
//   age: 30,
//   city: "Paris"
// };

// const copiedObject = { ...originalObject };

// console.log("Original Object:", originalObject);
// console.log("Copied Object:", copiedObject);

// console.log("Are contents equal?", JSON.stringify(originalObject) === JSON.stringify(copiedObject)); // true

// console.log("Same reference?", originalObject === copiedObject); 


        //     Merging Objects:

// const object1 = {
//   name: "Alice",
//   age: 30,
//   city: "Paris"
// };

// const object2 = {
//   age: 35,
//   city: "London",
//   profession: "Engineer"
// };


// const object1 = {
//   name: "Alice",
//   age: 30,
//   city: "Paris"
// };

// const object2 = {
//   age: 35,
//   city: "London",
//   profession: "Engineer"
// };

// const mergedObject = { ...object1, ...object2 };

// console.log(mergedObject);

// const object1 = {
//   name: "Alice",
//   age: 30,
//   city: "Paris"
// };

// const object2 = {
//   age: 35,
//   city: "London",
//   profession: "Engineer"
// };

// const mergedObject = { ...object1, ...object2 };

// console.log("Merged Object:", mergedObject);
// console.log("Note: For overlapping keys, values from object2 overwrite those from object1.");


                //    Updating Object Properties:

// const user = {
//   name: "John Doe",
//   age: 28,
//   email: "john.doe@example.com"
// };

// const user = {
//   name: "John Doe",
//   age: 28,
//   email: "john.doe@example.com"
// };

// const updatedUser = {
//   ...user,
//   email: "john.newemail@example.com",  
//   address: "123 Main St, Springfield"  
// };

// console.log(updatedUser);

            
                //  Passing Array Elements as Arguments:

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum)
                
// const numbers = [7, 14, 21];

// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [7, 14, 21];

// const result = sum(...numbers);

// console.log(result);  

                //  Combining Multiple Arrays:

// function combineArrays(...arrays) {
//   return arrays.flat();
// }

// const result = combineArrays([1, 2], [3, 4], [5, 6]);
// console.log(result);  

// function combineArrays(...arrays) {
//   return [].concat(...arrays);
// }

// const result = combineArrays([1, 2], [3, 4], [5, 6]);
// console.log(result);  


// function combineArrays(...arrays) {
//   return [].concat(...arrays);
// }

// const result = combineArrays([1, 2], [3, 4], [5, 6], [7, 8]);

// console.log(result);


        //       Rest Parameter with Spread Operator:

// function multiply(firstNumber, ...others) {

//   console.log("First number:", firstNumber);
//   console.log("Other numbers:", others);
// }

// multiply(2, 3, 4, 5);

// function multiplyAll(multiplier, ...numbers) {
//   return numbers.map(num => num * multiplier);
// }
// console.log(multiplyAll(2, 3, 4, 5)); 

// function multiplyAll(multiplier, ...numbers) {
//   return numbers.map(num => num * multiplier);
// }
// function multiplyAll(multiplier, ...numbers) {
//   const results = numbers.map(num => num * multiplier);
//   return results;
// }
// const output = multiplyAll(3, 2, 4, 6);
// console.log(output); 

            //    Spread Operator with Nested Structures:
   
// const original = [1, 2, [3, 4]];
// const copy = [...original];
// copy[2][0] = 99;
// console.log(original); 
// console.log(copy);     
            
// const originalArray = [1, 2, [3, 4], [5, 6]];
// const copiedArray = [...originalArray];
// copiedArray[2][0] = 99; 

                //  Sum Function:

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

                //  Average Function:

// function average(...numbers) {
//   if (numbers.length === 0) return 0; // Handle no arguments
//   const total = numbers.reduce((sum, num) => sum + num, 0);
//   return total / numbers.length;
// }

// function average(...numbers) {
//   if (numbers.length === 0) return 0; // Return 0 if no arguments
//   const total = numbers.reduce((sum, num) => sum + num, 0);
//   return total / numbers.length;
// }

// console.log(average(4, 8, 12));          
// console.log(average(10));                 
// console.log(average());                   
// console.log(average(5, 15, 25, 35, 45)); 
// console.log(average(100, 200));           


        //   First and Rest:

// const numbers = [10, 20, 30, 40, 50];

// const numbers = [10, 20, 30, 40, 50];
// const [first, ...rest] = numbers;
// console.log(first); 
// console.log(rest);  

            //  Skip and Rest:

// const colors = ["red", "blue", "green", "yellow", "purple"];

// const colors = ["red", "blue", "green", "yellow", "purple"];

// const [ , , ...remainingColors] = colors;

// console.log("remainingColors:", remainingColors);

            // Basic Destructuring:

// const person = {
//   name: "Alice Johnson",
//   age: 30,
//   email: "alice.johnson@example.com",
//   address: "123 Main St, Springfield"
// };

// const person = {
//   name: "Alice Johnson",
//   age: 30,
//   email: "alice.johnson@example.com",
//   address: "123 Main St, Springfield"
// };

// const { name, email, ...rest } = person;

// console.log("name:", name);     
// console.log("email:", email);   
// console.log("rest:", rest);     

                //   Nested Destructuring:

// const student = {
//   id: "S12345",
//   name: "John Doe",
//   grades: [85, 90, 78],
//   info: {
//     age: 21,
//     major: "Computer Science"
//   }
// };

// const student = {
//   id: "S12345",
//   name: "John Doe",
//   grades: [85, 90, 78],
//   info: {
//     age: 21,
//     major: "Computer Science"
//   }
// };

// const { id, name, info: { major, ...infoRest }, ...rest } = student;

// rest.info = infoRest;

// console.log("id:", id);         
// console.log("name:", name);     
// console.log("major:", major);   
// console.log("rest:", rest);

                //    Filter Even Numbers:

// function filterEven(...numbers) {
//   return numbers.filter(num => num % 2 === 0);
// }

// function filterEven(...numbers) {
//   return numbers.filter(num => num % 2 === 0);
// }

// console.log(filterEven(1, 2, 3, 4, 5, 6));       
// console.log(filterEven(10, 15, 20, 25));         
// console.log(filterEven(7, 9, 11));               
// console.log(filterEven(0, 100, 200, 301));       
// console.log(filterEven());                     

                    // Combine and Sort Arrays:

// function combineAndSort(...arrays) {
//   const combined = arrays.flat();
//   return combined.sort((a, b) => a - b);
// }

            //    Basic Destructuring:

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);  
// console.log(secondFruit); 
// console.log(thirdFruit);  

                // Skipping Elements:

// const colors = ["red", "green", "blue", "yellow"];

// const colors = ["red", "green", "blue", "yellow"];

// const [primaryColor, , tertiaryColor] = colors;

// console.log(primaryColor);  
// console.log(tertiaryColor);  

    //    Rest Operator:

// const numbers = [1, 2, 3, 4, 5];

// const numbers = [1, 2, 3, 4, 5];

// const [firstNumber, ...remainingNumbers] = numbers;

// console.log(firstNumber);        
// console.log(remainingNumbers);   

        // Basic Destructuring:

// const person = {
//   name: "Emma",
//   age: 28,
//   city: "New York"
// };

// const { name, age, city } = person;

// console.log(name); 
// console.log(age);  
// console.log(city); 

            //  Renaming Variables:

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2022
// };

// const { make: carMake, model: carModel, year: carYear } = car;

// console.log(carMake);  
// console.log(carModel); 
// console.log(carYear);  

        //   Default Values:

const settings = {
  theme: "dark"
};

const { theme, language = "English" } = settings;

console.log(theme);    
console.log(language); 
