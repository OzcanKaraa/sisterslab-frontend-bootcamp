import axios from "axios";

const FetchPokemonWithID = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  console.log("responsed :::: ",response.data);
  return response.data;
};

export default FetchPokemonWithID;
