// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
gender = process.argv[2]; // Genero 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"
    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**
//mudar valores de distancia e tempo pra metros e tempo
//checar a altura, o número de repetições, abdominais, a distância corrida juntamente do tempo de corrida, ou a distância que foi percorrida na piscina juntamente do tempo do mergulho.

if (gender === 'male') {
    if (height >= 1.70) 
    if ((barReps >= 6) || (barSeconds >= 15)) 
    if (abs >= 41) 
    if ((runDistance >= 3000) && (runTime <=720) || (runDistance >= 5000) && (runTime <=1200))
    if ((swimDistance >= 100) && (swimTime <= 60) ||  (diveTime <= 30))
    
    passed = true
}

if (gender === 'female') {
    if (height >= 1.60)
    if ((barReps >= 5) || (barSeconds >= 12)) 
    if (abs >= 41)  
    if ((runDistance >= 4000) && (runTime <= 900) || (runDistance >= 6000) && (runTime <= 1320))  
    if ((swimDistance >= 100) && (swimTime <= 60) ||  (diveTime <= 30))
    
    passed = true
}



/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
