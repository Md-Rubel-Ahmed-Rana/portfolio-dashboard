<template>
  <div class="bg-white w-1/3 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="text-2xl font-semibold mb-4">
      <h3 class="text-center">Register Now</h3>
    </div>
    <form @submit.prevent="handleRegister">
      <div class="mb-4">
        <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="name">
          Name <span class="text-red-500">*</span>
        </label>
        <input v-model="formData.name" required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name" type="text" placeholder="Enter your name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="email">
          Email <span class="text-red-500">*</span>
        </label>
        <input v-model="formData.email" required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="email" placeholder="Enter your email">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="phoneNumber">
          Phone number <span class="text-xs">(Optional)</span>
        </label>
        <input v-model="formData.phoneNumber"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber" type="text" placeholder="Enter your phone number">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="password">
          Password <span class="text-red-500">*</span>
        </label>
        <input v-model="formData.password" required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="Enter your password">
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  methods: {
    ...mapActions(["registerUser"]),
    handleRegister() {
      this.registerUser(this.formData)
    }
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phoneNumber: "",
        password: ""
      }
    }
  },
}
</script>
