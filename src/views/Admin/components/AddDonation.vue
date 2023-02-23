<template>
    <div class="grid grid-cols-1 gap-3 bg-slate-200 p-3 rounded">
        <p>add donations</p>
            <input class="bg-slate-900 dark:bg-slate-900 text-white dark:text-white bg-opacity-75 p-2 rounded"
            v-model="donation_input.donor_name" type="text" placeholder="donor name" />
        
            <input class="bg-slate-900 dark:bg-slate-900 text-white dark:text-white bg-opacity-75 p-2 rounded"
            v-model="donation_input.donation_amount" type="number" placeholder="donation amount" />
            <button class="p-2 rounded bg-gray-800 text-white" @click="addDonation()">add donation</button>

    </div>
</template>

<script>
import { reactive, ref} from 'vue';
import { useDonationStore } from '../../Donations/store/donationStore';

export default {
    setup () {
        
        const donationStore = useDonationStore()

        const donation_input = ref({
            donor_name: '',
            donation_amount: 0
        })
        const message = ref('')
        function addDonation(){
            var result = donationStore.addDonation({donor_name: donation_input.value.donor_name, donation_amount: donation_input.value.donation_amount})
            if(result){
                message.value = 'successfully added'
                setTimeout(()=>{
                    message.value = ''
                    donation_input.value.donor_name = ''
                    donation_input.value.donation_amount = 0
                }, 3000)
            }
        }
        return {
            donationStore,
            donation_input,
            addDonation
        }
    }
}
</script>

<style lang="scss" scoped>

</style>