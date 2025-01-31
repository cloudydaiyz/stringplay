# Event Log

In the console, the Event Log contains information about all events and event types.

## Events

An event holds information about a single online file with data to collect. The file could either a Google Sheet or a Google Form. 

- If the event is a form, respondent information is collected from the responses to the form
- If the event is a spreadsheet, respondent information is collected from the rows of the sheet

The information associated with an event includes:

- **Event ID:** A unique ID for this event
- **Type ID:** The event type that this event is associated with
- **Title:** The title for this event
- **Event Date:** The start date for this event
- **Value:** The point value associated with this event, with a default of 0
- **Source:** Google Forms or Google Sheets, populated from the given source URI
- **Source URI:** The URI associated with this event

### Field to Property Map

Additionally, each event has a **field to property map** that can be used to assign member properties to specific questions in your event. It can be found for an event by clicking on the icon in the "More" column.

A field is an individual column to collect data from. 

- In Google Sheets, the field is an individual column in the spreadsheet. The field description is the first row in the column, and the field ID is the index of the column.
- In Google Forms, the field is an individual question in the form. The field description is the question itself, and the field ID is the question ID.

The field to property map contains all fields from an event, and their mappings to a member property, if any. This can either be populated manually, or from a field matcher (see [Field Matchers](/entities/troupe#field-matchers)) Any manual changes you make to the field to property map won't be reflected until the next sync.

During a sync, the field to property map is updated with the latest field information for the event. For each response, each field in the event is checked to see if it has a corresponding entry in the field to property map. If it does, then the response information is collected for the member from that field.

## Event Types

An **event type** is a grouping of events and online folders that contains etiher files that can be classified as an event, or other folders. 

An event type has an associated title, value, and list of source URIs. You can view and modify this list by clicking the icon in the "More" column in the Event Types table. You can also assign an event to an event type by editing that event manually in the Events table. 

::: info
You can add or remove Google Drive folders from this list, but keep in mind that information from those folders won't be updated until the next sync. 
:::

## Creating events and event types

You have the ability to create, edit, and delete events in the console. When creating a new event, keep in mind that the event won't be collected until sync, and may get dropped if the link is invalid. See the [Getting Started Guide](/introduction/getting-started) for the right steps to create events and event types.

## Assigning points

You may assign points to an event and an event type to calculate membership points for your audience. 

- Assigning a point value to an event type will assign the point value of all events associated with that event type, unless the point value for that event has been changed manually.
- Assigning a point value to an event will assign the point value of all members that have attended that event.