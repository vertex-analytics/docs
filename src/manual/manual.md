# API Manual

v9 is an analytical product for tracking past and current futures contracts. It allows you to programmatically perform actions based on 
incoming CME WebSocket event data with nanosecond precision.

## Accessing v9

The latest build of v9 can always be accessed at [v9.vertex-analytics.com](https://v9.vertex-analytics.com). 

## v9 Editor

The v9 Editor is where programmers can write custom Javascript-based scripts to build out individual data visualization solutions.

Each script, located on the lefthand side, corresponds to a data visualization solution located on the righthand side.

### Sections

#### Explorer

- Top buttons
- Your scripts
- Templates
- Divided up by libraries

#### Text Editor

This section is used to edit HTML files that contain data visualization logic for a specified symbol.

#### Debug

This section logs syntax and runtime errors within your script(s). This does not include errors within external libraries 

#### Pane

This sections presents the data visualizations for a script.

#### HTML File Sections

#### Library Importations

This section refers to the top of the HTML file where both v9's propritary library and third-party libraries

#### JavaScript Section

Class Architecture

This section refers to all of the data visualization logic that is executed within v9's runtime.

#### CSS Section

This section refers to styling overrides one makes within their script(s).

## v9 Dashboard

v9's Dashboards are composed of either one or multiple scripts written in the v9 Editor, and they can easily be exported and shared with other users. 

v9 Dashboards are where traders/portfolio managers monitor contracts using the charts built out in the v9 Editor section.

### Dashboard Sections

#### Explorer Section


