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

//Yukarýdaki dizi içinde bulunan "Water" türündeki Pokemonlarý `filter` kullanarak filtrelemek istiyoruz.
//Filtreleme iþlemi sonucunda kaç "Water" türündeki Pokemon olduðunu ve bu Pokemon'larýn isimlerini bulmanýz gerekiyor.

console.log(`"Water" türündeki Pokemon sayýsý:  `);
console.log(`"Water" türündeki Pokemon isimleri: `);

//Yukarýdaki dizide bulunan her bir Pokemon'un deneyim puanýný 2 katýna çýkarmak ve bu iþlem sonucunda yeni bir dizi oluþturmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un adýný ve yeni deneyim puanýný içermelidir.

console.log(doubledExperience);

//Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarýnýn en az 60 olduðu bir koþulu karþýlýyor mu ?
// Ayrýca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puaný 70 veya daha fazla mý ?
// Bu iki koþulu kontrol eden ve sonuçlarý ekrana yazdýran bir kod yazýn.

console.log(
    "Tüm 'Water' türündeki Pokemonlar deneyim puaný en az 60 mý?",
    allWaterPokemonsHighExperience
);
console.log(
    "'Fire' türündeki Pokemonlardan en az biri deneyim puaný 70 veya daha fazla mý?",
    someFirePokemonHighExperience
);

//Pokemon dizisinde bulunan "Electric" türündeki Pokemon'larýn deneyim puanlarýnýn toplamýný
// kullanarak hesaplamak istiyorsunuz.

console.log(
    "Electric türündeki Pokemon'larýn toplam deneyim puaný: " +
    totalElectricExperience
);

//Pokemon dizisinde, her türdeki Pokemon'larýn deneyim puanlarýnýn ortalamasýný hesaplamak istiyorsunuz.
console.log(typeExperienceAverages);