/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty favourite restaurant', ({ I }) => {
  I.seeElement('.sectionTitle');
  I.see('TIDAK ADA RESTORAN UNTUK DITAMPILKAN', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('TIDAK ADA RESTORAN UNTUK DITAMPILKAN', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.seeElement('.restaurant-name .link');
  const firstRestaurant = locate('.restaurant-name .link').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant-content');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name .link');

  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);
});

Scenario('unlike one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-name .link');
  const firstRestaurant = locate('.restaurant-name .link').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant-content');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name .link');

  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);
  I.amOnPage('/#/favourite');
  const favRestaurant = locate('.restaurant-name .link').first();
  I.click(favRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('TIDAK ADA RESTORAN UNTUK DITAMPILKAN', '.restaurant-item__not__found');
});
