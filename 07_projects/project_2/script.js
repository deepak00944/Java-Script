const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const category = document.querySelector('#category')

    if (height === ''|| height <0 || isNaN(height)) {
        results.innerHTML = `Please provide valid height ${height}`
    }else if (weight === ''|| weight <0 || isNaN(weight)) {
        results.innerHTML = `Please provide valid weight ${weight}`
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    } 
    if (results.innerText < 18.6) {
        category.innerHTML = 'Under Weight'
    } else if(results.innerText > 18.6 && results.innerText < 24.9){
        category.innerHTML = `Normal Weight`
    }else{
        category.innerHTML = `Over Weight`
    }
})


