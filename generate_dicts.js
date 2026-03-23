import fs from 'fs';

// Full exact dictionaries holding the state for all 17 component blocks
const s1_7 = {
    nav: {
        exhibition: "EXHIBITION", mainHall: "MAIN HALL", venueBranding: "VENUE BRANDING",
        media: "MEDIA", vipDinner: "VIP AREA & VIP DINNER", tickets: "TICKETS",
        digitalBranding: "DIGITAL BRANDING", others: "OTHERS"
    },
    hero: {
        quote: "\"You've got to start with the customer experience and work back toward the technology - not the other way around.\"",
        quoteAuthor: "- Steve Jobs, Worldwide Developers Conference, 1997",
        tokyo: "TOKYO", date: "APR 8, 2026", location: "HAPPO-EN TOKYO"
    },
    s2: { date: "APRIL 8", event: "1 DAY EVENT", title: "HAPPO-EN, TOKYO_", japanToGlobal: "JAPAN TO GLOBAL." },
    s3: {
        title1: "WaytoAGI is a global open-source community",
        title2: "that empowers over 9 million AI members through a collaborative knowledge base, daily live learning sessions, and dynamic offline meetups across 40 cities. Backed by strategic partnerships with top AI tech giants, as well as over 200 universities, we are at the forefront of AI innovation and education. Driven by our core vision to democratize AI knowledge, we invite you to join our ecosystem and shape the future of technology together."
    },
    s4: {
        linkloud: "Linkloud is an innovative Asia-wide community that connects founders and entrepreneurs in SaaS and AI. We provide support for over hundreds of members in gaining a comprehensive understanding of overseas business, and breaking into local markets through continuous in-depth local meetups and professional services including Growth & Marketing Workshops, Business Acceleration Programs, and specific consulting projects, etc.",
        asuTitle: "About Asu Capital Partners (asu.vc)",
        asuDesc: "Asu Capital Partners is a Tokyo-based venture capital firm with the theme of \"Japan to Global\". We aim to become the capital partners of tomorrow's (明日, Asu) innovators, by supporting seed stage founders who aim \"Day 1 Global\" – to branch out their products to the global market from Day 1 of its establishment."
    },
    s5: {
        title: "Featured Speakers",
        desc: "This document is individual and non-transferable in nature and contains confidential information, know-how, expertise, statistics, empirical measurements, cost analyses, service and product details, commercial terms and conditions, and quotation pricing strategies. In addition, it may include creative proposals, innovative technical solutions and detailed implementation plans. It is strictly prohibited to share or disseminate this document with persons or entities other than the recipient specified herein. Violation of this prohibition may constitute a criminal offense and may result in legal action."
    },
    s6: {
        title: "Featured Partners",
        desc: "Participants, such as sponsors, VC partners, community partners, and media, will meet in Happo-en. This gathering of influential stakeholders is a place to promote collaboration, innovation, and growth, and provides an unrivaled opportunity for networking and interaction.",
        cat1: "FEATURED SPONSORS", cat2: "FEATURED COMMUNITY PARTNERS", cat3: "FEATURED MEDIA PARTNERS"
    },
    s7: {
        title: "The Venue",
        desc: "Happo-en is a historic Japanese garden and cultural venue in the heart of Tokyo, renowned for its elegant landscaping, seasonal beauty, and traditional architecture. With centuries-old bonsai, a teahouse, and refined hospitality, it offers an authentic setting for ceremonies, events, and quiet reflection."
    }
};

const s8_16_en = {
    s8: { m2: "33,000", history: "400 Years History" },
    s9: { f1: "1F", pics: "PICTURES", mb: "Main Building" },
    s10: { title: "VENUE BRANDING", step: "1/5", sub: "BONSAI BRANDING AND FLAGS SET", desc: "Gain premium visibility throughout the heart of the venue with our Park Path Flag and Bonsai. Your brand will be prominently displayed along the garden path, ensuring high exposure as attendees explore the event's most scenic and trafficked areas.", total: "Total ", num: "28", set: " Bonsai Set", note: "1 Set = 1 Bonsai Branding + 1 Branding Flag" },
    s11: { title: "VENUE BRANDING", step: "4/5", sub: "RECEPTION PHOTO BANNER", desc: "Your logo will be prominently displayed on the main banner in Section A, the designated photo area where attendees capture memorable moments throughout the event." },
    s12: { title: "VENUE BRANDING" },
    s13: { title: "MEDIA", sub: "PRESS CONFERENCE IN FRONT OF 30 MEDIA PARTNERS (VIP BUILDING)", desc: "You will be featured in an exclusive press conference held in the VIP building, attended by 30 media partners, providing exceptional exposure and publicity opportunities." },
    s14: { title: "TICKETS", generalPass: "GENERAL PASS", days: "1 DAYS", desc: "Main Building: Exhibition, Speakers, Performance, Terrace, Tea House, Lake, Bonsai Spot, Oval, Side Events." },
    s15: { title: "DIGITAL BRANDING", sub1: "PRESS RELEASE ARTICLE DISTRIBUTIONS (30 MEDIA) X2 TIMES", desc1: "Two press release articles will be distributed to 30 specialized Japanese media outlets in IT, technology, and finance, maximizing exposure before and after the event.", sub2: "ARTICLE ON TEAMZ SUMMIT WEBSITE X2 TIMES", desc2: "A dedicated article will be published on the WAYTOAGI SUMMIT website in the next section, highlighting your company and its participation." },
    s16: { title: "OTHERS", flyer: "FLYER IN WELCOME BAG", flyerDesc: "Your promotional flyer will be included in the official welcome bag given to all attendees, ensuring direct exposure to every participant from the moment they arrive.", pamphlet: "COMPANY INFO ON PAMPHLET", pamphletDesc: "Your company logo and profile will be featured in the official Summit pamphlet, providing attendees with essential information about your brand and offerings." },
    s17: { edition: "VIII EDITION", e26: "GLOBAL AI\nCONFERENCE", l26: "TOKYO", e25: "GLOBAL AI\nCONFERENCE", l25: "TOKYO", e24: "COMFYUI\nCOMMUNITY\nSUMMIT", l24: "TOKYO", e23: "CHINA AI\nSUMMIT", l23: "SHANGHAI" }
};

const en = { ...s1_7, ...s8_16_en };

const s1_7_zh = {
    nav: {
        exhibition: "科技展区", mainHall: "主会场", venueBranding: "场馆冠名",
        media: "媒体矩阵", vipDinner: "VIP 区域及晚宴", tickets: "票务信息",
        digitalBranding: "数字品牌", others: "其他合作"
    },
    hero: {
        quote: "\"必须从客户体验出发，再反过来去寻找技术——而不是本末倒置。\"",
        quoteAuthor: "- 史蒂夫·乔布斯，全球开发者大会，1997",
        tokyo: "东京", date: "2026年 4月8日", location: "八芳园 东京"
    },
    s2: { date: "4月8日", event: "单日峰会", title: "日本东京八芳园_", japanToGlobal: "立足日本，链接全球。" },
    s3: {
        title1: "WaytoAGI 是一个全球性的开源社区",
        title2: "通过协作知识库、每日在线学习和覆盖40个城市的动态线下见面会，赋能超过900万名人工智能核心成员。依托与全球顶尖 AI 科技巨头及 200 多所高校的战略合作，我们始终站在人工智能创新与教育的最前沿。在“让 AI 知识民主化”的核心愿景驱动下，我们诚邀您加入我们的生态系统，共同塑造科技的未来。"
    },
    s4: {
        linkloud: "Linkloud 是一个创新的泛亚洲社区，致力于连接 SaaS 和 AI 领域的创始人与企业家。我们为数百名成员提供全方位的海外商业扩展支持，通过持续的深度本土见面会以及包括“增长与重塑”、“商业加速器”在内的专业服务，帮助企业打入当地市场。",
        asuTitle: "关于 Asu Capital Partners (asu.vc)",
        asuDesc: "Asu Capital Partners 是一家位于东京的风险投资机构，以“Japan to Global”为主题。我们致力于成为未来（明日，Asu）创新者的资本伙伴，支持那些秉持“Day 1 Global”愿景的种子期创始人——从成立的第一天起，就将产品推向全球市场。"
    },
    s5: {
        title: "主讲嘉宾",
        desc: "本文件具有个人且不可转让之性质，包含机密信息、专有技术、专业知识、统计数据、经验测量、成本分析、服务及产品细节、商业条款与条件以及报价策略。此外，可能包含创意提案、创新技术解决方案及详细实施计划。严禁向本文指定接收方以外的个人或实体分享或传播本文件。违反此禁止规定可能构成刑事犯罪并导致法律诉讼。"
    },
    s6: {
        title: "精选合作伙伴",
        desc: "赞助商、风险投资伙伴、社区伙伴以及媒体等各界顶级参与者即将齐聚八芳园。这场汇聚重量级利益相关者的盛会，是促进合作、创新与生态增长的绝佳连接极点，提供了无与伦比的破冰及交流碰撞机会。",
        cat1: "精选赞助商", cat2: "精选社区伙伴", cat3: "精选媒体伙伴"
    },
    s7: {
        title: "峰会场馆",
        desc: "坐落于东京核心地带的八芳园，是一座宽广的传统日式庄园，完美融合了历史的优雅与现代的功能。这里以拥有 400 年历史的极品盆栽和宁静的锦鲤池闻名，为 AGI Horizon 峰会提供了庄严宏伟的背景。"
    }
};

const s8_16_zh = {
    s8: { m2: "33,000", history: "400 年历史沉淀" },
    s9: { f1: "1F", pics: "影像记录", mb: "主会场核心圈" },
    s10: { title: "场馆冠名", step: "1/5", sub: "盆栽专属冠名及宣发旗帜", desc: "在场地最核心的心脏地带（园林主干道）获得顶级视野曝光，确保所有参会者在浏览和流连忘返时，您的品牌将成为最瞩目的核心视觉锚点。", total: "全套 ", num: "28", set: " 个极品盆栽组", note: "1 套 = 1 个盆栽专属冠名牌 + 1 面专属宣发旗帜" },
    s11: { title: "场馆冠名", step: "4/5", sub: "接待区合影背景墙横幅", desc: "您的 Logo 将被极其醒目地展示在 A 区的主背景横幅上，这是一切与会者在活动全程捕捉珍贵时刻、合影留念的核心指定拍照区。" },
    s12: { title: "场馆冠名" },
    s13: { title: "媒体矩阵", sub: "面对 30 家顶尖媒体伙伴的专属新闻发布会（VIP 会馆区）", desc: "您将被邀请参与在 VIP 会馆举行的独家新闻发布会，将有多达 30 家垂直和顶级媒体机构出席，提供极其罕见的强力曝光和品牌公关绝佳机会。" },
    s14: { title: "票务信息", generalPass: "通用门票", days: "单日通票", desc: "主会场访问权：核心展览区、顶尖演讲嘉宾专属舞台、科技表演演示、空中露台、传统茶室、静谧湖泊、盆栽展示区、椭圆广场及各类附属边会（Side Events）。" },
    s15: { title: "数字品牌", sub1: "专业新闻稿发布矩阵 (30家媒体) x2 次", desc1: "两篇重磅新闻公关稿将精准分发给 30 家深耕 IT、尖端科技以及互联网金融的日本权威垂直媒体，最大化您在峰会前中后期的品牌话题度与曝光率。", sub2: "TEAMZ 峰会官方网站专文报导 x2 次", desc2: "即将在下一版块的 WAYTOAGI SUMMIT 官方网站主页上发布专属品牌长文，重点宣传和报道您的公司理念及本次峰会的深度参与度。" },
    s16: { title: "其他合作", flyer: "迎宾资料袋企业海报/传单派发", flyerDesc: "您的定制宣传海报将直接随附在发放给所有参会贵宾的官方认证迎宾资料袋中，从每一位参会者抵达进场的那一刻起，就确保 100% 的触达率与直接曝光。", pamphlet: "峰会品牌手册企业内页入驻", pamphletDesc: "您的企业标志及其官方深度业务介绍将作为极其重要的参考资源被精心排版在官方峰会全彩图册内，为所有参会者提供精准的品牌及服务定位导向。" },
    s17: { edition: "第八届", e26: "全球人工智能\n峰会", l26: "东京", e25: "全球人工智能\n峰会", l25: "东京", e24: "COMFYUI\n社区峰会", l24: "东京", e23: "中国AI\n产业峰会", l23: "上海" }
};

const zh = { ...s1_7_zh, ...s8_16_zh };

const s1_7_ja = {
    nav: {
        exhibition: "展示場", mainHall: "メインホール", venueBranding: "会場ブランディング",
        media: "メディア", vipDinner: "VIP エリア & VIP ディナー", tickets: "チケット情報",
        digitalBranding: "デジタルブランディング", others: "その他パートナーシップ"
    },
    hero: {
        quote: "「テクノロジーから始めて顧客体験を考えるのではなく、顧客体験からテクノロジーへと向かうべきだ。」",
        quoteAuthor: "- スティーブ・ジョブズ，WWDC 1997",
        tokyo: "東京", date: "2026年 4月8日", location: "八芳園 東京"
    },
    s2: { date: "4月8日", event: "1 DAYS イベント", title: "八芳園、東京_", japanToGlobal: "日本から世界へ。" },
    s3: {
        title1: "WaytoAGIは、グローバルなオープンソースコミュニティです",
        title2: "協調的なナレッジベース、日々のライブ学習セッション、そして40都市でのダイナミックなオフラインミートアップを通じて、900万人を超えるAIメンバーを支援しています。トップのAIテクノロジー企業や200以上の大学との戦略的パートナーシップに支えられ、私たちはAIの革新と教育の最前線に立っています。"
    },
    s4: {
        linkloud: "Linkloudは、SaaSとAIの分野で創業者や起業家を結びつける、アジア全域の革新的なコミュニティです。数百人のメンバーが海外ビジネスを深く理解し、現地市場に進出するための包括的な支援を提供しています。",
        asuTitle: "Asu Capital Partners (asu.vc) について",
        asuDesc: "Asu Capital Partnersは、「Japan to Global」をテーマとする東京拠点のベンチャーキャピタルです。設立初日からグローバル市場へプロダクトを展開することを目指す「Day 1 Global」のシード期創業者を支援します。"
    },
    s5: {
        title: "注目のスピーカー",
        desc: "本文書は個人的かつ譲渡不可能な性質を持ち、機密情報、ノウハウ、専門知識、統計、経験的測定、コスト分析等を含みます。本文書を共有または第三者に配布することは厳しく禁じられています。"
    },
    s6: {
        title: "注目のパートナー",
        desc: "スポンサー、VCパートナー、コミュニティパートナー、メディアなど、多様な企業が八芳園に集結します。最先端のコラボレーション、イノベーション、そしてビジネスの成長を促進するためのネットワーキングの場です。",
        cat1: "注目のスポンサー", cat2: "コミュニティパートナー", cat3: "メディアパートナー"
    },
    s7: {
        title: "開催会場",
        desc: "東京の中心に位置する八芳園は、歴史的な優雅さと現代的な機能性を美しく融合させた広大な伝統的日本庭園です。"
    }
};

const s8_16_ja = {
    s8: { m2: "33,000", history: "400年の歴史" },
    s9: { f1: "1F", pics: "映像記録", mb: "メインビルディング" },
    s10: { title: "会場ブランディング", step: "1/5", sub: "盆栽ブランディングおよびフラッグセット", desc: "会場の中心部、パークパスフラッグや盆栽の周辺でプレミアムな認知度を獲得しましょう。出席者がイベントで最も美しく人が集まるエリアを散策する際、あなたのブランドが目立つように配置されます。", total: "合計 ", num: "28", set: " 盆栽セット", note: "1セット = 1つの盆栽ブランディング + 1つのブランディングフラッグ" },
    s11: { title: "会場ブランディング", step: "4/5", sub: "レセプション写真バナー", desc: "参加者がイベント中に記憶に残る瞬間を撮影するセクションAのメインバナーに、貴社のロゴが目立つように表示されます。" },
    s12: { title: "会場ブランディング" },
    s13: { title: "メディア展開", sub: "30のメディアパートナー前でのプレスカンファレンス（VIPビル）", desc: "VIPビルで行われる、30のメディアパートナーが出席する限定プレスカンファレンスに参加し、優れた露出と広報の機会を提供します。" },
    s14: { title: "チケット情報", generalPass: "一般パス", days: "1日パス", desc: "メインビルディング：展示場、スピーカー、パフォーマンス、テラス、茶室、湖、盆栽スポット、オーバル、サイドイベント。" },
    s15: { title: "デジタルブランディング", sub1: "プレスリリース記事配信（30メディア）2回", desc1: "IT、テクノロジー、金融を専門とする30の日本メディアに2回のプレスリリース記事を配信し、イベント前後の露出を最大化します。", sub2: "TEAMZサミット関連ウェブサイトへの記事 2回", desc2: "当サミットのウェブサイトに特集記事が掲載され、貴社とその参加に関する詳細が紹介されます。" },
    s16: { title: "その他パートナーシップ", flyer: "ウェルカムバッグへのチラシ同封", flyerDesc: "貴社のプロモーションチラシは参加者全員に配布される公式ウェルカムバッグに同封され、到着した瞬間から参加者への直接の露出を確実なものにします。", pamphlet: "公式パンフレットへの企業情報掲載", pamphletDesc: "貴社のロゴとプロフィールは公式サミットパンフレットに掲載され、貴社のブランドと提供サービスに関する重要な情報を参加者に提供します。" },
    s17: { edition: "第8回", e26: "グローバル AI\nカンファレンス", l26: "東京", e25: "グローバル AI\nカンファレンス", l25: "東京", e24: "COMFYUI\nコミュニティ\nサミット", l24: "東京", e23: "中国 AI\nサミット", l23: "上海" }
};

const ja = { ...s1_7_ja, ...s8_16_ja };

fs.writeFileSync('src/i18n/dictionaries/en.ts', 'export default ' + JSON.stringify(en, null, 2) + ';');
fs.writeFileSync('src/i18n/dictionaries/zh.ts', 'export default ' + JSON.stringify(zh, null, 2) + ';');
fs.writeFileSync('src/i18n/dictionaries/ja.ts', 'export default ' + JSON.stringify(ja, null, 2) + ';');

console.log('Dictionaries generated perfectly with S17!');
