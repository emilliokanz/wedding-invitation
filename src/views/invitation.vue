<script setup>
import { computed, onMounted, ref } from 'vue'; // Import onMounted and ref

import ailsa from '@/assets/Ailsa.png';
import emillio from '@/assets/Emillio.png';
import Frame from '@/layout/Frame.vue';
import { useDisplay } from 'vuetify';

// Define reactive state for animation
const isMounted = ref(false);
const { smAndDown, mdAndUp } = useDisplay()

const emits = defineEmits(['isOpen'])

const openInvitation = () => {
    emits('isOpen')
}

// Trigger animation after component is mounted
onMounted(() => {
    console.log(smAndDown.value, mdAndUp.value)
    isMounted.value = true;
});

const marginTopStyle = computed(() => {
    return smAndDown.value ? '5vh' : mdAndUp.value ? '15vh' : '0';
});

const containerWidth = computed(() => {
    return smAndDown.value ? '250px' : mdAndUp.value ? '300px' : '0';
});

</script>
<template>
    <Frame>
        <VContainer class="d-flex flex-column align-center justify-center text-center full-height" fluid>

            <VCard style="background-color: transparent; z-index: 9;"
                class="d-flex flex-column intro-text py-5 mt-10 px-5" :class="{ 'fade-in': isMounted }">
                <span style="font-size: 14px; color: grey" class="my-2">Tanpa mengurangi rasa hormat, perkenankan kami
                </span>
                <span style="font-size: 14px; color: grey" class="my-2">mengundang Bapak/Ibu/Saudara/i, untuk
                    menghadiri</span>
                <span style="font-size: 14px; color: grey" class="my-2">acara Akad Pernikahan Kami</span>
                <!-- <h2 style="color: #b58e5e">Ailsa Blenda Chaesar Norman</h2> -->
                <img :width="containerWidth" :src="ailsa" alt="topright" class="akad-text mx-auto"
                    :class="{ 'fade-in': isMounted }" />

                <span style="font-size: 14px; color: grey" class="my-1 font-weight-bold">Putri Mayor (Purn) Bakri
                    Norman</span>
                <span style="font-size: 14px; color: grey" class="my-1 font-weight-bold">Ibu Hertha Duma Estina
                    Sinaga</span>
                <h2 style="color: grey; font-style: italic;" class="my-3">Dengan</h2>

                <img :width="containerWidth" :src="emillio" alt="topright" class="akad-text mx-auto"
                    :class="{ 'fade-in': isMounted }" />

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

.full-height {
    height: 100vh;
    /* Full viewport height */
    display: flex;
    align-items: center;
    /* Center vertically */
    justify-content: center;
    /* Center horizontally */
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