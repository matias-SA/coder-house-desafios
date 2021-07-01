// Crear dos funciones llamadas operacion() y operaciones().
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// operacion() recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 'suma' ó 'resta' y cargará dinámicamente
// un módulo para realizar dicho cálculo.
// operaciones() llamará a operacion() con los casos de prueba, representando sus salidas.
// operacion() deberá devolver el resultado a operaciones() a través de una promesa.
// Los cálculos habilitados estarán definidos en archivos separados empleando clases donde los argumentos de entrada se guardarán en
// propiedades instancia privadas y tendrán un método resultado() que hará efectiva la operación.
// Este debe ser un proyecto de typescript que utilice clases, dynamic import, Promises, async await,
// funciones flecha y tipado en todos sus módulos.
// Debe ser compilado para generar un archivo javascript ejecutable por Node.js.
var casosDePrueba = [];
function operacion(number1, number2, operacionName) {
    return new Promise(function (res, err) {
        if (operacionName === "suma") {
            return Promise.resolve().then(function () { return require("./suma"); }).then(function (math) {
                res(new math.Suma(number1, number2).resultado());
            });
        }
        else if (operacionName === "resta") {
            return Promise.resolve().then(function () { return require("./resta"); }).then(function (math) {
                res(new math.Resta(number1, number2).resultado());
            });
        }
        else {
            err(console.log("no funciono"));
        }
    });
}
function operaciones() {
    return __awaiter(this, void 0, void 0, function () {
        var resultado, resultado1, resultado2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, operacion(5, 2, "suma")];
                case 1:
                    resultado = _a.sent();
                    console.log("Resultado de la suma es:", resultado);
                    return [4 /*yield*/, operacion(10, 5, "resta")];
                case 2:
                    resultado1 = _a.sent();
                    console.log("Resultado de la resta es:", resultado1);
                    return [4 /*yield*/, operacion(10, 5, "Resta")];
                case 3:
                    resultado2 = _a.sent();
                    console.log("Resultado de la resta es:", resultado2);
                    return [2 /*return*/];
            }
        });
    });
}
// function prueba() {
//   import("./suma").then((math) => {
//     console.log(new math.Suma(5, 6).resultado());
//   });
// }
// prueba();
// operacion(10, 2, "resta");
operaciones();
