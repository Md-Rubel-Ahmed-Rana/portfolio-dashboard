<template>
  <div class="lg:p-10 p-3 shadow-md">
    <h3 class="lg:text-4xl text-2xl font-bold mb-4 lg:mb-8">Social links</h3>
    <div>
      <div class="flex flex-col gap-2 lg:gap-5  mb-4">
        <div v-for="social in socialLinks" class=" rounded-md p-4 border shadow-md">
          <p class="text-lg font-semibold">{{ social?.name }}</p>
          <a href="{{ social?.link }}" class="break-words text-blue-500 underline">{{ social?.link }}</a>
        </div>
      </div>
      <p>
        <router-link to="/dashboard/homes/social-links-content/edit">
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
        },
        id: {
          type: String,
           required: true
        }
    },
    computed: {
        content(){
            return {
              socialLinks: this.socialLinks, 
              id: this.id
            }
        }
    }
}

</script>