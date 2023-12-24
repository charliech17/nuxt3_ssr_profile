<script setup lang="ts">
import { getRandomInt } from "@/utils/baseUtils"
</script>

<template>
    <div class="p-8">
        <h1 class="text-center jh-colorPrimary">我的作品集</h1>
        <div class="mt-5">
            <el-card class="max-w-[700px] mx-auto">
                <h2 class="text-center">Nuxt3 個人網頁</h2>
                <div class="md:flex gap-8 items-center mt-4">
                    <div class="text-center">
                        <el-image
                            :src="`https://source.unsplash.com/random? profile/500x500?sig=${getRandomInt(1,6)}`"
                            style="max-height: 250px;max-width: 300px;"
                            fit="cover"
                        />
                    </div>
                    <div class="mt-4 md:m-0">
                        <h3 class="jh-colorPrimary font-bold">特色:</h3>
                        <ul class="list-decimal pl-4">
                            <li>使用nuxt3的ssr功能，優化SEO及第一屏載入速度。</li>
                            <li>使用i18n，支援中英切換。</li>
                            <li>網站亮暗色系切換。</li>
                        </ul>
                        <h3 class="mt-4 jh-colorPrimary font-bold">技術:</h3>
                        <p>nuxt3、element-plus、vueUse、i18n、tailwind</p>
                        <h3 class="mt-4 jh-colorPrimary font-bold">前往:</h3>
                        <a class="jh-colorSecondary cursor-pointer" @click="navigateTo('/')">Link (本網站首頁)</a>
                    </div>
                </div>
            </el-card>
            <el-card class="mt-5 max-w-[700px] mx-auto">
                <h2 class="text-center">Nuxt3 多人即時視訊平台</h2>
                <div class="md:flex justify-between gap-8 items-center flex-row-reverse mt-4">
                    <div class="text-center">
                        <el-image
                            :src="`https://source.unsplash.com/random? meetings/500x500?sig=${getRandomInt(1,6)}`"
                            style="max-height: 250px;max-width: 300px;"
                            fit="cover"
                        />
                    </div>
                    <div class="mt-4 md:m-0">
                        <h3 class="jh-colorPrimary font-bold">特色:</h3>
                        <ul class="list-decimal pl-4">
                            <li>使用p2p連線，達到多人視訊效果。</li>
                            <li>使用websocket，即時更新會議室人數異動資訊。</li>
                            <li>使用otp兩階段驗證使用者登入資訊。</li>
                            <li>首頁手刻垂直橫向滑動及跑馬燈功能。</li>
                        </ul>
                        <h3 class="mt-4 jh-colorPrimary font-bold">技術:</h3>
                        <ul class="list-disc pl-4">
                            <li>前端技術: nuxt3、pinia、vuetify、tailwind、scss</li>
                            <li>後端技術: node.js (express.js)、restful api、socket.io</li>
                            <li>其他: peer to peer、websocket、restful api、mongodb、nodemailer、firebase</li>
                        </ul>
                        <h3 class="mt-4 jh-colorPrimary font-bold">前往:</h3>
                        <a class="jh-colorSecondary" href="https://web-chatapp-nuxt3.netlify.app/">Link</a>
                    </div>
                </div>
            </el-card>
            <el-card class="mt-5 max-w-[700px] mx-auto">
                <h2 class="text-center">React 工程/仿ios 計算機</h2>
                <div class="md:flex justify-between gap-8 items-center flex-row-reverse mt-4">
                    <div class="text-center">
                        <el-image
                            :src="`https://source.unsplash.com/random? calculator/500x500?sig=${getRandomInt(1,6)}`"
                            style="max-height: 250px;max-width: 300px;"
                            fit="cover"
                        />
                    </div>
                    <div class="mt-4 md:m-0">
                        <h3 class="jh-colorPrimary font-bold">特色:</h3>
                        <ul class="list-decimal pl-4">
                            <li>使用vite創建react專案。</li>
                            <li>使用functional components。</li>
                            <li>使用react hook: useState、useRef。</li>
                            <li>透過React.memo避免子元件不必要重新render。</li>
                        </ul>
                        <h3 class="mt-4 jh-colorPrimary font-bold">技術:</h3>
                        <p>react、react hooks</p>
                        <h3 class="mt-4 jh-colorPrimary font-bold">前往:</h3>
                        <a class="jh-colorSecondary" href="https://react-ios-engineering-calculator.netlify.app/">Link</a>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>