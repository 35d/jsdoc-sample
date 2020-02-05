<template>
  <div id="app">
    <p>合計値は {{ numArraySum }} です。</p>
  </div>
</template>

<script>
import { calcTotal } from "./logic/math";

export default {
  name: "app",
  components: {},
  data() {
    return {
      numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  computed: {
    numArraySum() {
      return calcTotal(this.numArray);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
