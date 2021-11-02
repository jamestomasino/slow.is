<template>
  <div>
    <Meta name="googlebot" content="noindex" />
    <div id="skip">
      <a class="skip-main" href="#main">Skip to main content</a>
    </div>
    <div id="main" ref="main" aria-label="main" role="main">
      <slot />
    </div>
  </div>
</template>
