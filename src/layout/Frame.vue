<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref
import background from '@/assets/background.jpeg'; // Import the image
import topRight from '@/assets/top-right.svg';
import bottomLeft from '@/assets/bottom-left.svg';

// Define reactive state for animation
const isMounted = ref(false);

// Trigger animation after component is mounted
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <slot></slot>
  <div class="flex justify-center">
    <img width="300px" :src="topRight" alt="topright" class="top-right-image" :class="{ 'fade-in': isMounted }" />
    <img width="300px" :src="bottomLeft" alt="bottomLeft" class="bottom-left-image" :class="{ 'fade-in': isMounted }" />
  </div>
</template>

<style scoped>
.top-right-image {
  position: absolute;
  /* Position the image absolutely within the container */
  top: 0;
  /* Align to the top */
  right: 0;
  /* Align to the right */
  margin-right: -60px;
  margin-top: -40px;
  width: 400px;
  /* Set the width */
  opacity: 0;
  /* Start with 0 opacity */
  transform: translate(50px, 50px);
  /* Initial position offset */
}

.bottom-left-image {
  position: absolute;
  /* Position the image absolutely within the container */
  bottom: 0;
  /* Align to the bottom */
  left: 0;
  /* Align to the left */
  width: 400px;
  /* Set the width */
  margin-left: -20px;
  margin-bottom: 40px;
  opacity: 0;
  /* Start with 0 opacity */
  transform: translate(-50px, -50px);
  /* Initial position offset */
}

/* Fade-in and move animation */
.fade-in {
  animation: fadeInMove 1s ease-in-out forwards;
}

@keyframes fadeInMove {
  from {
    opacity: 0;
    transform: translate(50px, -20px);
    /* Initial position for top-right image */
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
    /* Move to final position */
  }
}

.bottom-left-image.fade-in {
  animation: fadeInMoveBottom 1s ease-in-out forwards;
}

@keyframes fadeInMoveBottom {
  from {
    opacity: 0;
    transform: translate(-50px, 20px);
    /* Initial position for bottom-left image */
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
    /* Move to final position */
  }
}
</style>