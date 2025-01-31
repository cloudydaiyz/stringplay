# Troupe

A **troupe** is the single source of truth of all information about a group. It contains the audience, events, event types, and an associated troupe log.

## Field Matchers

A field matcher is a regular expression with modifiers to help the application automatically assign fields to properties. This allows you to collect information for events without having to assign each field to a membership property types manually.

A field matcher has:

- **priority:** A unique number indicating its order to be used.
- **field expression:** The regular expression to use when matching events
- **filters:** Filters to apply to the field expression. Currently only "nocase" is supported.
- **match condition:** The condition on which to apply the field expression to a field. This is oneof "contains" or "exact". If it's "contains", then the field must contain the field expression to match. If it's "exact", then the field must exactly match the field expression to match.

Whenever information about an event is updated during the sync process, each field is checked to see if it's already assigned to a member property type. If not, then the app goes through each of the field matchers in order of its priority to find a match. If a field matcher matches the field, the field is assigned to the member property associated with the matcher. Otherwise, the field is assigned to no property.

## Member Property Types

Member property types represent the fields that can be collected from events, and are assigned to members. A member property type has:

- **property:** An identifier indicating the name of the member property type.
- **type:** The data type of the member property type. Currently "string", "number", "boolean", and "date" are supported.
- **required:** A flag indicating whether the current member property type is required. If it is, then a member must have this property defined in order for its data to be recorded in the troupe. This means that at least one event must collect this member property type from its respondents for members to be populated.

### Base Member Property Types

All troupes have base membership property types that can not be removed or modified. The member property types are Member ID, First Name, Last Name, Email, and Birthday. The Member ID membership property type is unique, as it's the field that's used to uniquely identify a member across events. *Thus, all events must define a field that's assigned to the Member ID property in order for data to be collected from it.*

To clarify:

- All events must define a field that's assigned to the Member ID property to uniquely identify members
- All required member property types must be assigned to at least one field in an event
- Members will only have their stored in the troupe if all required member property types are collected for that member

## Membership Points and Types

You can optionally collect membership points from events. Membership point types allow for you to define different classification of points collected for members from events within a time period. Membership point types include a title, start date, and finish date. All troupes start with a default membership type of Total, which indicates the total points a member has collected across all events.

For example, if you define a "Fall 2024" membership point type within "August 30, 2024", and "December 31, 2024", points will only be collected for members for events that have a start date within that time frame.

## Additional Metadata

The settings table in the console provides additional metadata for your troupe.

- The log sheet URL is the link to the troupe log spreadsheet associated with your troupe.

- The origin event is the event that's takes precedence over all others when collecting information for your members. The member properties collected from this event cannot be overridden by another event. For example, if both an arbitrary event and the origin event define a field that maps to the "First Name" property, a member's "First Name" property will be defined by the origin event. You can set the origin event by setting the origin event ID.

- The sync lock is a flag indicating whether a sync is taking place in your troupe or not. When it's enabled, no modifying operations can be made on your troupe. The sync lock should not be active for more than 15 minutes, otherwise, contact the developer.

- The manual sync button in the console allows for you to initiate a manual sync. This button is inactive when a sync is already occurring.

## Limits

Because stringplay is currently in the MVP stage, although access is free, you have a limit on the amount of operations you can do. For an account without an invite code, you have a daily limit of:

- 10 modify operations on any part of the troupe
- 2 manual syncs

And a maximum limit of:

- 5 additional member property types
- 3 additional membership point types
- 10 additional field matchers
- 5 event types
- 5 source folder URIs
- 20 events
- 200 members

For account created with an invite code, the limits are increased.