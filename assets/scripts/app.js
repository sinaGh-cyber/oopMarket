const productList = {
  products: [
    {
      title: `A pillow`,
      imageUrl: `https://www.daysoftheyear.com/cdn-cgi/image/fit=cover%2Cf=auto%2Conerror=redirect%2Cwidth=2560/wp-content/uploads/put-a-pillow-on-your-fridge-day1-scaled.jpg`,
      price: 19.99,
      discripyion: `A soft pillow`,
    },

    {
      title: `A Carpet`,
      imageUrl: `https://cdn.shopify.com/s/files/1/1202/8764/products/S1412_1_-_Copy_-_Copy_grande.jpg?v=1590171471`,
      price: 889.99,
      discripyion: `A Carpet that you maight like or not!`,
    },
  ],
  render() {
      const renderHook = document.getElementById(`app`) ;
      const prodList = document.createElement(`ul`);
      
      prodList.className = `product-list`;

      for (const prod of this.products) {
          const prodEl = document.createElement(`li`);
          prodEl.className = `product-item`;
          prodEl.innerHTML = `     
             <div>
             <img src="${prod.imageUrl}" alt="${prod.title}"/>
             <div class="product-item__content">
             <h2>${prod.title}</h2>
             <h3>\$${prod.price}</h3>
             <p>${prod.discripyion}</p>
             <button> add to Card </button>
             </div>
             </div>   `;
          prodList.append(prodEl);
      }
      
      renderHook.append(prodList);
  },
};
productList.render();
