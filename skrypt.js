


function aktualizuj(){
    let aktualizuj = document.getElementById("ilosc")


    if(ilosc.innerText == 0){
      ilosc.style = "background-color:red";
    }
    else if(ilosc.innerText >= "1" && ilsoc.innerText <= "5"){
        ilosc.style = "background-color:yellow";
    }

}

aktualizuj();