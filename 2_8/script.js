// Funktio, joka yhdistää merkkijonoja
function concat(strings) {
  var result = "";
  // Käydään läpi kaikki merkkijonot taulukossa
  for (var i = 0; i < strings.length; i++) {
    result += strings[i];
  }
  return result; // Palautetaan yhdistetty merkkijono
}

// Esimerkkiryhmä merkkijonoja
var names = ["Johnny", "DeeDee", "Joey", "Marky"];

// Kutsutaan concat-funktiota
var concatenatedString = concat(names);

// Asetetaan yhdistetty merkkijono HTML-dokumenttiin
document.getElementById("result").innerHTML = concatenatedString;
