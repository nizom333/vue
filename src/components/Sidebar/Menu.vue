<template>
    <nav class="sidebar-nav">
        <ul id="sidebarnav">
            <li class="nav-devider"></li>
            <li>
                <router-link to="/">Главная</router-link>
            </li>
            <li>
                <router-link to="/vacancy">Вакансии</router-link>
            </li>
            <li>
                <router-link to="/about">О Приложение</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                MenuLinks: this.$route
            }
        }
    }
</script>

<style scoped>

</style>