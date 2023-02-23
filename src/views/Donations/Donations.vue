<template>
    <div>
        <TotalDonation></TotalDonation>
        <Ledger></Ledger>
    </div>
</template>

<script>
import TotalDonation from './components/TotalDonations.vue'
import Ledger from './components/Ledger.vue'
export default {
    setup() {


        return {}
    },
    components: { TotalDonation, Ledger }

}
</script>

<style lang="scss" scoped></style>