import FetchPokemonWithID from "@/pages/api/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";

const PokemonDetail = () => {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    const response = await FetchPokemonWithID(id);
    setPokemon(response);
  };

  useEffect(() => {
    if (id) {
      getPokemon();
    }
  }, [id]);

  if (!pokemon) {
    return <PokemonCard isLoading={true} />;
  }
  return (
    <div>
      <PokemonCard
        isLoading={false}
        isClickable={false}
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        imgSrc={pokemon.sprites.front_default}
        stats={pokemon.stats.map((stats) => (
          <p key={stats.stat.name}>
            {stats.stat.name}: {stats.base_stat}
          </p>
        ))}
      />
    </div>
  );
};

export default PokemonDetail;
