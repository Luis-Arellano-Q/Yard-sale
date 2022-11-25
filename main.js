
const menuEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.nav-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const productDetailCLose = document.querySelector('.product-detail-close-secondary');
const menuCarIcon = document.querySelector('.car');
const aside = document.querySelector('.product-detail');
const asideSecondary = document.querySelector('.product-detail-secondary');

// const mainContainer = document.querySelector(".main");

menuEmail.addEventListener('click',toggleDesktopMenu);
hamMenu.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarritoMenu);
productDetailCLose.addEventListener('click', closeProductDetailAside)

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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});
productList.push({
    name: 'Laptop',
    price: 1200,
    image:'https://m.media-amazon.com/images/I/71RK6+rx-xL.jpg',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});
productList.push({
    name: 'phone',
    price: 700,
    image:'https://image.made-in-china.com/155f0j00UhrpdSDRVlGT/Cell-Phone-HYT-Mate48-PRO-5-5-Inch-Phone-Smart-Phone-Manufacturers-Direct-Selling-Mobile-Android-Phone.jpg',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});
productList.push({
    name: 'headphones',
    price: 150,
    image:'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=2000',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});
productList.push({
    name: 'Laptop',
    price: 1200,
    image:'https://m.media-amazon.com/images/I/71RK6+rx-xL.jpg',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});
productList.push({
    name: 'phone',
    price: 700,
    image:'https://image.made-in-china.com/155f0j00UhrpdSDRVlGT/Cell-Phone-HYT-Mate48-PRO-5-5-Inch-Phone-Smart-Phone-Manufacturers-Direct-Selling-Mobile-Android-Phone.jpg',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});
productList.push({
    name: 'headphones',
    price: 150,
    image:'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=2000',
    descrip: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus dolore error voluptatibus corporis unde harum quis illo accusamus, assumenda mollitia consequuntur expedita aliquid, sapiente sit odio, dolorum veritatis possimus!'
});

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    asideSecondary.classList.add('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    asideSecondary.classList.add('inactive');
}
function toggleCarritoMenu() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideSecondary.classList.add('inactive');
    aside.classList.toggle('inactive');
}
function showAsideSecondary(id) {
    const asideSecImg = document.querySelector('.asideSecImg');  
    const asidePrice = document.querySelector('.asidePrice');
    const asideNameProduct = document.querySelector('.asideNameProduct');
    const asideDescrip = document.querySelector('.asideDescrip');
    asideSecImg.setAttribute('src',productList[id].image);
    asidePrice.innerText= '$'+ productList[id].price;
    asideNameProduct.innerText=productList[id].name;
    asideDescrip.innerText=productList[id].descrip;
}

function openProductDetail(event) {
    asideSecondary.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    
    // const asideImgValue = document.querySelector('.imgValue');
    // asideImgValue.addEventListener('click',showAsideSecondary);
    // const id = asideImgValue.getAttribute('name');

    const id = Math.round(Math.random()*8);
    showAsideSecondary(id);
}
function closeProductDetailAside() {
    asideSecondary.classList.add('inactive');
}

function renderProduct(arr) {
    let i = 0;
    for (const product of arr) {
        const cardsContainer = document.querySelector('.cards-conteiner');

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg= document.createElement('img');
        productImg.setAttribute('name',i++);
        productImg.classList.add('imgValue');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetail);
        
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
        productCard.append(productImg,productInfo);
        cardsContainer.appendChild(productCard);
    }
    
}

renderProduct(productList);
