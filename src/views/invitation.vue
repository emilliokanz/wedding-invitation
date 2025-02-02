<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import Frame from '@/layout/Frame.vue'
import boxImage from '@/assets/box.svg'
import name from '@/assets/Ail & Emil.png'
import ailsa from '@/assets/Ailsa.png'
import emillio from '@/assets/Emillio.png'

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
        <VContainer style="margin-top: 15vh;" class="d-flex flex-column align-center justify-center text-center" fluid>

            <VCard style="background-color: transparent;" class="d-flex flex-column intro-text py-5 mt-10 px-5"
                :class="{ 'fade-in': isMounted }">
                <span style="font-size: 14px; color: grey" class="my-2">Tanpa mengurangi rasa hormat, perkenalkan kami
                </span>
                <span style="font-size: 14px; color: grey" class="my-2">mengundang Bapak/Ibu/Saudara/i, untuk
                    menghadiri</span>
                <span style="font-size: 14px; color: grey" class="my-2">acara Akad Pernikahan Kami</span>
                <!-- <h2 style="color: #b58e5e">Ailsa Blenda Chaesar Norman</h2> -->
                <img width="300px" :src="ailsa" alt="topright" class="akad-text ml-4"
                    :class="{ 'fade-in': isMounted }" />

                <span style="font-size: 14px; color: grey" class="my-1 font-weight-bold">Putri Bpk. Bakri
                    Norman</span>
                <span style="font-size: 14px; color: grey" class="my-1 font-weight-bold">Ibu Hertha Duma Estina
                    Sinaga</span>
                <h2 style="color: grey; font-style: italic;" class="my-3">Dengan</h2>

                <img width="300px" :src="emillio" alt="topright" class="akad-text ml-4"
                    :class="{ 'fade-in': isMounted }" />

                <!-- <h2 style="color: #b58e5e">Emillio Kanz</h2> -->
                <span style="font-size: 14px; color: grey" class="my-1 font-weight-bold">Putra Ketiga Bpk. Roy Ardian
                    Darwis</span>
                <span style="font-size: 14px; color: grey" class="my-1 font-weight-bold">Ibu Susi Mardianingsih</span>
            </VCard>


        </VContainer>
    </Frame>
</template>

<style scoped>
.invitation-btn {
    z-index: 99999;
    margin-top: 25px;

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