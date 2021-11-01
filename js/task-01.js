const liEl = document.querySelectorAll(`.item`)
console.log(`Number of categories: ${liEl.length}`)
liEl.forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);

    console.log('Category: ', element.querySelectorAll('li').length);
    
});