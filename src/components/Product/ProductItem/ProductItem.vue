<template>
  <div class="product-item">
    <h1>{{ product.title }}</h1>
    <div class="product-item__flex-container">
      <Image :src="product.images[0]" alt="Image" />
      <div class="product-item__description">
        <div class="product-item__description-purchase">
          <span class="product-item__price">
            {{
              Math.round(
                product.price -
                  (product.price * product.discountPercentage) / 100
              )
            }}$
          </span>
          <span class="product-item__old-price"> {{ product.price }}$ </span>
          <div>
            <Button
              class="product-item__favorite"
              v-if="!isProductInFavorite"
              @click="addToFavorite"
              >Добавить в избранное
            </Button>
            <Button
              @click="deleteFromFavorite"
              class="product-item__favorite-delete"
              v-else
              >Удалить из избранного
            </Button>
          </div>
          <div>
            <Button
              v-if="!isProductInCart"
              class="product-item__cart"
              @click="addToCart('1')"
              >Добавить в корзину</Button
            >
            <ProductInCart
              v-else
              :quantity="quantity"
              :stock="product.stock"
              @updateValue="addToCart"
              @deleteItem="$emit('deleteItem')"
            />
          </div>
          <div class="product-item__stock">В наличии {{ product.stock }}шт</div>
        </div>
        <div class="product-item__description-block">
          <dl>
            <dt>Бренд</dt>
            <dt class="product-item__dashed"></dt>
            <dd>{{ product.brand }}</dd>
          </dl>
          <dl>
            <dt>Рейтинг</dt>
            <dt class="product-item__dashed"></dt>
            <dd>{{ product.rating }}</dd>
          </dl>
          <dl>
            <dt>Описание</dt>
            <dt class="product-item__dashed"></dt>
            <dd>{{ product.description }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ProductItem.js"></script>
<style lang="scss" src="./ProductItem.scss"></style>
