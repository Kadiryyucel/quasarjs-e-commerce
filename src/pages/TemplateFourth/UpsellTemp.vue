<template>
  <div class="q-pt-lg jutify-center upsell">
    <upsell-page></upsell-page>
  </div>
</template>
<script>

import { defineComponent, ref } from "vue";

import UpsellPage from "components/UpsellPage.vue";

export default defineComponent({

  components: { UpsellPage }

});

</script>
