<template>
  <div class="wrapper">
    <div id="skip">
      <a class="skip-main" href="#main">Skip to main content</a>
    </div>
    <SiteHeader aria-label="site header" />
    <nuxt
      id="main"
      ref="main"
      aria-label="main"
      role="main"
    />
    <References />
    <SiteFooter aria-label="site footer" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SiteHeader from '~/components/template/site-header'
import SiteFooter from '~/components/template/site-footer'

let bodyTag = null

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  },
  computed: {
    ...mapGetters('modals', ['isModalOpen'])
  },
  watch: {
    isModalOpen: (val) => {
      if (val) {
        bodyTag.classList.add('killscroll')
      } else {
        bodyTag.classList.remove('killscroll')
      }
    }
  },
  mounted () {
    bodyTag = document.getElementsByTagName('body')[0]
  },
  head () {
    return {
      title: '',
      meta: [
        { hid: 'ogtitle', property: 'og:title', content: '' },
        { hid: 'twtitle', name: 'twitter:title', content: '' },
        { hid: 'googlename', itemprop: 'name', content: '' },
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
