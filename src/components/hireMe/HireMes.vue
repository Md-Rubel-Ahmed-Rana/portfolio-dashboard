<template>
    <div>
        <h1 class="text-3xl font-semibold mb-4">Hire Me Invitations</h1>
        <router-link to="/dashboard">
            <button class="bg-blue-600 lg:hidden block px-5 text-white rounded-md my-2 py-1">Back</button>
        </router-link>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div v-for="hireMe in hireMes" :key="hireMe._id"
                class="p-4 pb-10 relative border rounded-lg shadow-md bg-white">
                <h2 class="text-xl font-bold">{{ hireMe.name }}</h2>
                <p><strong>Email:</strong> {{ hireMe.email }}</p>
                <p><strong>Company:</strong> {{ hireMe.companyName }}</p>
                <p><strong>Official Email:</strong> {{ hireMe.officialEmail }}</p>
                <p><strong>Position:</strong> {{ hireMe.position }}</p>
                <p><strong>Job Type:</strong> {{ hireMe.jobType }}</p>
                <p><strong>Job Category:</strong> {{ hireMe.jobCategory }}</p>
                <p><strong>Salary:</strong> {{ hireMe.salary }}</p>
                <p><strong>Location:</strong> {{ hireMe.location }}</p>
                <p class="mb-5"><strong>Additional Info:</strong> {{ hireMe.additional }}</p>
                <div class="absolute bottom-0">
                    <button @click="handleDelete(hireMe._id)"
                        class="bg-red-600 px-5 mb-3 py-1 rounded-md text-white outline-none">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['hireMes']),
    },
    methods: {
        ...mapActions(['getHireMeData', "deleteHireMeData"]),
        handleDelete(id){
            this.deleteHireMeData({id: id})
        }
    },
    created() {
        this.getHireMeData();
    },
};
</script>

