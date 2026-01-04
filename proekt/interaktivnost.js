window.addEventListener("load",start , false)

function start(){
const sliki = document.querySelectorAll(".slika");

  sliki.forEach(slika => {
    const likeBtn = slika.querySelector(".like button");
    const likeCount = slika.querySelector(".like_count");
    let brojLikes = 0;

    likeBtn.addEventListener("click", function() {
      brojLikes++;
      likeCount.textContent = brojLikes;
    });

    const komentarInput = slika.querySelector(".komentar-vnes");
    const komentarBtn = slika.querySelector(".kom-btn");

    const listaKomentari = document.createElement("div");
    listaKomentari.classList.add("lista-komentari");
    slika.appendChild(listaKomentari);

    komentarBtn.addEventListener("click", function(event) {
      event.preventDefault;
      const tekst = komentarInput.value.trim();
      if (tekst != "") {
        const novKomentar = document.createElement("p");
        novKomentar.textContent = tekst;
        listaKomentari.appendChild(novKomentar);
        komentarInput.value = ""; 
      }
    });
  });
}

