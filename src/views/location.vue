<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import Frame from '@/layout/Frame.vue'
// Define reactive state for animation
const isMounted = ref(false);

const emits = defineEmits(['openLocation'])

const openLocation = () => {
    emits('openLocation')
}

onMounted(() => {
    isMounted.value = true;
});
</script>
<template>
    <Frame>
        <VContainer style="margin-top: 30vh;" class="d-flex flex-column align-center justify-center text-center" fluid>
            <div class="d-flex flex-column intro-text" :class="{ 'fade-in': isMounted }">
                <VCard style="background-color: transparent;" :class="{ 'fade-in': isMounted }"
                    class="d-flex flex-column align-center justify-center px-5" width="500px" height="300px">
                    <span style="height: 60px;"></span>

                    <iframe width="400" height="450" style="border:0" loading="lazy" allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB41eq24ecdtYyNskjaaQBflyF1m-OUWuk
    &q=Leviticus+11">
                    </iframe>
                    <span style="font-size: 16px; opacity: 1 !important; color: grey" class="font-weight-bold mt-5">
                        Leviticus 11 Resto</span>
                    <span style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100">
                        Jl. Penyelesaian Tomang II No.1 Blok 11, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat</span>
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