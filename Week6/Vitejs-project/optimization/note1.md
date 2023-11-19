useMemo:
--------------------------------------
Nerede kullanacagim 
Hesaplama maliyeti cok yuksek olan islemleri optimize etmek icin kullanilir.Kucuk ıslemlerde kullanılmaması tavsıye edılır.Render olmamasını saglar.counter ıse usememo kullanma render maliyeti dusuktur.Usememo kullanılarak malıyetı artırılır.

Belirli girdiler değişmediği sürece depence değişmediği sürece degerın yenıden hesaplanmasını onler.Aynı propslarla aynı girdilerle tekrar tekrar aynı hesaplamanın yapılmasını engeller.Performans artısı saglanır.


Bir değeri hesaplayarak cachte saklama için kullanılır.Bu hesaplama genellikle değeri dönüştürme işlemi filtreleme gibi işlemi içerir.Geriye dönüş değeri de hesaplanmış sonucun kendisi olur.Counter örneğinde sadece counta göre değiştiği zaman dönen değeri caschte saklanır.Cachete saklanan deger normal sayfada her sayfa render oldugunda deger her zaman tekrar hesaplanacak.useMemo hook kullanıldıgında tekrar render olmayıp cachte devam edecek count degıstıgı noktada tekrar render olacak.

useMemo bir deger hesaplama return etme ise kullanilir.

Kullanım senaryolarında :useMemo hesaplama maliyeti yuksek islemler icin kullanilir.Listelerin filtrelenmesi donusturulmesi gibi ozel islemlerde kullanilir.

Listelerin filtrelenmesi donusturulmesi filter ile yapilir cok buyuk datalarda kullanilir.
------------------------------------------------------------------------------------------------------
useMemo useCallBack farki : bir tarafta deger return ederken diger tarafta fonksiyonu cache onbellege alinir.useMemo da degeri tutarken diger tarafta useCallBackte ise fonksiyon tutulur.
------------------------------------------------------------------------------------------------------
useCallBack: onksiyonu cache onbellege alinir.Callback degeri cache alinan fonksiyonun kendisi.FONKSIYON DEGERINI TUTAR.Fonksiyonun surekli calisip calismamasi onune geçilir.Referansları değişmemesi degerler oluyor özellikle companentin tekrar render edilmemesini önlemek için kullanılır.Optimize islemler gerceklestirir.Fonksiyon durmadan calismasi.
Fonksiyonun referansini cachleeme icin useCallback

Her iki fonksiyonda kullanilabilir.
----------------------------------------------------------------------------------------------------------
Hangi hook belirlemek icin hangi adimlar izlenmeli? fonksiyonda useMemo useCallBack nasil karar verilir?
api istek sayfa ilk render oldugunda useeffect icerisinde depence degeri verilirse?Id ye gore atilirsa?

usememo islemi useeffect ile yapilabilir mi?

buyuk data projelerde kullanilan fonksiyon eger sayfa crash olup patlarsa optimize etmek gerekiyor.Optimize ederken nelere dikkat edilir?Onemli olan fonksiyon mu dondugu deger mi?

optimize ederken fonksiyon mu deger mi donuyor dikkat edilmeli.
-------------------------------------------------------------------------------------------------
React Memo:Memorization olayi
crash olma:sayfa cokmesi beyaz sayfa gozukmesi


Yapilacak islem hem degeri hesaplamayi hem de fonksiyonu on bellege cachleme islemi gerektiriyorsa :
hooklari if else fonksiyon icerisinde kullanilamaz.
Her iki fonksiyondan birini tercih edip kullanma yada fonksiyonu ayirip return degeri baska yerde fonksiyon hale getirip fonksiyonun calistigi yer baska yerde yazip ikisini ayni sayfa icerisinde kullanilabilir.
-------------------------------------------------------------------------------------------------
Ozetle
-------------
useMemo degeri onbellege almak icin useCallBack ise fonksiyonu on bellege almak icin.Ihtuyaca ve uygulamanin gereksinimine gore hook kullanilmasini karar verilir.
--------------------------------------------------------------------------------------------------
react developer tool

Profiler render suresi.
----------------------------

Vite Projesi olusturma
npm install -g yarn              --yarn kurulum
yarn create vite    
project-name : example-app 
react
javascript 
 npm install -g pnpm              -- pnpm kurulum
 yarn                            --node module yukleme
 yarn dev                        --uygulama calistirma

 prep?

Hook : iletilen sıkca güncellenen fonksiyonları optimize etmek için kullanılır.Bagımlıklıklar degısmedıgı surece fonksıyonun yenıden olusturmasını onler.

Effect callback memo depence bagli oldugu modullere gore calismasini saglar hepsi icin ortak.Ozellikle child companentler alt companentleri alt companentler props olarak gecen yada referans esitliligi onemli olan durumlarda 
gereksiz renderlari engellemeye yardimci olur.
--------------------------------------------------------------------------------------------------
reactMemo : Higher-Order companent companentlerin gereksiz yere yeniden render edilmesini onune gecmek icin.Performans optimizasyonda konusunda ihtiyaca gore verilen kosulu saglanmadiginda yada yanlis calisabilme problem oldugunda kullanilir.

Render olmamasi icin efect kullanilabilir condition bagli tutulur condition saglanmadigi surece companentin onune gecilebilir.
Kullanmak ekstra maliyet.
--------------------------------------------------------------------------------------------------
react next js kullanirken state kullanilir mutate etmemeye calisilir Javascriptin array fonksiyonlari kullanilir.Javascriptin array fonksiyonlarinda mutate olmayanlar dikkate alinir.ornek Push kullanilir.
Genel mantik Dont Mut State olan yerde Push kullanmak dogru degildir.Performansa bagli olarak veri kaybina yol acabilir.

Memo kavrami cok kritik problemli bir durum kullanmak icin kullanilabilir senaryolarda daha verimli olur.

setState gore degisim
 
 