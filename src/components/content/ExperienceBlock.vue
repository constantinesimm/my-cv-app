<template>
    <d-row>
        <d-col class="no-pd-left">
            <d-card-header v-d-toggle.experience-block class="no-radius-left mb-1">
                <h5 class="card-title text-primary">Experience</h5>
            </d-card-header>
            <d-collapse visible id="experience-block">
                <d-card-body class="no-pd-top no-page-break">
                    <d-row style="border-bottom: 2px solid #868e9669; padding-bottom: 10px;">
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Technologies</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p>
                                            <span class="font-weight-bold">VCS</span>: Git
                                        </p>
                                        <p>
                                            <span class="font-weight-bold">Database</span>: Mongo DB, PostgreSQL
                                        </p>
                                        <p>
                                            <span class="font-weight-bold">Web</span>: HTML5, CSS3, JS (ES5, ES6)
                                        </p>
                                        <p>
                                            <span class="font-weight-bold">Frameworks</span>: Express.js, Vue.js,
                                            Bootstrap, Shards-ui, Bulma
                                        </p>
                                        <p>
                                            <span class="font-weight-bold">Libraries</span>: Socket.io, Passport.js,
                                            Mongoose, Nodemailer.js, Puppeteer.js etc...
                                        </p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                        <d-col>
                            <d-card class="noshadow">
                                <d-card-body class="no-pd-left">
                                    <h5 class="card-title">Services</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        <p>
                                            <span class="font-weight-bold">Google</span>: Analytics, Tag Manager, Ads,
                                            Firebase, Drive, Docs
                                        </p>
                                        <p>
                                            <span class="font-weight-bold">Troubleshooting & Monitoring</span>: Redmine,
                                            Homer, Graylog, Fail2web
                                        </p>
                                        <p>
                                            <span class="font-weight-bold">Others</span>: Heroku, Postman
                                        </p>
                                    </h6>
                                </d-card-body>
                            </d-card>
                        </d-col>
                    </d-row>

                    <d-card class="noshadow">
                        <d-card-body class="no-pd-left">
                            <h5 class="card-title">Senior Customer Support Manager</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                <span class="project-title text-primary font-weight-bold mr-2">Ringostat CallTracking</span>
                                <span class="project-period font-weight-bold mr-2">01/2016 – 04/2020</span>
                            </h6>
                            <div class="card-subtitle mb-1 text-muted">
                                <p>
                                    <span class="font-weight-bold" style="font-size: 1rem">Project description:</span><br>
                                    <span>
                                        Ringostat Platform is web application service to boost marketing and sales departments.<br>
                                        Including Call Tracking, End-to-End Data Analytics, Voip PBX and more other instruments for solving your business tasks.
                                    </span>
                                </p>
                                <p>
                                    <span class="font-weight-bold" style="font-size: 1rem">Responsibilities:</span>
                                </p>
                                <ul>
                                    <li>Customer support in all technical, service and financial matters.</li>
                                    <li>Troubleshooting VoIP PBX, data analytics, CRM and ERP systems integration.</li>
                                    <li>Support client-side script for collecting visitor data.</li>
                                    <li>Filling the client knowledge base and internal wiki-library.</li>
                                    <li>Mentoring of new employees.</li>
                                </ul>
                            </div>
                        </d-card-body>
                    </d-card>
                    <d-card class="noshadow">
                        <d-card-body class="no-pd-left">
                            <h5 class="card-title">Customer Support Manager (L2)</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                <span class="project-title text-primary font-weight-bold mr-2">Kyivstar JSC</span>
                                <span class="project-period font-weight-bold mr-2">09/2011 – 01/2016</span>
                            </h6>
                            <div class="card-subtitle mb-1 text-muted">
                                <p>
                                    <span class="font-weight-bold" style="font-size: 1rem">Project description:</span><br>
                                    <span>Kyivstar is large telecommunications company providing communications and data services based on a wide range of mobile and fixed technologies.</span>
                                </p>
                                <p>
                                    <span class="font-weight-bold" style="font-size: 1rem">Responsibilities:</span>
                                </p>
                                <ul>
                                    <li>Supporting L1 employees and customers in all technical, service and financial matters.</li>
                                    <li>Monitoring and troubleshooting company inner services and clients network.</li>
                                    <li>Incident Management</li>
                                    <li>Filling company knowledge-base.</li>
                                    <li>Mentoring of new employees.</li>
                                </ul>
                            </div>
                        </d-card-body>
                    </d-card>
                    <d-card class="noshadow">
                        <d-card-body class="no-pd-left">
                            <h5 class="card-title">Customer Support Manager (L1)</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                <span class="project-title text-primary font-weight-bold mr-2">Volia TV</span>
                                <span class="project-period font-weight-bold mr-2">10/2009 – 04/2010</span>
                            </h6>
                            <div class="card-subtitle mb-1 text-muted">
                                <p>
                                    <span class="font-weight-bold" style="font-size: 1rem">Project description:</span><br>
                                    <span></span>
                                </p>
                                <p>
                                    <span class="font-weight-bold" style="font-size: 1rem">Responsibilities:</span>
                                </p>
                                <ul>
                                    <li>Supporting customers in all technical, service and financial matters.</li>
                                    <li>Monitoring and troubleshooting company inner services.</li>
                                    <li>Mentoring of new employees</li>
                                </ul>
                            </div>
                        </d-card-body>
                    </d-card>
                </d-card-body>
            </d-collapse>
        </d-col>
    </d-row>
</template>
<script>
    export default {
        name: "ExperienceBlock"
    }
</script>

<style scoped>
    .noshadow {
        box-shadow: unset;
    }

    .no-pd-left {
        padding-left: 0 !important;
    }

    .no-pd-top {
        padding-top: 0 !important;
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

    h6 > .card-subtitle {
        font-weight: 300;
    }
    .card-subtitle {
        margin-top: 0;
    }

    .card-subtitle > p {
        margin: 0;
        font-weight: 300;
        font-size: .9rem;
    }
</style>