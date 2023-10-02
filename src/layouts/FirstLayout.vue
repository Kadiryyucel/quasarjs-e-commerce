<template>
  <q-layout view="lHh Lpr lFf">
    <header-page class="col-12 col-sm-12 col-md-8 col-xl-6 q-gutter-x-xs q-mr-lg q-mr-md-lg q-mr-xs-none"/>
    <div class="q-px-lg first">
      <div class="row justify-center q-gutter-x-md col-12">
        <div
          class="col-12 col-sm-12 col-md-4 col-xl-3 q-gutter-x-xs q-gutter-y-md q-mt-lg q-mr-lg q-mr-md-lg q-mr-xs-none bg-first">

          <div class="head-title" style="margin-top:60px">Checkout</div>
          <div class="q-gutter-sm" style="margin-bottom: 50px">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Cart" />
              <q-breadcrumbs-el label="Shipping & Billing" />
              <template v-slot:separator>
                <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.0263672 7.50017C0.0264839 7.36761 0.0792389 7.24051 0.173034 7.14684L2.73037 4.5895C2.80777 4.51212 2.86918 4.42024 2.91107 4.31912C2.95296 4.218 2.97452 4.10962 2.97452 4.00017C2.97452 3.89072 2.95296 3.78233 2.91107 3.68122C2.86918 3.5801 2.80777 3.48822 2.73037 3.41084L0.176367 0.855169C0.0852881 0.760867 0.0348909 0.634566 0.0360301 0.503468C0.0371693 0.372369 0.0897539 0.246963 0.182458 0.154259C0.275162 0.0615551 0.400568 0.00897061 0.531667 0.0078314C0.662765 0.00669219 0.789066 0.0570894 0.883367 0.148168L3.43737 2.70184C3.78078 3.04592 3.97365 3.5122 3.97365 3.99834C3.97365 4.48447 3.78078 4.95075 3.43737 5.29484L0.880034 7.85217C0.810207 7.92204 0.721248 7.96967 0.624383 7.98903C0.527517 8.00839 0.427087 7.99863 0.335763 7.96098C0.24444 7.92332 0.166317 7.85946 0.111253 7.77745C0.0561892 7.69544 0.0266513 7.59895 0.0263672 7.50017Z"
                    fill="#7782F1" />
                </svg>
              </template>
            </q-breadcrumbs>
          </div>

          <basket-product class="basket md-hide lg-hide xl-hide">
            <template v-slot:default="{active}">
              <div class="col-12 q-pl-lg discount-panel" v-if="active">
                <right-payment-panel :order-summary="false"
                                     :products="products"
                                     :provided="false"
                                     :discount="false"
                />
                <jewellery-clup-panel/>
              </div>
            </template>
          </basket-product>

          <info-pay-and-product schema="2"
                                schema-size="4"
                                :reserved-time="true"
          />
          <slot></slot>
        </div>
        <div class="row col-3 col-sm-11 col-md-4 col-xl-3 q-my-lg q-pl-lg relative-position sm-hide bg-second xs-hide"
             style="margin-top:60px;">
          <div class="col-12 q-pl-lg discount-panel">
            <right-payment-panel :order-summary="false"
                                 :products="products"
                                 :provided="false"
                                 :discount="false"
            />
            <slot name="right"></slot>
          </div>
        </div>
        <div class="col-xs-12 lg-hide xl-hide">
          <slot name="default-right-mobile"></slot>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";

import InfoPayAndProduct from "components/InfoPayAndProduct.vue";
import RightPaymentPanel from "components/DiscountAndTotalPanel.vue";

import nikeFirst from "assets/rightimgfirst.png";
import nikeSencond from "assets/rightimgsecond.png";
import nikeThird from "assets/FourtTemp/nike.png";
import BasketProduct from "components/BasketProduct.vue";
import JewelleryClupPanel from "components/JewelleryClupPanel.vue";
import HeaderPage from "components/HeaderPage.vue";

export default defineComponent({

  components: { HeaderPage, JewelleryClupPanel, BasketProduct, InfoPayAndProduct, RightPaymentPanel },


  setup() {
    const leftDrawerOpen = ref(false);
    const stepper = ref({});
    const products = reactive([nikeThird, nikeFirst, nikeSencond]);

    return {
      products,
      stepper,
      model: ref(null),
      step: ref(1),
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

.bg-second:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 1000%;
  top: 0px;
  left: 0px;
  background-color: rgb(235, 236, 243, 30%);
}

.discount-panel {
  position: relative;
  z-index: 20;
}

.basket {
  .discount-panel {
    background-color: rgba(239, 240, 245, 0.3);
    border-radius: 20px;
    margin-top: 20px;
    padding: 30px;
  }
}
</style>

