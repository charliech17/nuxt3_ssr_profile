<script setup lang="ts">
import { useDeviceStore,useHeaderStore,useI18nStore } from "@/stores/baseStore"
import DarkLightSwitch from "@/components/base/DarkLightSwitch.vue";
import LanguageSelect from "@/components/base/LanguageSelect.vue";
import { More , Setting } from '@element-plus/icons-vue'

const deviceStore = useDeviceStore()
const headerStore = useHeaderStore()
const i18nStore = useI18nStore()

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
                <el-icon 
                    class="mr-4 cursor-pointer" 
                    :size="20" 
                    @click="headerStore.toggleShowMenu('toggle'); headerStore.setTriggerMenu('settings');"
                >
                    <Setting />
                </el-icon>
                <el-icon 
                    class="cursor-pointer" 
                    :size="20" 
                    @click="headerStore.toggleShowMenu('toggle'); headerStore.setTriggerMenu('navigator');"
                >
                    <More />
                </el-icon>
            </div>
            <div 
                v-else
                class="flex items-center"
            >
                <li 
                    :class="{'jh-colorSecondary':i18nStore.localePath(site.link) === useRoute().path}"
                    class="mr-3 p-1 rounded cursor-pointer jh-itemHover"
                    v-for="site in headerStore.mySites"
                    @click="navigateTo(i18nStore.localePath(site.link));headerStore.toggleShowMenu('isShow',false)"
                >
                    {{ $t(site.id) }}
                </li>
                <LanguageSelect useType="dropdown" class="mr-3"/>
                <DarkLightSwitch />
            </div>
        </div>
    </el-menu>
</template>