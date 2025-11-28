const url = "https://jsonplaceholder.typicode.com/users";
axios
  .get(url)
  .then((res) => {
    console.log(res.data);
    const result = res.data.map((user) => {
      return { id: user.id, name: user.name, company: user.company.name };
    });
    console.log(result);
  })
  .catch((err) => console.log(err));

async function getPokemonWithAbilities() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  try {
    const res = await axios.get(url);
    console.log(res.data.results);
    const result = res.data.results.map(async (pokemon) => {
      const singlePokemon = {
        name: pokemon.name,
      };
      try {
        const res = await axios.get(pokemon.url);
        const abilities = res.data.abilities.map((abilityItem) => {
          return abilityItem.ability.name;
        });
        Object.assign(singlePokemon, { abilities });
        return singlePokemon;
      } catch (error) {
        throw error;
      }
    });
    const pokemons = await Promise.all(result);
    console.log(pokemons);
  } catch (error) {
    console.log(error);
  }
}
getPokemonWithAbilities();
