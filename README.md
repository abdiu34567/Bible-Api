# Bible API Documentation

Welcome to the Bible API! This API provides access to the English KJV, Oromo, and Amhara versions of the Bible. You can use the provided endpoints to access various details and verses from the Bible.

## Base URL

The base URL for the API is: `https://bible-api-five.vercel.app/`

## Endpoints

### 1. List all Book IDs

Endpoint: `GET /listbookids`

Description: This endpoint allows you to retrieve a list of all book IDs available in the Bible versions.

Example Request:

```
GET https://bible-api-five.vercel.app/api/listbookids
```

Example Response:

```json
{
  "1": "GEN",
  "2": "EXO",
  "3": "LEV",
  "4": "NUM",
  "5": "DEU",
  "6": "JOS",
  "7": "JDG",
  "8": "RUT",
  "9": "1SA",
  "10": "2SA"
  ...
}
```

### 2. Get Book Information

Endpoint: `GET /bookid/info/:bookid`

Description: This endpoint provides information regarding how many total chapters the book includes and how many verses each chapter includes.

Parameters:

- `:bookid` (string) - The ID of the book (e.g., "GEN" for Genesis, "EXO" for Exodus, etc.)

Example Request:

```
GET https://bible-api-five.vercel.app/api/bookid/info/GEN
```

Example Response:

```json
{
  "book": "GEN",
  "totchapter": 50,
  "chapters": {
    "1": 31,
    "2": 25,
    "3": 24,
    "4": 26,
    "5": 32,
    "6": 22,
    ...
  }
}
```

### 3. Get Verses from a Chapter

Endpoint: `GET /verses/:version/:bookid/:chapter`

Description: This endpoint allows you to retrieve all the verses from a specific chapter in a Bible version.

Parameters:

- `:version` (string) - The version of the Bible (e.g., "kjvs", "oromos", "amharas")
- `:bookid` (string) - The ID of the book (e.g., "GEN" for Genesis, "EXO" for Exodus, etc.)
- `:chapter` (integer) - The chapter number

Example Request:

```
GET https://bible-api-five.vercel.app/api/verses/english/GEN/50
```

Example Response:

```json
[
  {
    "book": "GEN",
    "chapter": 50,
    "verseNum": "1",
    "verse": "And Joseph fell upon his father’s face, and wept upon him, and kissed him. "
  },
  {
    "book": "GEN",
    "chapter": 50,
    "verseNum": "2",
    "verse": "And Joseph commanded his servants the physicians to embalm his father: and the physicians embalmed Israel. "
  }
  //...
]
```

### 4. Get a Single Verse

Endpoint: `GET /verses/:version/:bookid/:chapter/:versenum`

Description: This endpoint allows you to retrieve a single verse from a specific chapter in a Bible version.

Parameters:

- `:version` (string) - The version of the Bible (e.g., "kjvs", "oromos", "amharas")
- `:bookid` (string) - The ID of the book (e.g., "GEN" for Genesis, "EXO" for Exodus, etc.)
- `:chapter` (integer) - The chapter number
- `:versenum` (integer) - The verse number

Example Request:

```
GET https://bible-api-five.vercel.app/api/verses/oromo/GEN/1/1
```

Example Response:

```json
{
  "book": "GEN",
  "chapter": 2,
  "verseNum": "10",
  "verse": "And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads. "
}
```

### 5. Search for Verses

Endpoint: `GET /search/:version/verse`

Description: This endpoint allows you to search for verses containing specific text in a Bible version.

Parameters:

- `:version` (string) - The version of the Bible (e.g., "kjvs", "oromos", "amharas")
- `q` (string) - The search query. The API will search for the query text in the verses.

Example Request:

```
GET https://bible-api-five.vercel.app/api/search/english/verse?q=earth
```

Example Response:

```json
[
  {
    "book": "GEN",
    "chapter": 1,
    "verseNum": "1",
    "verse": "In the beginning God created the heaven and the earth. "
  },
  {
    "book": "GEN",
    "chapter": 1,
    "verseNum": "2",
    "verse": "And the earth was without form, and void; and darkness was  upon the face of the deep. And the Spirit of God moved upon the face of the waters. "
  }
  //...
]
```
