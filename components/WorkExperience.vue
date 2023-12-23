<script setup lang="ts">
    import { getImgSrc, getI18nTranlate } from "@/utils/baseUtils"
    import colors from "@/assets/css/global-style/color.module.scss"
    import  { workExpData } from "@/static/workExperience"

    const workExperience = ref(workExpData)
    function addWorkStatus(status: string) {
        return status ? ` (${getI18nTranlate('stillWorking')})` : ''
    }
</script>

<template>
    <div>
        <h2 class="text-center">{{ $t("workingExpTitle") }}</h2>
        <el-timeline class="mt-4">
            <el-timeline-item 
                v-for="item in workExperience"
                :timestamp="`
                    ${item.startTime 
                        ? new Date(item.startTime).toISOString().split('T')[0]
                        : new Date().toISOString().split('T')[0]
                    }` + addWorkStatus(item.status)" 
                :color="item.colorActive"
                placement="top"
            >
                <div class="text-center mt-4">
                    <el-image style="height: 50px; width: auto;" :src="item.company.img"></el-image>
                </div>
                <div class="relative">
                    <el-image class="absolute -right-3 top-1/2" style="height: 40px;width: auto;" :src="item.illustrateIcon"></el-image>
                </div>
                <el-card class="mt-4">
                    <div class="flex items-center">
                        <h4 class="mr-4">{{ $t(item.company.nameId) }}</h4>
                        <h6 class="font-bold" :style="{'color': colors.$primary}">
                            {{ $t(item.company.role) }}
                        </h6>
                    </div>
                    <ol class="list-inside list-decimal">
                        <li class="mt-3" v-for="learnitme in $tm(item.learningList)">{{ $rt(learnitme) }}</li>
                    </ol>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
