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

