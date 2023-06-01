const product =[
    {
        id:0,
        img:'img/shoe.jpg',
        title:'new canvas',
        price:120,
    },
    {
        id:1,
        img:'img/shoe1.jpg',
        title:'new canvas',
        price:460,
    },
    {
        id:2,
        img:'img/shoe3.jpg',
        title:'new shoe',
        price:260,
    },
    {
        id:3,
        img:'img/shoe4.jpg',
        title:'new diamond jewelry',
        price:620,
    },
    {
        id:4,
        img:'img/car1.jpg',
        title:'new tesla',
        price:220,
    },
    {
        id:5,
        img:'img/car2.jpg',
        title:'new lamborghini',
        price:450,
    },
    {
        id: 6,
        img:'img/phone1.jpg',
        title:'new iphone 14',
        price: 60,
    },
    {
        id:7,
        img:'img/phone2.jpg',
        title:'new iphone 13',
        price:440,
    },
    {
        id:8,
        img:'img/shoe5.jpg',
        title:'new golden jewelry',
        price:900,
    },
    {
        id:9,
        img:'img/shoe2.jpg',
        title:'new shoe',
        price:700,
    }
];
    
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {img, title, price} = item;
   return(
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${img}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`

   )
}).join('')


var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML ="$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {img, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML ="$ "+total+".00";
            return(
                `<div class='cart-Item'>
                <div class='row-img'>
                <img class= 'rowimg' src=${img}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}