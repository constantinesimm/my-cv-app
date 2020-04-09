<template>
    <d-navbar fixed="top" type="dark" theme="primary" class="d-flex flex-row justify-content-center">
        <d-navbar-nav class="d-flex flex-row justify-content-center">
            <d-nav-item href="#">Link</d-nav-item>
            <d-nav-item href="#" disabled>Disabled</d-nav-item>
            <d-nav-item href="#">Link</d-nav-item>
            <d-nav-item href="#" disabled>Disabled</d-nav-item>
        </d-navbar-nav>
    </d-navbar>
</template>

<script>
    export default {
        name: 'PageHeader'
    }
</script>

<style scoped>

</style>