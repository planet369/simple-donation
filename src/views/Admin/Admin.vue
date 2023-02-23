<template>
    <div v-if="adminStore.logged_in === true">

        <AddDonation></AddDonation>
        <ManageLedgerItem></ManageLedgerItem>
    </div>
    <div v-else class="grid grid-cols-1 gap-3">

        <SignIn></SignIn>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useAdminStore } from './store/adminStore';
import SignIn from './components/SignIn.vue';
import AddDonation from './components/AddDonation.vue';
import ManageLedgerItem from './components/ManageLedgerItem.vue';

export default {
    setup() {
        const adminStore = useAdminStore();
        
       
        return {
            adminStore,
          
        }
    },
    components: {
    SignIn,
    AddDonation,
    ManageLedgerItem
}
    
}
</script>

<style lang="scss" scoped></style>