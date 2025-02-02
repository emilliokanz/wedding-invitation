<script setup>
import { onMounted, ref } from 'vue'; // Import onMounted and ref

import Frame from '@/layout/Frame.vue'
import boxImage from '@/assets/box.svg'
import name from '@/assets/Ail & Emil.png'
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
        <VContainer style="margin-top: 20vh;" class="d-flex flex-column align-center justify-center text-center" fluid>
            <div class="d-flex flex-column intro-text ml-6" :class="{ 'fade-in': isMounted }">
                <span class="font-weight-bold">WE INVITE YOU </span>
                <span class="font-weight-bold">TO CELEBRATE THE WEDDING OF</span>
            </div>
            <img width="300px" :src="boxImage" alt="topright" class="box-image" :class="{ 'fade-in': isMounted }" />
            <img width="200px" :src="name" alt="topright" class="name-text" :class="{ 'fade-in': isMounted }" />

            <VBtn @click="openInvitation" rounded="xl" class="invitation-btn font-weight-bold text-none"
                :class="{ 'fade-in': isMounted }">Open
                Invitation</VBtn>
        </VContainer>
    </Frame>
</template>

<style scoped>
.box-image {}

.intro-text {}

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