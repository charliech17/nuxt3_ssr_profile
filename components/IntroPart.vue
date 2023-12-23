<script setup lang="ts">
    import { getRandomInt, getImgSrc } from "@/utils/baseUtils"
    const spinnerColor = ref([
        {front_bg:"linear-gradient(#00ccff,#d500f9)",cover_bg:"#262626"},
        {front_bg:"conic-gradient(white,270deg,transparent,white)",cover_bg:"#0e1538"},
        {front_bg:"linear-gradient(#00ccff,#d500f9)",cover_bg:"#0e1538"},
    ])
    const spinnerIdx = ref(getRandomInt(0,spinnerColor.value.length))
    const animateRef = ref<HTMLElement|null>(null)
    

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

    onMounted(()=> {
        setRandAnimate()
    })
</script>

<template>
    <div class="relative">
        <div class="relative z-1 max-w-[300px] mx-auto">
            <div class="absolute" @animationend="setRandAnimate" ref="animateRef"/>
        </div>
        <div 
            class="intro text-justify"
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
        color: colors.$tertiary;
    }
}

.animate-move {
    animation: horizMove 4s ease-in;
    
    width: 50px;
    height: 50px;
    background-image: var(--animate-bg);
    background-position: center;
    background-size: contain;
    z-index: 3;

    @keyframes horizMove{
        0% {
            left: -10%;
            top: -5%;
            opacity: 1;
        }

        100% {
            left: 0%;
            top: var(--animate-top-end);
            opacity: 0.2;
        }
    }
}
</style>