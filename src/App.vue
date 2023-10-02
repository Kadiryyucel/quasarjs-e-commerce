<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>
<style lang="scss">
.head-title {
  font-size: 36px !important;
  font-weight: 700 !important;
  line-height: 46px !important;
}

.text-h5 {
  font-weight: 600;
}

.upsell {
  .q-carousel__next-arrow {
    .q-icon {
      color: #4B4E68;
    }

    > button:before {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 100%;
    }
  }

  .q-carousel__prev-arrow {
    .q-icon {
      color: white;
      border: 1px solid white;
      border-radius: 100%;
    }
  }

  .q-carousel {
    border-radius: 32px;
    margin-bottom: 20px;
  }

  .q-card {
    border-radius: 16px;
    box-shadow: 0 0 30px 0 rgb(22, 8, 49, 5%) !important;
    border: 1px solid #DADDF5;
  }

  .price {
    span:first-child {
      margin-right: 4px;
    }

    span:nth-last-child(1) {
      padding: 0 8px;
      line-height: 1.5;
      border-radius: 6px;
      background-color: #EFF0F5;
    }
  }

  .quality > div {
    span:nth-child(even) {
      background-color: white;
      padding: 4px 12px;
      border-radius: 12px;
    }

    background-color: #EFF0F5;
    border-radius: 16px;
    padding: 12px 20px;
  }

  .pay-methods-select {
    padding: 0px;
  }

  .continue-btn {
    background-color: #050824 !important;
    border-radius: 12px;
  }
}


@media screen and (max-width: 599.99px) and (min-width: 0px) {
  .xs-show {
    display: flex;
  }
  .xs-hide {
    display: none;
  }
  .xs-only-show {
    display: flex;
  }
  .xs-column-discount {
    .discount {
      margin: 0;
      flex-wrap: wrap;
    }

    label {
      width: 100% !important;
      padding: 0 0 12px 0;
    }

    .apply-btn {
      width: 100% !important;
    }
  }
  .discount {
    position: relative;
    z-index: 30;

    .q-field__control:before {
      border-radius: 16px !important;
    }

    .q-field:after {
      content: none !important;
    }

    .q-field__control {
      margin-right: 16px;
    }

    button {
      border: none !important;
    }
  }
}

@media screen and (max-width: 1023.99px) and (min-width: 600px) {
  .sm-show {
    display: flex;
  }
  .sm-hide {
    display: none;
  }
  .sm-only-show {
    display: flex;
  }
  .pay-methods {
    padding: 20px;
  }
  .discount {
    position: relative;
    z-index: 30;

    .q-field__control:before {
      border-radius: 16px !important;
    }

    .q-field:after {
      content: none !important;
    }

    .q-field__control {
      margin-right: 16px;
    }

    button {
      border: none !important;
    }
  }
}

@media screen and (max-width: 1439.99px) and (min-width: 1024px) {
  .md-show {
    display: flex;
  }
  .md-hide {
    display: none;
  }
  .md-only-show {
    display: none;
  }
}

@media screen and (max-width: 1919.99px) and (min-width: 1440px) {
  .lg-show {
    display: flex;
  }
  .lg-hide {
    display: none;
  }
  .lg-only-show {
    display: none;
  }
}

@media screen and (max-width: 1920px) and (min-width: 2500px) {
  .xl-show {
    display: flex;
  }
  .xl-hide {
    display: none;
  }
  .xl-only-show {
    display: none;
  }
}
</style>
