<template>
  <div>
    <h1>이벤트 클릭</h1>
    <button type="button" @click="increaseCnt(), printConsole()">Add 1</button>
    <p>The counter is : {{ cnt }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cnt: 0,
    };
  },
  methods: {
    increaseCnt() {
      this.cnt++;
    },
    printConsole() {
      console.log(this.cnt);
    },
  },
};
</script>

<style scoped></style>
