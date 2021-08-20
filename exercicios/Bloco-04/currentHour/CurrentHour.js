function hora(currentHour) {
    if (currentHour < 0 || currentHour > 24) {
        return "A hora inserida é inválida"
    }

    else if (currentHour >= 0 && currentHour < 4) {
        return "Não pode assaltar a geladeira de madrugada."
   }

    else if (currentHour >= 4 && currentHour <= 11) {
         return "Hmmm, cheiro de café recém passado"
    }
    else if (currentHour > 11 && currentHour < 14){ 
        return "Hora do almoço!!!"
    }
    else if (currentHour >= 14 && currentHour < 18){ 
        return "Vamos fazer um bolo pro café da tarde?" 
    }
    else if (currentHour >= 18 && currentHour < 22){ 
        return "Rango da noite, vamos jantar :D"
    }
    else if (currentHour >= 22 && currentHour <= 24){ 
        return "Não deveríamos comer nada, é hora de dormir"  
    }
    else {
        return "Caractere inválido"
    }
}


 document.getElementById("verCondicao").onclick = function () {
    // document.getElementById("resposta").innerHTML = '<h3>Resposta:</h3>';
     let currentHour = parseFloat(document.getElementById("hora").value);
     let resposta = hora(currentHour);
         document.getElementById("resposta").innerHTML= '<h3>Resposta: '+resposta+'</h3>';
     }

