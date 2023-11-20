npx create-next-app@13.5.6

jSON Server ile api yazmak json verileri hook karakter belirtilen json degerlerine gore olusturmak icin

db json file olusturup 

Get post put patch delete istek endpointleri yapilabilir 
localhost 3000 deploy edilen kisimda ise Base Url 


json serve ile local rest api kurmak icin json server paketlerini yuklemek gerekiyor.

json kurulum icin
 npm install json-server --save-dev

 DB json olusturmak icerisine ornegin book olusturmak icin gerekli datalar gerekli.
 book id title author price currency description image url

 npm install  veya npm i  ile node module indirilebilir

json server baslatmak icin 
json-server --watch db.json
port verilebilir
json-server --watch db.json --port 3001

End pointten istek atilmis gibi 
anasayfa da kitaplar dondurulecek end point istegi 
grid olarak kullanma

npm i axios




