<template>
  <div>
    <h1 class="text-center text-blue-700 dark:text-white">Test</h1>
    <el-switch
      :value="isDark"
      @input="() => toggleDark()"
      :active-action-icon="Moon"
      :inactive-action-icon="Sunny"
      :style="{
          '--el-switch-on-color': colors.$switchDark, 
          '--el-switch-off-color': colors.$switchLight
        }"
    />
    <div class="primary-bg">aasdfasdfasf</div>
  </div>
</template>

<script setup lang="ts">
import { Moon, Sunny} from '@element-plus/icons-vue'
import colors from "@/assets/css/global-style/color.module.scss"

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>