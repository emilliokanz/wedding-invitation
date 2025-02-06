<script setup>
import background from '@/assets/background-2.svg';
import akad from '@/views/akad.vue';
import invitation from '@/views/invitation.vue';
import location from '@/views/location.vue';
import opening from '@/views/opening.vue';
import rsvp from '@/views/rsvp.vue';
import thanks from '@/views/thanks.vue';
import virtualGift from '@/views/virtual-gift.vue';
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import { mdiCharity, mdiClockTimeTwo, mdiEmailNewsletter, mdiGiftOutline, mdiMapMarker, mdiMessageTextOutline, mdiTextBoxOutline } from '@mdi/js';

// Define reactive state for animation
const isMounted = ref(false);
const tabs = ref(0);
const isOpen = ref(false);

const tabsHeader = [
    { icon: mdiEmailNewsletter, title: "Opening", component: opening },
    { icon: mdiTextBoxOutline, title: "Invitation", component: invitation },
    { icon: mdiClockTimeTwo, title: "Akad", component: akad },
    { icon: mdiMapMarker, title: "Location", component: location },
    { icon: mdiMessageTextOutline, title: "RSVP", component: rsvp },
    { icon: mdiGiftOutline, title: "Virtual Gift", component: virtualGift },
    { icon: mdiCharity, title: "Thanks", component: thanks }
];

const handleIsOpen = () => {
    tabs.value = 1;
    isOpen.value = true;
};

const handleOpenLocation = () => {
    tabs.value = 3;
};

// Handle swipe left and right
const handleSwipe = (direction) => {
    if (direction === 'down' && tabs.value < tabsHeader.length - 1 && isOpen.value) {
        tabs.value += 1; // Swipe left to go to the next tab
    } else if (direction === 'up' && tabs.value > 0) {
        tabs.value -= 1; // Swipe right to go to the previous tab
    }
};

// Trigger animation after component is mounted
onMounted(() => {
    isMounted.value = true;
});
</script>

<template>
    <div class="page-container">
        <VCard v-touch="{
            left: () => handleSwipe('left'),
            right: () => handleSwipe('right')
        }" :image="background" class="flex-column align-center justify-center text-center phone-container"
            width="100vw">
            <audio ref="audio" loop autoplay>
                <source
                    src="https://dn720307.ca.archive.org/0/items/elvis-presley-cant-help-falling-in-love-audio_202106/elvis-presley-cant-help-falling-in-love-audio.mp3"
                    type="audio/mpeg">
            </audio>
            <!-- Swipe detection using v-touch -->
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
        </VCard>
    </div>
</template>

<style>
.phone-container {
    height: 100vh !important;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
}

.bottom-tabs {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}

.page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
}

.swipe-area {
    width: 100%;
    height: 100%;
    touch-action: pan-y;
    /* Enable vertical scrolling while allowing horizontal swipe */
}
</style>