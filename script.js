// ============ 三语字典 ============
const I18N = {
  en: {
    "meta.title": "Guangzhou · The Millennial Port City",
    "meta.desc": "A city where Lingnan tradition meets modern energy — Guangzhou, the story of Cloud Mountain and Pearl River.",
    "brand.zh": "Guangzhou",
    "brand.en": "CANTON",

    "nav.impression": "Impression",
    "nav.heritage": "Heritage",
    "nav.modern": "Modern",
    "nav.flavor": "Flavor",
    "nav.gallery": "Gallery",
    "nav.timeline": "Timeline",
    "nav.contact": "Contact",

    "slide.cta": "Discover",
    "slide.tower.label": "LANDMARK",
    "slide.tower.title": "Canton Tower",
    "slide.tower.desc": "A 600-meter hyperboloid steel silhouette — the most graceful curve on the city's night skyline. When dusk falls, both banks of the Pearl River light up for it.",
    "slide.chen.label": "HERITAGE",
    "slide.chen.title": "Chen Clan Ancestral Hall",
    "slide.chen.desc": "Wood, brick, plaster, ceramic, copper-iron — seven crafts gathered under one roof, the most complete living dictionary of Lingnan craftsmanship.",
    "slide.river.label": "SCROLL",
    "slide.river.title": "Pearl River Nights",
    "slide.river.desc": "A river runs through, and a thousand lights answer back. From White Goose Pool to the twin towers, the Pearl River writes Guangzhou's longest poem.",
    "slide.yumcha.label": "FLAVOR",
    "slide.yumcha.title": "Yum Cha · Two Bites and a Pot",
    "slide.yumcha.desc": "Shrimp dumplings, siu mai, chicken feet, char siu bao — the Cantonese day begins slowly, in the warm steam of morning tea.",
    "slide.yongqing.label": "ALLEY",
    "slide.yongqing.title": "Yongqingfang · Old Streets, New Life",
    "slide.yongqing.desc": "Xiguan's old lanes never grew old. Beneath the arcade buildings, yesterday and tomorrow walk side by side — Guangzhou's gentlest answer to tradition.",

    "hero.eyebrow": "MILLENNIAL PORT · BIRTHPLACE OF THE MARITIME SILK ROAD",
    "hero.title": "<span class='char'>C</span><span class='char'>L</span><span class='char'>O</span><span class='char'>U</span><span class='char'>D</span><span class='hero-divider'></span><span class='char accent'>R</span><span class='char accent'>I</span><span class='char accent'>V</span><span class='char accent'>E</span><span class='char accent'>R</span>",
    "hero.sub": "From the tea steam of arcade alleys to the neon banks of the Pearl River — one city, two faces, both Lingnan.",
    "hero.cta1": "Enter the City",
    "hero.cta2": "Read the Story",
    "hero.scroll": "scroll",

    "impression.tag": "01 / IMPRESSION",
    "impression.title": "A City of Two Faces · <em>Past and Present in One Frame</em>",
    "impression.lead": "2,236 years of memory, beside a 600-meter modern landmark — coexisting in a single skyline.",
    "impression.stat1": "Founded · 214 BCE",
    "impression.stat2": "Area · sq. km × 10",
    "impression.stat3": "Canton Tower · meters",
    "impression.stat4": "Population · ten thousand × 0.1",

    "heritage.tag": "02 / HERITAGE",
    "heritage.title": "Arcades and Alleyways · <em>A Century of Living Memory</em>",
    "heritage.lead": "Red brick, green tile, Manchurian windows — every brick a verse of Lingnan.",
    "heritage.chen.t": "Chen Clan Ancestral Hall",
    "heritage.chen.d": "The crown jewel of Lingnan architecture — wood, brick, plaster and ceramic carving in one place.",
    "heritage.shamian.t": "Shamian Island",
    "heritage.shamian.d": "European architecture and century-old banyans coexist on this Pearl River island retreat.",
    "heritage.yongqing.t": "Yongqingfang",
    "heritage.yongqing.d": "A model of micro-renewal in Xiguan's old lanes — beneath the arcades, the new and the nostalgic walk together.",
    "heritage.nanyue.t": "Tomb of the Nanyue King",
    "heritage.nanyue.d": "A Western Han royal tomb, two millennia old — the ancient kingdom of Lingnan beneath a jade burial suit.",
    "heritage.yueju.t": "Cantonese Opera",
    "heritage.yueju.d": "Red-boat troupes, fluttering sleeves — one note of \"asking the heart\" carries the soul of the south.",
    "heritage.huashi.t": "Flower Markets",
    "heritage.huashi.d": "\"Walk the flower street on New Year's Eve\" — a city greets the new year with a bouquet, every year.",

    "modern.tag": "03 / MODERN PULSE",
    "modern.title": "Neon on the Pearl · <em>Heart of the Greater Bay</em>",
    "modern.lead": "Finance, innovation, conventions, culture — in the Greater Bay Area, Guangzhou is the beating muscle.",
    "modern.tower.t": "Canton Tower",
    "modern.tower.d": "A 600-meter hyperboloid steel structure — the most graceful silhouette in the night sky.",
    "modern.cbd.t": "Zhujiang New Town CBD",
    "modern.cbd.d": "East Tower and West Tower stand as twin pillars of South China finance.",
    "modern.fair.t": "Canton Fair",
    "modern.fair.d": "Since 1957, the first window through which the world saw Made-in-China.",
    "modern.nansha.t": "Nansha Innovation",
    "modern.nansha.d": "The geographic heart of the Greater Bay Area — Guangzhou's other face for tomorrow.",
    "modern.metro.t": "Metro and High-Speed Rail",
    "modern.metro.d": "16 metro lines and 3 high-speed rail stations connect every corner of the bay within an hour.",

    "flavor.tag": "04 / FLAVOR",
    "flavor.title": "Food · <em>in Guangzhou</em>",
    "flavor.lead": "\"Clear yet not bland, fresh yet not coarse, tender yet not raw, rich yet not heavy.\"",
    "flavor.yumcha.t": "Yum Cha",
    "flavor.yumcha.d": "Shrimp dumplings, siu mai, chicken feet, char siu bao — two bites and a pot, slowly tasting the Cantonese morning.",
    "flavor.soup.t": "Slow-Cooked Soup",
    "flavor.soup.d": "Three hours of gentle simmering — the Cantonese definition of home.",
    "flavor.chicken.t": "White Cut Chicken",
    "flavor.chicken.d": "Simplicity at its finest — crisp skin, tender flesh, dipped in ginger-scallion oil. A dish about the truth of taste.",
    "flavor.wonton.t": "Wonton Noodles",
    "flavor.wonton.d": "Bamboo-pressed noodles, fresh shrimp wontons, dried-fish broth — the taste of Xiguan.",
    "flavor.milk.t": "Double-Skin Milk",
    "flavor.milk.d": "From Shunde to Guangzhou, two delicate layers in a bowl — the sweetness of old Canton.",
    "flavor.changfen.t": "Rice Noodle Rolls",
    "flavor.changfen.d": "Cloth-rolled or drawer-steamed — every Cantonese keeps a \"best one in town\" in their heart.",

    "gallery.tag": "05 / GALLERY",
    "gallery.title": "Frame by Frame · <em>Guangzhou in Light</em>",
    "gallery.lead": "Arcades, the Pearl River, neon, market alleys — this city, woven into every frame.",
    "gallery.g1": "Pearl River Nights",
    "gallery.g2": "Arcade Streets",
    "gallery.g3": "Canton Tower",
    "gallery.g4": "Baiyun Mountain",
    "gallery.g5": "Kapok in Bloom",
    "gallery.g6": "Shamian Banyans",
    "gallery.g7": "Zhujiang New Town",
    "gallery.g8": "Xiguan Lanes",

    "timeline.tag": "06 / TIMELINE",
    "timeline.title": "Two Millennia · <em>One City</em>",
    "tl.1.y": "214 BCE", "tl.1.t": "Ren Xiao Founds Panyu", "tl.1.d": "The Qin pacifies Lingnan — and the story of Guangzhou begins here.",
    "tl.2.y": "203 BCE", "tl.2.t": "Nanyue Kingdom Established", "tl.2.d": "Zhao Tuo declares himself King of Nanyue — the dawn of an independent southern realm.",
    "tl.3.y": "Tang–Song", "tl.3.t": "Maritime Silk Road", "tl.3.d": "Foreign quarters bustled — Panyu Port becomes the East's largest harbor.",
    "tl.4.y": "Ming–Qing", "tl.4.t": "The Thirteen Hongs", "tl.4.d": "For over a century of \"single-port trade,\" Guangzhou was the world's window into China.",
    "tl.5.y": "1957", "tl.5.t": "First Canton Fair", "tl.5.d": "The first gateway of New China's foreign trade — held every spring and autumn ever since.",
    "tl.6.y": "2010", "tl.6.t": "Asian Games Guangzhou", "tl.6.d": "Canton Tower lights up — Guangzhou steps onto the global stage.",
    "tl.7.y": "Today", "tl.7.t": "Heart of the Greater Bay", "tl.7.d": "A millennial port city, writing a new chapter for the bay.",

    "footer.brand": "CANTON",
    "footer.tagline": "Cloud mountain, Pearl River — a city in bloom.",
    "footer.col1": "About the City",
    "footer.col2": "Taste the City",
    "footer.col3": "Coordinates",
    "footer.copy": "© 2026 · A love letter to Guangzhou",
    "footer.made": "Made with care in Canton",

    "contact.tag": "07 / CONTACT",
    "contact.title": "Get in Touch · <em>Plan your Canton journey</em>",
    "contact.lead": "Questions, custom tours, or just curious — leave a message and we'll get back within one business day.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.wechat": "WeChat",
    "contact.address": "Address",
    "contact.address.v": "Zhujiang New Town, Tianhe District, Guangzhou",
    "contact.hours": "Hours",
    "contact.hours.v": "Mon–Sun · 09:00 – 21:00 (GMT+8)",
    "contact.top": "Top",
    "contact.f.name": "Name",
    "contact.f.name.ph": "Your name",
    "contact.f.phone": "Phone",
    "contact.f.phone.ph": "+86 ...",
    "contact.f.email": "Email",
    "contact.f.email.ph": "you@example.com",
    "contact.f.topic": "Topic",
    "contact.f.topic.travel": "Travel & Tours",
    "contact.f.topic.business": "Business & Trade",
    "contact.f.topic.culture": "Culture & Heritage",
    "contact.f.topic.other": "Other",
    "contact.f.msg": "Message",
    "contact.f.msg.ph": "Tell us a bit about what you'd like to plan…",
    "contact.f.submit": "Send Message",
    "contact.f.hint": "We usually reply within one business day.",
    "contact.f.ok": "Thanks! We've received your message and will reply soon.",
    "contact.f.fail": "Sorry, the message couldn't be sent. Please try again or email us directly.",
    "contact.wechat.title": "Scan to add WeChat",
    "contact.wechat.desc": "Or search the ID below in WeChat",
    "contact.close": "Close"
  },

  zh: {
    "meta.title": "广州 · 千年商都，云山珠水",
    "meta.desc": "一座兼具岭南传统与现代活力的城市 —— 广州，云山珠水间的故事。",
    "brand.zh": "广州",
    "brand.en": "CANTON",

    "nav.impression": "城市印象",
    "nav.heritage": "岭南底蕴",
    "nav.modern": "现代脉动",
    "nav.flavor": "食在广州",
    "nav.gallery": "光影画廊",
    "nav.timeline": "时间长河",
    "nav.contact": "联系咨询",

    "slide.cta": "了解更多",
    "slide.tower.label": "地 标",
    "slide.tower.title": "小蛮腰 · 广州塔",
    "slide.tower.desc": "600 米的双曲面钢结构，城市夜空里最妩媚的剪影。每当夜幕降临，珠江两岸为它点亮整座城。",
    "slide.chen.label": "底 蕴",
    "slide.chen.title": "陈家祠 · 岭南瑰宝",
    "slide.chen.desc": "木雕、砖雕、灰塑、陶塑、铜铁铸 —— 七绝齐聚一堂，是岭南匠艺最完整的活字典。",
    "slide.river.label": "画 卷",
    "slide.river.title": "珠江夜色",
    "slide.river.desc": "一江碧水穿城过，两岸灯火映千秋。从白鹅潭到东塔西塔，珠江写下广州最长的诗。",
    "slide.yumcha.label": "滋 味",
    "slide.yumcha.title": "食在广州 · 一盅两件",
    "slide.yumcha.desc": "虾饺、烧麦、凤爪、叉烧包 —— 老广的一天，从早茶的氤氲热气里慢慢苏醒。",
    "slide.yongqing.label": "街 巷",
    "slide.yongqing.title": "永庆坊 · 老街新生",
    "slide.yongqing.desc": "西关老巷不曾老去，骑楼之下，旧时光与新潮流并行 —— 这是广州对待传统最温柔的方式。",

    "hero.eyebrow": "千 年 商 都 · 海 丝 起 点",
    "hero.title": "<span class='char'>云</span><span class='char'>山</span><span class='char'>珠</span><span class='char'>水</span><span class='hero-divider'></span><span class='char accent'>花</span><span class='char accent'>城</span><span class='char accent'>广</span><span class='char accent'>州</span>",
    "hero.sub": "从骑楼老巷的茶香，到珠江两岸的霓虹 —— 一城两面，皆是岭南。",
    "hero.cta1": "走进广州",
    "hero.cta2": "看看故事",
    "hero.scroll": "下滑",

    "impression.tag": "01 / 城市印象",
    "impression.title": "一城两面 · <em>古今同框</em>",
    "impression.lead": "2200 多年的城市记忆，与 600 米的现代地标，在同一帧画面里共生。",
    "impression.stat1": "建城年份 公元前214年",
    "impression.stat2": "辖区面积 平方公里 ×10",
    "impression.stat3": "广州塔小蛮腰 米",
    "impression.stat4": "常住人口 万人 ×0.1",

    "heritage.tag": "02 / 岭南底蕴",
    "heritage.title": "骑楼深巷 · <em>百年烟火</em>",
    "heritage.lead": "红砖、青瓦、满洲窗，一砖一瓦写就岭南的诗。",
    "heritage.chen.t": "陈家祠",
    "heritage.chen.d": "岭南建筑艺术的明珠，木雕、砖雕、灰塑、陶塑，一处藏尽岭南匠艺。",
    "heritage.shamian.t": "沙面",
    "heritage.shamian.d": "欧陆建筑群与百年榕树共生，珠江白鹅潭边的世外岛屿。",
    "heritage.yongqing.t": "永庆坊",
    "heritage.yongqing.d": "西关老巷的微改造典范，骑楼之下，新潮与旧梦并行。",
    "heritage.nanyue.t": "南越王墓",
    "heritage.nanyue.d": "2000 多年前的西汉王陵，金缕玉衣下的岭南古王国。",
    "heritage.yueju.t": "粤剧",
    "heritage.yueju.d": "红船子弟，水袖翩跹，一声「问情」唱尽南国风韵。",
    "heritage.huashi.t": "花市",
    "heritage.huashi.d": "「年三十行花街」——一座城用一束花迎接新年的传统。",

    "modern.tag": "03 / 现代脉动",
    "modern.title": "霓虹珠江 · <em>湾区心脏</em>",
    "modern.lead": "金融、科创、会展、文旅 —— 在大湾区，广州始终是那块律动的心肌。",
    "modern.tower.t": "小蛮腰 · 广州塔",
    "modern.tower.d": "600 米的双曲面钢结构，城市夜空中最妩媚的剪影。",
    "modern.cbd.t": "珠江新城 CBD",
    "modern.cbd.d": "东塔西塔双子并峙，华南金融的心脏地带。",
    "modern.fair.t": "广交会",
    "modern.fair.d": "始于 1957，世界看见中国制造的第一扇窗口。",
    "modern.nansha.t": "南沙科创",
    "modern.nansha.d": "大湾区几何中心，明日广州的另一张面孔。",
    "modern.metro.t": "地铁与高铁",
    "modern.metro.d": "16 条地铁线、3 座高铁站，一小时通达湾区每个角落。",

    "flavor.tag": "04 / 食在广州",
    "flavor.title": "食 · <em>在广州</em>",
    "flavor.lead": "「清而不淡，鲜而不俗，嫩而不生，油而不腻。」",
    "flavor.yumcha.t": "早茶",
    "flavor.yumcha.d": "虾饺烧麦凤爪叉烧包，一盅两件慢品老广晨光。",
    "flavor.soup.t": "老火靓汤",
    "flavor.soup.d": "三小时文火慢煨，是广府人对家的定义。",
    "flavor.chicken.t": "白切鸡",
    "flavor.chicken.d": "原味至简，皮爽肉滑，蘸姜葱蓉，吃的是本味。",
    "flavor.wonton.t": "云吞面",
    "flavor.wonton.d": "竹升面、鲜虾云吞、大地鱼汤底，西关味道。",
    "flavor.milk.t": "双皮奶",
    "flavor.milk.d": "顺德到广州，碗中两层皮，藏住老广的甜。",
    "flavor.changfen.t": "肠粉",
    "flavor.changfen.d": "布拉肠 vs 抽屉肠，每个老广心中都有一家「那家最好吃」。",

    "gallery.tag": "05 / 光影广州",
    "gallery.title": "一帧一景 · <em>光影广州</em>",
    "gallery.lead": "骑楼、珠江、霓虹、市井 —— 把这座城揉进每一帧画面。",
    "gallery.g1": "珠江夜色",
    "gallery.g2": "骑楼烟火",
    "gallery.g3": "小蛮腰",
    "gallery.g4": "白云山远眺",
    "gallery.g5": "木棉如火",
    "gallery.g6": "沙面榕影",
    "gallery.g7": "珠江新城",
    "gallery.g8": "西关老巷",

    "timeline.tag": "06 / 时间长河",
    "timeline.title": "两千年 · <em>一城</em>",
    "tl.1.y": "前 214", "tl.1.t": "任嚣建番禺城", "tl.1.d": "秦定岭南，广州城的故事从这里开始。",
    "tl.2.y": "前 203", "tl.2.t": "南越国立国", "tl.2.d": "赵佗自立南越王，开岭南独立王国之始。",
    "tl.3.y": "唐 宋", "tl.3.t": "海上丝绸之路", "tl.3.d": "蕃坊云集，番禺港成为东方第一大港。",
    "tl.4.y": "明 清", "tl.4.t": "十三行通商", "tl.4.d": "「一口通商」百余年，广州曾是世界看中国的窗口。",
    "tl.5.y": "1957", "tl.5.t": "首届广交会", "tl.5.d": "新中国对外贸易的第一扇大门，从此春秋两季永不停。",
    "tl.6.y": "2010", "tl.6.t": "亚运广州", "tl.6.d": "小蛮腰点亮，广州走向世界级都市。",
    "tl.7.y": "今 日", "tl.7.t": "大湾区核心", "tl.7.d": "千年商都，正在书写新的湾区篇章。",

    "footer.brand": "廣州",
    "footer.tagline": "云山珠水，花城无处不飞花。",
    "footer.col1": "关于这座城",
    "footer.col2": "品味这座城",
    "footer.col3": "地理坐标",
    "footer.copy": "© 2026 · 一份给广州的情书",
    "footer.made": "用心制作于广州",

    "contact.tag": "07 / 联系咨询",
    "contact.title": "留下联系方式 · <em>规划你的广州之旅</em>",
    "contact.lead": "无论是行程定制、商务对接，还是单纯好奇 —— 留个言，我们会在一个工作日内回复。",
    "contact.phone": "电话",
    "contact.email": "邮箱",
    "contact.wechat": "微信",
    "contact.address": "地址",
    "contact.address.v": "广州市天河区珠江新城",
    "contact.hours": "工作时间",
    "contact.hours.v": "周一至周日 · 09:00 – 21:00",
    "contact.top": "顶部",
    "contact.f.name": "姓名",
    "contact.f.name.ph": "您的称呼",
    "contact.f.phone": "电话",
    "contact.f.phone.ph": "请输入手机号",
    "contact.f.email": "邮箱",
    "contact.f.email.ph": "you@example.com",
    "contact.f.topic": "咨询类型",
    "contact.f.topic.travel": "旅行 / 行程",
    "contact.f.topic.business": "商务 / 贸易",
    "contact.f.topic.culture": "文化 / 非遗",
    "contact.f.topic.other": "其他",
    "contact.f.msg": "留言",
    "contact.f.msg.ph": "告诉我们您想了解的内容…",
    "contact.f.submit": "发送留言",
    "contact.f.hint": "我们通常会在一个工作日内回复。",
    "contact.f.ok": "已收到您的留言，我们会尽快回复！",
    "contact.f.fail": "抱歉，留言发送失败，请稍后再试或直接发邮件给我们。",
    "contact.wechat.title": "扫码添加微信",
    "contact.wechat.desc": "或在微信中搜索下方 ID",
    "contact.close": "关闭"
  },

  ru: {
    "meta.title": "Гуанчжоу · Тысячелетний торговый порт",
    "meta.desc": "Город, где традиции Линнань встречаются с современной энергией — Гуанчжоу, история Облачной горы и Жемчужной реки.",
    "brand.zh": "Гуанчжоу",
    "brand.en": "CANTON",

    "nav.impression": "Впечатление",
    "nav.heritage": "Наследие",
    "nav.modern": "Современность",
    "nav.flavor": "Кухня",
    "nav.gallery": "Галерея",
    "nav.timeline": "История",
    "nav.contact": "Контакты",

    "slide.cta": "Подробнее",
    "slide.tower.label": "СИМВОЛ",
    "slide.tower.title": "Кантон-башня",
    "slide.tower.desc": "Стальной гиперболоид высотой 600 метров — самый изящный силуэт в ночном небе города. С приходом сумерек оба берега Жемчужной реки зажигаются ради него.",
    "slide.chen.label": "НАСЛЕДИЕ",
    "slide.chen.title": "Храм рода Чэнь",
    "slide.chen.desc": "Дерево, кирпич, штукатурка, керамика, медь и железо — семь ремёсел под одной крышей, живой словарь искусства Линнань.",
    "slide.river.label": "ПЕЙЗАЖ",
    "slide.river.title": "Ночь над Жемчужной рекой",
    "slide.river.desc": "Река течёт сквозь город, тысяча огней отвечают ей. От Беломоруса до башен-близнецов — Жемчужная река пишет самую длинную поэму Гуанчжоу.",
    "slide.yumcha.label": "ВКУС",
    "slide.yumcha.title": "Ям Ча · Утренний чай",
    "slide.yumcha.desc": "Креветочные дим-самы, шумай, куриные лапки, чашиу-бао — день кантонца начинается медленно, в тёплом пару утреннего чая.",
    "slide.yongqing.label": "УЛИЦА",
    "slide.yongqing.title": "Юнцинфан · Старые улицы, новая жизнь",
    "slide.yongqing.desc": "Старые переулки Сигуаня не стареют. Под аркадами вчера и завтра идут рядом — самый деликатный ответ Гуанчжоу традиции.",

    "hero.eyebrow": "ТЫСЯЧЕЛЕТНИЙ ПОРТ · НАЧАЛО МОРСКОГО ШЁЛКОВОГО ПУТИ",
    "hero.title": "<span class='hero-word'>Облачная&nbsp;гора</span><span class='hero-divider'></span><span class='hero-word accent'>Жемчужная&nbsp;река</span>",
    "hero.sub": "От ароматов чая в старых переулках до неона на берегах Жемчужной реки — один город, два лица, оба — Линнань.",
    "hero.cta1": "Войти в город",
    "hero.cta2": "Читать историю",
    "hero.scroll": "вниз",

    "impression.tag": "01 / ВПЕЧАТЛЕНИЕ",
    "impression.title": "Город двух лиц · <em>прошлое и будущее в одном кадре</em>",
    "impression.lead": "2236 лет памяти и 600-метровый символ современности сосуществуют в одной панораме.",
    "impression.stat1": "Основан · 214 г. до н.э.",
    "impression.stat2": "Площадь · кв. км × 10",
    "impression.stat3": "Кантон-башня · метров",
    "impression.stat4": "Население · 10 тыс. × 0.1",

    "heritage.tag": "02 / НАСЛЕДИЕ",
    "heritage.title": "Аркады и переулки · <em>столетие живой памяти</em>",
    "heritage.lead": "Красный кирпич, зелёная черепица, маньчжурские окна — каждый кирпич — стих Линнань.",
    "heritage.chen.t": "Храм рода Чэнь",
    "heritage.chen.d": "Жемчужина архитектуры Линнань — резьба по дереву, кирпичу, штукатурке и керамике в одном месте.",
    "heritage.shamian.t": "Остров Шамянь",
    "heritage.shamian.d": "Европейская архитектура и столетние баньяны соседствуют на этом речном острове.",
    "heritage.yongqing.t": "Юнцинфан",
    "heritage.yongqing.d": "Образец микрообновления старых переулков Сигуаня — под аркадами новое и ностальгическое идут вместе.",
    "heritage.nanyue.t": "Гробница царя Наньюэ",
    "heritage.nanyue.d": "Царская гробница эпохи Западная Хань, ей две тысячи лет — древнее царство Линнань под нефритовым саваном.",
    "heritage.yueju.t": "Кантонская опера",
    "heritage.yueju.d": "Труппы «красных лодок», взмахи рукавов — одна нота несёт душу юга.",
    "heritage.huashi.t": "Цветочные рынки",
    "heritage.huashi.d": "«Пройти по цветочной улице в канун Нового года» — город встречает год букетом, каждый год.",

    "modern.tag": "03 / СОВРЕМЕННЫЙ ПУЛЬС",
    "modern.title": "Неон над Жемчужной · <em>сердце Большого залива</em>",
    "modern.lead": "Финансы, инновации, выставки, культура — в Большом заливе Гуанчжоу всегда был бьющейся мышцей.",
    "modern.tower.t": "Кантон-башня",
    "modern.tower.d": "Стальной гиперболоид высотой 600 метров — изящнейший силуэт в ночном небе.",
    "modern.cbd.t": "Чжуцзян-Синчэн CBD",
    "modern.cbd.d": "Восточная и Западная башни — две опоры финансов Южного Китая.",
    "modern.fair.t": "Кантонская ярмарка",
    "modern.fair.d": "С 1957 года — первое окно, через которое мир увидел «Сделано в Китае».",
    "modern.nansha.t": "Иннополис Наньша",
    "modern.nansha.d": "Географическое сердце Большого залива — другое лицо Гуанчжоу для будущего.",
    "modern.metro.t": "Метро и скоростные поезда",
    "modern.metro.d": "16 линий метро и 3 вокзала ВСМ соединяют каждый угол залива за час.",

    "flavor.tag": "04 / КУХНЯ",
    "flavor.title": "Кухня · <em>Гуанчжоу</em>",
    "flavor.lead": "«Прозрачно, но не пресно; свежо, но не грубо; нежно, но не сыро; масляно, но не жирно.»",
    "flavor.yumcha.t": "Ям Ча (утренний чай)",
    "flavor.yumcha.d": "Креветочные дим-самы, шумай, куриные лапки, чашиу-бао — два укуса и чайник, медленное кантонское утро.",
    "flavor.soup.t": "Медленно томлёный суп",
    "flavor.soup.d": "Три часа на тихом огне — кантонское определение дома.",
    "flavor.chicken.t": "Курица «белая нарезка»",
    "flavor.chicken.d": "Простота на пике — хрустящая кожа, нежное мясо, имбирно-зелёный соус. Блюдо о правде вкуса.",
    "flavor.wonton.t": "Лапша с вонтонами",
    "flavor.wonton.d": "Бамбуковая лапша, вонтоны со свежими креветками, бульон из сушёной рыбы — вкус Сигуаня.",
    "flavor.milk.t": "Двойное молоко",
    "flavor.milk.d": "От Шуньдэ до Гуанчжоу — две тонкие плёнки в чашке хранят сладость старого Кантона.",
    "flavor.changfen.t": "Рисовые роллы Чанфэнь",
    "flavor.changfen.d": "Рулетные или ящиковые — у каждого кантонца есть свой «лучший в городе».",

    "gallery.tag": "05 / ГАЛЕРЕЯ",
    "gallery.title": "Кадр за кадром · <em>Гуанчжоу в свете</em>",
    "gallery.lead": "Аркады, Жемчужная река, неон, рыночные переулки — этот город вплетён в каждый кадр.",
    "gallery.g1": "Ночь на реке",
    "gallery.g2": "Аркадные улицы",
    "gallery.g3": "Кантон-башня",
    "gallery.g4": "Гора Байюнь",
    "gallery.g5": "Цветение капока",
    "gallery.g6": "Баньяны Шамянь",
    "gallery.g7": "Чжуцзян-Синчэн",
    "gallery.g8": "Переулки Сигуаня",

    "timeline.tag": "06 / ИСТОРИЯ",
    "timeline.title": "Два тысячелетия · <em>один город</em>",
    "tl.1.y": "214 до н.э.", "tl.1.t": "Жэнь Сяо основывает Паньюй", "tl.1.d": "Цинь покоряет Линнань — и история Гуанчжоу начинается здесь.",
    "tl.2.y": "203 до н.э.", "tl.2.t": "Основано царство Наньюэ", "tl.2.d": "Чжао То провозглашает себя царём Наньюэ — рассвет независимого южного царства.",
    "tl.3.y": "Тан–Сун", "tl.3.t": "Морской шёлковый путь", "tl.3.d": "Иностранные кварталы кипят жизнью — порт Паньюй становится крупнейшей гаванью Востока.",
    "tl.4.y": "Мин–Цин", "tl.4.t": "Тринадцать факторий", "tl.4.d": "Более века «единого порта» — Гуанчжоу был окном мира в Китай.",
    "tl.5.y": "1957", "tl.5.t": "Первая Кантонская ярмарка", "tl.5.d": "Первая дверь внешней торговли Нового Китая — открыта каждой весной и осенью с тех пор.",
    "tl.6.y": "2010", "tl.6.t": "Азиатские игры в Гуанчжоу", "tl.6.d": "Кантон-башня загорается — Гуанчжоу выходит на мировую сцену.",
    "tl.7.y": "Сегодня", "tl.7.t": "Сердце Большого залива", "tl.7.d": "Тысячелетний торговый порт пишет новую главу залива.",

    "footer.brand": "CANTON",
    "footer.tagline": "Облачная гора, Жемчужная река — город в цвету.",
    "footer.col1": "О городе",
    "footer.col2": "Вкус города",
    "footer.col3": "Координаты",
    "footer.copy": "© 2026 · Любовное письмо Гуанчжоу",
    "footer.made": "Сделано с теплом в Кантоне",

    "contact.tag": "07 / КОНТАКТЫ",
    "contact.title": "Связаться · <em>спланируйте поездку в Кантон</em>",
    "contact.lead": "Вопросы, индивидуальные туры или просто интерес — оставьте сообщение, мы ответим в течение одного рабочего дня.",
    "contact.phone": "Телефон",
    "contact.email": "Эл. почта",
    "contact.wechat": "WeChat",
    "contact.address": "Адрес",
    "contact.address.v": "Чжуцзян Синчэн, район Тяньхэ, Гуанчжоу",
    "contact.hours": "Часы работы",
    "contact.hours.v": "Пн–Вс · 09:00 – 21:00 (GMT+8)",
    "contact.top": "Наверх",
    "contact.f.name": "Имя",
    "contact.f.name.ph": "Ваше имя",
    "contact.f.phone": "Телефон",
    "contact.f.phone.ph": "+7 ...",
    "contact.f.email": "Эл. почта",
    "contact.f.email.ph": "you@example.com",
    "contact.f.topic": "Тема",
    "contact.f.topic.travel": "Туры и путешествия",
    "contact.f.topic.business": "Бизнес и торговля",
    "contact.f.topic.culture": "Культура и наследие",
    "contact.f.topic.other": "Другое",
    "contact.f.msg": "Сообщение",
    "contact.f.msg.ph": "Расскажите немного о ваших планах…",
    "contact.f.submit": "Отправить",
    "contact.f.hint": "Обычно отвечаем в течение одного рабочего дня.",
    "contact.f.ok": "Спасибо! Мы получили ваше сообщение и скоро ответим.",
    "contact.f.fail": "К сожалению, отправить сообщение не удалось. Попробуйте позже или напишите нам напрямую.",
    "contact.wechat.title": "Отсканируйте, чтобы добавить WeChat",
    "contact.wechat.desc": "Или найдите ID ниже в WeChat",
    "contact.close": "Закрыть"
  }
};

// ============ i18n 切换器 ============
const applyLang = (lang) => {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : (lang === 'ru' ? 'ru' : 'en');
  document.documentElement.dataset.lang = lang;
  document.title = dict["meta.title"] || document.title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] != null) {
      if (el.tagName === 'META') el.setAttribute('content', dict[key]);
      else el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] != null) el.placeholder = dict[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('gz-lang', lang); } catch (e) {}
};

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

const savedLang = (() => {
  try { return localStorage.getItem('gz-lang'); } catch (e) { return null; }
})();
applyLang(savedLang || 'en');

// ============ 滚动时导航变色 + 高亮当前区段 ============
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');

  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ============ 移动端菜单 ============
const toggle = document.querySelector('.nav-toggle');
const linksWrap = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => linksWrap.classList.toggle('open'));
navLinks.forEach(a => a.addEventListener('click', () => linksWrap.classList.remove('open')));

// ============ 数字滚动动画 ============
const animateNumber = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('zh-CN');
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString('zh-CN');
  };
  requestAnimationFrame(tick);
};

// ============ 入场动画 + 数字触发 ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('stat-num') && !entry.target.dataset.done) {
        entry.target.dataset.done = '1';
        animateNumber(entry.target);
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section-head, .card, .stat, .modern-item, .flavor-item, .tl-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));

// ============ 卡片倾斜（鼠标视差）============
document.querySelectorAll('.heritage-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-10px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ============ 英雄区视差 ============
const heroPattern = document.querySelector('.hero-pattern');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < window.innerHeight && heroPattern) {
    heroPattern.style.transform = `translateY(${y * 0.4}px)`;
  }
});

// ============ 时间线渐入 ============
document.querySelectorAll('.tl-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 80}ms`;
});

console.log('%c CANTON · Cloud Mountain Pearl River ', 'background: #c0392b; color: #e8c574; font-size: 14px; padding: 6px 12px; font-family: serif;');

// ============ 首页轮播 ============
(() => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.slide');
  const dots = carousel.querySelectorAll('.dot');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const progressBar = carousel.querySelector('.carousel-progress span');

  const total = slides.length;
  const interval = 6000;
  let current = 0;
  let progressTimer = null;
  let progress = 0;
  let paused = false;

  const goTo = (idx) => {
    current = (idx + total) % total;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === current));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
    progress = 0;
    if (progressBar) progressBar.style.width = '0%';
  };
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const tick = () => {
    if (paused) return;
    progress += 50;
    if (progressBar) progressBar.style.width = (progress / interval * 100) + '%';
    if (progress >= interval) next();
  };
  const start = () => {
    if (progressTimer) clearInterval(progressTimer);
    progressTimer = setInterval(tick, 50);
  };

  nextBtn?.addEventListener('click', () => { next(); start(); });
  prevBtn?.addEventListener('click', () => { prev(); start(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(Number(d.dataset.target)); start(); }));

  carousel.addEventListener('mouseenter', () => { paused = true; });
  carousel.addEventListener('mouseleave', () => { paused = false; });

  const isInViewport = (el) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  };
  document.addEventListener('keydown', (e) => {
    if (!isInViewport(carousel)) return;
    if (e.key === 'ArrowLeft') { prev(); start(); }
    if (e.key === 'ArrowRight') { next(); start(); }
  });

  let touchX = 0;
  carousel.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) { (dx > 0 ? prev : next)(); start(); }
  });

  start();
})();

// ============ 联系表单 + 微信弹层 + 回到顶部 ============
(() => {
  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const lang = document.documentElement.dataset.lang || 'en';
    const dict = I18N[lang] || I18N.en;

    const submitBtn = form.querySelector('.form-submit');
    const origText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '…';

    const data = new FormData(form);
    const payload = {};
    data.forEach((v, k) => payload[k] = v);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(r => r.json())
      .then(res => {
        if (res && res.ok) {
          alert(dict['contact.f.ok'] || 'Thanks!');
          form.reset();
        } else {
          alert((dict['contact.f.fail'] || 'Submission failed.') + (res && res.error ? '\n' + res.error : ''));
        }
      })
      .catch(err => {
        alert((dict['contact.f.fail'] || 'Network error.') + '\n' + err.message);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = dict['contact.f.submit'] || origText;
      });
  });

  // 微信弹层
  const wechatBtn = document.querySelector('.fc-wechat');
  if (wechatBtn) {
    const modal = document.createElement('div');
    modal.className = 'wechat-modal';
    modal.innerHTML = `
      <div class="wechat-card">
        <div class="wechat-qr"></div>
        <h4 data-wm="title">Scan to add WeChat</h4>
        <p data-wm="desc">Or search the ID below in WeChat</p>
        <span class="wechat-id">CantonGuide2026</span>
        <br>
        <button type="button" class="wechat-close" data-wm="close">CLOSE</button>
      </div>
    `;
    document.body.appendChild(modal);

    const updateWmText = () => {
      const lang = document.documentElement.dataset.lang || 'en';
      const dict = I18N[lang] || I18N.en;
      modal.querySelector('[data-wm="title"]').textContent = dict['contact.wechat.title'];
      modal.querySelector('[data-wm="desc"]').textContent = dict['contact.wechat.desc'];
      modal.querySelector('[data-wm="close"]').textContent = dict['contact.close'];
    };

    wechatBtn.addEventListener('click', () => {
      updateWmText();
      modal.classList.add('is-open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('wechat-close')) {
        modal.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.classList.remove('is-open');
    });
  }

  // 回到顶部：滚动 600px 后显示
  const fc = document.querySelector('.floating-contact');
  window.addEventListener('scroll', () => {
    fc?.classList.toggle('show-top', window.scrollY > 600);
  });
})();
