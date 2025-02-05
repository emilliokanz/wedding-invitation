<script setup>
import name from '@/assets/Ail & Emil.png';
import boxImage from '@/assets/box.svg';
import Frame from '@/layout/Frame.vue';
import { computed, defineEmits, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// Define reactive state for animation
const isMounted = ref(false);
// const invitee = ref('');

const emits = defineEmits(['isOpen']);

const openInvitation = () => {
    emits('isOpen');
}

const route = useRoute();

// Trigger animation after component is mounted
onMounted(() => {

    isMounted.value = true;

});

const invitee = computed(() => {
    return route.params.param?.toUpperCase() || 'GUEST';
})


</script>

<template>
    <Frame>
        <!-- Ensure the container takes full height and centers content vertically -->
        <VContainer class="d-flex flex-column align-center justify-center text-center full-height" fluid>
            <div style="z-index: 99;" class="d-flex flex-column intro-text ml-6" :class="{ 'fade-in': isMounted }">
                <span class="font-weight-bold" style="font-size: 15px;">WE INVITE YOU </span>
                <span style="color: #b58e5e;" class="font-weight-bold"> Yth. Bapak/Ibu/Saudara/i </span>
                <span style="color: #b58e5e;" class="font-weight-bold"> {{ invitee }} </span>
                <span class="font-weight-bold" style="font-size: 15px">TO CELEBRATE THE WEDDING OF</span>
            </div>
            <img width=" 300px" :src="boxImage" alt="topright" :class="{ 'fade-in': isMounted }" />
            <img width="300px" :src="name" alt="topright" class="name-text" :class="{ 'fade-in': isMounted }" />

            <VBtn @click="openInvitation" rounded="xl" color="#b58e5e" class="invitation-btn font-weight-bold text-none"
                :class="{ 'fade-in': isMounted }">Open
                Invitation</VBtn>
        </VContainer>
    </Frame>
</template>

<style scoped>
/* Ensure the container takes full height */
.full-height {
    height: 100vh;
    /* Full viewport height */
    display: flex;
    align-items: center;
    /* Center vertically */
    justify-content: center;
    /* Center horizontally */
}

.name-text {
    position: absolute;
}

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