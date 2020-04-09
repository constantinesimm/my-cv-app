<template>
    <d-row>
        <d-col class="no-pd-left fixed-container">
            <div class="fixed-element">
                <d-alert show theme="primary" class="block-title">Follow Me</d-alert>
                <ul>
                    <li >
                        <img src="../../assets/images/icons/github.png" alt="github-icon"/><a href="https://github.com/constantinesimm" target="_blank" v-d-tooltip.hover.top="'Github profile'">constantinesimm</a>
                    </li>
                    <li>
                        <img src="../../assets/images/icons/facebook.png" alt="facebook-icon"/><a href="https://facebook.com/konstantin.peschanov" target="_blank" v-d-tooltip.hover.right="'Facebook profile'">konstantin.peschanov</a>
                    </li>
                    <li>
                        <img src="../../assets/images/icons/linkedin.png" alt="linkedin-icon"/><a href="https://linkedin.com/in/konstantin-peschanov-273812100/" target="_blank" v-d-tooltip.hover.bottom="'LinkedIn profile'">konstantin-peschanov</a>
                    </li>
                </ul>
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: "FollowmeBlock"
    }
</script>

<style scoped>
    .no-pd-left {
        padding-left: 0;
    }
    .fixed-container {
        height: 181px;
    }
    .fixed-element {
        position: fixed;
        z-index: 2;
    }
    .alert {
        width: 200px;
        border-radius: 0 .75rem .75rem 0;
        padding: 0.25rem 1rem;
        font-size: 1rem;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .fixed-element {
            position: relative;
        }
        .alert {
            width: 75%;
        }
    }
    ul {
        margin: 0 0 15px 0;
        padding-left: 10px;
        list-style: none;
    }
    li {
        margin: 5px 0;
    }
    li:hover {
        opacity: .5;
    }
    li > img {
        width: 35px;
        height: 35px;
        margin-right: 15px;
    }
    li > a {
        display: inline-block;
        font-size: .9rem;
        font-weight: 500;
    }

    li > a:before {
        content:'';
        position: absolute;
        display: inline-block;
        top: auto;
        margin-top: 25px;
        left: 60px;
        width: 0;
        height: 3px;
        background: #007bff;
        border-radius: 5px;
        transition: all 1.5s ease;
    }
    li > a:hover:before {
        width: 75%;
    }
</style>