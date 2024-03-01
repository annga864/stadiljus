document.addEventListener('DOMContentLoaded', function () {
    const resultatKnapp = document.getElementById('knapp2');
    resultatKnapp.addEventListener('click', beraknaResultat);
});
function beraknaResultat() {
    console.log('ok');
    const allaSvar = new Array(10);
    for (let i = 1; i <= 10; i++) {
        //allaSvar[i - 1] = document.getElementsByName('fraga' + i);
        let nameId = "fraga" + i;
        let selectedId = document.getElementsByName(nameId);
        for (let j = 0; j < selectedId.length; j++){
            if (selectedId[j].checked){
                console.log(selectedId[j]);
                allaSvar[i - 1] = selectedId[j].value;
            }
        }
    }
    console.log(allaSvar);

    let gulPoang = 0;
    let gronPoang = 0;
    let rosaPoang = 0;

    for (let i = 0; i < allaSvar.length; i++) {

        if (allaSvar[i] == 'gul'){
            gulPoang++;
        }
        else if(allaSvar[i] == 'gron'){
            gronPoang++;
        }
        else if (allaSvar[i] == 'rosa'){
            rosaPoang++;
        }
        /*for (let j = 1; j <= 4; j++) {

            //j istället för i så att den inte blir förvirrad - det finns 2 i
            const svarKar = allaSvar[i];
            console.log(svarKar);
            if (svarKar === 'gul') {
                gulPoang++;
            } else if (svarKar === 'gron') {
                gronPoang++;
            } else if (svarKar === 'rosa') {
                rosaPoang++;
            }
        } */
    }
    //denna funktion funkar inte^^

    console.log(gulPoang); console.log(rosaPoang); console.log(gronPoang);
    if(document.getElementById('knapp2') != null){
        document.getElementById('knapp2').remove();
    }
    const resultatDiv = document.createElement('div');
    const resultatP = document.createElement('p1');
    resultatDiv.id = "resultat";
    let resultatKar = '';


    if (gulPoang > rosaPoang && gulPoang > gronPoang) {
        resultatKar = 'Du är gul!';
    }
     else if (rosaPoang > gulPoang && rosaPoang > gronPoang) {
        resultatKar = 'Du är rosa!';
    } else if (gronPoang > gulPoang && gronPoang > rosaPoang) {
        resultatKar = 'Du är grön!';
    }

    const resultatText = document.createTextNode(resultatKar);
    resultatP.appendChild(resultatText);
    resultatDiv.appendChild(resultatP);
    document.body.appendChild(resultatDiv);
}