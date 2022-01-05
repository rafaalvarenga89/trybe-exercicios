const lion = {
    name: 'Pantera Leo',
    commonName: 'Lion',
    weightRange: {
        min: 186.55,
        max: 225,
        measurementUnit: 'kg',
    }

};

const bluewhale = {
    name: 'Balaenoptera musculus',
    commonName: 'Blue Whale',
    weightRange: {
        min: 45,
        max: 173,
        measurementUnit: 't',
    }
    
};

const polarBear = {
    name: 'Ursus Maritimus',
    commonName: 'Polar Bear',
    weightRange: {
        min: 350,
        max: 700,
        
    }
    
};

const animalDescription = (animal) => {
    return `${animal.commonName} (${animal.name}) weights around ${animal.weightRange.min}-${animal.weightRange.max} ${animal.weightRange.measurementUnit}`
}

console.log(animalDescription(lion))

const animalDescription2 = ({name, commonName, weightRange}) => {
    return `${commonName} (${name}) weights around ${weightRange.min}-${weightRange.max} ${weightRange.measurementUnit}`
}

console.log(animalDescription2(lion))

const animalDescription3 = ({name, commonName, weightRange}) => {
    const {min,max,measurementUnit ='kg'} = weightRange;
    return `${commonName} (${name}) weights around ${min}-${max} ${measurementUnit}`
}

console.log(animalDescription3(lion));
console.log(animalDescription3(bluewhale));
console.log(animalDescription3(polarBear));
