var title = document.querySelector("#title");

title.style.color = "green";




document.getElementById("verCondicao").onclick = function () {

    let trafficLight = document.getElementById("color").value;
    let color = document.querySelector("#resp");



 switch (trafficLight) {
     case "vermelho":
        color.style.backgroundColor = "red";
         document.getElementById("resp").innerHTML = '<output>Resposta: Pare! </output>';
        break;
        
     case "amarelo":
        color.style.backgroundColor = "yellow";
        document.getElementById("resp").innerHTML = '<output>Resposta: Atenção! </output>';
        break;
        
        
     case "verde":
        color.style.backgroundColor = "green";
        document.getElementById("resp").innerHTML = '<output>Resposta: Siga! </output>';
        break;

     default:
        color.style.backgroundColor = "grey";
        document.getElementById("resp").innerHTML = '<output>Resposta: Valor não encontrado! </output>';
        break;
    }
}
