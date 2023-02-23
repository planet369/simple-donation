import { defineStore } from "pinia";

export const useAdminStore = defineStore("adminStore", {
  state: () => {
    return {
      admin_info: {
        username: 'p9',
        password: '123456'
      },
      logged_in: false
    };
  },
  actions: {
    async loginAdmin(admin_info) {
        console.log(admin_info)
      if(admin_info.username === this.admin_info.username && admin_info.password === this.admin_info.password) {
        
        setTimeout(()=>{this.logged_in = true}, 2000)
        
        return {message: 'successfull login attempt'}
      } else {
        return {message: 'failed login attempt'}
      }
    },
  },
});
