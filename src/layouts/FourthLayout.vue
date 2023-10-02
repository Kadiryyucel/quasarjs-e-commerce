<template>
  <q-layout view="lHh Lpr lFf" class="fourth">
    <header-page class="col-12 col-md-10 q-pl-sm"/>
    <div class="q-pa-md" style="margin-top:80px">
      <div class="row justify-center q-gutter-x-md">
        <q-card class="col-6 col-xs-12 col-md-6 q-gutter-x-xs q-gutter-y-md q-pa-lg left">

          <div class="text-h4 head-title q-mt-lg">Checkout</div>
          <q-card class="row q-mt-none">
            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              style="border:none !important;"
              animated
            >
              <q-step
                :name="1"
                title="Information"
                icon="counter-1"
                :done="step > 1"
              >
                <span></span>
              </q-step>

              <q-step
                :name="1"
                title="Payment"
                icon="counter-2"
                :done="step > 1"
              >
                <span></span>
              </q-step>
            </q-stepper>
          </q-card>

          <basket-product class="basket md-hide lg-hide xl-hide">
            <template v-slot:default="{active}">
              <div class="col-12 q-pt-md discount-panel" v-if="active">
                <right-payment-panel :products="products" class="payment-panel" :badge="false" />
              </div>
            </template>
          </basket-product>

          <info-pay-and-product text-content="column" />
          <slot></slot>
        </q-card>
        <div class="col-4 xs-hide sm-hide">
          <right-payment-panel :order-summary="true" :products="products" />
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";

import InfoPayAndProduct from "components/InfoPayAndProduct.vue";
import RightPaymentPanel from "components/DiscountAndTotalPanel.vue";


import nikeFirst from "assets/rightimgfirst.png";
import nikeSencond from "assets/rightimgsecond.png";
import nikeThird from "assets/FourtTemp/nike.png";
import BasketProduct from "components/BasketProduct.vue";
import HeaderPage from "components/HeaderPage.vue";

export default defineComponent({

  components: { HeaderPage, BasketProduct, InfoPayAndProduct, RightPaymentPanel },


  setup() {
    const leftDrawerOpen = ref(false);
    const stepper = ref({});
    const products = reactive([nikeThird, nikeFirst, nikeSencond]);

    onMounted(() => {
      stepper.value.$el.children[0].children[0].style.padding = "8px 24px 8px 0px";
      stepper.value.$el.children[0].style.border = "none";
      stepper.value.$el.children[1].style.display = "none";
    });

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

.fourth {

  .text-primary {
    color: #84849A !important;
  }

  .life-time {
    background-color: #F1F3F6;
    border-radius: 16px;
  }

  .q-field--float .q-field__label {
    transform: translateY(-120%) translateX(-40px) scale(0.75);
    background: white;
    color: #84849A;
    z-index: 9;
  }

  input {
    color: #84849A;
  }

  .q-placeholder {
    padding-bottom: 20px;
  }

  .q-field__control {
    border-radius: 16px;
    color: #D6D8EA;
  }

  .q-field__prepend {
    margin-left: 20px;
  }

  .q-field__label {
    padding-left: 12px;
  }

  .pay-method-panel {
    padding: 24px 0px 0px 0px;
    margin-top: 0px;

    .text-h5 {
      padding: 20px 0 10px 0;
    }

    .q-field__prepend {
      padding-right: 12px !important;
    }

    .q-field__control {
      background-color: #F1F3F6;

      &:before {
        border: none;
      }
    }

  }

  .shipping-adress {
    padding: 0px;
    margin-top: 0px;

    .q-field__prepend {
      padding-right: 12px !important;
    }

    .q-field__append {
      color: #979AB8;
    }

    .q-field__control {
      background-color: #F1F3F6;

      &:before {
        border: none;
      }
    }

  }

  .shipping-method {
    .q-card {
      border: none;
      padding: 0px;
      margin: 0px;
    }
  }

  .payment-method {
    .q-card {
      border: none;

      > div {
        padding: 0px;
      }
    }

    p {
      color: #84849A;
    }
  }

  .pay-methods {
    border-radius: 16px;
  }

  .pay-method-panel {
    .q-card {
      border: none;

      div {
        padding: 0;
      }
    }
  }

  .shipping-details {
    .q-card {
      border: none;
      padding: 0px;
      margin: 0px;
      padding: 0px;

      > div {
        padding: 0px;
      }
    }

    .q-separator {
      display: none;
    }
  }

  .pay-methods-select {
    .q-card {
      border-radius: 16px;
    }

    svg {
      width: 15px;
      height: 18px;
    }
  }

  .right-payment-panel {
    background-color: #F5F6FE;
    padding: 20px;

    .order-summary {
      background-color: #F5F6FE;
      color: #4B4E68;
    }

    .discount-code {
      .q-field__control:before {
        border: none;
        background-color: white;
        border-radius: 16px 0 0 16px;
      }

      padding: 0px;
    }

    .apply-btn {
      border: 6px solid white;
    }

    .discount {
      position: relative;
      z-index: 30;

      .q-field:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        border-radius: 16px;
        background-color: white;
        z-index: 0;
      }
      .q-field__inner{
        z-index: 99;
      }
    }

    .total > div {
      box-sizing: border-box;
    }
  }

  .q-radio__inner {
    margin-left: -10px;
    color: #4B4E68;
  }

  .q-checkbox__bg {
    color: #4B4E68;
  }

  .provided, .jewellery-clup {
    border-radius: 16px !important;
    box-shadow: 0px 10px 30px 0px rgba(22, 8, 49, 0.05) !important;
  }

  .q-btn {
    border-radius: 16px;
    background-color: #000034 !important;
  }

  .left {
    box-shadow: none;
  }

  .discount-panel {
    .payment-panel .right-payment-panel {
      background-color: #EFF6FE !important;
      border-radius: 16px;

      .apply-btn {
        background-color: #000034 !important;
      }
    }
  }

}

</style>
