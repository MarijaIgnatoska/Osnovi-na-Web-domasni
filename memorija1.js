window.addEventListener("load",Zapocni_igra, false);
let prvakarta=null;
let vtorakarta=null;
let obidi=0;
let par_karti=0;
let zakluceno=false;
let kolku_obidi; 
let karti; 

function Zapocni_igra(){
kolku_obidi= document.getElementById('obidi');
karti=document.getElementsByClassName('card');
mesajkarti();

for(let i=0;i<karti.length; i++){
    karti[i].addEventListener('click', prevrti)
}

}

function prevrti(){
if(zakluceno) return;
if(this==prvakarta) return;
 this.classList.add('prevrtena');
 if(prvakarta==null){
    prvakarta=this;
    return;
 }
 vtorakarta=this;
 obidi++;
 kolku_obidi.textContent='Број на обиди:' + obidi;
 zakluceno=true;
 pronajdenpar();

}

function mesajkarti(){
    for(let i=0; i<karti.length; i++){
        let radnompoz=Math.floor(Math.random()*12);
        karti[i].style.order=radnompoz;
    }
}
 function pronajdenpar(){
    
    if(prvakarta.dataset.id==vtorakarta.dataset.id){
        par_karti++;
        disablekarti();
        Nov_izbor();
        if(par_karti==6){
            alert("Браво ги најдовте сите парови за " + obidi +" обиди" );
        }
    }
    else{
        
        setTimeout(( ) => {
        prvakarta.classList.remove("prevrtena");
        vtorakarta.classList.remove("prevrtena");
        Nov_izbor()}, 400);

    }
}
 function disablekarti(){
    prvakarta.removeEventListener('click', prevrti);
    vtorakarta.removeEventListener('click', prevrti);
}
function Nov_izbor(){
    prvakarta=null;
    vtorakarta=null;
    zakluceno=false;
}
