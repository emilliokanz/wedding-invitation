<template>
    <div class="countdown-container text-h6">
        <div class="countdown-item" v-for="(time, key) in countdown" :key="key">
            <div class="text-h5 font-weight-bold">{{ time }}</div>
            <div style="width: fit-content" class="text-caption">{{ key }}</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

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
        countdown.value.days = 0;
        countdown.value.hours = 0;
        countdown.value.minutes = 0;
        countdown.value.seconds = 0;
    }
};

// Set interval to update countdown every second
onMounted(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
.countdown-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
}

.countdown-item {
    text-align: center;
        color: black;
}
</style>