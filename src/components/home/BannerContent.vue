<template>
  <div class="flex flex-col justify-center items-center shadow-md p-10">
    <h3 class="text-4xl font-bold mb-8">Banner content</h3>
    <div>
    <h4 class="text-xl font-semibold">Name: {{ content?.name }}</h4>
      <img :src="content?.image" alt="Banner Image" class="w-full mb-4">
      <p class="mb-4 text-lg font-semibold">Description: {{ content?.description }}</p>
      <p class="text-lg font-semibold">Position: {{ content?.position }}</p>
      <a :href="content?.resumeLink" target="_blank" class="text-blue-500">Download Resume</a>
      <p class="mt-4">
        <router-link to="/dashboard/utils/banner-content/edit">
            <button class="bg-blue-500 text-white px-5 py-2 rounded-md">Edit content</button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerSection: {
      type: Object,
      required: true
    }
  },
  computed: {
    content() {
      return this.bannerSection;
    }
  }
}
</script>
