<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'; // Import onMounted and ref
import RandomTextAnimation from '@/components/RandomTextAnimation.vue'
import { collection, addDoc, getDocs } from "firebase/firestore";

import Frame from '@/layout/Frame.vue';
import { useDisplay } from 'vuetify';
import { fireStore } from '@/plugin/firestore';
// Define reactive state for animation
const isMounted = ref(false);

const { smAndDown, mdAndUp } = useDisplay()

const containerWidth = computed(() => {
    return smAndDown.value ? '300px' : mdAndUp.value ? '300px' : '0';
});

const componentKey = ref(0)

const messages = ref<string[]>([])

const name = ref('')
const message = ref('')
const nameError = ref('')
const isSubmitting = ref(false)
const dialog = ref(false)


// Validation rules
const validateName = () => {
    if (!name.value.trim()) {
        nameError.value = 'Nama harus diisi'
        return false
    }
    nameError.value = ''
    return true
}

const addMessage = async () => {
    // First validate the name field
    if (!validateName()) {
        return
    }

    try {
        isSubmitting.value = true
        const docRef = await addDoc(collection(fireStore(), "wedding-messages"), {
            name: name.value,
            message: message.value
        });
        console.log("Document written with ID: ", docRef.id);

        // Add the new message to the local messages array so it appears in the animation
        if (message.value.trim()) {
            messages.value.push(message.value)
            componentKey.value++
        }


        // Clear the form after successful submission
        name.value = ''
        message.value = ''

        showDialog()
        // Show success notification (could add a toast/alert here)
    } catch (e) {
        console.error("Error adding document: ", e);
        // Show error notification (could add a toast/alert here)
    } finally {
        isSubmitting.value = false
    }
}

const getMessages = (async () => {
    try {
        const querySnapshot = await getDocs(collection(fireStore(), "wedding-messages"));
        messages.value = [] // Clear the array before adding new messages
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            if (data.message && typeof data.message === 'string' && data.message.trim()) {
                messages.value.push(data.message)
            }
        });

        console.log(messages.value, "message value")
    } catch (error) {
        console.error("Error fetching messages:", error)
    }
})

const showDialog = () => {
    dialog.value = true
    setTimeout(() => {
        dialog.value = false
    }, 3000)
}

// Trigger animation after component is mounted
onMounted(async () => {
    isMounted.value = true;
    await getMessages()
});
</script>
<template>
    <Frame>
        <RandomTextAnimation :key="componentKey" v-if="messages.length > 0" :words="messages" :count="20"
            :baseDelay="200" />
        <VContainer class="d-flex full-height flex-column align-center justify-center" fluid>
            <VCard style="background-color: transparent; z-index: 9999;" :class="{ 'fade-in': isMounted }"
                class="d-flex flex-column px-5 py-5">

                <div :style="{ 'max-width': containerWidth }" class="text-center justify-center">
                    <span style="font-size: 12px; opacity: 1 !important; color: grey"
                        class="font-weight-100 justify-center ">
                        Kehadiran anda sangat kami nantikan. Isi nama dan pesan untuk kedua mempelai, kemudian klik
                        tombol Hadir.
                    </span>
                </div>

                <div style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100 text-left">
                    Nama <span class="required-star">*</span>
                </div>

                <v-text-field v-model="name" density="compact"
                    style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100"
                    variant="outlined" :error-messages="nameError" @blur="validateName" required></v-text-field>

                <div style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100 text-left">
                    Pesan
                </div>

                <v-textarea v-model="message" density="compact"
                    style="font-size: 12px; opacity: 1 !important; color: grey" class="font-weight-100"
                    variant="outlined"></v-textarea>

                <VBtn @click="addMessage" rounded="xl" color="#b58e5e" class="invitation-btn font-weight-bold text-none"
                    :loading="isSubmitting" :disabled="isSubmitting">
                    Kirim
                </VBtn>
            </VCard>

        </VContainer>
    </Frame>
    <v-dialog max-width="500" v-model="dialog">
        <v-alert text="Terima kasih telah mengisi RSVP, kami tunggu kehadiran anda!" title="Success"
            type="success"></v-alert> </v-dialog>
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

.invitation-btn {
    margin-top: 20px;
    z-index: 99999;
}

.fade-in {
    animation: fadeInMove 1s ease-in-out forwards;
}

.required-star {
    color: #ff5252;
    margin-left: 2px;
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