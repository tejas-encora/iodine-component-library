<template>
  <v-app>
    <v-main>
      <VButton />
      <VDatePicker />
    </v-main>
  </v-app>
</template>

<script>
import VButton from './components/VButton.vue'
import VDatePicker from './components/VDatePicker.vue'
export default {
  name: 'App',

  components: {
    VButton,
    VDatePicker
  }
}
</script>
