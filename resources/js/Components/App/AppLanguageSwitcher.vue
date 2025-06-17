<script setup>
import { computed, ref } from "vue";
import { router, usePage } from "@inertiajs/vue3";
import SelectButton from "primevue/selectbutton";

const page = usePage();
const selectedLocale = ref(page.props.localization.locale);
const isProduction = page.props.isProduction;
const locales = computed(() => [
    { name: "Ja", value: "ja", constant: selectedLocale.value === "ja" },
    { name: "En", value: "en", constant: selectedLocale.value === "en" },
]);

const selectLocale = () => {
    router.get(
        route("localization.setLocale"),
        {
            locale: selectedLocale.value,
        },
        {
            preserveState: false,
            preserveScroll: true,
            onSuccess: () => {
                window.location.reload();
            },
        }
    );
    $i18n.global.locale = selectedLocale.value;
};
</script>

<template>
    <SelectButton
        v-if="!isProduction"
        v-model="selectedLocale"
        :options="locales"
        optionLabel="name"
        optionValue="value"
        optionDisabled="constant"
        size="small"
        @update:modelValue="selectLocale"
    />
</template>
