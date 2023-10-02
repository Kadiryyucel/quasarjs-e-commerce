<template>
  <div class="row justify-center q-py-lg">
    <div class="row justify-center q-py-lg">
      <div class="row justify-center col-5 q-pr-md">
        <div class="row q-py-lg column col-12 items-center justify-center q-gutter-y-sm q-py-lg">
          <slot></slot>
        </div>
        <q-card class="row no-wrap q-pa-lg">
          <div class="q-pr-lg q-pa-lg q-gutter-y-md row justify-center">
            <div class="row justify-between col-12">
              <div class="row column col-6">
                <span>Name:</span>
                <span>Oleo Bone</span>
              </div>

              <div class="col-2"/>

              <div class="row column col-4">
                <span>Email:</span>
                <span>oleo_bone@gmail.com</span>
              </div>
            </div>

            <div class="row justify-between col-12">
              <div class="row-inline column col-6">
                <span>Shipping Address:</span>
                <span class="wrap-text">4140 Parker Rd. Allentown, New Mexico 31134</span>
              </div>

              <div class="col-2"/>

              <div class="row column col-4">
                <span>Billing Address:</span>
                <span>Same as shipping</span>
              </div>
            </div>


            <div class="row justify-between col-12">
              <div class="row column col-6">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div class="col-2"/>

              <div class="row column col-4">
                <span>Payment Method:</span>
                <span>Credit Card</span>
              </div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-4 q-pl-md">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

