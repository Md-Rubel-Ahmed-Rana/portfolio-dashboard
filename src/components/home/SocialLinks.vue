<template>
  <div class="p-10 shadow-md">
    <h3 class="text-4xl font-bold mb-8">Social links content</h3>
    <div>
      <div class="flex flex-col gap-5  mb-4">
        <div v-for="social in socialLinks" class=" rounded-md p-4 shadow-md">
          <p class="text-lg font-semibold">{{ social?.name }}</p>
          <p>{{ social?.link }}</p>
        </div>
      </div>
      <p>
        <router-link to="/dashboard/utils/social-links-content/edit">
          <button class="bg-blue-500 text-white px-5 py-2 rounded-md">Edit content</button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        socialLinks: {
            type: Array,
            required: true
        }
    },
    computed: {
        content(){
            return this.socialLinks
        }
    }
}

</script>