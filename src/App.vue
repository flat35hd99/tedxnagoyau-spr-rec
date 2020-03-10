<template>
  <v-app light>
    <v-app-bar app color="white" :inverted-scroll="true" scroll-threshold="600" >
      <v-img src="https://live.staticflickr.com/65535/49633281918_bcdc62932a_b.jpg" :contain=true max-height="25" position="left"></v-img>
    </v-app-bar>

    <v-content>
      <section id="#setsumeikai">
        <v-parallax :src="imgLink.firstView" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1
              class="white--text mb-2 display-1 text-xs-center tategaki kanji"
            >求む、熱意ある学生。
          </h1>
            <div
              class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000; border-bottom: solid 2px red;"
            >運営メンバー募集します</div>
            <!--<v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn>-->
          </v-layout>
        </v-parallax>
      </section>

      <v-container>
        <div class="about_section">
          <v-row justify="center">
            <v-col xs="12" sm="10">
              <div>
                <v-card>
                  <v-img :src="imgLink.group2017" alt=""></v-img>
                  <v-card-title>about us</v-card-title>
                  <v-card-subtitle>TEDxNagoyaUについて</v-card-subtitle>
                  <v-card-text>TEDxNagoyaUは学生のみで運営されるTED公認のTEDxイベント運営団体です。スピーカーを外部からお呼びし、プレゼンテーションを一緒に考えたり、協力してくださる企業の方々を探したり、マーケティングを行ったりと、イベント運営に必要なことをすべて自分たちで行っています。TEDxNagoyaU 2020に向けて、私たちと一緒に最高のイベントを作り上げませんか？</v-card-text>
                  <!--画像に写ってる人、今誰も活動してない件-->
                </v-card>
              </div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xs="12" sm="10">
              <div>
                <v-card>
                  <v-img :src="imgLink.mc2017" alt=""></v-img>
                  <v-card-title>about TEDx</v-card-title>
                  <v-card-subtitle>TEDxって？</v-card-subtitle>
                  <v-card-text>TEDxとは、「ideas worth spreading」というTEDの 精神のもとに世界各地で発足し、 独自に運営されているイベントです。TEDxはTEDイベントと同じように運営されていますが、TEDに定められたルールの下で独自に運営されています。</v-card-text>
                  <!--画像に写ってる人、今活動してない件-->
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-row>
          <v-col xs="12">
            <div>
              <v-card :color="gray">
                <v-card-title>Event Content</v-card-title>
                <v-card-subtitle>どんなイベント？</v-card-subtitle>
                <v-card-text>イベントは1日を通して行い、登壇者のトークだけでなく、参加者同士の交流も多くあるのが特徴的です。</v-card-text>
                <v-row justify="center" class="mx-1">
                  <v-col xs="12" sm="6" md="4" v-for="item in eventContents" :key="item.title">
                    <div>
                      <v-card>
                        <v-img :src="item.img" alt=""></v-img>
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>
                        <v-card-text>{{item.text}}</v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col xs="12">
            <div>
              <v-card :color="gray">
                <v-card-title>Teams</v-card-title>
                <v-card-subtitle>加入したらなにをする？</v-card-subtitle>
                <v-card-text>春から加入したメンバーは、7月（予定）のイベントに向けて以下の3つのチームに分かれて活動を行います。</v-card-text>
                <v-row justify="center" class="mx-1">
                  <v-col xs="12" sm="6" md="4" v-for="item in teamContents" :key="item.title">
                    <div>
                      <v-card>
                        <v-img :src="item.img" alt=""></v-img>
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>
                        <v-card-text>{{item.text}}</v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12">
            <div>
              <v-card :color="gray" id="setsumeikai">
                <v-card-title>新歓イベント</v-card-title>
                <v-card-subtitle>もしサークル選びの候補になったら</v-card-subtitle>
                <v-card-text>新メンバー募集のため、説明会とサロンイベントを開催します！</v-card-text>
                <v-row justify="left" class="mx-1">
                  <v-col xs="12" sm="6" md="6" v-for="item in shinkanEvents" :key="item.title">
                    <div>
                      <v-card>
                        <v-img :src="item.img"></v-img>
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>
                        <v-card-text>{{item.text}}</v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>
              <v-card :color="gray">
                <v-card-title>Info</v-card-title>
                <v-card-subtitle>迷っているあなたへ</v-card-subtitle>
                <v-card-text>サークル・部活選びの参考に、TEDxNagoyaUの特徴やメンバーの声をまとめました！</v-card-text>
                <v-row justify="left">
                  <v-col xs="12" sm="12" md="6">
                    <div>
                      <v-card>
                        <v-card-title>メンバーの声</v-card-title>
                        <!--<v-card-subtitle></v-card-subtitle>
                        <v-card-text>hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge</v-card-text>-->
                        <v-card-text>
                          <v-row>
                            <v-expansion-panels>
                              <v-expansion-panel
                                v-for="(item, i) in memberPanels"
                                :key="i"
                                hide-actions
                              >
                                <v-expansion-panel-header>
                                  <v-row align="center" class="spacer" no-gutters>
                                    <v-col xs="1" sm="3" md="2" class="hidden-xs-only">
                                      <v-avatar size="48px">
                                        <img :src="item.avator" alt="Avatar">
                                      </v-avatar>
                                    </v-col>
                                    <v-col xs="4" sm="9" md="10">
                                      <p></p>
                                      <strong v-html="item.name"></strong>
                                      <p >{{item.excerpt}}</p>
                                    </v-col>
                                  </v-row>

                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  <v-divider></v-divider>
                                  <v-card-text style="white-space: pre-line;">{{item.message}}</v-card-text>
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                            </v-expansion-panels>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                  <!--<v-col xs="12" sm="6" md="6">
                    <div>
                      <v-card class="">
                        <v-card-title>こんな人に入って欲しい！</v-card-title>
                        <v-card-subtitle></v-card-subtitle>
                        <v-card-text>大学生活、何もせずに過ごしたくない！一味違ったことをしたい！と思っているそこのあなた！！一度説明会に足を運んでみませんか？？17人の個性豊かなメンバーで、お待ちしています！</v-card-text>
                      </v-card>
                    </div>
                  </v-col>-->
                  <v-col xs="12" sm="12" md="6">
                    <div>
                      <v-card class="mb-6">
                        <v-card-title>こんな人に入って欲しい！</v-card-title>
                        <v-card-subtitle></v-card-subtitle>
                        <v-card-text>大学生活、何もせずに過ごしたくない！一味違ったことをしたい！と思っているそこのあなた！！一度説明会に足を運んでみませんか？？17人の個性豊かなメンバーで、お待ちしています！</v-card-text>
                      </v-card>
                    </div>
                    <div>
                      <v-card class="mb-6">
                        <v-card-title>加入のメリット</v-card-title>
                        <v-card-text>
                          <ul>
                            <li v-for="(item,index) in meritItems" :key="index">{{item.text}}</li>
                          </ul>
                          <p style="height: 0;user-select:none;opacity: 0">hogehogehogehogehogehogehogehogehogehogehogehogehoge</p><!--fu***************************************************k
                            DONT DELETE THIS HOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGE
                            If you delete, display asdfa;lksdfjalskdf;aks;fkaj
                          -->
                        </v-card-text>
                      </v-card>
                    </div>
                    <div>
                      <v-card>
                        <v-card-title>加入のデメリット</v-card-title>
                        <v-card-text>
                          <ul>
                            <li v-for="(item,index) in demeritItems" :key="index">{{item.text}}</li>
                          </ul>
                          <p style="height: 0;user-select:none;opacity: 0">hogehogehogehogehogehogehogehogehogehogehogehogehoge</p><!--fu***************************************************k
                            DONT DELETE THIS HOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGEHOGE
                            If you delete, display asdfa;lksdfjalskdf;aks;fkaj
                          -->
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs=12>
            <v-card :color="gray">
              <v-card-title>Requirements</v-card-title>
              <v-card-subtitle>加入までの流れです。Salonへの参加は必須ではありませんが、毎年好評のコンテンツのためぜひご参加ください。その他説明会、応募、面接は加入する上で必須事項になります。</v-card-subtitle>
              <v-card-text>
                <v-timeline dense>
                  <v-timeline-item right v-for="(item,i) in timeLineItems" :key="i">
                    <v-card>
                      <v-card-title>{{i+1}}、{{item.title}}</v-card-title>
                      <v-card-text>
                        <p>日程：{{item.date}}</p>
                        <p>{{item.text}}</p>
                      </v-card-text>
                      <v-card-text>
                        <v-btn
                        v-if="item.btnName"
                        color="primary"
                        large depressed
                        class="mx-auto"
                        @click="$vuetify.goTo(item.btnLink)"
                        :disabled="item.disabled"
                        >{{item.btnName}}<!--fu****************************************k-->
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col xs="12" sm="6" md="6">
            <div class="">
              <v-card>
                <v-card-title>Contact</v-card-title>

                <v-card-text>不明な点や心配な点などがありましたら、お気軽にご連絡ください。</v-card-text>
                <v-list>
                  <v-list-item v-for="item in contactList" :key="item.title">
                    <v-list-item-icon>
                      <v-icon :href="item.link">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <a :href="item.link"><v-list-item-title>{{item.title}}</v-list-item-title></a>
                      <v-list-item-subtitle v-if="item.subtitle">{{item.subtitle}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

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

        {
          avator: "http://drive.google.com/uc?export=view&id=1BWaRN7g-IhoC9M5qRw3pdVfn89RiKvxU",
          name: "山崎紗耶",
          excerpt: "切磋琢磨できる仲間と出会える場",
          message: "みなさんは、今までの人生を振り返って、影響の大きかったものってなんだと思いますか？\n私は、“友達・仲間”だと思っています。私は高校時代、友達と切磋琢磨して勉強していたし、仲間と一生懸命になって部活動を頑張っていた。友達、仲間がいるからこそ、頑張ることができた。こう考えると、みなさんの人生には、友達や仲間が大きな影響を及ぼしてはいなかったでしょうか？\n今、何かに挑戦しようと思っている人、成し遂げたいことのある人、貴重な大学生活を無駄にしたくない人、TEDxNagoyaUで、そんなあなたに素敵な影響を及ぼしてくれる、切磋琢磨できる仲間ときっと出会えるはずです。\nTEDxNagoyaUには、日々何かに挑戦して頑張っている仲間、そして、挑戦を応援してくれる仲間がたくさんいます。もちろん、TEDxNagoyaUの活動をする上でも、挑戦はたくさんあります。私自身、TEDxNagoyaUで挑戦する仲間と出会って、もっと頑張ろうと思うことがたくさんあります。\nそんな仲間とこのTEDxNagoyaUで出会って、あなたの大学生活ををもっと充実させませんか？"
        },
      ],
      gray: "#FAFAFA",
      meritItems: [
        {text: "学生だけでゼロから企画できる！"},
        {text: "日頃のミーティングや活動を通して、メンバーみんなが多方面で活躍していることを聞いて自分もモチベーションアップできる"},
        {text: "今後生きていく上で役に立つ考え方を学んだり、スキルを身につけたりすることができる"}
      ],
      demeritItems: [
        {text: "タスクがたまってしまったり、本番前になると忙しい日々が続く"},
        {text: "他の人に入ってるサークルを説明するとき、説明が難しく大変"},
        {text: "不定期で予定が入ることも！"}
      ],
    }
  },
  created: async function () {
    this.$ga.page('/tedxnagoyau-rec-spr.html')
  }
}
</script>
