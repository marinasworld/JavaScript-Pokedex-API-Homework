console.log('Test')


// connect/test js file to html

// .getElementsByTagName()
const h1_tags = document.getElementsByTagName('h1');
console.log(h1_tags);
// .getElementsByClassName()

const students = document.getElementsByClassName('student');
console.log(students);

// .getElementById()
let instructor = document.getElementById("instructor");
console.log(instructor);

// .querySelector() (ES6 Modern Approach)
let instructors = document.querySelector('.student')
console.log(instructors)

// .querySelectorAll()
let students2 = document.querySelectorAll('.student')
console.log(students2)

// for (let student of students2){
//     console.log(student)
// }

// .innerText property: Changes the text
students2[0].innerText = 'Rahel'

// .innerHTML property: Allows you to write HTML code
const special = document.getElementById('My-Special-div')
special.innerHTML = `
    <p>I was create in JS</p>
    <h1>THIS IS AWESOME</h1>
`
console.log(special)


// .createElement()
const newBtn = document.createElement('button')
newBtn.innerText = 'Thieves'


instructor.append(newBtn)


// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()

// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)

newBtn.addEventListener('click', () => {
    if (newBtn.className === '') {
        newBtn.className = 'purple'
    } else if (newBtn.className === 'purple'){
        newBtn.className = 'green'
    } else{
        newBtn.className = ''
    }
})

// Option 2: using onclick attribute in HTML
// onclick="function(event)"

const booyah = (event) =>{
    console.log(event)
    if (event.target.className === '') {
        event.target.className = 'purple'
    } else if (event.target.className === 'purple'){
        event.target.className = 'green'
    } else{
        event.target.className = ''
    }
}

// Lets create a new button and append to a specfic div
const btn3 = document.createElement('button')

btn3.innerText = 'BOOM'

btn3.addEventListener('click',() => {
    const p = document.createElement('p')
    p.innerText = 'BOOM'
    document.body.append(p)
})

document.body.append(btn3)

// adding addEventListener() to new button to add text every time its clicked

const my_form = document.querySelector('form')
console.log(my_form)

my_form.addEventListener('submit', (event) => {
    event.preventDefault()
    pokename = event.target[0].value
    console.log(pokename)
    pokemonData(pokename)
})

// grabbing form data with .addEventListener()


const pokemonData = async (pokename) => {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
      const data = await response.json()
      console.log(data)
      addPoke(data)
    } catch(error) {
      console.error(`there was an error: ${error}`)
    }
  }

  const card = document.querySelector('#card')
  console.log(card)
  
  const addPoke = (data) => {
    console.log(data.sprites.front_default)
    card.innerHTML = `
        <img src="${data.sprites.front_default}">
    `
  }