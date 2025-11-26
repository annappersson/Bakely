import kardemummabullar from "../img/kardemummabullar.jpg";
import vaniljbullar from "../img/vaniljbullar.jpg";
import kanelbullar from "../img/kanelbullar.jpg";
import chokladsnittar from "../img/chokladsnitt.jpg";
import drommar from "../img/drommar.jpg";
import havrekakor from "../img/oat-cookies.jpg";
import kolakakor from "../img/kolakakor.jpg";
import chocChip from "../img/choc-chip.jpg";
import bananamuffins from "../img/banana-muffins.jpg";
import hallonmuffins from "../img/raspberry-whitechoc.jpg";
import citronmuffins from "../img/lemon-muffins.jpg";
import chokladmuffins from "../img/chocolate-muffins.jpg";
import blåbärMuffins from "../img/blueberry-muffins.jpg";
import nutellabullar from "../img/nutellabullar.jpg";
import saffransbullarVanilj from "../img/saffransbullarVanilj.jpg";

export const recipes = [
  /* -------------------------------------------------- */
  /* 🧁 MUFFINS (5 st) */
  /* -------------------------------------------------- */
  {
    id: "muffin-1",
    title: "Blåbärsmuffins",
    category: "Muffins",
    image: blåbärMuffins,
    description: "Saftiga muffins fyllda med söta blåbär.",
    time: { prep: 10, bake: 18 },
    difficulty: "Lätt",
    servings: 12,
    ingredients: [
      "4 dl vetemjöl",
      "2 dl strösocker",
      "2 tsk bakpulver",
      "2 ägg",
      "1 dl mjölk",
      "100 g smält smör eller margarin",
      "2 dl blåbär",
      "2 krm salt",
    ],
    steps: [
      "Sätt ugnen på 200°C.",
      "Blanda mjöl, socker, salt och bakpulver i en skål. Tillsätt det smälta matfettet.",
      "Vispa ihop mjölk och ägg och rör ner i smeten. Vänd försiktigt i blåbären (spara några till garnering). Ställ muffinsformar i en muffinsplåt och fördela smeten i formarna.",
      "Strö några lättsockrade blåbär på toppen. Grädda i mitten av ugnen 20 minuter.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 0,
    },
  },

  {
    id: "muffin-2",
    title: "Chokladmuffins",
    category: "Muffins",
    image: chokladmuffins,
    description: "Mörka och extra fluffiga chokladmuffins.",
    time: { prep: 8, bake: 17 },
    difficulty: "Lätt",
    servings: 12,
    ingredients: [
      "2 dl vetemjöl",
      "1 dl kakao",
      "2 dl strösocker",
      "2 tsk bakpulver",
      "1 ägg",
      "1 dl mjölk",
      "1 dl neutral rapsolja",
      "1 dl hett vatten",
      "1/2 tsk salt",
      "1 tsk vaniljsocker",
    ],
    steps: [
      "Sätt ugnen på 175°C.",
      "Blanda socker, bakpulver, salt och vaniljsocker i en bunke.",
      "Sikta ner mjöl och kakao.",
      "Vispa ihop ägg, mjölk och olja hastigt i en annan bunke. (Viktigt att det är en helt neutral olja.) Rör ner de torra ingredienserna gärna med en ballongvisp.",
      "Tillsätt det heta vattnet, lite i taget. Blanda till en slät smet.",
      "Fördela smeten i muffinsformarna som ställts i en muffinsplåt.",
      "Grädda i mitten av ugnen ca 25 minuter. Känn med provsticka så att muffinsen är torra i mitten. Ta ut och låt svalna på galler.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 0,
    },
  },

  {
    id: "muffin-3",
    title: "Citronmuffins",
    category: "Muffins",
    image: citronmuffins,
    description: "Friska och luftiga citronmuffins.",
    time: { prep: 10, bake: 18 },
    difficulty: "Lätt",
    servings: 12,
    ingredients: [
      "1 citron finrivet skal och saft (1 citron motsvarar ca 1/2 dl saft)",
      "150 g rumsvarmt smör",
      "2 dl strösocker",
      "2 ägg",
      "3/4 dl mjölk",
      "2 1/2 dl vetemjöl",
      "1 tsk vaniljsocker",
      "1 tsk bakpulver",
    ],
    steps: [
      "Sätt ugnen på 200˚C.",
      "Tvätta citronen. Riv det yttersta av skalet och pressa saften.",
      "Vispa smör och socker vitt och fluffigt.",
      "Vispa ner ett ägg i taget.",
      "Rör ner citronjuice, citronskal och mjölk.",
      "Blanda vetemjöl, vaniljsocker och bakpulver och vänd ner i smeten.",
      "Fördela smeten i 12 muffinsformar (för 12 st), på en plåt. Gärna med hjälp av en spritspåse.",
      "Grädda mitt i ugnen i 15-20 min.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 0,
    },
  },

  {
    id: "muffin-4",
    title: "Hallon-vitchokladmuffins",
    category: "Muffins",
    image: hallonmuffins,
    description: "Söta muffins med frisk hallonbalans.",
    time: { prep: 12, bake: 20 },
    difficulty: "Lätt",
    servings: 12,
    ingredients: [
      "100 g vit choklad",
      "150 g hallon",
      "1,5 dl mjölk",
      "50 g smör",
      "3 dl vetemjöl",
      "2 tsk vaniljsocker",
      "1,5 tsk bakpulver",
      "2 dl strösocker",
      "2 ägg",
    ],
    steps: [
      "Sätt ugnen på 200 grader. Fyll en muffinsform med pappersformar eller ställ ut formarna på en plåt.",
      "Smält smöret. Hacka den vita chokladen.",
      "Vispa ägg och socker vitt och fluffigt i en bunke.",
      "Blanda de torra ingredienserna i en annan bunke och blanda sedan i smöret och mjölken. Rör därefter i ägg- och sockersmeten.",
      "Vänd försiktigt i hallonen och den vita chokladen.",
      "Fyll formarna till två tredjedelar.",
      "Grädda i cirka 20 minuter.",
    ],
    plannerInfo: { canMakeAhead: true, freezerFriendly: false, restTime: 0 },
  },

  {
    id: "muffin-5",
    title: "Bananmuffins",
    category: "Muffins",
    image: bananamuffins,
    description: "Extra saftiga muffins gjorda på mogen banan.",
    time: { prep: 12, bake: 18 },
    difficulty: "Lätt",
    servings: 12,
    ingredients: [
      "2 bananer (à ca 175 g)",
      "150 g rumstempererat smör",
      "2 dl strösocker",
      "2 ägg",
      "3/4 dl mjölk",
      "2 1/2 dl vetemjöl",
      "1 tsk vaniljsocker",
      "1 tsk bakpulver",
      "1/2 dl riven kokos",
    ],
    steps: [
      "Sätt ugnen på 200°C.",

      "Skala bananerna. Mosa den ena med en gaffel och skär den andra i 12 skivor.",

      "Vispa smör och socker vitt och fluffigt.",

      "Vispa ner ett ägg i taget.",

      "Rör ner bananmoset och mjölken.",

      "Blanda vetemjöl, vaniljsocker, bakpulver och kokos i en annan bunke och vänd ner i smeten.",

      "Fördela smeten i 12 muffinsformar (medium, ca 7 cm i diameter för 12 st), på en plåt. Tryck ner en bananskiva i varje muffins.",

      "Grädda mitt i ugnen i 15-20 min, känn med provsticka så att muffinsen är torra i mitten. Låt svalna på galler.",
    ],
    plannerInfo: { canMakeAhead: true, freezerFriendly: true, restTime: 0 },
  },

  /* -------------------------------------------------- */
  /* 🍪 KAKOR (5 st) */
  /* -------------------------------------------------- */
  {
    id: "cookie-1",
    title: "Chocolate Chip Cookies",
    category: "Kakor",
    image: chocChip,
    description: "Segmjuka kakor med smältande chokladbitar.",
    time: { prep: 12, bake: 17 },
    difficulty: "Lätt",
    servings: 20,
    ingredients: [
      "200 g mörk bakchoklad",
      "3 1/2 dl vetemjöl",
      "1 tsk bikarbonat",
      "2 tsk vaniljsocker",
      "2 tsk majsstärkelse",
      "200 g rumsvarmt smör",
      "1/2 dl strösocker",
      "1 3/4 dl brunt farinsocker",
      "1 ägg",
    ],
    steps: [
      "Grovhacka chokladen.",

      "Blanda vetemjöl, bikarbonat, vaniljsocker och majsstärkelse.",

      "Vispa smör, strösocker och farinsocker fluffigt. Tillsätt ägget och vispa lite till.",

      "Tillsätt mjölblandningen. Arbeta snabbt ihop till en deg. Blanda i den grovhackade chokladen.",

      "Ställ degen i kylskåpet i ca 20 minuter.",

      "Sätt ugnen på 175°C.",

      "Dela degen i 18 lika stora bitar (för 18 st kakor, ca 50 g/bit). Rulla bitarna till bollar.",

      "Dela upp bollarna på 2 plåtar med bakplåtspapper(för 18 st kakor). Lägg bollarna med ordentligt avstånd mellan varandra eftersom dom ska flyta ut.",

      "Grädda en plåt i taget, mitt i ugnen i ca 15-20 minuter.",

      "Ta ut kakorna och låt dem svalna på plåten i 2-3 minuter innan du flyttar över dem på ett galler och låter svalna helt.",
    ],
    plannerInfo: { canMakeAhead: true, freezerFriendly: true, restTime: 20 },
  },

  {
    id: "cookie-2",
    title: "Kolakakor",
    category: "Kakor",
    image: kolakakor,
    description: "Gyllene kolakakor som smälter i munnen.",
    time: { prep: 8, bake: 10 },
    difficulty: "Lätt",
    servings: 30,
    ingredients: [
      "100 g smör",
      "1 dl socker",
      "1 msk vaniljsocker",
      "1 msk sirap",
      "2 1/2 dl vetemjöl",
      "1 tsk bakpulver",
    ],
    steps: [
      "Låt smöret bli mjukt i mikron. Blanda med socker, vaniljsocker, sirap, vetemjöl och bakpulver, gärna i en matberedare eller med en elvisp. Arbeta degen tills den går ihop och tryck ihop det sista med händerna.",

      "Halvera degen. Forma till 2 rullar (för 30 st). Lägg dem på bakpappersklädd plåt och platta ut dem till ca 0,5 cm.",

      "Grädda mitt i ugnen i 175°C i 10-12 minuter. Ta ut plåten och skär kakorna diagonalt.",
    ],
    plannerInfo: { canMakeAhead: true, freezerFriendly: false, restTime: 0 },
  },

  {
    id: "cookie-3",
    title: "Havrekakor",
    category: "Kakor",
    image: havrekakor,
    description: "Knapriga och rustika havrekakor.",
    time: { prep: 12, bake: 10 },
    difficulty: "Lätt",
    servings: 32,
    ingredients: [
      "175 g rumsvarmt smör",
      "4 dl havregryn",
      "2 dl strösocker",
      "2 dl vetemjöl",
      "2 tsk bakpulver",
    ],
    steps: [
      "Sätt ugnen på 200°C.",

      "Häll smör, havregryn och socker i en bunke. Vispa snabbt ihop med en elvisp.",

      "Rör ihop mjöl och bakpulver och vänd ner i bunken med havregrynen och blanda till en deg.",

      "Forma små bollar av degen och lägg på två plåtar med bakplåtspapper.",

      "Sätt in plåtarna, i omgångar, i mitten av ugnen ca 10 minuter.",

      "Låt kakorna svalna på plåten.",
    ],
    plannerInfo: { canMakeAhead: true, freezerFriendly: true, restTime: 0 },
  },

  {
    id: "cookie-4",
    title: "Drömmar",
    category: "Kakor",
    image: drommar,
    description: "Spröda klassiska drömmar.",
    time: { prep: 12, bake: 18 },
    difficulty: "Lätt",
    servings: 25,
    ingredients: [
      "50 g smör eller margarin",
      "1 1/2 dl strösocker",
      "1 tsk vaniljsocker",
      "1/2 dl mat- eller rapsolja",
      "1/2 tsk hjorthornssalt",
      "2 dl vetemjöl (2 dl motsvarar 120 g)",
    ],
    steps: [
      "Sätt ugnen på 150˚C.",

      "Rör smör, socker och vaniljsocker smidigt. Tillsätt oljan lite i taget under vispning. Blanda hjorthornssaltet med lite av mjölet och rör ner i degen. Arbeta in resten av mjölet.",

      "Rulla små kulor av degen. Lägg dem på plåtar med bakplåtspapper.",

      "Grädda mitt i ugnen ca 15 - 20 minuter. Låt kakorna kallna på plåten.",
    ],
    plannerInfo: { canMakeAhead: true, freezerFriendly: false, restTime: 0 },
  },

  {
    id: "cookie-5",
    title: "Chokladsnittar",
    category: "Kakor",
    image: chokladsnittar,
    description: "Segknapriga chokladsnittar med pärlsocker.",
    time: { prep: 45, bake: 12 },
    difficulty: "Lätt",
    servings: 60,
    ingredients: [
      "5 dl vetemjöl",
      "2 dl strösocker",
      "4 msk kakao",
      "1 msk vaniljsocker",
      "1 stort ägg",
      "200 g rumsvarmt smör eller margarin",
    ],
    steps: [
      "Sätt ugnen på 175°C.",

      "Blanda mjöl, socker, kakao och vanilj i en bunke eller direkt på bakbordet. Tillsätt ägget och rumsvarmt smör och knåda ihop till en deg.",

      "Arbeta degen smidig. Rulla ut till 5 längder (för 60 st), lika långa som en plåt. Fördela längderna på två plåtar. Platta till dem lite. Pensla med uppvispat ägg och strö på pärlsocker.",

      "Grädda i 10-12 minuter. Skär längderna i bitar lite på snedden när de fortfarande är varma.",
    ],
    plannerInfo: { canMakeAhead: true, freezerFriendly: false, restTime: 0 },
  },

  /* -------------------------------------------------- */
  /* 🥐 BULLAR (5 st) */
  /* -------------------------------------------------- */
  {
    id: "bun-1",
    title: "Kanelbullar",
    category: "Bullar",
    image: kanelbullar,
    description: "Klassiska svenska kanelbullar.",
    time: { prep: 25, bake: 8, rise: 50 },
    difficulty: "Medel",
    servings: 20,
    ingredients: {
      deg: [
        "25 g jäst",
        "50 g smör eller margarin",
        "3 dl mjölk",
        "1/2 dl strösocker",
        "1 krm salt",
        "8 dl vetemjöl",
      ],
      fylling: [
        "100 g rumsvarmt smör eller margarin",
        "1 msk malen kanel",
        "1 dl strösocker",
      ],
    },
    steps: [
      "Smula jästen i en bunke. Smält matfettet i en kastrull eller i en skål i mikrovågsugnen på full effekt (max 800 W) ca 30 sek. Tillsätt mjölken och värm till fingervarmt (37°C). Häll lite av degvätskan över jästen och rör tills den löst sig.",
      "Tillsätt resten av degvätskan, socker, salt och nästan allt vetemjölet, spara lite till utbakningen. Arbeta degen smidig för hand eller i maskin tills degen släpper bunkens kanter. Låt degen jäsa övertäckt ca 30 min.",
      "Rör matfettet smidigt med kanel och socker.",
      "Ta upp degen på arbetsbänk och knåda den smidig med resterande mjöl. Kavla ut degen till en platta, ca 30x40 cm (för 20 st). Bred på fyllningen och rulla ihop från långsidan. Skär rullen i ca 2 cm breda bitar. Lägg bitarna med snittytan uppåt på en bakplåtspappersklädd plåt eller i bullformar av papper.",
      "Låt bullarna jäsa under bakduk ca 20 min.",
      "Pensla bullarna med uppvispat ägg och strö över lite pärlsocker. Grädda bullarna mitt i ugnen i 250°C, ca 8 min. Låt kallna på galler under bakduk innan de packas i påse eller burk med lock.",
    ],
    plannerInfo: { canMakeAhead: false, freezerFriendly: true, restTime: 50 },
  },

  {
    id: "bun-2",
    title: "Vaniljbullar",
    category: "Bullar",
    image: vaniljbullar,
    description: "Fluffiga bullar fyllda med len vanilj fyllning.",
    time: { prep: 30, bake: 12, rise: 60 },
    difficulty: "Medel",
    servings: 24,
    ingredients: {
      deg: [
        "50 g smör",
        "5 dl mjölk",
        "50 g KronJäst färsk jäst för söta degar",
        "1 1/2 dl strösocker",
        "2 tsk malen kardemumma",
        "1 krm salt",
        "ca 15 dl vetemjöl (15 dl motsvarar ca 900 g)",
      ],
      Fyllning: [
        "200 g rumstempererat smör",
        "1 1/2 dl strösocker",
        "1/2 dl vaniljsocker",
      ],
    },

    steps: [
      "Smält smöret och häll i mjölken, värm till 37°C. Rör ut jästen i mjölken.",

      "Häll i socker, kardemumma och salt. Blanda i nästan allt vetemjöl. Knåda till en smidig deg. Låt den jäsa till dubbel storlek under en handduk, ca 40 minuter.",

      "Rör ihop fyllningen.",

      "Dela degen i 2 bitar (för 30 bullar), kavla ut dem till 2 fyrkanter (ca 3 mm tjocka). Bre fyllningen på fyrkanterna. Rulla ihop och skiva rullarna i ca 3 cm tjocka skivor. Lägg bullskivorna på en bakplåtspappersklädd plåt eller i stora bullformar. Låt dem jäsa till dubbel storlek, ca 20 minuter.",

      "Sätt ugnen på 225°C.",

      "Pensla bullarna med ägg och strö på mandelsplitter. Grädda bullarna gyllenbruna i mitten av ugnen i 12-15 minuter. Låt dem svalna på galler.",
    ],
    plannerInfo: { canMakeAhead: false, freezerFriendly: true, restTime: 60 },
  },

  {
    id: "bun-3",
    title: "Kardemummabullar",
    category: "Bullar",
    image: kardemummabullar,
    description: "Aromatiska bullar med kardemumma.",
    time: { prep: 25, bake: 14, rise: 90 },
    difficulty: "Medel",
    servings: 20,
    ingredients: {
      deg: [
        "480 g vetemjöl (480 g motsvarar ca 8 dl)",
        "3 dl mjölk",
        "1 1/4 dl strösocker",
        "1/2 tsk salt",
        "1 msk mortlad kardemumma",
        "25 g jäst",
        "100 g rumsvarmt smör",
      ],
      fyllning: [
        "150 g rumsvarmt smör",
        "1 1/4 dl strösocker",
        "2 tsk vaniljsocker",
        "1 msk mortlad kardemumma",
        "1/2 krm salt",
      ],
    },
    steps: [
      "Deg: Mät upp alla ingredienser (förutom smöret i en bunke) och smula jästen. Degvätskan behöver inte värmas. Kör i en degblandare i ca 3 minuter tills degen har gått ihop och tillsätt smöret i små bitar.",

      "Kör degen i degblandaren ytterligare ca 10 minuter. Gör ett glutentest genom att ta en bit deg och rulla till en boll. Dra i degen, degen ska hålla ihop. Om degen går sönder behöver du köra den lite till i degblandaren. ",

      "Forma degen till en boll och låt den vila ca 10 minuter.",

      "Fyllning: Vispa ihop ingredienserna med en elvisp till en slät fyllning.",

      "Kavla degen till en rektangel (ca 5 mm tunt). Tips! Lyft upp degen försiktigt med händerna för att släppa på spänningen på degen.",

      "Bred fyllningen jämnt på degen.",

      "Vik degen på hälften från långsidan. Skär ca 1 1/2 cm tjocka remsor och snurra till bullar.",

      "Lägg bullarna på en bakpappersklädd plåt och sätt in i ugnen med bara ugnslampan på. Låt jäsa i minst 60 min. Degen kan jäsa upp till 90 minuter.",

      "Ta ut bullarna ur ugnen.",

      "Sätt ugnen på 225°C",

      "Pensla bullarna med ett uppvispat ägg och strö över mortlad kardemumma och socker.",

      "Grädda bullarna i mitten av ugnen i ca 12-14 minuter eller tills bullarna är gyllenbruna.",
    ],
    plannerInfo: { canMakeAhead: false, freezerFriendly: true, restTime: 90 },
  },

  {
    id: "bun-4",
    title: "Nutellabullar",
    category: "Bullar",
    image: nutellabullar,
    description: "Bullar fyllda med len nutella.",
    time: { prep: 30, bake: 10, rise: 60 },
    difficulty: "Medel",
    servings: 20,
    ingredients: {
      deg: [
        "480 g vetemjöl (480 g motsvarar ca 8 dl)",
        "3 dl mjölk",
        "1 1/4 dl strösocker",
        "1/2 tsk salt",
        "25 g jäst",
        "100 g rumsvarmt smör",
      ],
      filling: ["2 dl nutella eller annan hasselnötskräm", "2 msk smör"],
    },
    steps: [
      "Sätt ut muffinsformar eller bullformar i papper på en plåt.",
      "Smula ner jästen i en degblandare eller bunke. Smält smöret, häll i mjölken i kastrullen och låt det bli 37 grader.",
      "Häll vätskan över jästen. Blanda i socker och salt.",
      "Arbeta in vetemjölet lite i taget. Arbeta degen smidig i cirka 4-5 minuter. Sätt på plastfolie eller lägg över en bakduk och låt degen jäsa i 30 minuter.",
      "Vänd upp degen på ett lätt mjölat bakbord, dela upp degen i två bitar och forma varje bit till en rund bulle. Kavla ut till rektanglar som är cirka ½ centimeter tjocka.",
      "Blanda nötkräm och smör. Bred blandningen över den utkavlade degen och rulla ihop på längden. Skär i cirka 3 centimeter breda bitar, lägg snäckorna i formarna. Lägg över en bakduk och jäs ytterligare i 30 minuter.",
      "Sätt under tiden ugnen på 210 grader.",
      "Pensla bullarna med lätt uppvispat ägg och strö över pärlsocker. Grädda bullarna mitt i ugnen i cirka 10 minuter.",
      "Låt bullarna svalna på ett galler.",
    ],
    plannerInfo: { canMakeAhead: false, freezerFriendly: true, restTime: 60 },
  },

  {
    id: "bun-5",
    title: "Saffransbullar",
    category: "Bullar",
    image: saffransbullarVanilj,
    description: "Luftiga juliga saffransbullar fyllda med vanilj och saffran.",
    time: { prep: 30, bake: 8, rise: 60 },
    difficulty: "Medel",
    servings: 24,
    ingredients: {
      deg: [
        "25 g jäst (för söta degar)",
        "75 g smör",
        "1 påse saffran (1/2 g)",
        "3/4 dl strösocker",
        "2.5 dl mjölk",
        "125 g kvarg (10 %)",
        "1/4 tsk salt",
        "1 ägg",
        "8–9 dl vetemjöl (450–540 g)",
      ],
      filling: [
        "100 g rumstempererat smör",
        "3/4 dl strösocker",
        "2 tsk vaniljsocker",
      ],
    },
    steps: [
      "Smula jästen i en bunke.",
      "Smält smöret i en kastrull. Mortla saffran med lite av sockret och rör ner i smöret. Tillsätt mjölken och värm degvätskan till cirka 37°C.",
      "Häll lite av degvätskan över jästen och rör tills den lösts upp. Tillsätt resterande degvätska, socker, kvarg, salt och ägg.",
      "Arbeta in nästan allt vetemjöl. Knåda degen cirka 5 minuter i maskin eller 10 minuter för hand tills den blir smidig.",
      "Strö lite mjöl över degen och låt den jäsa under bakduk i 30–45 minuter.",
      "Blanda ihop fyllningen genom att röra smör, socker och vaniljsocker smidigt.",
      "Stjälp upp degen på en mjölad arbetsyta och dela den i två delar.",
      "Kavla ut varje del till en rektangel på cirka 25×60 cm. Bred ut fyllningen jämnt.",
      "Vik degen dubbel på längden och tryck till lätt med handen.",
      "Skär 2–3 cm breda remsor och dela varje remsa nästan hela vägen upp (som ett byxben). Tvinna de två strimlorna och forma till en knut.",
      "Lägg bullarna på plåtar med bakplåtspapper och låt jäsa ytterligare cirka 30 minuter.",
      "Sätt ugnen på 250°C.",
      "Pensla bullarna med uppvispat ägg och strö på pärlsocker.",
      "Grädda mitt i ugnen i cirka 8 minuter. Låt svalna på galler under bakduk.",
    ],
    plannerInfo: { canMakeAhead: false, freezerFriendly: true, restTime: 60 },
  },

  /* -------------------------------------------------- */
  /* 🍞 BRÖD (10 st) */
  /* -------------------------------------------------- */

  /* -------------------------------------------------- */
  /* 🎂 TÅRTOR (10 st) */
  /* -------------------------------------------------- */
];
