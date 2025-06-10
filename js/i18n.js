// 多语言国际化系统
class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.translations = {
            'zh': {
                // 网站SEO相关
                'site.title': '🐱 Happy Cat Tavern - 免费在线猫咪游戏合集',
                'site.description': '玩可爱的免费在线猫咪游戏！合集包括猫咪后院、桌面宠物猫、打地鼠猫咪版、饥饿小猫等。无需下载，在浏览器中即可畅玩。',
                
                // 导航栏
                'nav.games': '游戏',
                'nav.features': '特色',
                'nav.about': '关于',
                'nav.contact': '联系',
                'nav.back': '← 返回游戏',
                
                // 主页
                'hero.title': 'Happy Cat Tavern',
                'hero.subtitle': '欢迎来到神奇的猫咪酒馆，在这里你可以经营自己的神秘酒馆，制作魔法饮品，遇见可爱的猫咪顾客，并提高你的打字技能！',
                'hero.cta': '选择你的游戏',
                
                // 游戏选择
                'games.title': '选择你的猫咪冒险',
                'games.tavern.title': 'Happy Cat Tavern',
                'games.tavern.desc': '经营你的魔法酒馆并提高打字技能',
                'games.tavern.status': '原版游戏',
                'games.hungry.title': 'Hungry Kitty',
                'games.hungry.desc': '帮助饥饿的猫咪吃食物，避免碰到水',
                'games.hungry.status': '打砖块风格',
                'games.whack.title': 'Whack-a-Cat',
                'games.whack.desc': '在这个有趣的街机游戏中抓住冒出来的猫咪',
                'games.whack.status': '5个关卡',
                'games.kawaii.title': 'Kawaii Cat',
                'games.kawaii.desc': '用你可爱的猫咪接住掉落的物品',
                'games.kawaii.status': '移动端友好',
                'games.neko.title': 'Neko Atsume',
                'games.neko.desc': '观看可爱的猫咪全天候拜访你的虚拟庭院',
                'games.neko.status': '收集风格',
                'games.desktop.title': 'Desktop Pet Cat',
                'games.desktop.desc': '跟随你鼠标光标的可爱像素猫',
                'games.desktop.status': '经典风格',
                
                // 游戏页面通用
                'game.howto': '游戏说明',
                'game.loading': '游戏加载中...',
                'game.fullscreen': '全屏游戏',
                'game.tips': '游戏提示',
                
                // Hungry Kitty 游戏页面
                'hungry.title': '🍽️ Hungry Kitty',
                'hungry.subtitle': '帮助饥饿的猫咪吃掉所有食物，同时避开水。记住，猫咪讨厌洗澡！',
                'hungry.meta.description': '喂养饥饿的猫咪，看着它成长！可爱的猫咪喂养游戏，收集食物并照顾你的虚拟宠物。有趣轻松的游戏体验。',
                'hungry.howto.title': '游戏说明',
                'hungry.howto.start': '按 S 键开始游戏',
                'hungry.howto.move': '使用 ← 和 → 方向键移动挡板',
                'hungry.howto.pause': '按 P 键暂停/继续游戏',
                'hungry.howto.restart': '暂停时按 R 键重新开始',
                'hungry.howto.goal': '帮助猫咪吃掉上方所有食物，不要碰到水！',
                
                // Whack-a-Cat 游戏页面
                'whack.title': '🎯 Whack-a-Cat',
                'whack.subtitle': '在这个有趣的街机游戏中快速抓住冒出来的猫咪！测试你的反应速度。',
                'whack.howto.title': '游戏说明',
                'whack.howto.click': '点击冒出来的猫咪来抓住它们',
                'whack.howto.speed': '游戏会越来越快，保持专注！',
                'whack.howto.levels': '完成5个关卡挑战',
                'whack.howto.score': '尽可能获得高分',
                'whack.howto.time': '在时间用完前抓住更多猫咪',
                
                // Kawaii Cat 游戏页面
                'kawaii.title': '🌟 Kawaii Cat',
                'kawaii.subtitle': '用你可爱的猫咪接住从天空掉落的各种物品。这是一个考验反应和技巧的游戏！',
                'kawaii.howto.title': '游戏说明',
                'kawaii.howto.move': '使用方向键或触摸屏幕移动猫咪',
                'kawaii.howto.catch': '接住掉落的好物品获得分数',
                'kawaii.howto.avoid': '避开危险物品',
                'kawaii.howto.mobile': '支持手机触摸操作',
                'kawaii.howto.score': '挑战你的最高分记录',
                
                // Neko Atsume 游戏页面
                'neko.title': '🏡 Neko Atsume',
                'neko.subtitle': '观看可爱的猫咪全天候拜访你的虚拟庭院。这是著名手机游戏的网页版本！',
                'neko.howto.title': '游戏说明',
                'neko.howto.watch': '观察猫咪们在庭院中的活动',
                'neko.howto.time': '游戏会根据时间变化显示不同场景',
                'neko.howto.collect': '收集不同种类的可爱猫咪',
                'neko.howto.relax': '这是一个放松的观赏类游戏',
                'neko.howto.enjoy': '享受与猫咪们的温馨时光',
                
                // Desktop Pet Cat 游戏页面
                'desktop.title': '🐾 Desktop Pet Cat',
                'desktop.subtitle': '经典的桌面宠物猫咪！一只可爱的像素猫会跟随你的鼠标光标，就像90年代的经典桌面宠物一样。',
                'desktop.howto.title': '使用说明',
                'desktop.howto.follow': '小猫会自动跟随你的鼠标移动',
                'desktop.howto.actions': '观察小猫的各种可爱动作',
                'desktop.howto.sleep': '不动鼠标时小猫会睡觉',
                'desktop.howto.scratch': '小猫会做出挠墙等动作',
                'desktop.howto.classic': '重现90年代经典桌面宠物体验',
                'desktop.download.title': '下载到你的网站',
                'desktop.download.desc': '你可以免费下载这个桌面宠物猫，添加到你自己的网站上！',
                'desktop.download.complete': '📦 下载完整包',
                'desktop.download.script': '📄 仅下载脚本',
                'desktop.download.example': '👀 查看使用示例',
                'desktop.download.code': '代码示例',
                'desktop.download.usage': '使用方法',
                'desktop.download.step1': '1. 下载文件到你的网站目录',
                'desktop.download.step2': '2. 在HTML页面中添加以下代码：',
                'desktop.download.step3': '3. 保存并刷新页面，享受你的桌面宠物猫！',
                'desktop.download.alert': '📦 Desktop Pet Cat 下载已开始！\n\n包含文件：\n• oneko.js (主脚本)\n• oneko.gif (猫咪精灵图)\n\n使用方法：\n1. 上传文件到你的网站\n2. 在HTML中添加: <script src="oneko.js"><\/script>\n3. 享受可爱的桌面宠物猫咪！',
                
                // 特色功能
                'features.title': '游戏特色',
                'features.tavern.title': '经营你的魔法酒馆',
                'features.tavern.desc': '创建你独特的猫咪酒馆，为各种猫咪顾客提供舒适的场所。',
                'features.brew.title': '制作魔法饮品',
                'features.brew.desc': '收集原料并酿造魔法饮品，满足猫咪顾客的特殊要求。',
                'features.typing.title': '提高你的打字技能',
                'features.typing.desc': '在游戏中自然地提高你的打字速度和准确性。',
                'features.cats.title': '遇见可爱的猫咪',
                'features.cats.desc': '与各种性格的猫咪互动，解锁它们的故事和特殊任务。',
                
                // 关于部分
                'about.title': '关于 Happy Cat Tavern',
                'about.p1': 'Happy Cat Tavern 是一款将打字练习与酒馆经营模拟相结合的休闲游戏。在充满魔法的世界中，你将担任酒馆老板，为各种猫咪顾客提供服务。',
                'about.p2': '每只来访的猫咪都有自己独特的喜好和故事。通过与它们互动并提供服务，你将解锁更多游戏内容和故事情节。同时，打字挑战机制让你在享受乐趣的同时提高打字技能。',
                'about.p3': '由 Courier Cat Studio 精心制作，适合所有年龄段的玩家，特别是那些想在愉快的环境中提高打字技能的人。',
                
                // 页脚
                'footer.game': '关于游戏',
                'footer.features': '游戏特色',
                'footer.updates': '更新日志',
                'footer.faq': '常见问题',
                'footer.support': '支持',
                'footer.developers': '开发者',
                'footer.studio': 'Courier Cat Studio',
                'footer.team': '团队介绍',
                'footer.works': '其他作品',
                'footer.contributors': '贡献者',
                'footer.contact': '联系我们',
                'footer.discord': 'Discord',
                'footer.twitter': 'Twitter',
                'footer.email': '邮箱',
                'footer.feedback': '提交反馈',
                'footer.resources': '资源',
                'footer.guide': '官方指南',
                'footer.community': '社区讨论',
                'footer.creations': '玩家创作',
                'footer.links': '推荐链接',
                'footer.copyright': '© 2023 Courier Cat Studio | Happy Cat Tavern - 神奇的打字冒险 | 保留所有权利',
                
                // 下载页面
                'download.title': 'Desktop Pet Cat - 免费下载',
                'download.subtitle': '免费下载经典桌面宠物猫咪，让可爱的像素猫陪伴你的网页浏览！',
                'download.btn.complete': '📦 下载完整包 (oneko.js + oneko.gif)',
                'download.btn.script': '📄 仅下载脚本 (oneko.js)',
                'download.btn.example': '👀 查看使用示例',
                'download.size': '文件大小: 约8KB | 兼容所有现代浏览器 | 完全免费使用',
                'download.feature.follow': '跟随鼠标',
                'download.feature.follow.desc': '小猫会智能跟随你的鼠标光标移动',
                'download.feature.actions': '可爱动作',
                'download.feature.actions.desc': '会睡觉、挠墙、休息等多种萌萌动作',
                'download.feature.lightweight': '轻量级',
                'download.feature.lightweight.desc': '仅8KB大小，不影响网页加载速度',
                'download.feature.easy': '易于集成',
                'download.feature.easy.desc': '一行代码即可添加到任何网页',
                
                // 通用
                'common.download': '📥 免费下载',
                'common.back': '← 返回',
                'common.loading': '加载中...',
                'common.error': '出错了',
                'common.success': '成功！',
                'common.fullscreen': '全屏',
                'common.exit-fullscreen': '退出全屏',
                
                // 通用元素
                'common': {
                    'fullscreen': 'Fullscreen',
                    'exit-fullscreen': 'Exit Fullscreen'
                },
                
                // Neko Atsume 页面
                neko: {
                    title: '🏡 猫咪后院 - 快乐猫咪酒馆',
                    subtitle: '观看可爱的猫咪来访你的虚拟庭院！基于热门手机游戏，这个放松的体验会随着一天中的时间变化。',
                    howto: {
                        title: '关于这个游戏',
                        relax: '这是一个<strong>放松的、非交互式</strong>的观猫体验',
                        appear: '猫咪会自动出现并在你的庭院里玩玩具',
                        time: '庭院的外观会根据<strong>一天中的时间</strong>变化',
                        personality: '不同的猫咪有不同的性格和偏好',
                        enjoy: '只需坐下来，放松，享受观看猫咪的乐趣！',
                        based: '基于深受喜爱的手机游戏"猫咪后院：小猫收集器"'
                    },
                    fullscreen: '全屏',
                    meta: {
                        description: "在线玩猫咪后院！观看可爱的猫咪拜访你的虚拟庭院，这是一个放松的猫咪模拟游戏。基于热门手机游戏，随时间变化。"
                    }
                },
                
                // Oneko 页面
                oneko: {
                    title: '🐾 桌面宠物猫 - 快乐猫咪酒馆',
                    subtitle: '怀旧的桌面宠物体验！观看可爱的像素猫跟随你的鼠标光标在屏幕上移动。',
                    howto: {
                        title: '工作原理',
                        move: '<strong>移动你的鼠标</strong>在屏幕上，看猫咪跟随',
                        chase: '猫咪会<strong>追逐你的光标</strong>无论你去哪里',
                        rest: '当你停止移动时，猫咪会<strong>坐下休息</strong>',
                        classic: '这是经典<strong>Neko桌面宠物</strong>的重现，来自1990年代',
                        sprite: '猫咪以小<strong>像素精灵</strong>的形式出现在你的屏幕上',
                        patterns: '尝试以不同的模式移动鼠标，观看猫咪的反应！'
                    },
                    demo: {
                        title: '🎮 互动演示区域',
                        description: '在这个区域移动你的鼠标，看桌面宠物猫的动作！',
                        hint: '猫咪会出现并跟随你的光标移动'
                    },
                    download: {
                        title: '📥 喜欢这个效果？免费下载到你的网站！',
                        complete: '📦 下载完整包',
                        tutorial: '📋 详细教程',
                        oneline: '✨ 一行代码即可添加到任何网页：',
                        features: '💡 完全免费使用 | 个人和商业网站均可 | 仅8KB大小',
                        alert: '📦 Desktop Pet Cat 下载已开始！\n\n包含文件：\n• oneko.js (主脚本)\n• oneko.gif (猫咪精灵图)\n\n使用方法：\n1. 上传文件到你的网站\n2. 在HTML中添加: <script src="oneko.js"><\/script>\n3. 享受可爱的桌面宠物猫咪！'
                    },
                    fullscreen: '全屏'
                },
                
                // Download 页面
                download: {
                    title: '🐾 桌面宠物猫下载 - 快乐猫咪酒馆',
                    header: {
                        title: '🐾 桌面宠物猫',
                        subtitle: '免费下载经典桌面宠物猫咪，让可爱的像素猫陪伴你的网页浏览！'
                    },
                    section: {
                        title: '📥 立即下载'
                    },
                    buttons: {
                        complete: '📦 下载完整包 (oneko.js + oneko.gif)',
                        script: '📄 仅下载脚本 (oneko.js)',
                        example: '👀 查看使用示例'
                    },
                    info: '文件大小: 约8KB | 兼容所有现代浏览器 | 完全免费使用',
                    features: {
                        follow: {
                            title: '跟随鼠标',
                            desc: '小猫会智能跟随你的鼠标光标移动'
                        },
                        actions: {
                            title: '可爱动作',
                            desc: '会睡觉、挠墙、休息等多种萌萌动作'
                        },
                        lightweight: {
                            title: '轻量级',
                            desc: '仅8KB大小，不影响网页加载速度'
                        },
                        easy: {
                            title: '易于集成',
                            desc: '一行代码即可添加到任何网页'
                        }
                    },
                    usage: {
                        title: '🚀 使用方法',
                        step1: {
                            title: '步骤 1: 下载文件',
                            desc: '点击上方下载按钮，获取 oneko.js 和 oneko.gif 文件'
                        },
                        step2: {
                            title: '步骤 2: 上传到网站',
                            desc: '将下载的文件上传到你的网站根目录或任意文件夹'
                        },
                        step3: {
                            title: '步骤 3: 添加代码',
                            desc: '在你的HTML页面的 </body> 标签前添加以下代码：'
                        },
                        step4: {
                            title: '步骤 4: 享受效果',
                            desc: '刷新页面，移动鼠标，小猫就会出现并跟随你的光标！'
                        }
                    },
                    advanced: {
                        title: '🔧 高级用法',
                        custom: {
                            title: '自定义猫咪图片',
                            desc: '你可以替换 oneko.gif 为自己的32x32像素精灵图：'
                        },
                        animation: {
                            title: '检查是否支持动画',
                            desc: '脚本会自动检测用户的动画偏好设置，如果用户设置了"减少动画"，猫咪不会出现。'
                        },
                        remove: {
                            title: '移除猫咪',
                            desc: '如果需要动态移除猫咪，可以使用以下JavaScript代码：'
                        }
                    },
                    license: {
                        title: '📜 使用许可',
                        free: '✅ 完全免费 - 个人和商业用途均可免费使用',
                        opensource: '✅ 开源项目 - 基于MIT许可证',
                        attribution: '✅ 无需署名 - 不强制要求，但感谢提及',
                        modify: '✅ 可以修改 - 允许修改和定制',
                        source: '原项目: oneko.js by adryd325'
                    },
                    back: '← 返回游戏主页',
                    alerts: {
                        complete: '📦 文件下载已开始！\n\n包含文件：\n• oneko.js (主脚本)\n• oneko.gif (猫咪精灵图)\n\n请查看浏览器下载文件夹。',
                        single: '📄 oneko.js 下载已开始！\n\n注意：你还需要 oneko.gif 图片文件才能正常显示猫咪。\n可以从原项目获取或使用自定义图片。'
                    }
                }
            },
            
            'en': {
                // Website SEO related
                'site.title': '🐱 Happy Cat Tavern - Free Online Cat Games Collection',
                'site.description': 'Play adorable free online cat games! Collection includes Neko Atsume, Desktop Pet Cat, Whack-a-Cat, Hungry Kitty and more. No download required, play instantly in your browser.',
                
                // Navigation
                'nav.games': 'Games',
                'nav.features': 'Features',
                'nav.about': 'About',
                'nav.contact': 'Contact',
                'nav.back': '← Back to Games',
                
                // Homepage
                'hero.title': 'Happy Cat Tavern',
                'hero.subtitle': 'Welcome to the magical cat tavern, where you can manage your own mystical tavern, craft enchanted beverages, meet adorable feline customers, and improve your typing skills!',
                'hero.cta': 'Choose Your Game',
                
                // Game Selection
                'games.title': 'Choose Your Cat Adventure',
                'games.tavern.title': 'Happy Cat Tavern',
                'games.tavern.desc': 'Manage your magical tavern and improve typing skills',
                'games.tavern.status': 'Original Game',
                'games.hungry.title': 'Hungry Kitty',
                'games.hungry.desc': 'Help the hungry cat eat food while avoiding water',
                'games.hungry.status': 'Brick Breaker Style',
                'games.whack.title': 'Whack-a-Cat',
                'games.whack.desc': 'Catch cats as they pop up in this fun arcade game',
                'games.whack.status': '5 Levels',
                'games.kawaii.title': 'Kawaii Cat',
                'games.kawaii.desc': 'Catch falling objects with your adorable cat',
                'games.kawaii.status': 'Mobile Friendly',
                'games.neko.title': 'Neko Atsume',
                'games.neko.desc': 'Watch cute cats visit your virtual yard throughout the day',
                'games.neko.status': 'Collector Style',
                'games.desktop.title': 'Desktop Pet Cat',
                'games.desktop.desc': 'A cute pixel cat that follows your mouse cursor',
                'games.desktop.status': 'Classic Style',
                
                // Game pages common
                'game.howto': 'How to Play',
                'game.loading': 'Game Loading...',
                'game.fullscreen': 'Fullscreen Game',
                'game.tips': 'Game Tips',
                
                // Hungry Kitty game page
                'hungry.title': '🍽️ Hungry Kitty',
                'hungry.subtitle': 'Help the hungry cat eat all the food while avoiding the water. Remember, cats hate showers!',
                'hungry.meta.description': 'Feed the hungry cat, watch it grow! Cute cat feeding game, collect food and take care of your virtual pet. Fun and easy game experience.',
                'hungry.howto.title': 'How to Play',
                'hungry.howto.start': 'Press <strong>S</strong> to start the game',
                'hungry.howto.move': 'Use <strong>←</strong> and <strong>→</strong> arrow keys to move the paddle',
                'hungry.howto.pause': 'Press <strong>P</strong> to pause/unpause the game',
                'hungry.howto.restart': 'Press <strong>R</strong> to restart when paused',
                'hungry.howto.goal': 'Help the cat eat all the food above without touching the water!',
                
                // Whack-a-Cat game page
                'whack.title': '🎯 Whack-a-Cat',
                'whack.subtitle': 'Catch cats as they pop up in this fun arcade game! Test your reaction speed.',
                'whack.howto.title': 'How to Play',
                'whack.howto.click': 'Click on cats as they pop up to catch them',
                'whack.howto.speed': 'The game gets faster and faster, stay focused!',
                'whack.howto.levels': 'Complete 5 challenging levels',
                'whack.howto.score': 'Try to get the highest score possible',
                'whack.howto.time': 'Catch as many cats as you can before time runs out',
                
                // Kawaii Cat game page
                'kawaii.title': '🌟 Kawaii Cat',
                'kawaii.subtitle': 'Catch falling objects with your adorable cat. This is a game that tests your reflexes and skills!',
                'kawaii.howto.title': 'How to Play',
                'kawaii.howto.move': 'Use arrow keys or touch screen to move the cat',
                'kawaii.howto.catch': 'Catch good falling items to score points',
                'kawaii.howto.avoid': 'Avoid dangerous items',
                'kawaii.howto.mobile': 'Supports mobile touch controls',
                'kawaii.howto.score': 'Challenge your high score record',
                
                // Neko Atsume game page
                'neko.title': '🏡 Neko Atsume - Happy Cat Tavern',
                'neko.subtitle': 'Watch adorable cats visit your virtual yard! Based on the popular mobile game, this relaxing experience changes with the time of day.',
                'neko.howto.title': 'About This Game',
                'neko.howto.watch': 'Observe cats activities in the yard',
                'neko.howto.time': 'The game shows different scenes based on time changes',
                'neko.howto.collect': 'Collect different types of adorable cats',
                'neko.howto.relax': 'This is a relaxing observation game',
                'neko.howto.enjoy': 'Enjoy warm moments with the cats',
                
                // Desktop Pet Cat game page
                'desktop.title': '🐾 Desktop Pet Cat',
                'desktop.subtitle': 'Classic desktop pet cat! A cute pixel cat will follow your mouse cursor, just like the classic desktop pets from the 90s.',
                'desktop.howto.title': 'Instructions',
                'desktop.howto.follow': 'The cat will automatically follow your mouse movement',
                'desktop.howto.actions': 'Watch the cat\'s various cute actions',
                'desktop.howto.sleep': 'The cat will sleep when you don\'t move the mouse',
                'desktop.howto.scratch': 'The cat will scratch walls and do other actions',
                'desktop.howto.classic': 'Recreate the classic 90s desktop pet experience',
                'desktop.download.title': 'Download for Your Website',
                'desktop.download.desc': 'You can download this desktop pet cat for free and add it to your own website!',
                'desktop.download.complete': '📦 Download Complete Package',
                'desktop.download.script': '📄 Download Script Only',
                'desktop.download.example': '👀 View Usage Example',
                'desktop.download.code': 'Code Example',
                'desktop.download.usage': 'Usage Instructions',
                'desktop.download.step1': '1. Download files to your website directory',
                'desktop.download.step2': '2. Add the following code to your HTML page:',
                'desktop.download.step3': '3. Save and refresh the page, enjoy your desktop pet cat!',
                'desktop.download.alert': '📦 Desktop Pet Cat download started!\n\nIncluded files:\n• oneko.js (main script)\n• oneko.gif (cat sprite)\n\nHow to use:\n1. Upload files to your website\n2. Add to HTML: <script src="oneko.js"><\/script>\n3. Enjoy the cute desktop pet cat!',
                
                // Features
                'features.title': 'Game Features',
                'features.tavern.title': 'Manage Your Magical Tavern',
                'features.tavern.desc': 'Create your own unique cat tavern and provide a cozy place for various feline customers.',
                'features.brew.title': 'Craft Magical Beverages',
                'features.brew.desc': 'Collect ingredients and brew magical drinks to satisfy the special requests of your cat customers.',
                'features.typing.title': 'Improve Your Typing Skills',
                'features.typing.desc': 'Naturally enhance your typing speed and accuracy while having fun in the game.',
                'features.cats.title': 'Meet Adorable Cats',
                'features.cats.desc': 'Interact with cats of various personalities, unlock their stories and special quests.',
                
                // About
                'about.title': 'About Happy Cat Tavern',
                'about.p1': 'Happy Cat Tavern is a casual game that combines typing practice with tavern management simulation. Set in a world full of magic, you\'ll serve as a tavern owner, providing services to all kinds of cat customers.',
                'about.p2': 'Each visiting cat has their own unique preferences and stories. By interacting with them and providing services, you\'ll unlock more game content and storylines. Meanwhile, the typing challenge mechanism allows you to improve your typing skills while having fun.',
                'about.p3': 'Crafted with care by Courier Cat Studio, it\'s suitable for players of all ages, especially those who want to improve their typing skills in an enjoyable environment.',
                
                // Footer
                'footer.game': 'About the Game',
                'footer.features': 'Game Features',
                'footer.updates': 'Update Log',
                'footer.faq': 'FAQ',
                'footer.support': 'Support',
                'footer.developers': 'Developers',
                'footer.studio': 'Courier Cat Studio',
                'footer.team': 'Team Introduction',
                'footer.works': 'Other Works',
                'footer.contributors': 'Contributors',
                'footer.contact': 'Contact Us',
                'footer.discord': 'Discord',
                'footer.twitter': 'Twitter',
                'footer.email': 'Email',
                'footer.feedback': 'Submit Feedback',
                'footer.resources': 'Resources',
                'footer.guide': 'Official Guide',
                'footer.community': 'Community Discussion',
                'footer.creations': 'Player Creations',
                'footer.links': 'Recommended Links',
                'footer.copyright': '© 2023 Courier Cat Studio | Happy Cat Tavern - A Magical Typing Adventure | All Rights Reserved',
                
                // Download page
                'download.title': 'Desktop Pet Cat - Free Download',
                'download.subtitle': 'Download the classic desktop pet cat for free, let the cute pixel cat accompany your web browsing!',
                'download.btn.complete': '📦 Download Complete Package (oneko.js + oneko.gif)',
                'download.btn.script': '📄 Download Script Only (oneko.js)',
                'download.btn.example': '👀 View Usage Example',
                'download.size': 'File Size: ~8KB | Compatible with all modern browsers | Completely free to use',
                'download.feature.follow': 'Mouse Following',
                'download.feature.follow.desc': 'The cat will intelligently follow your mouse cursor',
                'download.feature.actions': 'Cute Actions',
                'download.feature.actions.desc': 'Sleep, scratch walls, rest and many other adorable actions',
                'download.feature.lightweight': 'Lightweight',
                'download.feature.lightweight.desc': 'Only 8KB size, does not affect webpage loading speed',
                'download.feature.easy': 'Easy Integration',
                'download.feature.easy.desc': 'Add to any webpage with just one line of code',
                
                // Common
                'common.download': '📥 Free Download',
                'common.back': '← Back',
                'common.loading': 'Loading...',
                'common.error': 'Error occurred',
                'common.success': 'Success!',
                'common.fullscreen': 'Fullscreen',
                'common.exit-fullscreen': 'Exit Fullscreen',
                
                // 通用元素
                'common': {
                    'fullscreen': 'Fullscreen',
                    'exit-fullscreen': 'Exit Fullscreen'
                },
                
                // Oneko 页面
                oneko: {
                    title: '🐾 Desktop Pet Cat - Happy Cat Tavern',
                    subtitle: 'A nostalgic desktop pet experience! Watch as a cute pixel cat follows your mouse cursor around the screen.',
                    howto: {
                        title: 'How It Works',
                        move: '<strong>Move your mouse</strong> around the screen to see the cat follow',
                        chase: 'The cat will <strong>chase your cursor</strong> wherever you go',
                        rest: 'When you stop moving, the cat will <strong>sit and rest</strong>',
                        classic: 'This is a recreation of the classic <strong>Neko desktop pet</strong> from the 1990s',
                        sprite: 'The cat appears as a small <strong>pixel sprite</strong> on your screen',
                        patterns: 'Try moving your mouse in different patterns and watch the cat react!'
                    },
                    demo: {
                        title: '🎮 Interactive Demo Area',
                        description: 'Move your mouse around this area to see the desktop pet cat in action!',
                        hint: 'The cat will appear and follow your cursor movements'
                    },
                    download: {
                        title: '📥 Like this effect? Download it for free to your website!',
                        complete: '📦 Download Complete Package',
                        tutorial: '📋 Detailed Tutorial',
                        oneline: '✨ Add to any webpage with just one line of code:',
                        features: '💡 Completely free to use | Personal and commercial websites | Only 8KB size',
                        alert: '📦 Desktop Pet Cat download started!\n\nIncluded files:\n• oneko.js (main script)\n• oneko.gif (cat sprite)\n\nHow to use:\n1. Upload files to your website\n2. Add to HTML: <script src="oneko.js"><\/script>\n3. Enjoy the cute desktop pet cat!'
                    },
                    fullscreen: 'Fullscreen'
                },
                
                // Download 页面
                download: {
                    title: '🐾 Desktop Pet Cat Download - Happy Cat Tavern',
                    header: {
                        title: '🐾 Desktop Pet Cat',
                        subtitle: 'Download the classic desktop pet cat for free, let the cute pixel cat accompany your web browsing!'
                    },
                    section: {
                        title: '📥 Download Now'
                    },
                    buttons: {
                        complete: '📦 Download Complete Package (oneko.js + oneko.gif)',
                        script: '📄 Download Script Only (oneko.js)',
                        example: '👀 View Usage Example'
                    },
                    info: 'File size: ~8KB | Compatible with all modern browsers | Completely free to use',
                    features: {
                        follow: {
                            title: 'Mouse Following',
                            desc: 'The cat will intelligently follow your mouse cursor'
                        },
                        actions: {
                            title: 'Cute Actions',
                            desc: 'Sleep, scratch walls, rest and many other adorable actions'
                        },
                        lightweight: {
                            title: 'Lightweight',
                            desc: 'Only 8KB size, does not affect webpage loading speed'
                        },
                        easy: {
                            title: 'Easy Integration',
                            desc: 'Add to any webpage with just one line of code'
                        }
                    },
                    usage: {
                        title: '🚀 How to Use',
                        step1: {
                            title: 'Step 1: Download Files',
                            desc: 'Click the download button above to get oneko.js and oneko.gif files'
                        },
                        step2: {
                            title: 'Step 2: Upload to Website',
                            desc: 'Upload the downloaded files to your website root directory or any folder'
                        },
                        step3: {
                            title: 'Step 3: Add Code',
                            desc: 'Add the following code before the </body> tag in your HTML page:'
                        },
                        step4: {
                            title: 'Step 4: Enjoy the Effect',
                            desc: 'Refresh the page, move your mouse, and the cat will appear and follow your cursor!'
                        }
                    },
                    advanced: {
                        title: '🔧 Advanced Usage',
                        custom: {
                            title: 'Custom Cat Image',
                            desc: 'You can replace oneko.gif with your own 32x32 pixel sprite:'
                        },
                        animation: {
                            title: 'Check Animation Support',
                            desc: 'The script automatically detects user animation preferences. If the user has set "reduce motion", the cat will not appear.'
                        },
                        remove: {
                            title: 'Remove Cat',
                            desc: 'If you need to dynamically remove the cat, you can use the following JavaScript code:'
                        }
                    },
                    license: {
                        title: '📜 License',
                        free: '✅ Completely Free - Free for personal and commercial use',
                        opensource: '✅ Open Source Project - Based on MIT License',
                        attribution: '✅ No Attribution Required - Not mandatory, but appreciated',
                        modify: '✅ Modifiable - Allowed to modify and customize',
                        source: 'Original project: oneko.js by adryd325'
                    },
                    back: '← Back to Games',
                    alerts: {
                        complete: '📦 File download started!\n\nIncluded files:\n• oneko.js (main script)\n• oneko.gif (cat sprite)\n\nPlease check your browser download folder.',
                        single: '📄 oneko.js download started!\n\nNote: You also need the oneko.gif image file to display the cat properly.\nYou can get it from the original project or use a custom image.'
                    }
                }
            },
            
            'ko': {
                // 웹사이트 SEO 관련
                'site.title': '🐱 Happy Cat Tavern - 무료 온라인 고양이 게임 모음',
                'site.description': '사랑스러운 무료 온라인 고양이 게임을 플레이하세요! 네코 아츠메, 데스크톱 펫 고양이, 두더지잡기 고양이 버전, 배고픈 고양이 등이 포함되어 있습니다. 다운로드 없이 브라우저에서 바로 플레이하세요.',
            
                // 내비게이션
                'nav.games': '게임',
                'nav.features': '특징',
                'nav.about': '소개',
                'nav.contact': '연락처',
                'nav.back': '← 게임으로 돌아가기',
                
                // 홈페이지
                'hero.title': 'Happy Cat Tavern',
                'hero.subtitle': '마법의 고양이 선술집에 오신 것을 환영합니다! 여기서 당신만의 신비로운 선술집을 운영하고, 마법의 음료를 만들고, 사랑스러운 고양이 손님들을 만나며 타이핑 실력을 향상시킬 수 있습니다!',
                'hero.cta': '게임 선택하기',
                
                // 게임 선택
                'games.title': '고양이 모험 선택하기',
                'games.tavern.title': 'Happy Cat Tavern',
                'games.tavern.desc': '마법의 선술집을 운영하고 타이핑 실력을 향상시키세요',
                'games.tavern.status': '오리지널 게임',
                'games.hungry.title': 'Hungry Kitty',
                'games.hungry.desc': '배고픈 고양이가 물을 피하면서 음식을 먹도록 도와주세요',
                'games.hungry.status': '벽돌깨기 스타일',
                'games.whack.title': 'Whack-a-Cat',
                'games.whack.desc': '재미있는 아케이드 게임에서 튀어나오는 고양이들을 잡으세요',
                'games.whack.status': '5단계',
                'games.kawaii.title': 'Kawaii Cat',
                'games.kawaii.desc': '사랑스러운 고양이로 떨어지는 물건들을 받으세요',
                'games.kawaii.status': '모바일 친화적',
                'games.neko.title': 'Neko Atsume',
                'games.neko.desc': '하루 종일 가상 마당을 방문하는 귀여운 고양이들을 관찰하세요',
                'games.neko.status': '수집 스타일',
                'games.desktop.title': 'Desktop Pet Cat',
                'games.desktop.desc': '마우스 커서를 따라다니는 귀여운 픽셀 고양이',
                'games.desktop.status': '클래식 스타일',
                
                // 게임 페이지 공통
                'game.howto': '게임 방법',
                'game.loading': '게임 로딩 중...',
                'game.fullscreen': '전체화면 게임',
                'game.tips': '게임 팁',
                
                // Hungry Kitty 게임 페이지
                'hungry.title': '🍽️ Hungry Kitty',
                'hungry.subtitle': '배고픈 고양이가 물을 피하면서 모든 음식을 먹도록 도와주세요. 고양이는 샤워를 싫어한다는 것을 기억하세요!',
                'hungry.meta.description': '배고픈 고양이를 먹이고 성장하는 것을 보세요! 사랑스러운 고양이 먹이기 게임, 음식을 수집하고 가상 반려동물을 돌보세요. 재미있는 게임 경험이에요.',
                'hungry.howto.title': '게임 방법',
                'hungry.howto.start': '<strong>S</strong> 키를 눌러 게임을 시작하세요',
                'hungry.howto.move': '<strong>←</strong>와 <strong>→</strong> 방향키를 사용해 패들을 움직이세요',
                'hungry.howto.pause': '<strong>P</strong> 키를 눌러 게임을 일시정지/재개하세요',
                'hungry.howto.restart': '일시정지 상태에서 <strong>R</strong> 키를 눌러 재시작하세요',
                'hungry.howto.goal': '고양이가 물에 닿지 않고 위의 모든 음식을 먹도록 도와주세요!',
                
                // Whack-a-Cat 게임 페이지
                'whack.title': '🎯 Whack-a-Cat',
                'whack.subtitle': '이 재미있는 아케이드 게임에서 튀어나오는 고양이들을 빠르게 잡으세요! 반응 속도를 테스트해보세요.',
                'whack.howto.title': '게임 방법',
                'whack.howto.click': '튀어나오는 고양이들을 클릭해서 잡으세요',
                'whack.howto.speed': '게임이 점점 빨라집니다. 집중하세요!',
                'whack.howto.levels': '5개의 도전적인 레벨을 완료하세요',
                'whack.howto.score': '가능한 한 높은 점수를 얻으세요',
                'whack.howto.time': '시간이 다 되기 전에 최대한 많은 고양이를 잡으세요',
                
                // Kawaii Cat 게임 페이지
                'kawaii.title': '🌟 Kawaii Cat',
                'kawaii.subtitle': '사랑스러운 고양이로 떨어지는 물건들을 받으세요. 반사신경과 기술을 테스트하는 게임입니다!',
                'kawaii.howto.title': '게임 방법',
                'kawaii.howto.move': '방향키나 터치 스크린을 사용해 고양이를 움직이세요',
                'kawaii.howto.catch': '좋은 떨어지는 아이템을 받아 점수를 얻으세요',
                'kawaii.howto.avoid': '위험한 아이템은 피하세요',
                'kawaii.howto.mobile': '모바일 터치 조작을 지원합니다',
                'kawaii.howto.score': '최고 점수 기록에 도전하세요',
                
                // Neko Atsume 게임 페이지
                'neko.title': '🏡 네코 아츠메 - 해피 캣 선술집',
                'neko.subtitle': '귀여운 고양이들이 가상 마당을 방문하는 모습을 지켜보세요! 인기 모바일 게임을 기반으로 한 이 편안한 경험은 하루 중 시간에 따라 변화합니다.',
                'neko.howto.title': '이 게임에 대해',
                'neko.howto.watch': '마당에서 고양이들의 활동을 관찰하세요',
                'neko.howto.time': '시간 변화에 따라 다른 장면을 보여줍니다',
                'neko.howto.collect': '다양한 종류의 사랑스러운 고양이들을 수집하세요',
                'neko.howto.relax': '이것은 편안한 관찰 게임입니다',
                'neko.howto.enjoy': '고양이들과의 따뜻한 시간을 즐기세요',
                
                // Desktop Pet Cat 게임 페이지
                'desktop.title': '🐾 Desktop Pet Cat',
                'desktop.subtitle': '클래식 데스크톱 펫 고양이! 90년대 클래식 데스크톱 펫처럼 귀여운 픽셀 고양이가 마우스 커서를 따라다닙니다.',
                'desktop.howto.title': '사용법',
                'desktop.howto.follow': '고양이가 자동으로 마우스 움직임을 따라갑니다',
                'desktop.howto.actions': '고양이의 다양한 귀여운 동작을 관찰하세요',
                'desktop.howto.sleep': '마우스를 움직이지 않으면 고양이가 잠을 잡니다',
                'desktop.howto.scratch': '고양이가 벽을 긁는 등의 동작을 합니다',
                'desktop.howto.classic': '90년대 클래식 데스크톱 펫 경험을 재현합니다',
                'desktop.download.title': '웹사이트용 다운로드',
                'desktop.download.desc': '이 데스크톱 펫 고양이를 무료로 다운로드해서 자신의 웹사이트에 추가할 수 있습니다!',
                'desktop.download.complete': '📦 전체 패키지 다운로드',
                'desktop.download.script': '📄 스크립트만 다운로드',
                'desktop.download.example': '👀 사용 예제 보기',
                'desktop.download.code': '코드 예제',
                'desktop.download.usage': '사용 방법',
                'desktop.download.step1': '1. 웹사이트 디렉토리에 파일을 다운로드하세요',
                'desktop.download.step2': '2. HTML 페이지에 다음 코드를 추가하세요:',
                'desktop.download.step3': '3. 저장하고 페이지를 새로고침하여 데스크톱 펫 고양이를 즐기세요!',
                'desktop.download.alert': '📦 Desktop Pet Cat 下载已开始！\n\n包含文件：\n• oneko.js (主脚本)\n• oneko.gif (猫咪精灵图)\n\n使用方法：\n1. 上传文件到你的网站\n2. 在HTML中添加: <script src="oneko.js"><\/script>\n3. 享受可爱的桌面宠物猫咪！',
                
                // 특징
                'features.title': '게임의 특징',
                'features.tavern.title': '마법의 선술집 운영',
                'features.tavern.desc': '당신만의 독특한 고양이 선술집을 만들고 다양한 고양이 손님들에게 아늑한 공간을 제공하세요.',
                'features.brew.title': '마법의 음료 제조',
                'features.brew.desc': '재료를 수집하고 마법의 음료를 양조하여 고양이 손님들의 특별한 요청을 만족시키세요.',
                'features.typing.title': '타이핑 실력 향상',
                'features.typing.desc': '게임을 즐기면서 자연스럽게 타이핑 속도와 정확성을 향상시키세요.',
                'features.cats.title': '사랑스러운 고양이들과 만나기',
                'features.cats.desc': '다양한 성격의 고양이들과 상호작용하고, 그들의 이야기와 특별한 퀘스트를 해금하세요.',
                
                // 소개
                'about.title': 'Happy Cat Tavern 소개',
                'about.p1': 'Happy Cat Tavern은 타이핑 연습과 선술집 경영 시뮬레이션을 결합한 캐주얼 게임입니다. 마법으로 가득한 세계에서 선술집 주인이 되어 다양한 고양이 손님들에게 서비스를 제공하게 됩니다.',
                'about.p2': '방문하는 각 고양이는 고유한 선호도와 이야기를 가지고 있습니다. 그들과 상호작용하고 서비스를 제공함으로써 더 많은 게임 콘텐츠와 스토리라인을 해금할 수 있습니다. 동시에 타이핑 도전 메커니즘을 통해 재미있게 게임을 즐기면서 타이핑 실력을 향상시킬 수 있습니다.',
                'about.p3': 'Courier Cat Studio에서 정성스럽게 제작했으며, 모든 연령대의 플레이어, 특히 즐거운 환경에서 타이핑 실력을 향상시키고 싶은 분들에게 적합합니다.',
                
                // 푸터
                'footer.game': '게임 소개',
                'footer.features': '게임 특징',
                'footer.updates': '업데이트 로그',
                'footer.faq': 'FAQ',
                'footer.support': '지원',
                'footer.developers': '개발자',
                'footer.studio': 'Courier Cat Studio',
                'footer.team': '팀 소개',
                'footer.works': '다른 작품',
                'footer.contributors': '기여자',
                'footer.contact': '연락처',
                'footer.discord': 'Discord',
                'footer.twitter': 'Twitter',
                'footer.email': '이메일',
                'footer.feedback': '피드백 제출',
                'footer.resources': '리소스',
                'footer.guide': '공식 가이드',
                'footer.community': '커뮤니티 토론',
                'footer.creations': '플레이어 창작물',
                'footer.links': '추천 링크',
                'footer.copyright': '© 2023 Courier Cat Studio | Happy Cat Tavern - 마법의 타이핑 모험 | 모든 권리 보유',
                
                // 다운로드 페이지
                'download.title': 'Desktop Pet Cat - 무료 다운로드',
                'download.subtitle': '클래식 데스크톱 펫 고양이를 무료로 다운로드하고 귀여운 픽셀 고양이가 웹 브라우징을 함께하도록 하세요!',
                'download.btn.complete': '📦 전체 패키지 다운로드 (oneko.js + oneko.gif)',
                'download.btn.script': '📄 스크립트만 다운로드 (oneko.js)',
                'download.btn.example': '👀 사용 예제 보기',
                'download.size': '파일 크기: ~8KB | 모든 최신 브라우저 호환 | 완전 무료 사용',
                'download.feature.follow': '마우스 따라가기',
                'download.feature.follow.desc': '고양이가 마우스 커서를 지능적으로 따라갑니다',
                'download.feature.actions': '귀여운 동작',
                'download.feature.actions.desc': '잠자기, 벽 긁기, 휴식 등 다양한 사랑스러운 동작',
                'download.feature.lightweight': '가벼움',
                'download.feature.lightweight.desc': '8KB 크기로 웹페이지 로딩 속도에 영향 없음',
                'download.feature.easy': '쉬운 통합',
                'download.feature.easy.desc': '한 줄의 코드로 어떤 웹페이지에든 추가 가능',
                
                // 공통
                'common.download': '📥 무료 다운로드',
                'common.back': '← 뒤로',
                'common.loading': '로딩 중...',
                'common.error': '오류 발생',
                'common.success': '성공!',
                'common.fullscreen': '전체화면',
                'common.exit-fullscreen': '종료',
                
                // Neko Atsume 页面
                neko: {
                    title: '🏡 네코 아츠메 - 해피 캣 선술집',
                    subtitle: '귀여운 고양이들이 가상 마당을 방문하는 모습을 지켜보세요! 인기 모바일 게임을 기반으로 한 이 편안한 경험은 하루 중 시간에 따라 변화합니다.',
                    howto: {
                        title: '이 게임에 대해',
                        relax: '이것은 <strong>편안하고 비상호작용적인</strong> 고양이 관찰 경험입니다',
                        appear: '고양이들이 자동으로 나타나서 마당에서 장난감과 놀 것입니다',
                        time: '마당은 <strong>하루 중 시간</strong>에 따라 모습이 바뀝니다',
                        personality: '다른 고양이들은 다른 성격과 선호도를 가지고 있습니다',
                        enjoy: '그냥 앉아서 편안히 고양이들을 지켜보는 재미를 즐기세요!',
                        based: '사랑받는 모바일 게임 "네코 아츠메: 키티 컬렉터"를 기반으로 합니다'
                    },
                    fullscreen: '전체화면'
                },
                
                // Oneko 页面
                oneko: {
                    title: '🐾 데스크톱 펫 고양이 - 해피 캣 선술집',
                    subtitle: '향수를 불러일으키는 데스크톱 펫 경험! 귀여운 픽셀 고양이가 화면에서 마우스 커서를 따라다니는 모습을 지켜보세요.',
                    howto: {
                        title: '작동 방식',
                        move: '화면에서 <strong>마우스를 움직여</strong> 고양이가 따라오는 모습을 보세요',
                        chase: '고양이는 당신이 어디로 가든 <strong>커서를 쫓아갈</strong> 것입니다',
                        rest: '움직임을 멈추면 고양이는 <strong>앉아서 쉴</strong> 것입니다',
                        classic: '이것은 1990년대의 클래식 <strong>네코 데스크톱 펫</strong>의 재현입니다',
                        sprite: '고양이는 화면에 작은 <strong>픽셀 스프라이트</strong>로 나타납니다',
                        patterns: '다양한 패턴으로 마우스를 움직여보고 고양이의 반응을 지켜보세요!'
                    },
                    demo: {
                        title: '🎮 인터랙티브 데모 영역',
                        description: '이 영역에서 마우스를 움직여 데스크톱 펫 고양이의 동작을 확인하세요!',
                        hint: '고양이가 나타나서 커서 움직임을 따라갈 것입니다'
                    },
                    download: {
                        title: '📥 이 효과가 마음에 드시나요? 무료로 웹사이트에 다운로드하세요!',
                        complete: '📦 전체 패키지 다운로드',
                        tutorial: '📋 자세한 튜토리얼',
                        oneline: '✨ 한 줄의 코드로 어떤 웹페이지에든 추가:',
                        features: '💡 완전 무료 사용 | 개인 및 상업 웹사이트 | 단 8KB 크기',
                        alert: '📦 데스크톱 펫 고양이 다운로드가 시작되었습니다!\n\n包含文件：\n• oneko.js (메인 스크립트)\n• oneko.gif (고양이 스프라이트)\n\n사용 방법：\n1. 파일을 웹사이트에 업로드\n2. HTML에 추가: <script src="oneko.js"><\/script>\n3. 귀여운 데스크톱 펫 고양이를 즐기세요!'
                    },
                    fullscreen: '전체화면'
                },
                
                // Download 页面
                download: {
                    title: '🐾 데스크톱 펫 고양이 다운로드 - 해피 캣 선술집',
                    header: {
                        title: '🐾 데스크톱 펫 고양이',
                        subtitle: '클래식 데스크톱 펫 고양이를 무료로 다운로드하여 귀여운 픽셀 고양이가 웹 브라우징을 함께하게 하세요!'
                    },
                    section: {
                        title: '📥 지금 다운로드'
                    },
                    buttons: {
                        complete: '📦 전체 패키지 다운로드 (oneko.js + oneko.gif)',
                        script: '📄 스크립트만 다운로드 (oneko.js)',
                        example: '👀 사용 예제 보기'
                    },
                    info: '파일 크기: ~8KB | 모든 최신 브라우저와 호환 | 완전 무료 사용',
                    features: {
                        follow: {
                            title: '마우스 따라가기',
                            desc: '고양이가 마우스 커서를 지능적으로 따라갑니다'
                        },
                        actions: {
                            title: '귀여운 동작',
                            desc: '잠자기, 벽 긁기, 휴식 등 다양한 사랑스러운 동작'
                        },
                        lightweight: {
                            title: '가벼움',
                            desc: '단 8KB 크기로 웹페이지 로딩 속도에 영향 없음'
                        },
                        easy: {
                            title: '쉬운 통합',
                            desc: '한 줄의 코드로 어떤 웹페이지에든 추가'
                        }
                    },
                    usage: {
                        title: '🚀 사용 방법',
                        step1: {
                            title: '1단계: 파일 다운로드',
                            desc: '위의 다운로드 버튼을 클릭하여 oneko.js와 oneko.gif 파일을 받으세요'
                        },
                        step2: {
                            title: '2단계: 웹사이트에 업로드',
                            desc: '다운로드한 파일을 웹사이트 루트 디렉토리나 원하는 폴더에 업로드하세요'
                        },
                        step3: {
                            title: '3단계: 코드 추가',
                            desc: 'HTML 페이지의 </body> 태그 앞에 다음 코드를 추가하세요:'
                        },
                        step4: {
                            title: '4단계: 효과 즐기기',
                            desc: '페이지를 새로고침하고 마우스를 움직이면 고양이가 나타나서 커서를 따라갑니다!'
                        }
                    },
                    advanced: {
                        title: '🔧 고급 사용법',
                        custom: {
                            title: '커스텀 고양이 이미지',
                            desc: 'oneko.gif를 자신만의 32x32 픽셀 스프라이트로 교체할 수 있습니다:'
                        },
                        animation: {
                            title: '애니메이션 지원 확인',
                            desc: '스크립트는 사용자의 애니메이션 선호도 설정을 자동으로 감지합니다. 사용자가 "모션 줄이기"를 설정했다면 고양이가 나타나지 않습니다.'
                        },
                        remove: {
                            title: '고양이 제거',
                            desc: '동적으로 고양이를 제거해야 한다면 다음 JavaScript 코드를 사용할 수 있습니다:'
                        }
                    },
                    license: {
                        title: '📜 라이선스',
                        free: '✅ 완전 무료 - 개인 및 상업적 용도로 무료 사용',
                        opensource: '✅ 오픈 소스 프로젝트 - MIT 라이선스 기반',
                        attribution: '✅ 저작자 표시 불필요 - 의무사항 아님, 하지만 감사합니다',
                        modify: '✅ 수정 가능 - 수정 및 커스터마이징 허용',
                        source: '원본 프로젝트: oneko.js by adryd325'
                    },
                    back: '← 게임으로 돌아가기',
                    alerts: {
                        complete: '📦 파일 다운로드가 시작되었습니다!\n\n포함된 파일:\n• oneko.js (메인 스크립트)\n• oneko.gif (고양이 스프라이트)\n\n브라우저 다운로드 폴더를 확인해주세요.',
                        single: '📄 oneko.js 다운로드가 시작되었습니다!\n\n참고: 고양이를 제대로 표시하려면 oneko.gif 이미지 파일도 필요합니다.\n원본 프로젝트에서 가져오거나 커스텀 이미지를 사용할 수 있습니다.'
                    }
                }
            },
            
            'ja': {
                // ウェブサイトSEO関連
                'site.title': '🐱 Happy Cat Tavern - 無料オンライン猫ゲーム集',
                'site.description': '可愛い無料オンライン猫ゲームをプレイしよう！ねこあつめ、デスクトップペット猫、もぐらたたき猫版、お腹すいた子猫などが含まれています。ダウンロード不要、ブラウザですぐにプレイできます。',
                
                // ナビゲーション
                'nav.games': 'ゲーム',
                'nav.features': '特徴',
                'nav.about': 'について',
                'nav.contact': 'お問い合わせ',
                'nav.back': '← ゲームに戻る',
                
                // ホームページ
                'hero.title': 'Happy Cat Tavern',
                'hero.subtitle': '魔法の猫の酒場へようこそ！ここでは、あなた自身の神秘的な酒場を経営し、魔法の飲み物を作り、愛らしい猫のお客様に出会い、タイピングスキルを向上させることができます！',
                'hero.cta': 'ゲームを選ぶ',
                
                // ゲーム選択
                'games.title': '猫の冒険を選ぼう',
                'games.tavern.title': 'Happy Cat Tavern',
                'games.tavern.desc': '魔法の酒場を経営してタイピングスキルを向上させよう',
                'games.tavern.status': 'オリジナルゲーム',
                'games.hungry.title': 'Hungry Kitty',
                'games.hungry.desc': 'お腹を空かせた猫が水を避けながら食べ物を食べるのを手伝おう',
                'games.hungry.status': 'ブロック崩しスタイル',
                'games.whack.title': 'Whack-a-Cat',
                'games.whack.desc': '楽しいアーケードゲームで飛び出してくる猫を捕まえよう',
                'games.whack.status': '5レベル',
                'games.kawaii.title': 'Kawaii Cat',
                'games.kawaii.desc': '愛らしい猫で落ちてくる物を受け取ろう',
                'games.kawaii.status': 'モバイル対応',
                'games.neko.title': 'Neko Atsume',
                'games.neko.desc': '一日中バーチャルな庭を訪れる可愛い猫たちを観察しよう',
                'games.neko.status': 'コレクタースタイル',
                'games.desktop.title': 'Desktop Pet Cat',
                'games.desktop.desc': 'マウスカーソルについてくる可愛いピクセル猫',
                'games.desktop.status': 'クラシックスタイル',
                
                // ゲームページ共通
                'game.howto': 'ゲームの遊び方',
                'game.loading': 'ゲーム読み込み中...',
                'game.fullscreen': 'フルスクリーンゲーム',
                'game.tips': 'ゲームのコツ',
                
                // Hungry Kitty ゲームページ
                'hungry.title': '🍽️ Hungry Kitty',
                'hungry.subtitle': 'お腹を空かせた猫が水を避けながらすべての食べ物を食べるのを手伝いましょう。猫はシャワーが嫌いだということを覚えておいてください！',
                'hungry.meta.description': 'お腹を空かせた猫が水を避けながら食べ物を食べるのを手伝いましょう。猫はシャワーが嫌いだということを覚えておいてください！',
                'hungry.howto.title': 'ゲームの遊び方',
                'hungry.howto.start': '<strong>S</strong>キーを押してゲームを開始',
                'hungry.howto.move': '<strong>←</strong>と<strong>→</strong>の矢印キーでパドルを移動',
                'hungry.howto.pause': '<strong>P</strong>キーでゲームを一時停止/再開',
                'hungry.howto.restart': '一時停止中に<strong>R</strong>キーで再スタート',
                'hungry.howto.goal': '猫が水に触れることなく上のすべての食べ物を食べるのを手伝おう！',
                
                // Whack-a-Cat ゲームページ
                'whack.title': '🎯 Whack-a-Cat',
                'whack.subtitle': 'この楽しいアーケードゲームで飛び出してくる猫を素早く捕まえましょう！反応速度をテストしてみてください。',
                'whack.howto.title': 'ゲームの遊び方',
                'whack.howto.click': '飛び出してくる猫をクリックして捕まえる',
                'whack.howto.speed': 'ゲームはどんどん速くなります。集中してください！',
                'whack.howto.levels': '5つの挑戦的なレベルをクリア',
                'whack.howto.score': 'できるだけ高いスコアを目指そう',
                'whack.howto.time': '時間切れになる前にできるだけ多くの猫を捕まえよう',
                
                // Kawaii Cat ゲームページ
                'kawaii.title': '🌟 Kawaii Cat',
                'kawaii.subtitle': '愛らしい猫で落ちてくる様々なアイテムを受け取りましょう。反射神経と技術をテストするゲームです！',
                'kawaii.howto.title': 'ゲームの遊び方',
                'kawaii.howto.move': '矢印キーやタッチスクリーンで猫を移動',
                'kawaii.howto.catch': 'Attrapez les bons objets qui tombent pour marquer des points',
                'kawaii.howto.avoid': 'Évitez les objets dangereux',
                'kawaii.howto.mobile': 'モバイルタッチ操作に対応',
                'kawaii.howto.score': 'ハイスコア記録に挑戦しよう',
                
                // Neko Atsume ゲームページ
                'neko.title': '🏡 ねこあつめ - ハッピーキャットタバーン',
                'neko.subtitle': 'かわいい猫たちがあなたの仮想庭園を訪れる様子を見守りましょう！人気のモバイルゲームをベースにした、この癒しの体験は時間帯によって変化します。',
                'neko.howto.title': 'このゲームについて',
                'neko.howto.watch': '庭での猫たちの活動を観察する',
                'neko.howto.time': '時間の変化に応じて異なるシーンを表示',
                'neko.howto.collect': '様々な種類の愛らしい猫を収集',
                'neko.howto.relax': 'これはリラックスできる観察ゲームです',
                'neko.howto.enjoy': '猫たちとの温かい時間を楽しもう',
                
                // Desktop Pet Cat ゲームページ
                'desktop.title': '🐾 Desktop Pet Cat',
                'desktop.subtitle': 'クラシックなデスクトップペット猫！90年代のクラシックなデスクトップペットのように、可愛いピクセル猫がマウスカーソルについてきます。',
                'desktop.howto.title': '使用方法',
                'desktop.howto.follow': '猫が自動的にマウスの動きについてきます',
                'desktop.howto.actions': '猫の様々な可愛い動作を観察しよう',
                'desktop.howto.sleep': 'マウスを動かさないと猫が眠ります',
                'desktop.howto.scratch': '猫が壁を引っかくなどの動作をします',
                'desktop.howto.classic': '90年代のクラシックなデスクトップペット体験を再現',
                'desktop.download.title': 'ウェブサイト用ダウンロード',
                'desktop.download.desc': 'このデスクトップペット猫を無料でダウンロードして、自分のウェブサイトに追加できます！',
                'desktop.download.complete': '📦 完全パッケージをダウンロード',
                'desktop.download.script': '📄 スクリプトのみダウンロード',
                'desktop.download.example': '👀 使用例を見る',
                'desktop.download.code': 'コード例',
                'desktop.download.usage': '使用方法',
                'desktop.download.step1': '1. ウェブサイトディレクトリにファイルをダウンロード',
                'desktop.download.step2': '2. HTMLページに以下のコードを追加：',
                'desktop.download.step3': '3. 保存してページを更新し、デスクトップペット猫を楽しもう！',
                'desktop.download.alert': '📦 Desktop Pet Cat download started!\n\nIncluded files:\n• oneko.js (main script)\n• oneko.gif (cat sprite)\n\nHow to use:\n1. Upload files to your website\n2. Add to HTML: <script src="oneko.js"><\/script>\n3. Enjoy the cute desktop pet cat!',
                
                // 特徴
                'features.title': 'ゲームの特徴',
                'features.tavern.title': '魔法の酒場を経営',
                'features.tavern.desc': 'あなた独自の猫の酒場を作り、様々な猫のお客様に居心地の良い場所を提供しましょう。',
                'features.brew.title': '魔法の飲み物を作る',
                'features.brew.desc': '材料を集めて魔法の飲み物を醸造し、猫のお客様の特別なリクエストを満たしましょう。',
                'features.typing.title': 'タイピングスキルを向上',
                'features.typing.desc': 'ゲームを楽しみながら自然にタイピング速度と正確性を向上させましょう。',
                'features.cats.title': '愛らしい猫たちと出会う',
                'features.cats.desc': '様々な性格の猫たちと交流し、彼らの物語と特別なクエストを解放しましょう。',
                
                // 概要
                'about.title': 'Happy Cat Tavernについて',
                'about.p1': 'Happy Cat Tavernは、タイピング練習と酒場経営シミュレーションを組み合わせたカジュアルゲームです。魔法に満ちた世界で、酒場の主人として様々な猫のお客様にサービスを提供します。',
                'about.p2': '訪れる各猫には独自の好みと物語があります。彼らと交流しサービスを提供することで、より多くのゲームコンテンツとストーリーラインを解放できます。同時に、タイピングチャレンジメカニズムにより、楽しみながらタイピングスキルを向上させることができます。',
                'about.p3': 'Courier Cat Studioが心を込めて制作し、すべての年齢層のプレイヤー、特に楽しい環境でタイピングスキルを向上させたい方に適しています。',
                
                // フッター
                'footer.game': 'ゲームについて',
                'footer.features': 'ゲームの特徴',
                'footer.updates': 'アップデートログ',
                'footer.faq': 'FAQ',
                'footer.support': 'サポート',
                'footer.developers': '開発者',
                'footer.studio': 'Courier Cat Studio',
                'footer.team': 'チーム紹介',
                'footer.works': '他の作品',
                'footer.contributors': '貢献者',
                'footer.contact': 'お問い合わせ',
                'footer.discord': 'Discord',
                'footer.twitter': 'Twitter',
                'footer.email': 'メール',
                'footer.feedback': 'フィードバック送信',
                'footer.resources': 'リソース',
                'footer.guide': '公式ガイド',
                'footer.community': 'コミュニティディスカッション',
                'footer.creations': 'プレイヤー作品',
                'footer.links': '推奨リンク',
                'footer.copyright': '© 2023 Courier Cat Studio | Happy Cat Tavern - 魔法のタイピング冒険 | 全著作権所有',
                
                // ダウンロードページ
                'download.title': 'Desktop Pet Cat - 無料ダウンロード',
                'download.subtitle': 'クラシックなデスクトップペット猫を無料でダウンロードして、可愛いピクセル猫があなたのウェブブラウジングに付き添うようにしましょう！',
                'download.btn.complete': '📦 完全パッケージをダウンロード (oneko.js + oneko.gif)',
                'download.btn.script': '📄 スクリプトのみダウンロード (oneko.js)',
                'download.btn.example': '👀 使用例を見る',
                'download.size': 'ファイルサイズ: ~8KB | すべての最新ブラウザ対応 | 完全無料使用',
                'download.feature.follow': 'マウス追従',
                'download.feature.follow.desc': '猫がマウスカーソルを賢く追いかけます',
                'download.feature.actions': '可愛い動作',
                'download.feature.actions.desc': '眠る、壁を引っかく、休憩など多くの愛らしい動作',
                'download.feature.lightweight': '軽量',
                'download.feature.lightweight.desc': '8KB ファイルサイズでウェブページの読み込み速度に影響なし',
                'download.feature.easy': '簡単統合',
                'download.feature.easy.desc': '一行のコードでどんなウェブページにも追加可能',
                
                // 共通
                'common.download': '📥 無料ダウンロード',
                'common.back': '← 戻る',
                'common.loading': '読み込み中...',
                'common.error': 'エラーが発生しました',
                'common.success': '成功！',
                'common.fullscreen': 'フルスクリーン',
                'common.exit-fullscreen': '退出',
                
                // Neko Atsume 页面
                neko: {
                    title: '🏡 ねこあつめ - ハッピーキャットタバーン',
                    subtitle: 'かわいい猫たちがあなたの仮想庭園を訪れる様子を見守りましょう！人気のモバイルゲームをベースにした、この癒しの体験は時間帯によって変化します。',
                    howto: {
                        title: 'このゲームについて',
                        relax: 'これは<strong>リラックスできる非インタラクティブな</strong>猫観察体験です',
                        appear: '猫たちが自動的に現れて、あなたの庭でおもちゃと遊びます',
                        time: '庭の外観は<strong>時間帯</strong>によって変化します',
                        personality: '異なる猫たちは異なる性格と好みを持っています',
                        enjoy: 'ただ座ってリラックスし、猫たちを見る楽しさを味わってください！',
                        based: '愛されるモバイルゲーム「ねこあつめ」をベースにしています'
                    },
                    fullscreen: 'フルスクリーン'
                },
                
                // Oneko 页面
                oneko: {
                    title: '🐾 デスクトップペット猫 - ハッピーキャットタバーン',
                    subtitle: '懐かしいデスクトップペット体験！かわいいピクセル猫があなたのマウスカーソルを画面上で追いかける様子を見てください。',
                    howto: {
                        title: '動作原理',
                        move: '画面上で<strong>マウスを動かして</strong>猫が追いかける様子を見てください',
                        chase: '猫はあなたがどこに行っても<strong>カーソルを追いかけます</strong>',
                        rest: '動きを止めると、猫は<strong>座って休憩します</strong>',
                        classic: 'これは1990年代のクラシック<strong>ねこデスクトップペット</strong>の再現です',
                        sprite: '猫は画面上に小さな<strong>ピクセルスプライト</strong>として現れます',
                        patterns: '異なるパターンでマウスを動かして、猫の反応を見てください！'
                    },
                    demo: {
                        title: '🎮 インタラクティブデモエリア',
                        description: 'この領域でマウスを動かして、デスクトップペット猫の動作を見てください！',
                        hint: '猫が現れてカーソルの動きを追いかけます'
                    },
                    download: {
                        title: '📥 この効果が気に入りましたか？あなたのウェブサイトに無料でダウンロード！',
                        complete: '📦 完全パッケージをダウンロード',
                        tutorial: '📋 詳細チュートリアル',
                        oneline: '✨ 一行のコードでどんなウェブページにも追加：',
                        features: '💡 完全無料で使用 | 個人・商用ウェブサイト | わずか8KBサイズ',
                        alert: '📦 デスクトップペット猫のダウンロードが開始されました！\n\n含まれるファイル：\n• oneko.js（メインスクリプト）\n• oneko.gif（猫スプライト）\n\n使用方法：\n1. ファイルをウェブサイトにアップロード\n2. HTMLに追加：<script src="oneko.js"><\/script>\n3. かわいいデスクトップペット猫をお楽しみください！'
                    },
                    fullscreen: 'フルスクリーン'
                },
                
                // Download 页面
                download: {
                    title: '🐾 デスクトップペット猫ダウンロード - ハッピーキャットタバーン',
                    header: {
                        title: '🐾 デスクトップペット猫',
                        subtitle: 'クラシックデスクトップペット猫を無料でダウンロードして、かわいいピクセル猫があなたのウェブブラウジングに付き添うようにしましょう！'
                    },
                    section: {
                        title: '📥 今すぐダウンロード'
                    },
                    buttons: {
                        complete: '📦 完全パッケージをダウンロード（oneko.js + oneko.gif）',
                        script: '📄 スクリプトのみダウンロード（oneko.js）',
                        example: '👀 使用例を見る'
                    },
                    info: 'ファイルサイズ：約8KB | すべての最新ブラウザと互換 | 完全無料で使用',
                    features: {
                        follow: {
                            title: 'マウス追従',
                            desc: '猫がマウスカーソルを賢く追いかけます'
                        },
                        actions: {
                            title: 'かわいい動作',
                            desc: '眠る、壁を引っかく、休憩など多くの愛らしい動作'
                        },
                        lightweight: {
                            title: '軽量',
                            desc: 'わずか8KBサイズで、ウェブページの読み込み速度に影響しません'
                        },
                        easy: {
                            title: '簡単統合',
                            desc: '一行のコードでどんなウェブページにも追加'
                        }
                    },
                    usage: {
                        title: '🚀 使用方法',
                        step1: {
                            title: 'ステップ1：ファイルをダウンロード',
                            desc: '上のダウンロードボタンをクリックして、oneko.jsとoneko.gifファイルを取得してください'
                        },
                        step2: {
                            title: 'ステップ2：ウェブサイトにアップロード',
                            desc: 'ダウンロードしたファイルをウェブサイトのルートディレクトリまたは任意のフォルダにアップロードしてください'
                        },
                        step3: {
                            title: 'ステップ3：コードを追加',
                            desc: 'HTML ページの</body>タグの前に以下のコードを追加してください：'
                        },
                        step4: {
                            title: 'ステップ4：効果を楽しむ',
                            desc: 'ページを更新してマウスを動かすと、猫が現れてカーソルを追いかけます！'
                        }
                    },
                    advanced: {
                        title: '🔧 高度な使用法',
                        custom: {
                            title: 'カスタム猫画像',
                            desc: 'oneko.gifを自分の32x32ピクセルスプライトに置き換えることができます：'
                        },
                        animation: {
                            title: 'アニメーションサポートの確認',
                            desc: 'スクリプトはユーザーのアニメーション設定を自動的に検出します。ユーザーが「モーションを減らす」を設定している場合、猫は現れません。'
                        },
                        remove: {
                            title: '猫を削除',
                            desc: '動的に猫を削除する必要がある場合は、以下のJavaScriptコードを使用できます：'
                        }
                    },
                    license: {
                        title: '📜 ライセンス',
                        free: '✅ 完全無料 - 個人・商用利用ともに無料',
                        opensource: '✅ オープンソースプロジェクト - MITライセンスベース',
                        attribution: '✅ 帰属表示不要 - 必須ではありませんが、感謝します',
                        modify: '✅ 変更可能 - 変更・カスタマイズ許可',
                        source: '元プロジェクト：oneko.js by adryd325'
                    },
                    back: '← ゲームに戻る',
                    alerts: {
                        complete: '📦 ファイルダウンロードが開始されました！\n\n含まれるファイル：\n• oneko.js（メインスクリプト）\n• oneko.gif（猫スプライト）\n\nブラウザのダウンロードフォルダを確認してください。',
                        single: '📄 oneko.jsダウンロードが開始されました！\n\n注意：猫を正しく表示するにはoneko.gif画像ファイルも必要です。\n元プロジェクトから取得するか、カスタム画像を使用できます。'
                    }
                }
            },
            
            'fr': {
                // SEO du site web
                'site.title': '🐱 Happy Cat Tavern - Collection de Jeux de Chats Gratuits en Ligne',
                'site.description': 'Jouez à d\'adorables jeux de chats gratuits en ligne ! La collection comprend Neko Atsume, Chat de Bureau, Whack-a-Cat, Chaton Affamé et plus encore. Aucun téléchargement requis, jouez instantanément dans votre navigateur.',
                
                // Navigation
                'nav.games': 'Jeux',
                'nav.features': 'Fonctionnalités',
                'nav.about': 'À propos',
                'nav.contact': 'Contact',
                'nav.back': '← Retour aux jeux',
                
                // Page d'accueil
                'hero.title': 'Happy Cat Tavern',
                'hero.subtitle': 'Bienvenue dans la taverne magique des chats, où vous pouvez gérer votre propre taverne mystique, créer des boissons enchantées, rencontrer d\'adorables clients félins et améliorer vos compétences de frappe !',
                'hero.cta': 'Choisissez votre jeu',
                
                // Sélection de jeux
                'games.title': 'Choisissez votre aventure féline',
                'games.tavern.title': 'Happy Cat Tavern',
                'games.tavern.desc': 'Gérez votre taverne magique et améliorez vos compétences de frappe',
                'games.tavern.status': 'Jeu original',
                'games.hungry.title': 'Hungry Kitty',
                'games.hungry.desc': 'Aidez le chat affamé à manger de la nourriture tout en évitant l\'eau',
                'games.hungry.status': 'Style casse-briques',
                'games.whack.title': 'Whack-a-Cat',
                'games.whack.desc': 'Attrapez les chats qui surgissent dans ce jeu d\'arcade amusant',
                'games.whack.status': '5 niveaux',
                'games.kawaii.title': 'Kawaii Cat',
                'games.kawaii.desc': 'Attrapez les objets qui tombent avec votre chat adorable',
                'games.kawaii.status': 'Compatible mobile',
                'games.neko.title': 'Neko Atsume',
                'games.neko.desc': 'Observez de mignons chats visiter votre cour virtuelle toute la journée',
                'games.neko.status': 'Style collection',
                'games.desktop.title': 'Desktop Pet Cat',
                'games.desktop.desc': 'Un mignon chat pixel qui suit votre curseur de souris',
                'games.desktop.status': 'Style classique',
                
                // Pages de jeux communes
                'game.howto': 'Comment jouer',
                'game.loading': 'Chargement du jeu...',
                'game.fullscreen': 'Jeu plein écran',
                'game.tips': 'Conseils de jeu',
                
                // Page du jeu Hungry Kitty
                'hungry.title': '🍽️ Hungry Kitty',
                'hungry.subtitle': 'Aidez le chat affamé à manger toute la nourriture tout en évitant l\'eau. Rappelez-vous, les chats détestent les douches !',
                'hungry.meta.description': 'Aidez le chat affamé à manger toute la nourriture tout en évitant l\'eau. Rappelez-vous, les chats détestent les douches !',
                'hungry.howto.title': 'Comment jouer',
                'hungry.howto.start': 'Appuyez sur <strong>S</strong> pour commencer le jeu',
                'hungry.howto.move': 'Utilisez les touches fléchées <strong>←</strong> et <strong>→</strong> pour déplacer la raquette',
                'hungry.howto.pause': 'Appuyez sur <strong>P</strong> pour mettre en pause/reprendre le jeu',
                'hungry.howto.restart': 'Appuyez sur <strong>R</strong> pour redémarrer en pause',
                'hungry.howto.goal': 'Aidez le chat à manger toute la nourriture au-dessus sans toucher l\'eau !',
                
                // Page du jeu Whack-a-Cat
                'whack.title': '🎯 Whack-a-Cat',
                'whack.subtitle': 'Attrapez rapidement les chats qui surgissent dans ce jeu d\'arcade amusant ! Testez votre vitesse de réaction.',
                'whack.howto.title': 'Comment jouer',
                'whack.howto.click': 'Cliquez sur les chats qui surgissent pour les attraper',
                'whack.howto.speed': 'Le jeu devient de plus en plus rapide, restez concentré !',
                'whack.howto.levels': 'Complétez 5 niveaux difficiles',
                'whack.howto.score': 'Essayez d\'obtenir le score le plus élevé possible',
                'whack.howto.time': 'Attrapez autant de chats que possible avant la fin du temps',
                
                // Page du jeu Kawaii Cat
                'kawaii.title': '🌟 Kawaii Cat',
                'kawaii.subtitle': 'Attrapez les objets qui tombent avec votre chat adorable. C\'est un jeu qui teste vos réflexes et vos compétences !',
                'kawaii.howto.title': 'Comment jouer',
                'kawaii.howto.move': 'Utilisez les touches fléchées ou l\'écran tactile pour déplacer le chat',
                'kawaii.howto.catch': 'Attrapez les bons objets qui tombent pour marquer des points',
                'kawaii.howto.avoid': 'Évitez les objets dangereux',
                'kawaii.howto.mobile': 'Prend en charge les contrôles tactiles mobiles',
                'kawaii.howto.score': 'Défiez votre record de score élevé',
                
                // Page du jeu Neko Atsume
                'neko.title': '🏡 Neko Atsume - Happy Cat Tavern',
                'neko.subtitle': 'Regardez des chats adorables visiter votre cour virtuelle ! Basé sur le jeu mobile populaire, cette expérience relaxante change avec le temps de la journée.',
                'neko.howto.title': 'About This Game',
                'neko.howto.watch': 'Observez les activités des chats dans la cour',
                'neko.howto.time': 'The game shows different scenes based on time changes',
                'neko.howto.collect': 'Collectionnez différents types de chats adorables',
                'neko.howto.relax': 'C\'est un jeu d\'observation relaxant',
                'neko.howto.enjoy': 'Profitez de moments chaleureux avec les chats',
                
                // Page du jeu Desktop Pet Cat
                'desktop.title': '🐾 Desktop Pet Cat',
                'desktop.subtitle': 'Chat de bureau classique ! Un mignon chat pixel suivra votre curseur de souris, comme les animaux de bureau classiques des années 90.',
                'desktop.howto.title': 'Instructions',
                'desktop.howto.follow': 'Le chat suivra automatiquement le mouvement de votre souris',
                'desktop.howto.actions': 'Observez les diverses actions mignonnes du chat',
                'desktop.howto.sleep': 'Le chat dormira quand vous ne bougez pas la souris',
                'desktop.howto.scratch': 'Le chat gratte les murs et fait d\'autres actions',
                'desktop.howto.classic': 'Recréez l\'expérience classique des animaux de bureau des années 90',
                'desktop.download.title': 'Télécharger pour votre site web',
                'desktop.download.desc': 'Vous pouvez télécharger gratuitement ce chat de bureau et l\'ajouter à votre propre site web !',
                'desktop.download.complete': '📦 Télécharger le package complet',
                'desktop.download.script': '📄 Télécharger le script seulement',
                'desktop.download.example': '👀 Voir l\'exemple d\'utilisation',
                'desktop.download.code': 'Exemple de code',
                'desktop.download.usage': 'Instructions d\'utilisation',
                'desktop.download.step1': '1. Téléchargez les fichiers dans votre répertoire de site web',
                'desktop.download.step2': '2. Ajoutez le code suivant à votre page HTML :',
                'desktop.download.step3': '3. Sauvegardez et actualisez la page, profitez de votre chat de bureau !',
                'desktop.download.alert': '📦 Desktop Pet Cat download started!\n\nIncluded files:\n• oneko.js (main script)\n• oneko.gif (cat sprite)\n\nHow to use:\n1. Upload files to your website\n2. Add to HTML: <script src="oneko.js"><\/script>\n3. Enjoy the cute desktop pet cat!',
                
                // Fonctionnalités
                'features.title': 'Fonctionnalités du jeu',
                'features.tavern.title': 'Gérez votre taverne magique',
                'features.tavern.desc': 'Créez votre propre taverne de chats unique et offrez un endroit confortable à divers clients félins.',
                'features.brew.title': 'Créez des boissons magiques',
                'features.brew.desc': 'Collectez des ingrédients et brassez des boissons magiques pour satisfaire les demandes spéciales de vos clients chats.',
                'features.typing.title': 'Améliorez vos compétences de frappe',
                'features.typing.desc': 'Améliorez naturellement votre vitesse et précision de frappe tout en vous amusant dans le jeu.',
                'features.cats.title': 'Rencontrez des chats adorables',
                'features.cats.desc': 'Interagissez avec des chats de diverses personnalités, débloquez leurs histoires et quêtes spéciales.',
                
                // À propos
                'about.title': 'À propos de Happy Cat Tavern',
                'about.p1': 'Happy Cat Tavern est un jeu décontracté qui combine la pratique de la frappe avec la simulation de gestion de taverne. Dans un monde plein de magie, vous servirez en tant que propriétaire de taverne, fournissant des services à toutes sortes de clients chats.',
                'about.p2': 'Chaque chat visiteur a ses propres préférences et histoires uniques. En interagissant avec eux et en fournissant des services, vous débloquerez plus de contenu de jeu et de scénarios. Pendant ce temps, le mécanisme de défi de frappe vous permet d\'améliorer vos compétences de frappe tout en vous amusant.',
                'about.p3': 'Créé avec soin par Courier Cat Studio, il convient aux joueurs de tous âges, en particulier ceux qui veulent améliorer leurs compétences de frappe dans un environnement agréable.',
                
                // Pied de page
                'footer.game': 'À propos du jeu',
                'footer.features': 'Fonctionnalités du jeu',
                'footer.updates': 'Journal des mises à jour',
                'footer.faq': 'FAQ',
                'footer.support': 'Support',
                'footer.developers': 'Développeurs',
                'footer.studio': 'Courier Cat Studio',
                'footer.team': 'Présentation de l\'équipe',
                'footer.works': 'Autres œuvres',
                'footer.contributors': 'Contributeurs',
                'footer.contact': 'Nous contacter',
                'footer.discord': 'Discord',
                'footer.twitter': 'Twitter',
                'footer.email': 'Email',
                'footer.feedback': 'Soumettre des commentaires',
                'footer.resources': 'Ressources',
                'footer.guide': 'Guide officiel',
                'footer.community': 'Discussion communautaire',
                'footer.creations': 'Créations des joueurs',
                'footer.links': 'Liens recommandés',
                'footer.copyright': '© 2023 Courier Cat Studio | Happy Cat Tavern - Une aventure de frappe magique | Tous droits réservés',
                
                // Page de téléchargement
                'download.title': 'Desktop Pet Cat - Téléchargement gratuit',
                'download.subtitle': 'Téléchargez gratuitement le chat de bureau classique et laissez le mignon chat pixel accompagner votre navigation web !',
                'download.btn.complete': '📦 Télécharger le package complet (oneko.js + oneko.gif)',
                'download.btn.script': '📄 Télécharger le script seulement (oneko.js)',
                'download.btn.example': '👀 Voir l\'exemple d\'utilisation',
                'download.size': 'Taille du fichier : ~8KB | Compatible avec tous les navigateurs modernes | Complètement gratuit à utiliser',
                'download.feature.follow': 'Suivre la souris',
                'download.feature.follow.desc': 'Le chat suivra intelligemment votre curseur de souris',
                'download.feature.actions': 'Actions mignonnes',
                'download.feature.actions.desc': 'Dormir, gratter les murs, se reposer et bien d\'autres actions adorables',
                'download.feature.lightweight': 'Léger',
                'download.feature.lightweight.desc': 'Seulement 8KB de taille, n\'affecte pas la vitesse de chargement de la page web',
                'download.feature.easy': 'Intégration Facile',
                'download.feature.easy.desc': 'Ajoutez à n\'importe quelle page web avec juste une ligne de code',
                
                // Commun
                'common.download': '📥 Téléchargement gratuit',
                'common.back': '← Retour',
                'common.loading': 'Chargement...',
                'common.error': 'Une erreur s\'est produite',
                'common.success': 'Succès !',
                'common.fullscreen': 'Plein écran',
                'common.exit-fullscreen': 'Quitter',
                
                // Neko Atsume 页面
                neko: {
                    title: '🏡 Neko Atsume - Happy Cat Tavern',
                    subtitle: 'Watch adorable cats visit your virtual yard! Based on the popular mobile game, this relaxing experience changes with the time of day.',
                    howto: {
                        title: 'About This Game',
                        relax: 'This is a <strong>relaxing, non-interactive</strong> cat watching experience',
                        appear: 'Cats will automatically appear and play with toys in your yard',
                        time: 'The yard changes appearance based on the <strong>time of day</strong>',
                        personality: 'Different cats have different personalities and preferences',
                        enjoy: 'Just sit back, relax, and enjoy watching the cats!',
                        based: 'Based on the beloved mobile game "Neko Atsume: Kitty Collector"'
                    },
                    fullscreen: 'Fullscreen'
                },
                
                // Oneko 页面
                oneko: {
                    title: '🐾 Desktop Pet Cat - Happy Cat Tavern',
                    subtitle: 'A nostalgic desktop pet experience! Watch as a cute pixel cat follows your mouse cursor around the screen.',
                    howto: {
                        title: 'How It Works',
                        move: '<strong>Move your mouse</strong> around the screen to see the cat follow',
                        chase: 'The cat will <strong>chase your cursor</strong> wherever you go',
                        rest: 'When you stop moving, the cat will <strong>sit and rest</strong>',
                        classic: 'This is a recreation of the classic <strong>Neko desktop pet</strong> from the 1990s',
                        sprite: 'The cat appears as a small <strong>pixel sprite</strong> on your screen',
                        patterns: 'Try moving your mouse in different patterns and watch the cat react!'
                    },
                    demo: {
                        title: '🎮 Interactive Demo Area',
                        description: 'Move your mouse around this area to see the desktop pet cat in action!',
                        hint: 'The cat will appear and follow your cursor movements'
                    },
                    download: {
                        title: '📥 Like this effect? Download it for free to your website!',
                        complete: '📦 Download Complete Package',
                        tutorial: '📋 Detailed Tutorial',
                        oneline: '✨ Add to any webpage with just one line of code:',
                        features: '💡 Completely free to use | Personal and commercial websites | Only 8KB size',
                        alert: '📦 Desktop Pet Cat download started!\n\nIncluded files:\n• oneko.js (main script)\n• oneko.gif (cat sprite)\n\nHow to use:\n1. Upload files to your website\n2. Add to HTML: <script src="oneko.js"><\/script>\n3. Enjoy the cute desktop pet cat!'
                    },
                    fullscreen: 'Fullscreen'
                },
                
                // Download 页面
                download: {
                    title: '🐾 Desktop Pet Cat Download - Happy Cat Tavern',
                    header: {
                        title: '🐾 Desktop Pet Cat',
                        subtitle: 'Download the classic desktop pet cat for free, let the cute pixel cat accompany your web browsing!'
                    },
                    section: {
                        title: '📥 Download Now'
                    },
                    buttons: {
                        complete: '📦 Download Complete Package (oneko.js + oneko.gif)',
                        script: '📄 Download Script Only (oneko.js)',
                        example: '👀 View Usage Example'
                    },
                    info: 'File size: ~8KB | Compatible with all modern browsers | Completely free to use',
                    features: {
                        follow: {
                            title: 'Mouse Following',
                            desc: 'The cat will intelligently follow your mouse cursor'
                        },
                        actions: {
                            title: 'Cute Actions',
                            desc: 'Sleep, scratch walls, rest and many other adorable actions'
                        },
                        lightweight: {
                            title: 'Lightweight',
                            desc: 'Only 8KB size, does not affect webpage loading speed'
                        },
                        easy: {
                            title: 'Easy Integration',
                            desc: 'Add to any webpage with just one line of code'
                        }
                    },
                    usage: {
                        title: '🚀 How to Use',
                        step1: {
                            title: 'Step 1: Download Files',
                            desc: 'Click the download button above to get oneko.js and oneko.gif files'
                        },
                        step2: {
                            title: 'Step 2: Upload to Website',
                            desc: 'Upload the downloaded files to your website root directory or any folder'
                        },
                        step3: {
                            title: 'Step 3: Add Code',
                            desc: 'Add the following code before the </body> tag in your HTML page:'
                        },
                        step4: {
                            title: 'Step 4: Enjoy the Effect',
                            desc: 'Refresh the page, move your mouse, and the cat will appear and follow your cursor!'
                        }
                    },
                    advanced: {
                        title: '🔧 Advanced Usage',
                        custom: {
                            title: 'Custom Cat Image',
                            desc: 'You can replace oneko.gif with your own 32x32 pixel sprite:'
                        },
                        animation: {
                            title: 'Check Animation Support',
                            desc: 'The script automatically detects user animation preferences. If the user has set "reduce motion", the cat will not appear.'
                        },
                        remove: {
                            title: 'Remove Cat',
                            desc: 'If you need to dynamically remove the cat, you can use the following JavaScript code:'
                        }
                    },
                    license: {
                        title: '📜 License',
                        free: '✅ Completely Free - Free for personal and commercial use',
                        opensource: '✅ Open Source Project - Based on MIT License',
                        attribution: '✅ No Attribution Required - Not mandatory, but appreciated',
                        modify: '✅ Modifiable - Allowed to modify and customize',
                        source: 'Original project: oneko.js by adryd325'
                    },
                    back: '← Back to Games',
                    alerts: {
                        complete: '📦 File download started!\n\nIncluded files:\n• oneko.js (main script)\n• oneko.gif (cat sprite)\n\nPlease check your browser download folder.',
                        single: '📄 oneko.js download started!\n\nNote: You also need the oneko.gif image file to display the cat properly.\nYou can get it from the original project or use a custom image.'
                    }
                }
            }
        };
    }
    
    // 获取存储的语言
    getStoredLanguage() {
        return localStorage.getItem('happyCatTavern_language');
    }
    
    // 检测浏览器语言
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        
        // 支持的语言列表
        const supportedLangs = ['zh', 'en', 'ko', 'ja', 'fr'];
        
        return supportedLangs.includes(langCode) ? langCode : 'en';
    }
    
    // 设置语言
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('happyCatTavern_language', lang);
            this.updatePageContent();
            this.updateLanguageSelector();
        }
    }
    
    // 获取翻译文本
    t(key) {
        return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
    }
    
    // 更新页面内容
    updatePageContent() {
        // 更新所有带有 data-i18n 属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // 更新meta标签的content属性
        const metaElements = document.querySelectorAll('[data-i18n-content]');
        metaElements.forEach(element => {
            const key = element.getAttribute('data-i18n-content');
            const translation = this.t(key);
            if (translation) {
                element.setAttribute('content', translation);
            }
        });
        
        // 更新页面标题
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            const key = titleElement.getAttribute('data-i18n');
            const translation = this.t(key);
            if (translation) {
                document.title = translation;
            }
        }
        
        // 更新语言选择器
        this.updateLanguageSelector();
    }
    
    // 更新语言选择器
    updateLanguageSelector() {
        const selector = document.querySelector('.language-selector select');
        if (selector) {
            selector.value = this.currentLang;
        }
        
        // 更新语言选择器按钮的激活状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }
    
    // 初始化
    init() {
        this.createLanguageSelector();
        this.updatePageContent();
        this.updateLanguageSelector();
    }
    
    // 创建语言选择器
    createLanguageSelector() {
        // 检查是否已经存在语言选择器
        const existingSelector = document.querySelector('.language-selector select');
        if (existingSelector) {
            // 如果已经存在select类型的语言选择器，直接设置事件监听器
            this.setupSelectLanguageSelectorEvents();
            return;
        }
        
        // 检查是否已经存在下拉式语言选择器
        const existingDropdown = document.querySelector('.lang-dropdown');
        if (existingDropdown) {
            // 如果已经存在，直接设置事件监听器
            this.setupLanguageSelectorEvents();
            return;
        }
        
        const languages = {
            'zh': '中文',
            'en': 'English',
            'ko': '한국어',
            'ja': '日本語',
            'fr': 'Français'
        };
        
        // 创建语言选择器HTML
        const selectorHTML = `
            <div class="language-selector">
                <div class="lang-dropdown">
                    <button class="lang-current">
                        <span class="lang-flag">${this.getFlagEmoji(this.currentLang)}</span>
                        <span class="lang-name">${languages[this.currentLang]}</span>
                        <span class="lang-arrow">▼</span>
                    </button>
                    <div class="lang-options">
                        ${Object.entries(languages).map(([code, name]) => `
                            <button class="lang-btn ${code === this.currentLang ? 'active' : ''}" data-lang="${code}">
                                <span class="lang-flag">${this.getFlagEmoji(code)}</span>
                                <span class="lang-name">${name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // 插入到导航栏
        const navbar = document.querySelector('.nav-container');
        if (navbar) {
            navbar.insertAdjacentHTML('beforeend', selectorHTML);
            
            // 添加事件监听器
            this.setupLanguageSelectorEvents();
        }
    }
    
    // 设置select类型语言选择器的事件监听器
    setupSelectLanguageSelectorEvents() {
        const selectElement = document.querySelector('.language-selector select');
        if (selectElement) {
            selectElement.addEventListener('change', (e) => {
                const selectedLang = e.target.value;
                this.setLanguage(selectedLang);
            });
        }
    }
    
    // 获取国旗emoji
    getFlagEmoji(langCode) {
        const flags = {
            'zh': '🇨🇳',
            'en': '🇺🇸',
            'ko': '🇰🇷',
            'ja': '🇯🇵',
            'fr': '🇫🇷'
        };
        return flags[langCode] || '🌐';
    }
    
    // 设置语言选择器事件
    setupLanguageSelectorEvents() {
        const languageButtons = document.querySelectorAll('.lang-dropdown .lang-option');
        languageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
    
    // 设置Select类型语言选择器事件监听器
    setupSelectLanguageSelectorEvents() {
        const languageSelect = document.querySelector('.language-selector select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const lang = e.target.value;
                this.setLanguage(lang);
            });
            
            // 设置当前语言为选中状态
            languageSelect.value = this.currentLanguage;
        }
    }
}

// 全局实例
window.i18n = new I18n();

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.i18n.init();
}); 