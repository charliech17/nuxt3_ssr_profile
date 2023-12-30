<script lang="ts" setup>
import { useI18nStore } from "@/stores/baseStore"
import type { DropdownInstance } from 'element-plus'

const props = defineProps<{useType?: 'select' | 'dropdown'}>()
const i18nStore = useI18nStore()

const { t } = useI18n()
const dropdownRef = ref<DropdownInstance>()
const nowCommand = ref(i18nStore.locale)
const isClick = ref(false)

function handleCommand(command: string) {
    nowCommand.value = command
    isClick.value = true
}

function handleVisible() {
    if(isClick.value) {
        setTimeout(async ()=>{
            isClick.value = false
            await i18nStore.setLocale(nowCommand.value)
            ElMessage({
                message: t("switchLanguage"),
                type: 'success'
            })
        },100)
    }
}
</script>

<template>
    <el-select
        v-if="props.useType === 'select'"
        :model-value="i18nStore.locale"
        @change="(newLocale) => i18nStore.setLocale(newLocale)"
        :placeholder="$t('selectPlaceholder')"
    >
        <el-option
            v-for="item in i18nStore.languageOptions"
            :effect="'dark'"
            :size="'small'"
            :key="item.value"
            :label="$t(item.label)"
            :value="item.value"
        />
    </el-select>
    <el-dropdown 
        v-else
        ref="dropdownRef"
        @command="handleCommand"
        @visible-change="handleVisible"
    >
        <svg 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 24 24" 
            width="1.2em" 
            height="1.2em"
        >
            <path fill="currentColor" d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"></path>
        </svg>
        <template #dropdown>
            <el-dropdown-item 
                v-for="item in i18nStore.languageOptions"
                :command="item.value"
                :key="item.value"
            >{{ $t(item.label) }}</el-dropdown-item>
        </template>
    </el-dropdown>
</template>