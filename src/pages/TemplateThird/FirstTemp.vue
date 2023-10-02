<template>
  <div>
    <third-layout class="third">
      <div>
        <div class="text-h5 q-pt-md">Contact information</div>

        <div class="row col-12 q-gutter-y-lg q-py-sm">
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


          <q-input outlined v-model="text" :dense="dense" class="col-12" label="Phone Number">
            <template v-slot:prepend>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.833 0.833199C10.833 0.612186 10.9208 0.400224 11.0771 0.243944C11.2333 0.0876633 11.4453 -0.000134037 11.6663 -0.000134037C13.8757 0.00229229 15.9939 0.881045 17.5562 2.44332C19.1185 4.0056 19.9972 6.12381 19.9996 8.3332C19.9996 8.55421 19.9118 8.76618 19.7556 8.92246C19.5993 9.07874 19.3873 9.16653 19.1663 9.16653C18.9453 9.16653 18.7333 9.07874 18.577 8.92246C18.4208 8.76618 18.333 8.55421 18.333 8.3332C18.331 6.5657 17.628 4.87116 16.3782 3.62135C15.1283 2.37153 13.4338 1.66852 11.6663 1.66653C11.4453 1.66653 11.2333 1.57874 11.0771 1.42246C10.9208 1.26617 10.833 1.05421 10.833 0.833199ZM11.6663 4.99987C12.5504 4.99987 13.3982 5.35106 14.0233 5.97618C14.6485 6.6013 14.9996 7.44915 14.9996 8.3332C14.9996 8.55421 15.0874 8.76618 15.2437 8.92246C15.4 9.07874 15.612 9.16653 15.833 9.16653C16.054 9.16653 16.266 9.07874 16.4222 8.92246C16.5785 8.76618 16.6663 8.55421 16.6663 8.3332C16.665 7.00752 16.1378 5.73652 15.2004 4.79913C14.263 3.86173 12.992 3.33452 11.6663 3.3332C11.4453 3.3332 11.2333 3.421 11.0771 3.57728C10.9208 3.73356 10.833 3.94552 10.833 4.16653C10.833 4.38755 10.9208 4.59951 11.0771 4.75579C11.2333 4.91207 11.4453 4.99987 11.6663 4.99987ZM19.2438 13.949C19.7267 14.4333 19.9979 15.0893 19.9979 15.7732C19.9979 16.4571 19.7267 17.1131 19.2438 17.5974L18.4855 18.4715C11.6605 25.0057 -4.94783 8.40153 1.48549 1.55487L2.44383 0.721533C2.92863 0.252097 3.57877 -0.00759314 4.25358 -0.001355C4.92839 0.00488313 5.57361 0.276548 6.04966 0.754866C6.07549 0.780699 7.61965 2.78653 7.61965 2.78653C8.07784 3.26789 8.33291 3.90731 8.33182 4.57187C8.33073 5.23643 8.07358 5.87501 7.61382 6.35487L6.64882 7.5682C7.18286 8.86579 7.96804 10.0451 8.95924 11.0383C9.95045 12.0315 11.1281 12.819 12.4246 13.3557L13.6455 12.3849C14.1254 11.9255 14.7639 11.6686 15.4282 11.6677C16.0926 11.6668 16.7318 11.9218 17.213 12.3799C17.213 12.3799 19.218 13.9232 19.2438 13.949ZM18.0971 15.1607C18.0971 15.1607 16.103 13.6265 16.0771 13.6007C15.9055 13.4305 15.6735 13.335 15.4317 13.335C15.19 13.335 14.958 13.4305 14.7863 13.6007C14.7638 13.624 13.083 14.9632 13.083 14.9632C12.9697 15.0534 12.8349 15.1125 12.6919 15.1347C12.5488 15.1569 12.4024 15.1414 12.2671 15.0899C10.5875 14.4645 9.06193 13.4855 7.79368 12.2191C6.52543 10.9527 5.54416 9.42856 4.91632 7.74987C4.86065 7.61275 4.84251 7.46327 4.86374 7.31682C4.88498 7.17036 4.94483 7.0322 5.03716 6.91653C5.03716 6.91653 6.37632 5.23487 6.39882 5.2132C6.56904 5.04152 6.66455 4.80955 6.66455 4.56778C6.66455 4.32602 6.56904 4.09404 6.39882 3.92237C6.37299 3.89737 4.83882 1.90153 4.83882 1.90153C4.66457 1.74529 4.43716 1.66161 4.2032 1.66766C3.96923 1.6737 3.74644 1.769 3.58049 1.93403L2.62216 2.76737C-2.0795 8.4207 12.313 22.0149 17.2671 17.3332L18.0263 16.4582C18.2042 16.2934 18.3111 16.0659 18.3243 15.8238C18.3375 15.5817 18.256 15.3439 18.0971 15.1607Z"
                  fill="#979AB8" />
              </svg>

            </template>
          </q-input>
        </div>
        <div class="row no-wrap items-start q-my-lg">
          <q-checkbox class="q-pr-sm" dense :val="true" :model-value="true" />
          <div> up for exclusive offers and news</div>
        </div>

        <div class="row col-12">
          <div class="text-h5 q-pt-md">Shipping adress</div>
          <shipping-adress />
          <shipping-method class="col-12" />
          <shipping-details class="col-12" explanation="Specify the address for your payment option" />

        </div>
      </div>

      <template v-slot:right-panel>
        <pay-methods-select title="Secure SSL Encryption & Guaranteed Safe Checkout" class="xs-hide sm-hide" />
        <jewellery-panel class="xs-hide sm-hide" />
        <pay-method-panel
          title="All transaction are secured and encryted"
          :more-icon="true"
          :paypal="true"
          :purchase-btn="true"
          :placeholders-scheme="scheme"
          :separator="false"
          class="col-xs-12" />
      </template>
    </third-layout>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";

import ThirdLayout from "layouts/ThirdLayout.vue";
import ShippingDetails from "components/ShippingDetails.vue";
import ShippingMethod from "components/ShippingMethod.vue";
import JewelleryPanel from "components/JewelleryClupPanel.vue";
import PayMethodPanel from "components/PayMethodPanel.vue";
import PayMethodsSelect from "components/PayMethodsSelect.vue";
import ShippingAdress from "components/ShippingAdress.vue";

export default defineComponent({

  components: {
    ShippingAdress,
    PayMethodsSelect,
    PayMethodPanel,
    JewelleryPanel,
    ThirdLayout,
    ShippingMethod,
    ShippingDetails
  },

  setup() {

    let scheme = reactive({
      cardNumber: "Card number",
      name: "Name on the card",
      date: "MM/YY",
      cvv: "CVV"
    });

    return {
      scheme,
      model: ref(null),
      options: [
        "Google", "Facebook", "Twitter", "Apple", "Oracle"
      ]
    };
  }
});

</script>

<style lang="scss">
.third {
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
    border-radius: 16px;
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

    .q-field__prepend {
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

  .pay-method-panel {
    background-color: white;
    margin-top: 24px;
    padding: 20px 20px;
    border-radius: 16px;
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

  .jewellery-clup {
    border-radius: 16px;
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

  .shipping-method, .shipping-details {
    .q-card {
      padding: 12px 20px;
      border-radius: 16px;
      background-color: rgba(239, 240, 245, 0.4);
    }

    .q-card:nth-child(1) {
      margin-bottom: 20px;
    }

    .q-card:nth-child(2) {
      margin-bottom: 20px;
    }
  }

  .pay-method-panel {
    .q-card {
      border: none;
      border-radius: 16px;
      background: rgba(239, 240, 245, 0.4);
    }
  }

  .reserved-title {
    background: #EBECF3;
    border-radius: 16px !important;
  }

  .right-payment-panel {
    background-color: white;
    padding: 12px 24px;
    border-radius: 16px;

    .total {
      padding-bottom: 12px;
    }
  }

  .add{
    padding: 8px 31px !important;
  }

  .q-btn {
    padding: 16px 0;
  }

  .q-btn,.life-time,.left{
    border-radius: 16px;
  }

}
</style>
