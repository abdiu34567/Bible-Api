# Bible API Documentation

Welcome to the Bible API! This API provides access to the English KJV, Oromo, and Amhara versions of the Bible. You can use the provided endpoints to access various details and verses from the Bible.

## Base URL

The base URL for the API is: `bible-api-kappa.vercel.app/`

## Endpoints

### 1. List all Book IDs

Endpoint: `GET api/v1/listbookids`

Description: This endpoint allows you to retrieve a list of all book IDs available in the Bible versions.

Example Request:

```
GET bible-api-kappa.vercel.app/api/v1/listbookids
```

Example Response:

```json
{
    "status": 200,
    "message": "Success",
    "version": "1.0",
    "data": [
        {
            "books": {
                "1": "GEN",
                "2": "EXO",
                "3": "LEV",
                "4": "NUM",
                "5": "DEU",
                "6": "JOS",
                "7": "JDG",
                "8": "RUT",
                "9": "1SA",
                "10": "2SA",
                "11": "1KI",
                "12": "2KI",
                "13": "1CH",
                "14": "2CH",
                "15": "EZR",
                "16": "NEH",
                "17": "EST",
                "18": "JOB",
                "19": "PSA",
                "20": "PRO",
                "21": "ECC",
                "22": "SNG",
                "23": "ISA",
                "24": "JER",
                "25": "LAM",
                "26": "EZK",
                "27": "DAN",
                "28": "HOS",
                "29": "AMO",
                "30": "MIC",
                "31": "JOL",
                "32": "OBA",
                "33": "JON",
                "34": "NAM",
                "35": "HAB",
                "36": "ZEP",
                "37": "HAG",
                "38": "ZEC",
                "39": "MAL",
                "40": "MAT",
                "41": "MRK",
                "42": "LUK",
                "43": "JHN",
                "44": "ACT",
                "45": "ROM",
                "46": "1CO",
                "47": "2CO",
                "48": "GAL",
                "49": "EPH",
                "50": "PHP",
                "51": "COL",
                "52": "1TH",
                "53": "2TH",
                "54": "1TI",
                "55": "2TI",
                "56": "TIT",
                "57": "PHM",
                "58": "HEB",
                "59": "1PE",
                "60": "2PE",
                "61": "1JN",
                "62": "2JN",
                "63": "3JN",
                "64": "JAS",
                "65": "JUD",
                "66": "REV"
            }
        }
    ]
}
```

### 2. Get Book Information

Endpoint: `GET api/v1/book/info/:bookid`

Description: This endpoint provides information regarding how many total chapters the book includes and how many verses each chapter includes.

Parameters:

- `:bookid` (string) - The ID of the book (e.g., "GEN" for Genesis, "EXO" for Exodus, etc.)

Example Request:

```
GET bible-api-kappa.vercel.app/api/v1/book/info/GEN
```

Example Response:

```json
{
    "status": 200,
    "message": "Success",
    "version": "1.0",
    "data": {
        "book": "GEN",
        "totchapter": 50,
        "chapters": {
            "1": 31,
            "2": 25,
            "3": 24,
            "4": 26,
            "5": 32,
            "6": 22,
            "7": 24,
            "8": 22,
            "9": 29,
            "10": 32,
            "11": 32,
            "12": 20,
            "13": 18,
            "14": 24,
            "15": 21,
            "16": 16,
            "17": 27,
            "18": 33,
            "19": 38,
            "20": 18,
            "21": 34,
            "22": 24,
            "23": 20,
            "24": 67,
            "25": 34,
            "26": 35,
            "27": 46,
            "28": 22,
            "29": 35,
            "30": 43,
            "31": 55,
            "32": 32,
            "33": 20,
            "34": 31,
            "35": 29,
            "36": 43,
            "37": 36,
            "38": 30,
            "39": 23,
            "40": 23,
            "41": 57,
            "42": 38,
            "43": 34,
            "44": 34,
            "45": 28,
            "46": 34,
            "47": 31,
            "48": 22,
            "49": 33,
            "50": 26
        }
    }
}
```

### 3. Get Verses from a Chapter

Endpoint: `GET api/v1/verses/:version/:bookid/:chapter`

Description: This endpoint allows you to retrieve all the verses from a specific chapter in a Bible version.

Parameters:

- `:version` (string) - The version of the Bible (e.g., "kjv", "oromo", "amhara")
- `:bookid` (string) - The ID of the book (e.g., "GEN" for Genesis, "EXO" for Exodus, etc.)
- `:chapter` (integer) - The chapter number

Example Request:

```
GET bible-api-kappa.vercel.app/api/v1/verses/kjv/GEN/50
```

Example Response:

```json
{
    "status": 200,
    "message": "Success",
    "version": "1.0",
    "data": [
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
        },
  //...
}
```

### 4. Get a Single Verse

Endpoint: `GET api/v1/verses/:version/:bookid/:chapter/:versenum`

Description: This endpoint allows you to retrieve a single verse from a specific chapter in a Bible version.

Parameters:

- `:version` (string) - The version of the Bible (e.g., "kjv", "oromo", "amhara")
- `:bookid` (string) - The ID of the book (e.g., "GEN" for Genesis, "EXO" for Exodus, etc.)
- `:chapter` (integer) - The chapter number
- `:versenum` (integer) - The verse number

Example Request:

```
GET bible-api-kappa.vercel.app/api/v1/verses/kjv/GEN/2/10
```

Example Response:

```json
{
    "status": 200,
    "message": "Success",
    "version": "1.0",
    "data": {
        "book": "GEN",
        "chapter": 2,
        "verseNum": "10",
        "verse": "And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads. "
    }
}
```

### 5. Search for Verses

Endpoint: `GET api/v1/search/:version/verse`

Description: This endpoint allows you to search for verses containing specific text in a Bible version.

Parameters:

- `:version` (string) - The version of the Bible (e.g., "kjv", "oromo", "amhara")
- `q` (string) - The search query. The API will search for the query text in the verses.

Example Request:

```
GET bible-api-kappa.vercel.app/api/v1/search/kjv/verse?q=earth
```

Example Response:

```json
{
    "status": 200,
    "message": "Success",
    "version": "1.0",
    "data": [
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
        },
  //...
}
```

</br>

# Terms and Conditions

- The Bible API provides access to the English KJV, Oromo, and Amhara versions of the Bible. The complete data of the Bible is owned by us, and we offer it as an API for public use.

- Developers are welcome to use and integrate the API into their applications.

- Contributions to improve and enhance the API are encouraged and appreciated.

- If you encounter any issues or have any questions related to the API, please feel free to contact ( abdiurgessa9@gmail.com | [Telegram](https://t.me/Me_abd) ) us or open an issue on our GitHub repository.

- While we strive to provide a reliable and accurate API, we do not guarantee its continuous availability or error-free performance.

- Users are responsible for complying with copyright and licensing restrictions when using the Bible data in their applications.

- We reserve the right to modify the API's behavior, features, or endpoints at our discretion.

- Usage of the Bible API is subject to the acceptance of these terms and conditions.

Thank you for using the Bible API. We hope it serves as a valuable resource for your applications and helps spread the Word of God.
