import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './likes/favorite-restautant-search-view';
import FavoriteRestaurantShowPresenter from './likes/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './likes/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();
const Favourite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favourite;
