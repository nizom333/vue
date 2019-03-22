<template>
    <aside class="left-sidebar">
        <div class="scroll-sidebar">
            <profile-sidebar />
            <left-menu />
        </div>
    </aside>
</template>

<script>
import ProfileSidebar from './Profile'
import LeftMenu from './Menu'

export default {
    components: {
        ProfileSidebar,
        LeftMenu
    },
}
</script>

<style scoped>

</style>