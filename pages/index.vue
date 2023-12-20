<script lang="ts" setup>
    import { getRandomInt } from "@/utils/baseUtils"

    const loadingImgs = ref([
        "/index/soon.gif",
        "/index/wall.gif",
        "/index/work-in-progress.gif",
        "/index/loading.gif",
    ])
</script>

<template>
    <div class="p-8">
        <h1 class="text-center">{{ $t('homeTitle') }}</h1>
        <div class="mt-5 text-center">
            <el-image 
                style="width: 150px; height: 150px; border-radius: 50%;" 
                :src="`https://source.unsplash.com/random? user/500x500?sig=${getRandomInt(1,6)}`" 
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
        <p class="mt-5 text-justify">{{ $t('introduction') }}</p>
    </div>
</template>