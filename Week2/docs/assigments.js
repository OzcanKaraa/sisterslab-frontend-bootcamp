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
----------------------------------------------------------------------------------------------------------------------
// "Water" t�r�ndeki Pokemon'lar� filtrele


// "Water" t�r�ndeki Pokemon say�s�


// "Water" t�r�ndeki Pokemon isimleri


----------------------------------------------------------------------------------------------------------------------
//Yukar�daki dizide bulunan her bir Pokemon'un deneyim puan�n� 2 kat�na ��karmak ve bu i�lem sonucunda yeni bir dizi olu�turmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un ad�n� ve yeni deneyim puan�n� i�ermelidir.


----------------------------------------------------------------------------------------------------------------------
//Pokemon dizisinde, t�m "Water" t�r�ndeki Pokemonlar deneyim puanlar�n�n en az 60 oldu�u bir ko�ulu kar��l�yor mu ?
// Ayr�ca, "Fire" t�r�ndeki Pokemonlar i�inden en az birinin deneyim puan� 70 veya daha fazla m� ?
// Bu iki ko�ulu kontrol eden ve sonu�lar� ekrana yazd�ran bir kod yaz�n.

// T�m "Water" t�r�ndeki Pokemon'lar deneyim puan� en az 60 m�?


// "Fire" t�r�ndeki Pokemonlardan en az birinin deneyim puan� 70 veya daha fazla m�?



----------------------------------------------------------------------------------------------------------------------
//Pokemon dizisinde bulunan "Electric" t�r�ndeki Pokemon'lar�n deneyim puanlar�n�n toplam�n�
// kullanarak hesaplamak istiyorsunuz.


----------------------------------------------------------------------------------------------------------------------
//Pokemon dizisinde, her t�rdeki Pokemon'lar�n deneyim puanlar�n�n ortalamas�n� hesaplamak istiyorsunuz.
// Her t�rdeki Pokemon'lar�n deneyim puanlar�n�n ortalamas�n� hesapla tiplerin karsiliginda ortalamasi 

const typeExperienceAverages = {};
pokemons.forEach(pokemon=>{
   if (!typeExperienceAverages[pokemons.type]) {
    typeExperienceAverages[pokemons.type]={
        totalExperience:0,
        count:0,
    };
   } 
   typeExperienceAverages[pokemon.type].typeExperience += pokemon.experience;
   typeExperienceAverages[pokemon.type].count += 1;
})

for (var type in typeExperienceAverages) {
  typeExperienceAverages[type].averagesExperience = typeExperienceAverages[type].totalExperience.count
}

console.log(typeExperienceAverages);

--------------------------------------------------------------------------------------------------------------
const typeExperienceAverages2 = pokemons.reduce((result, pokemon) => {
  if (!result[pokemon.type]) {
    result[pokemon.type] = { totalExperience: 0, count: 0 };
  }
  result[pokemon.type].totalExperience += pokemon.experience;
  result[pokemon.type].count += 1;
  return result;
}, {});

for (const type in typeExperienceAverages) {
  typeExperienceAverages[type].averageExperience =
    typeExperienceAverages[type].totalExperience / typeExperienceAverages[type].count;
}

console.log(typeExperienceAverages2);

const typeExperienceAverages3 = Object.values(
  pokemons.reduce((result, pokemon) => {
    result[pokemon.type] = result[pokemon.type] || { totalExperience: 0, count: 0 };
    result[pokemon.type].totalExperience += pokemon.experience;
    result[pokemon.type].count += 1;
    return result;
  }, {})
).map(typeData => ({
  type: typeData.totalExperience,
  averageExperience: typeData.totalExperience / typeData.count
}));

console.log(typeExperienceAverages3);