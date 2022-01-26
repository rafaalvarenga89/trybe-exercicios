let info = [{ 
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
},{
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}
]
info[0]['recorrente'] = 'Sim',

console.log('Bem vindo '+info[0]['personagem']);

console.log(info[0]);

for(let key in info[0]){
    console.log(key);
    
}

for(let key in info[0]){
    console.log(info[0][key]);
}

for (let properties in info[0,1] ) {
    if(properties  === 'recorrente' && info[0][properties] === 'Sim' && info[1][properties] === 'Sim') {
        console.log("Ambos recorrentes");
    }  else {
    console.log(info[0][properties]+' e '+info[1][[properties]]);
    }
} 