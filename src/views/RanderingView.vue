<template>
  <div>
    <h1>Rendering</h1>
    <input type="text" name="" v-model="type" id="" />
    <!-- 해당 태그를 삭제 -->
    <h1 v-if="type.toUpperCase() === 'A'">A</h1>
    <h1 v-else-if="type.toUpperCase() === 'B'">B</h1>
    <h1 v-else>C</h1>
    <hr />
    <!-- display none으로 처리 -->
    <h1 v-show="type === 'A'">A</h1>
    <h1 v-show="type === 'B'">B</h1>
    <h1 v-show="type !== 'A' && type !== 'B'">C</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'A',
    };
  },
};
</script>

<style></style>
