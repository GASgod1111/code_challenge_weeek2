document.addEventListener('DOMContentLoaded',()=>{
    const voteButtons = document.querySelectorAll('.votebuttons');

    fetchAnimal()
})
function fetchAnimal(){
    fetch('http://localhost:3000/characters')
   .then(resp=>resp.json()) 
   .then(data=>iterateCharacter(data))
}
function iterateCharacter(data){
    data.forEach(character=>{
        displayCharacter(character);
    }); 
}
function displayCharacter(character){
    const display = document.getElementById("displayAnimals")
    const  div=document.createElement('div')
    div.innerHTML=`
    <div>
        <img src="${character.image}">
    </div>
    `
    display.appendChild(div)

}
voteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      const animalName = button.dataset.animal;
      const animal =character.find(a => a.name === animalName);
      if (animal) {
        animal.vote++;
        displayAnimal(animal);
        updateVotesOnServer(character); // Update votes on the server
      }
    });
  });

resetMybutton.addEventListener("click", () => {
fetch("http://localhost:3000/character")
  .then(resp => resp.json())
  .then(character => {
    character.forEach(character => {
      character.vote = 0;
    });
    displayAnimal(characters[0]);
    updateVotesOnServer(characters); // Update votes on the server
  });
});