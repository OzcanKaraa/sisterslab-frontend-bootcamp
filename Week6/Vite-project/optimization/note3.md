useMemo ve useCallBack her ne kadar birbirine benzer gibi gorunse de aslinda farkli senaryolar icin tasarlanmistir.Ikisi de performans optimizasyonu icin kullanilsa da kullandiklari yerler ve amaclari farklidir.

useMemo bir hesaplamanin sonucunu memoize etmek icin kullanilir.Pahali bir hesaplamanin sonucunu kaydedip ayni bagimliliklar ile dependency ile beraber tekrar hesaplanmanin onune gecmek icin kullanilir.

useMemo bagimlilik listesinde bir degisiklik olmadigi surece memoize degeri geri doner.

useCallBack bir fonksiyonun kendisini memoize etmek icin kullanilir genellikle bir alt companente prop olarak gecirilen fonksiyonlarin referansini korumak icin kullanilir.Bu sayede bagimliliklar ayni ise react alt companenti high companenti gereksiz yere render edilmesini engeller.

2 hook arasindaki temel fark useMemo bir degeri memoize etmesi,useCallBack bir fonksiyonu memoize etmesidir.

MEMOIZE:Bir fonksiyonun sonucunu ilk cagrildiginda cash islemi ile hafizada saklama.Ayni girdilerle tekrar hesaplama yapmak yerine cashten alip cash ile alip verme islemi.Ozellikle hesaplama maliyeti yuksek islemlerde performansi artirmak icin kullanilir.

Bir islemin sonuclari girdigi parametrelerine gore bagli olarak degismezse fonksiyonun sonucunu memoize etmek mumkundur.
Islem saf oldugunda ayni girdi degerleri ile her zaman ayni sonucu uretir dis etkilere sahip degilse degildir.Dissal durumdan etkilenmez.Bu ozellik ile hesaplama islemi hafizadan cagirip cache ile sonucu dondurebilmek icin kullanilir.Ornek olarak fibonnaci kurali.Fibonacci hesaplayan fonksiyon pür bir fonksşyondur.Sonuc sadece gırdıye baglıdır.Eger fıbonaccı büyük değerlere hesapma yapıldıysa ornek olarak 50 olarak girdi ise ve bu sonuc memoıze edıldıyse aynı fonksıyon tekrar fıbonnacı 50 seklınde bır yerde cagrıldıgı nokta da fonksıyon tum hesaplamayı yapmak yerıne hemen cashe attıgı memoıze ettıgı sonucu dondurur.

reacta useMemo ve useCallBack hookları memoızetıon kavramları kullanılarak companentlerı tekrar tekrar render olmasını engellemek ıcın kulanılır.
useMemo hesaplanan degerlerı useCallBack ıle  fonksıyonları memoize eder.Buyuk karmasık performans ıyılestırme ıhtıyacı olan companentlerde kullanılmalıdır.

Genel olarak memoıze konsepti react kendi içerisinde useMemo ve useCallBack ile halletmiştir.

ReactMemo companentın gereksız yere proplara baglı olarak render olmamasını saglar 

useMemo neden kullandın bu ıslemı tekrar tekrar donduruldugu value tekrar tekrar render etmesının onune gecmesı ıcın.
usecallBack fonksıyon sureklı render etmemesi için.

Local Stroge ıstenılen degerleri cache atma.
