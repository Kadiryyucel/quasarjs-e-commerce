<template>
  <div class="row column q-gutter-y-md info-pay-product">

    <q-card flat bordered class="row my-card q-pa-md items-center reserved-time" v-if="reservedTime">
      <div class="col-12"> 🔥 Your cart is reserved for <b>10:00</b> minutes</div>
      <div style="width: 150px" class="q-pt-md">
        <div class="row col-12 justify-between items-center time">
          <div>00</div>
          <span>:</span>
          <div>09</div>
          <span>:</span>
          <div>39</div>
        </div>
      </div>
    </q-card>

    <q-card flat bordered class="my-card q-pa-md life-time" :style="{order:values.orderInfo}" v-if="!reservedTime">
      <div class="row" :style="{flexDirection:textContent}">
        <div class="col-xs-12 col-sm-9 col-lg-9 col-xl-9">
          <q-card-section>
            <div class="text-h6 q-my-none">Lifetime Warranty🔥</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Add a lifetime warranty & enjoy peace of mind for life with your dream collections order for just
            $4.99
          </q-card-section>
        </div>

        <q-btn unelevated no-caps color="primary"
               style="word-break: break-word"
               class="row q-mx-md add col-xs-6 col-sm-2 col-md-3 col-lg-4 col-xl-2"
               :class="addClassToBtn"
               label="Add-$4.99" />
      </div>
    </q-card>

    <q-card flat bordered class="row my-card pay-methods q-pa-md" :style="{order:values.orderPay}">
      <div class="text-h5 col-12">Express Checkout</div>

      <div class="col-xs-6 col-md-4 q-pt-md"
           :class="{[`col-${schemaSize}`]:!!schemaSize,'col-sm-3':schema == '2' ? true:false,...payMethodsColumn(i)}"
           v-for="(pic,i) in payItems" :key="i">
        <q-img :src="pic" class="pay-methods-img"></q-img>
      </div>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

import googlePay from "../assets/GooglePay.png";
import payPal from "../assets/Paypal.png";
import shopPay from "../assets/ShopPay.png";

import shopPaySecondTemp from "../assets/SecondTemp/shopPay.png";
import paypalSecondTemp from "../assets/SecondTemp/paypal.png";
import googlePaySecondTemp from "../assets/SecondTemp/googlePay.png";

export default defineComponent({
  name: "InfoPayAndProduct",

  props: {
    schema: {
      type: String,
      default: "1"
    },
    schemaSize: {
      type: String,
      default: "4"
    },
    textContent: {
      type: String,
      default: "row"
    },
    orderToContainers: {
      type: Array,
      default: () => [1, 2]
    },
    reservedTime: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {

    let addClassToBtn = {
      "self-center": props.textContent == "row" ? true : false,
      "col-2": props.textContent == "row" ? true : false,
      "col-3": props.textContent == "row" ? false : true
    };

    let orderInfo = ref(1);
    let orderPay = ref(2);

    let values = reactive({ orderInfo: 1, orderPay: 2 });

    Object.keys(values).map((x, i) => values[x] = props.orderToContainers[i]);

    var configPayMethods = [];

    if (props.schema == "1") {
      configPayMethods = [
        shopPay, payPal, googlePay
      ];
    }
    if (props.schema == "2") {
      configPayMethods = [
        shopPaySecondTemp,
        paypalSecondTemp,
        googlePaySecondTemp
      ];
    }
    const payItems = reactive(configPayMethods);

    function payMethodsColumn(i) {
      return {["q-pl-sm-sm"]:i != 0, ["q-pl-xs-sm"]:i == 1, ["q-pl-sm-none"]:i == 2}
    }


    return {
      values,
      payItems,
      orderInfo,
      orderPay,
      payMethodsColumn,
      addClassToBtn
    };
  }
});
</script>

<style lang="scss">
.reserved-time {
  border-radius: 32px;
  border: 0px;
  background-color: rgba(151, 154, 184, 10%);
}

.time div:nth-child(odd) {
  line-height: 32px;
  padding: 0 10px;
  background: white;
  border-radius: 12px;
}

.text-h6 {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
}

.pay-methods-img {
  .q-img__container {
    height: 100%;
    width: 100%;
    position: static;
  }

  & div:first-child {
    background-color: #21BA45 !important;
    padding: 0px !important;
  }
}

</style>
