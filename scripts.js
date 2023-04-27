
document.title = "Generasión 1 Pokimon";
console.log(document.title);

document.getElementById("gen-1").innerHTML= "Generasión 1 Pokimon";

document.getElementsByClassName("infocard-list infocard-list-pkmn-lg")[0].id = "generacion1";

document.getElementById("generacion1").style.backgroundColor = "aquamarine";

console.log(document.URL);

console.log(document.domain);

const images = document.getElementsByTagName("img");
console.log(images);

for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
}

