const fs = require('fs').promises;       

const simpsons = async () => {
    const data = await fs.readFile('./simpson.json', 'utf8');
    const result = JSON.parse(data);
    return result;
};

const main = async () => {
    const result = await simpsons();
    result.forEach(({id, name}) => console.log(`${id} - ${name}`));
};

const verificandoId = async (id) => {
    const promise = new Promise((resolve, reject) => { 
        
    })
};

verificandoId();