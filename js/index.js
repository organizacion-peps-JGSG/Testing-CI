/**
 * Funciones para probar el entorno de pruebas
 * @returns 1
 */
function uno()
{
	return 1;
}
/**
 * Zero
 * @returns 0
 */
function zero()
{
	return 0;
}

function saludar()
{
	return "Hola mundo";
}

// Exportamos la funciones para poder realizar el Testing
module.exports={
    uno,
	zero,
	saludar,
};