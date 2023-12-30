<script setup lang="ts">
import { useI18nStore,useDeviceStore } from "@/stores/baseStore"
import DarkLightSwitch from "@/components/base/DarkLightSwitch.vue";
import LanguageSelect from "@/components/base/LanguageSelect.vue";
import { Close , More, Right , Setting } from '@element-plus/icons-vue'
import colors from "@/assets/css/global-style/color.module.scss"

const isShowMenu = ref(false)
const triggerMenu = ref<"settings"|"navigator"|"">('')
const mySites = ref([{id:"portfolio",link:"/protfolios"},{id:"resume",link:"/"}])

const i18nStore = useI18nStore()
const deviceStore = useDeviceStore()

</script>

<template>
    <el-menu
        class="items-center justify-between"
        mode="horizontal"
        :ellipsis="false"
    >
        <el-image
            @click="navigateTo(useI18nStore().localePath('/'))"
            class="ml-2 cursor-pointer"
            style="width: 100px"
            src="/index/profile_logo.png"
            alt="josh profile logo"
        />
        <div class="mr-4">
            <div v-if="deviceStore.isMobile">
                <el-icon class="mr-4 cursor-pointer" :size="20" @click="isShowMenu = !isShowMenu; triggerMenu='settings'">
                    <Setting />
                </el-icon>
                <el-icon class="cursor-pointer" :size="20" @click="isShowMenu = !isShowMenu;triggerMenu='navigator';">
                    <More />
                </el-icon>
            </div>
            <div 
                v-else
                class="flex items-center"
            >
                <LanguageSelect useType="dropdown" class="mr-3"/>
                <DarkLightSwitch />
            </div>
        </div>
    </el-menu>
    <el-drawer
        v-model="isShowMenu"
        :direction="'rtl'"
        :withHeader="false"
        size="100%"
    >
        <div class="text-right">
            <el-icon class="cursor-pointer" :size="20" @click="isShowMenu = !isShowMenu; triggerMenu=''">
                <Close />
            </el-icon>
        </div>
        <div v-if="triggerMenu === 'settings'">
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
        <div v-else-if="triggerMenu === 'navigator'">
            <h3 class="text-center mt-4">{{$t("navigatorTitle")}}</h3>
            <ol>
                <li 
                    v-for="site in mySites"
                    class="flex justify-between items-center p-4 mt-2 border-solid border-b-2 cursor-pointer"
                    :style="{'borderColor': colors.$primary}"
                    @click="navigateTo(i18nStore.localePath(site.link));isShowMenu=false;"
                >
                    <h4>{{ $t(site.id) }}</h4>
                    <el-icon :size="20"><Right /></el-icon>
                </li>
            </ol>
        </div>
    </el-drawer>
</template>