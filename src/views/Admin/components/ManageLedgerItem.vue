<template>
    <div class="grid grid-cols-1 gap-2">
        <div v-for="item in donationStore.donations" class=" grid grid-cols-2 bg-slate-700 rounded p-1 text-white">
            <p>{{ item.donor_name }}</p>
            <p>{{ item.donation_amount }}</p>
    </div>
    </div>
   
</template>

<script>
import { useDonationStore } from '../../Donations/store/donationStore';

export default {
    setup () {
        const donationStore = useDonationStore();

        return {
            donationStore
        }
    }
}
</script>

<style lang="scss" scoped>

</style>