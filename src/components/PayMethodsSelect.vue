<template>
  <div class="q-pt-lg pay-methods-select">
    <q-card flat bordered class="q-pa-lg">
      <div class="row no-wrap justify-center items-center">
        <div class="q-pr-sm xs-hide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_3879)">
              <path
                d="M19 8V7C19 5.14348 18.2625 3.36301 16.9497 2.05025C15.637 0.737498 13.8565 0 12 0C10.1435 0 8.36301 0.737498 7.05025 2.05025C5.7375 3.36301 5 5.14348 5 7V8H2V21C2 21.7956 2.31607 22.5587 2.87868 23.1213C3.44129 23.6839 4.20435 24 5 24H19C19.7956 24 20.5587 23.6839 21.1213 23.1213C21.6839 22.5587 22 21.7956 22 21V8H19ZM7 7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V8H7V7ZM20 21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V10H20V21Z"
                fill="#84849A" />
              <path d="M13 13.9995H11V17.9995H13V13.9995Z" fill="#84849A" />
            </g>
            <defs>
              <clipPath id="clip0_0_3879">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <span class="text-body2" v-html="title"></span>
      </div>
      <div class="row no-wrap q-gutter-x-md justify-center">
        <div v-for="(method,i) in payMethods" :key="i" class="col-1">
          <q-img :src="method"></q-img>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>

import { defineComponent, reactive } from "vue";

import masterCard from "../assets/masterCard.png";
import visaCard from "../assets/visaCard.png";
import paypalCard from "../assets/paypalCard.png";
import amexCard from "../assets/amexCard.png";
import jcbCard from "../assets/jcbCard.png";
import oiCard from "../assets/oiCard.png";


export default defineComponent({

  props:{
    title:{
      type:String,
      default:()=>{
        return `Guaranteed <b>Safe</b> & <b>Secure</b> Checkout`
      }
    }
  },
  setup() {
    let payMethods = reactive([
      masterCard,
      visaCard,
      paypalCard,
      amexCard,
      jcbCard,
      oiCard
    ]);
    return {
      payMethods
    };
  }

});

</script>
