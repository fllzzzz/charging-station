<style lang="scss">

</style>

<template>
  <RouterView
    v-slot="{Component}"
  >
    <component
      :is="Component"
    ></component>
  </RouterView>
</template>

<script setup lang="ts">
import {A} from '@/demo/class1';


new A();
</script>