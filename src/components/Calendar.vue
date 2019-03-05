<template>
    <full-calendar :events="events" />
</template>

<script>
    import FullCalendar from 'vue-fullcalendar';
    export default {
        name: "Calendar",
        components: {
            FullCalendar
        },
        data() {
            return {
                events: [{
                    title: 'Anniversaire Jean',
                    dateStart: '2019-05-05',
                    cssClass: 'green',
                    YOUR_DATA: {}
                },
                    {
                        title: 'Formation JS',
                        dateStart: '2019-04-04',
                        dateEnd: '2018-05-04',
                        cssClass: 'red'
                    }]
            }
        }
    }
</script>

<style scoped>
    .red {
        background: red !important;
        color: whitesmoke !important;
    }
    .blue {
        background: dodgerblue !important;
        color: whitesmoke !important;
    }
    .orange {
        background: orange !important;
        color: white !important;
    }
    .green {
        background: green !important;
        color: white !important;
    }
    .blue,
    .orange,
    .red,
    .green {
        font-size: 13px;
        font-weight: 500;
        text-transform: capitalize;
    }
    .event-item {
        padding: 2px 0 2px 4px !important;
    }
</style>