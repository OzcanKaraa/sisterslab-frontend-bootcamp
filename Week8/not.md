Redux Toolkit
------------------------------------------------------------------------
Global State Manager en cok kullanılan en cok tercıh edılen 

What is Redux??
Redux:GLOBAL bir durum state yonetmek guncellemek icin kullanilan kutuphanedir.
Uygulamanin bircok bolumunde userlarin kullanici eylemlerine nasil tepki verilecegi ve hangi verilerin gosterilecegini yonetmek icin yardimci olur.
-----------------------------------------------------------------
When to Use Redux?
Ne zaman kullanilir?
Uygulamanizda bircok yerde ihtiyac duyulan buyuk miktarda applicastion state varsa uygulamanin state varsa kullanilabilir.
Uygulama durumu zamanla sik sik guncelleniyorsa yada bu durumun guncellemenin mantigini karmasik olabilir karmasik oldugunda kullanilabilir.
Redux toolkit kucuk olcekli projelerde kullanmak icin verimli degil React stateleri kullanmak daha avantaj.
Orta yada buyuk olcekli kod tabanina sahipse proje o zaman kullanilir.
-----------------------------------------------------------------
Redux Before 2020
2020 den once Redux 
Çok fazla Şablon kod içerir Redux ile Redux Toolkit arasındaki fark yapılan işler değişmedi sadece daha az boılerplate sablon kod kullanmamıza yardımcı oldu.Redux tarafından Bazı temel fonksıyonlar için çok fazla yapılandırma gerekiyor.

Overkill in certain situations ornegınde Todo Lıst ornegınde asırıya kacan bır ornek.
-----------------------------------------------------------------
Enter Redux Toolkit 
En önemli kısım
Redux geliştirme için resmi 
store kurulumunda reducer olusturmada sabit verileri yönetmede aşırı boiled Plate ile ilgilenir.
Redux DevTools Extension Redux Thunk içerisinde mevcut çeşitli eklentiler.
-----------------------------------------------------------------
Terminalogy we will use
Redux Terminolojisi 
Actions
Uygulamada What Happened ne oldugunu açıklayan description type alanı içeren düz bir Javascript nesnesi.
Gerekli ek veriler Paylout alanında içerir.
-----------------------------------------------------------------
Reducers 
İndırgeyiciler
Gecerlı state var actıon nesnesı alıyor ve durumu  guncelleme ıslemı gerceklestırır map fonksıyon mantıgı gibi
array fonksiyonlarındaki reducers olan verinin üstüne her seferinde yeni veri ekleme benzer mantıkla state actıon alıyor 
actıon ıle reducers her seferınde guncelleme ıslemı gerceklestırıyor.
-----------------------------------------------------------------
Dispatch 
gondermek gonderım yapmak 

Bır state guncellemek ıcın dispatch çağırıp bir aksiyon nesnesi return edilir.State guncellemek ıcın dispatch fonskiyonu kullanılır.Sonrasında aksiyonları göndermeyi uygulamada bir olayı tetiklemek olarak düşünülebilir.
-----------------------------------------------------------------
Store
Mevcut redux uygulamalarımızın statelerının tutuldugu yer.Depo 
Store adını verildiği nesne 
Bır reducer pass ederek geçirerek store olustur.Store kısımları reducerlı içerisine gönderme ve bütün store acrtionsları reducer üzerinden ulaşmayı sağlar.
Redux store actions gönderildiğinde kök reducer çalıştır.Aksiyon alma noktasında reducer dispact ederek içerisindeki aksiyonları çalışmasını sağlar.
-----------------------------------------------------------------
Provider COMPONENT İle benzer uygulama nasıl yapılır.

Provider ile uygulamayı sarma.
Provider import etttiktyen sonra store folder olması gerekiyor 
redux toolki yapılacak tüm işlemler store içerisinde olmalı.
redux folder olusturmus altına store yazmıs ve import etmiş

App çevreisini provider ile sarıyoruz store gönderme işlemi 
store bütün state tutulacak işlemler 
store ile işlem yapıldıgında herhangi bir sayfa içerisinde durmadan prop passing yapmamıza gerek olmayacak.
4 katmanlı sayfa oldugunu varsayarsak birinci katmandan dördüncü katmana propları teker teker indiriliyordu iki ara katman prop ile bağımsızdı.
Store ile birinci katmanda kullandıgımız prop aradaki iki katmanı geçerek en alttaki katmana ulaştırlablecek.
1.katman veriyi store gönderme 4.companent store gidiliyor istediği bilgiyi alıp çekebilir.Bu şekilde prop passıng ve props drilling önüne geçiriliyor.

configureStore()
store konfigurasyonu islemi gerceklestirir.
configureStore() key var 1 tane store olusturuluyor store icerisine configureStore() keywordu import edilir todo icin reducer olusturmus olusturacagimiz slice ya da reducer store icerisinde export default configure store icerisine reducer hangi islemleri yapacagimiza gore ornegin todo icin reducer import edilir.

createSlice()
todo reducer import edilen createSlice() ile beraber olusturulur.Redux toolkit icerisinden dosyanin altina import edilir.
todo islemi gerceklestirirken state ile olusturuluyor add delete update CRUD islemleri gerceklestiriliyordu createSlice() ile bu islemlerin bu aksiyonlarin tamamnini create SLice icerisinde todo slice icerisinde yapilacak. 

syntax olarak ;

export const todoSlice = createSlice({
  name: "todos",
  initialState: { //state 
    todoList: [], //ilk state bos array
  },
  reducers: { //aksiyonlar
    addTodo: (state, action) => {  //State onChange veri setTodo ile guncelleme islemi 
    //reducer icerinde action olusturulup action icerisinde state tutulup state action gosterme 
      //Update State //update islemi 
    },
  },
});

export const { addTodo } = todoSlice.actions; //kullanmak istedigimiz fonksiyonu todoSlice actions icerisinden export edilir.Distract edilir
todo Slice icerisinden addTodo Distract edip disariya export edilir.

​
export default todoSlice.reducer;  

-----------------------------------------------------------------
Add Todo Reducer
Disarida yazilan state todo list icerisine Push edilir.
action payload icerisine yazip gonderilecek data array item olarak eklenir.

-----------------------------------------------------------------
useDispatch























