/**
 * 
 * @private
 */
const qEditSymb = 2001;
/**
 * 
 * @private
 */
const qEditDate = 2002;
/**
 * 
 * @private
 */
const littleEndian = true;

/**
 * A built-in JavaScript {@link Object} that only contains member variables with corresponding {@link number}(s)
 * @typedef {Object} enumeration
 */
/**
 * A built-in JavaScript {@link Object} that provides a way to represent whole numbers larger than 2^53-1
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 * @typedef {Object} BigInt
 */

/**
 * Class used for referencing all v9 event enumerations and data
 */
export class v9 {
  constructor() {
    /**
     * Value used specify a non-existent 32 bit price returned
     * @private
     */
    this.PRICE_NULL_32 = 2147483647;

    /**
     * Value used specify a non-existent 64 bit price returned
     * @private
     */
    this.PRICE_NULL_64 = 9223372036854775807;

    /**
     * @ignore
     * @private
     */
    this.sGroupSettleID = 4294967293;

    /**
     * @typedef {enumeration} UnionID
     * @property {number} NotSet 255
     * @property {number} NotMapped 250
     * @property {number} TradeSummary 0 : Message that contains summary information about trades
     * @property {number} TradeMatch 1 : Message that contains information on a match of a trade event
     * @property {number} VolumeUpdate 2 : Message that updates volume data after a TradeSummary event. On certain exchanges if two implied quotes are matched, a VolumeUpdate event will occur showing the change in the total volume, but it will not be tied to a TradeSummary event
     * @property {number} BookLevel 3 : Message that contains information on a quote that occurred in the first n levels of the book. The instrument definition from the exchange specifies the exact number of levels. This message can show up alongside an OD message
     * @property {number} OrderBook 4 : Message that contains information on a quote for all price levels
     * @property {number} SecurityStatus 5 : Message that provides the security group market state change
     * @property {number} DailyStatistics 6 : Message that provides information about a complete session
     * @property {number} SessionStatistics 7 : Message that provides information about the session during the session
     * @property {number} LimitsBanding 8 : Message that provides the daily limits for the current session
     * @property {number} ChannelReset 9 : Message that indicates if the channel the contract is on was reset and at what time
     * @property {number} TransactionMarker 10 : The TS message marks the start of a bundle, and the TE message marks the end of that bundle. The exchange considers all the messages between the start and end marker to have been processed together, regardless of how the packets were split during exchange transmission
     */

    /**
     * A {@link v9}․{@link UnionID} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - v9.UnionID
     * @type {enumeration}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *         case v9.UnionID.<Value>:
     *             // Do something when pEvent.header.unionID is equal to v9.UnionID.<Value>
     *             break;
     *         default :
     *             break;
     *     }
     * }
     */
    this.UnionID = {
      NotSet: 255,
      NotMapped: 250,
      TradeSummary: 0,
      TradeMatch: 1,
      VolumeUpdate: 2,
      BookLevel: 3,
      OrderBook: 4,
      SecurityStatus: 5,
      DailyStatistics: 6,
      SessionStatistics: 7,
      LimitsBanding: 8,
      ChannelReset: 9,
      TransactionMarker: 10,
      Test: 11, //Deprecated
      ClearingPrice: 12 // FUTURE
    };

    /**
     * @typedef {enumeration} Aggressor
     * @property {number} NoAggressor 0
     * @property {number} Buy 1
     * @property {number} Sell 2
     */
    /**
     * A {@link v9}․{@link Aggressor} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.tradeSummary.aggressor
     * @type {Aggressor}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.TradeSummary:
     *                  var agr = pEvent.tradeSummary.aggressor;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.Aggressor = {
      NoAggressor: 0,
      Buy: 1,
      Sell: 2
    };

    /**
     * @typedef {enumeration} HaltReason
     * @property {number} NotSet 255
     * @property {number} GroupSchedule 0
     * @property {number} SurveillanceIntervention 1
     * @property {number} MarketEvent 2
     * @property {number} InstrumentActivation 3
     * @property {number} InstrumentExpiration 4
     * @property {number} Unknown 5
     * @property {number} RecoveryInProcess 6
     */
    /**
     * A {@link v9}․{@link HaltReason} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.securityStatus.haltReason
     * @type {HaltReason}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *         case v9.UnionID.SecurityStatus:
     *             var hlt = pEvent.securityStatus.haltReason;
     *             break;
     *         default :
     *             break;
     *     }
     * }
     */
    this.HaltReason = {
      NotSet: 255,
      GroupSchedule: 0,
      SurveillanceIntervention: 1,
      MarketEvent: 2,
      InstrumentActivation: 3,
      InstrumentExpiration: 4,
      Unknown: 5,
      RecoveryInProcess: 6
    };

    /**
     * @typedef {enumeration} SecurityType
     * @property {number} NotSet 0
     * @property {number} TradingHalt 2
     * @property {number} Close 4
     * @property {number} NewPriceIndication 15
     * @property {number} ReadyToTrade 17
     * @property {number} NotAvailableForTrading 18
     * @property {number} UnknownorInvalid 20
     * @property {number} PreOpen 21
     * @property {number} PreCross 24
     * @property {number} PostClose 26
     * @property {number} NoChange 103
     * @property {number} PreClose 150 : Only ICE Exchange
     * @property {number} Restricted 200 : Only EUREX Exchange
     * @property {number} Freeze 201 : Only EUREX Exchange
     */
    /**
     * A {@link v9}․{@link SecurityType} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.securityStatus.type
     * @type {SecurityType}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *         case v9.UnionID.SecurityStatus:
     *             var typ = pEvent.securityStatus.type;
     *             break;
     *         default :
     *             break;
     *     }
     * }
     */
    this.SecurityType = {
      NotSet: 0,
      TradingHalt: 2,
      Close: 4,
      NewPriceIndication: 15,
      ReadyToTrade: 17,
      NotAvailableForTrading: 18,
      UnknownorInvalid: 20,
      PreOpen: 21,
      PreCross: 24,
      Cross: 25,
      PostClose: 26,
      NoChange: 103,
      PreClose: 150,
      Restricted: 200,
      Freeze: 201
    };

    /**
     * @typedef {enumeration} SecurityEvent
     * @property {number} NoEvent 0
     * @property {number} NoCancel 1
     * @property {number} ResetStatistics 4
     * @property {number} ImpliedMatchingON 5
     * @property {number} ImpliedMatchingOFF 6
     */
    /**
     * A {@link v9}․{@link SecurityEvent} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.securityStatus.securityEvent
     * @type {SecurityEvent}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.SecurityStatus:
     *                  var sev = pEvent.securityStatus.securityEvent;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.SecurityEvent = {
      NoEvent: 0,
      NoCancel: 1,
      ResetStatistics: 4,
      ImpliedMatchingON: 5,
      ImpliedMatchingOFF: 6
    };

    /**
     * @typedef {enumeration} BookType
     * @property {number} NotSet 85
     * @property {number} Bid 66
     * @property {number} Ask 83
     * @property {number} ImpliedBid 98
     * @property {number} ImpliedAsk 115
     * @property {number} BookReset 82
     */
    /**
     * A {@link v9}․{@link BookType} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.orderBook.type
     *  - pEvent.bookLevel.type
     * @type {BookType}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.OrderBook:
     *                  var typ = pEvent.orderBook.type;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.BookType = {
      NotSet: 85,
      Bid: 66,
      Ask: 83,
      ImpliedBid: 98,
      ImpliedAsk: 115,
      BookReset: 82
    };

    /**
     * @typedef {enumeration} DailyStatisticsType
     * @property {number} SettlePrice '6'
     * @property {number} ClearedVolume 'B'
     * @property {number} OpenInterest 'C'
     * @property {number} Fixing 'W'
     */
    /**
     * A {@link v9}․{@link DailyStatisticsType} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.dailyStatistics.type
     * @type {DailyStatisticsType}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.DailyStatistics:
     *                  var typ = pEvent.dailyStatistics.type;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.DailyStatisticsType = {
      SettlementPrice: 54,
      ClearedVolume: 66,
      OpenInterest: 67,
      FixingPrice: 87
    };

    /**
     * @typedef {enumeration} BookAction
     * @property {number} NotSet 255
     * @property {number} New 0
     * @property {number} Change 1
     * @property {number} Delete 2
     * @property {number} DeleteThru 3
     * @property {number} DeleteFrom 4
     * @property {number} Overlay 5
     * @property {number} Replace 6
     */
    /**
     * A {@link v9}․{@link BookAction} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.orderBook.action
     *  - pEvent.bookLevel.action
     * @type {BookAction}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.OrderBook:
     *                  var act = pEvent.orderBook.action;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.BookAction = {
      NotSet: 255,
      New: 0,
      Change: 1,
      Delete: 2,
      DeleteThru: 3,
      DeleteFrom: 4,
      Overlay: 5,
      Replace: 6
    };

    /**
     * @typedef {enumeration} SessionStatisticsType
     * @property {number} NotSet 127
     * @property {number} OpenPrice 0
     * @property {number} HighTrade 1
     * @property {number} LowTrade 2
     * @property {number} LastTrade 3
     * @property {number} HighestBid 4
     * @property {number} LowestAsk 5
     * @property {number} ClosePrice 6
     */
    /**
     * A {@link v9}․{@link SessionStatisticsType} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.sessionStatistics.type
     * @type {SessionStatisticsType}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *         case v9.UnionID.SessionStatistics:
     *                  var typ = pEvent.sessionStatistics.type;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.SessionStatisticsType = {
      NotSet: 127,
      OpenPrice: 0,
      HighTrade: 1,
      LowTrade: 2,
      LastTrade: 3,
      HighestBid: 4,
      LowestAsk: 5,
      ClosePrice: 6
    };

    /**
     * @typedef {enumeration} StateType
     * @property {number} NotSet 255
     * @property {number} DailyOpenPrice 0
     * @property {number} IndicativeOpeningPrice 5
     * @property {number} DailyClosingPrice 10
     */
    /**
     * A {@link v9}․{@link StateType} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.sessionStatistics.stateType
     * @type {StateType}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.SessionStatistics:
     *                  var stt = pEvent.sessionStatistics.stateType;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.StateType = {
      NotSet: 255,
      DailyOpenPrice: 0,
      IndicativeOpeningPrice: 5,
      DailyClosePrice: 10
    };

    /**
     * @typedef {enumeration} PutOrCall
     * @property {number} NotSet 255
     * @property {number} Put 0
     * @property {number} Call 1
     */
    /**
     * A {@link v9}․{@link PutOrCall} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.PutOrCall.type
     * @type {PutOrCall}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     // N/A
     * }
     */
    this.PutOrCall = {
      NotSet: 255,
      Put: 0,
      Call: 1
    };

    /**
     * @typedef {enumeration} SettleType
     * @property {number} Final 1
     * @property {number} Actual 2
     * @property {number} Rounded 4
     * @property {number} Intraday 8
     * @property {number} ReservedBits 16
     * @property {number} NullValue 128
     */
    /**
     * A {@link v9}․{@link SettleType} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.dailyStatistics.settleType
     * @type {SettleType}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.DailyStatistics:
     *                  var stl = pEvent.dailyStatistics.settleType;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.SettleType = {
      Final: 1,
      Actual: 2,
      Rounded: 4,
      Intraday: 8,
      ReservedBits: 16,
      NullValue: 128
    };

    /**
     * @typedef {enumeration} TransactionType
     * @property {number} NotSet 255
     * @property {number} TransactionStart 0
     * @property {number} TransactionEnd 1
     */
    /**
     * A {@link v9}․{@link TransactionType} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - pEvent.transactionMarker.transactionType
     * @type {TransactionType}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *    case v9.UnionID.TransactionMarker:
     *                  var ttp = pEvent.transactionMarker.transactionType;
     *              break;
     *          default :
     *              break;
     *     }
     * }
     */
    this.TransactionType = {
      NotSet: 255,
      TransactionStart: 0,
      TransactionEnd: 1
    };

    /**
     * @typedef {enumeration} EventIndicator
     * @property {number} NotSet 0
     * @property {number} LastOfType 1
     * @property {number} EndOfEvent 128
     */
    /**
     * A {@link v9}․{@link EventIndicator} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - N/A
     * @type {EventIndicator}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     // N/A
     * }
     */
    this.EventIndicator = {
      NotSet: 0,
      LastOfType: 1,
      EndOfEvent: 128
    };

    /**
     * @typedef {enumeration} InvestigateStatus
     * @property {number} NotSet 0
     * @property {number} UnderInvestigation 1
     * @property {number} InvestigationStatus 2
     */
    /**
     * A {@link v9}․{@link InvestigateStatus} {@link enumeration} that contains each of the different values that may be returned from:</br>
     *  - N/A
     * @type {InvestigateStatus}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     // N/A
     * }
     */
    this.InvestigateStatus = {
      NotSet: 0,
      UnderInvestigation: 1,
      InvestigationCompleted: 2
    };
  }
}

/**
 * Class used for retrieving and referencing user input
 */
v9.edit = class {
  /**
   * Used to retrieve user-specified values from the top of the pane (symbol and date correspond to the two default options at the top of a pane)
   * @example
   * // Specific v9 keywords ("symbol" and "date")
   * let symbol = new v9.edit("symbol").value; //gets the symbol from the default textbox at the top of the pane
   * let date = new v9.edit("date").value; //gets the date from the default textbox at the top of the pane
   * 
   * // Custom user input keywords can be anything else
   * let quantity = new v9.edit("QUANTITY"); //gets the string the user inputs into a custom 'QUANTITY' textbox at the top of the pane
   * let quantity = new v9.edit("QUANTITY").value; //gets the string the user inputs into a custom 'QUANTITY' textbox at the top of the pane
   * let quantity = new v9.edit("QUANTITY").number; //gets the number the user inputs into a custom 'QUANTITY' textbox at the top of the pane
   * @param {String} [pEditVariable]
   */
  constructor(pEditName) {
    /**
     * @private
     */
    this.fEditType = qEditSymb;
    /**
     * @private
     */
    this.fEditName = pEditName;

    if (pEditName) {
      if (gEditMaps[pEditName.toUpperCase()]) {
        gHome._pageerro(gUniq, "Edit name already defined");
      }
      else {
        gEditMaps[pEditName.toUpperCase()] = true;
      }

      if (pEditName.toUpperCase() === "SYMBOL") {
        this.fEditType = qEditSymb;
      }
      else if (pEditName.toUpperCase() === "DATE") {
        this.fEditType = qEditDate;
      }
      else {
        gEditList.push(this);
        this.fEditType = gEditSequ++;
      }

      /**
       * @private
       */
      this.fEditEnum = gHome.MakeEdit(gUniq, this.fEditType, pEditName);
    }
    else {
      gHome._pageerro(gUniq, "Edit name must be defined");
    }
  }

  /**
   * Returns the user input as a string
   * @type {string}
   */
  get value() {
    return gHome._pageread(gUniq, this.fEditType);
  }

  /**
   * Sets the user input value to the provided string
   * @type {string}
   * */
  set value(pEdit) {
    return gHome._pagesave(gUniq, this.fEditType, pEdit);
  }

  /**
   * Returns the user input as a number
   * @type {number}
   */
  get number() {
    if (this._number) return this._number;
    this._number = parseFloat(this.value);
    return this._number;
  }
};

/**
 * This class' functions should be overridden in each script for handling user actions and symbol events<br>
 * When finally instantiating your feed, refer to the {@link edit} class for handling all user input
 * @example
 * class MyFeed extends v9.feed {
 *     onInit() {
 *		}
 * 
 *		onOpen(pMeta) {
 *		}
 *
 *		onStop() {
 *		}
 *
 *		onRender() {
 *		}
 *
 *		onEvent(pSymbol,pEvent,pRealTime) {
 *		}
 * }
 *
 * // use
 * let feed = new MyFeed(); //Pulls symbol and date from v9 pane
 * // or
 * let feed = new MyFeed('NQ', '2020401'); //Custom symbol and date values can be entered here
 * // or
 * let feed = new MyFeed(symbol, date); //Custom symbol and date values can be implemented as variables
 * // or even
 * let request = {
 *     symbol: new v9.edit('symbol').value, //Pulls symbol from v9 pane (See edit class)
 *     startDate: '20200401',
 *     endDate: '20200430'
 * };
 * let feed = new MyFeed(request); //Pulls symbol from pane with custom start and end dates
 */
v9.feed = class {
  /**
   * Used to provide the symbol and date to the current {@link feed}
   * @param {String} [pSymbol]
   * @param {String} [pDate]
   */
  constructor(pSymbol, pDate) {
    gHome.MakeFeed(gUniq, pSymbol, pDate);
    gFeed = this;
  }

  /**
   * Built in feed function that is called when the start button is pressed in order to initialize the chart.
   * @abstract
   * @example
   * onInit() {
   *     gChart = new v9.lineChart("container"); //gChart must be a global var defined outside of your feed
   * }
   */
  onInit() { }

  /**
   * @abstract
   * @example
   * onDone() {
   * 
   * }
   */
  onDone() { }

  /**
   * @typedef {Object} Instrument
   * @property {string} activationDate
   *   @property {string} asset
   *   @property {Boolean} completed
   *   @property {string} contractSymbol
   *   @property {string} currency
   *   @property {number} definitionID
   *   @property {number} depthLevel
   *   @property {number} displayFactor
   *   @property {number} displayType
   *   @property {number} displayTypeEx
   *   @property {number} eosInstrumentID
   *   @property {number} exchInstrumentID
   *   @property {string} exchType
   *   @property {string} exchangeCode
   *   @property {string} expireDate
   *   @property {string} firstDataDate
   *   @property {string} firstDefined
   *   @property {string} groupCode
   *   @property {number} impliedDepth
   *   @property {number} instrumentType
   *   @property {string} lastDataDate
   *   @property {string} lastDefined
   *   @property {string} lastExchUpdateTime
   *   @property {number} loadSource
   *   @property {number} marketTypeID
   *   @property {number} maturityDay
   *   @property {number} maturityMonth
   *   @property {number} maturityYear
   *   @property {number} priceDenominator
   *   @property {string} roots 
   *   @property {number} settleDenominator
   *   @property {number} tickSize
   *   @property {number} tickValue
   *   @property {number} unitOfMeasure
   *   @property {Boolean} userDefined
   *   @property {number} vxaChannel
   *   @property {number} vxaId 
   */
  // emailed ed about roots. Should potentially be just [{"rt": "XX"}]
  // emailed ed about vxaId. should potentially be vxaID
  /**
   * @typedef {object} Meta
   * @property {Instrument[]} instruments
   * @property {string} message
   * @property {number} records
   * @property {number} restartTime
   * @property {number} sessionTime
   * @property {number} status
   * @property {string} symbol
   * @property {number} symbolID
   * @property {number} userID
   */
  /**
   * Built in feed function that is called at the start of each date between the startDate and endDate parameters of a multi-day script.
   * @param {Meta} pMeta - Object representing json meta information. It currently provides the instrument definitions of the supplied symbol.
   * @abstract
   * @example
   * onOpen(pMeta) {
   *
   * }
   */
  onOpen(pMeta) { }

  /**
   * Built in feed function that is called once the script has read every previous event in the symbol Feed.
   * @abstract
   * @deprecated
   * @example
   * onLoad() {
   *
   * }
   */
  onLoad() { }

  /**
   * Built in feed function that is called once for each frame that is rendered to the viewport.
   * @abstract
   * @example
   * onRender() {
   *
   * }
   */
  onRender() { }

  /**
   * Built in feed function that is called once for each timestamp tracked in your symbol.
   *
   * This is where you'll be doing most of your calculations on the specific things you're looking for in your symbol. It allows your script to perform different tasks depending on the current event's conditions.
   * @param {String} pSymbol - Name of the current symbol
   * @param {Event} pEvent - Current event being handled
   * @param {Boolean} pRealTime - Boolean determining whether or not to only handle current events
   * @abstract
   * @example
   * onEvent(pSymbol, pEvent, pRealTime) {
   *
   * }
   */
  onEvent(pSymbol, pEvent, pRealTime) { }

  /**
   * Built in feed function that is called when the stop button is pressed.
   * @abstract
   * @example
   * onStop() {
   *
   * }
   */
  onStop() { }
};

/**
 * Class used for rendering a line chart to the pane that should be called within the {@link onInit} function
 * @example
 * onInit() {
 *     gChart = new v9.lineChart("container"); //gChart must be a global var defined outside of your feed
 * }
 */
v9.lineChart = class {
  constructor(pID) {
    this.fLineEnum = gHome.MakeLine(gUniq, (pID) ? document.getElementById(pID) : null);
  }

  linePush(pItem, pRate, pTime) {
    gHome.LinePush(gUniq, pItem.fCalcEnum, pRate, pTime);
  }
}

/**
 * Class used for rendering a cube chart to the pane that should be called within the {@link onInit} function
 * @example
 * onInit() {
 *     gChart = new v9.cubeChart("container"); //gChart must be a global var defined outside of your feed
 * }
 */
v9.cubeChart = class {
  constructor(pID) {
    this.fCubeEnum = gHome.MakeCube(gUniq, (pID) ? document.getElementById(pID) : null);
  }

  cubePlus(pItem, pData, pSize) {
    gHome.CubePlus(gUniq, pItem, pData, pSize);
  }

  cubeDele(pItem, pData) {
    gHome.CubeDele(gUniq, pItem, pData);
  }

  cubeSave(pItem, pData, pSize) {
    gHome.CubeSave(gUniq, pItem, pData, pSize);
  }

  cubeRead(pItem, pData) {
    gHome.CubeRead(gUniq, pItem, pData);
  }

  cubeFree(pItem) {
    gHome.CubeFree(gUniq, pItem);
  }

  cubePush(pItem, pSave) {
    gHome.CubePush(gUniq, pItem, pSave);
  }
}

/**
 * Class used for rendering a v9 console window to the pane that should be called within the {@link onInit} function
 * @example
 * onInit() {
 *     gChart = new v9.console("container"); //gChart must be a global var defined outside of your feed
 * }
 */
v9.console = class {
  constructor(pID) {
    this.fTalkEnum = gHome.MakeTalk(gUniq, (pID) ? document.getElementById(pID) : null);
  }

  /**
   * Function that writes a provided string to a new line of the v9 console output
   * @param {String} pText - String to be written to the v9 console
   * @public
   */
  print(pText) {
    gHome.TalkText(gUniq, pText)
  }
}

v9.lineItem = class {
  constructor(pPane) {
    try {
      this.fCalcEnum = gHome.MakeCalc(gUniq, this);
    } catch (e) {
      gHome.PageErro(gUniq, "MakeCalc", e);
    }
  }

  /**
   * Stroke width in pixels
   * @type {Number}
   * @public
   */
  set lineWidth(pData) {
    try {
      this._lineWidth = pData;
      gHome.Calc_lineWidth(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "lineWidth", e);
    }
  }

  /**
   * Stroke color in hexadecimal as a String
   * @type {String}
   * @public
   */
  set strokeStyle(pData) {
    try {
      this._strokeStyle = pData;
      gHome.Calc_strokeStyle(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErroo(gUniq, "strokeStyle", e);
    }
  }

  /**
   * @todo figure out what this does
   * @type {String}
   * @public
   */
  set format(pData) {
    try {
      this._format = pData;
      gHome.Calc_format(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "format", e);
    }
  }

  /**
   * Text color in hexadecimal as a String
   * @type {String}
   * @public
   */
  set textStyle(pData) {
    try {
      this._textStyle = pData;
      gHome.Calc_textStyle(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "textStyle", e);
    }
  }

  /**
   * @todo figure out what this does
   * @type {String}
   * @public
   */
  set bodyStyle(pData) {
    try {
      this._bodyStyle = pData;
      gHome.Calc_bodyStyle(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "textStyle", e);
    }
  }

  /**
   * Text corresponding to current line price
   * @type {String}
   * @public
   */
  set title(pData) {
    try {
      this._title = pData;
      gHome.Calc_title(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "title", e);
    }
  }

  /**
   * @todo figure out what this does
   * @type {String}
   * @public
   */
  set name(pData) {
    try {
      this._name = pData;
      gHome.Calc_name(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "name", e);
    }
  }

  /**
   * Stroke width in pixels
   * @type {Number}
   * @public
   */
  get lineWidth() {
    return this._lineWidth;
  }

  /**
   * Stroke color in hexadecimal as a String
   * @type {String}
   * @public
   */
  get strokeStyle() {
    return this._strokeStyle;
  }

  /**
   * Text color in hexadecimal as a String
   * @type {String}
   * @public
   */
  get textStyle() {
    return this._textStyle;
  }

  /**
   * @todo figure out what this does
   * @type {String}
   * @readonly
   */
  get eventStyle() {
    return this._eventStyle;
  }

  /**
   * The line item's title that appears in the top-left corner of the pane
   * @type {String}
   * @public
   */
  get title() {
    return this._title;
  }

  /**
   * @todo figure out what this does
   * @type {String}
   * @public
   */
  get format() {
    return this._format;
  }
};

v9.cubeItem = class {
  constructor(pPane) {
    try {
      this.fCalcEnum = gHome.MakeCalc(gUniq, this);
      this.fCubeMaps = new Map();
    } catch (e) {
      gHome.PageErro(gUniq, "MakeCalc", e);
    }
  }

  /**
   * @ignore
   * @type {Number}
   * @public
   */
  set lineWidth(pData) {
    try {
      this._lineWidth = pData;
      gHome.Calc_lineWidth(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "lineWidth", e);
    }
  }

  /**
   * Sets cube background color in hexadecimal as a String (should be bodyStyle)
   * @type {String}
   * @public
   */
  set strokeStyle(pData) {
    try {
      this._strokeStyle = pData;
      gHome.Calc_strokeStyle(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErroo(gUniq, "strokeStyle", e);
    }
  }

  /**
   * @ignore
   * @type {String}
   * @readonly
   */
  set format(pData) {
    try {
      this._format = pData;
      gHome.Calc_format(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "format", e);
    }
  }

  /**
   * @ignore
   * @type {String}
   * @public
   */
  set textStyle(pData) {
    try {
      this._textStyle = pData;
      gHome.Calc_textStyle(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "textStyle", e);
    }
  }

  /**
   * Sets text color in hexadecimal as a String (should be textStyle)
   * @type {String}
   * @public
   */
  set bodyStyle(pData) {
    try {
      this._bodyStyle = pData;
      gHome.Calc_bodyStyle(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "textStyle", e);
    }
  }

  /**
   * Sets cube text (this normally corresponds to the current price)
   * @type {String}
   * @public
   */
  set title(pData) {
    try {
      this._title = pData;
      gHome.Calc_title(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "title", e);
    }
  }

  /**
   * @ignore
   * @type {String}
   * @public
   */
  set name(pData) {
    try {
      this._name = pData;
      gHome.Calc_name(gUniq, this.fCalcEnum, pData);
    } catch (e) {
      gHome.PageErro(gUniq, "name", e);
    }
  }

  /**
   * @ignore
   * @type {Number}
   * @public
   */
  get lineWidth() {
    return this._lineWidth;
  }

  /**
   * Gets cube background color in hexadecimal as a String (should be bodyStyle)
   * @type {String}
   * @public
   */
  get strokeStyle() {
    return this._strokeStyle;
  }

  /**
   * @ignore
   * @type {String}
   * @public
   */
  get textStyle() {
    return this._textStyle;
  }

  /**
   * @ignore
   * @type {String}
   * @readonly
   */
  get eventStyle() {
    return this._eventStyle;
  }

  /**
   * Gets cube text
   * @type {String}
   * @public
   */
  get title() {
    return this._title;
  }

  /**
   * @ignore
   * @type {String}
   * @public
   */
  get format() {
    return this._format;
  }
};

/**
 * Class used for managing the first 10 levels of the current book
 * @example
 * onInit() {
 *     gBook = new v9.book(); //gBook must be a global var defined outside of your feed
 * }
 * 
 * //Right now, it is necessary to include the following lines in your feed's onEvent function
 * onEvent(pSymbol, pEvent, pRealTime) {
 *     pEvent.channelReset.type;
 *     pEvent.orderBook.orderID;
 *     pEvent.orderBook.price;
 *     pEvent.orderBook.quantity;
 *     pEvent.orderBook.type;
 *     pEvent.orderBook.action;
 *     gBook.onEvent(pEvent);
 * }
 */
v9.book = class {
  constructor() {
    /**
     * Object used manage the internal list of bid levels
     * @private
     */
    this.fListLevB = new v9.list("fListLevB");
    
    /**
     * Object used manage the internal list of ask levels
     * @private
     */
    this.fListLevA = new v9.list("fListLevA");
    
    /**
     * Object used manage the internal list of bid orders
     * @private
     * @ignore
     * 
     */
    this.fListOrdB = new v9.list("fListOrdB");
    
    /**
     * Object used manage the internal list of ask orders
     * @private
     * @ignore
     */
    this.fListOrdA = new v9.list("fListOrdA");
  }

  /**
   * Returns the current ask levels of the book as a {@link list}
   * @public
   * @type {number}
   */
  BookRowsA() {
    return this.fListLevA.ListRows();
  }

  /**
   * Returns the current bid levels of the book as a {@link list}
   * @public
   * @type {number}
   */
  BookRowsB() {
    return this.fListLevB.ListRows();
  }

  /**
   * Returns a specific ask level of the book as an {@link Object}
   * @param {number} cnt - Level (Tentatively 1 through 10)
   * @public
   * @type {Object}
   */
  BookItemA(cnt) {
    if ((cnt < 1) || (cnt > this.fListLevA.ListRows())) return {};
    return { price: this.fListLevA.fListBase[cnt - 1].key, quantity: this.fListLevA.fListBase[cnt - 1].q };
  }

  /**
   * Returns a specific ask level of the book as an {@link Object}
   * @param {number} cnt - Level (Tentatively 1 through 10)
   * @public
   * @type {Object}
   */
  BookItemB(cnt) {
    if ((cnt < 1) || (cnt > this.fListLevB.ListRows())) return {};
    let tCnt = (this.fListLevB.ListRows() - cnt);
    return { price: this.fListLevB.fListBase[tCnt].key, quantity: this.fListLevB.fListBase[tCnt].q };
  }

  /**
   * Prints both sides of the current order book
   * @public
   */
  BookTalk() {
    this.fListLevB.ListTalk();
    this.fListLevA.ListTalk();

    for (let cnt = 0; cnt < 8; cnt++) {
      DSS(cnt, this.fListType[cnt]);
    }

    DSS("this.fErro1", this.fErro1);
    DSS("this.fErro2", this.fErro2);
    DSS("this.fErro3", this.fErro3);
    DSS("this.fErro4", this.fErro4);
    DSS("this.fErro5", this.fErro5);
    DSS("this.fErro6", this.fErro6);
  }

  /**
   * Inserts the price and quantity provided into the ask levels of the current order book
   * @param {number} quantity
   * @param {number} price
   * @public
   */
  BookPlusA(quantity, price) {
    let tItemP = { key: price, q: quantity };
    let tFindP = this.fListLevA.ListFind(tItemP);

    if (tFindP == 0) {
      this.fListLevA.ListSert(this.fListLevA.fSert, tItemP)
    }
    else {
      tFindP--;
      this.fListLevA.fListBase[tFindP].q += quantity;
    }

  }

  /**
   * Inserts the price and quantity provided into the bid levels of the current order book
   * @param {number} quantity
   * @param {number} price
   * @public
   */
  BookPlusB(quantity, price) {
    let tItemP = { key: price, q: quantity };
    let tFindP = this.fListLevB.ListFind(tItemP);

    if (tFindP == 0) {
      this.fListLevB.ListSert(this.fListLevB.fSert, tItemP)
    }
    else {
      tFindP--;
      this.fListLevB.fListBase[tFindP].q += quantity;
    }

  }

  /**
   * Deletes the order from the ask levels of the current order book that matches the price and quantity provided  
   * @param {number} quantity
   * @param {number} price
   * @public
   */
  BookDeleA(quantity, price) {
    let tItemP = { key: price, q: quantity };
    let tFindP = this.fListLevA.ListFind(tItemP);

    if (!tFindP) {
      this.fErro1++;
      return;
    }
    tFindP--;

    this.fListLevA.fListBase[tFindP].q -= quantity;
    if (this.fListLevA.fListBase[tFindP].q < 0) this.fListLevA.fListBase[tFindP].q = 0;

    if (this.fListLevA.fListBase[tFindP].q == 0) {
      this.fListLevA.ListDele(tFindP);
    }
  }
  
  /**
   * Deletes the order from the bid levels of the current order book that matches the price and quantity provided  
   * @param {number} quantity
   * @param {number} price
   * @public
   */
  BookDeleB(quantity, price) {
    let tItemP = { key: price, q: quantity };
    let tFindP = this.fListLevB.ListFind(tItemP);

    if (!tFindP) {
      this.fErro1++;
      return;
    }
    tFindP--;

    this.fListLevB.fListBase[tFindP].q -= quantity;
    if (this.fListLevB.fListBase[tFindP].q < 0) this.fListLevB.fListBase[tFindP].q = 0;

    if (this.fListLevB.fListBase[tFindP].q == 0) {
      this.fListLevB.ListDele(tFindP);
    }
  }

  /**
   * @ignore
   */
  OrdsPlusA(orderID, quantity, price) {
    let tItemO = { key: orderID, q: quantity, p: price };
    let tFindO = this.fListOrdA.ListFind(tItemO);

    if (tFindO == 0) {
      this.fListOrdA.ListSert(this.fListOrdA.fSert, tItemO)
    }
    else {
      this.fErro2++;
    }
  }

  /**
   * @ignore
   */
  OrdsPlusB(orderID, quantity, price) {
    let tItemO = { key: orderID, q: quantity, p: price };
    let tFindO = this.fListOrdB.ListFind(tItemO);

    if (tFindO == 0) {
      this.fListOrdB.ListSert(this.fListOrdB.fSert, tItemO)
    }
    else {
      this.fErro2++;
    }
  }

  /**
   * @ignore
   */
  OrdsDeleA(orderID, quantity, price) {
    let tItemO = { key: orderID, q: quantity, p: price };
    let tFindO = this.fListOrdA.ListFind(tItemO);
    if (!tFindO) {
      this.fErro3++;
      return;
    }
    tFindO--;

    this.fListOrdA.fListBase[tFindO].q -= quantity;
    if (this.fListOrdA.fListBase[tFindO].q < 0) this.fListOrdA.fListBase[tFindO].q = 0;

    if (this.fListOrdA.fListBase[tFindO].q == 0) {
      this.fListOrdA.ListDele(tFindO);
    }
  }

  /**
   * @ignore
   */
  OrdsDeleB(orderID, quantity, price) {
    let tItemO = { key: orderID, q: quantity, p: price };
    let tFindO = this.fListOrdB.ListFind(tItemO);
    if (!tFindO) {
      this.fErro3++;
      return;
    }
    tFindO--;

    this.fListOrdB.fListBase[tFindO].q -= quantity;
    if (this.fListOrdB.fListBase[tFindO].q < 0) this.fListOrdB.fListBase[tFindO].q = 0;

    if (this.fListOrdB.fListBase[tFindO].q == 0) {
      this.fListOrdB.ListDele(tFindO);
    }
  }

  /**
   * @ignore
   */
  onEvent(pEvent) {
    switch (pEvent.header.unionID) {
      case v9.UnionID.ChannelReset:
        {
          let tType = pEvent.channelReset.type;
          this.fListLevB.ListZero();
          this.fListLevA.ListZero();
          this.fListOrd.ListZero();
        }
        break;

      case v9.UnionID.OrderBook:
        switch (pEvent.orderBook.type) {
          case v9.BookType.Bid:
            {
              switch (pEvent.orderBook.action) {
                case v9.BookAction.Change:
                  {
                    let tItemO = { key: pEvent.orderBook.orderID, q: pEvent.orderBook.quantity, p: pEvent.orderBook.price };
                    let tFindO = this.fListOrdB.ListFind(tItemO);

                    if (tFindO == 0) {
                      this.fErro4++;
                      break;
                    }
                    tFindO--;

                    this.BookDeleB(this.fListOrdB.fListBase[tFindO].q, this.fListOrdB.fListBase[tFindO].p);
                    this.BookPlusB(pEvent.orderBook.quantity, pEvent.orderBook.price);

                    this.fListOrdB.fListBase[tFindO].p = pEvent.orderBook.price;
                    this.fListOrdB.fListBase[tFindO].q = pEvent.orderBook.quantity;
                  }

                  break;

                case v9.BookAction.Overlay:
                case v9.BookAction.New:
                  {
                    this.BookPlusB(pEvent.orderBook.quantity, pEvent.orderBook.price);
                    this.OrdsPlusB(pEvent.orderBook.orderID, pEvent.orderBook.quantity, pEvent.orderBook.price);
                  }
                  break;

                case v9.BookAction.Delete:
                  {
                    this.BookDeleB(pEvent.orderBook.quantity, pEvent.orderBook.price);
                    this.OrdsDeleB(pEvent.orderBook.orderID, pEvent.orderBook.quantity, pEvent.orderBook.price);
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          case v9.BookType.Ask:
            {
              switch (pEvent.orderBook.action) {

                case v9.BookAction.Change:

                  {
                    let tItemO = { key: pEvent.orderBook.orderID, q: pEvent.orderBook.quantity, p: pEvent.orderBook.price };
                    let tFindO = this.fListOrdA.ListFind(tItemO);

                    if (tFindO == 0) {
                      this.fErro4++;
                      break;
                    }
                    tFindO--;

                    this.BookDeleA(this.fListOrdA.fListBase[tFindO].q, this.fListOrdA.fListBase[tFindO].p);
                    this.BookPlusA(pEvent.orderBook.quantity, pEvent.orderBook.price);

                    this.fListOrdA.fListBase[tFindO].p = pEvent.orderBook.price;
                    this.fListOrdA.fListBase[tFindO].q = pEvent.orderBook.quantity;
                  }

                  break;

                case v9.BookAction.Overlay:
                case v9.BookAction.New:
                  {
                    this.BookPlusA(pEvent.orderBook.quantity, pEvent.orderBook.price);
                    this.OrdsPlusA(pEvent.orderBook.orderID, pEvent.orderBook.quantity, pEvent.orderBook.price);
                  }
                  break;

                case v9.BookAction.Delete:
                  {
                    this.BookDeleA(pEvent.orderBook.quantity, pEvent.orderBook.price);
                    this.OrdsDeleA(pEvent.orderBook.orderID, pEvent.orderBook.quantity, pEvent.orderBook.price);
                  }
                  break;
                default:
                  break;
              }
            }
            break;
          case v9.BookType.ImpliedBid:
            break;
          case v9.BookType.ImpliedAsk:
            break;
        }
        break;
      default:
        break;
    }
  }
}

/**
 * Internal v9 class used for managing JavaScript lists
 * @example
 * let tmpList = new v9.list("tmpList");
 */
v9.list = class {
  constructor(pName) {
    this.fName = pName;
    this.fListBase = [];
  }

  /**
   * Returns the length of the list as a {@link number}
   */
  ListRows() {
    return this.fListBase.length;
  }

  /**
   * Empties the list
   */
  ListZero() {
    this.fListBase = [];
  }

  /**
   * Prints up to five list key value pairs
   */
  ListTalk() {
    let tListRows = this.ListRows();
    if (tListRows > 5) tListRows = 5;
    var tText = this.fName + "[";
    for (let cnt = 0; cnt < tListRows; cnt++) {
      tText += this.fListBase[cnt].key + ":" + this.fListBase[cnt].q + ",";
    }
    tText += "]";
    DSS(tText);
  }

  /**
   * Binarily searches for a matching item within the list
   * @param {Object} pItem
   */
  ListFind(pItem) {
    this.fSert = 0;
    if (!this.ListRows()) return 0;

    let tScanOpen = 0;
    let tScanShut = this.ListRows();		//one based
    let tScanMean = 0;

    while (tScanOpen < tScanShut) {
      tScanMean = tScanOpen + Math.floor((tScanShut - tScanOpen) / 2);

      if (pItem.key < this.fListBase[tScanMean].key) {
        tScanShut = tScanMean;
        this.fSert = tScanShut;
      }
      else if (pItem.key > this.fListBase[tScanMean].key) {
        tScanOpen = tScanMean + 1;
        this.fSert = tScanOpen;
      }
      else {
        return tScanMean + 1;
      }
    }

    return 0;
  }

  /**
   * This function is never called and doesn't even work
   * @ignore
   * @param {Object} pItem 
   */
  ListPush(pItem) {
    let tFind = this.ListFind(pItem);

    if (tFind == 0) {
      this.ListSert(this.fSert, pItem)
      return 0;
    }

    return tFind;
  }

  /**
   * Inserts an item into the list at a specified index
   * @param {number} pEnum - The zero-based location in the array from which to start removing elements (Why is this called pEnum?)
   * @param {*} pItem - Element(s) to insert into the array in place of the deleted elements
   */
  ListSert(pEnum, pItem) {
    this.fListBase.splice(pEnum, 0, pItem);
  }

  /**
   * This function is never called and doesn't even work
   * @ignore
   * @param {Object} pItem 
   */
  ListPull(pItem) {
    let tFind = this.ListFind(pItem);

    if (tFind == 0) return;

    ListDele(tFind - 1)
  }

  /**
   * Deletes a single item from the list at a specified index
   * @param {number} pEnum - The zero-based location in the array from which to start removing elements (Why is this called pEnum?)
   */
  ListDele(pEnum) {
    this.fListBase.splice(pEnum, 1);
  }

  /**
   * Returns a single item from the list from a specified index
   * @param {number} pEnum - The zero-based location in the array from which to start removing elements (Why is this called pEnum?)
   */
  ListItem(pEnum) {
    return this.fListBase[pEnum];
  }
}

/**
 * Returns a JSON Object representing the provided {@link Event}
 * @param {Event} pEvent
 */
v9.eventToJson = function (pEvent) {
  let tEvent = v9.eventCopy(pEvent);

  if (tEvent !== undefined) {
    let intCount = 0,
      repCount = 0;
    const json = JSON.stringify(tEvent, (_, v) => {
      if (typeof v === "bigint") {
        intCount++;
        return `${v}#bigint`;
      }
      return v;
    });
    const res = json.replace(/"(-?\d+)#bigint"/g, (_, a) => {
      repCount++;
      return a;
    });
    if (repCount > intCount) {
      // You have a string somewhere that looks like "123#bigint";
      throw new Error(
        `BigInt serialization pattern conflict with a string value.`
      );
    }
    return res;
  }
};

/**
 * Returns a copy of a provided {@link Event}
 * @param {Event} pEvent
 */
v9.eventCopy = function (pEvent) {
  let tEvent = {};

  if (pEvent.header) {
    tEvent.header = {};
    tEvent.header = Object.assign(pEvent.header);
  }

  try {
    switch (pEvent.header.unionID) {
      case v9.UnionID.TransactionMarker:
        tEvent.transactionMarker = {};
        tEvent.transactionMarker = Object.assign(pEvent.transactionMarker);
        break;
      case v9.UnionID.ChannelReset:
        tEvent.channelReset = {};
        tEvent.channelReset = Object.assign(pEvent.channelReset);
        break;
      case v9.UnionID.TradeSummary:
        tEvent.tradeSummary = {};
        tEvent.tradeSummary = Object.assign(pEvent.tradeSummary);
        break;
      case v9.UnionID.TradeMatch:
        tEvent.tradeMatch = {};
        tEvent.tradeMatch = Object.assign(pEvent.tradeMatch);
        break;
      case v9.UnionID.VolumeUpdate:
        tEvent.volumeUpdate = {};
        tEvent.volumeUpdate = Object.assign(pEvent.volumeUpdate);
        break;
      case v9.UnionID.BookLevel:
        tEvent.bookLevel = {};
        tEvent.bookLevel = Object.assign(pEvent.bookLevel);
        break;
      case v9.UnionID.OrderBook:
        tEvent.orderBook = {};
        tEvent.orderBook = Object.assign(pEvent.orderBook);
        break;
      case v9.UnionID.SecurityStatus:
        tEvent.securityStatus = {};
        tEvent.securityStatus = Object.assign(pEvent.securityStatus);
        break;
      case v9.UnionID.DailyStatistics:
        tEvent.dailyStatistics = {};
        tEvent.dailyStatistics = Object.assign(pEvent.dailyStatistics);
        break;
      case v9.UnionID.SessionStatistics:
        tEvent.sessionStatistics = {};
        tEvent.sessionStatistics = Object.assign(pEvent.sessionStatistics);
        break;
      case v9.UnionID.LimitsBanding:
        tEvent.limitsBanding = {};
        tEvent.limitsBanding = Object.assign(pEvent.limitsBanding);
        break;
      case v9.UnionID.ClearingPrice:
        tEvent.clearingPrice = {};
        tEvent.clearingPrice = Object.assign(pEvent.clearingPrice);
        break;
    }
  } catch (e) { }

  return tEvent;
};

/**
 * Reports errors to the debugging window
 * @param {String} msg
 * @param {String} url
 * @param {Number} lineNo
 * @param {Number} columnNo
 * @param {any} error
 */
window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1) {
    gHome._pageerro(gUniq, "Script Error: See Browser Console for Detail");
  } else {
    //var message = [
    //	'Message: ' + msg,
    //	'URL: ' + url,
    //	'Line: ' + lineNo,
    //	'Column: ' + columnNo,
    //	'Error object: ' + JSON.stringify(error)
    //].join(' - ');

    var message = [
      "Message: " + msg,
      "Line: " + lineNo,
      "Column: " + columnNo
    ].join(" - ");

    gHome._pageerro(gUniq, message);
  }
};

/**
 * Class used for referencing any individual {@link Event} from the current {@link feed}
 */
export class Event {
  constructor() {
    /**
     * @typedef {object} Header
     * @property {number} unionID Enumerated value used to find the type of an Event object
     * @property {number} sequence The current Event object's session array index
     * @property {number} time The exact time of the current Event in nanoseconds as a BigInt
     * @property {number} timeH The higher half of the aforementioned time member as a Number
     * @property {number} timeL The lower half of the aforementioned time member as a Number
     * @property {number} milliseconds The aforementioned time member in milliseconds as a Number
     */
    /**
     * Each Event’s header object provides access to general Event information and is accessed using:
     *  - <EventName>․header․<memberName>
     * @type {Header}
     * @example
     * onEvent(pSymbol, pEvent, pRealTime) {
     *     switch (pEvent.header.unionID) {
     *         case v9.UnionID.TradeSummary:
     *             var fTime = new Date(pEvent.header.milliseconds).toLocalTimeString(); //Formats the date and time based off of the current Event's time in milliseconds
     *             break;
     *         default :
     *             break;
     *     }
     * }
     */
    this.header = {
      unionID: 255,
      sequence: 0, //Each event within a feed has an assigned sequence value that
      time: 0,
      timeH: 0,
      timeL: 0,
      milliseconds: 0
    };

    /**
     * @typedef {enumeration} TradeSummary
     * @property {number} price The price of the current Event
     * @property {number} quantity The total quantity matched for the the current Event
     * @property {number} matches The number of upcoming orders that will participate in the current Event
     * @property {Aggressor} aggressor The aggressor of the trade the current Event is summarizing
     * @property {boolean} isImplied Whether or not the trade the current Event is summarizing was implied
     * @property {number} isSnapshot Whether or not the current Event is a market summary
     * @property {number} volume The accumulated volume of the current session
     */
    /**
     * Each tradeSummary Event object is accessed using:
     *  - <EventName>․tradeSummary․<memberName>
     * @type {TradeSummary}
     */
    this.tradeSummary = {
      price: 0,
      quantity: 0,
      matches: 0,
      aggressor: 0,
      isImplied: false,
      isSnapshot: false,
      volume: 0
    };

    /**
     * @typedef {object} TradeMatch
     * @property {number} price The price of the current Event
     * @property {number} quantity The total quantity matched for the current Event
     * @property {number} number The enumerated value from 0 to number of TradeSummary.matches
     * @property {boolean} isAggressor Whether or not the current Event was made by the aggressor of the trade.
     * @property {number} orderID The identifier for the current Event’s order
     * @property {number} auxilaryID The original identifier for the current Event’s order.
     * @property {number} flags These bits are exchange specific. If you don’t know which exchange this file came from, the exchange for this instrId is located in the Instrument Information message.
     */
    /**
     * Each tradeMatch Event object is accessed using:
     *  - <EventName>․tradeMatch․<memberName>
     * @type {TradeMatch}
     */
    this.tradeMatch = {
      price: 0,
      quantity: 0,
      number: 0,
      isAggressor: 0,
      orderID: 0,
      auxiliaryID: 0,
      flags: 0
    };

    /**
     * @typedef {object} VolumeUpdate
     * @property {number} volume The total volume for the session including the current Event
     * @property {number} vwap An ICE-specific stat metric
     */
    /**
     * Each volumeUpdate Event object is accessed using:
     *  - <EventName>․volumeUpdate․<memberName>
     * @type {VolumeUpdate}
     * */
    this.volumeUpdate = {
      volume: 0,
      vwap: 0
    };

    /**
     * @typedef {object} BookLevel
     * @property {number} price The price of the current Event
     * @property {number} quantity The total quantity matched for the the current Event
     * @property {number} orders The number of orders that participated at the current Event’s price level
     * @property {number} impliedQuantity The total implied quantity at the current event’s price level
     * @property {number} impliedOrders The total number of implied orders at the current event’s price level
     * @property {number} level The price level at which the event occurred
     * @property {BookAction} action The book action of the order corresponding to the current event
     * @property {BookType} type The type of the current Event
     * @property {boolean} isEndEvent Whether or not the current Event is the last Event of the packet
     */
    /**
     * Each bookLevel Event object is accessed using:
     *  - <EventName>․bookLevel․<memberName>
     * @type {BookLevel}
     */
    this.bookLevel = {
      price: 0,
      quantity: 0,
      orders: 0,
      impliedQuantity: 0,
      impliedOrders: 0,
      level: 0,
      action: 255,
      type: 85,
      isEndEvent: false
    };

    /**
     * @typedef {object} OrderBook
     * @property {number} price The price of the current Event
     * @property {BookType} type The type of the current Event
     * @property {number} quantity The total quantity matched for the current Event
     * @property {number} priorityID The order priority for execution on the current order book : Lower = higher priority
     * @property {boolean} auxilaryID The first OrderID assigned because some exchanges change the orderID : Only ICE and Eurex Exchanges
     * @property {number} previousID If an orderID is changed, this is the ID that was just replaced : Eurex
     * @property {number} orderID The identifier for the current Event's order
     * @property {BookAction} action The book action of the order corresponding to the current event
     */
    /**
     * Each orderBook Event object is accessed using:
     *  - <EventName>․orderBook․<memberName>
     * @type {OrderBook}
     */
    this.orderBook = {
      price: 0,
      type: 85,
      quantity: 0,
      priorityID: 0,
      auxiliaryID: 0,
      previousID: 0,
      orderID: 0,
      action: 255
    };

    /**
     * @typedef {object} SecurityStatus
     * @property {number} group The exchange specific code assigned to a group of related securities, which are concurrently affected by market events
     * @property {BookType} asset The underlying asset code represented as a String
     * @property {number} sessionDate The date of the current Event's trading session
     * @property {number} type The total implied quantity at the current event's price level
     * @property {HaltReason} haltReason The reason why the market has been halted
     * @property {SecurityEvent} securityEvent Additional reasoning for the market being halted
     */
    /**
     * Each securityStatus Event object is accessed using:
     *  - <EventName>․securityStatus․<memberName>
     * @type {SecurityStatus}
     */
    this.securityStatus = {
      group: "",
      asset: "",
      sessionDate: 0,
      type: 0,
      haltReason: 255,
      securityEvent: 0
    };

    /**
     * @typedef {object} DailyStatistics
     * @property {number} price The price of the current Event
     * @property {number} instrumentID The unique instrument identifier for the current exchange
     * @property {number} impliedQuantity The total number of Events in the current session : Only applies to OpenInterest type
     * @property {number} impliedOrders The total number of implied orders at the current event's price level
     * @property {number} level The price level at which the event occurred
     * @property {BookAction} action The book action of the order corresponding to the current event
     * @property {DailyStatisticsType} type The type of the current Event
     * @property {SettleType} settleType The settlement type of the current Event
     * @property {boolean} isEndEvent Whether or not the current Event is the last Event of the packet
     */
    /**
     * Each dailyStatistics Event object is accessed using:
     *  - <EventName>․dailyStatistics․<memberName>
     * @type {DailyStatistics}
     */
    this.dailyStatistics = {
      price: 0,
      instrumentID: 0,
      size: 0,
      impliedQuantity: 0,
      impliedOrders: 0,
      level: 0,
      action: 255,
      type: 0, // waiting for Ed
      settleType: 0,
      isEndEvent: false
    };

    /**
     * @typedef {object} SessionStatistics
     * @property {number} price The price of the current Event
     * @property {number} instrumentID The unique instrument identifier for the current exchange
     * @property {StateType} stateType The OpeningPrice type of the current Event
     * @property {BookAction} action The book action of the order corresponding to the current event
     * @property {SessionStatisticsType} type The type of the current Event
     * @property {number} size The total number of Events in the current session
     */
    /**
     * Each sessionStatistics Event object is accessed using:
     *  - <EventName>․sessionStatistics․<memberName>
     * @type {SessionStatistics}
     */
    this.sessionStatistics = {
      price: 0,
      instrumentID: 0,
      stateType: 255,
      action: 255,
      type: 127,
      size: 0
    };

    /**
     * @typedef {object} LimitsBanding
     * @property {number} highLimit The lowest price level the contract can trade in this session
     * @property {number} lowLimit The highest price level the contract can trade in this session
     * @property {number} maxVariation The maximum tradeable range for this session
     */
    /**
     * Each limitsBanding Event object is accessed using:
     *  - <EventName>․limitsBanding․<memberName>
     * @type {LimitsBanding}
     */
    this.limitsBanding = {
      highLimit: 0,
      lowLimit: 0,
      maxVariation: 0
    };

    /**
     * @typedef {object} ChannelReset
     * @property {BookType} type The type of the current Event
     */
    /**
     * Each channelReset Event object is accessed using:
     *  - <EventName>․channelReset․<memberName>
     * @type {ChannelReset}
     * */
    this.channelReset = {
      type: 85
    };

    /**
     * @typedef {object} TransactionMarker
     * @property {TransactionType} type The type of the current Event
     */
    /**
     * Each transactionMarker Event object is accessed using:
     *  - <EventName>․transactionMarker․<memberName>
     * @type {TransactionMarker}
     * @return
     */
    this.transactionMarker = {
      type: 255
    };
  }
}
