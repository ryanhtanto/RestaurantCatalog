import { restaurantItemListTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
             <div class="content">
                <input id="query" type="text">
                <h2 class="sectionTitle">Your Favourite Restaurant</h2>
                 <div id="lists" class="list">
                 </div>
             </div>
             `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(restaurantItemListTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('lists').innerHTML = html;
    document.getElementById('lists').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
