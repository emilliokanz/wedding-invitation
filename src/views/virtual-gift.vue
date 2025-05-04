<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import bca from '@/assets/bca.png';
import Frame from '@/layout/Frame.vue';

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
        <VContainer class=" full-height d-flex flex-column align-center justify-center text-center" fluid>

            <VCard style="background-color: transparent; z-index: 99999;" class="d-flex flex-column intro-text px-5"
                :class="{ 'fade-in': isMounted }">
                <span style="font-size: 14px; color: black" class="my-1">Kehadiran dan doa restu Anda sudah merupakan
                </span>
                <span style="font-size: 14px; color: black" class="my-1">hadiah terindah bagi kami. Namun, jika
                    berkenan,
                </span>
                <span style="font-size: 14px; color: black" class="my-1">Anda dapat memberikan hadiah secara
                    digital
                    melalui</span>
                <!-- <h2 style="color: #b58e5e">Ailsa Blenda Chaesar Norman</h2> -->
                <img width="200px" class="bca-text" :src="bca" alt="bca" :class="{ 'fade-in': isMounted }" />
                <span style="font-size: 14px; color: black">8320547131 a/n Ailsa Blenda
                    Chesar</span>
                <span style="font-size: 14px; color: black">7772203945 a/n Emillio Kanz</span>
                <span style="font-size: 14px; color: black" class="my-1">Atau</span>
                <!-- <h2 style="color: #b58e5e">Emillio Kanz</h2> -->
                <span style="font-size: 14px; color: black">Ailsa Blenda Chaesar
                    Norman
                </span>

                <span style="font-size: 14px; color: black; max-width: 400px;">
                    Apartemen Riverview.
                    Jl. Inspeksi Kalimalang No.1, Wangunharja, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat 17530
                </span>
                <span style="font-size: 14px; color: black"> Tlp. 0822-1568-7899</span>
                <span style="font-size: 12px; color: black" class="my-1"> *Mohon infokan ke nomor telfon diatas apabila
                    mengirim
                    paket
                    ke alamat tersebut</span>

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