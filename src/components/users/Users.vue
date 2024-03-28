<template>
    <div class="flex justify-between">
        <h1 class="text-3xl font-semibold mb-4">Users</h1>
        <p>
            <router-link to="/dashboard/projects/add-new-user">
                <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add new user</button>
            </router-link>
        </p>
    </div>
    <div class="overflow-x-auto">
        <table class="table-auto w-full">
            <thead>
                <tr class="bg-gray-200 rounded-md">
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Phone Number</th>
                    <th class="px-4 py-2">Role</th>
                    <th class="px-4 py-2">Verified</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" class="bg-white border-b text-center rounded-md">
                    <td class="px-4 py-2">{{ user.name }}</td>
                    <td class="px-4 py-2">{{ user.email }}</td>
                    <td class="px-4 py-2">{{ user.phoneNumber }}</td>
                    <td class="px-4 py-2">{{ user.role }}</td>
                    <td class="px-4 py-2">{{ user.isVerified ? "Yes" : "No" }}</td>
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
