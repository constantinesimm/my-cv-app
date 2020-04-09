<template>
    <d-row>
        <d-col class="no-pd-left">
            <d-card-header  v-d-toggle.experience-block v-d-tooltip.hover.top="'Click collapse'" class="no-radius-left mb-1">
                <h5 class="card-title text-primary">Experience</h5>
            </d-card-header>
            <d-collapse visible id="experience-block">
                <d-card-body class="no-pd-top">
                <d-card class="noshadow">
                    <d-card-body class="no-pd-left">
                        <h5 class="card-title">Job title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Work period</h6>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </d-card-body>
                </d-card>
                <d-card class="noshadow">
                    <d-card-body class="no-pd-left">
                        <h5 class="card-title">Job title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Work period</h6>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </d-card-body>
                </d-card>
                <d-card class="noshadow">
                    <d-card-body class="no-pd-left">
                        <h5 class="card-title">Job title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Work period</h6>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
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
        padding: 1.5rem;
    }
    .card-subtitle {
        margin-top: 0;
    }
</style>