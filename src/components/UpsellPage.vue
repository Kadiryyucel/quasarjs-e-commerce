<template>
  <div class="row justify-center">
    <div class="col-6 col-xs-11 col-sm-7">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        arrows
        :navigation="false"
        height="300px"
        class=" shadow-1 rounded-borders"
      >
        <q-carousel-slide v-for="(item,i) in imgs"
                          :key="i"
                          :name="i"
                          class="column no-wrap flex-center q-pa-none">
          <q-img :src="item" style="height:100%"></q-img>

        </q-carousel-slide>
      </q-carousel>

      <q-card class="product-values q-pa-md">
        <div class="row justify-center items-center q-pb-sm q-px-sm price">
          <span><small>Price:</small></span>
          <span><b class="text-h6">$50</b></span>
          <span>-80%</span>
        </div>
        <div class="row justify-center quality">
          <div class="row justify-center items-center q-gutter-x-md q-pa-sm col-8">
            <span><small>Quantity:</small></span>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
      </q-card>

      <p style="white-space: pre-line" class="q-my-lg">
        {{ `Quis tincidunt nunc suscipit egestas. Viverra erat cras ullamcorper amet. Risus velit tempus at eu. Eu facilisi
        tempor ipsum orci placerat urna pretium adipiscing dignissim.\nRisus dolor fringilla diam nulla iaculis. Odio nunc nulla malesuada sed vulputate nisl metus sem. Elit pulvinarin auctor ac vitae morbi et. Nulla malesuada consequat arcu semper cras pharetra fermentum. Nisl eu arcu libero
        etiam diam. Scelerisque cum pharetra amet nulla sed nulla mauris tortor. Magna elementum montes eget ullamcorper
        id diam dui pellentesque. Eget mi in tempor amet vitae.` }}
      </p>

      <div class="row justify-center q-pb-lg">
        <pay-methods class="col-xs-12 col-sm-8 q-pr-md"></pay-methods>
        <support-card class="col-xs-12 col-sm-4 q-pl-sm-md q-pt-xs-md q-pt-sm-none"></support-card>
      </div>
      <div class="row justify-center q-py-lg q-gutter-x-md">
        <q-btn no-caps unelevated color="primary" class="row justify-center items-center continue-btn col-5">
          <span class="q-pr-md">Yes, I want</span>
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.8569 8.99986C19.8503 8.28586 19.5626 7.60322 19.0562 7.09986L13.2341 1.26415C12.9798 1.01139 12.6358 0.869507 12.2773 0.869507C11.9188 0.869507 11.5748 1.01139 11.3205 1.26415C11.1933 1.39032 11.0923 1.54042 11.0234 1.7058C10.9545 1.87118 10.9191 2.04857 10.9191 2.22772C10.9191 2.40688 10.9545 2.58427 11.0234 2.74965C11.0923 2.91503 11.1933 3.06513 11.3205 3.19129L15.7855 7.64272H2.21408C1.85414 7.64272 1.50895 7.7857 1.25443 8.04022C0.999918 8.29473 0.856934 8.63992 0.856934 8.99986C0.856934 9.35979 0.999918 9.70499 1.25443 9.9595C1.50895 10.214 1.85414 10.357 2.21408 10.357H15.7855L11.3205 14.822C11.0649 15.0758 10.9207 15.4206 10.9194 15.7808C10.9181 16.1409 11.06 16.4868 11.3137 16.7424C11.5675 16.9979 11.9124 17.1422 12.2725 17.1435C12.6326 17.1447 12.9785 17.0029 13.2341 16.7491L19.0562 10.9134C19.5659 10.4067 19.8539 9.71857 19.8569 8.99986Z"
              fill="white" />
          </svg>
        </q-btn>
      </div>
      <div class="row justify-center q-pb-lg"><span><smal>No, Thanks</smal></span></div>

    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

import PayMethods from "components/PayMethodsSelect.vue";
import SupportCard from "components/SupportCard.vue";

import pic from "../assets/upsellImg.png";


export default defineComponent({
  components: { SupportCard, PayMethods },
  setup() {
    const imgs = reactive([pic, pic, pic]);

    return {
      slide: ref(0),
      imgs

    };
  }
});
</script>
