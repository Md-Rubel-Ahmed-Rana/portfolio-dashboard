<template>
  <div class="flex justify-between">
    <h1 class="text-3xl font-semibold mb-4">Services</h1>
    <p>
      <router-link to="/dashboard/services/add-new-service">
        <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add Service</button>
      </router-link>
    </p>
  </div>
  <div v-for="service in services" class="shadow-md p-5 rounded-md my-5 border">
    <h5 class="text-xl font-semibold text-gray-600">{{ service.name }}</h5>
    <p class="text-md text-gray-500">{{ service.description }}</p>
    <div class="flex gap-3">
      <button @click="handleDeleteService(service.id)"
        class="bg-red-500 px-5 mt-5 py-2 rounded-md text-white">Delete</button>
      <router-link :to="`/dashboard/services/edit/${service.id}`">
        <button class="bg-blue-500 px-5 mt-5 py-2 rounded-md text-white">Update content</button>
      </router-link>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(["services"])
  },
  methods: {
    ...mapActions(["getServices", "deleteService"]),
    handleDeleteService(id){
      this.deleteService({id})
    }
  },
  created() {
    this.getServices()
  },
}
</script>