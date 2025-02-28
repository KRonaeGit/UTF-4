# UTF-4
UTF-4 is a NEW 1~3 byte variable length encoding!

## This file is 45KB because it was saved as UTF-8, but if you use UTF-4 it will be reduced to 30KB!

## Why UTF-4?
UTF-8, which we mainly use and is an international standard, is a variable length method of 1~4 bytes. (Maximum 4 bytes)
But in fact, 3 bytes is enough to express all the characters of Unicode.

While retaining all the advantages of UTF-8, UTF-4 **can accommodate more characters in a smaller space than UTF-8!**

## Structure?
- 1byte: `0xxxxxxx`
- 2byte: `10xxxxxx xxxxxxxx`
- 3byte: `11xxxxxx xxxxxxxx xxxxxxxx`

## Advantage?
- It's **fully ASCII compatible**, just like UTF-8!
- UTF-8 can only accommodate `2,164,864` characters,
  while UTF-4 can accommodate `4,210,816` characters! (So UTF-4 is better for accommodating)
- UTF-8 takes up less space, up to 4 bytes, **while UTF-4 takes up less space, up to 3 bytes!**
- UTF-4 is never worse than UTF-8, no matter what the code point value is!
  - It has more efficient when codepoints are in the range 2176–16511 or 67712–4210315:
  - ![image](https://github.com/user-attachments/assets/65468304-b572-45d1-875b-42888f7d112f)

## Disadvantage?
- The downside is that it is not an international standard. So only I use it. (lol)
- No one knows even its existence (too sad)


## Usability?
This can be used when you need to reduce the size of a file (or packet).
For example:
- If you need to transmit or store a lot of text with codepoints in the range 2176–16511 or 67712–4210315.
- When encrypting text with a complex (resulting in very large size) encryption algorithm
- When zombies appear in the world and you need to communicate quickly with the other side of the globe - Im just kidding :)

## Characters for all code points for which UTF-4 is more efficient than UTF-8
(Please note that it may contain some extended characters, unused characters, or errors)
- Languages: Arabic, Pashto, Urdu, Persian, Sanskrit, Hindi, Marathi, Nepali, Bengali, Assamese, Manipuri, Punjabi, Gujarati, Odia (Oriya), Tamil, Telugu, Kannada (Kannada), Malayalam, Sinhala (Sri Lankan), Thai, Lao, Tibetan, Myanmar (Burma), Georgian, Extended Korean, Japanese, Chinese, Extended Latin, Greek, etc
- Special characters: Emoji, Circle letters(numbers, alphabets), Unit symbol, Numbers, Math constant symbol, Math symbols, Roman numbers, braille(finger alphabet), 

### Every characters
Please note that it is right-aligned because it contains Arabic, or etc.


ࢀࢁࢂࢃࢄࢅࢆࢇ࢈ࢉࢊࢋࢌࢍࢎ࢏࢐࢑࢒࢓࢔࢕࢖ࢗ࢘
- ࢚࢛࢜࢝࢞࢟ࢠࢡࢢࢣࢤࢥࢦࢧࢨࢩࢪࢫࢬࢭࢮࢯࢰࢱࢲ
- ࢴࢵࢶࢷࢸࢹࢺࢻࢼࢽࢾࢿࣀࣁࣂࣃࣄࣅࣆࣇࣈࣉ࣊࣋࣌
-  ࣏࣐࣑࣒࣓࣎ࣔࣕࣖࣗࣘࣙࣚࣛࣜࣝࣞࣟ࣠࣡࣢ࣣࣦࣤࣥ
-  ࣰࣱࣲࣩ࣭࣮࣯ࣶࣹࣺࣨ࣪࣫࣬ࣳࣴࣵࣷࣸࣻࣼࣽࣾࣿऀ
- ंःऄअआइईउऊऋऌऍऎएऐऑऒओऔकखगघङच
- जझञटठडढणतथदधनऩपफबभमयरऱलळऴ
- शषसहऺऻ़ऽािीुूृॄॅॆेैॉॊोौ्ॎ
- ॐ॒॑॓॔ॕॖॗक़ख़ग़ज़ड़ढ़फ़य़ॠॡॢॣ।॥०१२
- ४५६७८९॰ॱॲॳॴॵॶॷॸॹॺॻॼॽॾॿঀঁং
- ঄অআইঈউঊঋঌ঍঎এঐ঑঒ওঔকখগঘঙচছজ
- ঞটঠডঢণতথদধন঩পফবভমযর঱ল঳঴঵শ
- সহ঺঻়ঽািীুূৃৄ৅৆েৈ৉৊োৌ্ৎ৏৐
- ৒৓৔৕৖ৗ৘৙৚৛ড়ঢ়৞য়ৠৡৢৣ৤৥০১২৩৪
- ৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻ৼ৽৾৿਀ਁਂਃ਄
- ਆਇਈਉਊ਋਌਍਎ਏਐ਑਒ਓਔਕਖਗਘਙਚਛਜਝਞ
- ਠਡਢਣਤਥਦਧਨ਩ਪਫਬਭਮਯਰ਱ਲਲ਼਴ਵਸ਼਷ਸ
- ਺਻਼਽ਾਿੀੁੂ੃੄੅੆ੇੈ੉੊ੋੌ੍੎੏੐ੑ੒
- ੔੕੖੗੘ਖ਼ਗ਼ਜ਼ੜ੝ਫ਼੟੠੡੢੣੤੥੦੧੨੩੪੫੬
- ੮੯ੰੱੲੳੴੵ੶੷੸੹੺੻੼੽੾੿઀ઁંઃ઄અઆ
- ઈઉઊઋઌઍ઎એઐઑ઒ઓઔકખગઘઙચછજઝઞટઠ
- ઢણતથદધન઩પફબભમયર઱લળ઴વશષસહ઺
- ઼ઽાિીુૂૃૄૅ૆ેૈૉ૊ોૌ્૎૏ૐ૑૒૓૔
- ૖૗૘૙૚૛૜૝૞૟ૠૡૢૣ૤૥૦૧૨૩૪૫૬૭૮
- ૰૱૲૳૴૵૶૷૸ૹૺૻૼ૽૾૿଀ଁଂଃ଄ଅଆଇଈ
- ଊଋଌ଍଎ଏଐ଑଒ଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢ
- ତଥଦଧନ଩ପଫବଭମଯର଱ଲଳ଴ଵଶଷସହ଺଻଼
- ାିୀୁୂୃୄ୅୆େୈ୉୊ୋୌ୍୎୏୐୑୒୓୔୕ୖ
- ୘୙୚୛ଡ଼ଢ଼୞ୟୠୡୢୣ୤୥୦୧୨୩୪୫୬୭୮୯୰
- ୲୳୴୵୶୷୸୹୺୻୼୽୾୿஀஁ஂஃ஄அஆஇஈஉஊ
- ஌஍எஏஐ஑ஒஓஔக஖஗஘ஙச஛ஜ஝ஞட஠஡஢ணத
- ஦஧நனப஫஬஭மயரறலளழவஶஷஸஹ஺஻஼஽ா
- ீுூ௃௄௅ெேை௉ொோௌ்௎௏ௐ௑௒௓௔௕௖ௗ௘
- ௚௛௜௝௞௟௠௡௢௣௤௥௦௧௨௩௪௫௬௭௮௯௰௱௲
- ௴௵௶௷௸௹௺௻௼௽௾௿ఀఁంఃఄఅఆఇఈఉఊఋఌ
- ఎఏఐ఑ఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథద
- న఩పఫబభమయరఱలళఴవశషసహ఺఻఼ఽాిీ
- ూృౄ౅ెేై౉ొోౌ్౎౏౐౑౒౓౔ౕౖ౗ౘౙౚ
- ౜ౝ౞౟ౠౡౢౣ౤౥౦౧౨౩౪౫౬౭౮౯౰౱౲౳౴
- ౶౷౸౹౺౻౼౽౾౿ಀಁಂಃ಄ಅಆಇಈಉಊಋಌ಍ಎ
- ಐ಑ಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನ
- ಪಫಬಭಮಯರಱಲಳ಴ವಶಷಸಹ಺಻಼ಽಾಿೀುೂ
- ೄ೅ೆೇೈ೉ೊೋೌ್೎೏೐೑೒೓೔ೕೖ೗೘೙೚೛೜
- ೞ೟ೠೡೢೣ೤೥೦೧೨೩೪೫೬೭೮೯೰ೱೲೳ೴೵೶
- ೸೹೺೻೼೽೾೿ഀഁംഃഄഅആഇഈഉഊഋഌ഍എഏഐ
- ഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനഩപ
- ബഭമയരറലളഴവശഷസഹഺ഻഼ഽാിീുൂൃൄ
- െേൈ൉ൊോൌ്ൎ൏൐൑൒൓ൔൕൖൗ൘൙൚൛൜൝൞
- ൠൡൢൣ൤൥൦൧൨൩൪൫൬൭൮൯൰൱൲൳൴൵൶൷൸
- ൺൻർൽൾൿ඀ඁංඃ඄අආඇඈඉඊඋඌඍඎඏඐඑඒ
- ඔඕඖ඗඘඙කඛගඝඞඟචඡජඣඤඥඦටඨඩඪණඬ
- ථදධන඲ඳපඵබභමඹයර඼ල඾඿වශෂසහළෆ
- ෈෉්෋෌෍෎ාැෑිීු෕ූ෗ෘෙේෛොෝෞෟ෠
- ෢෣෤෥෦෧෨෩෪෫෬෭෮෯෰෱ෲෳ෴෵෶෷෸෹෺
- ෼෽෾෿฀กขฃคฅฆงจฉชซฌญฎฏฐฑฒณด
- ถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ
- ะัาำิีึืฺุู฻฼฽฾฿เแโใไๅๆ็่
-  ๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛๜๝๞๟๠๡๢
- ๤๥๦๧๨๩๪๫๬๭๮๯๰๱๲๳๴๵๶๷๸๹๺๻๼
- ๾๿຀ກຂ຃ຄ຅ຆງຈຉຊ຋ຌຍຎຏຐຑຒຓດຕຖ
- ຘນບປຜຝພຟຠມຢຣ຤ລ຦ວຨຩສຫຬອຮຯະ
- າຳິີຶື຺ຸູົຼຽ຾຿ເແໂໃໄ໅ໆ໇່້໊
- ໌ໍ໎໏໐໑໒໓໔໕໖໗໘໙໚໛ໜໝໞໟ໠໡໢໣໤
- ໦໧໨໩໪໫໬໭໮໯໰໱໲໳໴໵໶໷໸໹໺໻໼໽໾
- ༀ༁༂༃༄༅༆༇༈༉༊་༌།༎༏༐༑༒༓༔༕༖༗༘
- ༚༛༜༝༞༟༠༡༢༣༤༥༦༧༨༩༪༫༬༭༮༯༰༱༲
- ༴༵༶༷༸༹༺༻༼༽༾༿ཀཁགགྷངཅཆཇ཈ཉཊཋཌ
- ཎཏཐདདྷནཔཕབབྷམཙཚཛཛྷཝཞཟའཡརལཤཥས
- ཨཀྵཪཫཬ཭཮཯཰ཱཱཱིིུུྲྀཷླྀཹེཻོཽཾཿྀ
-  ྄ྂྃ྅྆྇ྈྉྊྋྌྍྎྏྐྑྒྒྷྔྕྖྗ྘ྙྚ
-  ྜྜྷྞྟྠྡྡྷྣྤྥྦྦྷྨྩྪྫྫྷྭྮྯྰྱྲླྴ
-  ྶྷྸྐྵྺྻྼ྽྾྿࿀࿁࿂࿃࿄࿅࿆࿇࿈࿉࿊࿋࿌࿍࿎
- ࿐࿑࿒࿓࿔࿕࿖࿗࿘࿙࿚࿛࿜࿝࿞࿟࿠࿡࿢࿣࿤࿥࿦࿧࿨
- ࿪࿫࿬࿭࿮࿯࿰࿱࿲࿳࿴࿵࿶࿷࿸࿹࿺࿻࿼࿽࿾࿿ကခဂ
- ငစဆဇဈဉညဋဌဍဎဏတထဒဓနပဖဗဘမယရလ
- သဟဠအဢဣဤဥဦဧဨဩဪါာိီုူေဲဳဴဵံ
- း္်ျြွှဿ၀၁၂၃၄၅၆၇၈၉၊။၌၍၎၏ၐ
- ၒၓၔၕၖၗၘၙၚၛၜၝၞၟၠၡၢၣၤၥၦၧၨၩၪ
- ၬၭၮၯၰၱၲၳၴၵၶၷၸၹၺၻၼၽၾၿႀႁႂႃႄ
- ႆႇႈႉႊႋႌႍႎႏ႐႑႒႓႔႕႖႗႘႙ႚႛႜႝ႞
- ႠႡႢႣႤႥႦႧႨႩႪႫႬႭႮႯႰႱႲႳႴႵႶႷႸ
- ႺႻႼႽႾႿჀჁჂჃჄჅ჆Ⴧ჈჉჊჋჌Ⴭ჎჏აბგ
- ევზთიკლმნოპჟრსტუფქღყშჩცძწ
- ხჯჰჱჲჳჴჵჶჷჸჹჺ჻ჼჽჾჿᄀᄁᄂᄃᄄᄅᄆ
- ᄈᄉᄊᄋᄌᄍᄎᄏᄐᄑᄒᄓᄔᄕᄖᄗᄘᄙᄚᄛᄜᄝᄞᄟᄠ
- ᄢᄣᄤᄥᄦᄧᄨᄩᄪᄫᄬᄭᄮᄯᄰᄱᄲᄳᄴᄵᄶᄷᄸᄹᄺ
- ᄼᄽᄾᄿᅀᅁᅂᅃᅄᅅᅆᅇᅈᅉᅊᅋᅌᅍᅎᅏᅐᅑᅒᅓᅔ
- ᅖᅗᅘᅙᅚᅛᅜᅝᅞᅟᅠᅡᅢᅣᅤᅥᅦᅧᅨᅩᅪᅫᅬᅭᅮ
- ᅰᅱᅲᅳᅴᅵᅶᅷᅸᅹᅺᅻᅼᅽᅾᅿᆀᆁᆂᆃᆄᆅᆆᆇᆈ
- ᆊᆋᆌᆍᆎᆏᆐᆑᆒᆓᆔᆕᆖᆗᆘᆙᆚᆛᆜᆝᆞᆟᆠᆡᆢ
- ᆤᆥᆦᆧᆨᆩᆪᆫᆬᆭᆮᆯᆰᆱᆲᆳᆴᆵᆶᆷᆸᆹᆺᆻᆼ
- ᆾᆿᇀᇁᇂᇃᇄᇅᇆᇇᇈᇉᇊᇋᇌᇍᇎᇏᇐᇑᇒᇓᇔᇕᇖ
- ᇘᇙᇚᇛᇜᇝᇞᇟᇠᇡᇢᇣᇤᇥᇦᇧᇨᇩᇪᇫᇬᇭᇮᇯᇰ
- ᇲᇳᇴᇵᇶᇷᇸᇹᇺᇻᇼᇽᇾᇿሀሁሂሃሄህሆሇለሉሊ
- ሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤ
- ሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾ
- ቀቁቂቃቄቅቆቇቈ቉ቊቋቌቍ቎቏ቐቑቒቓቔቕቖ቗ቘ
- ቚቛቜቝ቞቟በቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲ
- ቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኇኈ኉ኊኋኌ
- ኎኏ነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦ
- ከኩኪካኬክኮኯኰ኱ኲኳኴኵ኶኷ኸኹኺኻኼኽኾ኿ዀ
- ዂዃዄዅ዆዇ወዉዊዋዌውዎዏዐዑዒዓዔዕዖ዗ዘዙዚ
- ዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮዯደዱዲዳዴ
- ዶዷዸዹዺዻዼዽዾዿጀጁጂጃጄጅጆጇገጉጊጋጌግጎ
- ጐ጑ጒጓጔጕ጖጗ጘጙጚጛጜጝጞጟጠጡጢጣጤጥጦጧጨ
- ጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂ
- ፄፅፆፇፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗፘፙፚ፛፜
- ፞፟፠፡።፣፤፥፦፧፨፩፪፫፬፭፮፯፰፱፲፳፴፵፶
- ፸፹፺፻፼፽፾፿ᎀᎁᎂᎃᎄᎅᎆᎇᎈᎉᎊᎋᎌᎍᎎᎏ᎐
- ᎒᎓᎔᎕᎖᎗᎘᎙᎚᎛᎜᎝᎞᎟ᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪ
- ᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎼᎽᎾᎿᏀᏁᏂᏃᏄ
- ᏆᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏑᏒᏓᏔᏕᏖᏗᏘᏙᏚᏛᏜᏝᏞ
- ᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯᏰᏱᏲᏳᏴᏵ᏶᏷ᏸ
- ᏺᏻᏼᏽ᏾᏿᐀ᐁᐂᐃᐄᐅᐆᐇᐈᐉᐊᐋᐌᐍᐎᐏᐐᐑᐒ
- ᐔᐕᐖᐗᐘᐙᐚᐛᐜᐝᐞᐟᐠᐡᐢᐣᐤᐥᐦᐧᐨᐩᐪᐫᐬ
- ᐮᐯᐰᐱᐲᐳᐴᐵᐶᐷᐸᐹᐺᐻᐼᐽᐾᐿᑀᑁᑂᑃᑄᑅᑆ
- ᑈᑉᑊᑋᑌᑍᑎᑏᑐᑑᑒᑓᑔᑕᑖᑗᑘᑙᑚᑛᑜᑝᑞᑟᑠ
- ᑢᑣᑤᑥᑦᑧᑨᑩᑪᑫᑬᑭᑮᑯᑰᑱᑲᑳᑴᑵᑶᑷᑸᑹᑺ
- ᑼᑽᑾᑿᒀᒁᒂᒃᒄᒅᒆᒇᒈᒉᒊᒋᒌᒍᒎᒏᒐᒑᒒᒓᒔ
- ᒖᒗᒘᒙᒚᒛᒜᒝᒞᒟᒠᒡᒢᒣᒤᒥᒦᒧᒨᒩᒪᒫᒬᒭᒮ
- ᒰᒱᒲᒳᒴᒵᒶᒷᒸᒹᒺᒻᒼᒽᒾᒿᓀᓁᓂᓃᓄᓅᓆᓇᓈ
- ᓊᓋᓌᓍᓎᓏᓐᓑᓒᓓᓔᓕᓖᓗᓘᓙᓚᓛᓜᓝᓞᓟᓠᓡᓢ
- ᓤᓥᓦᓧᓨᓩᓪᓫᓬᓭᓮᓯᓰᓱᓲᓳᓴᓵᓶᓷᓸᓹᓺᓻᓼ
- ᓾᓿᔀᔁᔂᔃᔄᔅᔆᔇᔈᔉᔊᔋᔌᔍᔎᔏᔐᔑᔒᔓᔔᔕᔖ
- ᔘᔙᔚᔛᔜᔝᔞᔟᔠᔡᔢᔣᔤᔥᔦᔧᔨᔩᔪᔫᔬᔭᔮᔯᔰ
- ᔲᔳᔴᔵᔶᔷᔸᔹᔺᔻᔼᔽᔾᔿᕀᕁᕂᕃᕄᕅᕆᕇᕈᕉᕊ
- ᕌᕍᕎᕏᕐᕑᕒᕓᕔᕕᕖᕗᕘᕙᕚᕛᕜᕝᕞᕟᕠᕡᕢᕣᕤ
- ᕦᕧᕨᕩᕪᕫᕬᕭᕮᕯᕰᕱᕲᕳᕴᕵᕶᕷᕸᕹᕺᕻᕼᕽᕾ
- ᖀᖁᖂᖃᖄᖅᖆᖇᖈᖉᖊᖋᖌᖍᖎᖏᖐᖑᖒᖓᖔᖕᖖᖗᖘ
- ᖚᖛᖜᖝᖞᖟᖠᖡᖢᖣᖤᖥᖦᖧᖨᖩᖪᖫᖬᖭᖮᖯᖰᖱᖲ
- ᖴᖵᖶᖷᖸᖹᖺᖻᖼᖽᖾᖿᗀᗁᗂᗃᗄᗅᗆᗇᗈᗉᗊᗋᗌ
- ᗎᗏᗐᗑᗒᗓᗔᗕᗖᗗᗘᗙᗚᗛᗜᗝᗞᗟᗠᗡᗢᗣᗤᗥᗦ
- ᗨᗩᗪᗫᗬᗭᗮᗯᗰᗱᗲᗳᗴᗵᗶᗷᗸᗹᗺᗻᗼᗽᗾᗿᘀ
- ᘂᘃᘄᘅᘆᘇᘈᘉᘊᘋᘌᘍᘎᘏᘐᘑᘒᘓᘔᘕᘖᘗᘘᘙᘚ
- ᘜᘝᘞᘟᘠᘡᘢᘣᘤᘥᘦᘧᘨᘩᘪᘫᘬᘭᘮᘯᘰᘱᘲᘳᘴ
- ᘶᘷᘸᘹᘺᘻᘼᘽᘾᘿᙀᙁᙂᙃᙄᙅᙆᙇᙈᙉᙊᙋᙌᙍᙎ
- ᙐᙑᙒᙓᙔᙕᙖᙗᙘᙙᙚᙛᙜᙝᙞᙟᙠᙡᙢᙣᙤᙥᙦᙧᙨ
- ᙪᙫᙬ᙭᙮ᙯᙰᙱᙲᙳᙴᙵᙶᙷᙸᙹᙺᙻᙼᙽᙾᙿ ᚁᚂ
- ᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ᚛᚜
- ᚞᚟ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶ
- ᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐ
- ᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ
- ᛬᛭ᛮᛯᛰᛱᛲᛳᛴᛵᛶᛷᛸ᛹᛺᛻᛼᛽᛾᛿ᜀᜁᜂᜃᜄ
- ᜆᜇᜈᜉᜊᜋᜌᜍᜎᜏᜐᜑᜒᜓ᜔᜕᜖᜗᜘᜙᜚᜛᜜᜝᜞
- ᜠᜡᜢᜣᜤᜥᜦᜧᜨᜩᜪᜫᜬᜭᜮᜯᜰᜱᜲᜳ᜴᜵᜶᜷᜸
- ᜺᜻᜼᜽᜾᜿ᝀᝁᝂᝃᝄᝅᝆᝇᝈᝉᝊᝋᝌᝍᝎᝏᝐᝑᝒ
- ᝔᝕᝖᝗᝘᝙᝚᝛᝜᝝᝞᝟ᝠᝡᝢᝣᝤᝥᝦᝧᝨᝩᝪᝫᝬ
- ᝮᝯᝰ᝱ᝲᝳ᝴᝵᝶᝷᝸᝹᝺᝻᝼᝽᝾᝿កខគឃងចឆ
- ឈញដឋឌឍណតថទធនបផពភមយរលវឝឞសហ
- អឣឤឥឦឧឨឩឪឫឬឭឮឯឰឱឲឳ឴឵ាិីឹឺ
- ូួើឿៀេែៃោៅំះៈ៉៊់៌៍៎៏័៑្៓។
- ៖ៗ៘៙៚៛ៜ៝៞៟០១២៣៤៥៦៧៨៩៪៫៬៭៮
- ៰៱៲៳៴៵៶៷៸៹៺៻៼៽៾៿᠀᠁᠂᠃᠄᠅᠆᠇᠈
- ᠊᠋᠌᠍᠎᠏᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙᠚᠛᠜᠝᠞᠟ᠠᠡᠢ
- ᠤᠥᠦᠧᠨᠩᠪᠫᠬᠭᠮᠯᠰᠱᠲᠳᠴᠵᠶᠷᠸᠹᠺᠻᠼ
- ᠾᠿᡀᡁᡂᡃᡄᡅᡆᡇᡈᡉᡊᡋᡌᡍᡎᡏᡐᡑᡒᡓᡔᡕᡖ
- ᡘᡙᡚᡛᡜᡝᡞᡟᡠᡡᡢᡣᡤᡥᡦᡧᡨᡩᡪᡫᡬᡭᡮᡯᡰ
- ᡲᡳᡴᡵᡶᡷᡸ᡹᡺᡻᡼᡽᡾᡿ᢀᢁᢂᢃᢄᢅᢆᢇᢈᢉᢊ
- ᢌᢍᢎᢏᢐᢑᢒᢓᢔᢕᢖᢗᢘᢙᢚᢛᢜᢝᢞᢟᢠᢡᢢᢣᢤ
- ᢦᢧᢨᢩᢪ᢫᢬᢭᢮᢯ᢰᢱᢲᢳᢴᢵᢶᢷᢸᢹᢺᢻᢼᢽᢾ
- ᣀᣁᣂᣃᣄᣅᣆᣇᣈᣉᣊᣋᣌᣍᣎᣏᣐᣑᣒᣓᣔᣕᣖᣗᣘ
- ᣚᣛᣜᣝᣞᣟᣠᣡᣢᣣᣤᣥᣦᣧᣨᣩᣪᣫᣬᣭᣮᣯᣰᣱᣲ
- ᣴᣵ᣶᣷᣸᣹᣺᣻᣼᣽᣾᣿ᤀᤁᤂᤃᤄᤅᤆᤇᤈᤉᤊᤋᤌ
- ᤎᤏᤐᤑᤒᤓᤔᤕᤖᤗᤘᤙᤚᤛᤜᤝᤞ᤟ᤠᤡᤢᤣᤤᤥᤦ
- ᤨᤩᤪᤫ᤬᤭᤮᤯ᤰᤱᤲᤳᤴᤵᤶᤷᤸ᤻᤹᤺᤼᤽᤾᤿᥀
- ᥂᥃᥄᥅᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏ᥐᥑᥒᥓᥔᥕᥖᥗᥘᥙᥚ
- ᥜᥝᥞᥟᥠᥡᥢᥣᥤᥥᥦᥧᥨᥩᥪᥫᥬᥭ᥮᥯ᥰᥱᥲᥳᥴ
- ᥶᥷᥸᥹᥺᥻᥼᥽᥾᥿ᦀᦁᦂᦃᦄᦅᦆᦇᦈᦉᦊᦋᦌᦍᦎ
- ᦐᦑᦒᦓᦔᦕᦖᦗᦘᦙᦚᦛᦜᦝᦞᦟᦠᦡᦢᦣᦤᦥᦦᦧᦨ
- ᦪᦫ᦬᦭᦮᦯ᦰᦱᦲᦳᦴᦵᦶᦷᦸᦹᦺᦻᦼᦽᦾᦿᧀᧁᧂ
- ᧄᧅᧆᧇᧈᧉ᧊᧋᧌᧍᧎᧏᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙᧚᧛᧜
- ᧞᧟᧠᧡᧢᧣᧤᧥᧦᧧᧨᧩᧪᧫᧬᧭᧮᧯᧰᧱᧲᧳᧴᧵᧶
- ᧸᧹᧺᧻᧼᧽᧾᧿ᨀᨁᨂᨃᨄᨅᨆᨇᨈᨉᨊᨋᨌᨍᨎᨏᨐ
- ᨒᨓᨔᨕᨖᨘᨗᨙᨚᨛ᨜᨝᨞᨟ᨠᨡᨢᨣᨤᨥᨦᨧᨨᨩᨪ
- ᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩂᩃᩄ
- ᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩒᩓᩔᩕᩖᩗᩘᩙᩚᩛᩜᩝᩞ
- ᩠ᩡᩢᩣᩤᩥᩦᩧᩨᩩᩪᩫᩬᩭᩮᩯᩰᩱᩲᩳᩴ᩵᩶᩷᩸
- ᩺᩻᩼᩽᩾᩿᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉᪊᪋᪌᪍᪎᪏᪐᪑᪒
- ᪔᪕᪖᪗᪘᪙᪚᪛᪜᪝᪞᪟᪠᪡᪢᪣᪤᪥᪦ᪧ᪨᪩᪪᪫᪬
- ᪮᪯᪵᪶᪷᪸᪹᪺᪽᪰᪱᪲᪳᪴᪻᪼᪾ᪿᫀ᫃᫄᫁᫂᫅᫆
- ᫊᫈᫉᫋ᫌᫍᫎ᫏᫐᫑᫒᫓᫔᫕᫖᫗᫘᫙᫚᫛᫜᫝᫞᫟᫠
- ᫢᫣᫤᫥᫦᫧᫨᫩᫪᫫᫬᫭᫮᫯᫰᫱᫲᫳᫴᫵᫶᫷᫸᫹᫺
- ᫼᫽᫾᫿ᬀᬁᬂᬃᬄᬅᬆᬇᬈᬉᬊᬋᬌᬍᬎᬏᬐᬑᬒᬓᬔ
- ᬖᬗᬘᬙᬚᬛᬜᬝᬞᬟᬠᬡᬢᬣᬤᬥᬦᬧᬨᬩᬪᬫᬬᬭᬮ
- ᬰᬱᬲᬳ᬴ᬵᬶᬷᬸᬹᬺᬻᬼᬽᬾᬿᭀᭁᭂᭃ᭄ᭅᭆᭇᭈ
- ᭊᭋᭌ᭍᭎᭏᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙᭚᭛᭜᭝᭞᭟᭠᭡᭢
- ᭤᭥᭦᭧᭨᭩᭪᭬᭫᭭᭮᭯᭰᭱᭲᭳᭴᭵᭶᭷᭸᭹᭺᭻᭼
- ᭾᭿ᮀᮁᮂᮃᮄᮅᮆᮇᮈᮉᮊᮋᮌᮍᮎᮏᮐᮑᮒᮓᮔᮕᮖ
- ᮘᮙᮚᮛᮜᮝᮞᮟᮠᮡᮢᮣᮤᮥᮦᮧᮨᮩ᮪᮫ᮬᮭᮮᮯ᮰
- ᮲᮳᮴᮵᮶᮷᮸᮹ᮺᮻᮼᮽᮾᮿᯀᯁᯂᯃᯄᯅᯆᯇᯈᯉᯊ
- ᯌᯍᯎᯏᯐᯑᯒᯓᯔᯕᯖᯗᯘᯙᯚᯛᯜᯝᯞᯟᯠᯡᯢᯣᯤ
- ᯦ᯧᯨᯩᯪᯫᯬᯭᯮᯯᯰᯱ᯲᯳᯴᯵᯶᯷᯸᯹᯺᯻᯼᯽᯾
- ᰀᰁᰂᰃᰄᰅᰆᰇᰈᰉᰊᰋᰌᰍᰎᰏᰐᰑᰒᰓᰔᰕᰖᰗᰘ
- ᰚᰛᰜᰝᰞᰟᰠᰡᰢᰣᰤᰥᰦᰧᰨᰩᰪᰫᰬᰭᰮᰯᰰᰱᰲ
- ᰴᰵᰶ᰷᰸᰹᰺᰻᰼᰽᰾᰿᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉᱊᱋᱌
- ᱎᱏ᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙ᱚᱛᱜᱝᱞᱟᱠᱡᱢᱣᱤᱥᱦ
- ᱨᱩᱪᱫᱬᱭᱮᱯᱰᱱᱲᱳᱴᱵᱶᱷᱸᱹᱺᱻᱼᱽ᱾᱿ᲀ
- ᲂᲃᲄᲅᲆᲇᲈᲉᲊ᲋᲌᲍᲎᲏ᲐᲑᲒᲓᲔᲕᲖᲗᲘᲙᲚ
- ᲜᲝᲞᲟᲠᲡᲢᲣᲤᲥᲦᲧᲨᲩᲪᲫᲬᲭᲮᲯᲰᲱᲲᲳᲴ
- ᲶᲷᲸᲹᲺ᲻᲼ᲽᲾᲿ᳀᳁᳂᳃᳄᳅᳆᳇᳈᳉᳊᳋᳌᳍᳎
- ᳐᳑᳒᳓᳔᳕᳖᳗᳘᳙᳜᳝᳞᳟᳚᳛᳠᳡᳢᳣᳤᳥᳦᳧᳨
- ᳪᳫᳬ᳭ᳮᳯᳰᳱᳲᳳ᳴ᳵᳶ᳷᳸᳹ᳺ᳻᳼᳽᳾᳿ᴀᴁᴂ
- ᴄᴅᴆᴇᴈᴉᴊᴋᴌᴍᴎᴏᴐᴑᴒᴓᴔᴕᴖᴗᴘᴙᴚᴛᴜ
- ᴞᴟᴠᴡᴢᴣᴤᴥᴦᴧᴨᴩᴪᴫᴬᴭᴮᴯᴰᴱᴲᴳᴴᴵᴶ
- ᴸᴹᴺᴻᴼᴽᴾᴿᵀᵁᵂᵃᵄᵅᵆᵇᵈᵉᵊᵋᵌᵍᵎᵏᵐ
- ᵒᵓᵔᵕᵖᵗᵘᵙᵚᵛᵜᵝᵞᵟᵠᵡᵢᵣᵤᵥᵦᵧᵨᵩᵪ
- ᵬᵭᵮᵯᵰᵱᵲᵳᵴᵵᵶᵷᵸᵹᵺᵻᵼᵽᵾᵿᶀᶁᶂᶃᶄ
- ᶆᶇᶈᶉᶊᶋᶌᶍᶎᶏᶐᶑᶒᶓᶔᶕᶖᶗᶘᶙᶚᶛᶜᶝᶞ
- ᶠᶡᶢᶣᶤᶥᶦᶧᶨᶩᶪᶫᶬᶭᶮᶯᶰᶱᶲᶳᶴᶵᶶᶷᶸ
- ᶺᶻᶼᶽᶾᶿ᷐᷎᷂᷊᷏᷀᷁᷃᷄᷅᷆᷇᷈᷉᷋᷌᷑᷒᷍
- ᷔᷕᷖᷗᷘᷙᷚᷛᷜᷝᷞᷟᷠᷡᷢᷣᷤᷥᷦᷧᷨᷩᷪᷫᷬ
- ᷺᷹᷽᷿᷷᷸ᷮᷯᷰᷱᷲᷳᷴ᷵᷻᷾᷶᷼ḀḁḂḃḄḅḆ
- ḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠ
- ḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺ
- ḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔ
- ṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮ
- ṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈ
- ẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙẚẛẜẝẞẟẠạẢ
- ẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼ
- ẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖ
- ỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰ
- ỲỳỴỵỶỷỸỹỺỻỼỽỾỿἀἁἂἃἄἅἆἇἈἉἊ
- ἌἍἎἏἐἑἒἓἔἕ἖἗ἘἙἚἛἜἝ἞἟ἠἡἢἣἤ
- ἦἧἨἩἪἫἬἭἮἯἰἱἲἳἴἵἶἷἸἹἺἻἼἽἾ
- ὀὁὂὃὄὅ὆὇ὈὉὊὋὌὍ὎὏ὐὑὒὓὔὕὖὗ὘
- ὚Ὓ὜Ὕ὞ὟὠὡὢὣὤὥὦὧὨὩὪὫὬὭὮὯὰάὲ
- ὴήὶίὸόὺύὼώ὾὿ᾀᾁᾂᾃᾄᾅᾆᾇᾈᾉᾊᾋᾌ
- ᾎᾏᾐᾑᾒᾓᾔᾕᾖᾗᾘᾙᾚᾛᾜᾝᾞᾟᾠᾡᾢᾣᾤᾥᾦ
- ᾨᾩᾪᾫᾬᾭᾮᾯᾰᾱᾲᾳᾴ᾵ᾶᾷᾸᾹᾺΆᾼ᾽ι᾿῀
- ῂῃῄ῅ῆῇῈΈῊΉῌ῍῎῏ῐῑῒΐ῔῕ῖῗῘῙῚ
- ῜῝῞῟ῠῡῢΰῤῥῦῧῨῩῪΎῬ῭΅`῰῱ῲῳῴ
- ῶῷῸΌῺΏῼ´῾῿           ​‌‍‎
- ‐‑‒–—―‖‗‘’‚‛“”„‟†‡•‣․‥…‧ 
- ‪‫‬‭‮ ‰‱′″‴‵‶‷‸‹›※‼‽‾‿⁀⁁⁂
- ⁄⁅⁆⁇⁈⁉⁊⁋⁌⁍⁎⁏⁐⁑⁒⁓⁔⁕⁖⁗⁘⁙⁚⁛⁜
- ⁞ ⁠⁡⁢⁣⁤⁥⁦⁧⁨⁩⁪⁫⁬⁭⁮⁯⁰ⁱ⁲⁳⁴⁵⁶
- ⁸⁹⁺⁻⁼⁽⁾ⁿ₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎₏ₐ
- ₒₓₔₕₖₗₘₙₚₛₜ₝₞₟₠₡₢₣₤₥₦₧₨₩₪
- €₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽₾₿⃀⃁⃂⃃⃄
- ⃆⃇⃈⃉⃊⃋⃌⃍⃎⃏⃒⃓⃘⃙⃚⃐⃑⃔⃕⃖⃗⃛⃜⃝⃞
- ⃠⃡⃢⃣⃤⃥⃦⃪⃫⃨⃬⃭⃮⃯⃧⃩⃰⃱⃲⃳⃴⃵⃶⃷⃸
- ⃺⃻⃼⃽⃾⃿℀℁ℂ℃℄℅℆ℇ℈℉ℊℋℌℍℎℏℐℑℒ
- ℔ℕ№℗℘ℙℚℛℜℝ℞℟℠℡™℣ℤ℥Ω℧ℨ℩KÅℬ
- ℮ℯℰℱℲℳℴℵℶℷℸℹ℺℻ℼℽℾℿ⅀⅁⅂⅃⅄ⅅⅆ
- ⅈⅉ⅊⅋⅌⅍ⅎ⅏⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅟Ⅰ
- ⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅺ
- ⅼⅽⅾⅿↀↁↂↃↄↅↆↇↈ↉↊↋↌↍↎↏←↑→↓↔
- ↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮
- ↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈
- ⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢
- ⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼
- ⇾⇿∀∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑−∓∔∕∖
- ∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰
- ∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊
- ≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤
- ≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾
- ⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘
- ⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲
- ⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌
- ⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦
- ⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿⌀
- ⌂⌃⌄⌅⌆⌇⌈⌉⌊⌋⌌⌍⌎⌏⌐⌑⌒⌓⌔⌕⌖⌗⌘⌙⌚
- ⌜⌝⌞⌟⌠⌡⌢⌣⌤⌥⌦⌧⌨〈〉⌫⌬⌭⌮⌯⌰⌱⌲⌳⌴
- ⌶⌷⌸⌹⌺⌻⌼⌽⌾⌿⍀⍁⍂⍃⍄⍅⍆⍇⍈⍉⍊⍋⍌⍍⍎
- ⍐⍑⍒⍓⍔⍕⍖⍗⍘⍙⍚⍛⍜⍝⍞⍟⍠⍡⍢⍣⍤⍥⍦⍧⍨
- ⍪⍫⍬⍭⍮⍯⍰⍱⍲⍳⍴⍵⍶⍷⍸⍹⍺⍻⍼⍽⍾⍿⎀⎁⎂
- ⎄⎅⎆⎇⎈⎉⎊⎋⎌⎍⎎⎏⎐⎑⎒⎓⎔⎕⎖⎗⎘⎙⎚⎛⎜
- ⎞⎟⎠⎡⎢⎣⎤⎥⎦⎧⎨⎩⎪⎫⎬⎭⎮⎯⎰⎱⎲⎳⎴⎵⎶
- ⎸⎹⎺⎻⎼⎽⎾⎿⏀⏁⏂⏃⏄⏅⏆⏇⏈⏉⏊⏋⏌⏍⏎⏏⏐
- ⏒⏓⏔⏕⏖⏗⏘⏙⏚⏛⏜⏝⏞⏟⏠⏡⏢⏣⏤⏥⏦⏧⏨⏩⏪
- ⏬⏭⏮⏯⏰⏱⏲⏳⏴⏵⏶⏷⏸⏹⏺⏻⏼⏽⏾⏿␀␁␂␃␄
- ␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞
- ␠␡␢␣␤␥␦␧␨␩␪␫␬␭␮␯␰␱␲␳␴␵␶␷␸
- ␺␻␼␽␾␿⑀⑁⑂⑃⑄⑅⑆⑇⑈⑉⑊⑋⑌⑍⑎⑏⑐⑑⑒
- ⑔⑕⑖⑗⑘⑙⑚⑛⑜⑝⑞⑟①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬
- ⑮⑯⑰⑱⑲⑳⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆
- ⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⒜⒝⒞⒟⒠
- ⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵ⒶⒷⒸⒹⒺ
- ⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔ
- ⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪⓫⓬⓭⓮
- ⓰⓱⓲⓳⓴⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾⓿─━│┃┄┅┆┇┈
- ┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢
- ┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼
- ┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖
- ╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰
- ╲╳╴╵╶╷╸╹╺╻╼╽╾╿▀▁▂▃▄▅▆▇█▉▊
- ▌▍▎▏▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤
- ▦▧▨▩▪▫▬▭▮▯▰▱▲△▴▵▶▷▸▹►▻▼▽▾
- ◀◁◂◃◄◅◆◇◈◉◊○◌◍◎●◐◑◒◓◔◕◖◗◘
- ◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯◰◱◲
- ◴◵◶◷◸◹◺◻◼◽◾◿☀☁☂☃☄★☆☇☈☉☊☋☌
- ☎☏☐☑☒☓☔☕☖☗☘☙☚☛☜☝☞☟☠☡☢☣☤☥☦
- ☨☩☪☫☬☭☮☯☰☱☲☳☴☵☶☷☸☹☺☻☼☽☾☿♀
- ♂♃♄♅♆♇♈♉♊♋♌♍♎♏♐♑♒♓♔♕♖♗♘♙♚
- ♜♝♞♟♠♡♢♣♤♥♦♧♨♩♪♫♬♭♮♯♰♱♲♳♴
- ♶♷♸♹♺♻♼♽♾♿⚀⚁⚂⚃⚄⚅⚆⚇⚈⚉⚊⚋⚌⚍⚎
- ⚐⚑⚒⚓⚔⚕⚖⚗⚘⚙⚚⚛⚜⚝⚞⚟⚠⚡⚢⚣⚤⚥⚦⚧⚨
- ⚪⚫⚬⚭⚮⚯⚰⚱⚲⚳⚴⚵⚶⚷⚸⚹⚺⚻⚼⚽⚾⚿⛀⛁⛂
- ⛄⛅⛆⛇⛈⛉⛊⛋⛌⛍⛎⛏⛐⛑⛒⛓⛔⛕⛖⛗⛘⛙⛚⛛⛜
- ⛞⛟⛠⛡⛢⛣⛤⛥⛦⛧⛨⛩⛪⛫⛬⛭⛮⛯⛰⛱⛲⛳⛴⛵⛶
- ⛸⛹⛺⛻⛼⛽⛾⛿✀✁✂✃✄✅✆✇✈✉✊✋✌✍✎✏✐
- ✒✓✔✕✖✗✘✙✚✛✜✝✞✟✠✡✢✣✤✥✦✧✨✩✪
- ✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄
- ❆❇❈❉❊❋❌❍❎❏❐❑❒❓❔❕❖❗❘❙❚❛❜❝❞
- ❠❡❢❣❤❥❦❧❨❩❪❫❬❭❮❯❰❱❲❳❴❵❶❷❸
- ❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➊➋➌➍➎➏➐➑➒
- ➔➕➖➗➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬
- ➮➯➰➱➲➳➴➵➶➷➸➹➺➻➼➽➾➿⟀⟁⟂⟃⟄⟅⟆
- ⟈⟉⟊⟋⟌⟍⟎⟏⟐⟑⟒⟓⟔⟕⟖⟗⟘⟙⟚⟛⟜⟝⟞⟟⟠
- ⟢⟣⟤⟥⟦⟧⟨⟩⟪⟫⟬⟭⟮⟯⟰⟱⟲⟳⟴⟵⟶⟷⟸⟹⟺
- ⟼⟽⟾⟿⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔
- ⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮
- ⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈
- ⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢
- ⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼
- ⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖
- ⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰
- ⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊
- ⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤
- ⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾
- ⤀⤁⤂⤃⤄⤅⤆⤇⤈⤉⤊⤋⤌⤍⤎⤏⤐⤑⤒⤓⤔⤕⤖⤗⤘
- ⤚⤛⤜⤝⤞⤟⤠⤡⤢⤣⤤⤥⤦⤧⤨⤩⤪⤫⤬⤭⤮⤯⤰⤱⤲
- ⤴⤵⤶⤷⤸⤹⤺⤻⤼⤽⤾⤿⥀⥁⥂⥃⥄⥅⥆⥇⥈⥉⥊⥋⥌
- ⥎⥏⥐⥑⥒⥓⥔⥕⥖⥗⥘⥙⥚⥛⥜⥝⥞⥟⥠⥡⥢⥣⥤⥥⥦
- ⥨⥩⥪⥫⥬⥭⥮⥯⥰⥱⥲⥳⥴⥵⥶⥷⥸⥹⥺⥻⥼⥽⥾⥿⦀
- ⦂⦃⦄⦅⦆⦇⦈⦉⦊⦋⦌⦍⦎⦏⦐⦑⦒⦓⦔⦕⦖⦗⦘⦙⦚
- ⦜⦝⦞⦟⦠⦡⦢⦣⦤⦥⦦⦧⦨⦩⦪⦫⦬⦭⦮⦯⦰⦱⦲⦳⦴
- ⦶⦷⦸⦹⦺⦻⦼⦽⦾⦿⧀⧁⧂⧃⧄⧅⧆⧇⧈⧉⧊⧋⧌⧍⧎
- ⧐⧑⧒⧓⧔⧕⧖⧗⧘⧙⧚⧛⧜⧝⧞⧟⧠⧡⧢⧣⧤⧥⧦⧧⧨
- ⧪⧫⧬⧭⧮⧯⧰⧱⧲⧳⧴⧵⧶⧷⧸⧹⧺⧻⧼⧽⧾⧿⨀⨁⨂
- ⨄⨅⨆⨇⨈⨉⨊⨋⨌⨍⨎⨏⨐⨑⨒⨓⨔⨕⨖⨗⨘⨙⨚⨛⨜
- ⨞⨟⨠⨡⨢⨣⨤⨥⨦⨧⨨⨩⨪⨫⨬⨭⨮⨯⨰⨱⨲⨳⨴⨵⨶
- ⨸⨹⨺⨻⨼⨽⨾⨿⩀⩁⩂⩃⩄⩅⩆⩇⩈⩉⩊⩋⩌⩍⩎⩏⩐
- ⩒⩓⩔⩕⩖⩗⩘⩙⩚⩛⩜⩝⩞⩟⩠⩡⩢⩣⩤⩥⩦⩧⩨⩩⩪
- ⩬⩭⩮⩯⩰⩱⩲⩳⩴⩵⩶⩷⩸⩹⩺⩻⩼⩽⩾⩿⪀⪁⪂⪃⪄
- ⪆⪇⪈⪉⪊⪋⪌⪍⪎⪏⪐⪑⪒⪓⪔⪕⪖⪗⪘⪙⪚⪛⪜⪝⪞
- ⪠⪡⪢⪣⪤⪥⪦⪧⪨⪩⪪⪫⪬⪭⪮⪯⪰⪱⪲⪳⪴⪵⪶⪷⪸
- ⪺⪻⪼⪽⪾⪿⫀⫁⫂⫃⫄⫅⫆⫇⫈⫉⫊⫋⫌⫍⫎⫏⫐⫑⫒
- ⫔⫕⫖⫗⫘⫙⫚⫛⫝̸⫝⫞⫟⫠⫡⫢⫣⫤⫥⫦⫧⫨⫩⫪⫫⫬
- ⫮⫯⫰⫱⫲⫳⫴⫵⫶⫷⫸⫹⫺⫻⫼⫽⫾⫿⬀⬁⬂⬃⬄⬅⬆
- ⬈⬉⬊⬋⬌⬍⬎⬏⬐⬑⬒⬓⬔⬕⬖⬗⬘⬙⬚⬛⬜⬝⬞⬟⬠
- ⬢⬣⬤⬥⬦⬧⬨⬩⬪⬫⬬⬭⬮⬯⬰⬱⬲⬳⬴⬵⬶⬷⬸⬹⬺
- ⬼⬽⬾⬿⭀⭁⭂⭃⭄⭅⭆⭇⭈⭉⭊⭋⭌⭍⭎⭏⭐⭑⭒⭓⭔
- ⭖⭗⭘⭙⭚⭛⭜⭝⭞⭟⭠⭡⭢⭣⭤⭥⭦⭧⭨⭩⭪⭫⭬⭭⭮
- ⭰⭱⭲⭳⭴⭵⭶⭷⭸⭹⭺⭻⭼⭽⭾⭿⮀⮁⮂⮃⮄⮅⮆⮇⮈
- ⮊⮋⮌⮍⮎⮏⮐⮑⮒⮓⮔⮕⮖⮗⮘⮙⮚⮛⮜⮝⮞⮟⮠⮡⮢
- ⮤⮥⮦⮧⮨⮩⮪⮫⮬⮭⮮⮯⮰⮱⮲⮳⮴⮵⮶⮷⮸⮹⮺⮻⮼
- ⮾⮿⯀⯁⯂⯃⯄⯅⯆⯇⯈⯉⯊⯋⯌⯍⯎⯏⯐⯑⯒⯓⯔⯕⯖
- ⯘⯙⯚⯛⯜⯝⯞⯟⯠⯡⯢⯣⯤⯥⯦⯧⯨⯩⯪⯫⯬⯭⯮⯯⯰
- ⯲⯳⯴⯵⯶⯷⯸⯹⯺⯻⯼⯽⯾⯿ⰀⰁⰂⰃⰄⰅⰆⰇⰈⰉⰊ
- ⰌⰍⰎⰏⰐⰑⰒⰓⰔⰕⰖⰗⰘⰙⰚⰛⰜⰝⰞⰟⰠⰡⰢⰣⰤ
- ⰦⰧⰨⰩⰪⰫⰬⰭⰮⰯⰰⰱⰲⰳⰴⰵⰶⰷⰸⰹⰺⰻⰼⰽⰾ
- ⱀⱁⱂⱃⱄⱅⱆⱇⱈⱉⱊⱋⱌⱍⱎⱏⱐⱑⱒⱓⱔⱕⱖⱗⱘ
- ⱚⱛⱜⱝⱞⱟⱠⱡⱢⱣⱤⱥⱦⱧⱨⱩⱪⱫⱬⱭⱮⱯⱰⱱⱲ
- ⱴⱵⱶⱷⱸⱹⱺⱻⱼⱽⱾⱿⲀⲁⲂⲃⲄⲅⲆⲇⲈⲉⲊⲋⲌ
- ⲎⲏⲐⲑⲒⲓⲔⲕⲖⲗⲘⲙⲚⲛⲜⲝⲞⲟⲠⲡⲢⲣⲤⲥⲦ
- ⲨⲩⲪⲫⲬⲭⲮⲯⲰⲱⲲⲳⲴⲵⲶⲷⲸⲹⲺⲻⲼⲽⲾⲿⳀ
- ⳂⳃⳄⳅⳆⳇⳈⳉⳊⳋⳌⳍⳎⳏⳐⳑⳒⳓⳔⳕⳖⳗⳘⳙⳚ
- ⳜⳝⳞⳟⳠⳡⳢⳣⳤ⳥⳦⳧⳨⳩⳪ⳫⳬⳭⳮ⳯⳰⳱Ⳳⳳ⳴
- ⳶⳷⳸⳹⳺⳻⳼⳽⳾⳿ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉⴊⴋⴌⴍⴎ
- ⴐⴑⴒⴓⴔⴕⴖⴗⴘⴙⴚⴛⴜⴝⴞⴟⴠⴡⴢⴣⴤⴥ⴦ⴧ⴨
- ⴪⴫⴬ⴭ⴮⴯ⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻⴼⴽⴾⴿⵀⵁⵂ
- ⵄⵅⵆⵇⵈⵉⵊⵋⵌⵍⵎⵏⵐⵑⵒⵓⵔⵕⵖⵗⵘⵙⵚⵛⵜ
- ⵞⵟⵠⵡⵢⵣⵤⵥⵦⵧ⵨⵩⵪⵫⵬⵭⵮ⵯ⵰⵱⵲⵳⵴⵵⵶
- ⵸⵹⵺⵻⵼⵽⵾⵿ⶀⶁⶂⶃⶄⶅⶆⶇⶈⶉⶊⶋⶌⶍⶎⶏⶐ
- ⶒⶓⶔⶕⶖ⶗⶘⶙⶚⶛⶜⶝⶞⶟ⶠⶡⶢⶣⶤⶥⶦ⶧ⶨⶩⶪ
- ⶬⶭⶮ⶯ⶰⶱⶲⶳⶴⶵⶶ⶷ⶸⶹⶺⶻⶼⶽⶾ⶿ⷀⷁⷂⷃⷄ
- ⷆ⷇ⷈⷉⷊⷋⷌⷍⷎ⷏ⷐⷑⷒⷓⷔⷕⷖ⷗ⷘⷙⷚⷛⷜⷝⷞ
- ⷠⷡⷢⷣⷤⷥⷦⷧⷨⷩⷪⷫⷬⷭⷮⷯⷰⷱⷲⷳⷴⷵⷶⷷⷸ
- ⷺⷻⷼⷽⷾⷿ⸀⸁⸂⸃⸄⸅⸆⸇⸈⸉⸊⸋⸌⸍⸎⸏⸐⸑⸒
- ⸔⸕⸖⸗⸘⸙⸚⸛⸜⸝⸞⸟⸠⸡⸢⸣⸤⸥⸦⸧⸨⸩⸪⸫⸬
- ⸮ⸯ⸰⸱⸲⸳⸴⸵⸶⸷⸸⸹⸺⸻⸼⸽⸾⸿⹀⹁⹂⹃⹄⹅⹆
- ⹈⹉⹊⹋⹌⹍⹎⹏⹐⹑⹒⹓⹔⹕⹖⹗⹘⹙⹚⹛⹜⹝⹞⹟⹠
- ⹢⹣⹤⹥⹦⹧⹨⹩⹪⹫⹬⹭⹮⹯⹰⹱⹲⹳⹴⹵⹶⹷⹸⹹⹺
- ⹼⹽⹾⹿⺀⺁⺂⺃⺄⺅⺆⺇⺈⺉⺊⺋⺌⺍⺎⺏⺐⺑⺒⺓⺔
- ⺖⺗⺘⺙⺚⺛⺜⺝⺞⺟⺠⺡⺢⺣⺤⺥⺦⺧⺨⺩⺪⺫⺬⺭⺮
- ⺰⺱⺲⺳⺴⺵⺶⺷⺸⺹⺺⺻⺼⺽⺾⺿⻀⻁⻂⻃⻄⻅⻆⻇⻈
- ⻊⻋⻌⻍⻎⻏⻐⻑⻒⻓⻔⻕⻖⻗⻘⻙⻚⻛⻜⻝⻞⻟⻠⻡⻢
- ⻤⻥⻦⻧⻨⻩⻪⻫⻬⻭⻮⻯⻰⻱⻲⻳⻴⻵⻶⻷⻸⻹⻺⻻⻼
- ⻾⻿⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖
- ⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰
- ⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊
- ⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤
- ⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾
- ⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘
- ⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲
- ⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌
- ⿎⿏⿐⿑⿒⿓⿔⿕⿖⿗⿘⿙⿚⿛⿜⿝⿞⿟⿠⿡⿢⿣⿤⿥⿦
- ⿨⿩⿪⿫⿬⿭⿮⿯⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻⿼⿽⿾⿿　
- 。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚
- 〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴
- 〶〷〸〹〺〻〼〽〾〿぀ぁあぃいぅうぇえぉおかがきぎ
- ぐけげこごさざしじすずせぜそぞただちぢっつづてでと
- なにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめも
- やゅゆょよらりるれろゎわゐゑをんゔゕゖ゗゘゙゚゛゜
- ゞゟ゠ァアィイゥウェエォオカガキギクグケゲコゴサザ
- ジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバ
- ヒビピフブプヘベペホボポマミムメモャヤュユョヨラリ
- レロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ㄀㄁㄂㄃㄄
- ㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞ
- ㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩㄪㄫㄬㄭㄮㄯ㄰ㄱㄲㄳㄴㄵㄶㄷㄸ
- ㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒ
- ㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣㅤㅥㅦㅧㅨㅩㅪㅫㅬ
- ㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆ
- ㆈㆉㆊㆋㆌㆍㆎ㆏㆐㆑㆒㆓㆔㆕㆖㆗㆘㆙㆚㆛㆜㆝㆞㆟ㆠ
- ㆢㆣㆤㆥㆦㆧㆨㆩㆪㆫㆬㆭㆮㆯㆰㆱㆲㆳㆴㆵㆶㆷㆸㆹㆺ
- ㆼㆽㆾㆿ㇀㇁㇂㇃㇄㇅㇆㇇㇈㇉㇊㇋㇌㇍㇎㇏㇐㇑㇒㇓㇔
- ㇖㇗㇘㇙㇚㇛㇜㇝㇞㇟㇠㇡㇢㇣㇤㇥㇦㇧㇨㇩㇪㇫㇬㇭㇮
- ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ㈀㈁㈂㈃㈄㈅㈆㈇㈈
- ㈊㈋㈌㈍㈎㈏㈐㈑㈒㈓㈔㈕㈖㈗㈘㈙㈚㈛㈜㈝㈞㈟㈠㈡㈢
- ㈤㈥㈦㈧㈨㈩㈪㈫㈬㈭㈮㈯㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼
- ㈾㈿㉀㉁㉂㉃㉄㉅㉆㉇㉈㉉㉊㉋㉌㉍㉎㉏㉐㉑㉒㉓㉔㉕㉖
- ㉘㉙㉚㉛㉜㉝㉞㉟㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭㉮㉯㉰
- ㉲㉳㉴㉵㉶㉷㉸㉹㉺㉻㉼㉽㉾㉿㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㊊
- ㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤
- ㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾
- ㋀㋁㋂㋃㋄㋅㋆㋇㋈㋉㋊㋋㋌㋍㋎㋏㋐㋑㋒㋓㋔㋕㋖㋗㋘
- ㋚㋛㋜㋝㋞㋟㋠㋡㋢㋣㋤㋥㋦㋧㋨㋩㋪㋫㋬㋭㋮㋯㋰㋱㋲
- ㋴㋵㋶㋷㋸㋹㋺㋻㋼㋽㋾㋿㌀㌁㌂㌃㌄㌅㌆㌇㌈㌉㌊㌋㌌
- ㌎㌏㌐㌑㌒㌓㌔㌕㌖㌗㌘㌙㌚㌛㌜㌝㌞㌟㌠㌡㌢㌣㌤㌥㌦
- ㌨㌩㌪㌫㌬㌭㌮㌯㌰㌱㌲㌳㌴㌵㌶㌷㌸㌹㌺㌻㌼㌽㌾㌿㍀
- ㍂㍃㍄㍅㍆㍇㍈㍉㍊㍋㍌㍍㍎㍏㍐㍑㍒㍓㍔㍕㍖㍗㍘㍙㍚
- ㍜㍝㍞㍟㍠㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍰㍱㍲㍳㍴
- ㍶㍷㍸㍹㍺㍻㍼㍽㍾㍿㎀㎁㎂㎃㎄㎅㎆㎇㎈㎉㎊㎋㎌㎍㎎
- ㎐㎑㎒㎓㎔㎕㎖㎗㎘㎙㎚㎛㎜㎝㎞㎟㎠㎡㎢㎣㎤㎥㎦㎧㎨
- ㎪㎫㎬㎭㎮㎯㎰㎱㎲㎳㎴㎵㎶㎷㎸㎹㎺㎻㎼㎽㎾㎿㏀㏁㏂
- ㏄㏅㏆㏇㏈㏉㏊㏋㏌㏍㏎㏏㏐㏑㏒㏓㏔㏕㏖㏗㏘㏙㏚㏛㏜
- ㏞㏟㏠㏡㏢㏣㏤㏥㏦㏧㏨㏩㏪㏫㏬㏭㏮㏯㏰㏱㏲㏳㏴㏵㏶
- ㏸㏹㏺㏻㏼㏽㏾㏿㐀㐁㐂㐃㐄㐅㐆㐇㐈㐉㐊㐋㐌㐍㐎㐏㐐
- 㐒㐓㐔㐕㐖㐗㐘㐙㐚㐛㐜㐝㐞㐟㐠㐡㐢㐣㐤㐥㐦㐧㐨㐩㐪
- 㐬㐭㐮㐯㐰㐱㐲㐳㐴㐵㐶㐷㐸㐹㐺㐻㐼㐽㐾㐿㑀㑁㑂㑃㑄
- 㑆㑇㑈㑉㑊㑋㑌㑍㑎㑏㑐㑑㑒㑓㑔㑕㑖㑗㑘㑙㑚㑛㑜㑝㑞
- 㑠㑡㑢㑣㑤㑥㑦㑧㑨㑩㑪㑫㑬㑭㑮㑯㑰㑱㑲㑳㑴㑵㑶㑷㑸
- 㑺㑻㑼㑽㑾㑿㒀㒁㒂㒃㒄㒅㒆㒇㒈㒉㒊㒋㒌㒍㒎㒏㒐㒑㒒
- 㒔㒕㒖㒗㒘㒙㒚㒛㒜㒝㒞㒟㒠㒡㒢㒣㒤㒥㒦㒧㒨㒩㒪㒫㒬
- 㒮㒯㒰㒱㒲㒳㒴㒵㒶㒷㒸㒹㒺㒻㒼㒽㒾㒿㓀㓁㓂㓃㓄㓅㓆
- 㓈㓉㓊㓋㓌㓍㓎㓏㓐㓑㓒㓓㓔㓕㓖㓗㓘㓙㓚㓛㓜㓝㓞㓟㓠
- 㓢㓣㓤㓥㓦㓧㓨㓩㓪㓫㓬㓭㓮㓯㓰㓱㓲㓳㓴㓵㓶㓷㓸㓹㓺
- 㓼㓽㓾㓿㔀㔁㔂㔃㔄㔅㔆㔇㔈㔉㔊㔋㔌㔍㔎㔏㔐㔑㔒㔓㔔
- 㔖㔗㔘㔙㔚㔛㔜㔝㔞㔟㔠㔡㔢㔣㔤㔥㔦㔧㔨㔩㔪㔫㔬㔭㔮
- 㔰㔱㔲㔳㔴㔵㔶㔷㔸㔹㔺㔻㔼㔽㔾㔿㕀㕁㕂㕃㕄㕅㕆㕇㕈
- 㕊㕋㕌㕍㕎㕏㕐㕑㕒㕓㕔㕕㕖㕗㕘㕙㕚㕛㕜㕝㕞㕟㕠㕡㕢
- 㕤㕥㕦㕧㕨㕩㕪㕫㕬㕭㕮㕯㕰㕱㕲㕳㕴㕵㕶㕷㕸㕹㕺㕻㕼
- 㕾㕿㖀㖁㖂㖃㖄㖅㖆㖇㖈㖉㖊㖋㖌㖍㖎㖏㖐㖑㖒㖓㖔㖕㖖
- 㖘㖙㖚㖛㖜㖝㖞㖟㖠㖡㖢㖣㖤㖥㖦㖧㖨㖩㖪㖫㖬㖭㖮㖯㖰
- 㖲㖳㖴㖵㖶㖷㖸㖹㖺㖻㖼㖽㖾㖿㗀㗁㗂㗃㗄㗅㗆㗇㗈㗉㗊
- 㗌㗍㗎㗏㗐㗑㗒㗓㗔㗕㗖㗗㗘㗙㗚㗛㗜㗝㗞㗟㗠㗡㗢㗣㗤
- 㗦㗧㗨㗩㗪㗫㗬㗭㗮㗯㗰㗱㗲㗳㗴㗵㗶㗷㗸㗹㗺㗻㗼㗽㗾
- 㘀㘁㘂㘃㘄㘅㘆㘇㘈㘉㘊㘋㘌㘍㘎㘏㘐㘑㘒㘓㘔㘕㘖㘗㘘
- 㘚㘛㘜㘝㘞㘟㘠㘡㘢㘣㘤㘥㘦㘧㘨㘩㘪㘫㘬㘭㘮㘯㘰㘱㘲
- 㘴㘵㘶㘷㘸㘹㘺㘻㘼㘽㘾㘿㙀㙁㙂㙃㙄㙅㙆㙇㙈㙉㙊㙋㙌
- 㙎㙏㙐㙑㙒㙓㙔㙕㙖㙗㙘㙙㙚㙛㙜㙝㙞㙟㙠㙡㙢㙣㙤㙥㙦
- 㙨㙩㙪㙫㙬㙭㙮㙯㙰㙱㙲㙳㙴㙵㙶㙷㙸㙹㙺㙻㙼㙽㙾㙿㚀
- 㚂㚃㚄㚅㚆㚇㚈㚉㚊㚋㚌㚍㚎㚏㚐㚑㚒㚓㚔㚕㚖㚗㚘㚙㚚
- 㚜㚝㚞㚟㚠㚡㚢㚣㚤㚥㚦㚧㚨㚩㚪㚫㚬㚭㚮㚯㚰㚱㚲㚳㚴
- 㚶㚷㚸㚹㚺㚻㚼㚽㚾㚿㛀㛁㛂㛃㛄㛅㛆㛇㛈㛉㛊㛋㛌㛍㛎
- 㛐㛑㛒㛓㛔㛕㛖㛗㛘㛙㛚㛛㛜㛝㛞㛟㛠㛡㛢㛣㛤㛥㛦㛧㛨
- 㛪㛫㛬㛭㛮㛯㛰㛱㛲㛳㛴㛵㛶㛷㛸㛹㛺㛻㛼㛽㛾㛿㜀㜁㜂
- 㜄㜅㜆㜇㜈㜉㜊㜋㜌㜍㜎㜏㜐㜑㜒㜓㜔㜕㜖㜗㜘㜙㜚㜛㜜
- 㜞㜟㜠㜡㜢㜣㜤㜥㜦㜧㜨㜩㜪㜫㜬㜭㜮㜯㜰㜱㜲㜳㜴㜵㜶
- 㜸㜹㜺㜻㜼㜽㜾㜿㝀㝁㝂㝃㝄㝅㝆㝇㝈㝉㝊㝋㝌㝍㝎㝏㝐
- 㝒㝓㝔㝕㝖㝗㝘㝙㝚㝛㝜㝝㝞㝟㝠㝡㝢㝣㝤㝥㝦㝧㝨㝩㝪
- 㝬㝭㝮㝯㝰㝱㝲㝳㝴㝵㝶㝷㝸㝹㝺㝻㝼㝽㝾㝿㞀㞁㞂㞃㞄
- 㞆㞇㞈㞉㞊㞋㞌㞍㞎㞏㞐㞑㞒㞓㞔㞕㞖㞗㞘㞙㞚㞛㞜㞝㞞
- 㞠㞡㞢㞣㞤㞥㞦㞧㞨㞩㞪㞫㞬㞭㞮㞯㞰㞱㞲㞳㞴㞵㞶㞷㞸
- 㞺㞻㞼㞽㞾㞿㟀㟁㟂㟃㟄㟅㟆㟇㟈㟉㟊㟋㟌㟍㟎㟏㟐㟑㟒
- 㟔㟕㟖㟗㟘㟙㟚㟛㟜㟝㟞㟟㟠㟡㟢㟣㟤㟥㟦㟧㟨㟩㟪㟫㟬
- 㟮㟯㟰㟱㟲㟳㟴㟵㟶㟷㟸㟹㟺㟻㟼㟽㟾㟿㠀㠁㠂㠃㠄㠅㠆
- 㠈㠉㠊㠋㠌㠍㠎㠏㠐㠑㠒㠓㠔㠕㠖㠗㠘㠙㠚㠛㠜㠝㠞㠟㠠
- 㠢㠣㠤㠥㠦㠧㠨㠩㠪㠫㠬㠭㠮㠯㠰㠱㠲㠳㠴㠵㠶㠷㠸㠹㠺
- 㠼㠽㠾㠿㡀㡁㡂㡃㡄㡅㡆㡇㡈㡉㡊㡋㡌㡍㡎㡏㡐㡑㡒㡓㡔
- 㡖㡗㡘㡙㡚㡛㡜㡝㡞㡟㡠㡡㡢㡣㡤㡥㡦㡧㡨㡩㡪㡫㡬㡭㡮
- 㡰㡱㡲㡳㡴㡵㡶㡷㡸㡹㡺㡻㡼㡽㡾㡿㢀㢁㢂㢃㢄㢅㢆㢇㢈
- 㢊㢋㢌㢍㢎㢏㢐㢑㢒㢓㢔㢕㢖㢗㢘㢙㢚㢛㢜㢝㢞㢟㢠㢡㢢
- 㢤㢥㢦㢧㢨㢩㢪㢫㢬㢭㢮㢯㢰㢱㢲㢳㢴㢵㢶㢷㢸㢹㢺㢻㢼
- 㢾㢿㣀㣁㣂㣃㣄㣅㣆㣇㣈㣉㣊㣋㣌㣍㣎㣏㣐㣑㣒㣓㣔㣕㣖
- 㣘㣙㣚㣛㣜㣝㣞㣟㣠㣡㣢㣣㣤㣥㣦㣧㣨㣩㣪㣫㣬㣭㣮㣯㣰
- 㣲㣳㣴㣵㣶㣷㣸㣹㣺㣻㣼㣽㣾㣿㤀㤁㤂㤃㤄㤅㤆㤇㤈㤉㤊
- 㤌㤍㤎㤏㤐㤑㤒㤓㤔㤕㤖㤗㤘㤙㤚㤛㤜㤝㤞㤟㤠㤡㤢㤣㤤
- 㤦㤧㤨㤩㤪㤫㤬㤭㤮㤯㤰㤱㤲㤳㤴㤵㤶㤷㤸㤹㤺㤻㤼㤽㤾
- 㥀㥁㥂㥃㥄㥅㥆㥇㥈㥉㥊㥋㥌㥍㥎㥏㥐㥑㥒㥓㥔㥕㥖㥗㥘
- 㥚㥛㥜㥝㥞㥟㥠㥡㥢㥣㥤㥥㥦㥧㥨㥩㥪㥫㥬㥭㥮㥯㥰㥱㥲
- 㥴㥵㥶㥷㥸㥹㥺㥻㥼㥽㥾㥿㦀㦁㦂㦃㦄㦅㦆㦇㦈㦉㦊㦋㦌
- 㦎㦏㦐㦑㦒㦓㦔㦕㦖㦗㦘㦙㦚㦛㦜㦝㦞㦟㦠㦡㦢㦣㦤㦥㦦
- 㦨㦩㦪㦫㦬㦭㦮㦯㦰㦱㦲㦳㦴㦵㦶㦷㦸㦹㦺㦻㦼㦽㦾㦿㧀
- 㧂㧃㧄㧅㧆㧇㧈㧉㧊㧋㧌㧍㧎㧏㧐㧑㧒㧓㧔㧕㧖㧗㧘㧙㧚
- 㧜㧝㧞㧟㧠㧡㧢㧣㧤㧥㧦㧧㧨㧩㧪㧫㧬㧭㧮㧯㧰㧱㧲㧳㧴
- 㧶㧷㧸㧹㧺㧻㧼㧽㧾㧿㨀㨁㨂㨃㨄㨅㨆㨇㨈㨉㨊㨋㨌㨍㨎
- 㨐㨑㨒㨓㨔㨕㨖㨗㨘㨙㨚㨛㨜㨝㨞㨟㨠㨡㨢㨣㨤㨥㨦㨧㨨
- 㨪㨫㨬㨭㨮㨯㨰㨱㨲㨳㨴㨵㨶㨷㨸㨹㨺㨻㨼㨽㨾㨿㩀㩁㩂
- 㩄㩅㩆㩇㩈㩉㩊㩋㩌㩍㩎㩏㩐㩑㩒㩓㩔㩕㩖㩗㩘㩙㩚㩛㩜
- 㩞㩟㩠㩡㩢㩣㩤㩥㩦㩧㩨㩩㩪㩫㩬㩭㩮㩯㩰㩱㩲㩳㩴㩵㩶
- 㩸㩹㩺㩻㩼㩽㩾㩿㪀㪁㪂㪃㪄㪅㪆㪇㪈㪉㪊㪋㪌㪍㪎㪏㪐
- 㪒㪓㪔㪕㪖㪗㪘㪙㪚㪛㪜㪝㪞㪟㪠㪡㪢㪣㪤㪥㪦㪧㪨㪩㪪
- 㪬㪭㪮㪯㪰㪱㪲㪳㪴㪵㪶㪷㪸㪹㪺㪻㪼㪽㪾㪿㫀㫁㫂㫃㫄
- 㫆㫇㫈㫉㫊㫋㫌㫍㫎㫏㫐㫑㫒㫓㫔㫕㫖㫗㫘㫙㫚㫛㫜㫝㫞
- 㫠㫡㫢㫣㫤㫥㫦㫧㫨㫩㫪㫫㫬㫭㫮㫯㫰㫱㫲㫳㫴㫵㫶㫷㫸
- 㫺㫻㫼㫽㫾㫿㬀㬁㬂㬃㬄㬅㬆㬇㬈㬉㬊㬋㬌㬍㬎㬏㬐㬑㬒
- 㬔㬕㬖㬗㬘㬙㬚㬛㬜㬝㬞㬟㬠㬡㬢㬣㬤㬥㬦㬧㬨㬩㬪㬫㬬
- 㬮㬯㬰㬱㬲㬳㬴㬵㬶㬷㬸㬹㬺㬻㬼㬽㬾㬿㭀㭁㭂㭃㭄㭅㭆
- 㭈㭉㭊㭋㭌㭍㭎㭏㭐㭑㭒㭓㭔㭕㭖㭗㭘㭙㭚㭛㭜㭝㭞㭟㭠
- 㭢㭣㭤㭥㭦㭧㭨㭩㭪㭫㭬㭭㭮㭯㭰㭱㭲㭳㭴㭵㭶㭷㭸㭹㭺
- 㭼㭽㭾㭿㮀㮁㮂㮃㮄㮅㮆㮇㮈㮉㮊㮋㮌㮍㮎㮏㮐㮑㮒㮓㮔
- 㮖㮗㮘㮙㮚㮛㮜㮝㮞㮟㮠㮡㮢㮣㮤㮥㮦㮧㮨㮩㮪㮫㮬㮭㮮
- 㮰㮱㮲㮳㮴㮵㮶㮷㮸㮹㮺㮻㮼㮽㮾㮿㯀㯁㯂㯃㯄㯅㯆㯇㯈
- 㯊㯋㯌㯍㯎㯏㯐㯑㯒㯓㯔㯕㯖㯗㯘㯙㯚㯛㯜㯝㯞㯟㯠㯡㯢
- 㯤㯥㯦㯧㯨㯩㯪㯫㯬㯭㯮㯯㯰㯱㯲㯳㯴㯵㯶㯷㯸㯹㯺㯻㯼
- 㯾㯿㰀㰁㰂㰃㰄㰅㰆㰇㰈㰉㰊㰋㰌㰍㰎㰏㰐㰑㰒㰓㰔㰕㰖
- 㰘㰙㰚㰛㰜㰝㰞㰟㰠㰡㰢㰣㰤㰥㰦㰧㰨㰩㰪㰫㰬㰭㰮㰯㰰
- 㰲㰳㰴㰵㰶㰷㰸㰹㰺㰻㰼㰽㰾㰿㱀㱁㱂㱃㱄㱅㱆㱇㱈㱉㱊
- 㱌㱍㱎㱏㱐㱑㱒㱓㱔㱕㱖㱗㱘㱙㱚㱛㱜㱝㱞㱟㱠㱡㱢㱣㱤
- 㱦㱧㱨㱩㱪㱫㱬㱭㱮㱯㱰㱱㱲㱳㱴㱵㱶㱷㱸㱹㱺㱻㱼㱽㱾
- 㲀㲁㲂㲃㲄㲅㲆㲇㲈㲉㲊㲋㲌㲍㲎㲏㲐㲑㲒㲓㲔㲕㲖㲗㲘
- 㲚㲛㲜㲝㲞㲟㲠㲡㲢㲣㲤㲥㲦㲧㲨㲩㲪㲫㲬㲭㲮㲯㲰㲱㲲
- 㲴㲵㲶㲷㲸㲹㲺㲻㲼㲽㲾㲿㳀㳁㳂㳃㳄㳅㳆㳇㳈㳉㳊㳋㳌
- 㳎㳏㳐㳑㳒㳓㳔㳕㳖㳗㳘㳙㳚㳛㳜㳝㳞㳟㳠㳡㳢㳣㳤㳥㳦
- 㳨㳩㳪㳫㳬㳭㳮㳯㳰㳱㳲㳳㳴㳵㳶㳷㳸㳹㳺㳻㳼㳽㳾㳿㴀
- 㴂㴃㴄㴅㴆㴇㴈㴉㴊㴋㴌㴍㴎㴏㴐㴑㴒㴓㴔㴕㴖㴗㴘㴙㴚
- 㴜㴝㴞㴟㴠㴡㴢㴣㴤㴥㴦㴧㴨㴩㴪㴫㴬㴭㴮㴯㴰㴱㴲㴳㴴
- 㴶㴷㴸㴹㴺㴻㴼㴽㴾㴿㵀㵁㵂㵃㵄㵅㵆㵇㵈㵉㵊㵋㵌㵍㵎
- 㵐㵑㵒㵓㵔㵕㵖㵗㵘㵙㵚㵛㵜㵝㵞㵟㵠㵡㵢㵣㵤㵥㵦㵧㵨
- 㵪㵫㵬㵭㵮㵯㵰㵱㵲㵳㵴㵵㵶㵷㵸㵹㵺㵻㵼㵽㵾㵿㶀㶁㶂
- 㶄㶅㶆㶇㶈㶉㶊㶋㶌㶍㶎㶏㶐㶑㶒㶓㶔㶕㶖㶗㶘㶙㶚㶛㶜
- 㶞㶟㶠㶡㶢㶣㶤㶥㶦㶧㶨㶩㶪㶫㶬㶭㶮㶯㶰㶱㶲㶳㶴㶵㶶
- 㶸㶹㶺㶻㶼㶽㶾㶿㷀㷁㷂㷃㷄㷅㷆㷇㷈㷉㷊㷋㷌㷍㷎㷏㷐
- 㷒㷓㷔㷕㷖㷗㷘㷙㷚㷛㷜㷝㷞㷟㷠㷡㷢㷣㷤㷥㷦㷧㷨㷩㷪
- 㷬㷭㷮㷯㷰㷱㷲㷳㷴㷵㷶㷷㷸㷹㷺㷻㷼㷽㷾㷿㸀㸁㸂㸃㸄
- 㸆㸇㸈㸉㸊㸋㸌㸍㸎㸏㸐㸑㸒㸓㸔㸕㸖㸗㸘㸙㸚㸛㸜㸝㸞
- 㸠㸡㸢㸣㸤㸥㸦㸧㸨㸩㸪㸫㸬㸭㸮㸯㸰㸱㸲㸳㸴㸵㸶㸷㸸
- 㸺㸻㸼㸽㸾㸿㹀㹁㹂㹃㹄㹅㹆㹇㹈㹉㹊㹋㹌㹍㹎㹏㹐㹑㹒
- 㹔㹕㹖㹗㹘㹙㹚㹛㹜㹝㹞㹟㹠㹡㹢㹣㹤㹥㹦㹧㹨㹩㹪㹫㹬
- 㹮㹯㹰㹱㹲㹳㹴㹵㹶㹷㹸㹹㹺㹻㹼㹽㹾㹿㺀㺁㺂㺃㺄㺅㺆
- 㺈㺉㺊㺋㺌㺍㺎㺏㺐㺑㺒㺓㺔㺕㺖㺗㺘㺙㺚㺛㺜㺝㺞㺟㺠
- 㺢㺣㺤㺥㺦㺧㺨㺩㺪㺫㺬㺭㺮㺯㺰㺱㺲㺳㺴㺵㺶㺷㺸㺹㺺
- 㺼㺽㺾㺿㻀㻁㻂㻃㻄㻅㻆㻇㻈㻉㻊㻋㻌㻍㻎㻏㻐㻑㻒㻓㻔
- 㻖㻗㻘㻙㻚㻛㻜㻝㻞㻟㻠㻡㻢㻣㻤㻥㻦㻧㻨㻩㻪㻫㻬㻭㻮
- 㻰㻱㻲㻳㻴㻵㻶㻷㻸㻹㻺㻻㻼㻽㻾㻿㼀㼁㼂㼃㼄㼅㼆㼇㼈
- 㼊㼋㼌㼍㼎㼏㼐㼑㼒㼓㼔㼕㼖㼗㼘㼙㼚㼛㼜㼝㼞㼟㼠㼡㼢
- 㼤㼥㼦㼧㼨㼩㼪㼫㼬㼭㼮㼯㼰㼱㼲㼳㼴㼵㼶㼷㼸㼹㼺㼻㼼
- 㼾㼿㽀㽁㽂㽃㽄㽅㽆㽇㽈㽉㽊㽋㽌㽍㽎㽏㽐㽑㽒㽓㽔㽕㽖
- 㽘㽙㽚㽛㽜㽝㽞㽟㽠㽡㽢㽣㽤㽥㽦㽧㽨㽩㽪㽫㽬㽭㽮㽯㽰
- 㽲㽳㽴㽵㽶㽷㽸㽹㽺㽻㽼㽽㽾㽿㾀㾁㾂㾃㾄㾅㾆㾇㾈㾉㾊
- 㾌㾍㾎㾏㾐㾑㾒㾓㾔㾕㾖㾗㾘㾙㾚㾛㾜㾝㾞㾟㾠㾡㾢㾣㾤
- 㾦㾧㾨㾩㾪㾫㾬㾭㾮㾯㾰㾱㾲㾳㾴㾵㾶㾷㾸㾹㾺㾻㾼㾽㾾
- 㿀㿁㿂㿃㿄㿅㿆㿇㿈㿉㿊㿋㿌㿍㿎㿏㿐㿑㿒㿓㿔㿕㿖㿗㿘
- 㿚㿛㿜㿝㿞㿟㿠㿡㿢㿣㿤㿥㿦㿧㿨㿩㿪㿫㿬㿭㿮㿯㿰㿱㿲
- 㿴㿵㿶㿷㿸㿹㿺㿻㿼㿽㿾㿿䀀䀁䀂䀃䀄䀅䀆䀇䀈䀉䀊䀋䀌
- 䀎䀏䀐䀑䀒䀓䀔䀕䀖䀗䀘䀙䀚䀛䀜䀝䀞䀟䀠䀡䀢䀣䀤䀥䀦
- 䀨䀩䀪䀫䀬䀭䀮䀯䀰䀱䀲䀳䀴䀵䀶䀷䀸䀹䀺䀻䀼䀽䀾䀿䁀
- 䁂䁃䁄䁅䁆䁇䁈䁉䁊䁋䁌䁍䁎䁏䁐䁑䁒䁓䁔䁕䁖䁗䁘䁙䁚
- 䁜䁝䁞䁟䁠䁡䁢䁣䁤䁥䁦䁧䁨䁩䁪䁫䁬䁭䁮䁯䁰䁱䁲䁳䁴
- 䁶䁷䁸䁹䁺䁻䁼䁽䁾䁿䂀䂁䂂䂃䂄䂅䂆䂇䂈䂉䂊䂋䂌䂍䂎
