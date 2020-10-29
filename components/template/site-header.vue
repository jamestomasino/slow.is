<template>
  <header class="site-header">
    <nav />
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SiteHeader',
  components: {},
  data () {
    return {
      navigation: {}
    }
  },
  computed: {
    ...mapGetters('modals', ['showMenu'])
  },
  methods: {
    ...mapMutations('modals', ['setMenu'])
  }
}
</script>

<style lang='scss'>
</style>
