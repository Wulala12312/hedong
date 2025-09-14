import React, { useState, useEffect } from 'react';
import { Mountain, MapPin, Calendar, Users, BookOpen, Phone, Mail } from 'lucide-react';
import { ATTRACTION_IMAGES, HERO_IMAGE, CULTURE_IMAGES } from './components/ImageConfig';

function App() {
  const [activeTab, setActiveTab] = useState('attractions');
  const [scrolled, setScrolled] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showTab = (tabName: string) => {
    setActiveTab(tabName);
    scrollToContent();
  };

  const attractionDetails: { [key: string]: { title: string; content: string } } = {
    furongding: {
      title: "芙蓉顶详细介绍",
      content: "芙蓉顶，海拔1435米，位于清远市连山县禾洞镇西北方向，与海拔1417米的金子山遥遥对望。作为广东449座千米大山中的一座，芙蓉顶虽然名不经传，却有着独特的地理意义——它是粤湘桂三省的界山，能够真正实现一脚踏三省的愿望，是广东仅有的三个能实现一脚踏三省的地方之一。芙蓉顶是国内'三横山脉之一南岭山脉'连山境内的重要山峰，地处广东省西北隅，位于粤湘桂三省结合部。这里地势高峻、山岳连绵不绝，原始丛林郁郁葱葱，山脊草坡绝美。站在芙蓉顶山顶，可以同时俯瞰广东、湖南、广西三省的壮美山川，这种独特的地理体验令人震撼。山上原始森林茂密，生态环境保护良好，空气清新，是天然的大氧吧。对于户外爱好者来说，芙蓉顶绝对是不能错过的户外天堂，这里的登山体验、自然风光和地理奇观都让人难忘。"
    },
    jinzishan: {
      title: "金子山详细介绍", 
      content: "金子山位于连山县境内，以其独特的山势和奇峰异石而闻名。山峰造型奇特，有的像雄鹰展翅，有的像仙女下凡，充满了神话色彩，因山石在阳光照射下闪闪发光如金子般耀眼而得名。这里的山势险峻秀美，登山路径富有挑战性，是登山爱好者的理想目的地。山中植被丰富，有多种珍稀植物和野生动物，生态环境保护良好。山上有多处观景台，可以欣赏到壮美的山景和田园风光，视野开阔，景色宜人。当地壮族瑶族同胞世代在此生活，留下了许多美丽的传说故事。金子山四季景色各异，春天山花烂漫，夏天绿树成荫，秋天红叶满山，冬天雾凇晶莹，是摄影和写生的绝佳场所。这里空气清新，环境幽静，是远离城市喧嚣、亲近自然的好去处。"
    },
    dawushan: {
      title: "大雾山详细介绍",
      content: "大雾山因常年云雾缭绕而得名，是连山县著名的生态旅游景区。这里海拔适中，气候宜人，森林覆盖率达95%以上，被誉为'天然氧吧'和'绿色宝库'。山中古树参天，有许多百年以上的古树名木，其中不乏珍稀树种。大雾山的云雾景观是其最大特色，每当清晨和傍晚，山间云雾升腾，如梦如幻，仿佛置身仙境。这里的空气质量极佳，负氧离子含量是城市的数十倍，对人体健康极为有益。山中有多条徒步小径，沿途可以观赏到丰富的植物群落和野生动物。春季时节，山中杜鹃花盛开，漫山遍野的花海令人陶醉。夏季这里是避暑胜地，温度比山下低5-8度，清凉宜人。秋季层林尽染，红叶满山，是观赏秋色的最佳时节。大雾山还是中草药的宝库，山中生长着多种珍贵药材，当地村民世代采药为生，积累了丰富的中医药知识。"
    },
    huanghoushan: {
      title: "皇后山详细介绍",
      content: "皇后山位于连山县境内，因其山形秀美如皇后凤冠而得名，是当地著名的文化名山。据当地壮族传说，古代有一位美丽善良的壮族皇后在此修行成仙，因此这座山被称为皇后山，至今仍有许多关于皇后的美丽传说流传。山势优美，植被茂密，有多处天然景观和人文遗迹。山顶有一座古老的庙宇，是当地村民祈福的圣地，每年都有许多信众前来朝拜。皇后山的日出景观特别壮美，每当旭日东升时，金光洒向山峦，云海翻腾，宛如仙境。山中有多条登山小径，沿途可以欣赏到丰富的自然景观和人文景点。这里的植物种类繁多，有珍稀的兰花和其他观赏植物。山腰处有一眼清泉，泉水甘甜清冽，被当地人称为'皇后泉'，传说喝了这里的泉水可以保佑平安健康。皇后山不仅是自然景观的宝库，更是壮族文化的重要载体，承载着深厚的历史文化内涵。"
    },
    heishan: {
      title: "黑山梯田详细介绍",
      content: "黑山梯田是连山县最具代表性的农业景观之一，位于海拔600-1000米的山坡上，总面积达数千亩。这些梯田是当地壮族瑶族先民经过数百年辛勤劳作开垦而成，体现了山区人民的智慧和毅力。梯田依山而建，层层叠叠，从山脚一直延伸到山顶，远远望去如同天梯一般壮观。春季时节，梯田注水准备插秧，在阳光照射下波光粼粼，如同镜面一般美丽。夏季稻苗青翠，绿浪翻滚，生机盎然。秋季稻谷成熟，金黄一片，丰收的喜悦洋溢在每一层梯田上。冬季虽然稻田休耕，但梯田的轮廓依然清晰可见，别有一番韵味。黑山梯田不仅是美丽的景观，更是重要的农业文化遗产，这里种植的是优质的山区大米，口感香甜，营养丰富。当地农民至今仍保持着传统的耕作方式，使用水牛犁田，手工插秧，体现了人与自然和谐共生的理念。"
    },
    oujia: {
      title: "欧家梯田详细介绍",
      content: "欧家梯田被誉为'广东最美梯田'，位于连山县太保镇欧家村，是粤北地区规模最大、保存最完整的梯田群。这片梯田始建于宋代，距今已有近千年历史，总面积超过1000亩，最高处海拔1100多米，垂直落差达400多米。欧家梯田的美在于其规模宏大和层次分明，从山脚到山顶共有1000多层梯田，远远望去如同巨大的天梯直通云霄。每年春季灌水期间，梯田如镜面般反射天空，形成'天空之镜'的奇观。夏季绿意盎然，秋季金黄满山，冬季线条优美，四季各有不同的美景。这里的日出日落景观特别壮美，每当朝阳初升或夕阳西下时，梯田在光影变化中呈现出不同的色彩，美不胜收。欧家梯田不仅是自然景观，更是农耕文化的活化石，当地村民世代在此耕作，保持着传统的农业生产方式。这里种植的大米品质优良，是真正的绿色有机食品。近年来，欧家梯田已成为摄影爱好者和游客的热门目的地。"
    },
    zhengqi: {
      title: "蒙峒古村详细介绍",
      content: "蒙峒古村位于连山县禾洞镇，是一个保存完好的壮族瑶族传统村落，被誉为'活着的民族文化博物馆'。这里居住着纯朴的壮族瑶族同胞，至今仍保持着传统的生活方式和民族习俗。村中的建筑多为传统的干栏式木楼，依山而建，错落有致，与周围的自然环境完美融合。这些木楼采用传统的榫卯结构工艺建造，体现了古代建筑的智慧和精湛技艺。村民们穿着传统的民族服装，说着本民族语言，保持着古老的生活习惯。在这里，游客可以观看到正宗的壮族瑶族歌舞表演，品尝到地道的民族美食，购买到精美的手工艺品。村中还有传统的织锦、刺绣、竹编等手工艺作坊，游客可以亲自体验制作过程。蒙峒古村的自然环境也十分优美，四周青山环抱，溪水潺潺，空气清新。这里是体验壮瑶民族文化、感受原生态乡村生活的最佳场所，让游客在现代化快节奏生活中找到一片宁静的净土。"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-green-800/95 backdrop-blur-sm shadow-xl' : 'bg-gradient-to-r from-green-800 to-green-700'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Mountain className="w-8 h-8 text-green-200" />
              <div className="text-center lg:text-left">
                <h1 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
                  连山壮族瑶族自治县
                </h1>
                <p className="text-green-200 text-sm font-medium">禾洞镇旅游宣传网站</p>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-2 lg:gap-6">
              {[
                { key: 'attractions', label: '景点详情', icon: MapPin },
                { key: 'routes', label: '旅游路线', icon: Mountain },
                { key: 'events', label: '节庆活动', icon: Calendar },
                { key: 'culture', label: '传统风俗', icon: Users },
                { key: 'study', label: '研学实践', icon: BookOpen }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => showTab(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-white text-green-800 shadow-lg' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-green-900/80 to-green-800/80 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 to-green-800/70" />
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            禾洞山水，壮瑶风情
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            探索连山壮族瑶族自治县禾洞镇的秀美山川与民族文化魅力
          </p>
          <button
            onClick={scrollToContent}
            className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
          >
            开始探索
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-16" id="content">
        <div className="container mx-auto px-4 py-12">
          
          {/* Attractions Tab */}
          {activeTab === 'attractions' && (
            <div className="animate-fadeIn">
              {!selectedAttraction ? (
                <>
                  <h2 className="text-4xl font-bold text-center mb-12 text-green-800">禾洞镇周边景点</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        id: "furongding",
                        name: "芙蓉顶",
                        image: ATTRACTION_IMAGES.furongding,
                        description: "海拔1435米，位于粤湘桂三省交界处，是广东仅有的三个能实现一脚踏三省的地方之一。",
                        tags: ["一脚踏三省", "界山奇观", "户外天堂"]
                      },
                      {
                        id: "jinzishan",
                        name: "金子山",
                        image: ATTRACTION_IMAGES.jinzishan,
                        description: "以奇峰异石著称，山势险峻秀美，四季景色各异，是登山和摄影爱好者的天堂。",
                        tags: ["奇峰异石", "山势险峻", "摄影胜地"]
                      },
                      {
                        id: "dawushan",
                        name: "大雾山",
                        image: ATTRACTION_IMAGES.dawushan,
                        description: "常年云雾缭绕，植被丰富，是天然的氧吧，适合避暑和生态旅游。",
                        tags: ["云雾仙境", "生态氧吧", "避暑胜地"]
                      },
                      {
                        id: "huanghoushan",
                        name: "皇后山",
                        image: ATTRACTION_IMAGES.huanghoushan,
                        description: "山形秀美如皇后凤冠，传说中壮族皇后的安息之地，充满神秘色彩。",
                        tags: ["传说故事", "山形秀美", "文化底蕴"]
                      },
                      {
                        id: "heishan",
                        name: "黑山梯田",
                        image: ATTRACTION_IMAGES.heishan,
                        description: "层层叠叠的梯田景观，春夏翠绿，秋季金黄，是农耕文化的活化石。",
                        tags: ["梯田景观", "农耕文化", "四季美景"]
                      },
                      {
                        id: "oujia",
                        name: "欧家梯田",
                          image: ATTRACTION_IMAGES.oujia,
                        description: "连山最美的梯田群，面积广阔，层次分明，被誉为\"广东最美梯田\"。",
                        tags: ["最美梯田", "摄影天堂", "乡村美景"]
                      },
                      {
                        id: "zhengqi",
                        name: "蒙峒古村",
                          image: ATTRACTION_IMAGES.zhengqi,
                        description: "古老的壮族瑶族村落，保存完好的传统建筑和原生态民族文化，是体验壮瑶风情的绝佳之地。",
                        tags: ["民族村落", "传统文化", "原生态"]
                      }
                    ].map((attraction, index) => (
                      <div 
                        key={index} 
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        onClick={() => setSelectedAttraction(attraction.id)}
                      >
                        <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-green-800 mb-2">{attraction.name}</h3>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{attraction.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {attraction.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="max-w-4xl mx-auto">
                  <button
                    onClick={() => setSelectedAttraction(null)}
                    className="mb-6 flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                  >
                    ← 返回景点列表
                  </button>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-green-800 mb-6">
                      {attractionDetails[selectedAttraction]?.title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p>{attractionDetails[selectedAttraction]?.content}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Routes Tab */}
          {activeTab === 'routes' && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">禾洞镇旅游路线</h2>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
                    <Mountain className="w-6 h-6" />
                    禾洞镇旅游路线图
                  </h3>
                  <p className="text-gray-600">详细的旅游路线规划，带您领略禾洞镇的山水风光与民族文化</p>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src="/images/travel-route.png" 
                    alt="禾洞镇旅游路线图" 
                    className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                
                <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      路线特色
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 涵盖禾洞镇主要景点</li>
                      <li>• 合理安排游览时间</li>
                      <li>• 体验壮瑶民族文化</li>
                      <li>• 欣赏梯田山水风光</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      游览建议
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 建议游览时间：2-3天</li>
                      <li>• 最佳季节：春秋两季</li>
                      <li>• 适合人群：全年龄段</li>
                      <li>• 交通方式：自驾或包车</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">节庆活动</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🎋",
                    title: "壮族三月三歌节",
                    time: "农历三月三",
                    description: "壮族最盛大的传统节日，对歌比赛、抛绣球、竹竿舞等民俗活动丰富多彩，体验壮族文化精髓。"
                  },
                  {
                    icon: "🏮",
                    title: "瑶族盘王节",
                    time: "农历十月十六",
                    description: "瑶族祭祀祖先盘王的重要节日，举办盘王大歌、长鼓舞、跳盘王等传统仪式活动。"
                  },
                  {
                    icon: "🌾",
                    title: "禾洞镇丰收节",
                    time: "每年9-10月",
                    description: "庆祝梯田丰收的地方节庆，举办稻谷收割体验、农产品展销、传统美食品尝活动。"
                  },
                  {
                    icon: "🎭",
                    title: "连山民族文化节",
                    time: "每年5月",
                    description: "展示壮族瑶族传统文化的综合性节庆，包括民族服饰秀、手工艺展示、民族歌舞表演。"
                  },
                  {
                    icon: "🌸",
                    title: "梯田花开节",
                    time: "每年3-4月",
                    description: "春季梯田注水时节，举办摄影大赛、诗歌朗诵、山歌对唱等文化活动。"
                  },
                  {
                    icon: "🎆",
                    title: "禾洞镇春节庙会",
                    time: "春节期间",
                    description: "传统春节庆祝活动，舞狮舞龙、壮瑶民族表演、传统美食市集、新春祈福仪式。"
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4">{event.icon}</div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">{event.title}</h3>
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                      {event.time}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Culture Tab */}
          {activeTab === 'culture' && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">传统风俗</h2>
              
              <div className="space-y-12">
                {/* Culture Sections */}
                {[
                  {
                    title: "壮族瑶族文化传承",
                        image: CULTURE_IMAGES.ethnic,
                    content: "连山壮族瑶族自治县是壮瑶文化的重要发源地，禾洞镇周边村落至今仍保持着浓郁的民族特色和传统生活方式。",
                    highlights: [
                      "传统服饰：壮族的蓝靛染布、瑶族的彩色刺绣，工艺精美",
                      "建筑风格：干栏式木楼，依山而建，通风防潮",
                      "节日习俗：歌圩节、盘王节等传统节庆活动",
                      "手工技艺：竹编、织锦、银饰制作等传统工艺"
                    ]
                  },
                  {
                    title: "连山特色美食文化",
                      image: CULTURE_IMAGES.food,
                    content: "禾洞镇及周边地区的美食融合了壮瑶民族特色与山区天然食材，形成了独特的饮食文化体系。",
                    highlights: [
                      "连山大米：优质梯田大米，口感香甜，营养丰富",
                      "壮家竹筒饭：新鲜竹筒烤制，香味独特",
                      "瑶族油茶：传统茶饮，配以花生、玉米等小食",
                      "山区腊味：腊肉、腊肠等传统腌制食品",
                      "野生山菌：各种天然菌类，营养价值高",
                      "蒙峒豆腐：政岐村特色豆腐，口感嫩滑"
                    ]
                  },
                  {
                    title: "传统手工艺文化",
                      image: CULTURE_IMAGES.crafts,
                    content: "禾洞镇地区的传统手工艺历史悠久，技艺精湛，是壮瑶文化的重要组成部分。",
                    highlights: [
                      "竹编工艺：利用山区丰富竹资源制作生活用品",
                      "壮锦织造：色彩鲜艳的传统纺织品",
                      "瑶族刺绣：精美的手工刺绣，图案寓意深远",
                      "木雕技艺：传统木制工艺品和建筑装饰",
                      "银饰制作：瑶族传统银饰，工艺复杂精美"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <img src={section.image} alt={section.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                    </div>
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <h3 className="text-2xl font-bold text-green-800 mb-4">{section.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>
                      <ul className="space-y-3">
                        {section.highlights.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Study Tab */}
          {activeTab === 'study' && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">研学实践</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "民族文化研学课程",
                    icon: "🎭",
                    description: "深入了解壮族瑶族历史文化，参与传统手工艺制作，体验民族服饰和节庆活动。",
                    activities: ["民族历史讲座", "传统服饰体验", "手工艺制作", "民族歌舞学习"],
                    duration: "2-3天",
                    suitable: "中小学生、大学生"
                  },
                  {
                    title: "生态环境保护研学",
                    icon: "🌿",
                    description: "探索梯田生态系统，学习可持续农业发展，了解山区生物多样性保护。",
                    activities: ["梯田生态调研", "植物标本采集", "水土保持学习", "环保实践活动"],
                    duration: "3-5天",
                    suitable: "中学生、大学生"
                  },
                  {
                    title: "农耕文化体验课程",
                    icon: "🌾",
                    description: "参与传统农业生产，学习梯田耕作技术，体验从播种到收获的完整过程。",
                    activities: ["插秧体验", "农具使用", "稻谷收割", "传统加工技艺"],
                    duration: "1-2天",
                    suitable: "小学生、中学生"
                  },
                  {
                    title: "地理地质科考研学",
                    icon: "⛰️",
                    description: "考察山区地形地貌，了解梯田形成原理，学习地理地质知识。",
                    activities: ["地质结构观察", "地形测量", "土壤采样分析", "气候数据收集"],
                    duration: "3-4天",
                    suitable: "高中生、大学生"
                  },
                  {
                    title: "传统建筑技艺研学",
                    icon: "🏛️",
                    description: "学习壮瑶传统建筑特色，参与干栏式建筑修复，了解古代建筑智慧。",
                    activities: ["建筑测绘", "传统工艺学习", "修复技术体验", "建筑文化讲解"],
                    duration: "2-3天",
                    suitable: "中学生、大学生"
                  },
                  {
                    title: "乡村振兴调研课程",
                    icon: "🏘️",
                    description: "实地调研乡村发展现状，了解精准扶贫成果，探讨乡村振兴路径。",
                    activities: ["村民访谈", "产业调研", "政策学习", "发展规划讨论"],
                    duration: "3-5天",
                    suitable: "大学生、研究生"
                  }
                ].map((course, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{course.icon}</span>
                      <h3 className="text-xl font-bold text-green-800">{course.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{course.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">主要活动：</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.activities.map((activity, actIndex) => (
                          <span key={actIndex} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span><strong>时长：</strong>{course.duration}</span>
                      <span><strong>适合：</strong>{course.suitable}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-green-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">研学服务支持</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">专业导师</h4>
                    <p className="text-gray-600">民族文化专家、生态学者、农业技术员等专业导师团队</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">安全保障</h4>
                    <p className="text-gray-600">完善的安全制度、保险覆盖、医疗保障等服务体系</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">住宿餐饮</h4>
                    <p className="text-gray-600">民族特色民宿、农家乐、特色餐饮等配套服务</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">连山壮族瑶族自治县禾洞镇旅游宣传网站</h3>
            <p className="text-green-200">探索山水之美，感受壮瑶风情</p>
          </div>
          <div className="flex justify-center gap-8 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>400-0763-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>lianshan@tourism.com</span>
            </div>
          </div>
          <p className="text-green-200 text-sm">
            &copy; 2024 连山壮族瑶族自治县禾洞镇旅游宣传网站 | 版权所有
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;