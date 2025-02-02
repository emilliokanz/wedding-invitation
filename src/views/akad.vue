<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import Frame from '@/layout/Frame.vue'
import boxImage from '@/assets/box.svg'
import akad from '@/assets/Akad Nikah.png'
// Define reactive state for animation
const isMounted = ref(false);

const emits = defineEmits(['openLocation'])

const openLocation = () => {
    emits('openLocation')
}

// Trigger animation after component is mounted
onMounted(() => {
    isMounted.value = true;
});
</script>
<template>
    <Frame>
        <VContainer style="margin-top: 30vh;" class="d-flex flex-column align-center justify-center text-center" fluid>
            <div class="d-flex flex-column intro-text ml-6" :class="{ 'fade-in': isMounted }">
                <VCard :class="{ 'fade-in': isMounted }" class="d-flex flex-column align-center justify-center px-5"
                    width="300px" height="300px">
                    <img width="200px" :src="akad" alt="topright" class="akad-text" :class="{ 'fade-in': isMounted }" />
                    <span style="height: 60px;"></span>

                    <span style="font-size: 16px; opacity: 1 !important; color: grey;"
                        class="font-weight-bold mt-5">Sunday,
                        July 6th 2025
                    </span>
                    <span style="font-size: 16px; opacity: 1 !important; color: grey"
                        class="font-weight-bold mb-5">13.00 -
                        16.00 WIB</span>
                    <span style="font-size: 16px; opacity: 1 !important; color: grey" class="font-weight-bold">
                        Leviticus 11 Resto</span>
                    <span style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100">
                        Jl. Penyelesaian Tomang II No.1 Blok 11, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat</span>

                    <VBtn @click="openLocation" rounded="xl" color="#b58e5e" class="font-weight-bold text-none mt-2"
                        :class="{ 'fade-in': isMounted }">Location</VBtn>
                </VCard>

            </div>
        </VContainer>
    </Frame>
</template>

<style scoped>
.box-image {
    position: absolute;
    margin-top: 30vh;

}

.intro-text {
    position: absolute;
    margin-top: 30vh;
}

.akad-text {
    position: absolute;
    margin-top: -20vh;
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