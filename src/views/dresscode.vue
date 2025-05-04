<script setup>
import { computed, onMounted, ref } from 'vue'; // Import onMounted and ref

import dresscode from '@/assets/Dresscode text.png';
import photo from '@/assets/dresscode.jpeg';
import Frame from '@/layout/Frame.vue';
import { useDisplay } from 'vuetify';
// Define reactive state for animation
const isMounted = ref(false);


const emits = defineEmits(['openLocation'])

const openLocation = () => {
    emits('openLocation')
}

const { smAndDown, mdAndUp } = useDisplay()


const containerWidth = computed(() => {
    return smAndDown.value ? '300px' : mdAndUp.value ? '300px' : '0';
});

// Trigger animation after component is mounted
onMounted(() => {
    isMounted.value = true;
});
</script>
<template>
    <Frame>
        <VContainer class="d-flex full-height flex-column align-center justify-center text-center" fluid>
            <VCard style="background-color: transparent; z-index: 9999;" :class="{ 'fade-in': isMounted }"
                class="d-flex flex-column align-center justify-center px-5 py-5">
                <img width="200px" :src="photo" alt="couple" class="mb-2" :class="{ 'fade-in': isMounted }" />
                <img width="200px" :src="dresscode" alt="topright" class="dresscode-text"
                    :class="{ 'fade-in': isMounted }" />

                <span style="font-size: 16px; opacity: 1 !important; color: grey;" class="font-weight-bold mt-5">Dress
                    Code:
                </span>
                <span style="font-size: 16px; opacity: 1 !important; color: grey" class="font-weight-bold mb-5">
                    Elegant in White</span>

                <span style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100"
                    :style="{ 'max-width': containerWidth }">
                    Kami mengundang Anda untuk hadir dengan mengenakan busana serba putih, sebagai simbol kesucian dan
                    kebahagiaan pada hari pernikahan kami. Mari merayakan momen indah ini dengan serasi, penuh cinta,
                    dan dalam kesederhanaan yang elegan.</span>
            </VCard>

        </VContainer>
    </Frame>
</template>

<style scoped>
.full-height {
    height: 100vh;
    /* Full viewport height */
    display: flex;
    align-items: center;
    /* Center vertically */
    justify-content: center;
    /* Center horizontally */
}


.invitation-btn {
    position: absolute;
    margin-top: 80vh;

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