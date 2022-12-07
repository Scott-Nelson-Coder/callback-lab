////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const multiply = (num1, num2) => num1 * num2

const divide = (num1, num2) => num1 / num2

const calcutlator = (num1, num2, callback) => {
    if(+num1 && +num2){
        num1 = +num1
        num2 = +num2
        return callback(num1, num2)
    } else {
        console.log("you need to send in numbers")
    }
}

const result = calcutlator(1,2, add)
const res2 = calcutlator(3,4, multiply)

console.log(result, res2)

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

const applyPercentDiscount = (product, discount) => {
    product.displayPrice = Math.round(product.basePrice * (1 - discount) * 100) / 100
}

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}

const applyDiscount = (arr, callback, discount) => {
     for(let i = 0; i < arr.length; i++) {
        callback(arr[i], discount)
    }
} 

// applyDiscount(dogProducts, applyPercentDiscount, .2)
// console.log(dogProducts)

// applyDiscount(catProducts, applyFlatRateDiscount, 2) 
// console.log(catProducts)

const applyDicountByCaregory = (arr, category, callback, discount) => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i].category === category) {
            callback(arr[i], discount)
        }
    }

}


// applyDicountByCaregory(catProducts, 2, applyPercentDiscount, .10)

// console.log(catProducts)

// applyDicountByCaregory(dogProducts, 1, applyFlatRateDiscount, 3)

// console.log(dogProducts)


// const applyDicountByInventory = (arr, amount, callback, discount) => {
//     for(let i=0; i<arr.length;i++) {
//         if(arr[i].inventory > amount) {
//             callback(arr[i], discount)
//         }
//     }
// }

// applyDicountByInventory(catProducts, 55, applyPercentDiscount, .10)
// console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makeSandwich(bread) {
    
    return (ingredients) => {
        let order = `You ordered a ${bread} bread sandwich with `

        for(i=0;i<ingredients.length;i++) {

            if(i === ingredients.length - 1 && i !== 0){
                order += `and ${ingredients[i]} `
            } else if(ingredients.length === 1) {
                order += `${ingredients[i]} `
            } else
                order += `${ingredients[i]} `
        }
        return order
    }

 
}

const makeWheatSnadwhich = makeSandwich("wheat")

const makeRyeSandwich = makeSandwich("rye")

console.log(makeWheatSnadwhich(["pickle", "cheese", "ham"]))
console.log(makeRyeSandwich(["turkey"]))