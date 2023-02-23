<template>
    <div class="grid grid-cols-1 gap-3 bg-slate-300 rounded p-2">
        <p>Sign In</p>
        <input class="bg-slate-900 dark:bg-slate-900 text-white dark:text-white bg-opacity-75 p-2 rounded"
            v-model="username" type="text" placeholder="username" />
        <input class="bg-slate-900 dark:bg-slate-900 text-white dark:text-white bg-opacity-75 p-2 rounded"
            v-model="password" type="password" placeholder="password" />
        <p class="text-slate-900">
            {{ message }}
        </p> <button class="p-2 rounded bg-gray-800 text-white" @click="submitLogIn()">login</button>

    </div>
</template>

<script>
import { useAdminStore } from '../store/adminStore';
import { ref, onUpdated } from 'vue';

export default {
    setup() {
        const adminStore = useAdminStore();
        const username = ref('')
        const password = ref('')
        const message = ref('')

        async function submitLogIn() {
            var info = await adminStore.loginAdmin({ username: username.value, password: password.value })
            console.log(info)
            message.value = info.message
        }
        function setMessageNull(){
            message.value = ''
        }
        onUpdated(()=>{
            setTimeout(setMessageNull, 4000)
        })
        return {
            adminStore,
            username,
            password,
            submitLogIn,
            message
        }
    }
}
</script>

<style lang="scss" scoped></style>