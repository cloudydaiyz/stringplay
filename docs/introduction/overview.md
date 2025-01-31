# Overview

stringplay is a data collection service that aggregates attendee information from your online spreadsheets and surveys, allowing you to effectively track event and membership data.

stringplay handles 4 main data types for you:

- A **troupe** is the single source of truth of all information about a group. It contains the audience, events, event types, and an associated Troupe Log.

- An **event** is the information about a single online file with data to collect. The file could either a Google Sheet or a Google Form.

- An **event type** is a grouping of events and online folders that contains either files that can be classified as an event, or other folders. 

- An **audience** is the grouping of all members, or unique respondents, collected across all events in the troupe.

- A **troupe log** is a Google Sheet that reflects the information collected about your troupe, which is automatically created for you.

Whenever you create an account, you are assigned as the owner of a troupe that's created for you. This will enable you to take advantage of these data types, start collecting data and building your audience.

### Use Cases

- **Track Your Membership**
  
  If you determine membership for your organization via attending events, this will allow you to keep track
  of your members through sign in sheets and logs.
  
- **Surveys and Newsletters**
  
  You can use your data to send surveys and newsletters to your audience in bulk, and even personalize your 
  emails based on what event they were a respondent for.

- **Data Transformation**
  
  You can transform the data on the spreadsheet provided to you by using it on other spreadsheets. For
  example, you could perform operations on a subset of your audience based on the events they've attended,
  or the amount of membership points they have.

## Architecture

The application updates the information for your troupe during a process called **syncing** once a day (or any time, when manually initiated by the owner of the troupe).

### The Process

1. **The app updates all of the events currently in your troupe.** Pre-existing events are collected first, then the app goes through all the folders from your event types to turn additional files into new events.

2. **The app goes through all of your events to update the members in your troupe.** Response information in Google Forms and rows in Google Sheets are collected as an individual member. Whichever question ID or column is designated as the Member ID for the event is used to uniquely identify the member, aggregate their information across multiple events, and assign points based on the events they've attended.

3. **The app updates your troupe log.** All updates to your troupe since the last sync is reflected in your troupe log. 

Note that on regular operations (modifying/creating an event, member, event type, etc.), your troupe log is not automatically updated. The only time your troupe log is updated is during a sync.

## Additional Resources

- [Demo Slides](https://docs.google.com/presentation/d/1ThwBATlb2h9fcxPyhyRvHeaiBNg4U9TRuwCm3ICGHKE/edit?usp=sharing)