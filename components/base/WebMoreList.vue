<script lang="ts" setup>
    import { Menu, UserFilled, Folder } from '@element-plus/icons-vue';
    const morePages = ref([
        {pageTxt: '登入頁', pageIcon: UserFilled, navRouter: '/login' },
        {pageTxt: '雲端硬碟', pageIcon: Folder, navRouter: '/storage'}
    ])
</script>

<template>
    <div class="flex">
        <el-dropdown trigger="click">
            <el-icon class="cursor-pointer"><Menu /></el-icon>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="pageInfo in morePages"
                    :icon="pageInfo.pageIcon"
                    @click="navigateTo(pageInfo.navRouter)"
                >{{ pageInfo.pageTxt }}</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>