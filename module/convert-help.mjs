const convertHelp = {
    
    expandUnit: (standart, expand) => units = {
        ...standart,
        ...expand,
    }, 

    convertUnits: (input, standart) => {
        let knownValues = input.distance.value; 
        let knownUnit = standart[input.distance.unit];
        let requiredUnit = standart[input.convert_to];
        let requiredValue = Number(((knownValues * knownUnit) / requiredUnit).toFixed(2));
        
        return requiredValue;
    }
}


export default convertHelp;
