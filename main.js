
export const fn = (a, b, c) => {

   let totalEmpanadas = a + b + c

   // precios de las empanadas
   let pollo = a * 12; // de pollo
   let carne = b * 14; // de carne
   let verduras = c * 16; // de verduras
   
   if (totalEmpanadas % 3 !== 0) {
      throw Error("la cantidad total de empanadas tiene que ser múltiplo de 3");
   }
   if (totalEmpanadas >= 40) {
      throw Error("la cantidad total de empanadas no puede ser superior a 40")
   }
   if (a < 0 || b < 0 || c < 0) {
      throw Error("las cantidades no pueden ser negativas")
   }

   if (totalEmpanadas % 3 === 0 && totalEmpanadas < 40) {

      let precioTotal = pollo + carne + verduras
      let oferta3x1 = Math.ceil(precioTotal / 3)
      return oferta3x1

   }
};
