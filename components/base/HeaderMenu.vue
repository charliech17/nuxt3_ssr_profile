<script setup lang="ts">
import { useDeviceStore,useHeaderStore } from "@/stores/baseStore"
import DarkLightSwitch from "@/components/base/DarkLightSwitch.vue";
import LanguageSelect from "@/components/base/LanguageSelect.vue";
import { More , Setting } from '@element-plus/icons-vue'

const deviceStore = useDeviceStore()
const headerStore = useHeaderStore()

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
                <LanguageSelect useType="dropdown" class="mr-3"/>
                <DarkLightSwitch />
            </div>
        </div>
    </el-menu>
</template>