<template>
  <div>
      This message: {{ message }}
  </div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>