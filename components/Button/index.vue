<template>
  <v-app>
    <v-btn @click="onClick">
      {{ label }}
    </v-btn>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: String,
  },
  name: 'Sample',
  setup() {
    const onClick = () => {
      console.log('clicked')
    }
    return { onClick }
  },
})
</script>