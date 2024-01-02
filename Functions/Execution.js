/* Javascript execution context - This means how js runs our file
   JS runs our file in two phase:
   1. Global Execution Context(this) 
   Browser GEC - Window
   Nodejs GEC - this
   other environment GEC - 
   2. Function Execution Context
   3. Eval Execution Context

   // 1.Memory creation phase(1)- memory allocation
   // 2.Exection Phase - runs business logic
   */


   // Callstack
   // function one() {
   //  console.log("One");

   // }

   // function two() {
   //  console.log("Two");
   // }

   // function three() {
   //  console.log("three");
   // }

   // one()
   // two()
   // three()


   function one() {
      console.log("One");
      two()
     }
  
     function two() {
      console.log("Two");
      three()
     }
  
     function three() {
      console.log("three");
     }
  
     one()
     two()
     three()