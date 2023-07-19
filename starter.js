////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
let add = (num1, num2) => num1 + num2
let subtract = (num1, num2) => num1 - num2
let mltiply = (num1, num2) => num1 * num2
let divide = (num1, num2) => num1 / num2

let calculator = (num1, num2, callback) => {
  if(+num1 && +num2) {
    return callback(+num1, +num2)
  } else {
    console.log("Input real numbers you silly goose!")
  }
}

console.log(calculator(8,2,mltiply))
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
let appleyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1-discount)

}

let applyFlatRateDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}


let applyDiscount = (arr, callback, discount, category, method, amount) => {
  if(method === 'all'){
    arr.forEach((product) => {
      callback(product,discount)
    })
  } else if(method === 'caegory') {
    arr.forEach((product) => {
      if(product.category === category) {
        callback(product, discount)
      }
    })
  } else if(method === 'inventory') {
    arr.forEach((product) => {
      if(product.inventory < amount) {
        callback(product, discount)
      }
    })
  }
}

let advertisement = (product, amount) => {
  if (product.inventory > amount){
    console.log(`${product.name} is overstocked! Discount is 50%!`)
  } else {
    console.log(`${product.name} is now 10% off!`)
  }
}

let runAds = (arr, amount, callback) => {
  arr.forEach((product) => callback(product, amount))
}

// runAds(catProducts, 35, advertisement)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
let makeSandwich = (bread) => {
  let order = `You ordered a ${bread} sandwich with `

  return (ingredients) => {
    ingredients.forEach((ingredient, index)=> {
      if(ingredients.length === 1) {
        order += ingredient + "."
      } else if(ingredients.length - 1 === index) { // checks to see if final ing.
        order += ` and ${ingredient}`
      } else { 
        order += ` ${ingredient},`
      }
    })
    return order
  }
}

// you ordered a wheat sandwhwich with pickels

let makeWheatSandwhich = makeSandwich("wheat")
let makeWhiteSandwhich = makeSandwich("White")

let order1 = makeWheatSandwhich(["turkey", "bacon", "lettuce"])
let order2 = makeWhiteSandwhich(["ham"])

console.log(order1)
console.log(order2)
