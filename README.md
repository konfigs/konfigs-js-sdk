# How to use the library
- [Documentation](https://docs.enkig.app/docs/api/client-libraries/NodeJs)

## Required Values

-   API key
-   Node Id
-   Application ID

## Optional Values

-   Endpoint (optional)
-   Profile (optional)

## Install the SDK

Install konfigs-sdk using **npm**

```
npm install konfigs-sdk
```

or through **yarn**

```
yard add konfigs-sdk
```

## Import and Consume

**For importing we have 2 Ways:**

**1. Through direct function call**

-   Import function

```
import {getHydratedConfigs} from "konfigs"
```

-   Add this piece to your code to fetch configs

```
const data = await getHydratedConfigs("<Your API Key>","<Node ID>","<Application ID>","<Profile 'Optional!'>","<Endpoint 'Optional!'>'")
```

-   To see fetched data you can write

```
console.log(data)
```

**2. Through default module konfigsSDK**

-   Import default module

```
import KonfigsSdk from 'konfigs-sdk'
```

-   Initialize object

```
const konfigsSdkObject = new KonfigsSdk("<Your API Key>","<Application ID>","<Profile 'Optional!'>","<Endpoint 'Optional!'>'")
```

-   Use the following to fetch configs

```
const data = konfigsSdkObject.getHydratedConfigs("<Node ID>")
```

## Output

When using `console.log(data)` the returned data object is going to be in the following shape which allows you to map and consume easily in your system:

```

Returned Object

{
    nodeId: '<Node ID>',
    data: [An Array of Configs]
}

Configs Array sturcture
{
    key: '<Key Name>',
    value: {
        value: '<Config Value>',
        datatype: '<Data type of this value>'
    }
}
```

## SDK and example website links

-   Example website that consumes this sdk can be found **[here](https://enkisdk-react-example.web.app/)** and source code about how it's used can be found **[here](https://github.com/konfigs-io/react-example)**
-   **[Link](https://www.npmjs.com/package/konfigs-sdk)** of sdk on npm
