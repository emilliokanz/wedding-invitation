<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import Frame from '@/layout/Frame.vue'
import boxImage from '@/assets/box.svg'
import thanks from '@/assets/thanks.png'
// Define reactive state for animation
const isMounted = ref(false);

const emits = defineEmits(['isOpen'])

const openInvitation = () => {
    emits('isOpen')
}

// Trigger animation after component is mounted
onMounted(() => {
    isMounted.value = true;
});
</script>
<template>
    <Frame>
        <VContainer style="margin-top: 35vh;" class="d-flex flex-column align-center justify-center text-center" fluid>

            <img width="300px" class="box-image" :src="boxImage" alt="topright" :class="{ 'fade-in': isMounted }" />
            <img width="300px" :src="thanks" alt="topright" class="name-text" :class="{ 'fade-in': isMounted }" />
            <div class="d-flex flex-column intro-text" style="max-width: 250px;" :class="{ 'fade-in': isMounted }">
                <span class="">Dengan penuh rasa syukur dan bahagia, kami mengucapkan terima kasih atas doa, kasih, dan
                    kehadiran Anda dalam momen istimewa kami. Semoga kebahagiaan yang kami rasakan selalu
                    menyertai Anda. Sampai jumpa di hari bahagia kami! </span>
            </div>


        </VContainer>
    </Frame>
</template>

<style scoped>
.name-text {
    position: absolute;
    margin-top: 35vh;
}

.box-image {
    position: absolute;
}


.fade-in {
    animation: fadeInMove 1s ease-in-out forwards;
}

@keyframes fadeInMove {
    from {
        opacity: 0;
        transform: translate(0, 50px);
        /* Initial position for top-right image */
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
        /* Move to final position */
    }
}
</style>