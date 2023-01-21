<template>
  <div>
    <v-container>
      <v-btn
        depressed
        :color="color"
        role="button"
      >
        {{ color }}
      </v-btn>
    </v-container>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>