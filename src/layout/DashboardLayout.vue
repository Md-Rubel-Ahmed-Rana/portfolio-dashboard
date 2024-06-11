<template>
  <div class="flex lg:p-10 p-5 gap-5">
    <div class="lg:block hidden w-1/6">
      <Sidebar />
    </div>
    <div class="lg:w-5/6 w-full">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/utils/Sidebar.vue';



export default {
  components: {
    Sidebar 
  }
}
</script>
