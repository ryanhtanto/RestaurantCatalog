import RestaurantListSource from '../../data/restaurantlist-source';
import { restaurantItemListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section>
        <h1 class="sectionTitle" id="content">daftar restoran</h1>
        <div id="list" class="list"></div>
      </section> 
    `;
  },

  async afterRender() {
    const restaurantList = await RestaurantListSource.restaurantList();
    const restaurantContainer = document.querySelector('#list');
    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += restaurantItemListTemplate(restaurant);
    });
  },
};

export default Home;
