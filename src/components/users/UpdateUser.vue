<template>
    <div class="bg-white mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="text-2xl font-semibold mb-4">
            <h3>Update user</h3>
        </div>
        <form @submit.prevent="handleUpdateUser">
            <div class="mb-4">
                <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input v-model="formData.name" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Enter your name">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input v-model="formData.email" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="Enter your email">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="phoneNumber">
                    Phone number
                </label>
                <input v-model="formData.phoneNumber"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber" type="text" placeholder="Enter your phone number">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="role">
                    Select role
                </label>
                <select v-model="formData.role"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="role" type="text" placeholder="Select a role">
                    <option v-for="role in roles" :value="role">{{ role }}</option>
                </select>
            </div>
            <!-- <div class="mb-6">
                <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="password">
                    Password (Encrypted)
                </label>
                <input :readonly model="formData.password" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="Enter your password">
            </div> -->
            <div class="flex items-center justify-center">
                <button
                    class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Save changes
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    props: {
        id: {
            type: String,
            require: true
        }
    },
    computed: {
        ...mapState(["user"])
    },
    methods: {
        ...mapActions(["getSingleUser", "updateUser"]),
        fetchSingleUser() {
            this.getSingleUser(this.id)
        },
        handleUpdateUser() {
            this.updateUser({id: this.id, user: this.formData})
        }
    },
    mounted() {
        this.fetchSingleUser()
    },
    data() {
        return {
            formData: {
                name: "",
                email: "",
                phoneNumber: "",
                role: "",
                password: "",
                isVerified: true
            },
            roles: ["Super Admin","Admin", "Moderator", "Manager", "Developer", "Designer"]
        }
    },
    watch: {
        user: {
            immediate: true,
            handler(data) {
                if (data) {
                    this.formData.name = data.name
                    this.formData.email = data.email
                    this.formData.phoneNumber = data.phoneNumber
                    this.formData.role = data.role
                    this.formData.password = data.password
                }
            }
        }
    }
}
</script>
