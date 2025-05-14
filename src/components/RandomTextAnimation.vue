<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';

// Props for customization
const props = defineProps({
  words: {
    type: Array,
    default: () => ['Selamat', 'Bahagia', 'Cinta', 'Sayang', 'Kasih', 'Setia', 'Bersama', 'Selamanya', 'Kebahagiaan', 'Pernikahan']
  },
  count: {
    type: Number,
    default: 15
  },
  baseDelay: {
    type: Number,
    default: 100 // ms between each word appearance
  },
  repositionInterval: {
    type: Number,
    default: 5000 // 5 seconds between repositioning
  }
});

// Generate random positions for each word
const textElements = ref([]);
let repositionTimer = null;

// Generate a random position for a text element
const generateRandomPosition = (text, fontSize) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Calculate position to avoid going off-screen (considering text size)
  const maxX = windowWidth - (text.length * fontSize * 0.6);
  const maxY = windowHeight - fontSize;
  
  return {
    x: Math.max(0, Math.floor(Math.random() * maxX)),
    y: Math.max(30, Math.floor(Math.random() * maxY))
  };
};

// Create initial text elements
const createTextElements = () => {
  textElements.value = [];
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Create text elements with random positions and delays
  for (let i = 0; i < props.count; i++) {
    const randomWord = props.words[Math.floor(Math.random() * props.words.length)];
    const fontSize = Math.floor(Math.random() * 6) + 12; // 12px to 18px
    
    const position = generateRandomPosition(randomWord, fontSize);
    const opacity = (Math.random() * 0.5) + 0.2; // 0.2 to 0.7
    const delay = props.baseDelay * i;
    
    textElements.value.push({
      text: randomWord,
      fontSize,
      style: {
        position: 'absolute',
        fontSize: `${fontSize}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: 0, // Start invisible
        color: '#b58e5e',
        fontFamily: 'Great Vibes, cursive',
        fontWeight: '300',
        zIndex: '1',
        transition: 'all 1.5s ease-in-out',
      },
      opacity,
      delay
    });
  }
  
  // Trigger animations with staggered timing
  textElements.value.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = el.opacity;
    }, el.delay);
  });
};

// Reposition text elements
const repositionTexts = () => {
  textElements.value.forEach((el, index) => {
    // Get new random position
    const position = generateRandomPosition(el.text, el.fontSize);
    
    // Create a new word if desired (uncommenting the line below will also change the word)
    // el.text = props.words[Math.floor(Math.random() * props.words.length)];
    
    // Apply fade out transition
    el.style.opacity = 0;
    
    // After fading out, update position and fade back in
    setTimeout(() => {
      el.style.left = `${position.x}px`;
      el.style.top = `${position.y}px`;
      
      // Small delay before fading back in
      setTimeout(() => {
        el.style.opacity = el.opacity;
      }, 1000);
    }, 1000); // Wait for fade-out to complete
  });
};

// Setup interval for repositioning
const setupRepositionInterval = () => {
  if (repositionTimer) clearInterval(repositionTimer);
  repositionTimer = setInterval(repositionTexts, props.repositionInterval);
};

// Handle window resize
const handleResize = () => {
  // Reset positions on window resize
  repositionTexts();
};

// Prepare animation data
onMounted(() => {
  createTextElements();
  setupRepositionInterval();
  window.addEventListener('resize', handleResize);
});

// Clean up on component unmount
onUnmounted(() => {
  if (repositionTimer) clearInterval(repositionTimer);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="random-text-container">
    <div 
      v-for="(element, index) in textElements" 
      :key="index"
      :style="element.style"
      class="text-element"
    >
      {{ element.text }}
    </div>
  </div>
</template>

<style scoped>
.random-text-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* So clicks pass through */
  overflow: hidden;
  z-index: 1;
}

.text-element {
  /* Individual text element styling */
  transition: all 0.8s ease-in-out;
}
</style>