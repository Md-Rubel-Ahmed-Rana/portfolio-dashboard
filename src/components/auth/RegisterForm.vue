<template>
  <div class="bg-white w-1/3 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="text-2xl font-semibold mb-4">
      <h3 class="text-center">Register Now</h3>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-left text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password">
    </div>
    <div class="flex items-center justify-center">
      <button @click="submitForm" class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Register
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
}
</script>
