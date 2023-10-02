<template>
  <div>
    <first-layout class="first">
      <div>
        <div class="text-h5 q-pt-md">Contact Information</div>

        <div class="row col-12 q-gutter-y-lg q-py-sm q-mx-md q email">
          <q-input outlined v-model="text" :dense="dense" class="col-12"
                   label="Email Address">
            <template v-slot:prepend>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.8333 0.833008H4.16667C3.062 0.834331 2.00296 1.27374 1.22185 2.05486C0.440735 2.83597 0.00132321 3.89501 0 4.99967L0 14.9997C0.00132321 16.1043 0.440735 17.1634 1.22185 17.9445C2.00296 18.7256 3.062 19.165 4.16667 19.1663H15.8333C16.938 19.165 17.997 18.7256 18.7782 17.9445C19.5593 17.1634 19.9987 16.1043 20 14.9997V4.99967C19.9987 3.89501 19.5593 2.83597 18.7782 2.05486C17.997 1.27374 16.938 0.834331 15.8333 0.833008ZM4.16667 2.49967H15.8333C16.3323 2.50066 16.8196 2.65094 17.2325 2.93118C17.6453 3.21142 17.9649 3.6088 18.15 4.07217L11.7683 10.4547C11.2987 10.9224 10.6628 11.1851 10 11.1851C9.33715 11.1851 8.70131 10.9224 8.23167 10.4547L1.85 4.07217C2.03512 3.6088 2.35468 3.21142 2.76754 2.93118C3.1804 2.65094 3.66768 2.50066 4.16667 2.49967ZM15.8333 17.4997H4.16667C3.50363 17.4997 2.86774 17.2363 2.3989 16.7674C1.93006 16.2986 1.66667 15.6627 1.66667 14.9997V6.24967L7.05333 11.633C7.83552 12.4132 8.89521 12.8514 10 12.8514C11.1048 12.8514 12.1645 12.4132 12.9467 11.633L18.3333 6.24967V14.9997C18.3333 15.6627 18.0699 16.2986 17.6011 16.7674C17.1323 17.2363 16.4964 17.4997 15.8333 17.4997Z"
                  fill="#979AB8" />
              </svg>
            </template>
          </q-input>

          <q-select outlined hide-dropdown-icon v-model="model" :options="options" label="Phone number"
                    class="col-12 q-mt-lg sm-show xs-show md-hide lg-hide xl-hide">
            <template v-slot:prepend>
              <div class="row items-center q-gutter-x-sm phone-prepend">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.33301H0V16.6665H20V3.33301Z" fill="#D80027" />
                  <path d="M20 3.33301H0V7.77734H20V3.33301Z" fill="black" />
                  <path d="M20 12.2217H0V16.666H20V12.2217Z" fill="#FFDA44" />
                </svg>
                <span>+49</span>
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.25838 0.0656921C1.42253 0.065472 1.5851 0.0977595 1.73671 0.160692C1.88832 0.223624 2.02597 0.315955 2.14171 0.432358L8.53588 6.82568C8.72934 7.0192 8.95903 7.1727 9.21183 7.27743C9.46463 7.38217 9.73558 7.43607 10.0092 7.43607C10.2828 7.43607 10.5538 7.38217 10.8066 7.27743C11.0594 7.1727 11.2891 7.0192 11.4825 6.82568L17.8667 0.440691C17.982 0.321304 18.12 0.226076 18.2725 0.160565C18.425 0.0950539 18.589 0.0605715 18.755 0.0591292C18.9209 0.057687 19.0855 0.0893138 19.2392 0.152165C19.3928 0.215016 19.5323 0.307832 19.6497 0.425198C19.7671 0.542564 19.8599 0.682128 19.9227 0.835748C19.9856 0.989369 20.0172 1.15397 20.0158 1.31994C20.0143 1.48592 19.9799 1.64994 19.9143 1.80245C19.8488 1.95495 19.7536 2.09288 19.6342 2.20819L13.25 8.59318C12.39 9.45166 11.2244 9.93381 10.0092 9.93381C8.79401 9.93381 7.62846 9.45166 6.76838 8.59318L0.374213 2.19986C0.199283 2.02504 0.0801409 1.80226 0.0318625 1.55971C-0.016416 1.31716 0.00833916 1.06574 0.102995 0.83726C0.197652 0.608783 0.357955 0.413518 0.56362 0.276174C0.769286 0.13883 1.01107 0.06558 1.25838 0.0656921Z"
                    fill="#D6D8EA" />
                </svg>
              </div>
              <div class="bg-phone-prepend"></div>
            </template>
          </q-select>
        </div>

        <div class="text-h5 q-pt-lg">Shipping Address</div>
        <div class="row col-12 q-gutter-y-lg q-py-sm q-pt-md">

          <shipping-adress/>

          <shipping-method />

          <pay-method-panel
            title="All transaction are secured and encryted"
            class="payment-method"
            :pay-methods="false"
            :separator="false"
          />

          <shipping-details explanation="Specify the address for your payment option" />

          <q-btn unelevated no-caps color="primary" class="col-xs-12 col-sm-12 col-md-6 q-mb-md-lg q-py-sm order-btn">
            <div class="row items-center">
              <div class="q-pr-lg">Complete Order</div>
              <div>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.9997 5.00013C11.9956 4.56171 11.819 4.14255 11.508 3.83347L7.93301 0.25014C7.77687 0.0949307 7.56566 0.0078125 7.34551 0.0078125C7.12535 0.0078125 6.91414 0.0949307 6.75801 0.25014C6.6799 0.327609 6.61791 0.419776 6.5756 0.521325C6.53329 0.622875 6.51151 0.731796 6.51151 0.841806C6.51151 0.951816 6.53329 1.06074 6.5756 1.16229C6.61791 1.26383 6.6799 1.356 6.75801 1.43347L9.49967 4.1668H1.16634C0.945327 4.1668 0.733366 4.2546 0.577086 4.41088C0.420805 4.56716 0.333008 4.77912 0.333008 5.00013C0.333008 5.22115 0.420805 5.43311 0.577086 5.58939C0.733366 5.74567 0.945327 5.83347 1.16634 5.83347H9.49967L6.75801 8.57513C6.60109 8.73095 6.51249 8.94271 6.51171 9.16385C6.51093 9.38499 6.59803 9.59738 6.75384 9.7543C6.90966 9.91122 7.12142 9.99981 7.34256 10.0006C7.5637 10.0014 7.77609 9.91428 7.93301 9.75846L11.508 6.17513C11.821 5.86401 11.9978 5.44145 11.9997 5.00013V5.00013Z"
                    fill="white" />
                </svg>
              </div>
            </div>
          </q-btn>
        </div>
      </div>

      <template v-slot:right>
        <div class="row">
          <pay-methods-select
            class="pay-methods-select col-md-12 sm-hide"
            title="Secure SSL Encryption & Guaranteed Safe Checkout"
          />
          <jewellery-clup-panel />
        </div>
      </template>

      <template v-slot:default-right-mobile>
        <div class="row col-12 q-ma-sm-none md-only-show">
          <pay-methods-select title="Secure SSL Encryption & Guaranteed Safe Checkout" class="pay-methods-select col-12 text-center" />
        </div>
      </template>
    </first-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import PayMethodPanel from "components/PayMethodPanel.vue";
import JewelleryClupPanel from "components/JewelleryClupPanel.vue";

import FirstLayout from "layouts/FirstLayout.vue";
import PayMethodsSelect from "components/PayMethodsSelect.vue";
import ShippingMethod from "components/ShippingMethod.vue";
import ShippingAdress from "components/ShippingAdress.vue";
import ShippingDetails from "components/ShippingDetails.vue";


export default defineComponent({

  components: {
    ShippingDetails,
    ShippingAdress,
    ShippingMethod,
    PayMethodsSelect,
    FirstLayout,
    JewelleryClupPanel,
    PayMethodPanel
  },

  setup() {

    return {
      model: ref(null),
      options: [
        "Google", "Facebook", "Twitter", "Apple", "Oracle"
      ]
    };
  }
});

</script>

<style lang="scss">
.first {
  .text-primary {
    color: #84849A !important;
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
    border-radius: 100px;
    color: #D6D8EA;
  }

  .q-field__prepend {
    margin-left: 20px;
  }

  .q-field__label {
    padding-left: 12px;
  }

  .email {
    margin-right: 0px;
    margin-left: 0px;
  }

  .shipping-adress {
    padding: 0px;
    margin-top: 0px;
    .q-field__prepend{
      padding-right: 12px !important;
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
    border-radius: 32px;
  }

  .shipping-details {
    .q-card {
      border: none;
      padding: 0px;
      margin: 0px;
      padding: 0px;

      >div {
        padding: 0px;
      }
    }

    .q-separator {
      display: none;
    }
  }

  .pay-methods-select {
    .q-card {
      border-radius: 32px;
    }

    svg {
      width: 15px;
      height: 18px;
    }
  }

  .jewellery-clup {
    border-radius: 32px;
  }

  .right-payment-panel .total > div {
    border-top: 1px solid #D6D8EA;
    box-sizing: border-box;
  }

  .q-radio__inner {
    margin-left: -10px;
    color: #4B4E68;
  }

  .q-checkbox__bg {
    color: #4B4E68;
  }

  .q-badge {
    background: #4B4E68 !important;
  }

  .order-btn {
    border-radius: 100px;
    background-color: #050824 !important;
  }

  .phone-prepend {
    position: relative;
    z-index: 10;
  }

  .bg-phone-prepend {
    position: absolute;
    top: 0px;
    left: -2px;
    width: 140px;
    height: 100%;
    background-color: rgb(239, 240, 245);
    border-radius: 32px 0 0 32px;
    z-index: 0;
  }
}
</style>
