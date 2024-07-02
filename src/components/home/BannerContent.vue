<template>
  <div class="shadow-md lg:p-10 p-3">
    <div class="flex items-center justify-between mb-4">
      <h3 class="lg:text-4xl text-xl font-bold">Home content</h3>
      <router-link to="/dashboard">
        <button class="bg-blue-600 lg:hidden block px-5 text-white rounded-md my-5 py-1">Back</button>
      </router-link>
    </div>

    <div>
      <h4 class="text-xl font-semibold mb-4">Name: {{ content?.name }}</h4>
      <div class="lg:flex gap-4">
        <img :src="content?.bannerImage" alt="Banner Image" class="w-60 h-48 p-3 border rounded-md mb-4">
        <img :src="content?.logo" alt="Banner Image" class="w-60 h-48 p-3 border rounded-md mb-4">
      </div>
      <p> <span class="text-md font-semibold">Position:</span> {{ content?.position }}</p>
      <p class="break-words"> <span class="text-md font-semibold">Email:</span> {{ content?.email }}</p>
      <p> <span class="text-md font-semibold">Phone number:</span> {{ content?.phoneNumber }}</p>
      <p> <span class="text-md font-semibold">Address:</span> {{ content?.address }}</p>
      <p> <span class="text-md font-semibold">MapLocation:</span> <a class="text-blue-600 break-words"
          href="{{  content?.addressMapLocation }}" target="_blank" rel="noopener noreferrer">{{
          content?.addressMapLocation }}</a> </p>
      <p> <span class="text-md font-semibold">Resume link:</span> <a class="text-blue-600 break-words"
          href="{{  content?.resumeLink }}" target="_blank" rel="noopener noreferrer">{{ content?.resumeLink }}</a>
      </p>
      <p><span class="text-md font-semibold">Description:</span> {{ content?.description }}</p>
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
