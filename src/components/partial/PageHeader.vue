<template>
    <d-navbar fixed="top" type="dark" theme="primary" class="d-flex flex-row justify-content-center">
        <d-navbar-nav class="d-flex flex-row justify-content-center">
            <d-button class="action-btn" @click="downloadPDF">
                <i class="fas fa-file-pdf fa-2x"></i>
                <span>Download PDF</span>
            </d-button>
            <d-button class="action-btn">
                <i class="fas fa-file-pdf fa-2x"></i>
                <span>Send PDF via email</span>
            </d-button>
        </d-navbar-nav>
    </d-navbar>
</template>

<script>
    export default {
        name: 'PageHeader',
        data() {
            return {
                link: `${ window.location.protocol }//${ window.location.host }`
            }
        },
        methods: {
            downloadPDF() {
                this.$http.post('/get-pdf', { targetURL: this.link })
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>
    .action-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .action-btn > span {
        margin-left: 5px;
    }
</style>