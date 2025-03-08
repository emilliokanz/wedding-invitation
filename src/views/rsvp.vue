<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import boxImage from '@/assets/box.svg';
import menghitung from '@/assets/menghitung.png';
import Frame from '@/layout/Frame.vue';
import photo from '@/assets/photo-corner.png'

import Countdown from '@/components/Countdown.vue';
import { useDisplay } from 'vuetify';
// Define reactive state for animation
const isMounted = ref(false);

const {mobile} = useDisplay()

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
        <VContainer class="full-height d-flex flex-column align-center text-center" style="position: relative;">
            <div style="z-index: 9999;" class="d-flex flex-column  intro-text "
                :class="{ 'fade-in': isMounted }">
                <img width="200px" :src="menghitung" alt="topright" class="akad-text mb-10"
                    :class="{ 'fade-in': isMounted }" />  

                <Countdown></Countdown>


                <span style="font-size: 16px; color: grey" class="font-weight-100 mt-5">Kirim ucapan untuk
                    mempelai</span>
                <span style="font-size: 16px; color: grey" class="font-weight-100">dan konfirmasi kehadiran</span>
                <VBtn @click="openInvitation" rounded="xl" color="#b58e5e"
                    class="invitation-btn font-weight-bold text-none" :class="{ 'fade-in': isMounted }">Kirim
                    Ucapan
                    RSVP</VBtn>
                <img v-if="!mobile" width="150px" class="photo-corner" :src="photo" alt="topright"
                    :class="{ 'fade-in': isMounted }" /> 
            </div>
            <img v-if="mobile" width="210px" class="photo-corner-mobile" :src="photo" alt="topright"
                    :class="{ 'fade-in': isMounted }" /> 
  
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

.photo-corner {
    z-index: 1;
    bottom: -35%;
    left: -60%;
    position: absolute;
    rotate: -10deg;
}

.photo-corner-mobile {
    z-index: 999;
    bottom:0;
    margin-bottom: 40px;
    left: 0;
    position: absolute;
}


.invitation-btn {
    margin-top: 20px;
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