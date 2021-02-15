<template>
  <div>
    <p>xxxxxxxxxxx ParentWithSlots' content before slot xxxxxxxxxxx</p>
    <slot>Default content in case none is provided</slot>
    <p>xxxxxxxxxxx ParentWithSlots' content after slot xxxxxxxxxxx</p>
  </div>
</template>

<script>
export default {
  name: 'ParentWithSlots',
}
</script>
