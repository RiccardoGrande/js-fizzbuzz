

const ulElement = document.querySelector('.ul_flex')

for (let index = 0; index <= 100; index++){

   /*  const liElement = `<li> ${index}</li>`


    ulElement.innerHTML += liElement
 */

   
   
   //se l'index modulo 3 è uguuale a 0 E l'index modulo 5 è uguale a 0
   if (index % 3 == 0 && index % 5 == 0)  {
    //allora in console scrivo FizzBuzz
    console.log('FizzBuzz');
    //e in pagina scrivo BuzzFizz
    const text = 'FizzBuzz';
   }
   // ALTRIMENTI SE l'index è multiplo di 3 
   else if (index % 3 == 0) {
    //allora in console scrivo Fizz
    console.log('Fizz');
    //e in pagina scrivo Fizz
    const text = 'Fizz';
   } 
   // ALTRIMENTI SE l'index è multiplo di 5
   else if (index % 5 == 0) {
    //allora in console scrivo Buzz
    console.log('Buzz');
    //e in pagina scrivo Buzz
    const text = 'Buzz';
   } 
   // ALTRIMENTI 
   else {
    //scrivo in console il numero index 
    console.log(index);
    //scrivo in pagina il numero index 
    const text = index;
   }
   const text = index;
   //creo una costante che specifica che l'elemento li è uguale all' elemento text con le specifiche da noi date
   const liElement = `<li> ${text} </li>`

   //identifico la somma tra l'elemento ul ed l'elemento li 

   ulElement.innerHTML += liElement
   
}




