<template>
  <div class="flex flex-col gap-4">
    <div class="border rounded-md">
      <BannerContent :bannerSection="bannerSection" />
    </div>
    <div class="border rounded-md">
      <Skills :skills="skills" />
    </div>
    <div class="border rounded-md">
      <SkillsIcon :skillIcons="skillIcons" />
    </div>
    <div class="border rounded-md">
      <SocialLinks :socialLinks="socialLinks" :id="id" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BannerContent from './BannerContent.vue';
import Skills from './Skills.vue';
import SocialLinks from './SocialLinks.vue';
import SkillsIcon from './SkillsIcon.vue';

export default {
  components: {
    BannerContent,
    Skills,
    SocialLinks,
    SkillsIcon
  },
  computed: {
    ...mapState(["homeData"])
  },
  data() {
    return {
      bannerSection: null,
      aboutSection: null,
      skills: null,
      skillIcons: null,
      socialLinks: null,
      id: null
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
          this.bannerSection = newVal;
          this.id = newVal.id;
          this.aboutSection = newVal.aboutSection;
          this.skills = newVal.skills;
          this.skillIcons = newVal.skillIcons;
          this.socialLinks = newVal.socialLinks;
        }
      }
    }
  }
}
</script>
