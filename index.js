let voteButtons;

document.addEventListener('DOMContentLoaded', () => {
  voteButtons = document.querySelectorAll('.voteButtons');
  fetchAnimal();
  voteButtons.forEach(button => {
    button.addEventListener("click", (event) => {

    });
  });

  const reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
  });
});

function fetchAnimal() {
  fetch('http://localhost:3000/characters')
    .then(resp => resp.json())
    .then(data => iterateCharacter(data));
}

function iterateCharacter(data) {
  data.forEach(character => {
    displayCharacter(character);
  });
}

function displayCharacter(character) {
  const display = document.getElementById("displayAnimals");
  const div = document.createElement('div');
  div.innerHTML = `
    <div>
      <img src="${character.image}">
    </div>
  `;
  display.appendChild(div);
}

voteButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const animalName = button.dataset.animal;
    const animal = characters.find(a => a.name === animalName);
    if (animal) {
      animal.vote++;
      displayAnimal(animal);
      updateVotesOnServer(characters);
    }
  });
});

reset.addEventListener("click", () => { 
  fetch("http://localhost:3000/characters")
    .then(resp => resp.json())
    .then(characters => {
      characters.forEach(character => {
        character.vote = 0;
      });
      displayAnimal(characters[0]);
      updateVotesOnServer(characters);
    });
});
