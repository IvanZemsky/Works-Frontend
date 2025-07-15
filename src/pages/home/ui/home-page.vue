<script setup lang="ts">

</script>

<template>
   <ui-wrapper>
      <ui-spacing fill vertical gap="lg">
         <slot name="search-input" />

         <ui-spacing class="columns" gap="lg">
            <ui-spacing class="actions-column" vertical align="stretch">
               <slot name="action-cards" />
            </ui-spacing>

            <ui-spacing vertical align="stretch">
               <ui-spacing as="header" gap="sm" wrap>
                  <slot name="list-header-buttons" />
               </ui-spacing>

               <slot name="vacancy-list" />
               
            </ui-spacing>
         </ui-spacing>
      </ui-spacing>
   </ui-wrapper>
</template>

<style scoped>
.actions-column {
   position: sticky;
   top: 20px;
   left: 0;
   min-width: 300px;
}
</style>
