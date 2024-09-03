const countVotes = (votos) => {
    let resultado = {};
    votos.forEach((voto) => {
        resultado[voto.candidate] = (resultado[voto.candidate] || 0) + 1; 
    });
    return resultado;
};

const showResults = (resultado) => {
    alert("Resultados de Votación ->");
    for (let candidate in resultado){
        alert (`${candidate}: ${resultado[candidate]}votos`);
    }
};

const main = () => {
    let votes = [
        {candidate: "Alice"},
        {candidate: "Bob"},
        {candidate: "Alice"},
        {candidate: "Alice"},   
        {candidate: "Bob"},
    ]

    const resultado = countVotes(votes);
    showResults (resultado);

}

main();
