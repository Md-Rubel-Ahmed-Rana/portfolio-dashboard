<template>
  <div class="flex justify-between">
    <h1 class="text-3xl font-semibold mb-4">Upcoming updates</h1>
    <p>
      <router-link to="/dashboard/updates/add-new-update">
        <button class="bg-blue-600 px-5 py-2 rounded-md text-white">Add Update</button>
      </router-link>
    </p>
  </div>
  <ul v-for="update in updates" class="space-y-8 mt-5 shadow border rounded-md p-5" :key="update.id">
    <li>
      <h4 className="text-lg text-gray-600 font-medium mb-2">{{ update.title }}</h4>
      <p className="text-sm mb-2 text-gray-600">Category: {{ update.category }}</p>
      <p className="text-sm mb-2 text-gray-600">Status: {{ update.status }}</p>
      <p className="text-sm text-gray-600">Priority: {{ update.priority }}</p>
      <p className="text-gray-600 mb-2">Description: {{update.description}}</p>
      <button @click="handleDeleteUpdate(update.id)"
        class="bg-red-500 mr-3 text-white px-5 py-2 mt-4 rounded-md">Delete</button>
      <router-link :to="`/dashboard/updates/edit/${update.id}`">
        <button class="bg-blue-500 text-white px-8 py-2 mt-4 rounded-md">Edit</button>
      </router-link>
    </li>
  </ul>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(["updates"])
  },
  methods: {
    ...mapActions(["getUpdates", "deleteUpdate"]),
    handleDeleteUpdate(id){
      this.deleteUpdate({id: id})
    }
  },
  created() {
    this.getUpdates()
  },
}
</script>
