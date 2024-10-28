"use strict";
function massCalc(weight) {
    if (typeof weight === 'number')
        return weight * 1.1;
    else
        return parseInt(weight) * 1.1;
}
console.log(massCalc(50));
console.log(massCalc('60'));
//# sourceMappingURL=index.js.map