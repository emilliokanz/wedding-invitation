<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import Frame from '@/layout/Frame.vue'
import boxImage from '@/assets/box.svg'
import name from '@/assets/Ail & Emil.png'
import bca from '@/assets/bca.png'
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
                <span style="font-size: 14px; color: grey" class="my-1">Kehadiran dan doa restu Anda sudah merupakan
                </span>
                <span style="font-size: 14px; color: grey" class="my-1">hadiah terindah bagi kami. Namun, jika berkenan,
                </span>
                <span style="font-size: 14px; color: grey" class="my-1">Anda dapat memberikan hadiah secara
                    digital
                    melalui</span>
                <!-- <h2 style="color: #b58e5e">Ailsa Blenda Chaesar Norman</h2> -->
                <img width="200px" class="bca-text" :src="bca" alt="bca" :class="{ 'fade-in': isMounted }" />
                <span style="font-size: 14px; color: grey">7772203945 a/n Ailsa Blenda
                    Chesar</span>
                <span style="font-size: 14px; color: grey">7772203945 a/n Emillio Kanz</span>
                <span style="font-size: 14px; color: grey" class="my-1">Atau</span>
                <!-- <h2 style="color: #b58e5e">Emillio Kanz</h2> -->
                <span style="font-size: 14px; color: grey">Ailsa Blenda Chaesar
                    Norman
                </span>

                <span style="font-size: 14px; color: grey; max-width: 400px;">
                    Apartemen Reverview.
                    Jl. Inspeksi Kalimalang No.1, Wangunharja, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530
                </span>
                <span style="font-size: 14px; color: grey"> Tlp. 0822-1568-7899</span>
            </VCard>


        </VContainer>
    </Frame>
</template>

<style scoped>
.bca-text {
    margin: auto
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