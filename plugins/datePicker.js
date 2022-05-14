import Vue from 'vue'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';

Vue.use(VuePersianDatetimePicker, {
  name: 'date-picker',
  props: {
    format: 'YYYY-MM-DD',
    displayFormat: 'jYYYY/jMM/jDD',
    editable: false,
    inputClass: 'date-picker',
    altFormat: 'YYYY-MM-DD',
    color: '#00acc1',
    default: '2005-01-01',
    autoSubmit: true,
    //...
    //... And whatever you want to set as default.
    //...
  }
});

Vue.use(require('vue-jalali-moment'));
