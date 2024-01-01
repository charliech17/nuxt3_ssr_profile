<script lang="ts" setup>
    import { getRandomInt, getInnerWidth } from "@/utils/baseUtils"
    const loadingImgs = ref([
        "/index/soon.gif",
        "/index/wall.gif",
        "/index/work-in-progress.gif",
        "/index/loading.gif",
    ])
    const imgSize = ref(0)
    onMounted(()=> {
        const [maxImgSize,minImgSize] = [getInnerWidth() * 0.8, getInnerWidth() * 0.6]
        imgSize.value = getRandomInt(minImgSize,maxImgSize)
    })
</script>

<template>
    <div class="md:p-5 rounded-lg max-w-[768px] mx-auto md:flex md:justify-around md:items-center jh-cardStyle">
        <div>
            <h1 class="text-center md:text-left jh-colorPrimary">{{ $t('homeTitle') }}</h1>
            <p class="text-center md:text-left mt-3">{{ $t("homeSubTitle").split(' ').join(" | ") }}</p>
        </div>
        <div class="mt-10 text-center">
            <el-image 
                style="max-height: 300px;max-width: 400px;"
                :style="{
                    width: `${imgSize}px`,
                    height: `${imgSize}px`,
                    borderRadius: `${getRandomInt(0,40)}%`
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
    </div>
</template>