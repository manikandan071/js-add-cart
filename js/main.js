var electronis=[{
    access:"mobile",id:11,brand:"redmi",price:15000,qty:1,img:"images/mobile/redmi.jpeg"
},
{
    access:"mobile",id:12,brand:"realme",price:10000,qty:1,img:"images/mobile/realme.jpeg"
},
{
    access:"mobile",id:13,brand:"apple",price:55000,qty:1,img:"images/mobile/apple.jpeg"
},
{
    access:"headphone",id:101,brand:"boult",price:800,qty:1,img:"images/headphone/boult.jpeg"
},
{
    access:"headphone",id:102,brand:"boot",price:900,qty:1,img:"images/headphone/boat.jpeg"
},
{
    access:"headphone",id:103,brand:"jbl",price:600,qty:1,img:"images/headphone/jbl.jpeg"
},
{
    access:"laptop",id:111,brand:"hp",price:42000,qty:1,img:"images/laptop/hp.jpeg"
},
{
    access:"laptop",id:112,brand:"lenovo",price:35000,qty:1,img:"images/laptop/lenovo.jpeg"
},
{
    access:"laptop",id:113,brand:"acer",price:50000,qty:1,img:"images/laptop/acer.jpeg"
}
];
function brand(a){
    return a.access == "mobile";
}


function headset(a){
    return a.access == "headphone";
}
var headphones=electronis.filter(headset);

function lapTops(a){
    return a.access == "laptop";
}
var laptops=electronis.filter(lapTops);

let search=document.getElementById("search");
let display=document.getElementById("display");

function generateCard(a){
    
    let id,brandName,price,qty,img;

    console.log(a[0].id);
    for(var i=0 ; i < a.length ; i++){
        id=a[i].id;
        brandName=a[i].brand;
        price=a[i].price;
        qty=a[i].qty;
        img=a[i].img;

        let colm=document.createElement("div");
        colm.setAttribute("class","col-4");
        let card=document.createElement("div");
        card.setAttribute("class","card");
        colm.append(card);
        let pic=document.createElement("img");
        pic.setAttribute("class","card-img-top mt-3");
        pic.setAttribute("src", img);
        card.append(pic);
        let cardBdy=document.createElement("div");
        cardBdy.setAttribute("class","card-body");
        card.append(cardBdy);
        let title=document.createElement("h4");
        title.setAttribute("class","brand");
        title.innerText=brandName;
        cardBdy.append(title);
        let brandId=document.createElement("span");
        brandId.innerText=id;
        cardBdy.append(brandId);
        let totalPrice=document.createElement("h6");
        totalPrice.setAttribute("class","price")
        totalPrice.innerText="$"+ price;
        cardBdy.append(totalPrice);
        let quantity=document.createElement("h5");
        quantity.setAttribute("class","quantity");
        quantity.innerText=qty;
        cardBdy.append(quantity);
        let row=document.createElement("div");
        row.setAttribute("class","row");
        cardBdy.append(row);
        let buyBtn=document.createElement("button");
        buyBtn.setAttribute("class","col-6");
        buyBtn.innerText="Buy Now";
        row.append(buyBtn);
        let cartBtn=document.createElement("button");
        cartBtn.setAttribute("class","col-6 cartbtn");
        cartBtn.innerText="Add to Cart";
        row.append(cartBtn);
        
        display.append(colm);
}
}

function qtyAdding(btn){
    let getPrnt=this.parentNode;
    let noOfqty=getPrnt.getElementsByClassName("noOfquantity")[0];
    noOfqty.innerText++;
    console.log(getPrnt);
}

let cartList=document.getElementById("cartlist");
function addtoCart(btn){
    let name=this.parentNode.parentNode.parentNode.parentNode;
    this.style.display="none";
    let qty=name.getElementsByClassName("quantity")[0];
    let price=name.getElementsByClassName("price")[0];
    let brandName=name.getElementsByClassName("brand")[0];
   
    console.log(name);

    let colm=document.createElement("div");
    colm.setAttribute("class","col-4");
    let card=document.createElement("div");
    card.setAttribute("class","card");
    colm.append(card);
    // let pic=document.createElement("img");
    // pic.setAttribute("class","card-img-top mt-3");
    // pic.setAttribute("src", img);
    // card.append(pic);
    let cardBdy=document.createElement("div");
    cardBdy.setAttribute("class","card-body");
    card.append(cardBdy);
    let title=document.createElement("h4");
    title.innerText=brandName.innerText;
    cardBdy.append(title);
    let totalPrice=document.createElement("h6");
    totalPrice.innerText=price.innerText;
    cardBdy.append(totalPrice);
    let quantity=document.createElement("h5");
    quantity.setAttribute("class","noOfquantity d-inline-block");
    quantity.innerText=qty.innerText;
    cardBdy.append(quantity);
    let addBtn=document.createElement("button");
    addBtn.setAttribute("class","adding");
    let icon=document.createElement("i");
    icon.setAttribute("class","icofont-plus");
    addBtn.append(icon);
    cardBdy.append(addBtn);
    let row=document.createElement("div");
    row.setAttribute("class","row");
    cardBdy.append(row);
    let buyBtn=document.createElement("button");
    buyBtn.setAttribute("class","col-6");
    buyBtn.innerText="Buy Now";
    row.append(buyBtn);

    cartList.append(colm);
    
    let adding=document.getElementsByClassName("adding");
    for(var j=0; j < adding.length; j++){
        adding[j].addEventListener("click",qtyAdding);
        console.log(adding[j]);
    }
}

search.addEventListener("click",function(){
    display.innerHTML="";
    productList=document.getElementById("productlist").value;

    if(productList == "mobile"){
        let mobiles=electronis.filter(brand);
        generateCard(mobiles);
    }
    else if(productList == "headphones"){
        let headphone=electronis.filter(headset);
        generateCard(headphone);
    }
    else if(productList == "laptop"){
        let lap=electronis.filter(lapTops);
        generateCard(lap);
    }
    let addCart=document.getElementsByClassName("cartbtn");
    console.log(addCart.length);

    for(var i=0; i < addCart.length; i++){
        console.log(addCart[i]);
        addCart[i].addEventListener("click",addtoCart);
    }
})

let cartBtn=document.getElementById("cart");
let list=true;
cartBtn.addEventListener("click",function(){
    if(list){
        cartList.style.display="flex";
        list=!list;
    }
    else{
        cartList.style.display="none";
        list=!list;
    }
})