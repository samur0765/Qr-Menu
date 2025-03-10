import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";

//Sayfa yüklendiğinde api'a istek ve gelen veriyi data'ya ata
document.addEventListener("DOMContentLoaded", async () => {
    //Api'dan veri al
    const data = await fetchMenu();

    //Api'dan gelen veri ile arayüzü dinamik şekilde renderla

    renderCard(data);
    //Input'lara bir olay izleyicisi ekle ve değişen inputun kategorisine erişip bu kategorideki ürünleri render et

    elements.inputs.forEach((input) => {
        
        //Seçili input'un id'sini al
        input.addEventListener("change", () => {
            const selected = input.id

            //Eğer seçili kategori all ise tüm ürünleri ama bunun dışında bir kategori ise buna ait ürünleri renderla
            if(selected === "all"){
                renderCard(data);
            } else{
                  //selectedId'ye menu elemanlarını dön ve seçili kategoriye sahip elemanları al.
          const filtred =  data.filter((item) => item.category == selected);

          //filtrenen elemanları render et
          renderCard(filtred);
            }
        })
    })
}); 