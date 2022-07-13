<template>
  <h1>나의 이름은 {{ userName }}입니다.</h1>
  <input type="number" v-model.number="numberModel" />
  <div>{{ printNumber }}</div>
  <div>
    <label for="">여성<input type="radio" name="" v-model.number="gender" value="0" id="" /></label>
    <label for="">남성<input type="radio" name="" v-model.number="gender" value="1" id="" /></label>
  </div>
  <div>{{ gender }}</div>
  <div>{{ printGender }}</div>
</template>

<script>
export default {
  data() {
    return {
      userName: '김재훈',
      numberModel: 3,
      gender: 0,
    };
  },
  // computed 값이 변하면 계산해서 주겠다
  computed: {
    printNumber() {
      return this.numberModel + 3;
    },
    printGender() {
      return ~~this.gender === 0 ? '여성' : '남성';
    },
  },
};
</script>

<style></style>
