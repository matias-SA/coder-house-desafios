const fs = require('fs');

try {
    let data = fs.readFileSync('./package.json', 'utf-8');

    let info = {
        contenidoStr: JSON.stringify(JSON.parse(data)),
        contenidoObjeto: JSON.parse(data),
        size: 1.5,
    }

    console.log(info);

    fs.writeFileSync('./info.txt', JSON.stringify(info, null, '\t'));

} catch (error) {
    console.log(error);
}


