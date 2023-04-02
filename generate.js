fetch('data-main.json').then(function (response) {
    response.json().then(function (data) {
        console.log(data);

        const titre_zone = document.getElementById('title');
        const titre_intro = document.getElementById('titre_intro');
        const texte_intro = document.getElementById('texte_intro');

        const title_1reduc = document.getElementById('titre-1er-reduc');
        const texte_1reduc = document.getElementById('texte-1er-reduc-desc');
        const price_1reduc = document.getElementById('prix-1er-reduc');
        const img_1reduc = document.getElementById('img-1er-reduc');

        const texte_2reduc = document.getElementById('texte-2eme-reduc-desc');
        const title_2reduc = document.getElementById('titre-2eme-reduc');
        const price_2reduc = document.getElementById('prix-2eme-reduc');
        const img_2reduc = document.getElementById('img-2eme-reduc');



        data.forEach(function (element) {
            titre_zone.innerHTML = data[0].contenu;
            titre_intro.innerHTML = data[1].title;
            texte_intro.innerHTML = data[1].contenu;

            title_1reduc.innerHTML = data[2].premiere_reduc.name;
            texte_1reduc.innerHTML = data[2].premiere_reduc.texte_presentation;
            price_1reduc.innerHTML = data[2].premiere_reduc.price + "€ ➜ " + data[2].premiere_reduc.price_after_reduc+"€";


            title_2reduc.innerHTML = data[3].deuxieme_reduc.name;
            texte_2reduc.innerHTML = data[3].deuxieme_reduc.texte_presentation;
            price_2reduc.innerHTML = data[3].deuxieme_reduc.price + "€ ➜ " + data[3].deuxieme_reduc.price_after_reduc+"€";


        })
    })
})