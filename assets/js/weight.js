document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  // Convert lbs into grams
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  // Convert lbs into Kilograms
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  // Convert lbs into Ounces
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});
