
// const treasure = (location) => {
//   return alert("location")
// }

var treasure = Math.floor(Math.random() * 6)
var bomb = Math.floor(Math.random()* 6)


const coolCreatures = (pokemon) => {
  if(pokemon === treasure) {
    document.getElementById(pokemon).innerHTML = "🏆"
  } else if(pokemon === bomb) {
    document.getElementById(pokemon).innerHTML = "💣"
  } else {
    document.getElementById(pokemon).innerHTML = "😂"
  }
}