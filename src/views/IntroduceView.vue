<template>
  <h1>나의 이름은 {{ userName }}입니다.</h1>
  <input type="number" v-model.number="numberModel" />
  <div>{{ printNumber }}</div>
</template>

<script>
export default {
  data() {
    return {
      userName: '김재훈',
      numberModel: 3,
    };
  },
  computed: {
    printNumber() {
      return this.numberModel + 3;
    },
  },
};
</script>

<style></style>
