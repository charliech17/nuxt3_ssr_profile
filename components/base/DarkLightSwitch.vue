<script setup lang="ts">
import { useDarkStore } from "@/stores/baseStore"
import colors from "@/assets/css/global-style/color.module.scss"
import {  Moon, Sunny } from '@element-plus/icons-vue'
const darkStore = useDarkStore()
</script>

<template>
    <client-only>
        <el-switch
            :model-value="darkStore.isDark"
            @input="() => darkStore.toggleDark()"
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
            :style="{
                '--el-switch-on-color': colors.$switchDark, 
                '--el-switch-off-color': colors.$switchLight
            }"
        />
    </client-only>
</template>