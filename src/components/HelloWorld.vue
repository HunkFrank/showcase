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
      <div class="list-item"></div>
      <div class="list-item"></div>
      <div class="list-item"></div>
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

<style lang="scss">
$green: #034403;
.list-test {
  width:200px;
  height: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .item-test{
    width:100%;
    height:30px;
    background: $green;
  }
}
</style>