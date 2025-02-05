<script setup>
import Frame from '@/layout/Frame.vue';
import { computed, onMounted, ref } from 'vue'; // Import onMounted and ref
import { useDisplay } from 'vuetify';

// Define reactive state for animation
const isMounted = ref(false);

const { smAndDown, mdAndUp } = useDisplay();

const containerWidth = computed(() => {
    return smAndDown.value ? '300px' : mdAndUp.value ? '500px' : '0';
});

onMounted(() => {
    isMounted.value = true;
});
</script>

<template>
    <Frame>
        <VContainer class=" full-height d-flex flex-column align-center justify-center text-center" fluid>
            <VCard style="background-color: transparent; z-index: 99999;" :class="{ 'fade-in': isMounted }"
                class="d-flex flex-column align-center justify-center px-5" height="300px">
                <span style="height: 60px;"></span>

                <!-- Ensure iframe has the highest z-index -->
                <iframe :width="containerWidth" height="450" style="border:0;position: relative;" loading="lazy"
                    allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB41eq24ecdtYyNskjaaQBflyF1m-OUWuk&q=Leviticus+11">
                </iframe>

                <span style="font-size: 16px; opacity: 1 !important; color: grey" class="font-weight-bold mt-5">
                    Leviticus 11 Resto
                </span>
                <span style="font-size: 12px; opacity: 1 !important; color: grey; z-index: 99999 !important"
                    class="font-weight-100">
                    Jl. Penyelesaian Tomang II No.1 Blok 11, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat
                </span>
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