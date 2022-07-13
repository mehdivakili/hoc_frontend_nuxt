import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__persian_number_mixin__) {
  Vue.__persian_number_mixin__ = true
  Vue.mixin({
    methods: {
      numberToPersian(number) {
        const persian = {
          0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷",
          8: "۸", 9: "۹"
        };
        let suffix = (number < 0) ? "-" : ""
        let persianNumber = ""

        number = Math.abs(number).toString().split("");
        for (let i = 0; i < number.length; i++) {
          number[i] = persian[number[i]];
        }
        for (let i = 0; i < number.length; i++) {
          persianNumber += number[i];
        }
        return persianNumber + suffix;
      }
    }

  })
}
