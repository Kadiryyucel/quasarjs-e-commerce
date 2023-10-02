<template>
    <q-header elevated class="row">
      <q-toolbar>
        <div class="row justify-center col-12">
          <div v-bind="$attrs">
            <q-toolbar-title class="row">
              <q-img class="logo" style="width:150px" :src="logo"></q-img>
            </q-toolbar-title>
          </div>
        </div>
      </q-toolbar>
    </q-header>
</template>

<script>
import { defineComponent } from "vue";
import logo from "../assets/logo.png";

export default defineComponent({
  setup() {
    return {
      logo
    };
  }
});
</script>

<style>
.q-layout__section--marginal {
  background-color: #050824;
}

.logo .q-img {
  height: 100%;
  width: 100%;
  position: static;
}
</style>
