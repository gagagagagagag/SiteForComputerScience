// Templates
const eventTemplateHTML = $("#event-template").html();
const eventTemplate = Handlebars.compile(eventTemplateHTML);

let canvasEvents = {};

// const calendarEvents = {
//     "11-17-2019": {
//         html: "<span>Calculus Kolos</span>",
//         events: [
//             {
//                 name: "Calculus Quiz",
//                 building: "MiNI",
//                 room: "214",
//                 timeFrom: "14:15",
//                 timeTo: "16:00"
//             },
//             {
//                 name: "DT Test",
//                 building: "MiNI",
//                 room: "301",
//                 timeFrom: "12:15",
//                 timeTo: "14:00"
//             }
//         ]
//     }
// };

const calendarEvents = {
    "11-29-2019": {
        html: "<span>DT Test</span>",
        events: [
            {
                name: "DT Test",
                building: "MiNI",
                room: "101",
                timeFrom: "16:15",
                timeTo: "18:00"
            }
        ]
    },
    "01-20-2020": {
        html: "<span>Calculus Test</span>",
        events: [
            {
                name: "Calculus Test",
                building: "MiNI",
                room: "103",
                timeFrom: "10:15",
                timeTo: "12:00"
            }
        ]
    },
    "12-16-2019": {
        html: "<span>Calculus Test</span>",
        events: [
            {
                name: "Calculus Test",
                building: "MiNI",
                room: "103",
                timeFrom: "10:15",
                timeTo: "12:00"
            }
        ]
    },
    "01-17-2020": {
        html: "<span>Calculus Quiz</span>",
        events: [
            {
                name: "Calculus Quiz",
                building: "MiNI",
                room: "214",
                timeFrom: "14:30",
                timeTo: "16:00"
            }
        ]
    },
    "12-13-2019": {
        html: "<span>Calculus Quiz</span>",
        events: [
            {
                name: "Calculus Quiz",
                building: "MiNI",
                room: "214",
                timeFrom: "14:30",
                timeTo: "16:00"
            }
        ]
    },
    "12-05-2019": {
        html: "<span>Algorythms and Data Structures Test</span>",
        events: [
            {
                name: "Algorythms and Data Structures Test",
                building: "MiNI",
                room: "210",
                timeFrom: "17:15",
                timeTo: "19:00"
            }
        ]
    },
    "11-26-2019": {
        html: "<span>DM Test</span>",
        events: [
            {
                name: "DM Test",
                building: "MiNI",
                room: "329",
                timeFrom: "10:15",
                timeTo: "12:00"
            }
        ]
    },
    "11-18-2019": {
        html: "<span>Calculus Test</span>",
        events: [
            {
                name: "Calculus Test",
                building: "MiNI",
                room: "103",
                timeFrom: "10:15",
                timeTo: "12:00"
            }
        ]
    }
};

const constructEvents = () => {
    for (let event in calendarEvents) {
        canvasEvents[event] = calendarEvents[event].html
    }
};

constructEvents();




const onDayClick = ($el, $contentEl, dateProperties) => {
    const eventKey = `${dateProperties.month}-${dateProperties.day}-${dateProperties.year}`;

    const filteredKeys = Object.keys(calendarEvents).filter(key => key === eventKey);

    if (filteredKeys.length !== 1) {
        return false;
    }

    $("#eventModalTitle").text(`${dateProperties.day}-${dateProperties.month}-${dateProperties.year}`);

    showEvent(calendarEvents[eventKey]);

    $('#event-modal').modal('show');
};

const showEvent = event => {
    $("#eventList").empty();

    for (let i = 0; i < event.events.length; i++) {
        $("#eventList").append(eventTemplate({
            eventFirst: i === 0 ? "d-none" : "",
            eventName: event.events[i].name,
            eventBuilding: event.events[i].building,
            eventRoom: event.events[i].room,
            eventTime: `${event.events[i].timeFrom} - ${event.events[i].timeTo}`
        }));
    }
};

