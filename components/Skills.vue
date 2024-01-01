<script setup lang="ts">
    import { useDeviceStore } from "@/stores/baseStore"

    const { tm,rt } = useI18n()
    const deviceStore = useDeviceStore()
    const basicInformation: any = ref(tm("basicInformation"))
</script>

<template>
    <div class="max-w-[800px] mx-auto">
        <h2 class="text-center">{{$t("basicInformationTitle")}}</h2>
        <div v-for="info in basicInformation" :key="rt(info.id)">
            <h3 class="jh-colorPrimary text-center mt-5">{{ rt(info.subTitle) }}</h3>
            <div class="text-center mt-4">
                <el-avatar
                    v-if="rt(info.isAvatar) === 'Y'"
                    style="height: 200px; width: 200px;"
                    :src="rt(info.previewImg)"
                />
                <el-image 
                    v-else
                    :style="{'height': !deviceStore.isMobile ? '300px' : '200px'}"
                    fit="cover"
                    :src="rt(info.previewImg)">
                </el-image>
            </div>
            <div class="mt-5 p-4 rounded">
                <div 
                    v-for="dInfo,index in info.details"
                    :key="index"
                    :class="{'mt-3':index!==0}"
                    class="flex items-center gap-[24px]" 
                >
                    <h4 class="shrink-0 text-center jh-colorSecondary w-[96px]">{{ rt(dInfo.innerTitle) }}</h4>
                    <p>{{ rt(dInfo.info) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>