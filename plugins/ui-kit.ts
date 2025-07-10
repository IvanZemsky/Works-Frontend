import {
   UiButton,
   UiSpacing,
   UiFilePicker,
   UiCard,
   UiInput,
   UiTextarea,
   UiWrapper,
   UiSelect,
   UiSelectOption,
   UiModal,
   UiToast,
   UiTooltip,
   UiAvatar,
   UiChip,
   UiSkeleton
} from "works-ui"

import {UiLink, UiButtonLink} from "@/src/shared/ui"


export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.component("ui-button", UiButton)
   nuxtApp.vueApp.component("ui-spacing", UiSpacing)
   nuxtApp.vueApp.component("ui-file-picker", UiFilePicker)
   nuxtApp.vueApp.component("ui-card", UiCard)
   nuxtApp.vueApp.component("ui-input", UiInput)
   nuxtApp.vueApp.component("ui-textarea", UiTextarea)
   nuxtApp.vueApp.component("ui-wrapper", UiWrapper)
   nuxtApp.vueApp.component("ui-select", UiSelect)
   nuxtApp.vueApp.component("ui-select-option", UiSelectOption)
   nuxtApp.vueApp.component("ui-modal", UiModal)
   nuxtApp.vueApp.component("ui-toast", UiToast)
   nuxtApp.vueApp.component("ui-link", UiLink)
   nuxtApp.vueApp.component("ui-tooltip", UiTooltip)
   nuxtApp.vueApp.component("ui-avatar", UiAvatar)
   nuxtApp.vueApp.component("ui-chip", UiChip)
   nuxtApp.vueApp.component("ui-skeleton", UiSkeleton)
   nuxtApp.vueApp.component("ui-button-link", UiButtonLink)
})