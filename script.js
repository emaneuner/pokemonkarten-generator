var meineLinks = [

  
  "https://www.gate-to-the-games.de/images/product_images/popup_images/Teams-sind-Trumpf-97.jpg",
 
  "https://assets.pokemon.com/assets/cms2-de-de/img/cards/web/SM2/SM2_DE_74.png",
  "https://assets.pokemon.com/assets/cms2-de-de/img/cards/web/SM8/SM8_DE_86.png",
  "https://assets.pokemon.com/assets/cms2-de-de/img/cards/web/SM7/SM7_DE_109.png",
  "https://assets.pokemon.com/assets/cms2-de-de/img/cards/web/SM3/SM3_DE_139.png",


];


function linkGenerieren() {
  var zufallsZahl = Math.random() * meineLinks.length;
  var index = Math.floor(zufallsZahl);
  document.getElementById("meinBild").src = meineLinks[index];
}