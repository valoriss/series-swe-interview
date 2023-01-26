# Gilded Rose Kata

Gilded Rose Kata is a nodeJS application written in Typescript compiled by ts-node. Gilded Rose includes a test suite consisting of jest and mocha.

The purpose of this application is to update the quality of goods as they approach their sell by date.


## Features
___

Gilded Rose Kata currently fully supports updating quality for the following goods:

1. <input type="checkbox" checked> Conjured Mana Cake 
2. <input type="checkbox" checked> Backstage passes to a TAFKAL80ETC concert
3. <input type="checkbox" checked> Sulfuras, Hand of Ragnaros
4. <input type="checkbox" checked> Aged Brie
5. <input type="checkbox" checked> Any normal item


> **_NOTE:_** "Any normal item", as mentioned in feature (6) is any item that does not meet the requirements of items 1 through 5 in the feature list.

## Forward looking thoughts & TODO List
___

Given the requirements of Gilded Rose, we may choose to support any special items that contain specific key words. To avoid overengineering, these features have not been added yet:

<input type="checkbox" > Any item that starts with "Conjured" \
<input type="checkbox" > Any item that includes "Backstage passes" \
<input type="checkbox" > Any item that includes "Sulfuras" \
<input type="checkbox" > Any item that includes "Aged Brie" \
<input type="checkbox" > Prettier or Eslint formatting rules \
<input type="checkbox" > Implementing app logs for production monitoring \
<input type="checkbox" > Sometimes ts-node and absolute paths don't work nicely with each other in a consistent matter. Explore options to compile the absolute paths. I found this on the `ts-node` docs https://github.com/TypeStrong/ts-node#paths-and-baseurl \
<input type="checkbox" > Include tests for glided-rose constructor

## Project structure
Below is the current project structure. Hopefully collaborators find it useful.
```
typescript

|- app
    |- classes // Includes the entities responsibile to construct business logic
        - gilded-rose.ts
        - item.ts
    |- helpers
        - enum.ts // includes static values used throughout the application
        - updateQuality.ts // includes helper functions to aid business logic

|- test
    |- jest
        - glided-rose.spec.ts // test the glided-rose class
    |- mocha
        - glided-rose.spec.ts // test the glided-rose class

- README.md
```

## Getting started
___
Install dependencies

```sh
npm install
```


## Running app
_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Running tests

To run all tests

### Jest way

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

### Mocha way
```sh
npm run test:mocha
```

___
