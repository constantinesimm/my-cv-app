<template>
    <d-row>
        <d-col class="no-pd-left fixed-container">
            <div class="fixed-element">
                <d-alert show theme="primary" class="block-title">Contact Me</d-alert>
                <ul>
                    <li >
                        <img src="../../assets/images/icons/phone_icon.png" alt="phone_icon"/>
                        <a href="tel:+380672230967">+38 (067) 223 09 67</a>
                    </li>
                    <li>
                        <img src="../../assets/images/icons/email_icon.png" alt="email_icon"/>
                        <a href="mailto:constantine.peschanov@gmail.com">k.peschanov@gmail.com</a>
                    </li>
                    <li>
                        <img src="../../assets/images/icons/skype.png" alt="skype_icon"/>
                        <a href="skype:live:constantine.peschanov?chat" target="_blank">live:constantine.peschanov</a>
                    </li>
                    <li>
                        <img src="../../assets/images/icons/telegram.png" alt="telegram"/>
                        <a href="tg://resolve?domain=ConstantineSimm" target="_blank">@ConstantineSimm</a>
                    </li>
                    <li>
                        <img src="../../assets/images/icons/viber.png" alt="viber"/>
                        <a href="viber://chat?number=380672230967" target="_blank">+38 (067) 223 09 67</a>
                    </li>
                </ul>
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: "ContactBlock"
    }
</script>

<style scoped>
    .no-pd-left {
        padding-left: 0;
    }
    .fixed-container {
        height: 235px;
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

    @media print {
        .fixed-container {
            position: relative;
        }
        .fixed-element {
            position: relative;
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
        width: 30px;
        height: 30px;
        margin-right: 10px;
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