<script lang="ts" setup>
    const userAccount = ref('');
    const otpCode = ref('');
    const userPassword = ref('');
</script>

<template>
    <div class="mt-8 mx-4">
        <h1 class="text-center jh-colorPrimary">登入系統</h1>
        <el-card class="max-w-[700px] mx-auto mt-8">
            <div class="flex items-center">
                <div class="shrink-0 w-[50px] mr-4">帳號</div>
                <el-input v-model="userAccount" placeholder="請輸入帳號" />
            </div>
            <div class="flex items-center mt-4">
                <div class="shrink-0 w-[50px] mr-4">驗證碼</div>
                <el-input v-model="otpCode" placeholder="請輸入驗證碼">
                    <template #append>
                        <el-button type="primary">{{ '送出' }}</el-button>
                    </template>
                </el-input>
            </div>
            <div class="flex items-center mt-4">
                <div class="shrink-0 w-[50px] mr-4">密碼</div>
                <el-input v-model="userPassword" placeholder="請輸入密碼" />
            </div>
            <div class="mt-8 flex justify-center">
                <el-button class="w-[200px]" size="large">{{ '登入' }}</el-button>
            </div>
        </el-card>
    </div>
</template>