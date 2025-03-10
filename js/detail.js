import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFoundPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);


//URLSearchParams ile url'deki id değerine eriş
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
    //Api'dan menü elemanlarını al
    const data = await fetchMenu();

    //Detay sayfasında renderlanacak ürünü bul
   const product = data.find(( item) => item.id === id);

   //Eğer ürün varsa renderDetailPage fonksiyonunu çalıştır ama yoksa renderNotFoundPage fonksiyonunu çalıştır.
   
   if(!product){
    renderNotFoundPage(elements.detailPage);
   }
   else{
    renderDetailPage(product, elements.detailPage);
   }
})