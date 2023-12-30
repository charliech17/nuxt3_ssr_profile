<script setup lang="ts">
    import { useHeaderStore,useI18nStore } from "@/stores/baseStore"
    import { Close , Right } from '@element-plus/icons-vue'
    import DarkLightSwitch from "@/components/base/DarkLightSwitch.vue";
    import LanguageSelect from "@/components/base/LanguageSelect.vue";
    import colors from "@/assets/css/global-style/color.module.scss"
    
    const headerStore = useHeaderStore()
    const i18nStore = useI18nStore()
</script>

<template>
    <el-drawer
        :model-value="headerStore.isShowMenu"
        :direction="'rtl'"
        :withHeader="false"
        size="100%"
    >
        <div class="text-right">
            <el-icon class="cursor-pointer" :size="20" @click="headerStore.toggleShowMenu('toggle'); headerStore.setTriggerMenu('')">
                <Close />
            </el-icon>
        </div>
        <div v-if="headerStore.triggerMenu === 'settings'">
            <h3 class="text-center mt-4">{{ $t("websiteConfigTitle") }}</h3>
            <div class="flex justify-between mt-4">
                <h4>{{$t("colorSwitchTitle")}}</h4>
                <DarkLightSwitch/>
            </div>
            <div class="flex justify-between mt-4">
                <h4>{{$t("languageSwitchTitle")}}</h4>
                <LanguageSelect useType="select"/>
            </div>
        </div>
        <div v-else-if="headerStore.triggerMenu === 'navigator'">
            <h3 class="text-center mt-4">{{$t("navigatorTitle")}}</h3>
            <ol>
                <li 
                    v-for="site in headerStore.mySites"
                    class="flex justify-between items-center p-4 mt-2 border-solid border-b-2 cursor-pointer"
                    :style="{'borderColor': colors.$primary}"
                    @click="navigateTo(i18nStore.localePath(site.link));headerStore.toggleShowMenu('isShow',false)"
                >
                    <h4>{{ $t(site.id) }}</h4>
                    <el-icon :size="20"><Right /></el-icon>
                </li>
            </ol>
        </div>
    </el-drawer>
</template>