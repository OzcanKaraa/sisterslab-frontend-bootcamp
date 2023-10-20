//her bir npm projesinde zorunlu olmasi gereken bir dosya var
//package.json
//codesandbox da package.json dosyasi
//react projesi 3 paket gelmis

//react
//react-dom
//react-scripts

//https://react.dev/learn/thinking-in-react

//**�mperatif Kodlama**

//Ne yap�lmas� gerekti�ini ad�m ad�m belirtirsiniz.
//Nas�l yap�laca��na dair ayr�nt�l� talimatlar verirsiniz.
//Daha fazla kod yazman�z gerekebilir.
//�rne�in, "Ad�m 1'de �unu yap, Ad�m 2'de bunu yap" gibi ad�mlarla ilerlersiniz.

//her bir eleman� tek tek d�ner iken

//�rnek (toplam hesaplama):
let toplam = 0;
for (let i = 0; i < 10; i++) {
    toplam += i;
}

//**Deklaratif Kodlama**:
// Ne yap�lmas� gerekti�ini s�ylersiniz, ancak nas�l yap�laca��na dair ayr�nt�lara odaklanmazs�n�z.
// Kod daha soyut ve anla��l�r olabilir.
// Daha az kod kullanabilirsiniz.

//�rnek (toplam hesaplama):
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const toplam = numbers.reduce((acc, current) => acc + current, 0);

//react ile calisirken 2 onemli motivasyonumuz var
//1-deklaratif gidiyoruz tarif ederek state i guncelleyerek
//2- gordumuz tasarimi en kucuk ayirabildigimiz componentlere ayirmak