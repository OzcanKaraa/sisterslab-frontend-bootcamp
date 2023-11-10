import axios from "axios";
import css from "@/styles/pokemon.module.scss";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";

export default function Characters() {
  const [deck1, setDeck1] = useState([]);
  const [deck2, setDeck2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const deck1 = localStorage.getItem("deck1");
    const deck2 = localStorage.getItem("deck2");

    if (deck1) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setDeck1(JSON.parse(deck1));
    }
    if (deck2) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setDeck2(JSON.parse(deck2));
    }
  }, []);
  const getPokemon = async () => {
    const id = Math.floor(Math.random() * 100) + 1;
    setIsLoading(true);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    console.log(response.data);
    return response.data;
  };

  const addPokemonToDeck = async (deck, setDeck, deckKey) => {
    if (deck.length < 5) {
      const newPokemon = await getPokemon();
      const updatedDeck = [...deck, newPokemon];
      setDeck(updatedDeck);
      localStorage.setItem(deckKey, JSON.stringify(updatedDeck));
      setIsLoading(false);
    } else alert("Deck is full. (Max 5 Pokemons)");
  };

  const renderDeckItems = (deck) =>
    deck.map((pokemon) => (
      <PokemonCard
        isLoading={isLoading}
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
    ));

  return (
    <div className={css.RootPokemon}>
      <div className={css.MainDiv}>
        <h1 className={css.Header1}>PoKéMoN</h1>
        <div className={css.ButtonContent}>
          <Button
            className={css.AddPokemon}
            variant="contained"
            size="small"
            onClick={() => addPokemonToDeck(deck1, setDeck1, "deck1")}
          >
            Add Random Pokemon for 1st Deck
          </Button>
          <Button
            className={css.AddPokemon}
            variant="contained"
            size="small"
            onClick={() => addPokemonToDeck(deck2, setDeck2, "deck2")}
          >
            Add Random Pokemon for 2nd Deck
          </Button>
        </div>
        <div className={css.Decks}>
          <div className={css.Deck1}>
            <h2>Deck 1</h2>
            {<div className={css.PokemonCard}>{renderDeckItems(deck1)}</div>}
          </div>
          <div className={css.Deck2}>
            <h2>Deck 2</h2>
            {<div className={css.PokemonCard}>{renderDeckItems(deck2)}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
