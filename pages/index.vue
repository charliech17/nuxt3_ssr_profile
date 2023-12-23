<script lang="ts" setup>
    import { getRandomInt, getInnerWidth } from "@/utils/baseUtils"
    import WorkExperience from "@/components/WorkExperience.vue";
    import IntroPart from "@/components/IntroPart.vue";

    const loadingImgs = ref([
        "/index/soon.gif",
        "/index/wall.gif",
        "/index/work-in-progress.gif",
        "/index/loading.gif",
    ])
    const imgSize = ref(0)
    
    onMounted(()=> {
        const [maxImgSize,minImgSize] = [getInnerWidth() * 0.9, getInnerWidth() * 0.6]
        imgSize.value = getRandomInt(minImgSize,maxImgSize)
    })
</script>

<template>
    <div class="p-8 relative">
        <h1 class="text-center jh-colorPrimary">{{ $t('homeTitle') }}</h1>
        <div class="mt-10 text-center">
            <el-image 
                style="max-height: 300px;max-width: 400px;"
                :style="{
                    width: `${imgSize}px`,
                    height: `${imgSize}px`,
                    borderRadius: `${getRandomInt(0,51)}%`
                }"
                :src="`https://source.unsplash.com/random? user computer/500x500?sig=${getRandomInt(1,6)}`" 
                fit="cover" 
            >
                <template #placeholder>
                    <el-image 
                        style="border-radius: 0%;"
                        :src="loadingImgs[getRandomInt(0,loadingImgs.length)]" 
                        fit="contain" 
                    />
                </template>
            </el-image>
        </div>
        <IntroPart class="mt-10"/>
        <WorkExperience class="mt-10"/>
    </div>
</template>