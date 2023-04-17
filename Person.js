export default class Person {
  constructor(name, age, picture = null) {
    this.name = name;
    this.age = age;
    this.picture = picture;
    this.container = document.querySelector('.people');
    this.createElement();
  }

  createElement() {
    //personDiv is the container for 'name' and 'age' divs
    const personDiv = document.createElement('div');
    personDiv.className = 'person';
    this.container.appendChild(personDiv);
    personDiv.addEventListener('click', () => {
      personDiv.remove();
    });

    if (this.picture) {
      const pictureIMG = document.createElement('img');
      pictureIMG.src = this.picture;
      pictureIMG.className = 'picture';
      personDiv.appendChild(pictureIMG);
    }

    //create and append nameDiv to personDiv
    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = `Name: ${this.name}`;
    personDiv.appendChild(nameDiv);

    //create and append ageDiv to personDiv
    const ageDiv = document.createElement('div');
    ageDiv.innerHTML = `Age: ${this.age}`;
    personDiv.appendChild(ageDiv);
  }
}
