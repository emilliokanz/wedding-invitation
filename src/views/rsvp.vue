<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import boxImage from '@/assets/box.svg';
import menghitung from '@/assets/menghitung.png';
import Frame from '@/layout/Frame.vue';

import Countdown from '@/components/Countdown.vue';
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
        <VContainer class="full-height d-flex flex-column align-center text-center">
            <div style="z-index: 9999; height: 350px;" class="d-flex flex-column  intro-text "
                :class="{ 'fade-in': isMounted }">
                <img width="200px" :src="menghitung" alt="topright" class="akad-text mb-5"
                    :class="{ 'fade-in': isMounted }" />

                <Countdown></Countdown>


                <span style="font-size: 16px; color: grey" class="font-weight-100 mt-5">Kirim ucapan untuk
                    mempelai</span>
                <span style="font-size: 16px; color: grey" class="font-weight-100">dan konfirmasi kehadiran</span>
                <VBtn @click="openInvitation" rounded="xl" color="#b58e5e"
                    class="invitation-btn font-weight-bold text-none" :class="{ 'fade-in': isMounted }">Kirim
                    Ucapan
                    RSVP</VBtn>
            </div>
            <img width="300px" class="box-image" :src="boxImage" alt="topright" :class="{ 'fade-in': isMounted }" />
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

.box-image {
    position: absolute;
}

.akad-text {
    margin-inline: auto;
}

.invitation-btn {
    margin-top: 100px;
    z-index: 99999;

}

.fade-in {
    animation: fadeInMove 1s ease-in-out forwards;
}

@keyframes fadeInMove {
    from {
        opacity: 0;
        transform: translate(0, 50px);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
        /* Move to final position */
    }
}
</style>