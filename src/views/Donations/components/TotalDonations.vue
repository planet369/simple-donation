<template>
    <div>
        total donations: {{ total }}
    </div>
</template>

<script>
import { computed } from 'vue';
import { useDonationStore } from '../store/donationStore';

export default {
    setup() {
        const donationStore = useDonationStore();


        const total = computed(() => {
            var total_amount = 0
            for (var i = 0; i < donationStore.donations.length; i++) {
                total_amount = total_amount + donationStore.donations[i].donation_amount
            }
            return total_amount
        })

        return {
            donationStore,
            total
        }
    }
}
</script>

<style lang="scss" scoped></style>