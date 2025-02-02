<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref
import background from '@/assets/background-2.svg'
import opening from './opening.vue';
import akad from './akad.vue'
import { mdiEmailNewsletter, mdiMapMarker, mdiClockTimeTwo } from '@mdi/js';


// Define reactive state for animation
const isMounted = ref(false);
const tabs = ref(0)
const isOpen = ref(false)

const tabsHeader = [{
    icon: mdiEmailNewsletter,
    title: "Opening",
    component: opening
}, {
    icon: mdiClockTimeTwo,
    title: "Akad",
    component: akad
},
{
    icon: mdiMapMarker,
    title: "Location",
    component: opening
},
{
    icon: mdiMapMarker,
    title: "RSVP",
    component: opening
}
]

const handleIsOpen = () => {
    tabs.value = 1
    isOpen.value = true
}

const handleOpenLocation = () => {
    tabs.value = 2
}

// Trigger animation after component is mounted
onMounted(() => {
    isMounted.value = true;
});
</script>

<template>

    <VCard :image="background" class="phone-container" width="100vw">
        <v-tabs v-if="isOpen" style="z-index: 9999; color: white; background-color: #b58e5e; font-weight: bold;"
            class="bottom-tabs" v-model="tabs" grow>
            <v-tab v-for="(tab, index) in tabsHeader" :key="index" :value="index">
                <div class="d-flex flex-column align-center justify-center text-center">
                    <VIcon size="x-large" class="mb-1" :icon="tab.icon"
                        style="font-size: 27px; opacity: 1 !important;" />
                    <span class="font-weight-bold text-none" style="font-size: 12px">{{ tab.title }}</span>
                </div>
            </v-tab>
        </v-tabs>

        <div v-for="(tab, index) in tabsHeader" :key="index" :value="index">
            <component @open-location="handleOpenLocation" @is-open="handleIsOpen" v-if="tabs == index"
                :is="tab.component" />
        </div>
        <!-- Container for btm-nav with width 300px -->
    </VCard>

</template>

<style>
.phone-container {
    height: 100vh !important;
    background-size: cover;
    /* Ensure the image covers the container */
    background-position: center;
    position: relative;
    /* Center the image */
    /* Make the container a positioning context */
    overflow: hidden;
}

.bottom-tabs {
    width: 100%;
    /* Take full width of the VCard */
    position: absolute;
    /* Position absolutely within the VCard */
    bottom: 0;
    /* Align to the bottom */
    left: 0;
    /* Align to the left */
}
</style>