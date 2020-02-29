# More Than Prices | Beginner

In the [Prices](tutorial1.html) commentary, you learned how to track and graph [Event](../class/src/index.js~Event.html) 
values on a [Pane](../class/src/index.js~CEvntPane.html). Scripts can track more than just prices 
though. In some cases, it might be useful to track the [Quantities](https://bblake.info/vxa-doc/class/src/index.js~Trade.html#instance-member-Quantity) 
of [Trades](https://bblake.info/vxa-doc/class/src/index.js~Trade.html). 

[//]: # "Figure out better name for tutorials/commentaries"

This sample prepares you to efficiently track and plot values other than prices with a multitude of 
examples and tips. Although, before doing so, there are some very important things to keep in mind.

## Things to Keep in Mind

### Don't Draw Your Symbol's Feed

More often than not, drawing your Symbol's [Event](../class/src/index.js~Event.html) [Feed](../class/src/index.js~CEvntFeed.html) 
can be counterproductive, as it will default the left-hand side of your [Pane](../class/src/index.js~CEvntPane.html) 
to be based on [Prices](../class/src/index.js~Trade.html#instance-member-Price).

### Price Tracking can Blind You

### Timestamps on the Horizontal

## Tracking Other Values

### Event Quantities

### Totals

### Differences

## Results

#### Congratulations

...

#### Troubleshooting

For certain periods throughout the day, EVNTScript will not be able to generate charts. 
This is because the vNine platform makes use of the time in which the exchange is down to process and archive data. 
Below is a chart containing weekly hours of downtime.

| Monday        | Tuesday       | Wednesday     | Thursday      | Friday  | Saturday   | Sunday  |
|---------------|---------------|---------------|---------------|---------|:----------:|---------|
| 4:00pm-5:00pm | 4:00pm-5:00pm | 4:00pm-5:00pm | 4:00pm-5:00pm | 4:00pm- | -          | -5:00pm |

Also, please note that some contracts also stop the exchange from 3:15pm-3:30pm on weekdays.

#### Contact

If you come across any major issue/bugs, please let us know by sending an email with an explanation of what occured to 
[support@vertex-analytics.com](mailto:support@vertex-analytics.com).

Additionally, if there is something that you think we could improve about this documentation, 
please create a new issue at our repository's [issues page](https://github.com/PlGGS/xva-doc/issues).
