<template>
    <d-row>
        <d-col class="no-pd-left">
            <d-card-header  v-d-toggle.profile-block v-d-tooltip.hover.top="'Click collapse'" class="no-radius-left mb-1">
                <h5 class="card-title text-primary">Profile</h5>
            </d-card-header>
            <d-collapse visible id="profile-block">
                <d-card-body class="no-pd-top">
                    <d-row>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Profile</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p><span class="font-weight-bold">Age</span>: 30</p>
                                        <p><span class="font-weight-bold">Location</span>: Cherkasy</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Languages</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p><span class="font-weight-bold">Ukrainian</span>: Native</p>
                                        <p><span class="font-weight-bold">Russian</span>: Native</p>
                                        <p><span class="font-weight-bold">English</span>: Pre-intermediate</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Education</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p style="font-weight: 600">2006 - 2009 / Cherkasy State Business-College</p>
                                        <p>"Programming for electronic computers and automated systems"</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Courses</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p style="font-weight: 600">2019 - 2020 / eKReative Lektorium</p>
                                        <p>"Node.js"</p>
                                        <p style="font-weight: 600">2019 / Andersen Lab</p>
                                        <p>"Javascript basics"</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                    </d-row>
                    <d-row>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Technologies and Libraries</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p><span class="font-weight-bold">VCS</span>: Git </p>
                                        <p><span class="font-weight-bold">Web</span>: HTML5, CSS3, xPath, JS(ES5, ES6, CommonJS)</p>
                                        <p><span class="font-weight-bold">Database</span>: Mongo DB, PostgreSQL</p>
                                        <p><span class="font-weight-bold">Frameworks</span>: Express.js, Vue.js, Bootstrap, Shards-ui, Bulma</p>
                                        <p><span class="font-weight-bold">Package</span>: Socket.io, Passport.js, Mongoose, Nodemailer.js, Puppeteer.js etc...</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Soft and Services</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p><span class="font-weight-bold">Google</span>: Analytics, Tag Manager, Ads, Firebase, Drive, Docs</p>
                                        <p><span class="font-weight-bold">Troubleshooting & Monitoring</span>: Redmine, Homer, Graylog, Fail2web</p>
                                        <p><span class="font-weight-bold">Others</span>: Heroku, Postman, MongoDB Compass</p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                    </d-row>
                </d-card-body>
            </d-collapse>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: 'ProfileBlock',
    }
</script>

<style scoped>
    .noshadow {
        box-shadow: unset;
    }
    .no-pd-left {
        padding-left: 0!important;
    }
    .no-pd-top {
        padding-top: 0!important;
    }
    .no-radius-left {
        border-radius: 0 .75rem .75rem 0;
    }
    .card-title {
        margin-bottom: 0;
    }
    .card-header {
        padding: 0.5rem 1.5rem;
        cursor: pointer;
    }
    .card-body {
        padding: 1rem 1.5rem 0 1.5rem;
    }
    .card-body > p {
        margin: 0;
    }
    .card-subtitle {
        margin-top: 0;
    }
    .card-subtitle > p {
        margin: 0;
        font-size: .9rem;
    }
</style>