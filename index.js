const mixpanelToSlack = require('mixpanel-to-slack')
const dotenv= require('dotenv')
dotenv.config()
const {SLACK_WEBHOOK, MIXPANEL_SECRET} = process.env

const slackWebhookUri = SLACK_WEBHOOK
const mixpanelApiSecret = MIXPANEL_SECRET
const interval = 5000

const filter = ({ $ts, event, properties }) => (
  properties['$name']
)

const map = ({ $ts, event, properties }) => ({
  $ts,
  event,
  properties
})

// const channel = '#mixpanel'

mixpanelToSlack({
  slackWebhookUri,
  mixpanelApiSecret,
  interval,
  filter,
  map
})

