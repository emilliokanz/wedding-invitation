<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import Frame from '@/layout/Frame.vue'
import boxImage from '@/assets/box.svg'
import menghitung from '@/assets/menghitung.png'

import Countdown from '@/components/Countdown.vue'
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
        <VContainer style="margin-top: 36vh;" class="d-flex flex-column align-center justify-center text-center" fluid>
            <div class="d-flex flex-column  intro-text " :class="{ 'fade-in': isMounted }">
                <img width="200px" :src="menghitung" alt="topright" class="akad-text"
                    :class="{ 'fade-in': isMounted }" />

                <div class="mb-10">

                    <Countdown></Countdown>
                </div>

                <span style="font-size: 16px; color: grey" class="font-weight-100 mt-10">Kirim ucapan untuk
                    mempelai</span>
                <span style="font-size: 16px; color: grey" class="font-weight-100">dan konfirmasi kehadiran</span>
                <VBtn @click="openInvitation" rounded="xl" color="#b58e5e"
                    class="invitation-btn font-weight-bold text-none" :class="{ 'fade-in': isMounted }">Kirim Ucapan
                    RSVP</VBtn>
            </div>
            <img width="300px" class="box-image" :src="boxImage" alt="topright" :class="{ 'fade-in': isMounted }" />


        </VContainer>
    </Frame>
</template>

<style scoped>
.box-image {
    position: absolute;
}

.akad-text {
    position: absolute;
    margin-top: -8vh;
    margin-left: 15px;
}

.invitation-btn {
    margin-left: 25px;

    position: absolute;
    z-index: 99999;
    margin-top: 24vh;

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