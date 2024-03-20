<template>
  <div class="flex flex-col gap-4">
    <div>
        <BannerContent :bannerSection="bannerSection" />
    </div>
   <div>
     <AboutContent :aboutSection="aboutSection" />
   </div>
    <div>
        <Skills :skills="skills" />
    </div>
    <div>
        <SocialLinks :socialLinks="socialLinks" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BannerContent from './BannerContent.vue';
import AboutContent from './AboutContent.vue';
import Skills from './Skills.vue';
import SocialLinks from './SocialLinks.vue';

export default {
  components: {
    BannerContent,
    AboutContent,
    Skills,
    SocialLinks
  },
  computed: {
    ...mapState(["homeData"])
  },
  data() {
    return {
      bannerSection: null,
      aboutSection: null,
      skills: null,
      socialLinks: null
    };
  },
  methods: {
    ...mapActions(["getHomeData"]),
  },
  created() {
    this.getHomeData();
  },
  watch: {
    homeData: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.bannerSection = newVal.bannerSection;
          this.aboutSection = newVal.aboutSection;
          this.skills = newVal.skills;
          this.socialLinks = newVal.socialLinks;
        }
      }
    }
  }
}
</script>
