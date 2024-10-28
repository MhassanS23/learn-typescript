// DECLARATION
// let ben: number = 20;
// if (ben < 50 )
//     ben += 10;
// console.log(ben);


// ENUM
// enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Large;
// console.log(mySize);


// FUNCTIONS
// function calculateTax (tax: number, year: number): number {
//     if(year < 2024)
//         return tax * 1.5;
//     return tax * 1.3;
// }

// console.log(calculateTax(20000, 2023));


// OBJECT
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1, 
//     name: "Maulana",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }
// console.log(employee)


// UNION TYPES
// function massCalc (weight: number | string): number {
//     if(typeof weight === 'number')
//         return weight * 1.1;
//     else return parseInt(weight) * 1.1;
// }

// console.log(massCalc(50));
// console.log(massCalc('60'));


// INTERSECTION
// type Dragable = {
//     drag: () => void
// }

// type Resizeable = { 
//     resize: () => void
// }

// type UIWidget = Dragable & Resizeable;

// let Textbox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }


// Literal Types
