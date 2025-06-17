<script setup>
import { defineAsyncComponent } from "vue";

const AppConfirmDialog = defineAsyncComponent(() =>
    import("@/Components/App/AppConfirmDialog.vue")
);
const AppToast = defineAsyncComponent(() =>
    import("@/Components/App/AppToast.vue")
);
const DynamicDialog = defineAsyncComponent(() =>
    import("primevue/dynamicdialog")
);
</script>

<template>
    <slot />

    <AppToast />
    <AppConfirmDialog />
    <DynamicDialog />
</template>
