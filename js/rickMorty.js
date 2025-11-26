async function getRickAndMortyCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    // tampilkan loading
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    // sembunyikan loading
    const characters = data.results;
    const target = document.querySelector("div.grid");
    const fragment = document.createDocumentFragment();
    characters.slice(0, 8).forEach((character) => {
      const div = document.createElement("div");
      div.classList.add("item");
      const img = document.createElement("img");
      img.setAttribute("src", character.image);
      img.setAttribute("alt", character.name);
      img.classList.add("image");
      div.append(img);
      fragment.append(div);
    });
    target.append(fragment);
  } catch (error) {
    console.log(error);
  }
}

getRickAndMortyCharacters();
