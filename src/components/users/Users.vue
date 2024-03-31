<template>
    <div class="flex justify-between">
        <h1 class="text-3xl font-semibold mb-4">Users</h1>
        <p>
            <router-link to="/dashboard/users/add-new-user">
                <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add new user</button>
            </router-link>
        </p>
    </div>
    <div class="overflow-x-auto">
        <table class="table-auto w-full">
            <thead>
                <tr class="bg-gray-200 rounded-md text-left">
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Phone Number</th>
                    <th class="px-4 py-2">Role</th>
                    <th class="px-4 py-2">Verified</th>
                    <th class="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" class="bg-white border-b text-left rounded-md"
                    title="Click to update user">
                    <td class="px-4 py-2 hover:underline cursor-pointer hover:text-blue-600">
                        <router-link :to="`/dashboard/users/user/edit/${user.id}`">
                            {{ user.name }}
                        </router-link>
                    </td>
                    <td class="px-4 py-2">{{ user.email }}</td>
                    <td class="px-4 py-2">{{ user.phoneNumber }}</td>
                    <td class="px-4 py-2">{{ user.role }}</td>
                    <td class="px-4 py-2">{{ user.isVerified ? "Yes" : "No" }}</td>
                    <td class="px-4 py-2 flex gap-3 justify-between">
                        <button v-if="!user.isVerified"
                            class="bg-green-500 w-full px-2 rounded-md text-white">Verify</button>
                        <button v-if="user.isVerified"
                            class="bg-green-500 w-full px-2 rounded-md text-white">Unverify</button>
                        <button class="bg-red-500 px-2 rounded-md w-full text-white">Suspend</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["users"])
    },
    methods: {
        ...mapActions(["getAllUsers"])
    },
    created() {
        this.getAllUsers();
    }
};
</script>
