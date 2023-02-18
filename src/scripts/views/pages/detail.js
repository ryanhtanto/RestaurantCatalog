import UrlParser from '../../routes/url-parser';
import RestaurantListSource from '../../data/restaurantlist-source';
import { restaurantDetailListTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section>
        <div id="restaurantDetail"></div>
        <div id="likeButtonContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantListSource.detailRestaurant(url.id);
    const restaurantConteiner = document.querySelector('#restaurantDetail');
    restaurantConteiner.innerHTML = restaurantDetailListTemplate(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        pictureId: restaurant.restaurant.pictureId,
        address: restaurant.restaurant.address,
        city: restaurant.restaurant.city,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
        foods: restaurant.restaurant.menus.foods,
        drinks: restaurant.restaurant.menus.drinks,
        customerReviews: restaurant.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
