<template>
  <PlainHamburger v-on="$listeners" v-bind="{...$props, ...$attrs}"/>
</template>

<script>
import PlainHamburger from '../PlainHamburger.vue'

export default {
  components: { PlainHamburger },
  inheritAttrs: false
}
</script>

<style>
.hamburger--3dx .hamburger-box {
  perspective: 80px;
}
.hamburger--3dx .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx .hamburger-inner__before,
.hamburger--3dx .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx.hamburger--active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(180deg);
}
.hamburger--3dx.hamburger--active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dx.hamburger--active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
/*
       * 3DX Reverse
       */
.hamburger--3dx-r .hamburger-box {
  perspective: 80px;
}
.hamburger--3dx-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx-r .hamburger-inner__before,
.hamburger--3dx-r .hamburger-inner__after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx-r.hamburger--active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(-180deg);
}
.hamburger--3dx-r.hamburger--active .hamburger-inner__before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dx-r.hamburger--active .hamburger-inner__after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
</style>
