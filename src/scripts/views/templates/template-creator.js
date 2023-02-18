import CONFIG from '../../globals/config';

const restaurantDetailListTemplate = (restaurant) => `
        <div class="container">
                <div style="text-align:center">
                        <h2 class="restaurant__name" tabindex="0">${restaurant.name}</h2>
                </div>
                <div class="row">
                        <div class="column">
                                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" style="width:100%" alt="${restaurant.name}">
                        </div>
                        <div class="column">
                                <article>
                                        <h2 tabindex="0">Information</h2>
                                        <div class="inner__information">
                                                <h3 tabindex="0">Rating: ${restaurant.rating}</h3>
                                                <h3 tabindex="0">Alamat: ${restaurant.address}, ${restaurant.city}</h3>
                                                <h3 tabindex="0">Foods</h3>
                                                <p tabindex="0">${restaurant.menus.foods.map((food) => food.name)}</p>
                                                <h3 tabindex="0">Drinks</h3>
                                                <p tabindex="0">${restaurant.menus.drinks.map((drink) => drink.name)}</p>
                                                <h3 tabindex="0">Description</h3>
                                                <p tabindex="0">${restaurant.description}</p>
                                                <h3 tabindex="0">Customer Review</h3>
                                                <p tabindex="0">${restaurant.customerReviews.map((customerReview) => customerReview.review)}</p>
                                        </div>
                                <article>
                        </div>
                </div>
        </div>
`;

const restaurantItemListTemplate = (restaurant) => `
        <article class="restaurant-item">
                <div class="restaurant-content">
                        <div class="rating-inner">
                                <img class="restaurant-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || '-'}"></img>
                                <div class="restaurant-rating">
                                        <i class="fas fa-star" style="color: #fcba03; font-size: 18px" tabindex="0"></i><span tabindex="0">Rating : ${restaurant.rating || '-'} | Kota:  ${restaurant.city || '-'}</span>
                                </div>
                        </div>
                        <h4 class="restaurant-name restaurant__title" tabindex="0"><a  class="link" href="/#/detail/${restaurant.id || '-'}">${restaurant.name || '-'}</a></h4>
                </div>
        </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true" tabindex="0"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa-solid fa-heart" aria-hidden="true" style="color: #fcba03; font-size: 18px" tabindex="0"></i>
  </button>
`;

export {
  restaurantItemListTemplate,
  restaurantDetailListTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
