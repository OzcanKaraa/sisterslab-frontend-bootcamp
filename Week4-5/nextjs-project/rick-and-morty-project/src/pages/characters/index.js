import { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import InfoCard from '@/components/InfoCard';

const Characters = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState('');
  const[searchBy,setSearchBy] = useState('name');

  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

const fetchCharacterData = async() =>{
  let characterList = [];
  if(searchText){
    characterList = await fetchCharacterData(SearchText,searchBy);
  }else{
    characterList = await fetchCharacters();
    setCharacters(characterList);
  }
};


  useEffect(() => {
    getCharacters();

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // const handleCharacterSelect = (e, value) => {
  //   setSelectedCharacter(value);
  // };

  const handleClick = (id) => {
    router.push(`/characters/${id}`);
  };

  // const filteredCharacters = selectedCharacter
  //   ? characters.filter((character) => character.id === selectedCharacter.id)
  //   : characters;

  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchText.toLowerCase()) ||
      character.status.toLowerCase().includes(searchText.toLowerCase()) ||
      character.gender.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleFavoriteToggle = (id) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (id) => favorites.includes(id);
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} >
      <FormControl size="small" sx= {{widht:'100px'}}>
  <InputLabel id="demo-simple-select-label">Search By</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={searchBy}
    label="Age"
    onChange={(e) => setSearchBy(e.target.value)}
  >
    <MenuItem value='name'>Name</MenuItem>
    <MenuItem value='status'>Status</MenuItem>
    <MenuItem value='species'>Species</MenuItem>
  </Select>
</FormControl>
     
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Enter search text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
       </Stack>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {filteredCharacters.map((character) => (
          <InfoCard
            key={character.id}
            character={character}
            handleFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite}
            handleClick={handleClick}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
