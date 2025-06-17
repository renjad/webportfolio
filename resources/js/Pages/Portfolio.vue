<script setup>
import { Head } from "@inertiajs/vue3";
import { ref, onMounted, onUnmounted } from "vue";
import BottomNavbar from "../Components/BottomNavbar.vue";

// Navigation sections
const sections = [
    {
        id: "hero",
        name: "Home",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
        id: "about",
        name: "About",
        icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    },
    {
        id: "services",
        name: "Services",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5l-1-1z",
    },
    {
        id: "portfolio",
        name: "Portfolio",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
        id: "contact",
        name: "Contact",
        icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
];

const activeSection = ref("hero");

// Scroll handling for active section detection
const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                activeSection.value = section.id;
                break;
            }
        }
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

// Smooth scroll to section
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
</script>

<template>
    <Head title="Portfolio" />

    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <!-- Hero Section -->
        <section
            id="hero"
            class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white"
        >
            <div class="text-center px-6">
                <h1 class="text-5xl md:text-7xl font-bold mb-6">
                    Hello, I'm <span class="text-yellow-400">Arren</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-gray-200">
                    Full Stack Developer & UI/UX Designer
                </p>
                <button
                    @click="scrollToSection('about')"
                    class="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
                >
                    Get to know me
                </button>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="min-h-screen flex items-center py-20 px-6">
            <div class="container mx-auto max-w-6xl">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            class="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
                        >
                            About Me
                        </h2>
                        <p
                            class="text-lg text-gray-600 dark:text-gray-300 mb-6"
                        >
                            I'm a passionate full-stack developer with over 5
                            years of experience creating digital solutions that
                            make a difference. I specialize in modern web
                            technologies and love turning complex problems into
                            simple, beautiful designs.
                        </p>
                        <p
                            class="text-lg text-gray-600 dark:text-gray-300 mb-8"
                        >
                            When I'm not coding, you can find me exploring new
                            technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <span
                                class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                >Vue.js</span
                            >
                            <span
                                class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                >Laravel</span
                            >
                            <span
                                class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                                >JavaScript</span
                            >
                            <span
                                class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                                >PHP</span
                            >
                            <span
                                class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                                >Tailwind CSS</span
                            >
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div
                            class="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center"
                        >
                            <div
                                class="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center"
                            >
                                <span class="text-6xl">🚀</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section
            id="services"
            class="min-h-screen flex items-center py-20 px-6 bg-white dark:bg-gray-800"
        >
            <div class="container mx-auto max-w-6xl">
                <h2
                    class="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
                >
                    My Services
                </h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div
                        class="text-center p-8 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <span class="text-white text-2xl">💻</span>
                        </div>
                        <h3
                            class="text-xl font-semibold mb-4 text-gray-800 dark:text-white"
                        >
                            Web Development
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            Custom web applications built with modern
                            technologies and best practices.
                        </p>
                    </div>
                    <div
                        class="text-center p-8 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <span class="text-white text-2xl">🎨</span>
                        </div>
                        <h3
                            class="text-xl font-semibold mb-4 text-gray-800 dark:text-white"
                        >
                            UI/UX Design
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            Beautiful and intuitive user interfaces that provide
                            excellent user experiences.
                        </p>
                    </div>
                    <div
                        class="text-center p-8 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
                    >
                        <div
                            class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <span class="text-white text-2xl">📱</span>
                        </div>
                        <h3
                            class="text-xl font-semibold mb-4 text-gray-800 dark:text-white"
                        >
                            Mobile Apps
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            Cross-platform mobile applications that work
                            seamlessly on all devices.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section
            id="portfolio"
            class="min-h-screen flex items-center py-20 px-6"
        >
            <div class="container mx-auto max-w-6xl">
                <h2
                    class="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
                >
                    My Work
                </h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div
                            class="h-48 bg-gradient-to-br from-blue-400 to-blue-600"
                        ></div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                            >
                                E-commerce Platform
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                A full-featured e-commerce solution built with
                                Laravel and Vue.js.
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                                    >Laravel</span
                                >
                                <span
                                    class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                                    >Vue.js</span
                                >
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div
                            class="h-48 bg-gradient-to-br from-green-400 to-green-600"
                        ></div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                            >
                                Task Management App
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                A collaborative task management application with
                                real-time updates.
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                                    >React</span
                                >
                                <span
                                    class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                                    >Node.js</span
                                >
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div
                            class="h-48 bg-gradient-to-br from-purple-400 to-purple-600"
                        ></div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                            >
                                Design System
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">
                                A comprehensive design system for consistent UI
                                components.
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                                    >Figma</span
                                >
                                <span
                                    class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                                    >Storybook</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section
            id="contact"
            class="min-h-screen flex items-center py-20 px-6 bg-white dark:bg-gray-800"
        >
            <div class="container mx-auto max-w-4xl">
                <h2
                    class="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
                >
                    Get In Touch
                </h2>
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3
                            class="text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
                        >
                            Let's Work Together
                        </h3>
                        <p
                            class="text-lg text-gray-600 dark:text-gray-300 mb-8"
                        >
                            I'm always interested in new opportunities and
                            exciting projects. Whether you have a question or
                            just want to say hi, feel free to reach out!
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div
                                    class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3"
                                >
                                    <span class="text-white text-sm">📧</span>
                                </div>
                                <span class="text-gray-700 dark:text-gray-300"
                                    >hello@arren.dev</span
                                >
                            </div>
                            <div class="flex items-center">
                                <div
                                    class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3"
                                >
                                    <span class="text-white text-sm">📱</span>
                                </div>
                                <span class="text-gray-700 dark:text-gray-300"
                                    >+1 (555) 123-4567</span
                                >
                            </div>
                            <div class="flex items-center">
                                <div
                                    class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3"
                                >
                                    <span class="text-white text-sm">📍</span>
                                </div>
                                <span class="text-gray-700 dark:text-gray-300"
                                    >San Francisco, CA</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
                        <form class="space-y-4">
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >Name</label
                                >
                                <input
                                    type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                />
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >Email</label
                                >
                                <input
                                    type="email"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                />
                            </div>
                            <div>
                                <label
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >Message</label
                                >
                                <textarea
                                    rows="4"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bottom Navigation -->
        <BottomNavbar
            :sections="sections"
            :active-section="activeSection"
            @scroll-to-section="scrollToSection"
        />
    </div>
</template>

<style scoped>
/* Smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}
</style>
