<script setup>
import { Wheat } from "lucide-vue-next";

defineProps({
    href: {
        type: String,
        default: "index",
    },
});
</script>

<template>
    <Link :href="route(href)" class="flex items-center gap-2">
        <div class="bg-primary-600 text-white rounded-md p-1.5">
            <Wheat class="size-6" />
        </div>
        <p class="font-bold text-xl text-primary-700">
            {{ $t("rice_market") }}
        </p>
    </Link>
</template>
