# Theory part of date and time.

## What is Time Zones?

In JavaScript, a time zone means the region’s standard time used to represent a date and time (for example: IST, UTC, GMT, etc.). It affects how a date is displayed and calculated.


## What is GMT(Greenwich Mean Time) Time Zone?
GMT (Greenwich Mean Time) is the standard time measured at Greenwich, London, which is used as a reference to calculate the time of other countries.

### GMT and UTC are almost the same, but there is a small difference.
| GMT | UTC |
|-----|-----|
| GMT (Greenwich Mean Time) was created in the 19th century | UTC (Coordinated Universal Time) was introduced in the 20th century. |
| It is based on the Earth’s rotation and the sun’s position at Greenwich, London | It is based on atomic clocks, so it is more precise than GMT. |
| | Sometimes leap seconds are added to keep UTC aligned with Earth’s rotation. |

## What is UTC(Coordinated Universal Time)?
UTC (Coordinated Universal Time) is the primary standard time used all over the world. It is the base time from which all other time zones (like IST, PST, etc.) are calculated.

## What is ISO Standard(International Organization for Standardization)?
ISO Standard is a common international format or rule that helps people and computers write things (like dates and time) in the same way everywhere.

## Unix Time and Unix Epoch
- **Unix Epoch**:-- Unix Epoch is a fixed starting point of time used by computers.  
**Example**: Unix Epoch = 1 January 1970, 00:00:00 (UTC)
- All Unix time calculations start from this moment.

- **Unix Time**:-- Unix Time means the number of seconds (or milliseconds in JavaScript) that have passed since 1 Jan 1970 (UTC).  
**Example**: Unix Time = time passed after that starting time