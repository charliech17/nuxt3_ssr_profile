<template>
  <div>
    <h1 class="text-center text-blue-700 dark:text-white">Test</h1>
    <button class="dark:text-white" @click="toggleDark()">深色</button>
    <div class="primary-bg">aasdfasdfasf</div>
  </div>
</template>

<script setup>
const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>