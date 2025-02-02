<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref
import opening from './opening.vue';
import { VBottomNavigation } from 'vuetify/lib/components/index.mjs';

// Define reactive state for animation
const isMounted = ref(false);
const active = ref(null)

// Trigger animation after component is mounted
onMounted(() => {
    isMounted.value = true;
});
</script>

<template>
    <VContainer fluid class="d-flex align-center justify-center">

        <VCard class="phone-container mt-6">

            <opening />
            <!-- Container for btm-nav with width 300px -->

        </VCard>
    </VContainer>

</template>

<style>
.phone-container {
    height: 95vh !important;
    min-width: 500px !important;
    background-size: cover;
    /* Ensure the image covers the container */
    background-position: center;
    /* Center the image */
    position: relative;
    /* Make the container a positioning context */
    overflow: hidden;
}
</style>