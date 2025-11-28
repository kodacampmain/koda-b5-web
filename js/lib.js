// import Chart from "chart.js/auto";

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

const dataPenjualan = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

(async function (dataInput) {
  const canvas = document.querySelector("#grafik");
  const labels = dataInput.map((datum) => datum.year);
  const data = dataInput.map((datum) => datum.count);
  new Chart(canvas, {
    type: "scatter",
    data: {
      labels,
      datasets: [
        {
          label: "Penjualan per Tahun",
          data,
        },
      ],
    },
  });
})(dataPenjualan);

axios
  .get("https://api.themoviedb.org/3/movie/now_playing", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2E0MjU3MWIwYTJhMTI3MzhkMGZhYTRjMjQzODRjNCIsIm5iZiI6MTc0MTA3MTk1Mi4xNzEsInN1YiI6IjY3YzZhNjUwZGQ0NmJkMmZkMzkwN2FmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEjyd9DnV8rUU3eQerJ_kclflblwGpSt6MLIpux5_YE",
    },
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
