// Function to toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

// Close the sidebar if clicked outside of it
document.addEventListener("click", function(event) {
  var sidebar = document.getElementById("sidebar");
  var sidebarToggle = document.querySelector(".sidebar-toggle");

  // If the click is outside the sidebar or the sidebar toggle button, close the sidebar
  if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});


// function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var music_area = document.querySelector(".music_area");

  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px'; // Close the sidebar
    music_area.classList.remove('sidebar-open'); // Remove class to move content back
  } else {
    sidebar.style.left = '0px'; // Open the sidebar
    music_area.classList.add('sidebar-open'); // Add class to shift content right
  }





// function toggleSidebar() {
  // var sidebar = document.getElementById("sidebar");
  // var music_area = document.querySelector(".container");

  // if (sidebar.classList.contains('open')) {
  //   sidebar.classList.remove('open'); // Close the sidebar
  //   music_area.classList.remove('sidebar-open'); // Reset content position
  // } else {
  //   sidebar.classList.add('open'); // Open the sidebar
  //   music_area.classList.add('sidebar-open'); // Shift content
  // }













{/* <p>
          This article is about the Republic of India. For other uses, see India (disambiguation).
          Republic of India
          Bhārat Gaṇarājya
          Horizontal tricolour flag bearing, from top to bottom, deep saffron, white, and green horizontal bands. In the
          centre of the white band is a navy-blue wheel with 24 spokes.
          Flag
          Three lions facing left, right, and toward viewer, atop a frieze containing a galloping horse, a 24-spoke
          wheel, and an elephant. Underneath is a motto: "सत्यमेव जयते".
          State emblem
          Motto: Satyameva Jayate (Sanskrit)
          "Truth Alone Triumphs"[1]
          Anthem: Jana Gana Mana (Hindi)[a][2][3]
          "Thou Art the Ruler of the Minds of All People"[4][2]
          Duration: 1 minute and 4 seconds.1:04
          National song: Vande Mataram (Sanskrit)[c]
          "I Bow to Thee, Mother"[b][1][2]
          Duration: 2 minutes and 26 seconds.2:26
          Image of a globe centred on India, with India highlighted.
          Territory controlled by India
          Territory claimed but not controlled
          Capital New Delhi
          28°36′50″N 77°12′30″E
          Largest city by city proper population Mumbai
          Largest city by metropolitan area population Delhi
          Official languages
          HindiEnglish[d][8]
          Recognised regional languages
          State level and Eighth Schedule[9]
          Native languages 424 languages[g]
          Religion (2011)[11]
          79.8% Hinduism
          14.2% Islam
          2.3% Christianity
          1.7% Sikhism
          0.7% Buddhism
          0.4% Jainism
          0.23% unaffiliated
          0.65% other
          Demonym(s)
          Indianothers
          Government Federal parliamentary republic
          • President
          Droupadi Murmu
          • Prime Minister
          Narendra Modi
          Legislature Parliament
          • Upper house
          Rajya Sabha
          • Lower house
          Lok Sabha
          Independence from the United Kingdom
          • Dominion
          15 August 1947
          • Republic
          26 January 1950
          Area
          • Total
          3,287,263 km2 (1,269,219 sq mi)[2][h] (7th)
          • Water (%)
          9.6
          Population
          • 2023 estimate
          Neutral increase 1,428,627,663[13] (1st)
          • 2011 census
          Neutral increase 1,210,854,977[14][15] (2nd)
          • Density
          427.8/km2 (1,108.0/sq mi) (30th)
          GDP (PPP) 2024 estimate
          • Total
          Increase $16.020 trillion[16] (3rd)
          • Per capita
          Increase $11,112[16] (122nd)
          GDP (nominal) 2024 estimate
          • Total
          Increase $3.889 trillion[16] (5th)
          • Per capita
          Increase $2,698[16] (141st)
          Gini (2021) Positive decrease 32.8[17]
          medium inequality
          HDI (2022) Increase 0.644[18]
          medium (134th)
          Currency Indian rupee (₹) (INR)
          Time zone UTC+05:30 (IST)
          DST is not observed.
          Date format
          dd-mm-yyyy[i]
          Drives on Left[19]
          Calling code +91
          ISO 3166 code IN
          Internet TLD .in (others)
          India, officially the Republic of India,[j][20] is a country in South Asia. It is the seventh-largest country
          in the world by area and the most populous country. Bounded by the Indian Ocean on the south, the Arabian Sea
          on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[k]
          China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is
          in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with
          Thailand, Myanmar, and Indonesia.

          Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[22][23][24] Their
          long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly
          diverse, second only to Africa in human genetic diversity.[25] Settled life emerged on the subcontinent in the
          western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley
          Civilisation of the third millennium BCE.[26] By at least 1200 BCE, an archaic form of Sanskrit, an
          Indo-European language, had diffused into India from the northwest.[27][28] Its evidence today is found in the
          hymns of the Rigveda. Preserved by an oral tradition that was resolutely vigilant, the Rigveda records the
          dawning of Hinduism in India.[29] The Dravidian languages of India were supplanted in the northern and western
          regions.[30] By 400 BCE, stratification and exclusion by caste had emerged within Hinduism,[31] and Buddhism
          and Jainism had arisen, proclaiming social orders unlinked to heredity.[32] Early political consolidations
          gave rise to the loose-knit Maurya and Gupta Empires based in the Ganges Basin.[33] Their collective era was
          suffused with wide-ranging creativity,[34] but also marked by the declining status of women,[35] and the
          incorporation of untouchability into an organised system of belief.[l][36] In South India, the Middle kingdoms
          exported Dravidian-languages scripts and religious cultures to the kingdoms of Southeast Asia.[37]

          In the early mediaeval era, Christianity, Islam, Judaism, and Zoroastrianism became established on India's
          southern and western coasts.[38] Muslim armies from Central Asia intermittently overran India's northern
          plains,[39] eventually founding the Delhi Sultanate and drawing northern India into the cosmopolitan networks
          of mediaeval Islam.[40] In the 15th century, the Vijayanagara Empire created a long-lasting composite Hindu
          culture in south India.[41] In the Punjab, Sikhism emerged, rejecting institutionalised religion.[42] The
          Mughal Empire, in 1526, ushered in two centuries of relative peace,[43] leaving a legacy of luminous
          architecture.[m][44] Gradually expanding rule of the British East India Company followed, turning India into a
          colonial economy but also consolidating its sovereignty.[45] British Crown rule began in 1858. The rights
          promised to Indians were granted slowly,[46][47] but technological changes were introduced, and modern ideas
          of education and public life took root.[48] A pioneering and influential nationalist movement emerged, which
          was noted for nonviolent resistance and became the major factor in ending British rule.[49][50] In 1947, the
          British Indian Empire was partitioned into two independent dominions,[51][52][53][54] a Hindu-majority
          dominion of India and a Muslim-majority dominion of Pakistan, amid large-scale loss of life and an
          unprecedented migration.[55]

          India has been a federal republic since 1950, governed through a democratic parliamentary system, and has been
          the world's most populous democracy since the time of its independence in 1947.[56][57][58] It is a
          pluralistic, multilingual and multi-ethnic society. India's nominal per capita income increased from US$64
          annually in 1951 to US$2,601 in 2022, and its literacy rate from 16.6% to 74%. During the same time, its
          population grew from 361 million to almost 1.4 billion,[59] and India became the most populous country in
          2023.[60][61] From being a comparatively destitute country in 1951,[62] India has become a fast-growing major
          economy and a hub for information technology services, with an expanding middle class.[63] India has a space
          programme with several planned or completed extraterrestrial missions. Indian movies, music, and spiritual
          teachings play an increasing role in global culture.[64] India has substantially reduced its rate of poverty,
          though at the cost of increasing economic inequality.[65] India is a nuclear-weapon state, which ranks high in
          military expenditure. It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since
          the mid-20th century.[66] Among the socio-economic challenges India faces are gender inequality, child
          malnutrition,[67] and rising levels of air pollution.[68] India's land is megadiverse, with four biodiversity
          hotspots.[69] Its forest cover comprises 21.7% of its area.[70] India's wildlife, which has traditionally been
          viewed with tolerance in India's culture,[71] is supported among these forests, and elsewhere, in protected
          habitats.

          Etymology
          Main article: Names for India
          According to the Oxford English Dictionary (third edition 2009), the name "India" is derived from the
          Classical Latin India, a reference to South Asia and an uncertain region to its east. In turn the name "India"
          derived successively from Hellenistic Greek India ( Ἰνδία), ancient Greek Indos ( Ἰνδός), Old Persian Hindush
          (an eastern province of the Achaemenid Empire), and ultimately its cognate, the Sanskrit Sindhu, or "river",
          specifically the Indus River and, by implication, its well-settled southern basin.[72][73] The ancient Greeks
          referred to the Indians as Indoi (Ἰνδοί), which translates as "The people of the Indus".[74]

          The term Bharat (Bhārat; pronounced [ˈbʱaːɾət] ⓘ), mentioned in both Indian epic poetry and the Constitution
          of India,[75][76] is used in its variations by many Indian languages. A modern rendering of the historical
          name Bharatavarsha, which applied originally to North India,[77][78] Bharat gained increased currency from the
          mid-19th century as a native name for India.[75][79]

          Hindustan ([ɦɪndʊˈstaːn] ⓘ) is a Middle Persian name for India that became popular by the 13th century,[80]
          and was used widely since the era of the Mughal Empire. The meaning of Hindustan has varied, referring to a
          region encompassing the northern Indian subcontinent (present-day northern India and Pakistan) or to India in
          its near entirety.[75][79][81]

          History
          Main articles: History of India and History of the Republic of India
          Ancient India

          Manuscript illustration, c. 1650, of the Sanskrit epic Ramayana, composed in story-telling fashion c. 400 BCE
          – c. 300 CE[82]
          By 55,000 years ago, the first modern humans, or Homo sapiens, had arrived on the Indian subcontinent from
          Africa, where they had earlier evolved.[22][23][24] The earliest known modern human remains in South Asia date
          to about 30,000 years ago.[22] After 6500 BCE, evidence for domestication of food crops and animals,
          construction of permanent structures, and storage of agricultural surplus appeared in Mehrgarh and other sites
          in Balochistan, Pakistan.[83] These gradually developed into the Indus Valley Civilisation,[84][83] the first
          urban culture in South Asia,[85] which flourished during 2500–1900 BCE in Pakistan and western India.[86]
          Centred around cities such as Mohenjo-daro, Harappa, Dholavira, and Kalibangan, and relying on varied forms of
          subsistence, the civilisation engaged robustly in crafts production and wide-ranging trade.[85]

          During the period 2000–500 BCE, many regions of the subcontinent transitioned from the Chalcolithic cultures
          to the Iron Age ones.[87] The Vedas, the oldest scriptures associated with Hinduism,[88] were composed during
          this period,[89] and historians have analysed these to posit a Vedic culture in the Punjab region and the
          upper Gangetic Plain.[87] Most historians also consider this period to have encompassed several waves of
          Indo-Aryan migration into the subcontinent from the north-west.[88] The caste system, which created a
          hierarchy of priests, warriors, and free peasants, but which excluded indigenous peoples by labelling their
          occupations impure, arose during this period.[90] On the Deccan Plateau, archaeological evidence from this
          period suggests the existence of a chiefdom stage of political organisation.[87] In South India, a progression
          to sedentary life is indicated by the large number of megalithic monuments dating from this period,[91] as
          well as by nearby traces of agriculture, irrigation tanks, and craft traditions.[91]


          Cave 26 of the rock-cut Ajanta Caves
          In the late Vedic period, around the 6th century BCE, the small states and chiefdoms of the Ganges Plain and
          the north-western regions had consolidated into 16 major oligarchies and monarchies that were known as the
          mahajanapadas.[92][93] The emerging urbanisation gave rise to non-Vedic religious movements, two of which
          became independent religions. Jainism came into prominence during the life of its exemplar, Mahavira.[94]
          Buddhism, based on the teachings of Gautama Buddha, attracted followers from all social classes excepting the
          middle class; chronicling the life of the Buddha was central to the beginnings of recorded history in
          India.[95][96][97] In an age of increasing urban wealth, both religions held up renunciation as an ideal,[98]
          and both established long-lasting monastic traditions. Politically, by the 3rd century BCE, the kingdom of
          Magadha had annexed or reduced other states to emerge as the Maurya Empire.[99] The empire was once thought to
          have controlled most of the subcontinent except the far south, but its core regions are now thought to have
          been separated by large autonomous areas.[100][101] The Mauryan kings are known as much for their
          empire-building and determined management of public life as for Ashoka's renunciation of militarism and
          far-flung advocacy of the Buddhist dhamma.[102][103]
        </p> */}






        /* Container and Content */
/* .container { */
  /* margin-top: 20px; */
  /* margin-left: 20px; */
  /* transition: margin-left 0.3s ease; */
  /* padding-top: 20px; */
  /* width: 100%; */
  /* display: flex;
  flex-direction: column; */
/* } */
// .container {
//   position: relative;
//   width: 92vw;
//   height: calc(100vh -60px); /* Adjust height based on navbar */
//   margin-top: 20px auto;
//   overflow-y: auto;
//   /* background-color: #1c1b1b; */
//   border-radius: 10px;
// }
// .content-wrapper {
//   border-radius: 10px;
// }


// /* .content::-webkit-scrollbar {
//   width: 8px;
//   height: 4px;
// }

// .content::-webkit-scrollbar-thumb {
//   background-color: #888;
//   border-radius: 4px;
// }

// .content::-webkit-scrollbar-thumb:hover {
//   background-color: #555;
// } */

// /* Scrollbar Styling */
// .container {
//   scrollbar-width: thin; /* For Firefox */
//   scrollbar-color:  #1c1b1b; /* Thumb color and track color */
// }

// .container::-webkit-scrollbar {
//   width: 10px; /* Scrollbar width */
// }

// .container::-webkit-scrollbar-track {
//   background: #1c1b1b; /* Track color */
//   border-radius: 10px; /* Rounded track edges */
// }

// .container::-webkit-scrollbar-thumb {
//   background-color: #4caf50; /* Thumb color (scrollbar handle) */
//   border-radius: 4px; /* Rounded scrollbar edges */
//   border: 2px solid #1c1b1b; /* Optional border for better visibility */
// }

// .container::-webkit-scrollbar-thumb:hover {
//   background-color: #45a049; /* Thumb color on hover */
// }


// /* When Sidebar is Open */
// .sidebar.open {
//   left: 0;
// }

// .container.sidebar-open {
//   margin-left: 200px;
// }


// /* main content nav bar */
// /* .fixed-navbar {
//   display: flex;
//   top: 50;
//   left: 10;
//   position: fixed;
//   z-index: 1000;
//   width: 92vw;
//   padding: 5x 0;
//   box-shadow:0 0 2px transparent(73, 71, 71, 0.1);
//   /* background-color: black; 
// } */
// .fixed-navbar {
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   background-color: #1c1b1b;
//   padding: 10px 0;
//   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
// }
// .rounded-pill-buttons {
//   list-style: none;
//   display: flex;
//   gap: 7px;
//   padding: 2px;
//   margin: 0;
// }

// /* .rounded-pill-buttons li {
//   display: inline-block;
// } */

// .rounded-pill-buttons li a {
//   display: inline-block;
//   padding: 10px 20px; /* Adjust padding for the pill shape */
//   text-decoration: none; /* Remove underline */
//   background-color: #2d2b2b; /* Light gray background */
//   color: #ffffff; /* Dark text color */
//   border-radius: 40px; /* Rounded edges for pill shape */
//   font-family: Arial, sans-serif;
//   font-size: 10px;
//   text-align: center;
//   transition: background-color 0.2s, color 0.2s; /* Add hover transition */
// }

// .rounded-pill-buttons li a:hover {
//   background-color: #403d3d; 
//   color: #fff; 
// }
// .scroll{
//   margin-top: 0px;
//   padding: 0px;
//   border-radius: 10px;
// }
// .text {
//   margin-top: 0px; /* Adjust based on the height of the fixed section */
//   height: calc(100vh - 50px); /* Adjust to fit the remaining viewport */
//   overflow-y: scroll; /* Make this section scrollable */
//   padding: 0px;
//   background: #1c1b1b;



{/* <div class="content-wrapper">
<!--  <div class="fixed-navbar">
   <nav class="options">
     <ul class="rounded-pill-buttons">
       <li>
         <a href="#">All </a>
       <li>

       <li>
         <a href="#">Music </a>
       </li>

       <li>
         <a href="#">Poscast</a>
       </li>
     </ul>
   </nav>
 </div>
 <div class="scroll">
   <div class="text">
      <p>
       This article is about the Republic of India. For other uses, see India (disambiguation).
       Republic of India
       Bhārat Gaṇarājya
       Horizontal tricolour flag bearing, from top to bottom, deep saffron, white, and green horizontal bands. In
       the
       centre of the white band is a navy-blue wheel with 24 spokes.
       Flag
       Three lions facing left, right, and toward viewer, atop a frieze containing a galloping horse, a 24-spoke
       wheel, and an elephant. Underneath is a motto: "सत्यमेव जयते".
       State emblem
       Motto: Satyameva Jayate (Sanskrit)
       "Truth Alone Triumphs"[1]
       Anthem: Jana Gana Mana (Hindi)[a][2][3]
       "Thou Art the Ruler of the Minds of All People"[4][2]
       Duration: 1 minute and 4 seconds.1:04
       National song: Vande Mataram (Sanskrit)[c]
       "I Bow to Thee, Mother"[b][1][2]
       Duration: 2 minutes and 26 seconds.2:26
       Image of a globe centred on India, with India highlighted.
       Territory controlled by India
       Territory claimed but not controlled
       Capital New Delhi
       28°36′50″N 77°12′30″E
       Largest city by city proper population Mumbai
       Largest city by metropolitan area population Delhi
       Official languages
       HindiEnglish[d][8]
       Recognised regional languages
       State level and Eighth Schedule[9]
       Native languages 424 languages[g]
       Religion (2011)[11]
       79.8% Hinduism
       14.2% Islam
       2.3% Christianity
       1.7% Sikhism
       0.7% Buddhism
       0.4% Jainism
       0.23% unaffiliated
       0.65% other
       Demonym(s)
       Indianothers
       Government Federal parliamentary republic
       • President
       Droupadi Murmu
       • Prime Minister
       Narendra Modi
       Legislature Parliament
       • Upper house
       Rajya Sabha
       • Lower house
       Lok Sabha
       Independence from the United Kingdom
       • Dominion
       15 August 1947
       • Republic
       26 January 1950
       Area
       • Total
       3,287,263 km2 (1,269,219 sq mi)[2][h] (7th)
       • Water (%)
       9.6
       Population
       • 2023 estimate
       Neutral increase 1,428,627,663[13] (1st)
       • 2011 census
       Neutral increase 1,210,854,977[14][15] (2nd)
       • Density
       427.8/km2 (1,108.0/sq mi) (30th)
       GDP (PPP) 2024 estimate
       • Total
       Increase $16.020 trillion[16] (3rd)
       • Per capita
       Increase $11,112[16] (122nd)
       GDP (nominal) 2024 estimate
       • Total
       Increase $3.889 trillion[16] (5th)
       • Per capita
       Increase $2,698[16] (141st)
       Gini (2021) Positive decrease 32.8[17]
       medium inequality
       HDI (2022) Increase 0.644[18]
       medium (134th)
       Currency Indian rupee (₹) (INR)
       Time zone UTC+05:30 (IST)
       DST is not observed.
       Date format
       dd-mm-yyyy[i]
       Drives on Left[19]
       Calling code +91
       ISO 3166 code IN
       Internet TLD .in (others)
       India, officially the Republic of India,[j][20] is a country in South Asia. It is the seventh-largest
       country
       in the world by area and the most populous country. Bounded by the Indian Ocean on the south, the Arabian
       Sea
       on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the
       west;[k]
       China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is
       in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with
       Thailand, Myanmar, and Indonesia.

       Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[22][23][24]
       Their
       long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly
       diverse, second only to Africa in human genetic diversity.[25] Settled life emerged on the subcontinent in
       the
       western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley
       Civilisation of the third millennium BCE.[26] By at least 1200 BCE, an archaic form of Sanskrit, an
       Indo-European language, had diffused into India from the northwest.[27][28] Its evidence today is found in
       the
       hymns of the Rigveda. Preserved by an oral tradition that was resolutely vigilant, the Rigveda records the
       dawning of Hinduism in India.[29] The Dravidian languages of India were supplanted in the northern and
       western
       regions.[30] By 400 BCE, stratification and exclusion by caste had emerged within Hinduism,[31] and Buddhism
       and Jainism had arisen, proclaiming social orders unlinked to heredity.[32] Early political consolidations
       gave rise to the loose-knit Maurya and Gupta Empires based in the Ganges Basin.[33] Their collective era was
       suffused with wide-ranging creativity,[34] but also marked by the declining status of women,[35] and the
       incorporation of untouchability into an organised system of belief.[l][36] In South India, the Middle
       kingdoms
       exported Dravidian-languages scripts and religious cultures to the kingdoms of Southeast Asia.[37]

       In the early mediaeval era, Christianity, Islam, Judaism, and Zoroastrianism became established on India's
       southern and western coasts.[38] Muslim armies from Central Asia intermittently overran India's northern
       plains,[39] eventually founding the Delhi Sultanate and drawing northern India into the cosmopolitan
       networks
       of mediaeval Islam.[40] In the 15th century, the Vijayanagara Empire created a long-lasting composite Hindu
       culture in south India.[41] In the Punjab, Sikhism emerged, rejecting institutionalised religion.[42] The
       Mughal Empire, in 1526, ushered in two centuries of relative peace,[43] leaving a legacy of luminous
       architecture.[m][44] Gradually expanding rule of the British East India Company followed, turning India into
       a
       colonial economy but also consolidating its sovereignty.[45] British Crown rule began in 1858. The rights
       promised to Indians were granted slowly,[46][47] but technological changes were introduced, and modern ideas
       of education and public life took root.[48] A pioneering and influential nationalist movement emerged, which
       was noted for nonviolent resistance and became the major factor in ending British rule.[49][50] In 1947, the
       British Indian Empire was partitioned into two independent dominions,[51][52][53][54] a Hindu-majority
       dominion of India and a Muslim-majority dominion of Pakistan, amid large-scale loss of life and an
       unprecedented migration.[55]

       India has been a federal republic since 1950, governed through a democratic parliamentary system, and has
       been
       the world's most populous democracy since the time of its independence in 1947.[56][57][58] It is a
       pluralistic, multilingual and multi-ethnic society. India's nominal per capita income increased from US$64
       annually in 1951 to US$2,601 in 2022, and its literacy rate from 16.6% to 74%. During the same time, its
       population grew from 361 million to almost 1.4 billion,[59] and India became the most populous country in
       2023.[60][61] From being a comparatively destitute country in 1951,[62] India has become a fast-growing
       major
       economy and a hub for information technology services, with an expanding middle class.[63] India has a space
       programme with several planned or completed extraterrestrial missions. Indian movies, music, and spiritual
       teachings play an increasing role in global culture.[64] India has substantially reduced its rate of
       poverty,
       though at the cost of increasing economic inequality.[65] India is a nuclear-weapon state, which ranks high
       in
       military expenditure. It has disputes over Kashmir with its neighbours, Pakistan and China, unresolved since
       the mid-20th century.[66] Among the socio-economic challenges India faces are gender inequality, child
       malnutrition,[67] and rising levels of air pollution.[68] India's land is megadiverse, with four
       biodiversity
       hotspots.[69] Its forest cover comprises 21.7% of its area.[70] India's wildlife, which has traditionally
       been
       viewed with tolerance in India's culture,[71] is supported among these forests, and elsewhere, in protected
       habitats.

       Etymology
       Main article: Names for India
       According to the Oxford English Dictionary (third edition 2009), the name "India" is derived from the
       Classical Latin India, a reference to South Asia and an uncertain region to its east. In turn the name
       "India"
       derived successively from Hellenistic Greek India ( Ἰνδία), ancient Greek Indos ( Ἰνδός), Old Persian
       Hindush
       (an eastern province of the Achaemenid Empire), and ultimately its cognate, the Sanskrit Sindhu, or "river",
       specifically the Indus River and, by implication, its well-settled southern basin.[72][73] The ancient
       Greeks
       referred to the Indians as Indoi (Ἰνδοί), which translates as "The people of the Indus".[74]

       The term Bharat (Bhārat; pronounced [ˈbʱaːɾət] ⓘ), mentioned in both Indian epic poetry and the Constitution
       of India,[75][76] is used in its variations by many Indian languages. A modern rendering of the historical
       name Bharatavarsha, which applied originally to North India,[77][78] Bharat gained increased currency from
       the
       mid-19th century as a native name for India.[75][79]

       Hindustan ([ɦɪndʊˈstaːn] ⓘ) is a Middle Persian name for India that became popular by the 13th century,[80]
       and was used widely since the era of the Mughal Empire. The meaning of Hindustan has varied, referring to a
       region encompassing the northern Indian subcontinent (present-day northern India and Pakistan) or to India
       in
       its near entirety.[75][79][81]

       History
       Main articles: History of India and History of the Republic of India
       Ancient India

       Manuscript illustration, c. 1650, of the Sanskrit epic Ramayana, composed in story-telling fashion c. 400
       BCE
       – c. 300 CE[82]
       By 55,000 years ago, the first modern humans, or Homo sapiens, had arrived on the Indian subcontinent from
       Africa, where they had earlier evolved.[22][23][24] The earliest known modern human remains in South Asia
       date
       to about 30,000 years ago.[22] After 6500 BCE, evidence for domestication of food crops and animals,
       construction of permanent structures, and storage of agricultural surplus appeared in Mehrgarh and other
       sites
       in Balochistan, Pakistan.[83] These gradually developed into the Indus Valley Civilisation,[84][83] the
       first
       urban culture in South Asia,[85] which flourished during 2500–1900 BCE in Pakistan and western India.[86]
       Centred around cities such as Mohenjo-daro, Harappa, Dholavira, and Kalibangan, and relying on varied forms
       of
       subsistence, the civilisation engaged robustly in crafts production and wide-ranging trade.[85]

       During the period 2000–500 BCE, many regions of the subcontinent transitioned from the Chalcolithic cultures
       to the Iron Age ones.[87] The Vedas, the oldest scriptures associated with Hinduism,[88] were composed
       during
       this period,[89] and historians have analysed these to posit a Vedic culture in the Punjab region and the
       upper Gangetic Plain.[87] Most historians also consider this period to have encompassed several waves of
       Indo-Aryan migration into the subcontinent from the north-west.[88] The caste system, which created a
       hierarchy of priests, warriors, and free peasants, but which excluded indigenous peoples by labelling their
       occupations impure, arose during this period.[90] On the Deccan Plateau, archaeological evidence from this
       period suggests the existence of a chiefdom stage of political organisation.[87] In South India, a
       progression
       to sedentary life is indicated by the large number of megalithic monuments dating from this period,[91] as
       well as by nearby traces of agriculture, irrigation tanks, and craft traditions.[91]


       Cave 26 of the rock-cut Ajanta Caves
       In the late Vedic period, around the 6th century BCE, the small states and chiefdoms of the Ganges Plain and
       the north-western regions had consolidated into 16 major oligarchies and monarchies that were known as the
       mahajanapadas.[92][93] The emerging urbanisation gave rise to non-Vedic religious movements, two of which
       became independent religions. Jainism came into prominence during the life of its exemplar, Mahavira.[94]
       Buddhism, based on the teachings of Gautama Buddha, attracted followers from all social classes excepting
       the
       middle class; chronicling the life of the Buddha was central to the beginnings of recorded history in
       India.[95][96][97] In an age of increasing urban wealth, both religions held up renunciation as an
       ideal,[98]
       and both established long-lasting monastic traditions. Politically, by the 3rd century BCE, the kingdom of
       Magadha had annexed or reduced other states to emerge as the Maurya Empire.[99] The empire was once thought
       to
       have controlled most of the subcontinent except the far south, but its core regions are now thought to have
       been separated by large autonomous areas.[100][101] The Mauryan kings are known as much for their
       empire-building and determined management of public life as for Ashoka's renunciation of militarism and
       far-flung advocacy of the Buddhist dhamma.[102][103]
     </p> 
   </div>
 </div> --> */}