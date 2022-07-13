<template>
  <div>
    <h1>DataBinding</h1>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
          <th>총합</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="idx" v-for="(item, idx) in productList">
          <td>{{ item.product_name }}</td>
          <td>{{ numberComma(item.price) }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <input type="text" name="kim" id="" />
      <tbody>
        <ProductItem :product="item" :key="idx" v-for="(item, idx) in productList" />
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
export default {
  components: {
    ProductItem,
  },
  methods: {
    numberComma(num) {
      return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  data() {
    return {
      productList: [
        {
          product_name: '기계식 키보드',
          price: 250000,
          category: '노트북/태블릿',
          delivery_price: 5000,
          productCount: 0,
        },
        {
          product_name: '무선 마우스',
          price: 12000,
          category: '노트북/태블릿',
          delivery_price: 3000,
          productCount: 0,
        },
        {
          product_name: '아이패드',
          price: 725000,
          category: '노트북/태블릿',
          delivery_price: 5000,
          productCount: 0,
        },
        {
          product_name: '태블릿 거치대',
          price: 32000,
          category: '노트북/태블릿',
          delivery_price: 4000,
          productCount: 0,
        },
      ],
    };
  },
  // computed: this.price
};
</script>

<style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
</style>
