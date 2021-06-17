class Morphext {
  constructor(selector) {
    this._element = document.querySelector(selector);

    // Get user configuration options
    const defaults = JSON.parse(
      this._element.getAttribute("data-morphext-options")
    );

    // Default props
    const settings = Object.assign(
      {
        animation: "bounce",
        speed: 2000,
        onComplete: null,
        autoInit: true,
        phrases: [],
        animateCssVersion: "4.1.1",
        autoAttachAnimateCss: true,
      },
      defaults
    );

    // Auto import Animate CSS
    if (settings.autoAttachAnimateCss) {
      let styleSheets = document.styleSheets;
      const cssPath = `https://cdnjs.cloudflare.com/ajax/libs/animate.css/${settings.animateCssVersion}/animate.min.css`;
      for (let i = 0, max = ss.length; i < max; i++) {
        if (styleSheets[i].href === cssPath) return;
      }
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;

      document.getElementsByTagName("head")[0].appendChild(link);
    }

    this._settings = settings;
    this._selector = selector;
    this._index = 0;
    this._element.classList.add("morphext");

    if (settings.autoInit) {
      start();
    }
  }

  start() {
    this._interval = setInterval(function () {
      this.animate();
    }, this.settings.speed);
  }

  animate() {
    this._index = this._index % this._settings.phrases.length;
    const innserSpan = document.createElement("span");
    innserSpan.classList.add(
      "morphext__animated",
      "animate__animated",
      `animate__${this._settings.animation}`
    );
    innserSpan.innerHTML = this._settings.phrases[this._index];
    this._element.innerHTML = innserSpan;
    this._index += 1;
  }

  stop() {
    this._interval = clearInterval(this._interval);
  }
}

window.Morphext = Morphext;
