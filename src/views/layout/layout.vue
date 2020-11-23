<template>
  <div class="mainLayout">
    <mainHeader/>

    <el-container>
      <mainMenu/>

      <mainContainer/>
    </el-container>
  </div>
</template>

<script>

import mainHeader from "@/components/layout/header";
import mainMenu from "@/components/layout/menu";
import mainContainer from "@/components/layout/container";

export default {
  name: "mainLayout",
  components: {
    mainHeader,
    mainMenu,
    mainContainer
  }
}

</script>

<style lang="scss">
@import "../../components/layout/index";

.mainLayout{
  height: 100%;
  .el-container{
    height: calc(100% - #{$header-height});
  }
}
</style>