<script lang="ts" setup>
import { useI18nStore } from "@/stores/baseStore"
const i18nStore = useI18nStore()
</script>

<template>
    <el-select
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
</template>