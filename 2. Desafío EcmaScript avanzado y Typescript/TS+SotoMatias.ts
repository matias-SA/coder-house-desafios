// Crear dos funciones llamadas operacion() y operaciones().

// operacion() recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 'suma' ó 'resta' y cargará dinámicamente
// un módulo para realizar dicho cálculo.

// operaciones() llamará a operacion() con los casos de prueba, representando sus salidas.

// operacion() deberá devolver el resultado a operaciones() a través de una promesa.

// Los cálculos habilitados estarán definidos en archivos separados empleando clases donde los argumentos de entrada se guardarán en
// propiedades instancia privadas y tendrán un método resultado() que hará efectiva la operación.

// Este debe ser un proyecto de typescript que utilice clases, dynamic import, Promises, async await,
// funciones flecha y tipado en todos sus módulos.

// Debe ser compilado para generar un archivo javascript ejecutable por Node.js.

async function operacion(
  number1: number,
  number2: number,
  operacionName: string
): Promise<any> {
  return new Promise((resolve, reject) => {
    if (operacionName === "suma") {
      import("./suma")
        .then((math) => {
          resolve(new math.Suma(number1, number2).resultado());
        })
        .catch((error) => {
          reject(console.log("no funciono"));
        });
    } else if (operacionName === "resta") {
      import("./resta")
        .then((math) => {
          resolve(new math.Resta(number1, number2).resultado());
        })
        .catch((error) => {
          reject(console.log("no funciono"));
        });
    } else {
      reject(console.log("no funciono"));
    }
  });
}
async function operaciones() {
  const resultado = await operacion(5, 2, "suma");
  console.log("Resultado de la suma es:", resultado);
  const resultado1 = await operacion(10, 5, "resta");
  console.log("Resultado de la resta es:", resultado1);
  const resultado2 = await operacion(10, 5, "Resta");
  console.log("Resultado de la resta es:", resultado2);
}
operaciones();
