//her bir npm projesinde zorunlu olmasi gereken bir dosya var
//package.json
//codesandbox da package.json dosyasi
//react projesi 3 paket gelmis

//react
//react-dom
//react-scripts

//https://react.dev/learn/thinking-in-react

//**Ýmperatif Kodlama**

//Ne yapýlmasý gerektiðini adým adým belirtirsiniz.
//Nasýl yapýlacaðýna dair ayrýntýlý talimatlar verirsiniz.
//Daha fazla kod yazmanýz gerekebilir.
//Örneðin, "Adým 1'de þunu yap, Adým 2'de bunu yap" gibi adýmlarla ilerlersiniz.

//her bir elemaný tek tek döner iken

//Örnek (toplam hesaplama):
let toplam = 0;
for (let i = 0; i < 10; i++) {
    toplam += i;
}

//**Deklaratif Kodlama**:
// Ne yapýlmasý gerektiðini söylersiniz, ancak nasýl yapýlacaðýna dair ayrýntýlara odaklanmazsýnýz.
// Kod daha soyut ve anlaþýlýr olabilir.
// Daha az kod kullanabilirsiniz.

//Örnek (toplam hesaplama):
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const toplam = numbers.reduce((acc, current) => acc + current, 0);

//react ile calisirken 2 onemli motivasyonumuz var
//1-deklaratif gidiyoruz tarif ederek state i guncelleyerek
//2- gordumuz tasarimi en kucuk ayirabildigimiz componentlere ayirmak