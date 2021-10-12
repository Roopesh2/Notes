(function (w) {
  w["$"] = function (elem) {
    let elements;
    if (elem instanceof Document || elem == "document") elements = [document];
    else elements = Array.from(document.querySelectorAll(elem));

    if (elements.length == 0) console.error(`${elem} not found`);
    return new _$(elements);
  };

  /**
   *
   * @param {HTMLElement[]} elements
   */
  function _$(elements) {
    /**
     * Returns values of attributes
     * @param {string} attr
     * @returns
     */
    function getAttributeValues(attr) {
      let values = [];
      // debugger
      for (var el of elements) values.push(el[attr]);
      if (values.length == 1) return values[0];
      return values;
    }

    /**
     * Sets values of attributes
     * @param {string} attr
     * @param {*} value
     * @returns
     */
    function setAttributeValues(attr, value) {
      for (var el of elements) el[attr] = value;
    }

    /**
     * sets a given value as value of element(s). If no value is given it will return current value
     * @param {*} [value]
     * @returns {string|string[]} value(s) before modification
     */
    this.val = function (value) {
      if (arguments.length > 0) for (var el of elements) el.value = value;
      return getAttributeValues("value");
    };

    /**
     * Sets innerHTML of element(s) by given value if given. Return the innerHTML before modification
     * @param {*} [content]
     * @returns {string} innerHTML
     */
    this.html = function (content) {
      const html = getAttributeValues("html");
      if (arguments.length > 0) setAttributeValues("html", content);
      return html;
    };

    /**
     * Sets a given attribute a value if given. Retuns value of attribute before modification.
     * @param {string} name name of attribute
     * @param {*} [value]
     * @returns
     */
    this.attr = function (name, value) {
      const attrs = getAttributeValues(name);
      setAttributeValues(name, value);
      return attrs;
    };

    /**
     * Removes a given attribute
     * @param {string} name
     */
    this.removeAttr = function (name) {
      elements.removeAttribute(name);
    };

    /**
     * Sets a given text to the innerText property of elements
     * @param {*} value
     * @returns {string} text before changing
     */
    this.text = function (value) {
      const texts = getAttributeValues("innerText");
      if (arguments.length > 0) setAttributeValues("innerText", value);
      return texts;
    };

    /**
     * appends given elements
     */
    this.append = function () {
      for (let el of elements) {
        for (i = 0; i < arguments.length; i++) el.append(arguments[i]);
      }
    };

    /**
     * prepends given elements
     */
    this.prepend = function () {
      for (let el of elements) {
        for (i = 0; i < arguments.length; i++) el.prepend(arguments[i]);
      }
    };

    this.addClass = function (className) {
      for (let el of elements) el.classList.add(className);
    };

    this.removeClass = function (className) {
      for (let el of elements) el.classList.remove(className);
    };

    this.css = function (property, value) {
      if (typeof property === "string") {
        return elements.style.getPropertyValue(property);
      } else {
        if (typeof property === "object") {
          var c = Object.keys(property),
            d = Object.values(property);
          for (i = 0; i < c.length; i++) {
            elements.style.setProperty(c[i], d[i]);
          }
        } else {
          elements.style.setProperty(property, value);
        }
      }
    };

    this.width = function (width) {
      if (arguments.length == 0) {
        return elements.style.width;
      } else {
        if (typeof width == "number") width += px;
        elements.style.width = width;
      }
    };

    this.height = function (height) {
      if (arguments.length == 0) {
        return elements.style.height;
      } else {
        if (typeof height == "number") height += px;
        elements.style.height = height;
      }
    };

    this.remove = function () {
      elements.remove(1);
    };

    this.on = function (event, callback) {
      for (let el of elements) {
        if (event == "enter") {
          el.addEventListener("keydown", function (e) {
            if (e.key == "Enter") callback(e);
          });
        } else {
          el.addEventListener(event, (e) => callback(e));
        }
      }
    };

    this.hide = function () {
      for (let el of elements) el.style.display = "none";
    };

    this.show = function () {
      for (let el of elements) el.style.display = "";
    };
  }
})(window);
