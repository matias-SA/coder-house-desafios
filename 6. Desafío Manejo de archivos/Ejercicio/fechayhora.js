const fs = require('fs');

let hoy = new Date;
let textfyh = `Hoy es ${hoy.getDay()}-${hoy.getMonth() + 1}-${hoy.getFullYear()} y la actual ${hoy.getHours()}:${hoy.getMinutes()}`

fs.writeFileSync('./fyh.txt', textfyh);

try {
    const data = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(data);
} catch (error) {
    throw new Error('El archivo no existe')
}