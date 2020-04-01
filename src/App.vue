<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

<<<<<<< HEAD
  a {
    font-weight: bold;
    color: #2c3e50;
=======
    <v-footer><v-card-text class="text-center">&copy; TEDxNagoyaU</v-card-text></v-footer>
  </v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap&subset=japanese');
.tategaki{
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-weight: 900; text-shadow: 2px 2px #000000
};
.kanji{
  font-family: 'Noto Serif JP', serif;
};
.about_section{
  /*background-image: url("https://live.staticflickr.com/7455/11340023366_af6c395af0_o.jpg");
  background-position: center;*/
};
</style>
<script>
export default {
  name: "App",
  data: function() {
    return {
      imgLink: {
        firstView: "https://live.staticflickr.com/65535/48247140977_d4ea623259_o.jpg",
        group2017: "https://live.staticflickr.com/4614/28001906269_7c28edf9f3_o.jpg",
        mc2017: "https://live.staticflickr.com/4727/38653364914_4c0415b74a_k.jpg",
        tedxnagoyaUlogo: "https://live.staticflickr.com/65535/49633281918_bcdc62932a_b.jpg",
      },
      eventContents: [
        {
          title: "Talk Session",
          subtitle: "スピーカーによるトーク",
          img: "https://live.staticflickr.com/1764/43251114892_a7f2f6c16a_k.jpg",
          //img: firstView,
          text: "7~9人のスピーカーがプレゼンテーションを行います。Technology Entertainment Design (TED)とあるように、様々なトピックでアイデアをプレゼンします。",
        },
        {
          title: "Break Session",
          subtitle: "トークに集中した後に",
          img: "https://live.staticflickr.com/65535/49596215708_44d57902fe_k.jpg",
          text: "トーク内容について参加者同士で考えたり、イベントのテーマについて深く考えることのできる時間です。トークの時間では伝えきれなかったスピーカーの熱い思いを聞くこともできます。",
        },
        {
          title: "After Party",
          subtitle: "参加者同士でイベントの感想を共有",
          img: "https://live.staticflickr.com/65535/48261788467_da6b0df5fd_k.jpg",
          text: "1日の終わりに、今日のイベントを食事と一緒に参加者同士で振り返ります。",
        }
      ],
      teamContents: [
        {
          title: "Speaker Team",
          subtitle: "スピーカーとトークを一緒に作り上げるチーム",
          img: "https://live.staticflickr.com/1810/41531993540_04681e7caa_k.jpg",
          text: "本番イベントのメインコンテンツ、スピーカーのトーク内容に深く関わるチームです。スピーカーの決定から、トーク内容の磨き上げ、Body languageのやり方についてスピーカーの方々にアドバイスしていきます！2019年の登壇者の方々の情報はこちらから!"
        },
        {
          title: "Communication Team",
          subtitle: "協力企業、大学等と連携するチーム",
          img: "https://live.staticflickr.com/835/28473721867_c8a63a7647_k.jpg",
          text: "主にイベントの開催にお力添えいただく協賛企業様とのやり取りを行うチームです。具体的には、メールや電話などで連絡を行ってアポイントメントを取り、企業訪問を行い、協賛をいただくということをやっています。また,当日のブレイクタイムに行われるコンテンツ企画・制作も行っています。"
        },
        {
          title: "Tech Team",
          subtitle: "SNS, HPの管理からタスク自動化、当日機材操作まで",
          img: "https://live.staticflickr.com/65535/48195485222_8dbbb4a284_h.jpg",
          text: "本番では舞台の映像照明音響を一手に引き受け、本番前は当ホームページ管理・SNS管理・団体内システムの構築などを行っている技術系チームです。なにかを作ること・便利にすることに興味がある人大歓迎！"
        }
      ],
      shinkanEvents: [
        {
          title: "説明会",
          subtitle: "実際のミーティングに参加して雰囲気をつかもう",
          date: "4/16, 4/30",
          img: "https://live.staticflickr.com/65535/49634567807_4dde461a02_b.jpg",
          text: "TEDxNagoyaUについて、活動内容・イベント詳細はもちろん、「自分がやりたいことができるのか」「雰囲気は合っているか」を肌で確認していただけます！加入を少しでも検討される方には参加していただくことを強くおすすめしています。",
        },
        {
          title: "TEDxNagoyaU Salon",
          subtitle: "TEDxNagoyaUに興味が無くてもオススメ！！！",
          date: "",
          img: "https://live.staticflickr.com/65535/49634344386_00b3cdfd7b_b.jpg",
          text: "毎年「これで参加を決めた！」という人が多いイベントです！新入生の方々の今後の大学生活に活かされること間違いなしのコンテンツになっています！！",
        }
      ],
      timeLineItems: [
        {
          title: "説明会に参加",
          date: "4/16, 4/30",
          text: "TEDxNagoyaUに加入を希望される方には必ず説明会に参加していただいています。もし参加が難しい場合は別途対応させていただきますので、Twitterやメールでご連絡ください。",
          btnName: "説明会詳細",
          btnLink: "#setsumeikai",
          disabled: false,
        },
        {
          title: "Salonに参加",
          date: "4/23",
          text: "夏の本番イベントに向けて活動していくには、どんなものを作り上げていくのかイメージできることが大事です。サロンイベントを経験することで、加入後も明確なイメージを持ちながら活動できます！",
          btnName: null,
          btnLink: null,
          disabled: null,
        },
        {
          title: "応募",
          date: "4/16 ~ 5/8",
          text: "「TEDxNagoyaUにメンバーとして参加したい！」と意思が固まったら、下記フォームから必要事項を入力してください。後日入力していただいた連絡先に面接日程の調整案内を送らせていただきます。",
          btnName: "申込フォーム",
          btnLink: null,
          disabled: true,
        },
        {
          title: "面接",
          date: "4/23 ~ 5/13",
          text: "TEDxNagoyaUは、運営がうまくいくことだけではなく、新メンバーの方々がうまく活動できるかどうかを重視しています。そのため、簡単な面接でなぜ加入したいのかやTEDxNagoyaUを選んでいただいた理由などについてお聞きしています。",
          btnName: null,
          btnLink: null,
          disabled: null,
        }
      ],
      contactList: [
        {
          title: "@TEDxNagoyaU",
          subtitle: "最新情報を毎日更新中！",
          icon: "mdi-twitter",
          link: "https://twitter.com/TEDxNagoyaU",
        },
        {
          title: "@tedxnagoyau",
          subtitle: null,
          icon: "mdi-instagram",
          link: "https://www.instagram.com/tedxnagoyau/"
        },
        {
          title: "info@tedxnagoyau.com",
          subtitle: null,
          icon: "mdi-mail",
          link: "mailto:info@tedxnagoyau.com"
        },
        {
          title: "/tedxnagoyau",
          subtitle: null,
          icon: "mdi-facebook",
          link: "https://www.facebook.com/tedxnagoyau/"
        },
      ],
      memberPanels: [
        {
          avator: "http://drive.google.com/uc?export=view&id=15xgHinkKTvtDk8ctNfNuDW8V6O6gHEW0",
          name: "上田蓮",
          excerpt: "TEDxの世界へようこそ！",
          message: "この団体では、アイデアとアイデア、人と人が繋がる瞬間を目の当たりにすることができます。熱意ある仲間と一緒に、多くの困難の先にある奇跡を見てみませんか？\n何かを学びたい、作り上げたい、成果を残したいと思う人は是非一度足を運んでみてください！\nお待ちしてます！"
        },
        {
          avator: "http://drive.google.com/uc?export=view&id=13NWXJ-6u6ig44cwlZOWsdLHwJod5RjMZ",
          name: "弓達汰一",
          excerpt: "ひと味違った大学生活に",
          message: "この団体は大学に入って、周りの人とはひと味違った経験をしたいという人にオススメです。\n多くの大学生はバイトやサークルに明け暮れる生活を送っています。僕の周りにもバイトしかする事ないよーって行ってる人はたくさんいます。しかしこの団体に所属すると、大学の外の人たちと関わりを持つ機会が増えたり、自分の軸を持って行動しているような志の高い人とたくさん出会えます。\n特に自分の活動してるコミュニケーションチームは社会人との関わりも多く、実際に企業に行って交渉をするなど、大学生ではできないような経験ができます。\n周りとはひと味違う充実した大学生活を送ってみませんか。"
        },
>>>>>>> parent of b32799d... release

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
