import { axios } from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
  const [books, setBooks] = useState([]); //books birden cok kitabi array olarak return ediyor.Map ile kullanilacak books state 

  useEffect(() => {    //useEffect ile istek atma.
    axios
     .get('http://localhost:3001/books')
     .then((response) => { //donen veriyi almak icin then kullanilir.
      setBooks(response.data); //donen datayi setBooks ile set edilir.
    })
    .catch((error) => console.log('error :>> ', error)); //error (clo)
   // .catch((error) => console.error('error :>> ', error)); //error kirmizi olarak gosterme.
  },[]);
  //Sayfayi ilk yuklendigi noktada.
  //useEffectin Dependency olmasi gerekiyor.

  //grid row col duzeyinde belirleme
  return 
}
export default Home