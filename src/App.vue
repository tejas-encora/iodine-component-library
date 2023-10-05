<template>
  <v-app>
    <v-main>      
      <VTextInput/>
      <VButton />
      <p>&nbsp</p>
      <VDatePick />
      <p>&nbsp</p>
      <NonVuetify />

    </v-main>
  </v-app>
</template>

<script>
import VButton from './components/VButton.vue'
import VDatePick from './components/VDatePick.vue'
import NonVuetify from './components/NonVuetify.vue'
import VTextInput from './components/VTextInput.vue'
export default {
  name: 'App',

  components: {
    VButton,
    VDatePick,
    NonVuetify,
    VTextInput
  }
}
</script>
