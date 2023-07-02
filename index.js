document.addEventListener('DOMContentLoaded',()=>{
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