const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
];

//Yukar�daki dizi i�inde bulunan "Water" t�r�ndeki Pokemonlar� `filter` kullanarak filtrelemek istiyoruz.
//Filtreleme i�lemi sonucunda ka� "Water" t�r�ndeki Pokemon oldu�unu ve bu Pokemon'lar�n isimlerini bulman�z gerekiyor.

// "Water" t�r�ndeki Pokemon'lar� filtrele
const waterPokemons = pokemons.filter(pokemon=>pokemon.type === 'Water')
console.log(waterPokemons)

// "Water" t�r�ndeki Pokemon say�s�
const waterPokemons = pokemons.filter(pokemon=>pokemon.type === 'Water')
console.log(waterPokemons.length)

// "Water" t�r�ndeki Pokemon isimleri
const waterPokemonsName = waterPokemons.map(waterPokemons=>name)
console.log(waterPokemonsName)


//Yukar�daki dizide bulunan her bir Pokemon'un deneyim puan�n� 2 kat�na ��karmak ve bu i�lem sonucunda yeni bir dizi olu�turmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un ad�n� ve yeni deneyim puan�n� i�ermelidir.
const doubledExperience = pokemons.map(pokemon => ({
    name: pokemon.name,
    experience: pokemon.experience * 2,
}));

console.log(doubledExperience);

//Pokemon dizisinde, t�m "Water" t�r�ndeki Pokemonlar deneyim puanlar�n�n en az 60 oldu�u bir ko�ulu kar��l�yor mu ?
// Ayr�ca, "Fire" t�r�ndeki Pokemonlar i�inden en az birinin deneyim puan� 70 veya daha fazla m� ?
// Bu iki ko�ulu kontrol eden ve sonu�lar� ekrana yazd�ran bir kod yaz�n.

// T�m "Water" t�r�ndeki Pokemon'lar deneyim puan� en az 60 m�?
const allWaterPokemonsHighExperience = pokemons
    .filter(pokemon => pokemon.type === 'Water')
    .every(pokemon => pokemon.experience >= 60);

// "Fire" t�r�ndeki Pokemonlardan en az birinin deneyim puan� 70 veya daha fazla m�?
const someFirePokemonHighExperience = pokemons
    .filter(pokemon => pokemon.type === 'Fire')
    .some(pokemon => pokemon.experience >= 70);

console.log(
    "T�m 'Water' t�r�ndeki Pokemonlar deneyim puan� en az 60 m�?",
    allWaterPokemonsHighExperience
);
console.log(
    "'Fire' t�r�ndeki Pokemonlardan en az biri deneyim puan� 70 veya daha fazla m�?",
    someFirePokemonHighExperience
);

//Pokemon dizisinde bulunan "Electric" t�r�ndeki Pokemon'lar�n deneyim puanlar�n�n toplam�n�
// kullanarak hesaplamak istiyorsunuz.

const totalElectricExperience = pokemons
    .filter(pokemon => pokemon.type === 'Electric')
    .reduce((total, pokemon) => total + pokemon.experience, 0);

console.log(
    "Electric t�r�ndeki Pokemon'lar�n toplam deneyim puan�: " +
    totalElectricExperience
);

//Pokemon dizisinde, her t�rdeki Pokemon'lar�n deneyim puanlar�n�n ortalamas�n� hesaplamak istiyorsunuz.
// Her t�rdeki Pokemon'lar�n deneyim puanlar�n�n ortalamas�n� hesapla tiplerin karsiliginda ortalamasi 

//???
console.log(typeExperienceAverages);