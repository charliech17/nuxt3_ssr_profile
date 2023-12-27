<script setup lang="ts">
import { Close , Moon, More, Right , Setting, Sunny } from '@element-plus/icons-vue'
import colors from "@/assets/css/global-style/color.module.scss"

const isShowMenu = ref(false)
const triggerMenu = ref<"settings"|"navigator"|"">('')

const isDark = useDark({
        valueDark: 'dark',
        valueLight: 'light',
    })
const toggleDark = useToggle(isDark)

const languageOptions = [
    {value: 'en',label: 'english'},
    {value: 'zh-tw',label: 'chineseTradition'},
]
const { locale,setLocale } = useI18n()

const mySites = ref([{id:"portfolio",link:"/protfolios"},{id:"resume",link:"/"}])

</script>

<template>
    <el-menu
        class="items-center"
        mode="horizontal"
        :ellipsis="false"
    >
        <el-image
            @click="navigateTo('/')"
            class="ml-2 cursor-pointer"
            style="width: 100px"
            src="/index/profile_logo.png"
            alt="josh profile logo"
        />
        <div class="flex-grow" />
        <el-icon class="mr-4 cursor-pointer" :size="20" @click="isShowMenu = !isShowMenu; triggerMenu='settings'">
            <Setting />
        </el-icon>
        <el-icon class="cursor-pointer" :size="20" @click="isShowMenu = !isShowMenu;triggerMenu='navigator';">
            <More />
        </el-icon>
        <div class="mr-4"></div>
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
            </div>
            <div class="flex justify-between mt-4">
                <h4>{{$t("languageSwitchTitle")}}</h4>
                <el-select
                    :model-value="locale"
                    @change="(newLocale) => setLocale(newLocale)"
                    :placeholder="$t('selectPlaceholder')"
                >
                    <el-option
                        v-for="item in languageOptions"
                        :effect="'dark'"
                        :size="'small'"
                        :key="item.value"
                        :label="$t(item.label)"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <div v-else-if="triggerMenu === 'navigator'">
            <h3 class="text-center mt-4">{{$t("navigatorTitle")}}</h3>
            <ol>
                <li 
                    v-for="site in mySites"
                    class="flex justify-between items-center p-4 mt-2 border-solid border-b-2 cursor-pointer"
                    :style="{'borderColor': colors.$primary}"
                    @click="navigateTo(site.link);isShowMenu=false;"
                >
                    <h4>{{ $t(site.id) }}</h4>
                    <el-icon :size="20"><Right /></el-icon>
                </li>
            </ol>
        </div>
    </el-drawer>
</template>