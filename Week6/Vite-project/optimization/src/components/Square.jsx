import { useMemo, useState } from "react"


    const Square = () => {
    const [number,setNumber] = useState(0);
    const [inc,setInc] = useState(0);
  
    const squareFunc = useMemo(()=>{        //1.usememo ile uslu sayılar hesaplama
        console.log('Karekok Hesaplandi...')
        return number*number
    },[number]);
    
   /*const squareFunc = ()=>{                
    console.log('Karekok hesaplandi.')
    return number*number
   }
   */

  return (
    <div>
        <input type="number" value={number} 
        onChange={e=>setNumber(parseInt(e.target.value , 10))}
        />
        <p>{number} sayisinin karesi: {squareFunc}</p>
        <button onClick={() => setInc(inc+1)}>Yeniden Hesapla</button>
        <p>Islemsiz Artis Deger: {inc}</p>
    </div>
  )
}

export default Square