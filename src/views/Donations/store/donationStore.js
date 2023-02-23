import { defineStore } from "pinia";

export const useDonationStore = defineStore("donationStore", {
  state: () => {
    return {
      donations: [],
    };
  },
  actions: {
    async addDonation(item) {
      this.donations.push(item);
      return true
    },
    async addDefaultDonations() {
        var item = {
            donor_name: 'Simon',
            donation_amount: 120
        }
      this.donations.push(item);
      return true
    },
  },
  persist: true
});
