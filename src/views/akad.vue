<script setup>
import { computed, onMounted, ref } from 'vue'; // Import onMounted and ref

import akad from '@/assets/Akad Nikah.png';
import photo from '@/assets/couple.png'
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
    return smAndDown.value ? '300px' : mdAndUp.value ? '500px' : '0';
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
                class="d-flex flex-column align-center justify-center px-5 py-5" >
                <img width="200px" :src="photo" alt="couple" class="mb-2" :class="{ 'fade-in': isMounted }" />
                <img width="200px" :src="akad" alt="topright" class="akad-text" :class="{ 'fade-in': isMounted }" />

                <span style="font-size: 16px; opacity: 1 !important; color: grey;" class="font-weight-bold mt-5">Sunday,
                    July 6th 2025
                </span>
                <span style="font-size: 16px; opacity: 1 !important; color: grey" class="font-weight-bold mb-5">13.00 -
                    16.00 WIB</span>
                <span style="font-size: 16px; opacity: 1 !important; color: grey" class="font-weight-bold">
                    Leviticus 11 Resto</span>
                <span style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100"
                    :style="{ 'max-width': containerWidth }">
                    Jl. Penyelesaian Tomang II No.1 Blok 11, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat</span>

                <VBtn @click="openLocation" rounded="xl" color="#b58e5e" class="font-weight-bold text-none mt-2"
                    :class="{ 'fade-in': isMounted }">Location</VBtn>
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