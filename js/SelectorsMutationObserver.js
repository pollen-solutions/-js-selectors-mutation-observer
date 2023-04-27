/**
 * Selectors Mutation Observer
 *
 * @internal ES6 JS Library to observe DOM mutation and apply callback on observed HTMLElement in a Node context
 *
 * USAGE :
 * ---------------------------------------------------------------------------------------------------------------------
 import {SelectorsMutationObserver} from "./lib/selectorsMutationObserver"

 SelectorsMutationObserver('.element', function ($el, mutationObserverInstance) {
  console.log('HTMLElement with class [.element] was added !!')
 }, document.querySelector('ancestor-of-elements'))

 // or observe entire body

 SelectorsMutationObserver('.element', function ($el, mutationObserverInstance) {
  console.log('HTMLElement with class [.element] was added !!')
 }, document.querySelector('ancestor-of-elements'))
 * ---------------------------------------------------------------------------------------------------------------------
 */

 /**
 * @type Function
 *
 * @param {string} selectors
 * @param {(function(HTMLElement, MutationObserver): *)} callback
 * @param target
 */
export const SelectorsMutationObserver = function (selectors, callback, target = undefined) {
  const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            if (mutation.addedNodes.length >= 1) {
              for (let i = 0; i < mutation.addedNodes.length; i++) {
                let $el = mutation.addedNodes[i]
                if ($el instanceof HTMLElement) {
                  if ($el.matches(selectors)) {
                    callback($el, observer)
                  } else {
                    $el.querySelectorAll(selectors).forEach($childEl => callback($childEl, observer))
                  }
                }
              }
            }
          }
        })
      }),
      observerOptions = {childList: true, subtree: true},
      observerTarget = target instanceof Node ? target : document.body

  return observer.observe(observerTarget, observerOptions)
}
