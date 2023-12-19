<script lang="ts" setup>
    import { Moon, Sunny } from '@element-plus/icons-vue'
    import colors from "@/assets/css/global-style/color.module.scss"

    const isDark = useDark({
        valueDark: 'dark',
        valueLight: 'light',
    })
    const toggleDark = useToggle(isDark)
</script>

<template>
    <div class="p-8">
        <h1 class="text-center text-blue-700 dark:text-white">{{ $t('homeTitle') }}</h1>
        <div class="mt-8 text-center">
            <el-image 
                style="width: 50%; height: 50%; border-radius: 50%;" 
                src="https://source.unsplash.com/random/500x500?sig=1" 
                fit="contain" 
            />
        </div>
        <p class="mt-8 text-justify">{{ $t('introduction') }}</p>
        <el-switch
            :model-value="isDark"
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