<script setup lang="ts">
import { ref } from "vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import {
  faEnvelope,
  faThumbsUp,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faWeixin, faWeibo } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faEnvelope, faWeixin, faWeibo, faThumbsUp, faGlobe);

// const vTitle = {
//   mounted: (el: Event) => {
//     // console.log(el);
//   },
// };

// function mouseHover(event) {
//   // console.log(event);
// }

// TODO custom directive
// const vFocus = {
//   mounted: (el: HTMLElement) => {
//     el.addEventListener("mouseover", mouseHover);
//     console.log(el.style);
//   },
// };

const footList = ref({
  description: "Learnku Vue.js 是一个 Vue.js 的知识社区",
  contacts: [
    {
      icon: "fa-solid fa-envelope",
      title: "反馈问题",
      link: "mailto:summer@yousails.com",
    },
    {
      icon: "fa-brands fa-weibo",
      title: "站长微博",
      link: "https://weibo.com/1837553744/profile?topnav=1&wvr=6",
    },
    {
      icon: "fa-brands fa-weixin",
      title: "加我微信",
      link: "https://learnku.com/vuejs/contact",
    },
  ],
  designer: "Summer",
  sponsor: {
    title: "赞助商",
    list: [
      {
        logo: "https://cdn.learnku.com/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",
        title: "本站服务器由 UCloud 赞助",
        link: "http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao",
      },
      {
        logo: "https://cdn.learnku.com/uploads/banners/yGLIR0idW7zsInjsNmzr.png",
        title: "本站 CDN 服务由七牛赞助",
        link: "http://www.qiniu.com/?utm_source=phphub",
      },
      {
        logo: "https://cdn.learnku.com/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",
        title: "Composer 镜像赞助商",
        link: "https://www.upyun.com/",
      },
      {
        logo: "https://cdn.learnku.com/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",
        title: "订阅邮件赞助商：SendCloud",
        link: "http://www.sendcloud.net/",
      },
    ],
  },
  statistics: {
    title: "统计信息",
    list: [
      {
        title: "社区会员",
        description: "22889",
      },
      {
        title: "话题数",
        description: "7397",
      },
      {
        title: "评论数",
        description: "39375",
      },
    ],
  },
  other: {
    title: "其他信息",
    list: [
      {
        icon: "fa-solid fa-thumbs-up",
        title: "软件外包服务",
        link: "https://learnku.com/vuejs/contact",
      },
      {
        icon: "fa-solid fa-globe",
        title: "推荐网站",
        link: "https://learnku.com/vuejs/sites",
      },
    ],
  },
});
</script>

<template>
  <div class="flex flex-col space-y-12 lg:space-y-0 lg:flex-row items-center lg:items-start justify-between px-20 px-8 py-6 bg-gray-100 text-gray-600">
    <div class="site-info flex flex-col space-y-4 text-center lg:text-left">
      <p class="font-medium">{{ footList.description }}</p>
      <div class="contacts flex space-x-3 justify-center lg:justify-start">
        <a
          :href="contactItem.link"
          v-for="(contactItem, index) in footList.contacts"
          :key="index"
          :title="contactItem.title"
        >
          <font-awesome-icon
            :icon="contactItem.icon"
            class="fill-current w-5 h-5"
          />
        </a>
      </div>
      <p class="text-sm">
        Designed by ❤ <span>{{ footList.designer }}</span>
      </p>
    </div>
    <div class="sponsor space-y-2">
      <p class="text-xl font-semibold">{{ footList.sponsor.title }}</p>
      <a
        :href="sponsorItem.link"
        v-for="(sponsorItem, index) in footList.sponsor.list"
        :key="index"
        class="block"
      >
        <img class="h-5" :src="sponsorItem.logo" :alt="sponsorItem.title" />
      </a>
    </div>
    <div class="statistics space-y-2">
      <p class="text-xl font-semibold">{{ footList.statistics.title }}</p>
      <p
        v-for="(statisticItem, index) in footList.statistics.list"
        :key="index"
      >
        <span>{{ statisticItem.title }}</span
        ><span>: </span><span>{{ statisticItem.description }}</span>
      </p>
    </div>
    <div class="other-info space-y-2">
      <p class="text-xl font-semibold">{{ footList.other.title }}</p>
      <a
        :href="otherItem.link"
        class="flex space-x-2"
        v-for="(otherItem, index) in footList.other.list"
        :key="index"
      >
        <font-awesome-icon
          :icon="otherItem.icon"
          class="fill-current w-5 h-5"
        />
        <span>{{ otherItem.title }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
