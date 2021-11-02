<template>
  <div>
    <Head>
      <Title>Slow.is</Title>
      <Meta name="description" content="An intentional publishing platform." />
      <Link rel="canonical" :href="`https://slow.is${$route.path}`" />
    </Head>
    <Body class="home" />

    <h1>Slow.is</h1>
    <MetaAbout />
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {}
  }
}
</script>
