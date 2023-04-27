# Selectors Mutation Observer

[![Latest Stable Version](https://img.shields.io/npm/v/@pollen-solutions/js-selectors-mutation-observer.svg?style=for-the-badge)](https://packagist.org/packages/pollen-solutions/skeleton)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE.md)

## Installation

```shell
npm i @pollen-solutions/js-selectors-mutation-observer
```

## Usage 

### Observe on a specific ancestor element (recommended)

```javascript
import {SelectorsMutationObserver} from "@pollen-solutions/js-selectors-mutation-observer"

SelectorsMutationObserver('.element', function ($el, mutationObserverInstance) {
  console.log('HTMLElement with class [.element] was added !!')
}, document.querySelector('ancestor-of-element'))
```

### Observe over the entire DOM (resource consumer)

```javascript
import {SelectorsMutationObserver} from "@pollen-solutions/js-selectors-mutation-observer"

SelectorsMutationObserver('.element', function ($el, mutationObserverInstance) {
  console.log('HTMLElement with class [.element] was added !!')
})
```