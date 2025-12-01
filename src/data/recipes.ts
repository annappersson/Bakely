import kardemummabullar from "../assets/img/kardemummabullar.jpg";
import vaniljbullar from "../assets/img/vaniljbullar.jpg";
import kanelbullar from "../assets/img/kanelbullar.jpg";
import chokladsnittar from "../assets/img/chokladsnittar.jpg";
import drommar from "../assets/img/drommar.jpg";
import havrekakor from "../assets/img/havrekakor.jpg";
import kolakakor from "../assets/img/kolakakor.jpg";
import chocChip from "../assets/img/chocolate_chip_cookies.jpg";
import bananamuffins from "../assets/img/bananmuffins.jpg";
import hallonmuffins from "../assets/img/hallonmuffins.jpeg";
import citronmuffins from "../assets/img/citronmuffins.jpg";
import chokladmuffins from "../assets/img/chokladmuffins.jpg";
import blåbärMuffins from "../assets/img/blabarsmuffins.jpg";
import nutellabullar from "../assets/img/nutella.webp";
import saffransbullarVanilj from "../assets/img/saffransbullar.jpg";
import prinsesstartaHallon from "../assets/img/prinsesstarta.jpg";
import hallonmoussetarta from "../assets/img/hallonmoussetarta.jpg";
import chokladtarta from "../assets/img/chokladtarta.jpg";
import blabarscheesecake from "../assets/img/blabarscheesecake.jpg";
import graddtarta from "../assets/img/graddtarta.jpg";
import morotslimpa from "../assets/img/morotslimpa.jpg";
import honokaka from "../assets/img/honokaka.jpg";
import kalljasta_frallor from "../assets/img/kalljasta_frallor.jpg";
import sirapslimpa from "../assets/img/sirapslimpa.jpg";
import lingonlimpa_med_graddfil from "../assets/img/lingonlimpa_med_graddfil.jpg";

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
  {
    id: "bread-1",
    title: "Morotslimpa",
    category: "Bröd",
    image: morotslimpa,
    description: "Mjuka och saftiga limpor med rivna morötter.",
    time: { prep: 20, bake: 45 },
    difficulty: "Lätt",
    servings: 2,
    ingredients: [
      "25 g färsk jäst",
      "5 1/2 dl fingervarmt vatten (37°C)",
      "1/2 dl rapsolja",
      "3/4 dl ljus sirap",
      "2 dl havregryn",
      "3 dl grahamsmjöl",
      "1 msk salt",
      "3 dl finrivna morötter (ca 150 g)",
      "11 dl vetemjöl (ca 660 g)",
    ],
    steps: [
      "Smula jästen i en degbunke. Tillsätt vattnet och rör tills jästen lösts upp.",
      "Tillsätt olja, sirap, havregryn, grahamsmjöl, salt, morötter och vetemjöl. Arbeta degen 5–10 minuter.",
      "Låt jäsa övertäckt ca 45 minuter.",
      "Knåda degen lätt och dela i två bitar. Forma limpor och lägg i smorda formar.",
      "Jäs ytterligare 20 minuter.",
      "Grädda i 200°C i nedre delen av ugnen 40–45 minuter.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 45,
    },
  },

  {
    id: "bread-2",
    title: "Kalljästa Frallor",
    category: "Bröd",
    image: kalljasta_frallor,
    description:
      "Superenkla frallor som jäser över natten – bara skär och grädda.",
    time: { prep: 10, bake: 20 },
    difficulty: "Lätt",
    servings: 14,
    ingredients: [
      "25 g färsk jäst",
      "5 dl kallt vatten",
      "1 msk honung",
      "1 msk olivolja",
      "2 tsk salt",
      "11 dl rågsikt (ca 600 g)",
    ],
    steps: [
      "Rör ut jästen i kallt vatten.",
      "Tillsätt honung, olivolja, salt och rågsikt. Rör ihop till en deg.",
      "Täck bunken och låt jäsa i kylen minst 10 timmar.",
      "Sätt ugnen på 225°C.",
      "Häll ut degen på mjölat bakbord utan att knåda. Pudra med mjöl.",
      "Skär i bitar och lägg på plåt.",
      "Grädda mitt i ugnen ca 20 minuter.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 600,
    },
  },

  {
    id: "bread-3",
    title: "Sirapslimpa",
    category: "Bröd",
    image: sirapslimpa,
    description: "Mörk, mjuk och saftig limpa med filmjölk och sirap.",
    time: { prep: 20, bake: 40 },
    difficulty: "Medel",
    servings: 2,
    ingredients: [
      "50 g smör",
      "5 dl filmjölk",
      "50 g färsk jäst",
      "2 dl mörk sirap",
      "1 msk salt",
      "7–8 dl vetemjöl special (ca 420–480 g)",
      "8 dl rågsikt (ca 480 g)",
    ],
    steps: [
      "Smält smöret och blanda med filmjölken. Värm till 37°C.",
      "Smula jästen i en bunke och tillsätt degvätskan, sirapen och saltet.",
      "Tillsätt mjölet lite i taget och knåda ca 5 minuter.",
      "Jäs under bakduk ca 45 minuter.",
      "Forma två limpor och lägg på plåt. Jäs ytterligare 40 minuter.",
      "Grädda i 175°C i 35–40 minuter eller tills innertemp är 95°C.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 45,
    },
  },

  {
    id: "bread-4",
    title: "Hönökaka",
    category: "Bröd",
    image: honokaka,
    description: "Mjuka, luftiga och lättgräddade Hönökakor.",
    time: { prep: 25, bake: 5 },
    difficulty: "Medel",
    servings: 4,
    ingredients: [
      "5 dl mjölk",
      "50 g färsk jäst",
      "1 dl brödsirap",
      "1 msk salt",
      "9–10 dl vetemjöl (540–600 g)",
      "6 dl rågsikt (ca 360 g)",
      "100 g rumsvarmt smör",
    ],
    steps: [
      "Värm mjölken till 37°C och lös upp jästen med mjölk och sirap.",
      "Blanda salt, vetemjöl och rågsikt och tillsätt lite i taget.",
      "Knåda till en smidig deg och tillsätt smöret. Knåda 10 minuter.",
      "Jäs övertäckt ca 1 timme.",
      "Sätt ugnen på 250°C.",
      "Dela degen i 4 bitar. Kavla ut till rundlar ca 27 cm.",
      "Nagga och jäs 20 minuter.",
      "Grädda 3–5 minuter tills gyllene.",
    ],
    plannerInfo: {
      canMakeAhead: false,
      freezerFriendly: true,
      restTime: 60,
    },
  },

  {
    id: "bread-5",
    title: "Lingonlimpa med Gräddfil",
    category: "Bröd",
    image: lingonlimpa_med_graddfil,
    description: "Saftig filmjölkslimpa med rågmjöl, lingon och linfrön.",
    time: { prep: 10, bake: 70 },
    difficulty: "Lätt",
    servings: 1,
    ingredients: [
      "1/2 dl hela linfrön",
      "5 dl vetemjöl",
      "2 dl grovt rågmjöl",
      "1/2 dl rågkross",
      "2 tsk bikarbonat",
      "1 tsk salt",
      "5 dl gräddfil",
      "1 dl rårörda lingon",
    ],
    steps: [
      "Sätt ugnen på 175°C och smörj en form på 1,5 liter.",
      "Blanda alla torra ingredienser.",
      "Tillsätt gräddfil och lingon. Blanda till en kladdig deg.",
      "Häll i formen.",
      "Grädda i nedre delen av ugnen ca 70 minuter.",
      "Låt svalna på galler under bakduk.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 0,
    },
  },

  /* -------------------------------------------------- */
  /* 🎂 TÅRTOR (10 st) */
  /* -------------------------------------------------- */
  {
    id: "cake-1",
    title: "Prinsesstårta med hallonsylt",
    category: "Tårtor",
    image: prinsesstartaHallon,
    description:
      "Klassisk prinsesstårta fylld med hallonsylt, marsankräm och fluffig grädde.",
    time: { prep: 40, bake: 40, rise: 0 },
    difficulty: "Medel",
    servings: 8,
    ingredients: {
      tårtbotten: [
        "4 ägg",
        "2 dl strösocker",
        "1 dl vetemjöl",
        "1 dl potatismjöl",
        "2 tsk bakpulver",
      ],
      fyllning: [
        "3 dl marsankräm",
        "4 dl vispgrädde",
        "2 tsk vaniljsocker",
        "1/2 dl hallonsylt",
      ],
      garnering: [
        "1 färdigt marsipanlock",
        "ros och blad",
        "15 färska hallon",
        "florsocker",
      ],
    },
    steps: [
      "Sätt ugnen på 175°C.",
      "Smörj och bröa en rund form ca 24 cm i diameter.",
      "Vispa ägg och socker pösigt. Blanda vetemjöl, potatismjöl och bakpulver, och vänd ner i smeten.",
      "Häll smeten i formen och grädda i nedre delen av ugnen ca 40 min.",
      "Låt bottnen svalna och dela den i tre delar.",
      "Gör marsankrämen enligt anvisning och låt den kallna.",
      "Vispa grädden och rör ihop med marsankrämen.",
      "Lägg första bottnen på ett fat och bred på hallonsylt och ett lager kräm.",
      "Lägg på nästa botten och bred på mer kräm.",
      "Lägg på sista bottnen och täck hela tårtan med resten av krämen.",
      "Lägg försiktigt på marsipanlocket.",
      "Garnera med rosor, blad, hallon och pudra över florsocker.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: false,
      restTime: 0,
    },
  },

  {
    id: "cake-2",
    title: "Gräddtårta med jordgubbar",
    category: "Tårtor",
    image: graddtarta,
    description:
      "Somrig klassisk gräddtårta fylld med vaniljkräm och jordgubbar.",
    time: { prep: 50, bake: 40, rise: 0 },
    difficulty: "Medel",
    servings: 10,
    ingredients: {
      botten: [
        "4 ägg",
        "2 dl socker",
        "1 1/2 dl vetemjöl",
        "1/2 dl potatismjöl",
        "1 1/2 tsk bakpulver",
      ],
      vaniljkräm: [
        "1 vaniljstång",
        "1 1/2 dl mjölk",
        "1 1/2 dl vispgrädde",
        "3 msk socker",
        "2 äggulor",
        "1 msk majsstärkelse",
      ],
      jordgubbsfyllning: ["1 dl vispgrädde", "1 dl jordgubbssylt"],
      garnering: ["3 dl vispgrädde", "1 liter jordgubbar"],
    },
    steps: [
      "Sätt ugnen på 175°C.",
      "Smörj eller klä en 24 cm form med bakplåtspapper.",
      "Vispa ägg och socker vitt och pösigt.",
      "Sikta ner mjöl, potatismjöl och bakpulver i smeten och rör om försiktigt.",
      "Häll smeten i formen och grädda ca 40 min. Låt kallna och dela i tre bottnar.",
      "Dela vaniljstången, skrapa ur fröna och koka alla ingredienser försiktigt tills krämen tjocknar. Låt svalna.",
      "Vispa grädden och blanda med jordgubbssylten.",
      "Vispa grädden till garnering.",
      "Lägg första bottnen på fatet, bred på hälften av jordgubbsfyllningen och hälften av vaniljkrämen.",
      "Lägg nästa botten och bred på resterande fyllningar.",
      "Lägg på sista bottnen med snittytan uppåt.",
      "Spritsa grädde runt och dekorera med jordgubbar.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: false,
      restTime: 0,
    },
  },

  {
    id: "cake-3",
    title: "Blåbärscheesecake",
    category: "Tårtor",
    image: blabarscheesecake,
    description:
      "Len och fräsch blåbärscheesecake med svartvinbärsgelé och bär på toppen.",
    time: { prep: 40, bake: 0 },
    difficulty: "Medel",
    servings: 12,
    ingredients: [
      "100 g rumstempererat smör",
      "300 g digestivekex",

      "6 gelatinblad",
      "1 dl outspädd svartvinbärssaft",
      "2 1/2 dl vispgrädde",
      "400 g blåbär",
      "600 g naturell färskost",
      "2 tsk vaniljpulver",
      "100 g rörsocker",

      "Dekoration: björnbär, blåbär, ätbara blommor",
    ],
    steps: [
      "Lägg bakplåtspapper i botten av formen. Smält smöret.",
      "Smula kexen fint och blanda med smöret. Tryck ut i formen och ställ i kylen.",
      "Lägg gelatinblad i kallt vatten i 10 min.",
      "Koka upp svartvinbärssaft, ta av från värmen och rör i gelatinet.",
      "Vispa grädden.",
      "Rör färskosten mjuk. Blanda i vaniljpulver och rörsocker.",
      "Tillsätt 50 g hela blåbär och 300 g krossade blåbär. Vänd ner grädden och rör i saften med gelatin.",
      "Häll smeten över botten och kyl minst 4 timmar.",
      "Dekorera med blåbär, björnbär och ätbara blommor.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 240,
    },
  },

  {
    id: "cake-4",
    title: "Chokladtårta med Chokladmousse",
    category: "Tårtor",
    image: chokladtarta,
    description: "Saftig chokladtårta med fyllig mörk chokladmousse.",
    time: { prep: 35, bake: 60 },
    difficulty: "Medel",
    servings: 16,
    ingredients: [
      "5 dl vetemjöl",
      "5 dl strösocker",
      "2 dl kakao",
      "1 msk vaniljsocker",
      "1 msk bakpulver",
      "1 tsk salt",
      "2 dl mjölk",
      "2 dl neutral olja",
      "2 dl varmt kaffe",
      "2 ägg",

      "Mousse:",
      "300 g mörk choklad (70%)",
      "125 g smör",
      "4 dl vispgrädde",
      "3 ägg",
      "1 1/2 dl strösocker",
      "1/2 dl apelsinjuice eller rom",
    ],
    steps: [
      "Sätt ugnen på 175°C och klä en springform (26 cm).",
      "Blanda de torra ingredienserna.",
      "Tillsätt mjölk, olja, kaffe och ägg. Blanda till en slät smet.",
      "Häll i formen, sänk till 150°C och grädda ca 1 timme. Låt svalna.",
      "Mousse: Smält choklad och smör försiktigt.",
      "Vispa grädden luftigt.",
      "Vispa ägg och socker pösigt.",
      "Vänd i chokladen i äggsmeten och sedan grädden.",
      "Dela bottnen i tre delar. Droppa apelsinjuice på lagren.",
      "Bred mousse på två lager och montera ihop tårtan. Täck med resten av moussen.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: false,
      restTime: 60,
    },
  },

  {
    id: "cake-5",
    title: "Hallonmoussetårta",
    category: "Tårtor",
    image: hallonmoussetarta,
    description: "Luftig hallonmoussetårta med digestivebotten och lime.",
    time: { prep: 30, bake: 0 },
    difficulty: "Lätt",
    servings: 12,
    ingredients: [
      "3 gelatinblad",
      "100 g smör",
      "200 g digestivekex",
      "3 ägg",
      "1 dl råsocker",
      "200 g kvarg (gärna hallon/blåbär)",
      "Skal av 1 lime",
      "500 g hallon",
      "3 dl vispgrädde",
      "1 dl rostade hackade hasselnötter",
    ],
    steps: [
      "Tina hallonen om de är frysta.",
      "Blötlägg gelatinbladen.",
      "Mixa kex och smör och tryck ut i en springform.",
      "Vispa ägg och socker vitt och pösigt.",
      "Smält gelatinet i vattenbad och vispa ner i äggsmeten.",
      "Vispa ner kvarg, limeskal och nästan alla hallon.",
      "Vänd ner vispad grädde.",
      "Häll moussen över botten och frys. Ta ut 30 min före servering.",
      "Toppa med hallon och hasselnötter.",
    ],
    plannerInfo: {
      canMakeAhead: true,
      freezerFriendly: true,
      restTime: 240,
    },
  },
];
