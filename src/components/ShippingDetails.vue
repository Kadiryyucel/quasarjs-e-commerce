<template>
  <div class="row shipping-details">
    <div>
      <div class="text-h5 q-mb-sm q-mt-lg">Billing address</div>
      <p v-if="explanation" class="explanation">{{explanation}}</p>
    </div>

    <q-card flat bordered class="my-card q-mb-lg col-12" v-if="!onlyForm">
      <div class="row justify-between items-center q-pa-sm">
        <q-radio :val="0" v-model="val" label="Same as shipping address" />
      </div>
    </q-card>
    <q-card flat bordered class="my-card q-mb-lg col-12">
      <div class="row justify-between items-center q-pa-sm" v-if="!onlyForm">
        <q-radio :val="1" v-model="val" label="Use a different billing address" />
      </div>

      <q-separator />

     <shipping-adress class="shipping-adress" v-if="val || onlyForm"/>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ShippingAdress from "components/ShippingAdress.vue";


export default defineComponent({
  components: { ShippingAdress },
  props: {
    explanation:{
      type:String,
      default:''
    },
    onlyForm: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const val = ref(0);

    return {
      model: ref(null),
      val,
      options: [
        "Google", "Facebook", "Twitter", "Apple", "Oracle"
      ]
    };
  }
});

</script>

<style scoped>
.explanation{
  color: #84849A;
}
</style>
