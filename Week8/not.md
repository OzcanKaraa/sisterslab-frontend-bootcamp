Redux Toolkit
------------------------------------------------------------------------
Global State Manager en cok kullanılan en cok tercıh edılen 

What is Redux??
Redux:GLOBAL bir durum state yonetmek guncellemek icin kullanilan kutuphanedir.
Uygulamanin bircok bolumunde userlarin kullanici eylemlerine nasil tepki verilecegi ve hangi verilerin gosterilecegini yonetmek icin yardimci olur.

Redux ve Redux Toolkit ihtiyaca gore  cikmistir Datayi yonetememe props thrilling karsilasma bu istegi bircok sayfada atilip tek bir yerden yonetme istegi gibi durumlardan dolayi zaman ve maliyetli bir islemdir.Cok context yapilar icin kullanilmasi tavsiye edilir.
-----------------------------------------------------------------
When to Use Redux?
Ne zaman kullanilir?
Uygulamanizda bircok yerde ihtiyac duyulan buyuk miktarda applicastion state varsa uygulamanin state varsa kullanilabilir.
Uygulama durumu zamanla sik sik guncelleniyorsa yada bu durumun guncellemenin mantigini karmasik olabilir karmasik oldugunda kullanilabilir.
Redux toolkit kucuk olcekli projelerde kullanmak icin verimli degil React stateleri kullanmak daha avantaj.
Orta yada buyuk olcekli kod tabanina sahipse proje o zaman kullanilir.Yada bircok kisi tarafindan calisiliyorsa 
Kucuk uygulamalarda ihtiyac yok ancak buyuk uygulamalarda clean code ile Global State ile her yerden ulasilabilmesi icin 
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
-----------------------------------------------------------------
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
Normalde  yaptigimiz useDispatch() fonksiyonu 
 
Normalde 

EKLEME ISLEMLERINI SYNTAX OLARAK KULLANILIR.

import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/core";
​
export default function AddTodo() {
  const [value, setValue] = useState(""); //state 
​
  const handleChange = (event) => 
    setValue(event.target.value);
​
  const handleSubmit = (event) => {
    event.preventDefault();
  };
​
  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={handleChange} /> //input girerek handleChange ile Value setleme islemi gerceklestiriliyor.
      <Button onClick={handleSubmit}>Add</Button> //Button onclick ile istek atma.
    </form>
  );
}




useDispatch() 
Redux toolkit icerisinde useDispact() fonksiyonu redux icerisinde cekilir todo aksiyon var export edilen iceri gonderdim.
dispact fonksiyonu const 

const dispatch = useDispatch(); olarak alinir.


import React, { useState } from "react";
import { useDispatch } from "react-redux"; //import etme
import { Button, Input } from "@chakra-ui/core";
import { addTodo } from "../../redux/slices/todoSlice"; //addTodo todoSlice import etme islemi

const dispatch = useDispatch(); //import olarak eklenen dispact fonksiyonunu tanitma.
​
  const handleChange = (event) => //set islemi gerceklestirilen value onchange icerisine eklenir.AddTodo fonksiyonu icerisine eklenir ve Dispact yardimi ile todo slice icerisindeki state Dispact edilir gonderilir.

  handleSubmit icerisinde yaptigimiz isleme gore slice icerisinde olusturulan add todo fonksiyonu icerisine value gonderilip store kaydedebilmek icin store dogru gonderebilmek icin Dispact basina yazilir ve yazilan store kaydedilmis olur.
    setValue(event.target.value);
​
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={handleChange} />
      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
-----------------------------------------------------------------

Let's see if it's working.properly En son hali su sekilde 

-----------------------------------------------------------------
Payload kismi
iceriye gonderilen add todo 
prepare hazirla 
id veya farkli sekilde tutulmasi icin prepare callback value ile return edilir payload icerisinde key value seklinde 
yeni obje olusturur Nano ID eklemis redux ID olusturma mekanizmasi.id yerine Uid Unique id deger date now ile fonksiyonu js de gercek projelerde kullanilmaz ama surekli id yazmak yaratmak uid kullanmak third party eklemek istenmiyorsa date now kullanilabilir date now ile tarih/saat/sn deger alan uniqe deger olarak kullanilabilir.

Prepare kismi aslinda iceriye gonderilen value nasil state kaydetmek istedigimizle alakali 
nanoid redux toolkit icerisinde eklenmis.

 reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todoList.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            key: nanoid(),
            value: value,
          },
        };
      },
    },
  },
});
​
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;


Update Redux State  
-------------------------------------------
useSelector()

INPUT Deger yazildi degeri addTodo fonksiyonuyla yeni state eklendi.Ama yeni state eklenen bir yerde kullanmadik.

Eski hali syntax
todolist data var map fonksiyonu ile kolayca sekilde gosteriliyor.

import React from "react";
import { Box, Text } from "@chakra-ui/core";
​
export default function TodoList() {
  const todoListdata = [
    {
      key: "unique id",
      value: "Do the Redux Toolkit Talk",
    },
  ];
​
  return (
    <>
      {todoListdata.map((todo) => (
        <Box key={todo.key}>
          <Text>{todo.value}</Text>
        </Box>
      ))}
    </>
  );
----------------------------------------------------------------------------------------

Bu islemleri redux tarafindan store cekmek icin useSelector fonksiyonu kullanilacak.

yeni syntax

todoList data array var.Array icine todolist gonderilecek.
En basta reducer icerisindeki tanimlanan initial state olarak listeyi todo list data bir tane value degerine esitlenir.
Store data ulasabilmek icin :
useSelector icerisinde state  todos todolist value degerini esitle.
State icerisindeki todolarin todo listleri getir ve todo list dataya ekle.

useSelector en basit mantigi store olan state ulasabilmek.Map islemi ile ulasabilmek.

export default function TodoList() {

  const todoListdata = useSelector(   // Store data ulasabilmek icin 
    (state) => state.todos.todoList
  );
  return (
    <>
      {todoListdata.map((todo) => (
        <Box key={todo.key}>
          <Text>{todo.value}<

----------------------------------------------------------------------------------------
Let see it in action
Fetch Data from an Api 
Api den reduxta data cekme islemi 

createAsyncThunk creates 3 types of Actions

createAsyncThunk keyword var icerisinde olusturdugu 3 action var
pending su anda gonderiliyor
fullfilled veri geldi doldu 
rejected reddedildi

Redux tarafinda end point istegi atarken createAsyncThunk keywordu kullanilir.

fetchTodos endpointten cekilir export const fetchTodos fonksiyon olusturmus name ismine gore todos/fetchtodo islemi gerceklestirilecek.
Asenkron olarak 

import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
​
export const fetchTodos = createAsyncThunk(  //
  "todos/fetchTodos",
  async () => {
    const response = await axios.get( //istek atma 
      "https://eager-supreme-appalachiosaurus.glitch.me/todos" //end point 
    );
    return response.data.todoList; //istegi return etme createAsyncThunk ile
    
  }
);
​
export const todoSlice = createSlice({
  name: "todos",
  initialState: { //initial state datayi isteklerin push edebilmek icin  reducer icerisinde degil extrareducer alaninda  yapiliyor

    todoList: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addTodo: {
      // state.todoList.push(action.payload);
    },
  },

  //createAsyncThunk 3 actions syntax kullanimi

  //Bu istegi at direkt fetchTodos gerisini halleder.Refresh edene kadar depolar refresh edildiginde state bosaltir.
  Redux genel calisma mantiginda CASHLEME islemi yoktur.Redux kendi icerisinde cash islemleri yapabilmek icin kullanabielcegimiz ekstra Third Party islemler mevcut.Data cekilde refresh olsa da kaybolmasin.Kutuphane mevcut kullanmak ihtiyaca gore degisir Recoil Global State Manager var Istek atiliyor o istegi attiktan sonra Global State Manager oldugu icin tum component tum sayfalarin icerisinde kullanilabiliyor sayfayi refresh edilse de kaybolmuyor cunku veriyi bir kere cashleme islemi gerceklestiriyor.Veriyi komple sil veya ne zaman tekrar o veriyi kullanmak istemem bir sey degismistir her zaman ayni veriyi kullanmaya gerek yok onu tetikleme gerekir tetikleyen datayi update edilebilir.Ama sunda kullanimda Cahsleme mantigi yok.

  Kucuk uygulamalarda ihtiyac yok ancak buyuk uygulamalarda clean code ile Global State ile her yerden ulasilabilmesi icin createAsyncThunk kullanim zorunludur.Best pratickslere davranmaya calisildigi noktada en dogru yaklasim bu.
  Redux ve Redux Toolkit ihtiyaca gore  cikmistir Datayi yonetememe props thrilling karsilasma bu istegi bircok sayfada atilip tek bir yerden yonetme istegi gibi durumlardan dolayi



  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.todoList.push(...action.payload);
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
​
export const { addTodo } = todoSlice.actions;
​
export default todoSlice.reducer;
createAsyncThunk

useEffect icerisinde dependency olarak dispacte baglanir todo list state ile dataya ulasilir.
----------------------------------------------------------------------------------------
AddLoading Error UI
----------------------------------------------------------------------------------------