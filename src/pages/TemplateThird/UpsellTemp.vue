<template>
  <div class="q-pt-lg jutify-center upsell bg-color">
    <upsell-page></upsell-page>
  </div>
</template>
<script>

import { defineComponent, ref } from "vue";

import UpsellPage from "components/UpsellPage.vue";
import PayMethods from "components/PayMethodsSelect.vue";
import SupportCard from "components/SupportCard.vue";

export default defineComponent({

  components: { UpsellPage }

});

</script>

<style scoped>
.upsell>div{
  position: relative;
  z-index: 99;
}
.bg-color:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top:0px;
  left:0px;
  background-color: rgb(214, 216, 234,0.6);
  z-index: 0;
}
</style>

