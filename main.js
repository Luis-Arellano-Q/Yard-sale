
const menuEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.nav-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon = document.querySelector('.car');
const aside = document.querySelector('.product-detail');

// const mainContainer = document.querySelector(".main");

menuEmail.addEventListener('click',toggleDesktopMenu);
hamMenu.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarritoMenu);

// mainContainer.addEventListener('click', colseMenusClick);


// creamos una funcion que va a validar si alguno de los 2 menus o el carrito de compras este abierto y va a cerrarlo si esta abierto. 
// function colseMenusClick() {
//     console.log('hola');
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
//     const isCarritoComprasClosed = aside.classList.contains('inactive');
    
//     if (!isMobileMenuClosed || !isDesktopMenuClosed || !isCarritoComprasClosed )  {

//         mobileMenu.classList.add("inactive");
//         desktopMenu.classList.add("inactive");   
//         aside.classList.add("inactive");
   
//     }

// }

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoMenu() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'phone',
    price: 700,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProduct(arr) {
    for (const product of arr) {
        const cardsContainer = document.querySelector('.cards-conteiner');

        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        
        const img= document.createElement('img');
        img.setAttribute('src',product.image);
        
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText='$'+ product.price;
        const productName = document.createElement('p');
        productName.innerText= product.name;
        
        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart =document.createElement('img');
        productImgCart.setAttribute('src','Platzi_YardSale_Icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(img,productInfo);
        cardsContainer.appendChild(productCard);
    }
    
}

renderProduct(productList);