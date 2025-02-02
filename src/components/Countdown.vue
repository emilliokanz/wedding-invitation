<template>
    <v-row class="text-h6">
                    <v-col cols="3" v-for="(time, key) in countdown" :key="key">
                        <div class="text-h5 font-weight-bold">{{ time }}</div>
                        <div style="width: fit-content" class="text-caption">{{ key }}</div>
                    </v-col>
                </v-row>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Target date: July 6, 2025
const targetDate = new Date('2025-07-06T00:00:00').getTime();

// Reactive countdown object
const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

// Function to update the countdown
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        countdown.value.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        countdown.value.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countdown.value.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        countdown.value.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    } else {
        // If the countdown is over, set all values to 0
        countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
};

// Start the countdown timer
let timer;
onMounted(() => {
    updateCountdown(); // Initial update
    timer = setInterval(updateCountdown, 1000); // Update every second
});

// Clear the timer when the component is unmounted
onUnmounted(() => {
    clearInterval(timer);
});
</script>

<style scoped>

</style>