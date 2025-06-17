<script setup>
import { Button, ConfirmDialog } from "primevue";
</script>

<template>
    <ConfirmDialog group="headless">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div
                class="flex flex-col items-center p-6 bg-surface-0 rounded m-1"
            >
                <div
                    :class="{
                        'bg-gray-500': !message.severity,
                        'bg-green-500': message.severity === 'success',
                        'bg-orange-500': message.severity === 'warn',
                        'bg-sky-500': message.severity === 'info',
                        'bg-red-500': message.severity === 'danger',
                    }"
                    class="rounded-full text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
                >
                    <i
                        :class="`pi ${message.icon ?? 'pi-question'} !text-4xl`"
                    ></i>
                </div>
                <span class="font-bold text-2xl text-center block mb-2 mt-6">{{
                    message.header
                }}</span>
                <p class="mb-0 text-center" v-html="message.message"></p>
                <div class="flex w-full gap-2 mt-6">
                    <Button
                        @click="rejectCallback"
                        :label="message.rejectProps.label"
                        :icon="message.rejectProps.icon"
                        :size="message.rejectProps.size"
                        severity="secondary"
                        outlined
                        fluid
                    />
                    <Button
                        @click="acceptCallback"
                        :label="message.acceptProps.label"
                        :icon="message.acceptProps.icon"
                        :size="message.acceptProps.size"
                        :severity="message.severity ?? 'secondary'"
                        fluid
                    />
                </div>
            </div>
        </template>
    </ConfirmDialog>
</template>
