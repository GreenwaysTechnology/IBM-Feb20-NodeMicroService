//object augmentation;

//object has no any property ; empty object
let product = {
   id:1
};
console.log(product)
//object augmentation: adding new property 
product.name = "Phone"
product.qty =100
product.price=0;
console.log(product)
//object augmentation: update new property 
//if property exits, it updates, if not , add 
product.price=100;
console.log(product)
//object augmentation: remove new property 
delete product.qty;
console.log(product)
//object augmentation ; iterate
for(let prop in product){
    console.log(prop,product[prop])
}


