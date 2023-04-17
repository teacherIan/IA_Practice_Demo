import './style.css';

const form = document.getElementById('input_form');
const submitButton = document.getElementById('submit_button');

let nameArr = [];
let ageArr = [];

getRandomUser();

async function getRandomUser() {
  const data = await fetch('https://randomuser.me/api/');
}

function addPerson(name, age) {
  //personDiv is the container for 'name' and 'age' divs
  const personDiv = document.createElement('div');
  personDiv.className = 'person';
  peopleContainer.appendChild(personDiv);

  //create and append nameDiv to personDiv
  const nameDiv = document.createElement('div');
  nameDiv.innerHTML = `Name: ${name}`;
  personDiv.appendChild(nameDiv);

  //create and append ageDiv to personDiv
  const ageDiv = document.createElement('div');
  ageDiv.innerHTML = `Age: ${age}`;
  personDiv.appendChild(ageDiv);
}

function clickHandler(e) {
  e.preventDefault();
  let formData = new FormData(form);

  nameArr.push(formData.get('name'));
  ageArr.push(formData.get('age'));

  addPerson(formData.get('name'), formData.get('age'));
}

submitButton.addEventListener('click', clickHandler);

const peopleContainer = document.querySelector('.people');
