
const result = document.getElementById('result');
const calculate = document.getElementById('calculate');


function ageCalculate() {

    //Data atual
    const today = new Date();
    const presDay = today.getDate();
    const presMonth = today.getMonth() + 1;
    const presYear = today.getFullYear();

    //Data de nacimento
    const ageDay = document.getElementById('ageDay').value;
    const ageMonth = document.getElementById('ageMonth').value;
    const ageYear = document.getElementById('ageYear').value;

    const age = presYear - ageYear;

    if (ageYear >= 1) {

        /*
        * infância (1 - 11)
        * adolescência (12 - 19)
        * adulto (20 - 74)
        * velhice (75)
        */
        let classification = '';
        if (age > 0 && age <= 11) {
            classification = 'Infância'
        }
        else if (age >= 12 && age <= 19) {
            classification = 'Adolescência';
        }
        else if (age > 20 && age < 74) {
            classification = 'Adulto';
        }
        else if (age > 75 && age < 122) {
            classification = 'Velhice';
        }
        else if (age > 122) {
            alert('Você não possui fase de vida por não ser um humano e sim um vampiro');
            classification = 'Nenhuma';
        }

        document.getElementById("result").innerHTML = 
        'Data atual: ' +presDay+ ' / ' +presMonth+ ' / ' +presYear+
        '<br><br>Data de nacimento: ' +ageDay+ ' / ' +ageMonth+ ' / ' +ageYear+
        '<br><br>Sua idade: ' +age+ 
        ' ano(os)<br><br>Fase da vida:  ' +classification;
    }

    else {
        alert('Dados incorretos');
    }

}

calculate.addEventListener('click', ageCalculate);