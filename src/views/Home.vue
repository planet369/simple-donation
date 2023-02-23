<template>
    <div class="m-3">
        <p class=" text-black text-md">{{ campaign_info.name }}</p>
        <p class="text-black text-sm">{{ campaign_info.date }}</p>
        <p class="text-black text-xs">{{ campaign_info.small_info }}</p>
        <Donations></Donations>
    </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted , onUpdated} from 'vue'
import Donations from './Donations/Donations.vue';

export default {
    setup() {
        const campaign_info = reactive({
            name: '',
            date: '',
            small_info: ''
        })

        function addCampaignInfo() {
            campaign_info.name = "We Share What We Know"
            campaign_info.date = "22-2-2023"
            campaign_info.small_info = "We are here to support all with we have aquired and we are willing to share the knowledge that has been passed to us."
        }

        onMounted(() => {
            addCampaignInfo()
        })
      
        return {

            campaign_info,
            addCampaignInfo
        };
    },
    components: { Donations }
}
</script>

<style scoped></style>