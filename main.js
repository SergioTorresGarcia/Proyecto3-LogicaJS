
export const fn = (a, b, c) => {

   let totalEmpanadas = a + b + c

   // precios de las empanadas
   let pA = a * 12; // de pollo
   let pB = b * 14; // de carne
   let pC = c * 16; // de verduras

   let total = 0

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

      // let precioTotal = pollo + carne + verduras
      // let oferta3x1 = Math.ceil(precioTotal / 3)
      // return oferta3x1

      // un ingrediente
      if (a != 0 && b == 0 && c == 0) { return total = pA / 3 } // solo pollo
      if (a == 0 && b != 0 && c == 0) { return total = pB / 3 } // solo carne
      if (a == 0 && b == 0 && c != 0) { return total = pC / 3 } // solo verduras

      // dos ingredientes
      if (a != 0 && b != 0 && c == 0) {  // pollo y carne

         if (a == b) { // pollo y verduras por igual 
            return total = (pA + pB) / 3

         } else if (a > b) { // mas pollo que verduras
            return total = (pA / a + pB / b) / 2

         } else { // mas verduras que pollo
            return total = pB / b
         }
      }
      if (a != 0 && b == 0 && c != 0) {
         if (a == c) { // pollo y verduras por igual 
            return total = (pA + pC) / 3

         } else if (a > c) { // mas pollo que verduras
            return total = (pA / a + pC / c) / 2

         } else { // mas verduras que pollo
            return total = pC / c
         }
      }
      if (a == 0 && b != 0 && c != 0) {
         if (b == c) { // pollo y verduras por igual 
            return total = (pB + pC) / 3

         } else if (b > c) { // mas pollo que verduras
            return total = (pB / b + pC / c) / 2

         } else { // mas verduras que pollo
            return total = pC / c
         }
      }

      // tres ingredientes
      if (a != 0 && b != 0 && c != 0) {
         if (a == b == c) { // todo por igual 
            return total = (pA + pB + pC) / 3

         } else if ((c > b) && (c > a)) {
            return total = ((pB / b * a) + (pC/c))

         } else if ((c < a) && (b < a)) {
            return total = ((pB / b * c) + (pA/a + pB/b)/2)
         }
      }
   }

};
