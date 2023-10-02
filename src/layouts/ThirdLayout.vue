<template>
  <q-layout view="lHh Lpr lFf" class="bg-layout">
    <header-page class="col-10 col-xs-12 col-md-10 q-gutter-x-md"/>
    <div class="q-pa-md" style="padding-top:80px">
      <div class="row justify-center q-gutter-x-md">
        <div class="col-6 col-xs-12 col-md-6 col-sm-12 q-pa-sm-lg">
          <q-card class="q-gutter-x-xs q-gutter-y-md q-pa-xs-md q-pa-md-lg left">

            <div class="text-h3 q-pb-lg q-mt-none head-title">Checkout</div>

            <basket-product class="basket md-hide lg-hide xl-hide">
              <template v-slot:default="{active}">
                <div class="col-12 q-pt-md discount-panel" v-if="active">
                  <right-payment-panel class="payment-panel xs-column-discount" :title="true" :provided="false"/>
                  <jewellery-clup-panel/>
                </div>
              </template>
            </basket-product>

            <p>Strong demand! Complete your order before it's too late!</p>
            <q-card class="q-pa-md reserved-title">Your cart is reserved for 10:00 minutes.</q-card>

            <info-pay-and-product schema="2" schema-size="3" :order-to-containers="[2,1]" />

            <slot></slot>
          </q-card>
        </div>
        <div class="col-4 col-xs-12 col-sm-12 col-md-4 q-px-sm-lg">
          <right-payment-panel :title="true" :provided="false" class="xs-hide sm-hide"/>
          <slot name="right-panel"></slot>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

import InfoPayAndProduct from "components/InfoPayAndProduct.vue";
import RightPaymentPanel from "components/DiscountAndTotalPanel.vue";
import BasketProduct from "components/BasketProduct.vue";
import JewelleryClupPanel from "components/JewelleryClupPanel.vue";
import HeaderPage from "components/HeaderPage.vue";

export default defineComponent({
  name: "MainLayout",

  components: { HeaderPage, JewelleryClupPanel, InfoPayAndProduct, RightPaymentPanel, BasketProduct },

  setup() {
    const leftDrawerOpen = ref(false);


    return {
      model: ref(null),
      options: [
        "Google", "Facebook", "Twitter", "Apple", "Oracle"
      ],
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>

<style lang="scss">
.bg-layout {
  background: #D6D8EA;
}
.discount-panel{
  .payment-panel{
    border: 1px solid #D6D8EE;
    border-radius: 16px;
    .apply-btn{
      background-color: #000034 !important;
    }
  }
}
</style>

