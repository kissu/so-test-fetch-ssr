<template>
  <div>
    <p>Here is the NestedContent component and below is a slot passed to ParentWithSlots' component</p>
    <hr />
    <parent-with-slots>
      <p>This content is inserted into the component ParentWithSlots</p>
    </parent-with-slots>
  </div>
</template>

<script>
export default {
  name: 'NestedContent',
}
</script>
