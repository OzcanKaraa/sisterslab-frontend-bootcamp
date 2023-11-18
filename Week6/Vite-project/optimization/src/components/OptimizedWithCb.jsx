import { useCallback, useState } from "react"

const OptimizedWithCb = () => {
    const [count,setCount] = useState(0)
    const increment = useCallback(()=>{     //useCallback Syntax 
        console.log('Artirma islemi gerceklesti :>> ')
        setCount((c)=>c+1)
   },[count]); //count degisip degistiginde kontrol edilir render olarak calissin.Optimizasyon
   // },[setCount])  her defasinda render edilir.
    
    /*usecallback ile butona tıklandıgında fonksiyon calisir.Eger usecallback kullanilmasaydi counter companenti her render oldugunda increment fonksiyonu da yeniden olusturulacakti.Bu durum ozellikle increment fonksiyonu alt companente gecisi durumunda onemli olur.
    
    Fonksiyonun yeni referansi alt companentinde gereksiz yere yeniden render edilmesine yol aciyor.Bu companenti her gonderildignde fonksiyonun referansi da degisiyor.Referans degistigi icinde her seferinde tekrar render edilir.

    useCallBack count degismedigi surece ayni increment fonksiyonu referansi korunmus olur.
    useCallBack ile referans kaydedilir tekrar render edilmesine gerek olmaz.Performansi iyilestirmis olunuyor.
    */

    
  return (
    <div>
<p>Count: {count}</p>
<button onClick={increment}>Arttir</button>
    </div>
  )
}
export default OptimizedWithCb