<template>
  <div class="hello">
    <h1>Testing deploy with Firebase!</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          1 of 2
        </div>
        <div class="col">
          2 of 2
        </div>
      </div>
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col">
          2 of 3
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </div>
    <div class="list-test">
      <div class="list-item">1</div>
      <div class="list-item">2</div>
      <div class="list-item">3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
$gray: #eee;
$bgcolor: lightblue;
.list-test {
  width:200px;
  height: 200px;
  background: $gray;
  display: flex;
  flex-direction: column;
  color: white;
  .list-item{
    padding: 5px;
    max-width: 100%;
    height: 30px;
    background: $bgcolor;
    margin-bottom:5px
  }
}
</style>