<template>
  <div>
    <p>Here is the NestedContent component and below is a slot passed to ParentWithSlots' component</p>
    <hr />
    <parent-with-slots>
      <!-- <template #default> // this one can be omit since we do use the default slot here -->
      <p>This content is inserted into the component ParentWithSlots</p>
      <!-- </template> -->
    </parent-with-slots>
  </div>
</template>

<script>
export default {
  name: 'NestedContent',
}
</script>
