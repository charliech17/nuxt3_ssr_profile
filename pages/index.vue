<script lang="ts" setup>
    import { getRandomInt, getInnerWidth, getImgSrc, getI18nTranlate } from "@/utils/baseUtils"
    import colors from "@/assets/css/global-style/color.module.scss"

    const loadingImgs = ref([
        "/index/soon.gif",
        "/index/wall.gif",
        "/index/work-in-progress.gif",
        "/index/loading.gif",
    ])
    const imgSize = ref(0)
    const spinnerColor = ref([
        {front_bg:"linear-gradient(#00ccff,#d500f9)",cover_bg:"#262626"},
        {front_bg:"conic-gradient(white,270deg,transparent,white)",cover_bg:"#0e1538"},
        {front_bg:"linear-gradient(#00ccff,#d500f9)",cover_bg:"#0e1538"},
    ])
    const spinnerIdx = ref(getRandomInt(0,spinnerColor.value.length))
    const animateRef = ref<HTMLElement|null>(null)
    const workExperience = ref([
        {startTime:'2023/09/10',status:'stillWorking',colorActive: colors.$primary,learningList:"codingBarLearning",company:{nameId:"companyCodingBar",img:getImgSrc("/index/cdBar.png")}},
        {startTime:'2022/02/15',status:'stillWorking',colorActive:colors.$primary,learningList:"pollexWorkLearning",company:{nameId:"companyPollex",img: getImgSrc("/index/pollex.png")}},
        {startTime:'2020/09/10',status:'',colorActive: '',learningList:'chruchLearning',company:{nameId:"chruchChanghua",img:""}},
    ])

    function setRandAnimate() {
        animateRef.value!.classList.remove("animate-move")
        setTimeout(()=> {
            const bgList = ["/cool.png","/rocket.png","/sun.png","/code.png","/money.png"]
            const bgUrl = getImgSrc('/index' + bgList[getRandomInt(0,bgList.length)])
            
            const animateBg = `url(${bgUrl})`
            document.documentElement.style.setProperty('--animate-bg', animateBg)

            const sign = getRandomInt(1,11) <= 5 ? -1 : 1
            const topEnd = `${getRandomInt(0,51)* sign}px`
            document.documentElement.style.setProperty('--animate-top-end', topEnd)
            animateRef.value!.classList.add("animate-move")
        },1000)
    }

    function addWorkStatus(status: string) {
        return status ? ` (${getI18nTranlate('stillWorking')})` : ''
    }

    onMounted(()=> {
        const [maxImgSize,minImgSize] = [getInnerWidth() * 0.9, getInnerWidth() * 0.6]
        imgSize.value = getRandomInt(minImgSize,maxImgSize)
        setRandAnimate()
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
        <!-- //todo css 寫法優化 -->
        <div class="relative z-1 max-w-[300px] mx-auto">
            <div class="absolute" @animationend="setRandAnimate" ref="animateRef"/>
        </div>
        <div 
            class="intro mt-10 text-justify"
        >
            <div
                :style="{
                    background: spinnerColor[spinnerIdx].front_bg
                }"
                class="spinner"
            />
            <p class="intro_txt">{{ $t('introduction') }}</p>
            <div 
                :style="{
                    backgroundColor: spinnerColor[spinnerIdx].cover_bg
                }"
                class="cover_bg"
            />
        </div>
        <h2 class="text-center mt-10">{{ $t("workingExpTitle") }}</h2>
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
                <el-card class="mt-3">
                    <h4>{{ $t(item.company.nameId) }}</h4>
                    <ol class="list-inside list-decimal">
                        <li class="mt-3" v-for="learnitme in $tm(item.learningList)">{{ $rt(learnitme) }}</li>
                    </ol>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/global-style/color.module.scss" as colors;
.intro {
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgba(0,0,0,0.3);
    max-width: 300px;
    margin: 0 auto;

    .spinner{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 20%;
        height: 400%;
        animation: rotate 4s linear infinite;
        @keyframes rotate {
            from {
                transform: translate(-50%,-50%) rotate(0deg);
            }
            to {
                transform: translate(-50%,-50%) rotate(360deg);
            }
        }
    }

    .cover_bg{
        content: '';
        position: absolute;
        inset: 3px;
    }
    .intro_txt{
        z-index: 2;
    }
}

.light{
    .intro {
        color: colors.$secondary;
    }
}

.animate-move {
    animation: horizMove 4s ease-in;
    
    width: 50px;
    height: 50px;
    background-image: var(--animate-bg);//"/index/cloudy.png"
    background-position: center;
    background-size: contain;
    z-index: 3;

    @keyframes horizMove{
        0% {
            left: -5%;
            top: 5px;
            opacity: 1;
        }

        100% {
            left: 15%;
            top: var(--animate-top-end);
            opacity: 0.2;
        }
    }
}
</style>