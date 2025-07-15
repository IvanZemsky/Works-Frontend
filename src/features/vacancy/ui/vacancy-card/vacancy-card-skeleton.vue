<template>
   <ui-card>
      <ui-spacing vertical>
         <ui-spacing class="skeleton-top-line" align="center" fill>
            <ui-skeleton />
            <ui-skeleton variant="disc" size="sm" />
            <ui-skeleton variant="disc" size="sm" />
         </ui-spacing>
         <ui-spacing class="skeleton-center-line" align="center" gap="sm" fill>
            <ui-skeleton size="md" />
            <ui-skeleton size="lg" />
            <ui-skeleton size="lg" />
            <ui-skeleton size="lg" />
         </ui-spacing>
         <ui-spacing class="skeleton-small-lines" vertical gap="sm" fill>
            <ui-skeleton size="sm" />
            <ui-skeleton size="sm" />
            <ui-skeleton size="sm" />
            <ui-skeleton size="sm" />
            <ui-skeleton size="sm" />
            <ui-skeleton size="sm" />
            <ui-skeleton size="sm" />
         </ui-spacing>
         <ui-spacing class="skeleton-footer-lines" gap="sm" fill>
            <ui-skeleton />
            <ui-skeleton />
         </ui-spacing>
      </ui-spacing>
   </ui-card>
</template>

<style scoped>
.skeleton-top-line div:first-child {
   flex-grow: 1;
}
.skeleton-center-line div:first-child {
   width: 30%;
   flex-shrink: 0;
}
.skeleton-center-line div:not(:first-child) {
   width: 15%;
}
.skeleton-small-lines div:nth-child(1), .skeleton-small-lines div:nth-child(2) {
   width: 10%;
}
.skeleton-footer-lines {
   width: 50%;
}
.skeleton-footer-lines .ui-skeleton{
   height: 2rem;
}
</style>