const menClothing=[
    {
        id:1,
        type:'Polo',
        category:'Purchases',
        price:40,
        image:'./images/istockphoto-1126630118-2048x2048.jpg',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:2,
        type:'T-shirt',
        category:'Sales',
        price:30,
        image:'./images/istockphoto-1151955707-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:3,
        type:'T-shirt',
        category:'Outstanding',
        price:25,
        image:'./images/istockphoto-1490616219-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:4,
        type:'Polo',
        category:'Sales',
        price:50,
        image:'./images/istockphoto-1496823090-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:5,
        type:'Shirt',
        category:'Outstanding',
        price:40,
        image:'./images/photo-1598032895397-b9472444bf93.avif',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:6,
        type:'Shirt',
        category:'Sales',
        price:70,
        image:'./images/photo-1598033129183-c4f50c736f10.avif',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:7,
        type:'Pant',
        category:'Purchases',
        price:35,
        image:'./images/istockphoto-532278616-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:8,
        type:'Pant',
        category:'Purchases',
        price:47,
        image:'./images/istockphoto-508549005-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:9,
        type:'Short',
        category:'Sales',
        price:75,
        image:'./images/istockphoto-504371432-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:10,
        type:'Jeans',
        category:'Sales',
        price:45,
        image:'./images/istockphoto-527236518-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:11,
        type:'Jeans',
        category:'Sales',
        price:56,
        image:'./images/istockphoto-1185850452-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        id:12,
        type:'Short',
        category:'Purchases',
        price:37,
        image:'./images/istockphoto-175438283-170667a.webp',
        description:'Lorem ipsum dolor sit amet consectetur.'
    }
]

const filterButtons=document.querySelectorAll('.filter-btns');
const clothingContainer=document.querySelector('.clothing-container');
window.addEventListener('DOMContentLoaded', function(){
    // console.log(menClothing);
    displayClothing(menClothing)
})


function displayClothing(items){
   let displayClothing= items.map(function(item){
        return `<img
    src="${item.image}"
    alt="polo"
    class="image"
  />
  <div class="clothing">
    <h4>${item.type}</h4>
    <h4 class="price">${item.price}</h4>
  </div>
  <p class="description">${item.description}</p>`
    })
    displayClothing=displayClothing.join('');
    clothingContainer.innerHTML=displayClothing;
}

// filter buttons
filterButtons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category=e.currentTarget.dataset.id;
        // console.log(`${menClothing[category]}`);
        const menClothingCategory=menClothing.filter(function(items){
            if(items.category===category){
                return items
            } 
        })
        if(category==='All'){
            displayClothing(menClothing)
        } else{
            displayClothing(menClothingCategory)
        }
    })
})

// Total buttons
const totalButtons=document.querySelectorAll('.totals');
const valuesContainer=document.querySelector('.values')
const btnn=document.querySelector('.totals')
const reducer=(accumulator,items)=>{
    return accumulator += items.price;
}
let total=menClothing.reduce(reducer,0);
// let total1=clothingPrice.reduce(reducer,0)
totalButtons.forEach(function(button){
    button.addEventListener('click',function(e){
        const currentCategory=e.currentTarget.dataset.id;
        // console.log(currentCategory);
        const clothingPrice=menClothing.filter(function(items){  
            if(items.category===currentCategory){
                let currentPrice=items.price
                console.log(currentPrice);
                return currentPrice;
                // return currentPrice.reduce()
            }
        })
        if(currentCategory==='All'){
            return total
        }else{
            let total1=clothingPrice.reduce(reducer,0)
             console.log(total1);
            return total1
            // console.log(total1);
        }
    })
})


    btnn.addEventListener('click',function(){
        displayTotalAmounts(menClothing)
    })
// function displayTotalAmounts(items){
//     let displayTotalAmounts=items.map(function(item){
//         return `<h4 class="value1">${total}</h4>
//         <h4 class="value1">${item.total1}</h4>
//         <h4 class="value1">${item.total1}</h4>
//         <h4 class="value1">${item.total1}</h4>`
//     })
//     displayTotalAmounts=displayTotalAmounts.join('');
//     valuesContainer.innerHTML=displayTotalAmounts;

// }

// let total2=clothingPrice.reduce(reducer,0)
// console.log(total);
// console.log(total2);
// function reducer(accumulator,items){
//     return accumulator += items.price;
// }

