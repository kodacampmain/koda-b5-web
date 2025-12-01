// async function getRickAndMortyCharacters() {
//   const url = "https://rickandmortyapi.com/api/character";
//   try {
//     // tampilkan loading
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`${response.status}: ${response.statusText}`);
//     }
//     const data = await response.json();
//     // sembunyikan loading
//     const characters = data.results;
//     const target = document.querySelector("div.grid");
//     const fragment = document.createDocumentFragment();
//     characters.slice(0, 8).forEach((character) => {
//       const div = document.createElement("div");
//       div.classList.add("item");
//       const img = document.createElement("img");
//       img.setAttribute("src", character.image);
//       img.setAttribute("alt", character.name);
//       img.classList.add("image");
//       div.append(img);
//       fragment.append(div);
//     });
//     target.append(fragment);
//   } catch (error) {
//     console.log(error);
//   }
// }

getRickAndMortyCharacterWithQuery();

const speciesDropdown = document.querySelector("select");
speciesDropdown.addEventListener("change", (e) => {
  const species = e.target.value;
  getRickAndMortyCharacterWithQuery({ species });
});
// async function filterCharacterBySpecies(species) {
//   const url = "https://rickandmortyapi.com/api/character";
//   const query = `?species=${species}`;
//   try {
//     // tampilkan loading
//     const response = await fetch(url + query);
//     if (!response.ok) {
//       throw new Error(`${response.status}: ${response.statusText}`);
//     }
//     const data = await response.json();
//     // sembunyikan loading
//     const characters = data.results;
//     const target = document.querySelector("div.grid");
//     const fragment = document.createDocumentFragment();
//     characters
//       // .filter((character) => {
//       //   return character.species.toLowerCase() === species.toLowerCase();
//       // })
//       .slice(0, 8)
//       .forEach((character) => {
//         const div = document.createElement("div");
//         div.classList.add("item");
//         const img = document.createElement("img");
//         img.setAttribute("src", character.image);
//         img.setAttribute("alt", character.name);
//         img.classList.add("image");
//         div.append(img);
//         fragment.append(div);
//       });
//     while (target.firstChild) {
//       target.removeChild(target.firstChild);
//     }
//     target.append(fragment);
//   } catch (error) {
//     console.log(error);
//   }
// }

const resetFilter = document.querySelector("button");
resetFilter.addEventListener("click", () => {
  const speciesDropdown = document.querySelector("select");
  speciesDropdown.value = "0";
  getRickAndMortyCharacterWithQuery();
});
// resetFilter.addEventListener("click", () => {
//   const target = document.querySelector("div.grid");
//   const speciesDropdown = document.querySelector("select");
//   speciesDropdown.value = "0";
//   while (target.firstChild) {
//     target.removeChild(target.firstChild);
//   }
//   getRickAndMortyCharacters();
// });

async function getRickAndMortyCharacterWithQuery(queryParams) {
  const url = "https://rickandmortyapi.com/api/character?";
  let query = new URLSearchParams(queryParams).toString();
  // if (queryParams.name) {
  //   query += `name=${queryParams.name}`;
  // }
  try {
    // tampilkan loading
    const response = await fetch(url + query);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    // sembunyikan loading
    const characters = data.results;
    const target = document.querySelector("div.grid");
    const fragment = document.createDocumentFragment();
    characters
      // .filter((character) => {
      //   return character.species.toLowerCase() === species.toLowerCase();
      // })
      .slice(0, 8)
      .forEach((character) => {
        const div = document.createElement("div");
        div.classList.add("item");
        const img = document.createElement("img");
        img.setAttribute("src", character.image);
        img.setAttribute("alt", character.name);
        img.classList.add("image");
        div.append(img);
        fragment.append(div);
      });
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
    target.append(fragment);
  } catch (error) {
    console.log(error);
  }
}
