<template>
  <div class="row column col-12 shipping-method">
    <div class="text-h5 q-mb-sm q-mt-lg title">Shipping Method</div>
    <div class="row items-center justify-between">
      <div class="col-12 relative-position">
        <q-card flat bordered class="my-card q-pa-sm q-mb-lg" v-if="checkConditions() || onlyFree">
          <div class="row justify-between items-center">
            <q-radio v-model="val" val="line" label="Free Shipping" />
            <span class="q-px-sm sm-hide xs-hide"><b>€10.00</b></span>
          </div>
        </q-card>

        <q-card flat bordered class="my-card q-pa-sm" v-if="checkConditions() || !onlyFree">
          <div class="row justify-between items-center">
            <q-radio v-model="val" val="shape" label="DHL with price" />
            <span class="q-px-sm sm-hide xs-hide"><b>€10.00</b></span>
          </div>
        </q-card>
        <div class="text-h4 absolute default-tablet-value tablet-show mobile-show" style="display:none"><b>$0</b></div>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({

  props: {
    onlyFree: {
      default: null
    }
  },
  setup(props) {

    function checkConditions() {
        if (props.onlyFree == null) {
          return true;
        }
    }

    return {
      checkConditions,
      val: ref("line")
    };
  }
});
</script>
<style scoped>
.title {
  font-weight: 500;
}

.default-tablet-value {
  top: 28%;
  right: 0px;
}
</style>
