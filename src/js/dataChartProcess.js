const processMarcas = (data) =>{
    var processed = {}

    for (var obj in data){
        processed[data[obj].marca] = data[obj].count       
    }

    return processed
}

const processMarcasGenero = (data) =>{
    var processedHomen = {}
    var processedMulher = {}
    
    for (var obj in data){
        if(data[obj].genero.includes('m') ){
            processedHomen[data[obj].marca] = data[obj].count
        }else{
            processedMulher[data[obj].marca] = data[obj].count
        }        
    }

    var labels1 = Object.keys(processedHomen)
    var labels2 = Object.keys(processedMulher)
    for (var i in labels2){
        if (!labels1.includes(labels2[i])){
            labels1.push(labels2[i])
        }
    }

    var  processed = {labels : labels1, homens:[], mulheres:[]}
    labels1.forEach(label => {
        processed.homens.push(processedHomen[label] ? processedHomen[label] : 0)
        processed.mulheres.push(processedMulher[label] ? processedMulher[label] : 0)
    })     

    return processed
}


const processRevioesMarca = (data) =>{
    var processed = {labels:[], data:[]}
    data.forEach(value =>{
        processed.labels.push(value.marca)
        processed.data.push(value.count)
    })

    return processed
}

const processRevioesNome = (data) =>{
    var processed = {labels:[], data:[]}
    data.forEach(value =>{
        processed.labels.push(value.nome)
        processed.data.push(value.count)
    })

    return processed
}

const processDataName = (data) =>{
    var preProcessed = {}
    data.forEach(value =>{
        if(preProcessed[value.nome]){
            preProcessed[value.nome].push(value.data)
        }else{
            preProcessed[value.nome] = [value.data]
        }
    })

    const umDiaEmMs = 1000 * 60 * 60 * 24; // número de milissegundos em um dia
    for(var nome in preProcessed){
        var media = 0
        if(preProcessed[nome].length > 1){
            for (var i =0; i < preProcessed[nome].length - 1; i++){            
                var data1 = new Date(preProcessed[nome][i]); // primeira data
                var data2 = new Date(preProcessed[nome][i+1]); // segunda data

                var diferencaEmMs = Math.abs(data2 - data1); // diferença em milissegundos
                var diferencaEmDias = Math.round(diferencaEmMs / umDiaEmMs); // diferença em dias (arredondado)
                
                media += diferencaEmDias
            }

            media = media / (preProcessed[nome].length - 1)
        }
        
        preProcessed[nome] = media
    }

    const processed = {labels:Object.keys(preProcessed), data: Object.values(preProcessed)} 
    return processed
}
export default {
    processMarcas,
    processMarcasGenero,
    processRevioesMarca,
    processRevioesNome,
    processDataName
}