# node-scheduler-create
This sample will show you how to add a new scheduling page using the Nylas Node SDK

<br />

## Setup

### System Dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
CLIENT_ID = ""
CLIENT_SECRET = ""
ACCESS_TOKEN = ""
ACCOUNT_ID = ""
SCHEDULER_NAME = ""
SCHEDULER_SLUG = ""
AVAILABILITY_CALENDAR_ID = ""
BOOKING_CALENDAR_ID = ""
```


Add the above values to a new `.env` file:

```bash
$ touch .env # Then add your env variables
```

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using the `node` command:

```bash
$ node scheduler.js
```

When your message is successfully sent, you'll get the following output in your terminal:

```text
Scheduler page was created successfully at https://schedule.nylas.com/...
```

## Get support

If you found a bug or want to suggest a new [feature/use case/sample], please file an issue.

If you have questions, comments, or need help with code, we're here to help:
- Email us at support@nylas.com

<br />

## Learn more
Visit our [Nylas Node SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more
