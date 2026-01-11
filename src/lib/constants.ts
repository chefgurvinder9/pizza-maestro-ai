// 🍕 Pizzaiolo Assistant - Constants & Configuration

// Original recipe ratios from Chef Gurvinder (based on 2000g flour)
export const BASE_FLOUR_AMOUNT = 2000;

export const INGREDIENT_RATIOS = {
  salt: 40 / BASE_FLOUR_AMOUNT,        // 2%
  sugar: 50 / BASE_FLOUR_AMOUNT,       // 2.5%
  yeast: 40 / BASE_FLOUR_AMOUNT,       // 2% (for fresh yeast)
  oil: 120 / BASE_FLOUR_AMOUNT,        // 6%
  water: 800 / BASE_FLOUR_AMOUNT,      // 40%
  afterDoughOil: 20 / BASE_FLOUR_AMOUNT, // 1%
  semolina: 120 / BASE_FLOUR_AMOUNT,   // 6%
  milk: 800 / BASE_FLOUR_AMOUNT,       // 40%
  bakingSoda: 20 / BASE_FLOUR_AMOUNT,  // 1%
} as const;

// Yeast conversion ratios (relative to fresh yeast)
export const YEAST_CONVERSIONS = {
  fresh: 1,           // Base ratio
  instantDry: 0.33,   // 1/3 of fresh yeast
  activeDry: 0.4,     // 40% of fresh yeast
} as const;

export type YeastType = keyof typeof YEAST_CONVERSIONS;

export const YEAST_INFO = {
  fresh: {
    name: 'Fresh Yeast',
    nameHi: 'ताज़ा यीस्ट',
    description: 'Soft, crumbly yeast. Best flavor. Refrigerate.',
    descriptionHi: 'मुलायम, भुरभुरा यीस्ट। सबसे अच्छा स्वाद। फ्रिज में रखें।',
    emoji: '🧊',
  },
  instantDry: {
    name: 'Instant Dry Yeast',
    nameHi: 'इंस्टेंट ड्राई यीस्ट',
    description: 'No proofing needed. Add directly to flour.',
    descriptionHi: 'प्रूफिंग की जरूरत नहीं। सीधे आटे में मिलाएं।',
    emoji: '⚡',
  },
  activeDry: {
    name: 'Active Dry Yeast',
    nameHi: 'एक्टिव ड्राई यीस्ट',
    description: 'Proof in warm water before using.',
    descriptionHi: 'उपयोग से पहले गुनगुने पानी में घोलें।',
    emoji: '💧',
  },
} as const;

// Hydration levels and pizza styles
export const HYDRATION_STYLES = [
  { min: 55, max: 62, style: 'New York Style', styleHi: 'न्यूयॉर्क स्टाइल', emoji: '🗽', description: 'Crispy, foldable slices' },
  { min: 63, max: 68, style: 'Roman / Pan Pizza', styleHi: 'रोमन / पैन पिज़्ज़ा', emoji: '🏛️', description: 'Light, airy, olive oil-rich' },
  { min: 69, max: 74, style: 'Neapolitan', styleHi: 'नीपोलिटन', emoji: '🇮🇹', description: 'Soft, charred, wood-fired' },
  { min: 75, max: 85, style: 'High Hydration', styleHi: 'हाई हाइड्रेशन', emoji: '💧', description: 'Open crumb, artisan style' },
] as const;

// Fermentation temperature factors (hours at different temps)
export const FERMENTATION_FACTORS = {
  cold: { min: 2, max: 8, factor: 3, label: 'Cold (Fridge)', labelHi: 'ठंडा (फ्रिज)' },
  cool: { min: 15, max: 20, factor: 1.5, label: 'Cool Room', labelHi: 'ठंडा कमरा' },
  room: { min: 21, max: 25, factor: 1, label: 'Room Temp', labelHi: 'कमरे का तापमान' },
  warm: { min: 26, max: 32, factor: 0.7, label: 'Warm', labelHi: 'गर्म' },
} as const;

// Base fermentation time in hours (at room temp with standard yeast)
export const BASE_FERMENTATION_HOURS = 8;

// Dough evolution stages
export const DOUGH_EVOLUTION_STAGES = [
  {
    hour: 0,
    title: 'Just Mixed',
    titleHi: 'अभी मिलाया',
    description: 'Shaggy, rough texture. Rest 20 mins before kneading.',
    descriptionHi: 'खुरदरा, असमान बनावट। गूंथने से पहले 20 मिनट आराम दें।',
    tips: ['Cover with damp cloth', 'Autolyse helps gluten develop'],
  },
  {
    hour: 2,
    title: 'Initial Rise',
    titleHi: 'शुरुआती उभार',
    description: 'Starting to smooth out. Some bubbles visible.',
    descriptionHi: 'चिकना होना शुरू। कुछ बुलबुले दिखाई दे रहे हैं।',
    tips: ['Perform stretch and fold', 'Should feel elastic'],
  },
  {
    hour: 6,
    title: 'Bulk Fermentation',
    titleHi: 'बल्क फर्मेंटेशन',
    description: 'Doubled in size. Soft, pillowy, full of air.',
    descriptionHi: 'आकार दोगुना। नरम, हवादार।',
    tips: ['Ready for dividing', 'Poke test: indent springs back slowly'],
  },
  {
    hour: 24,
    title: '24-Hour Cold Proof',
    titleHi: '24 घंटे कोल्ड प्रूफ',
    description: 'Flavor developing. More extensible.',
    descriptionHi: 'स्वाद विकसित हो रहा है। अधिक लचीला।',
    tips: ['Keep in fridge', 'Great for next-day pizza'],
  },
  {
    hour: 48,
    title: '48-Hour Cold Proof',
    titleHi: '48 घंटे कोल्ड प्रूफ',
    description: 'Deep, complex flavors. Excellent extensibility.',
    descriptionHi: 'गहरा, जटिल स्वाद। उत्कृष्ट लचीलापन।',
    tips: ['Ideal for Neapolitan', 'Remove 2 hours before baking'],
  },
  {
    hour: 72,
    title: '72-Hour Cold Proof',
    titleHi: '72 घंटे कोल्ड प्रूफ',
    description: 'Maximum flavor development. Professional bakery quality.',
    descriptionHi: 'अधिकतम स्वाद विकास। प्रोफेशनल बेकरी क्वालिटी।',
    tips: ['Watch for over-proofing', 'Most digestible dough'],
  },
] as const;

// Smart Assistant Knowledge Base
export const ASSISTANT_KNOWLEDGE = [
  {
    id: 'sticky-dough',
    keywords: ['sticky', 'चिपचिपा', 'wet', 'गीला', 'sticks', 'hands'],
    question: 'My dough is too sticky',
    questionHi: 'मेरा आटा बहुत चिपचिपा है',
    answer: `Sticky dough is normal for high-hydration recipes! Here's what to do:

1. **Don't add more flour** - it will make your pizza tough
2. **Oil your hands** - a little olive oil prevents sticking
3. **Use bench scraper** - scrape instead of pulling
4. **Wet hands technique** - dip hands in water while shaping
5. **Refrigerate** - cold dough is much easier to handle

The stickiness means you'll get an amazing, airy crust!`,
    answerHi: `चिपचिपा आटा हाई-हाइड्रेशन रेसिपी के लिए सामान्य है! यह करें:

1. **और आटा न डालें** - पिज़्ज़ा सख्त हो जाएगा
2. **हाथों पर तेल लगाएं** - जैतून का तेल चिपकने से रोकता है
3. **बेंच स्क्रेपर का उपयोग करें**
4. **गीले हाथों की तकनीक** - आकार देते समय हाथ पानी में डुबोएं
5. **फ्रिज में रखें** - ठंडा आटा संभालना आसान है`,
    emoji: '🖐️',
  },
  {
    id: 'not-rising',
    keywords: ['rise', 'rising', 'flat', 'dead', 'उठ', 'फूल', 'मरा'],
    question: "My dough won't rise",
    questionHi: 'मेरा आटा नहीं उठ रहा',
    answer: `Don't worry, let's troubleshoot:

1. **Check yeast freshness** - old yeast loses power. Test in warm water with sugar
2. **Water temperature** - too hot (>45°C) kills yeast, too cold slows it
3. **Salt timing** - never add salt directly to yeast
4. **Give it time** - cold environments need 2-3x longer
5. **Sugar helps** - a pinch of sugar activates yeast faster

Pro tip: Proof your yeast first! Mix with warm water and 1 tsp sugar. It should foam in 10 minutes.`,
    answerHi: `चिंता न करें, समस्या का पता लगाते हैं:

1. **यीस्ट की ताज़गी जांचें** - पुरानी यीस्ट कमज़ोर होती है
2. **पानी का तापमान** - बहुत गर्म (>45°C) यीस्ट को मारता है
3. **नमक का समय** - यीस्ट में सीधे नमक न डालें
4. **समय दें** - ठंडे वातावरण में 2-3 गुना ज़्यादा समय लगता है
5. **चीनी मदद करती है** - एक चुटकी चीनी यीस्ट को जल्दी सक्रिय करती है`,
    emoji: '📈',
  },
  {
    id: 'tough-crust',
    keywords: ['tough', 'hard', 'chewy', 'सख्त', 'कड़ा', 'चबाना'],
    question: 'My crust is too tough',
    questionHi: 'मेरा क्रस्ट बहुत सख्त है',
    answer: `A tough crust usually means the gluten was overworked. Here's how to fix it:

1. **Don't over-knead** - stop when dough is smooth (8-10 mins max)
2. **Rest the dough** - let gluten relax before shaping
3. **Increase hydration** - more water = softer crust
4. **Higher oven temp** - quick bake preserves moisture
5. **Don't stretch too thin** - leave a puffy edge

Secret: After dividing into balls, let them rest 30+ minutes before stretching!`,
    answerHi: `सख्त क्रस्ट आमतौर पर ज़्यादा गूंथने से होता है:

1. **ज़्यादा न गूंथें** - चिकना होने पर रुकें (8-10 मिनट)
2. **आटे को आराम दें** - आकार देने से पहले ग्लूटेन को आराम दें
3. **हाइड्रेशन बढ़ाएं** - ज़्यादा पानी = मुलायम क्रस्ट
4. **उच्च ओवन तापमान** - तेज़ बेकिंग नमी बचाती है
5. **बहुत पतला न खींचें** - किनारा मोटा रखें`,
    emoji: '🦷',
  },
  {
    id: 'knead-time',
    keywords: ['knead', 'kneading', 'long', 'गूंथ', 'गूंधना', 'कितना'],
    question: 'How long should I knead?',
    questionHi: 'कितना गूंथना चाहिए?',
    answer: `The perfect knead depends on your method:

**By Hand:** 8-12 minutes
- Dough should be smooth and elastic
- Passes the "windowpane test" (stretches thin without tearing)

**Stand Mixer:** 6-8 minutes on medium
- Watch for dough clearing the sides

**No-Knead Method:** Just mix and wait!
- Mix ingredients, rest 12-18 hours
- Stretch and fold every few hours

Pro tip: Let dough rest 20 mins after mixing (autolyse) - it practically kneads itself!`,
    answerHi: `सही गूंथना आपकी विधि पर निर्भर करता है:

**हाथ से:** 8-12 मिनट
- आटा चिकना और लचीला होना चाहिए
- "विंडोपेन टेस्ट" पास करे

**स्टैंड मिक्सर:** मध्यम पर 6-8 मिनट

**नो-नीड मेथड:** बस मिलाएं और इंतज़ार करें!
- 12-18 घंटे आराम दें`,
    emoji: '👐',
  },
  {
    id: 'hydration-meaning',
    keywords: ['hydration', 'percent', '%', 'हाइड्रेशन', 'प्रतिशत', 'water'],
    question: 'What does hydration percentage mean?',
    questionHi: 'हाइड्रेशन प्रतिशत का मतलब क्या है?',
    answer: `Hydration is the ratio of water to flour in your dough:

**60% hydration** = 600g water per 1000g flour
**70% hydration** = 700g water per 1000g flour

**Style Guide:**
- 🗽 **55-62%**: New York (crispy, foldable)
- 🏛️ **63-68%**: Roman/Pan (light, airy)
- 🇮🇹 **69-74%**: Neapolitan (soft, charred spots)
- 💧 **75%+**: Artisan (open crumb, challenging)

Start at 65% and adjust based on your flour and climate. Humid days? Use slightly less water.`,
    answerHi: `हाइड्रेशन आटे में पानी और मैदा का अनुपात है:

**60% हाइड्रेशन** = 1000g मैदा में 600g पानी
**70% हाइड्रेशन** = 1000g मैदा में 700g पानी

**स्टाइल गाइड:**
- 🗽 **55-62%**: न्यूयॉर्क (कुरकुरा)
- 🏛️ **63-68%**: रोमन/पैन (हल्का, हवादार)
- 🇮🇹 **69-74%**: नीपोलिटन (मुलायम)
- 💧 **75%+**: आर्टिसन (ओपन क्रम्ब)`,
    emoji: '💦',
  },
  {
    id: 'cold-proof',
    keywords: ['cold', 'fridge', 'refrigerator', 'overnight', 'ठंडा', 'फ्रिज', 'रात'],
    question: 'Should I cold proof my dough?',
    questionHi: 'क्या मुझे आटे को फ्रिज में रखना चाहिए?',
    answer: `Yes! Cold proofing is a game-changer:

**Benefits:**
- 🧠 **Better Flavor** - slow fermentation develops complex tastes
- 🎯 **Easier Handling** - cold dough stretches without tearing
- ⏰ **Flexible Schedule** - bake when you're ready
- 🫁 **More Digestible** - longer ferment breaks down gluten

**How to Cold Proof:**
1. After bulk rise, divide into balls
2. Lightly oil, cover with plastic
3. Refrigerate 24-72 hours
4. Remove 1-2 hours before baking

The sweet spot? 48 hours for incredible flavor!`,
    answerHi: `हां! कोल्ड प्रूफिंग बहुत फायदेमंद है:

**फायदे:**
- 🧠 **बेहतर स्वाद** - धीमी फर्मेंटेशन से जटिल स्वाद
- 🎯 **आसान हैंडलिंग** - ठंडा आटा आसानी से फैलता है
- ⏰ **लचीला शेड्यूल** - जब तैयार हों तब बेक करें
- 🫁 **ज़्यादा पचने योग्य** - लंबी फर्मेंटेशन ग्लूटेन तोड़ती है

48 घंटे सबसे अच्छे स्वाद के लिए!`,
    emoji: '❄️',
  },
  {
    id: 'oven-temp',
    keywords: ['oven', 'temperature', 'temp', 'hot', 'ओवन', 'तापमान', 'गर्म', 'bake'],
    question: 'What oven temperature should I use?',
    questionHi: 'ओवन का तापमान क्या होना चाहिए?',
    answer: `As hot as possible! Pizza loves extreme heat:

**Home Oven (Standard):**
- Preheat to MAX (250-290°C / 480-550°F)
- Use pizza stone or steel (preheat 45-60 mins)
- Bake 6-10 minutes

**Pizza Steel:** 
- Hotter than stone, better char
- 5-7 minutes bake time

**Outdoor Pizza Oven:**
- 400-485°C (750-900°F)
- 60-90 seconds!

**Pro Tips:**
- Top rack for more top heat
- Broiler trick: finish with broiler for leopard spots
- Rotate pizza halfway through`,
    answerHi: `जितना गर्म हो सके! पिज़्ज़ा को तेज़ गर्मी पसंद है:

**होम ओवन:**
- MAX पर प्रीहीट करें (250-290°C)
- पिज़्ज़ा स्टोन या स्टील का उपयोग करें
- 6-10 मिनट बेक करें

**पिज़्ज़ा ओवन:**
- 400-485°C
- 60-90 सेकंड!

**टिप्स:**
- ऊपरी रैक पर रखें
- बीच में पिज़्ज़ा घुमाएं`,
    emoji: '🔥',
  },
  {
    id: 'flour-type',
    keywords: ['flour', '00', 'tipo', 'bread', 'आटा', 'मैदा', 'all-purpose'],
    question: 'Which flour should I use?',
    questionHi: 'कौन सा आटा इस्तेमाल करूं?',
    answer: `The flour makes a huge difference:

**00 Flour (Best for Neapolitan)**
- Finely ground, silky texture
- High protein (12-14%) but extensible
- Brands: Caputo, Antimo Caputo, San Felice

**Bread Flour (Great for NY Style)**
- Higher protein (12-14%)
- More chew and structure
- Easier to find

**All-Purpose (Decent substitute)**
- Lower protein (10-12%)
- Add 1 tbsp vital wheat gluten per cup to boost

**Pro Mix:** 70% 00 + 30% Bread Flour = Best of both worlds!`,
    answerHi: `आटा बहुत फर्क डालता है:

**00 आटा (नीपोलिटन के लिए सबसे अच्छा)**
- बारीक पिसा, रेशमी बनावट
- उच्च प्रोटीन (12-14%)

**ब्रेड फ्लोर (NY स्टाइल के लिए)**
- उच्च प्रोटीन (12-14%)
- अधिक चबाने वाला

**ऑल-पर्पस (विकल्प)**
- कम प्रोटीन (10-12%)

**प्रो मिक्स:** 70% 00 + 30% ब्रेड फ्लोर!`,
    emoji: '🌾',
  },
] as const;

// Language strings for the app
export const LANG_STRINGS = {
  en: {
    appName: 'Pizzaiolo Assistant',
    tagline: 'Crafted with precision, baked with love.',
    nav: {
      calculator: 'Calculator',
      diary: 'Dough Diary',
      evolution: 'Evolution',
      assistant: 'Smart Chef',
    },
    calculator: {
      flour: "'00' Flour",
      flourPlaceholder: 'Enter flour amount',
      grams: 'grams',
      hydration: 'Hydration',
      yeastType: 'Yeast Type',
      temperature: 'Room Temperature',
      calculate: 'Calculate Recipe',
      results: 'Your Perfect Dough',
      readyIn: 'Ready in',
      shareWhatsApp: 'Share via WhatsApp',
      startTimer: 'Start Timer',
    },
    ingredients: {
      salt: 'Salt',
      sugar: 'Sugar',
      yeast: 'Yeast',
      oil: 'Olive Oil',
      water: 'Water',
      afterDoughOil: 'Finishing Oil',
      semolina: 'Semolina',
      milk: 'Milk',
      bakingSoda: 'Baking Soda',
    },
    diary: {
      title: 'My Dough Diary',
      subtitle: 'Save your recipes and pizza creations',
      saveRecipe: 'Save Recipe',
      recipeName: 'Recipe Name',
      notes: 'Notes (optional)',
      addPhoto: 'Add Photo',
      noRecipes: 'No saved recipes yet',
      savedOn: 'Saved on',
    },
    evolution: {
      title: '72-Hour Dough Evolution',
      subtitle: 'What to expect as your dough ferments',
      hours: 'hours',
      tips: 'Pro Tips',
    },
    assistant: {
      title: 'Smart Chef Assistant',
      subtitle: 'Ask me anything about pizza dough!',
      placeholder: 'Type your question...',
      quickQuestions: 'Common Questions',
      greeting: "Hey! I'm your pizza dough expert. Ask me anything!",
    },
    timer: {
      title: 'Fermentation Timer',
      running: 'Dough Rising...',
      paused: 'Paused',
      ready: '🎉 Dough is Ready!',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
    },
    install: {
      title: 'Install App',
      description: 'Add to your home screen for quick access',
      button: 'Install',
      dismiss: 'Not now',
    },
  },
  hi: {
    appName: 'पिज़्ज़ायोलो असिस्टेंट',
    tagline: 'परिशुद्धता से तैयार, प्यार से बेक किया गया।',
    nav: {
      calculator: 'कैलकुलेटर',
      diary: 'आटा डायरी',
      evolution: 'विकास',
      assistant: 'स्मार्ट शेफ',
    },
    calculator: {
      flour: "'00' आटा",
      flourPlaceholder: 'आटे की मात्रा दर्ज करें',
      grams: 'ग्राम',
      hydration: 'हाइड्रेशन',
      yeastType: 'यीस्ट का प्रकार',
      temperature: 'कमरे का तापमान',
      calculate: 'रेसिपी गणना करें',
      results: 'आपका उत्तम आटा',
      readyIn: 'तैयार होगा',
      shareWhatsApp: 'व्हाट्सएप पर शेयर करें',
      startTimer: 'टाइमर शुरू करें',
    },
    ingredients: {
      salt: 'नमक',
      sugar: 'चीनी',
      yeast: 'यीस्ट',
      oil: 'जैतून का तेल',
      water: 'पानी',
      afterDoughOil: 'फिनिशिंग तेल',
      semolina: 'सूजी',
      milk: 'दूध',
      bakingSoda: 'बेकिंग सोडा',
    },
    diary: {
      title: 'मेरी आटा डायरी',
      subtitle: 'अपनी रेसिपी और पिज़्ज़ा क्रिएशन सेव करें',
      saveRecipe: 'रेसिपी सेव करें',
      recipeName: 'रेसिपी का नाम',
      notes: 'नोट्स (वैकल्पिक)',
      addPhoto: 'फोटो जोड़ें',
      noRecipes: 'अभी कोई सेव की गई रेसिपी नहीं',
      savedOn: 'सेव किया',
    },
    evolution: {
      title: '72-घंटे आटा विकास',
      subtitle: 'जैसे आपका आटा फर्मेंट होता है',
      hours: 'घंटे',
      tips: 'प्रो टिप्स',
    },
    assistant: {
      title: 'स्मार्ट शेफ असिस्टेंट',
      subtitle: 'पिज़्ज़ा आटे के बारे में कुछ भी पूछें!',
      placeholder: 'अपना सवाल लिखें...',
      quickQuestions: 'आम सवाल',
      greeting: 'नमस्ते! मैं आपका पिज़्ज़ा आटा विशेषज्ञ हूं। कुछ भी पूछें!',
    },
    timer: {
      title: 'फर्मेंटेशन टाइमर',
      running: 'आटा उठ रहा है...',
      paused: 'रुका हुआ',
      ready: '🎉 आटा तैयार है!',
      start: 'शुरू',
      pause: 'रोकें',
      reset: 'रीसेट',
    },
    install: {
      title: 'ऐप इंस्टॉल करें',
      description: 'त्वरित पहुंच के लिए होम स्क्रीन पर जोड़ें',
      button: 'इंस्टॉल',
      dismiss: 'अभी नहीं',
    },
  },
} as const;

export type Language = keyof typeof LANG_STRINGS;
