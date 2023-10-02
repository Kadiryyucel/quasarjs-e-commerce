<template>
  <div>
    <main-layout class="second">
      <div class="row">

        <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          hide-header
          hide-bottom
          flat
          bordered
          class="q-pa-lg col-12 table-pay"
        >
        </q-table>


        <pay-method-panel :credit-method="false" class="q-pt-md"/>

        <div class="q-gutter-y-md">
          <shipping-details explanation="Select the address that matches your card or payment method."/>
        </div>

        <q-btn unelevated color="primary" class="col-xs-12 col-sm-6 q-mt-lg order-btn">
          <div class="row justify-center items-center">
            <div class="q-pr-lg">Validate the order</div>
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.9997 5.00013C11.9956 4.56171 11.819 4.14255 11.508 3.83347L7.93301 0.25014C7.77687 0.0949307 7.56566 0.0078125 7.34551 0.0078125C7.12535 0.0078125 6.91414 0.0949307 6.75801 0.25014C6.6799 0.327609 6.61791 0.419776 6.5756 0.521325C6.53329 0.622875 6.51151 0.731796 6.51151 0.841806C6.51151 0.951816 6.53329 1.06074 6.5756 1.16229C6.61791 1.26383 6.6799 1.356 6.75801 1.43347L9.49967 4.1668H1.16634C0.945327 4.1668 0.733366 4.2546 0.577086 4.41088C0.420805 4.56716 0.333008 4.77912 0.333008 5.00013C0.333008 5.22115 0.420805 5.43311 0.577086 5.58939C0.733366 5.74567 0.945327 5.83347 1.16634 5.83347H9.49967L6.75801 8.57513C6.60109 8.73095 6.51249 8.94271 6.51171 9.16385C6.51093 9.38499 6.59803 9.59738 6.75384 9.7543C6.90966 9.91122 7.12142 9.99981 7.34256 10.0006C7.5637 10.0014 7.77609 9.91428 7.93301 9.75846L11.508 6.17513C11.821 5.86401 11.9978 5.44145 11.9997 5.00013V5.00013Z"
                fill="white" />
            </svg>
          </div>
        </q-btn>
      </div>

      <template v-slot:right-panel>
        <jawellery-panel />
      </template>
    </main-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import MainLayout from "layouts/SecondLayout.vue";
import ShippingDetails from "components/ShippingDetails.vue";
import JawelleryPanel from "components/JewelleryClupPanel.vue";
import PayMethodPanel from "components/PayMethodPanel.vue";


const columns = [
  {
    name: "name",
    required: true,
    align: "left",
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: "value", align: "left", field: "value", sortable: true }
];

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
    name: "Shipping Method:",
    value: "Free Shipping  €0.00"
  }
];
export default defineComponent({

  components: { PayMethodPanel, ShippingDetails, JawelleryPanel, MainLayout },

  setup() {

    return {
      rows,
      columns,
      model: ref(null),
      val: ref(false),
      options: [
        "Google", "Facebook", "Twitter", "Apple", "Oracle"
      ]
    };
  }
});

</script>

<style lang="scss">
.second {
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
      padding: 12px 20px;
      border-radius: 16px;
      border: 1px solid #D6D8EE;
      background-color: rgb(239, 246, 254, 30%);
    }
  }

  .shipping-details {
    .q-card {
      padding: 12px 20px !important;
      border-radius: 16px !important;
      border: 1px solid #D6D8EE !important;
      background-color: rgb(239, 246, 254, 30%) !important;
      .q-field__control{
        background-color: white;
      }
      &:nth-child(even){
        margin-bottom: 8px !important;
      }
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
      border-radius: 32px;
    }

    svg {
      width: 15px;
      height: 18px;
    }
  }

  .right-payment-panel .total > div {
    border-top: 1px solid #D6D8EA;
    box-sizing: border-box;
  }

  .q-radio__inner {
    margin-left: -10px;
    color: #7782F1;
  }

  .q-checkbox__bg {
    color: #7782F1;
  }

  .q-badge {
    background: #7782F1 !important;
  }

  .right-payment-panel {
    background-color: #EFF6FE;
    padding: 38px 30px;
    border-radius: 16px;

    .q-field__control {
      border: none;
      background-color: white;

      &:before {
        border: none;
      }
    }

    + div {
      border-radius: 16px;
      border: 1px solid #DADDF5;
      background-color: rgb(239, 246, 254, 20%);
    }
  }

  .add {
    padding: 4px 31px;
  }

  .pay-method-panel .q-card{
    .q-field__control{
      background-color: white;
    }
    border-radius: 16px;
    background-color: rgba(239, 240, 245, 0.3);
    border: 1px solid #D6D8EE;
  }

  .table-pay,.life-time,.jewellery-clup{
    border-radius: 16px;
  }
  .q-btn{
    border-radius: 16px;
  }
}
</style>
