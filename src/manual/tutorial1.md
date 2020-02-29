# Prices | Beginner

This sample prepares you to track [Event](../class/src/index.js~Event.html) values and 
test for the highest and lowest prices.

## Declaring your variables

Once you've opened your Javascript editor, you should see your default CEVNTPane and CEVNTFeed 
variables along with some new ones. These are most commonly defined as gEvntPane and gPaneFeed.  

```js
var gEvntPane;
var gPaneFeed;
var gFeedDraw;
var kSymbolName = "";

var gCalcTop, gCalcBot;
var gStatTop, gStatBot;
var gDrawTop, gDrawBot;

var gOnFirstEvent = true; //tracks whether or not our initial value has been set
var gTopPrice = 0.0; //tracks the top price value
var gBotPrice = 0.0; //tracks the bottom price value
```

- [CEvntCalc](../class/src/index.js~CEvntCalc.html) ```gCalcTop, gCalcBot```  
Make sure to create two variables to save your top and bottom-most prices.

- [CEvntStat](../class/src/index.js~CEvntStat.html) ```gStatTop, gStatBot```  
You'll also need to create two variables to display your top and bottom-most prices in your pane.

- [CEVNTDraw](../class/src/index.js~CEvntDraw.html) ```gDrawTop, gDrawBot```  
Finally, you'll need to create two variables to draw lines corresponding to your top and 
bottom-most prices.

- [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) ```gOnFirstEvent```  
Since we'll be starting each symbol time period at an undetermined price, we'll need the first 
price as a starting point to base the rest of our conditional statements on.

- [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) ```gTopPrice, gBotPrice```  
Finally, we'll need two simple variables to hold the number value corresponding to the highest 
and lowest prices of the period.

## Initialization

Next, you'll need to initialize your variables. In a way, this step is very similar to the 
[onLoad](manual.html#onload) section of the manual's introduction to the built in [onLoad](../function/index.html#static-function-onLoad) 
function, but this time, you're going to need to prepare, or *initialize*, a few more variables.

### Your Pane

When initializing your [Pane](../class/src/index.js~CEvntPane.html), there are two additional 
fields that allow yout to apply attributes to it. 

```js
gEvntPane = MakePane();

gEvntPane.title = "Top & Bottom Prices"; //text at the top of pane
gEvntPane.fillStyle = "#030308"; //background color in hexidecimal as a String
```

- [title](../class/src/index.js~CEvntPane.html#instance-member-title) ```gEvntPane.fillStyle```  
The title is a simple [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) 
that you can make use of to easily identify this pane from the others on your dashboard.

- [fillStyle](../class/src/index.js~CEvntPane.html#instance-member-fillStyle) ```gEvntPane.fillStyle```  
The fill style fills the background of your [Pane](../class/src/index.js~CEvntPane.html) with any 
color of your choosing. Just make sure that you format your value as a hexidecimal color with a # 
in a string like: ```"#000000"```

### Your Feed

Just like in the manual's [onLoad](manual.html#onLoad) section, you'll need to make sure your 
[Feed](../class/src/index.js~CEvntFeed.html) is properly initialized in order to see your 
symbol's events.

```js
gPaneFeed = gEvntPane.MakeFeed(kSymbolName);
gFeedDraw = gEvntPane.MakeDraw(gPaneFeed);
```

[//]: # "Ask about reintroducing these two methods or just referring back to the manual again"

### Top price

Now that you've created your [Calc](../class/src/index.js~CEvntCalc.html), 
[Stat](../class/src/index.js~CEvntStat.html), and [Draw ](../class/src/index.js~CEvntDraw.html) 
variables to track and draw your top and bottom prices, it's time to give them a purpose.

#### MakeCalc

The first of your variables is the easiest to initialize, because it doesn't have any optional 
attributes. More importantly, it's also the easiest to understand. The 
[MakeCalc](../class/src/index.js~CEvntFeed.html#instance-method-MakeCalc) function returns a 
new [Calc](../class/src/index.js~CEvntCalc.html) object, and we can make use of that by 
setting our ```gCalcTop``` variable equal to the function.

```js
gCalcTop = gPaneFeed.MakeCalc();
```

- [MakeCalc](class/src/index.js~CEvntFeed.html#instance-method-MakeCalc) ```gPaneFeed.MakeCalc()```  
Creates a [Calc](../class/src/index.js~CEvntCalc.html) object that is able to store calculated 
values.

#### MakeDraw

While not integral to tracking [Event](../class/src/index.js~Event.html) values in your symbol, 
drawing a line representing the value you're tracking can be helpful for a number of different 
reasons. Before you're sure your value tracking is working properly, 
[Draw](../class/src/index.js~CEvntDraw.html) objects are extremely useful for troubleshooting, 
and after everything's working, they make it easy to track how the value you're tracking has 
been changing over time.

```js
gDrawTop = gEvntPane.MakeDraw(gCalcTop);

gDrawTop.lineWidth = 3.0;
gDrawTop.strokeStyle = "#f4f427";
```

- [MakeDraw](../class/src/index.js~CEvntPane.html#instance-method-MakeDraw) ```gEvntPane.MakeDraw(gCalcTop)```  
Creates a new [Draw](../class/src/index.js~CEvntDraw.html) object that renders lines on your 
[Pane](../class/src/index.js~CEvntPane.html) to represent the state of the values you're 
tracking with the [Calc](../class/src/index.js~CEvntCalc.html) object you pass into it.

- [lineWidth](../class/src/index.js~CEvntDraw.html#instance-member-lineWidth) ```gDrawTop.lineWidth```  
The line width is a [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) 
that represents the width of the line in pixels.

- [strokeStyle](../class/src/index.js~CEvntDraw.html#instance-member-strokeStyle) ```gDrawTop.strokeStyle```  
The stroke style fills the line representing the values you're tracking with any color of your 
choosing. Just make sure that you format your value as a hexidecimal color with a # in a 
string like: ```"#000000"```

#### MakeStat

The last variable you need to initialize in order to track your top price is your [Stat](../class/src/index.js~CEvntFeed.html) 
variable. This variable is used to display the status of whatever it is that you're tracking 
in a box that appears in the top left of your [pane](class/src/index.js~CEvntPane.html).

```js
gStatTop = gEvntPane.MakeStat(gCalcTop);

gStatTop.title = "Top Price";
gStatTop.fillStyle = "#f4f427";
```

- [MakeStat](../class/src/index.js~CEvntPane.html#instance-method-MakeStat) ```gEvntPane.MakeStat(gCalcTop)```  
Creates a [Stat](../class/src/index.js~CEvntStat.html) object that is used to display any value 
provided by the [Calc](../class/src/index.js~CEvntCalc.html) object that you pass into it in the 
top left corner of your [Pane](../class/src/index.js~CEvntPane.html).

- [title](../class/src/index.js~CEvntStat.html#instance-member-title) ```gDrawTop.lineWidth```  
The title represents the text that will be displayed before the value your [Stat](../class/src/index.js~CEvntStat.html) 
is tracking.

- [fillStyle](../class/src/index.js~CEvntStat.html#instance-member-fillStyle) ```gDrawTop.strokeStyle```  
The fill style fills the background of your [Stat](../class/src/index.js~CEvntStat.html) with any 
color of your choosing. Just make sure that you format your value as a hexidecimal color with a # 
in a string like: ```"#000000"```

### Bottom price

In order to track the lowest price of your symbol period in the same way as the highest, you'll 
also need to initialize your three bottom price tracking variables.

#### MakeCalc

Again, the 
[MakeCalc](../class/src/index.js~CEvntFeed.html#instance-method-MakeCalc) function is used to return a 
new [Calc](../class/src/index.js~CEvntCalc.html) object to our ```gCalcTop``` variable equal 
to the function.

```js
gCalcBot = gPaneFeed.MakeCalc();
```

- [MakeCalc](class/src/index.js~CEvntFeed.html#instance-method-MakeCalc) ```gPaneFeed.MakeCalc()```  
Creates a [Calc](../class/src/index.js~CEvntCalc.html) object that is able to store calculated 
values.

#### MakeDraw

Then, you can initialize 

While not integral to tracking [Event](../class/src/index.js~Event.html) values in your symbol, 
drawing a line representing the value you're tracking can be helpful for a number of different 
reasons. Before you're sure your value tracking is working properly, [Draw](../class/src/index.js~CEvntDraw.html) 
objects are extremely useful for troubleshooting, and after everything's working, they make it 
easy to track how the value you're tracking has been changing over time.

```js
gDrawTop = gEvntPane.MakeDraw(gCalcTop);

gDrawTop.lineWidth = 3.0;
gDrawTop.strokeStyle = "#f4f427";
```

- [MakeDraw](../class/src/index.js~CEvntPane.html#instance-method-MakeDraw) ```gEvntPane.MakeDraw(gCalcTop)```  
Creates a new [Draw](../class/src/index.js~CEvntDraw.html) object that renders lines on your 
[Pane](../class/src/index.js~CEvntPane.html) to represent the state of the values you're 
tracking with the [Calc](../class/src/index.js~CEvntCalc.html) object you pass into it.

- [lineWidth](../class/src/index.js~CEvntDraw.html#instance-member-lineWidth) ```gDrawTop.lineWidth```  
The line width is a [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) 
that represents the width of the line in pixels.

- [strokeStyle](../class/src/index.js~CEvntDraw.html#instance-member-strokeStyle) ```gDrawTop.strokeStyle```  
The stroke style fills the line representing the values you're tracking with any color of your 
choosing. Just make sure that you format your value as a hexidecimal color with a # in a 
string like: ```"#000000"```

#### MakeStat

The last variable you need to initialize in order to track your top price is your [Stat](../class/src/index.js~CEvntFeed.html) 
variable. This variable is used to display the status of whatever it is that you're tracking 
in a box that appears in the top left of your [pane](class/src/index.js~CEvntPane.html).

```js
gStatTop = gEvntPane.MakeStat(gCalcTop);

gStatTop.title = "Top Price";
gStatTop.fillStyle = "#f4f427";
```

- [MakeStat](../class/src/index.js~CEvntPane.html#instance-method-MakeStat) ```gEvntPane.MakeStat(gCalcTop)```  
Creates a [Stat](../class/src/index.js~CEvntStat.html) object that is used to display any value 
provided by the [Calc](../class/src/index.js~CEvntCalc.html) object that you pass into it in the 
top left corner of your [Pane](../class/src/index.js~CEvntPane.html).

- [title](../class/src/index.js~CEvntStat.html#instance-member-title) ```gDrawTop.lineWidth```  
The title represents the text that will be displayed before the value your [Stat](../class/src/index.js~CEvntStat.html) 
is tracking.

- [fillStyle](../class/src/index.js~CEvntStat.html#instance-member-fillStyle) ```gDrawTop.strokeStyle```  
The fill style fills the background of your [Stat](../class/src/index.js~CEvntStat.html) with any 
color of your choosing. Just make sure that you format your value as a hexidecimal color with a # 
in a string like: ```"#000000"```

### Complete intialization

Once you've prepared everything above, your onLoad function should accomplish the same thing 
as the one below. You will probably have arranged your code differently, but as long as 
everything is initialized, you're ready to begin working on your 
[onEvent](../function/index.html#static-function-onEvent) function.

```js
function onLoad()
{
    //------------------------------------------------\
    gEvntPane = MakePane();

    gEvntPane.title = "Daily Top & Bottom | ESM9 Sample";
    gEvntPane.fillStyle = "#030308";
    //------------------------------------------------/

    //------------------------------------------------\
    gPaneFeed = gEvntPane.MakeFeed(kSymbolName);
    gFeedDraw = gEvntPane.MakeDraw(gPaneFeed);

    gCalcTop = gPaneFeed.MakeCalc();
    gCalcBot = gPaneFeed.MakeCalc();
    //------------------------------------------------/

    //------------------------------------------------\
    gDrawTop = gEvntPane.MakeDraw(gCalcTop);

    gDrawTop.lineWidth = 3.0;
    gDrawTop.strokeStyle = "#f4f427";

    gDrawBot = gEvntPane.MakeDraw(gCalcBot);

    gDrawBot.lineWidth = 3.0;
    gDrawBot.strokeStyle = "#ff1c58";
    //------------------------------------------------/

    //------------------------------------------------\
    gStatTop = gEvntPane.MakeStat(gCalcTop);

    gStatTop.title = "Top Price";
    gStatTop.fillStyle = "#f4f427";

    gStatBot = gEvntPane.MakeStat(gCalcBot);

    gStatBot.title = "Bot Price";
    gStatBot.fillStyle = "#ff1c58";
    //------------------------------------------------/
}
```

## Event handling

Now, it's time to start working on your [onEvent](../function/index.html#static-function-onEvent) 
function. If you want a refresher on the purpose of the [onEvent](../function/index.html#static-function-onEvent) 
function, head over to the [manual](manual.html) and catch up on the [onEvent](manual.html#onevent) 
section.

### Reading your Feed

Whenever you're dealing with events in your [onEvent](../function/index.html#static-function-onEvent) 
method, you're going to need to make use of your [Feed](class/src/index.js~CEvntFeed.html)'s 
[FeedRead](../class/src/index.js~CEvntFeed.html#instance-method-FeedRead) method to get 
information about each [Event](../class/src/index.js~Event.html) your function handles.

Below, you can see an easy way to capture this [Event](../class/src/index.js~Event.html). You can 
create a new variable to store the current [Event](../class/src/index.js~Event.html) being read 
in from your [Feed](class/src/index.js~CEvntFeed.html). We'll continue to refer to this event as 
tTick, but you can call it whatever is most memorable for you.

```js
var tTick = pFeed.FeedRead(pSequ);
```

- [FeedRead](../class/src/index.js~CEvntFeed.html#instance-method-FeedRead) ```pFeed.FeedRead(pSequ)```  
Each event has a sequence value for indexing its position among all of the other [Events](../class/src/index.js~Event.html). 
Using this sequence value, ```pSequ```, [FeedRead](../class/src/index.js~CEvntFeed.html#instance-method-FeedRead) 
returns the [Event](../class/src/index.js~Event.html) at that spot in your symbol's [Feed](class/src/index.js~CEvntFeed.html).

### Your first Event

This will **not** be the case in every sample you right, as you will certainly be tracking more 
than just prices, but for this example, our first [Event](../class/src/index.js~Event.html) is a 
special case. 

If you don't take the time to designate the first [Event](../class/src/index.js~Event.html) 
as a special case, your ```gTopPrice``` and ```gBotPrice``` variables will still be set to 
their default to a value of zero, and that means your ```gBotPrice``` variable will most 
likely never be tracked properly.

To check for whether or not your script has just come across the first [Event](../class/src/index.js~Event.html), 
you need to use an [if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
If statements allow you to execute different lines of code depending on whether or not a 
condition you set ends up being true or false.

Now, in order to designate your first [Event](../class/src/index.js~Event.html) as a special 
case, use an [if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) 
with your ```gOnFirstEvent``` variable you created earlier to create a condition.

```js
if (gOnFirstEvent == true)
{
    gTopPrice = tTick.Trade.Price;
    gBotPrice = tTick.Trade.Price;
    gOnFirstEvent = false;
}
```

The statement above checks whether or not your condition, gOnFirstEvent, evaluates to true. If 
so, it sets our top and bottom prices to the first price value recorded in your symbol and sets 
your gOnFirstEvent variable to false, so you don't run the code within this if statement again.

One thing to note is that the above if statement is logically equivalent to:

```js
if (gOnFirstEvent)
```

Omitting the ```== true``` portion of the statement is just shorthand. It works well for 
descriptive variables like gOnFirstEvent, because it lets the statement almost read like a 
sentence. ```If on first event, do ...```

### Other Events

For all other events, you're finally going to perform the two major checks to track the top and 
bottom prices of your symbol's period. To accomplish this, you can again make use of an [if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 

```js
if (tTick.Trade.Price > gTopPrice)
{
    gTopPrice = tTick.Trade.Price;
}
else if (tTick.Trade.Price < gBotPrice)
{
    gBotPrice = tTick.Trade.Price;
}
```

Here, you're first going to check whether or not the current trade price is greater than your 
top price variable, and if so, you simply set your top price variable to the current trade price.

Otherwise, you're going to need to make use of the ```else if``` portion of the statement to 
only perform another check if the last one wasn't true. 

So if the current price wasn't greater than your top price variable, then your first if statement 
will fail, and you'll need to check whether or not the current trade price is less than your 
bottom price variable, and if so, you just set your bottom price variable to the current trade 
price instead.

### Saving values

Once you've checked whether or not the current trade price is of any significance, you'll need to 
save your top and bottom price values to your [Calc]() objects.

Your [Calc](../class/src/index.js~CEvntStat.html) variables will then relay the prices you saved 
to their corresponding [Stat](../class/src/index.js~CEvntStat.html) variables to display their 
values to the top left corner of your symbol [Pane](../class/src/index.js~CEvntPane.html).

This way, no matter how your [onEvent](../function/index.html#static-function-onEvent) function executes, you make sure to save both your top 
and bottom prices. Yes, you only actually need to save both of them once, but you we were to save 
them both individually based on the different cases of your function, you would have to repeat 
these lines a rediculous amount of times. This way, you can make sure that everything gets saved 
every single time through the function.

```js
gCalcTop.CalcSave(pSequ, gTopPrice);
gCalcBot.CalcSave(pSequ, gBotPrice);
```

- [CalcSave](../class/src/index.js~CEvntCalc.html#instance-method-CalcSave) ```gCalcTop.CalcSave(pSequ, gTopPrice/gBotPrice);```  
Saves a given value to your [Calc](../class/src/index.js~CEvntStat.html) object in order to display 
it through your [Stat](../class/src/index.js~CEvntStat.html) object to the left of your [Pane](../class/src/index.js~CEvntPane.html).

## Results

#### Congratulations

At this point, you should now be able to test, save, and display aspects of events, and 
you should see a chart based off of your selected Symbol for the most recent exchange period like 
the one shown below! Feel free to zoom in and out and scroll through your newly created chart.

Your script should now provide functionality similar to [this](https://github.com/PlGGS/Vertex-Analytics/blob/master/sample%20scripts/sampleTopBottomPrices.js)

[//]: # "Add finished script image ![view chart](asset/view_chart.png)"

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
