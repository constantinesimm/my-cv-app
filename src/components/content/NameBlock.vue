<template>
    <d-row>
        <d-col class="no-pd-left fixed-container">
            <div class="card-body fixed-element">
                <h3 class="card-title">Konstantin Peschanov</h3>
                <h6 class="card-subtitle mb-2 text-muted">Junior Node.js Developer</h6>
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: "NameBlock"
    }
</script>

<style scoped>
    .no-pd-left {
        padding-left: 0;

    }
    .fixed-container {
        height: 125px;
    }
    .fixed-element {
        position: fixed;
        background: white;
        z-index: 10;
        width: 850px;
    }

    @media (max-width: 768px) {
        .fixed-element {
            position: fixed;
            top: 0;
        }
    }

</style>