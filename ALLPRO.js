const product = [
    {
      id: 0,
      name: "Japanese Sakura Spiral Notebook",
      price: 12.55,
      imgSrc: 'imgSrc/product/0.jpg',
    },
    {
      id: 1,
      name: "Gold Foil Zodiac Notebook",
      price: 16.55,
      imgSrc:'imgSrc/product/1.jpg',
    },
    {
      id: 2,
      name: "Zodiac Sign Printed Galaxy Notebook",
      price: 30.55,
      imgSrc: 'imgSrc/product/2.jpg',
    },
    {
      id: 3,
      name: "DIY Embroidered Notebooks",
      price: 6.55,
      imgSrc: 'imgSrc/product/3.jpg',
    },
    {
      id: 4,
      name: "0.5mm Black Neuter Pen and 0.38mm Creativity Drawing Pen",
      price: 6.55,
      imgSrc: 'imgSrc/product/4.jpg',
    },
    {
      id: 5,
      name: "Tombow MONO Graph Shaker 0.5mm Mechanical Pencil",
      price: 7.60,
      imgSrc: 'imgSrc/product/5.jpg',
    },
    {
        id: 6,
        name: "Uni-ball Signo Gel and Refill Pen",
        price: 7.55,
        imgSrc: 'imgSrc/product/6.jpg',
      },
      {
        id: 7,
        name: "Lovely Finds : Fancy Pencils",
        price: 6.55,
        imgSrc: 'imgSrc/product/7.jpg',
      },
      {
        id: 8,
        name: "Japanese Gradient Color Random Sticky Note",
        price: 7.55,
        imgSrc: 'imgSrc/product/8.jpg',
      },
      {
        id: 9,
        name: "Gradient Love Heart Stickers",
        price: 3.55,
        imgSrc: 'imgSrc/product/9.jpg',
      },
      {
        id: 10,
        name: "Moon Planet Sticky Notes",
        price: 10.55,
        imgSrc: 'imgSrc/product/10.jpg',
      },{
        id: 11,
        name: "Ocean Memo Pad Papar Post Sticky Note",
        price: 11.55,
        imgSrc: 'imgSrc/product/11.jpg',
      },
      {
        id: 12,
        name: "Multilayer Random File Pocket",
        price: 10.55,
        imgSrc: 'imgSrc/product/12.jpg',
      },
      {
        id: 13,
        name: "A5 Presentation Display Book Folder Pocket",
        price: 12.55,
        imgSrc:'imgSrc/product/13.jpg',
      },
      {
        id: 14,
        name: "Pendaflex 1/3 Tab Cut Letter Recycled Top Tab File Folder",
        price: 6.55,
        imgSrc:'imgSrc/product/14.jpg',
      },
      {
        id: 15,
        name: "Barker Creek Petals and Prickles Letter-Size File Folders",
        price: 7.55,
        imgSrc: 'imgSrc/product/15.jpg',
      },
      {
        id: 16,
        name: "Random Color Paper Clip",
        price: 4.55,
        imgSrc: 'imgSrc/product/16.jpg',
      },
      {
        id: 17,
        name: "Random Paper Clip and Card Clip Set",
        price: 7.55,
        imgSrc: 'imgSrc/product/17.jpg',
      },
      {
        id: 18,
        name: "DIY Tassel Paperclip Bookmarks",
        price: 5.20,
        imgSrc: 'imgSrc/product/18.jpg',
      },
      {
        id: 19,
        name: "Monograph Arrow Paper Clips",
        price: 7.55,
        imgSrc: 'imgSrc/product/19.jpg',
      },
      {
        id: 20,
        name: "Plaid Pattern Random Memo Paper",
        price: 7.20,
        imgSrc: 'imgSrc/product/20.jpg',
      },
      {
        id: 21,
        name: "Jungle Goals List Pad",
        price: 10.20,
        imgSrc: 'imgSrc/product/21.jpg',
      },
      {
        id: 22,
        name: "Cute small Business Planner Notepad",
        price: 10.20,
        imgSrc: 'imgSrc/product/22.jpg',
      },
      {
        id: 23,
        name: "Martha Brook",
        price: 15.20,
        imgSrc:'imgSrc/product/23.jpg',
      }

  ];
  const categories= [...new Set(product.map((item)=>
        {return item}))]
        let i=0;
        document.getElementById('root').innerHTML=categories.map((item)=>
       {var {imgSrc, name, price} = item;
       return(
           `<div class='box'>
               <div class='img-box'>
                   <img class='images'src=${imgSrc}></img>
               </div>
               <div class='bottom'>
               <p>${name}</p>
               <h2>$ ${price}</h2>`+
               "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
               `</div>
               </div>`
       )
   }).join('')

   var cart=[];

   function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
   }

   function delElement(a){
    cart.splice(a,1);
    displaycart();
   }

   function displaycart(a) 
{
    let j = 0;
    document.getElementById("count").innerHTML = cart.length;
    let subtotal = 0, shipping_fee = 0, total_price = 0, discount = 0;
    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
        document.getElementById("subtotal").innerHTML = "RM " + 0 + ".00";
        document.getElementById("shipping_fee").innerHTML = "RM " + 0 + ".00";
        document.getElementById("discount").innerHTML = "RM " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {imgSrc, name, price} = items;
            subtotal = subtotal + price;
            
            if (subtotal > 100 || subtotal == 0) {
                shipping_fee = 0;
            } 
            else {
                shipping_fee = 10;
            }
            if (cart.length >= 5 && cart.length <= 10) {
                discount = (subtotal*0.05).toFixed(2);
                total_price = (subtotal + shipping_fee - discount).toFixed(2);
                document.getElementById("subtotal").innerHTML = "RM " + subtotal;
                document.getElementById("shipping_fee").innerHTML = "RM " + shipping_fee + " ";
                document.getElementById("discount").innerHTML = "- RM " + discount;
                document.getElementById("total_price").innerHTML = "RM " + total_price;
            } else if (cart.length > 10) {
                discount = (subtotal*0.15).toFixed(2);
                total_price = (subtotal + shipping_fee - discount).toFixed(2);
                document.getElementById("subtotal").innerHTML = "RM " + subtotal;
                document.getElementById("shipping_fee").innerHTML = "RM " + shipping_fee + " ";
                document.getElementById("discount").innerHTML = "- RM " + discount;
                document.getElementById("total_price").innerHTML = "RM " + total_price;
            } else {
                discount = 0;
                total_price = (subtotal + shipping_fee).toFixed(2);
                document.getElementById("subtotal").innerHTML = "RM " + subtotal + " ";
                document.getElementById("shipping_fee").innerHTML = "RM " + shipping_fee + " ";
                document.getElementById("discount").innerHTML = "RM " + discount + " ";
                document.getElementById("total_price").innerHTML = "RM " + total_price + " ";
            }
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${imgSrc}>
                </div>
                <p style='font-size:12px;'>${name}</p>
                <h2 style='font-size:15px,'>RM ${price}</h2>` + 
                "<i class= 'fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }
        ).join('')
    }
}

function order(){
    alert("Order Checkout Sucessful.")
    localStorage.clear();
    location.reload();
}

