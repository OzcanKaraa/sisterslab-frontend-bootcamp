/*
    reactMemo : Higher-Order companent companentlerin gereksiz yere yeniden render edilmesini onune gecmek icin.Performans optimizasyonda konusunda ihtiyaca gore verilen kosulu saglanmadiginda yada yanlis calisabilme problem oldugunda kullanilir.

    Render olmamasi icin efect kullanilabilir condition bagli tutulur condition saglanmadigi surece companentin onune gecilebilir.
    */
    /*
    useCallBack kullanarak Increment olayi fonksiyonu bir kere render edilmesini saglar ve her render da ayni referans kullanilir.

    Memo ornekte child companent yazmak zorunda olunacakti.child companent proplar alacakti.Proplarin degisimine gore increment companente gonderildiginde referans degisecekti sayfa surekli tekrar render olacakti.Fonksiyonun surekli render olacakti ve useCallBack kullanilarak render olmasini engellenir.

    reactMemo nasil calisir: companentlerin ozelliklerini proplarini onceki render ile karsilastirilir previous state referans alir.React Virtual DOM bir islem yapildigi zaman Virtual DOM olusturur companentin hangi basamaginda islem yapildiysa tree uzerinde islemi tutup Sanal dom gercek dom ile Virtual DOM karsilastirir ve nerede islem varsa tree uzerinde branch yapilir.Tum sayfayi render etmez sadece o companenti render eder.

    useCallBack ile Memo arasindaki baglantsi :Memo props ozellikleri ile onceki referansi render ile karsilastirir. Eger proplar icerisine gonderilen prop ayni ise bileseni render etmez.

    useCallBack yazilan fonksiyon referans olarak kaydeder.useCallBack kullanilmadiginda companenti gonderilip sayfa render oldugunda referans degisir aslinda ayni fonksiyon gonderildi.

    Memo ise karsilastirma yapar.Karsilastirma da bir seyler degistiyse tekrar render edilir.Companent ile daha az render islem yapilmasini saglar.Buyuk karmasik uygulamalarda performans iyilestirmelerinde sebep oluyor.Micro management olayi.Micro frontend

    Reactmemo sadece degisikliklari algilar companent ilk durum ve context degisiklikleri react memo tarafindan algilanmaz.
    */