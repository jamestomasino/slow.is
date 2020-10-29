<template>
  <div />
</template>

<script>
export default {
  name: 'Homepage',
  components: {},
  data () {
    return {}
  },
  head () {
    return {
      title: 'Slow',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: 'Slow' },
        { hid: 'twtitle', name: 'twitter:title', content: 'Slow' },
        { hid: 'googlename', itemprop: 'name', content: 'Slow' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'ogdescription', property: 'og:description', content: '' },
        { hid: 'twdescription', name: 'twitter:description', content: '' },
        { hid: 'googledescription', itemprop: 'description', content: '' },
        { hid: 'ogurl', property: 'og:url', content: 'https://www.slow.is/' + this.$route.path },
        { hid: 'twsite', name: 'twitter:site', content: 'https://www.slow.is/' + this.$route.path }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'https://www.slow.is/' + this.$route.path }
      ]
    }
  }
}
</script>

<style>
</style>
