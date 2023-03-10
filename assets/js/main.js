

const ulElement = document.querySelector('.ul_flex')

for (let index = 0; index <= 100; index++){

    console.log(index);
    const liElement = `<li> ${index}</li>`


    ulElement.innerHTML += liElement

}
