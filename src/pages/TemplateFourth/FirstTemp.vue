<template>
  <div>
    <fourth-layout>
      <div>
        <div class="row col-12 q-gutter-y-lg q-py-sm">

          <pay-method-panel :only-btn="true" :title="false"/>

          <shipping-details class="col-12"/>

          <q-btn unelevated color="primary">
            <div class="row items-center">
              <div class="q-pr-lg">Complete Purchase</div>
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9997 5.00013C11.9956 4.56171 11.819 4.14255 11.508 3.83347L7.93301 0.25014C7.77687 0.0949307 7.56566 0.0078125 7.34551 0.0078125C7.12535 0.0078125 6.91414 0.0949307 6.75801 0.25014C6.6799 0.327609 6.61791 0.419776 6.5756 0.521325C6.53329 0.622875 6.51151 0.731796 6.51151 0.841806C6.51151 0.951816 6.53329 1.06074 6.5756 1.16229C6.61791 1.26383 6.6799 1.356 6.75801 1.43347L9.49967 4.1668H1.16634C0.945327 4.1668 0.733366 4.2546 0.577086 4.41088C0.420805 4.56716 0.333008 4.77912 0.333008 5.00013C0.333008 5.22115 0.420805 5.43311 0.577086 5.58939C0.733366 5.74567 0.945327 5.83347 1.16634 5.83347H9.49967L6.75801 8.57513C6.60109 8.73095 6.51249 8.94271 6.51171 9.16385C6.51093 9.38499 6.59803 9.59738 6.75384 9.7543C6.90966 9.91122 7.12142 9.99981 7.34256 10.0006C7.5637 10.0014 7.77609 9.91428 7.93301 9.75846L11.508 6.17513C11.821 5.86401 11.9978 5.44145 11.9997 5.00013V5.00013Z"
                  fill="white" />
              </svg>
            </div>
          </q-btn>
        </div>
      </div>

      <template v-slot:right>
        <jewellery-clup-panel/>
      </template>
    </fourth-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import FourthLayout from "layouts/FourthLayout.vue";

import PayMethodPanel from "components/PayMethodPanel.vue";
import ShippingDetails from "components/ShippingDetails.vue";
import JewelleryClupPanel from "components/JewelleryClupPanel.vue";


export default defineComponent({

  components: { ShippingDetails, JewelleryClupPanel, PayMethodPanel, FourthLayout },

  setup() {

    return {
      model: ref(null),
      options: [
        "Google", "Facebook", "Twitter", "Apple", "Oracle"
      ],
    };
  }
});

</script>
