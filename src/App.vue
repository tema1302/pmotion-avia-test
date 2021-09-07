<template>
  <div class="wrapper">
      <div class="img-container">
          <img src="" alt="">
      </div>
      <div class="tickets-block">
          <div class="tickets-block__sidebar"></div>
          <div class="tickets-block__result-info"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            text: 'Hello World!'
        }
    }
}
</script>

<style lang="scss">
$radius: 5px;

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
img {
    max-width: 100%;
    height: auto;
}

html {
    background: #f3f7fa;
    font-size: 16px;
}
.wrapper {
    max-width: 1180px;
    padding: 0 15px;
    .img-container {
        max-width: 400px;
        text-align: center;
    }
    .tickets-block {
        display: flex;
        flex-wrap: wrap;
        &__sidebar {
            flex: 0 0 25%;
            max-width: 25%;
        }
        &__result-info {
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
}
</style>