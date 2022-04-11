require('dotenv').config();
const Nylas = require('nylas');
const {default: Scheduler, SchedulerConfig} = require("nylas/lib/models/scheduler");

Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);

const scheduler = new Scheduler(nylas);
scheduler.accessTokens = [process.env.ACCESS_TOKEN];
scheduler.config = new SchedulerConfig({
    appearance: {
       color: "blue",
       companyName: "Nylas",
       logo: "",
       privacyPolicyRedirect: "",
       showAutoschedule: true,
       showNylasBranding: true,
       showTimezoneOptions: true,
       showWeekView: true,
       submitText: "",
       thankYouRedirect: "",
       thankYouText: "",
       thankYouTextSecondary: "",
    },
    booking: {
        additionalFields: [],
        additionalGuestsHidden: false,
        availableDaysInFuture: 1,
        cancellationPolicy: "",
        confirmationEmailsToGuests: true,
        confirmationMethod: "automatic",
        minBookingNotice: 5,
        minBuffer: 5,
        minCancellationNotice: 10,
        nameFieldHidden: true,
        openingHours: [{
            accountId: process.env.ACCOUNT_ID,
            days: ['M', 'T', 'W', 'R', 'F', 'S', 'U'],
            start: '09:00',
            end: '17:00'
        }],
        schedulingMethod: "round-robin-maximize-fairness"
    },
    calendarIds: {
        [process.env.ACCOUNT_ID]: {
            availability: [process.env.AVAILABILITY_CALENDAR_ID],
            booking: process.env.BOOKING_CALENDAR_ID,
        }
    },
    event: {
        duration: 30,
        location: "Zoom call",
        title: "Node Test"
    },
    locale: "en",
    localeForGuests: "en",
    reminders: [{
        deliveryMethod: "email",
        deliveryRecipient: "both",
        emailSubject: "This is a reminder",
        timeBeforeEvent: 15,
        webhookUrl: ""
    }],
    timezone: "America/New_York"
});
scheduler.name = process.env.SCHEDULER_NAME;
scheduler.slug = process.env.SCHEDULER_SLUG;

scheduler.save();

console.log("Scheduler page was created successfully at https://schedule.nylas.com/" + process.env.SCHEDULER_SLUG)