<script setup>
import { ref, computed, nextTick, watch } from "vue";

const props = defineProps({
    sections: {
        type: Array,
        required: true,
    },
    activeSection: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["scroll-to-section"]);

const navbarRef = ref(null);
const circleStyle = ref({});

// Calculate the position of the sliding circle
const updateCirclePosition = async () => {
    await nextTick();

    if (!navbarRef.value) return;

    const activeIndex = props.sections.findIndex(
        (section) => section.id === props.activeSection
    );
    if (activeIndex === -1) return;
    const navItems = navbarRef.value.querySelectorAll(".nav-item");
    if (navItems[activeIndex]) {
        const activeItem = navItems[activeIndex];

        // Calculate position within the navbar - responsive to screen size
        const isMobile = window.innerWidth <= 640;
        const buttonWidth = isMobile ? 36 : 40; // 36px (w-9) on mobile, 40px (w-10) on desktop
        const gap = isMobile ? 6 : 8; // smaller gap on mobile
        const left = activeIndex * (buttonWidth + gap); // (button width + gap) * index

        circleStyle.value = {
            transform: `translateX(${left}px)`,
            opacity: 1,
        };
    }
};

// Handle navigation item click
const handleNavClick = (sectionId) => {
    emit("scroll-to-section", sectionId);
};

// Watch for active section changes
watch(() => props.activeSection, updateCirclePosition, { immediate: true });

// Update circle position on mount and window resize
const handleResize = () => {
    updateCirclePosition();
};

// Lifecycle hooks would typically go here, but in Vue 3 composition API with script setup,
// we use onMounted and onUnmounted from vue
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
    updateCirclePosition();
    window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
});
</script>

<template>
    <nav
        ref="navbarRef"
        class="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full px-3 sm:px-4 py-2 shadow-lg w-auto max-w-fit mx-auto"
    >
        <!-- Sliding Circle Background -->
        <div
            class="absolute -top-4 sm:-top-5 w-9 sm:w-10 h-9 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
            :style="circleStyle"
        ></div>

        <!-- Navigation Items -->
        <div class="flex items-center space-x-1.5 sm:space-x-2 relative z-10">
            <div
                v-for="(section, index) in sections"
                :key="section.id"
                class="relative w-9 sm:w-10 h-9 sm:h-10 transition-all duration-300"
            >
                <!-- Icon (moves up when active) -->
                <button
                    @click="handleNavClick(section.id)"
                    class="nav-item absolute w-9 sm:w-10 h-9 sm:h-10 rounded-full transition-all duration-300 group hover:scale-110 flex items-center justify-center"
                    :class="{
                        'text-white -translate-y-6':
                            activeSection === section.id,
                        'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200':
                            activeSection !== section.id,
                    }"
                    :title="section.name"
                >
                    <svg
                        class="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300"
                        :class="{ 'scale-110': activeSection === section.id }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            :d="section.icon"
                        />
                    </svg>

                    <!-- Tooltip for non-active items -->
                    <div
                        v-if="activeSection !== section.id"
                        class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                    >
                        {{ section.name }}
                        <div
                            class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
                        ></div>
                    </div>
                </button>

                <!-- Active Section Label (slides up when icon moves up) -->
                <div
                    class="absolute inset-0 flex items-center justify-center text-xs sm:text-xs font-medium text-white whitespace-nowrap pointer-events-none transform transition-all duration-300 ease-out"
                    :class="{
                        'translate-y-0 opacity-100':
                            activeSection === section.id,
                        'translate-y-6 opacity-0': activeSection !== section.id,
                    }"
                >
                    {{ section.name }}
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Additional styles for smooth animations */
.nav-item {
    position: relative;
}

/* Glassmorphism effect */
nav {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}

/* Enhanced hover effects */
.nav-item:hover {
    transform: translateY(-1px);
}

/* Active state animation */
.nav-item svg {
    filter: drop-shadow(0 0 0 transparent);
    transition: filter 0.3s ease;
}

.nav-item[data-active="true"] svg {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}
</style>
