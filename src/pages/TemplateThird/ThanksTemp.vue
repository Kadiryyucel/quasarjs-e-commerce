<template>
  <div class="row justify-center thanks-third">
      <div class="row justify-center q-pt-lg wrapper">
        <div class="row justify-center">
          <q-card class="row justify-center col-xs-12 col-md-7 q-pr-md-md q-pb-lg">
            <basket-product class="basket md-hide lg-hide xl-hide col-11  q-py-xs-lg">
              <template v-slot:default="{active}">
                <div class="col-12 q-pt-md discount-panel" v-if="active">
                  <right-payment-panel class="payment-panel" />
                </div>
              </template>
            </basket-product>

            <div class="row q-py-lg column col-12 items-center justify-center q-gutter-y-sm q-py-lg">
              <div class="row justify-center items-center" style="width:100%">
                <div class="col-4">
                  <q-img :src="ThaksImg"></q-img>
                </div>

                <div class="row justify-center items-center col-12">
                  <div class="row col-12 justify-center">
                    <div class="text-h4 col-8 q-pt-md text-center">Thank you for your order</div>
                    <div class="col-8 text-center"><p class="text-center">Your order is confirmed</p></div>
                  </div>


                  <diV class="row justify-center q-pb-lg col-xs-11 col-md-4">
                    <q-btn unelevated color="primary" class="row justify-center align-items-center col-11">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15.8333 9.16683H7.5L10.2417 6.42517C10.3198 6.3477 10.3818 6.25553 10.4241 6.15398C10.4664 6.05244 10.4882 5.94351 10.4882 5.8335C10.4882 5.72349 10.4664 5.61457 10.4241 5.51302C10.3818 5.41147 10.3198 5.31931 10.2417 5.24184C10.0855 5.08663 9.87432 4.99951 9.65417 4.99951C9.43401 4.99951 9.2228 5.08663 9.06667 5.24184L5.49167 8.82517C5.17868 9.13629 5.00186 9.55885 5 10.0002C5.00406 10.4386 5.1807 10.8578 5.49167 11.1668L9.06667 14.7502C9.14437 14.8273 9.2365 14.8884 9.33781 14.9299C9.43912 14.9715 9.54762 14.9927 9.65711 14.9923C9.76661 14.9919 9.87496 14.97 9.97597 14.9277C10.077 14.8854 10.1687 14.8237 10.2458 14.746C10.323 14.6683 10.3841 14.5762 10.4256 14.4749C10.4672 14.3735 10.4883 14.265 10.488 14.1555C10.4876 14.0461 10.4656 13.9377 10.4234 13.8367C10.3811 13.7357 10.3194 13.644 10.2417 13.5668L7.5 10.8335H15.8333C16.0543 10.8335 16.2663 10.7457 16.4226 10.5894C16.5789 10.4331 16.6667 10.2212 16.6667 10.0002C16.6667 9.77915 16.5789 9.56719 16.4226 9.41091C16.2663 9.25463 16.0543 9.16683 15.8333 9.16683Z"
                          fill="white" />
                      </svg>
                      <span class="q-pl-sm">Back to Shop</span>
                    </q-btn>
                  </diV>
                </div>
              </div>
            </div>
            <div class="receipt justify-center col-10">
              <div v-for="(item,index) in rows" :key="index"
                   :class="{['border-top']:index!=0}"
                   class="row content-wrapper justify-center">
                <span class="col-4 text-left">{{ item.name }}</span>
                <span class="col-8">{{ item.value }}</span>
              </div>
            </div>
          </q-card>

          <div class="col-5 q-pl-md xs-hide sm-hide">
            <right-payment-panel
              :title="true"
              :discount="false"
              :provided="false" />
            <pay-methods-select />
          </div>
        </div>
      </div>
      <pay-methods-select
        title="Secure SSL Encryption & Guaranteed Safe Checkout"
        class="q-mb-lg col-11 md-hide lg-hide xl-hide"/>
    </div>
</template>

<script>

import { defineComponent } from "vue";

import ThaksImg from "../../assets/SecondTemp/thanksImg.png";

import RightPaymentPanel from "components/DiscountAndTotalPanel.vue";
import PayMethodsSelect from "components/PayMethodsSelect.vue";
import BasketProduct from "components/BasketProduct.vue";


const rows = [
  {
    name: "Name:",
    value: "Oleo Bone"
  },
  {
    name: "Email:",
    value: "Oleo Bone"
  },
  {
    name: "Ship To:",
    value: "4140 Parker Rd. Allentown, New Mexico 31134"
  },
  {
    name: "Bill To:",
    value: "4140 Parker Rd. Allentown, New Mexico 31134"
  },
  {
    name: "Payment:",
    value: "Credit Card"
  }
];

export default defineComponent({
  components: { BasketProduct, PayMethodsSelect, RightPaymentPanel },

  setup() {
    return {
      rows,
      ThaksImg
    };
  }
});
</script>

<style lang="scss">
.thanks-third {
  >div{
    position: relative;
    z-index: 99;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left:0px;
    background-color: #D6D8EA;
    z-index: 0;
  }

  .wrapper {
    border-radius: 16px;
    margin: 40px 24px 32px 24px;
  }

  .receipt {
    background-color: rgb(239, 240, 245, 0.4);
    padding: 4px 16px;
    border-radius: 16px !important;
    border: none;
    margin-bottom: 20px;
  }

  .border-top {
    border-top: 1px solid #D6D8EA;
  }

  .content-wrapper {
    padding: 12px 0px;
  }

  .q-card {
    border-radius: 16px;
    box-shadow: none !important;
  }

  .q-btn{
    padding: 16px 32px;
    border-radius: 16px;
    background-color: #000034 !important;
  }

  .right-payment-panel{
    background-color: white;
    padding: 0px 32px 32px 32px;
    border-radius: 16px;
  }
  .q-badge{
    background-color: #4B4E68 !important;
  }
}
</style>
