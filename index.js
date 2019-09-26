const mixpanelToSlack = require('mixpanel-to-slack')

const slackWebhookUri = 'https://hooks.slack.com/services/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'
const mixpanelApiSecret = 'c8e735e111486aed466fd2965faf4850'
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

