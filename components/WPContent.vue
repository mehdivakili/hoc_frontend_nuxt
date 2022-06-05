<script>
export default {
  props: {
    html: {
      type: String,
      default: ""
    }
  },
  computed: {
    dynamicComponent() {
      return {
        template: this.html,
        props: [
          /* define props as needed */
        ]
      };
    }
  },
  render(createElement, context) {
    return createElement("div", [
      createElement(this.dynamicComponent, {
        props: {
          /* pass prop values as needed */
        }
      })
    ]);
  }
};
</script>
