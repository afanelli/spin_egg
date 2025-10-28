const fs = require("fs");
const fetch = require("node-fetch");

const maxGenId = 721; // Gen 1–6

(async () => {
  const pokemons = [];

  for (let id = 1; id <= maxGenId; id++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) continue;
      const data = await response.json();

      // Determina il precedente
      let prevId = id === 1 ? 721 : id - 1;
      let prevResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${prevId}`);
      let prevData = await prevResponse.json();
      if (prevData.name.toLowerCase() === "arceus") {
        prevResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/721`);
        prevData = await prevResponse.json();
      }

      const prevBST = prevData.stats.reduce((acc, s) => acc + s.base_stat, 0);
      if (prevBST >= 580) {
        pokemons.push({
          name: data.name.toUpperCase(),
          image: data.sprites.front_default,
          prevName: prevData.name.toUpperCase(),
          prevImage: prevData.sprites.front_default,
          prevBST
        });
      }
    } catch (e) {
      console.log("Errore con ID", id, e);
    }
  }

  // Ordina per BST del precedente
  pokemons.sort((a, b) => b.prevBST - a.prevBST);

  // Salva in JSON
  fs.writeFileSync("pokemon_prev_bst.json", JSON.stringify(pokemons, null, 2));
  console.log("JSON generato con", pokemons.length, "pokemon!");
})();
