Morphext
========

This library was inspired by [Morphext](https://github.com/MrSaints/Morphext).

Due to its discontinuation, I decided to create this new plugin compatible with the new Animate CSS library.

This is not a fork due to creating a new structure for the project.

Special thanks to [MrSaints](https://github.com/MrSaints) for creating this awesome plugin.

> A simple, high-performance and cross-browser [jQuery][jquery] & Vanilla JS rotating / carousel plugin for text phrases powered by [Animate.css][animatecss].

This library autoimports the current latest [Animate.css][animatecss] library. Currently 4.1.1. It checks if it exists before importing. If you wish to override the version, check Options down below.

Usage jQuery
-----

1. Import `morphext.min.js` in your HTML document.

2. Add an element with selector `.js-rotating-text`

  ```html
    <span class="js-rotating-text"></span>
  ```

3. Add options as `data-morphext-options` attribute

  ```html
    <span class="js-rotating-text" data-morphext-options='{"animation": "fadeIn", "phrases": ["Hello", "World"]}'></span>
  ```

4. Trigger the plugin by calling morphext() on the element containing the rotating phrases:

    ```js
    $(".js-rotating-text").morphext();
    ```

Usage Vanilla JS
-----

1. Import `morphext.min.js` in your HTML document.

2. Add an element with selector `.js-rotating-text`

  ```html
    <span class="js-rotating-text"></span>
  ```

3. Add options as `data-morphext-options` attribute

  ```html
    <span class="js-rotating-text" data-morphext-options='{"animation": "fadeIn", "phrases": ["Hello", "World"]}'></span>
  ```

4. Trigger the plugin by calling creating a new class Morphext passing the selector of the element containing the rotating phrases:

    ```js
      new Morphext('.js-rotating-text');
    ```


Options
-------

Morphext allows the following options to alter the behaviour of the plugin:

Option | Type | Default | Description
--- | --- | --- | ---
animation | `String` | `bounceIn` | The [in] animation type. Refer to [Animate.css][animatecss] for a list of available animations.
speed | `Integer` | `2000` | The delay between the changing of each phrase in milliseconds.
autoInit | `Boolean` | `true` | If the animation should auto start
phrases | `Array<String>` | [] | The array of phrases to rotate around
animateCssVersion | `String` | `4.1.1` | The version of Animate CSS to import
autoAttachAnimateCss | `Boolean` | `true` | If the library should auto attach Animate CSS

The plugin relies heavily on [Animate.css][animatecss] for its [smooth, high performance animations](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) to transition between each phrase.

```css
#yourElement, .yourClass {
    /* Overrides Animate.css 1s duration */
    -vendor-animation-duration: 3s;
}
```


Issues
----------

Issue | Description | Solution
--- | --- | ---
Viewport | Certain animations (e.g. "up" and "down") by [Animate.css][animatecss] involves translating the element beyond the viewport thereby leading to unintended vertical and/or horizontal whitespace (further evident by the scrollbar "following" the animation effect. This is not a bug. | It may be eradicated by applying `overflow: hidden;` (CSS) to the parent of the element being animated.
JavaScript | JavaScript is required for the addition / removal of elements with [Animate.css][animatecss] [CSS animation] classes thereby creating the "transitioning effect". If JavaScript is disabled or unavailable, nothing will happen. All the phrases and its separator will be shown as it is (graceful degradation). | N/A
CSS3 | [Animate.css][animatecss] relies on CSS3 animations and transformations (available in most modern browsers). If CSS3 is disabled or unavailable, the phrases will continue to transition from one to another (assuming JavaScript is enabled), but there will be no animation effect. | No fallback is provided by this plugin. You may however, handle the fallback through the use of [Modernizr](http://modernizr.com/) (for feature detection) and [polyfills](http://html5polyfill.com/).

Should you encounter any problems or require assistance with this plugin, simply open a GitHub issue in this repository.


Prerequisites
-------------

- [jQuery][jquery]
- [Animate.css][animatecss]


License
-------

Morphext is licensed under the MIT license.

  [jquery]: https://www.jquery.com/
  [animatecss]: //daneden.github.io/animate.css/