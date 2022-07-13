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
  <div>
    <h3>p.96</h3>
    <div v-html="htmlString"></div>
  </div>
  <hr />
  <div>
    <h3>p.99</h3>
    <textarea name="" v-model="message"></textarea>
  </div>
  <div>
    <h3>p.100 - {{ city }}</h3>
    <select name="" v-model="city" id="">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
  <div>
    <h3>p.101 - {{ basketball }}, {{ football }}</h3>
    <label for=""><input type="checkbox" name="" v-model="basketball" id="" />농구</label>
    <label for=""><input type="checkbox" name="" v-model="football" true-value="1" false-value="0" id="" />농구</label>
  </div>
  <div>
    <div>
      <input type="text" name="" v-model="textValue1" id="" />
    </div>
    <div>
      <input type="text" name="" v-model="textValue2" id="" />
    </div>
    <br />
    <button type="button" :disabled="textValue1 === '' || textValue1 !== textValue2">전송</button>
  </div>
  <div>
    <h3>p.107</h3>
    <div class="container" :class="{ active: isActive, 'text-red': hasError }">Class Binding</div>
    <div class="container" :class="[activeClass, errorClass]">Class Binding</div>
    <div class="container" :class="clsArr">Class Binding</div>
  </div>
  <div>
    <h3>p.110</h3>
    <div :style="styleObj">인라인 스타일 바인딩</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObj: {
        color: 'red',
        fontSize: '16px', //font-size, background-color > backgroundColor
      },
      clsArr: ['active', 'text-red'],
      activeClass: 'active',
      errorClass: 'text-red',
      userName: '김재훈',
      isActive: true,
      hasError: false,
      numberModel: 3,
      gender: 0,
      htmlString: '<p style="color:tomato">This is a red string</p>',
      message: 'textarea입니다',
      city: '064',
      basketball: true,
      football: '1',
      textValue1: '',
      textValue2: '',
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

<style scoped>
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: tomato;
}
</style>
