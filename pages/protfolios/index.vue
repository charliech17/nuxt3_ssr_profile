<script setup lang="ts">
import { getRandomInt } from "@/utils/baseUtils"

const { tm,rt } = useI18n()
const portFoliosList: any = ref(tm("portFoliosList"))
</script>

<template>
    <div class="p-8">
        <h1 class="text-center jh-colorPrimary">{{ $t("protfolioTitle")}}</h1>
        <div class="mt-5">
            <el-card 
                v-for="info ,index in portFoliosList"
                :key="index"
                class="max-w-[700px] mx-auto"
                :class="{'mt-5':index !== 0}"
            >
                <h2 class="text-center">{{ $rt(info["title"]) }}</h2>
                <div 
                    class="md:flex gap-8 items-center mt-4"
                    :class="{'flex-row-reverse': index%2 == 1}"
                >
                    <div class="text-center">
                        <el-image
                            :src="`https://source.unsplash.com/random? ${rt(info['imgSearchKey'])}/500x500?sig=${getRandomInt(1,6)}`"
                            style="max-height: 250px;max-width: 300px;"
                            fit="cover"
                        />
                    </div>
                    <div class="mt-4 md:m-0">
                        <h3 class="jh-colorPrimary font-bold">{{ $rt(info["feature"]["subtitle"]) }}</h3>
                        <ul class="list-decimal pl-4">
                            <li v-for="detail in info['feature']['details']">{{ $rt(detail) }}</li>
                        </ul>
                        <h3 class="mt-4 jh-colorPrimary font-bold">{{ $rt(info["technical"]["subtitle"]) }}</h3>
                        <ul :class="{
                            'list-decimal pl-4': info['technical']['details'].length > 1
                            }"
                        >
                            <li v-for="detail in info['technical']['details']">{{ $rt(detail) }}</li>
                        </ul>
                        <h3 class="mt-4 jh-colorPrimary font-bold">{{ $rt(info["link"]["subtitle"]) }}</h3>
                        <a 
                            class="jh-colorSecondary cursor-pointer" 
                            @click="navigateTo(
                                    $rt(info['link']['linkTo']),
                                    { external: $rt(info['link']['isExternal']) === 'Y' ? true : false })"
                        >{{ $rt(info["link"]["linkTxt"]) }}</a>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>