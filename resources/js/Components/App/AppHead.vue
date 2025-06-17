<script setup>
import { usePage } from "@inertiajs/vue3";

const { url } = usePage();
const supportedLocales = ["en", "ja"];

const isIdLike = (str) => /^\d+$/.test(str) || /^[A-Z0-9]{6,}$/.test(str);

const transformSegment = (segment) => {
    const i18nKey = segment.replace(/-/g, "_");
    const translation = $t(i18nKey);
    if (translation !== i18nKey) return translation;
    return segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const segments = url
    .split("/")
    .filter(Boolean)
    .filter((_, i, arr) => !(i === 0 && supportedLocales.includes(arr[0])))
    .filter((segment) => !isIdLike(segment));

const pageTitle = [...segments].reverse().map(transformSegment).join(" - ");
</script>

<template>
    <Head :title="pageTitle" />
</template>
