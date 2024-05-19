<template>
  <div
    :style="{ backgroundImage: imageUrl, color: textColor }"
    class="flex flex-col items-center md:flex-row gap-4 px-5 min-h-[650px] bg-cover justify-between"
  >
    <div class="banner text-right">
      <h1 style="margin-top: 45px">نهمین دوره همایش زنگ برنامه نویسی</h1>
      <h2>(بزرگترین همایش علمی دانش آموزی کشور)</h2>
      <h4>
        باکیفیت‌ترین نوع یادگیری،<br />
        همگام با تکنولوژی و هم‌نبض با آینده‌ است <br />
        و کدنویسی ادبیات تکنولوژی و بذر آینده است.
      </h4>
      <h3>تاریخ همایش: ۱۳ مرداد لغایت ۱۹ مرداد ماه ۱۴۰۳</h3>
      <v-btn
        class="button-fill px-7 py-4 my-2 d-flex d-md-none"
        to="/register"
        style="transform: scale(1.4)"
      >
        ثبت نام
      </v-btn>
    </div>
    <div
      dir="ltr"
      class="terminal shadow-lg text-left p-2 rounded-md overflow-auto"
    >
      <span
        v-for="(line, index) in lines"
        :key="index"
        :style="{
          // display: commands[index]?.break ? 'inline-block' : '',
          // width: commands[index]?.break ? '98%' : '',
        }"
        >{{ line }} <br v-if="commands[index]?.break" />
      </span>
      <div v-if="showCursor" class="cursor"></div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/common";

export default {
  name: "MainBanner",
  props: {
    textColor: {},
    image: {},
    alt: { default: "" },
    count: {},
  },
  data: () => ({
    showCursor: false,
    lines: [],
    typingDelay: 50,
    responseDelay: 100,
    commands: [
      { text: "$ python3", delay: 1000, break: true },
      {
        text: "Python 3.8.5 (default, Jul 28 2020, 12:59:40)",
        delay: 0,
        break: true,
        instant: true,
      },
      { text: "[GCC 9.3.0] on linux", delay: 10, break: true, instant: true },
      { text: ">>> ", delay: 100, break: false, instant: true },
      { text: "import HOC", delay: 2000, break: true },
      { text: ">>> ", delay: 100, break: false, instant: true },
      { text: "me = SelfThoughtProgrammer()", delay: 2000, break: true },
      { text: ">>> ", delay: 100, break: false, instant: true },
      { text: "me.knowHowToProgram()", delay: 1000, break: true },
      { text: "False", delay: 100, break: true, instant: true },
      { text: ">>> ", delay: 100, break: false, instant: true },
      {
        text: "while me.knowHowToProgram() is False:",
        delay: 3000,
        break: true,
      },
      { text: ".... ", delay: 100, break: false, instant: true },
      {
        text: "  me.useHOCTutorials()",
        delay: 1500,
        break: true,
      },
      { text: ">>> ", delay: 100, break: true, instant: true },
      { text: ">>> ", delay: 500, break: false, instant: true },
      {
        text: "me.knowHowToProgram()",
        delay: 2000,
        break: true,
      },
      { text: "True", delay: 100, break: true, instant: true },
      { text: ">>> ", delay: 100, break: false, instant: true },
      {
        text: "exit()",
        delay: 1500,
        break: true,
      },
    ],
  }),
  watch: {
    lines: (newVal, oldVal) => {
      // console.log(newVal, oldVal);
    },
  },
  mounted() {
    hljs.highlightAll();
    this.runCommands();
  },
  methods: {
    async runCommands() {
      for (let i = 0; i < this.commands.length; i++) {
        const { text, delay, instant } = this.commands[i];
        await this.typeText(text, delay, instant);
        await new Promise((resolve) => setTimeout(resolve, this.responseDelay));
        // if (i === this.commands.length - 1) {
        //   this.lines.push("..."); // Add ellipsis to indicate the terminal is ready for more input
        // }
      }
    },
    async typeText(text, delay, instant) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      this.showCursor = true;
      this.lines.push("");

      if (instant) {
        this.lines[this.lines.length - 1] = text;
      } else {
        for (let i = 0; i < text.length; i++) {
          this.lines[this.lines.length - 1] += text[i];
          this.lines = [...this.lines];
          await new Promise((resolve) => setTimeout(resolve, this.typingDelay));
        }
      }

      this.showCursor = false;
    },
  },
  computed: {
    imageUrl() {
      return `url('${this.$props.image}')`;
    },
  },
};
</script>

<style scoped>
.banner {
  background-size: cover;
  background-position: center;
  display: flex;
  /* height: 650px; */
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 40px;
  padding: 10px;
}

h1 {
  font-weight: bold;
}

h4 {
  line-height: 40px;
}

.remaining {
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid white;
  margin-bottom: 40px;
}

@media screen and (min-width: 1000px) {
  .banner {
    padding: 100px;
  }

  .remaining {
    width: 50%;
  }
}

.terminal {
  background-color: #212121;
  color: #fff;
  font-family: monospace !important;
  width: 550px;
  max-width: 100%;
  padding: 20px;
  overflow-y: scroll;
  height: 350px !important;
  max-height: 300px;
  min-height: 300px;
}
</style>
