# 🐾 Spin Egg Helper

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green) ![License](https://img.shields.io/badge/License-MIT-blue)

LINK AL TOOL https://afanelli.github.io/spin_egg

Tool di aiuto per lo **Spin Egg**\
StartAB.it - Clash of Ages [Season 3]

## ✨ Funzionalità principali

- Scarica i dati dei Pokémon dalla [PokéAPI](https://pokeapi.co/)
- Dato un Pokemon ricerca il Pokemon precedente nel pokedex nazionale 
- Tabella in cui vengono mostrati i Pokémon migliori per lo spin egg 

---

## 🗂️ Esempio di JSON generato

```json
[
  {
    "name": "NINCADA",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "bst": 266,
    "prevName": "SLAKING",
    "prevImage": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "prevBST": 670
  }
]
```

| Campo       | Descrizione                              |
| ----------- | ---------------------------------------- |
| `name`      | Nome del Pokémon                         |
| `image`     | URL dell’immagine                        |
| `bst`       | Base Stat Total del Pokémon              |
| `prevName`  | Nome del Pokémon precedente              |
| `prevImage` | URL dell’immagine del Pokémon precedente |
| `prevBST`   | Base Stat Total del Pokémon precedente   |


questo json attualmente è iniettato direttamente nell'html

## 🚀 Come usare lo script per generare il json per la tabella dei migliori mon
```bash
json node generate_filtered_500-580.js 
```

## 🔧 Personalizzazione dei filtri
All’interno dello script, puoi modificare i criteri di filtraggio, ad esempio:
```javascript 
if (pokemon.bst <= 500 && previousPokemon.bst >= 580) {
}
```
## ⚠️ Note

**Arceus** è escluso in quanto non presente, il precedente di Victini sarà Shaymin.\
Spell check su errori di battitura pokemon

## 📖 Risorse utili
[PokéAPI](https://pokeapi.co/) – API ufficiale dei dati Pokémon \
[Node.js](https://nodejs.org/) – Runtime per eseguire JavaScript fuori dal browser