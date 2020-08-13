var config = {
    style: 'mapbox://styles/rgriscom/ckcu0xy5h3cb01jleahvsa1f9',
    accessToken: 'pk.eyJ1IjoicmdyaXNjb20iLCJhIjoiY2tjb2hjbDljMGwzcTJwcGIxczEydmJ3aCJ9.fG3UHhMot8UFHrRIsTqfSA',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: '<center>Original People</center>',
    title_sw: '<center>Watu wa Kwanza</center>',
    subtitle: '<center>Land, Culture, History & Destiny</center>',
    subtitle_sw: '<center>Ardhi, Utamaduni, Historia, na Majaliwa</center>',
    byline: '<center><i>An interactive story</i></center><p><center>English-<a onclick="switch_swahili()">Kiswahili</a></center></p>',
    byline_sw: '<center><i>Hadithi ya ingiliani</i></center><p><center><a onclick="switch_english()">English</a>-Kiswahili</center></p>',
    footer: '<a href="https://rgriscom.github.io/Test-Project-for-Hadza-Cultural-Map-2/">Click here to view all of areas of cultural significance to the Hadza </a>',
    chapters: [
        {
            id: 'tanzania',
            title: 'Introduction',
            title_sw: 'Utangulizi',
            image: '',
            image_width: '50%',
            description: '<img id="test_image" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Hadza_montage.png"  width="100%"  style="border:5px solid black;margin:0px 0px 20px 0px"> <p><b style="font-size: 16px;">The Hadzabe community</b> of the Yaida Valley requested <a href="http://www.ujamaa-crt.org/">UCRT</a> to assist them them to undertake a cultural mapping exercise. More than 200 Hadzabe, young and old, men and women, participated in this exercise during the months of October 2004 and October 2006. The goals of this exercise were among the following: a) to enable elders to impart to young people the deep connection between lang & culture through identifying and relating the stories of special sites; b) to show to outsiders & government leaders an ownership of land that only comes through a long historical relationship and a deep knowledge of the land; and c) in this vein to garner support for their rights to land and use of natural resources.</p>',
            description_sw: '<img id="test_image" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Hadza_montage.png"  width="100%" style="border:5px solid black;margin:0px 0px 20px 0px"> <p><b>Jamii ya Wahadzabe</b> katika bonde la Yaeda Chini waliomba shirika la UCRT kuwasaidia katika kufanikisha zoezi la ramani za utamaduni. Zaidi ya Wahadzabe 200 wakiwemo vijana na wazee, wanaume na wanawake, walishiriki katika zoezi hilo miezi ya Oktoba 2004 na Oktoba 2006. Malengo makuu ya zoezi hilo yalikuwa pamoja na: a) wazee wapatie nafasi kueleza kwa vijana uwiano kati ya ardhi na utamaduni kwa kuwaonyesha na kusimulia hadithi na historia ya maeneo maalum; b) kuonyesha wazi kwa watu wa nje na viongozi wa Serikali haki ya umilikaji wa ardhi inayotokana na historia na ujuzi wa ndani wa maeneo; na kwa njia hiyo c) kuongeza utetezi kwa haki yao ya ardhi na matumizi ya mali asili. </p>',
            alignment: 'left',
            opacity: 'normal',
            sound:'no',
            video: 'no',
            location: {
                center: [-36.28278, -0.78869],
                zoom: 1.88,
                pitch: 0.00,
                bearing: 0
            },
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'land-culture-history',
            title: 'Land, Culture, History & Destiny',
            title_sw: 'Ardhi, Utamaduni, Historia, na Majaliwa',
            image: '',
            image_width: '50%',
            description: "<center><img id='test_image' src='https://ssl.c.photoshelter.com/img-get/I0000b6HRoGzjkwY/s/850/Evolution-of-Diet-010.jpg' width='55%' style='border:5px solid black;margin:0px 0px 10px 0px'></center><p><i style='font-size: 20px'><center>We Hadzabe have no record of famine in our oral history.</i></center> <p>The reason is that we depend on natural producs of the environment such as berries, tubers, baobab fruits, honey and many wild animals for food. By living in this way, the environment we depend on is not damaged and remains healthy.</p>",
            description_sw: "<center><img id='test_image' src='https://ssl.c.photoshelter.com/img-get/I0000b6HRoGzjkwY/s/850/Evolution-of-Diet-010.jpg' width='55%' style='border:5px solid black;margin:0px 0px 10px 0px'></center><p><i style='font-size: 20px'><center>We Hadzabe have no record of famine in our oral history.</i></center><p>We Hadzabe have no record of famine in our oral history. The reason is that we depend on natural producs of the environment such as berries, tubers, baobab fruits, honey and many wild animals for food. By living in this way, the environment we depend on is not damaged and remains healthy.</p>",
            alignment: 'left',
            opacity: 'normal',
            video: 'no',
            sound: 'no',
            location: {
                center: [31.47641, -6.90268],
                zoom: 5.4,
                pitch: 17.00,
                bearing: 0
            },
            onChapterEnter: [{
                    layer: 'country-label-copy',
                    opacity: 1
                }],
            onChapterExit: [{
                    layer: 'country-label-copy',
                    opacity: 0
                }
                
            ]
        },
        {
            id: 'land-culture-history2',
            title: '',
            title_sw: '',
            image: '',
            image_width: '100%',
            description: "<p><i style='font-size: 20px'><center>'We have lost 90% of our land within the last 50 years...'</i></center></p><p><center><img src='https://www.dropbox.com/s/up0kju55n0y758n/bar_photos1.png?raw=1' width='75%' style='border:5px solid black;margin:0px 20px 0px 0px'></center></p><p><audio id='gudo1'><source src='https://www.dropbox.com/s/i6f5ve5pt2eh7wu/2016-11-14_Gudo_Story_2_%28Bush_pig%29_37.mp3?raw=1' type='audio/mpeg'></audio></p><p>But, because we move in search of seasonal food and other necessary natural products such as arrow poison, special stones for sharpening tools and for our smoking pipes, it has been easy for neighboring people to move into and take our land. We also are a peaceful people who do not like confrontation so that rather than fight people who invade we have always moved away. Also, because we do not plant crops or herd livestock, most people including government leaders, consider our lands to be empty and unused. They don't understand how we use and depend on the land and a healthy environment. The result is that we have lost 90% of our land within the last 50 years. And the land that has been lost to others is seriously degraded environmentally - it is very sick. </p><p></p><p><center><img src='https://www.dropbox.com/s/hs6eznpzxyy6kwa/bar_photos2.png?raw=1' width='75%' style='border:5px solid black;margin:20px 0px 0px 20px'></center></p><p></p><p> Not only do we depend on the land and a healthy environment for our daily needs, loss of land also deprives us of our cultural identity and the means to move with dignity into the future world. Our right to modern education and health care must be based on a foundation of land and a healthy environment. We hope that this booklet helps others to understand and respect our need for and deep connection with the land and to support us in our quest for land & natural resource rights.</p>",
            description_sw: "<p><i style='font-size: 20px'><center>'We have lost 90% of our land within the last 50 years...'</i></center></p><p><center><img src='https://www.dropbox.com/s/up0kju55n0y758n/bar_photos1.png?raw=1' width='75%' style='border:5px solid black;margin:0px 20px 0px 0px'>></center></p><p><audio id='gudo1'><source src='https://www.dropbox.com/s/i6f5ve5pt2eh7wu/2016-11-14_Gudo_Story_2_%28Bush_pig%29_37.mp3?raw=1' type='audio/mpeg'></audio></p><p>But, because we move in search of seasonal food and other necessary natural products such as arrow poison, special stones for sharpening tools and for our smoking pipes, it has been easy for neighboring people to move into and take our land. We also are a peaceful people who do not like confrontation so that rather than fight people who invade we have always moved away. Also, because we do not plant crops or herd livestock, most people including government leaders, consider our lands to be empty and unused. They don't understand how we use and depend on the land and a healthy environment. The result is that we have lost 90% of our land within the last 50 years. And the land that has been lost to others is seriously degraded environmentally - it is very sick. </p><p></p><p><center><img src='https://www.dropbox.com/s/hs6eznpzxyy6kwa/bar_photos2.png?raw=1' width='75%' style='border:5px solid black;margin:20px 0px 0px 20px'></center></p><p></p><p> Not only do we depend on the land and a healthy environment for our daily needs, loss of land also deprives us of our cultural identity and the means to move with dignity into the future world. Our right to modern education and health care must be based on a foundation of land and a healthy environment. We hope that this booklet helps others to understand and respect our need for and deep connection with the land and to support us in our quest for land & natural resource rights.</p>",
            alignment: 'center',
            opacity: 'full',
            video: 'no',
            sound: 'gudo1',
            location: {
                center: [31.47641, -6.90268],
                zoom: 5.4,
                pitch: 17.00,
                bearing: 0
            },
            onChapterEnter: [{
                    layer: 'country-label-copy',
                    opacity: 1
                }],
            onChapterExit: [{
                    layer: 'country-label-copy',
                    opacity: 0
                }
                
            ]
        },
        {
            id: 'origins',
            title: 'Origins',
            title_sw: 'Asili',
            image: '',
            image_width: '100%',
            description: "<img id='test_image' src='https://jimmynelsonfoundation.com/wp-content/uploads/2019/04/jimmy-nelson-foundation-hadzabe-tanzania-gallery-mike-holtby-6-groter.jpg' align='left' width='100%' style='border:5px solid black;margin:0px 20px 20px 0px'><audio id='gudo2'><source src='https://www.dropbox.com/s/z8kudcr7mrqsc9v/2016-11-14_Gudo_Story_2_%28Bush_pig%29_53.mp3?raw=1' type='audio/mpeg'></audio><p>Research based on blood samples and DNA comparisons of people all over the world indicate that we Hadzabe are on of the original peoples. We have probably lived in the Eyasi Basin and surrounding areas for at least 100,000 years, if not more. Our more recent origin story relates that the Isanzu Chief Kintentemi long ago invited the Hadzabe to a big feast. At that feast many Hadzabe were poisoned. The survivors moved to the East - ANAU; to the west - DILODABEE; and to the North - SANZATABEE. These three main groups of recent origin gave rise to all the geographic subgroups of Hadzabe found today - the Siponganebee, Dunduinebee, Tl'iikanabee, Mwasimwasikanebee & Mangolanebee.</p><p></p><p>After this peopling of the Hadzabe, there was a very difficult Isanzu famine. In order to survive, many Isanzu moved to live with the Hadzabe and benefit from the bush foods which are not affected by drought like the planted foods are. This movement led to intermarriage and also to the historically incorrect story that the Hadza originated from Ukerewe to the West, which is where the Isanzu but not the Hadza came from.</p>",
            description_sw: "<img id='test_image' src='https://jimmynelsonfoundation.com/wp-content/uploads/2019/04/jimmy-nelson-foundation-hadzabe-tanzania-gallery-mike-holtby-6-groter.jpg' align='left' width='100%' style='border:5px solid black;margin:0px 20px 20px 0px'><audio id='gudo2'><source src='https://www.dropbox.com/s/z8kudcr7mrqsc9v/2016-11-14_Gudo_Story_2_%28Bush_pig%29_53.mp3?raw=1' type='audio/mpeg'></audio><p>Research based on blood samples and DNA comparisons of people all over the world indicate that we Hadzabe are on of the original peoples. We have probably lived in the Eyasi Basin and surrounding areas for at least 100,000 years, if not more. Our more recent origin story relates that the Isanzu Chief Kintentemi long ago invited the Hadzabe to a big feast. At that feast many Hadzabe were poisoned. The survivors moved to the East - ANAU; to the west - DILODABEE; and to the North - SANZATABEE. These three main groups of recent origin gave rise to all the geographic subgroups of Hadzabe found today - the Siponganebee, Dunduinebee, Tl'iikanabee, Mwasimwasikanebee & Mangolanebee.</p><p></p><p>After this peopling of the Hadzabe, there was a very difficult Isanzu famine. In order to survive, many Isanzu moved to live with the Hadzabe and benefit from the bush foods which are not affected by drought like the planted foods are. This movement led to intermarriage and also to the historically incorrect story that the Hadza originated from Ukerewe to the West, which is where the Isanzu but not the Hadza came from.</p>",
            alignment: 'left',
            opacity: 'normal',
            video: 'no',
            sound: 'gudo2',
            location: {
                center: [34.69620,  -3.67432],
                zoom: 9.26,
                pitch: 46.50,
                bearing: 0
            },
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'land-of-the-hadzabe',
            title: 'The Land of the Hadzabe',
            title_sw: 'Ardhi ya Wahadzabe',
            image: '',
            image_width: '100%',
            description: 'Land occupied by the Hadza 50 years ago (red)',
            description_sw: 'Mipaka ya ardhi iliyomilikiwa na kutumika mia 50 iliyopita (nyekundu)',
            alignment: 'left_small',
            opacity: 'normal',
            video: 'no',
            sound: 'no',
            location: {
                center: [34.69620,  -3.67432],
                zoom: 9.26,
                pitch: 46.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hadza-area-50-years-ago',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
               {
                    layer: 'hadza-area-50-years-ago',
                    opacity: 0
                }
            ]
        },
        {
            id: 'land-of-the-hadzabe2',
            title: '',
            title_sw: '',
            image: '',
            image_width: '100%',
            description: 'Land the Hadza have rights to today (green)',
            description_sw: 'Ardhi inayomilikiwa leo (kijani)',
            alignment: 'left_small',
            opacity: 'normal',
            video: 'no',
            sound: 'no',
            location: {
                center: [34.69620,  -3.67432],
                zoom: 9.26,
                pitch: 46.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hadza-area-50-years-ago',
                    opacity: 0.3
                },
                {
                    layer: 'hadza-area-today',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
               {
                    layer: 'hadza-area-50-years-ago',
                    opacity: 0
                },
                {
                    layer: 'hadza-area-today',
                    opacity: 0
                }
            ]
        },
        {
            id: 'land-of-the-hadzabe3',
            title: '',
            title_sw: '',
            image: '',
            image_width: '100%',
            description: 'Sites of cultural significance (blue)',
            description_sw: 'Mahali muhimu kwa Wahadzabe (buluu)',
            alignment: 'left_small',
            opacity: 'normal',
            video: 'no',
            sound: 'no',
            location: {
                center: [34.69620,  -3.67432],
                zoom: 9.26,
                pitch: 46.50,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hadza-area-50-years-ago',
                    opacity: 0.3
                },
                {
                    layer: 'hadza-cultural-map',
                    opacity: 1
                }
            ],
            onChapterExit: [
               {
                    layer: 'hadza-area-50-years-ago',
                    opacity: 0
                },
                {
                    layer: 'hadza-cultural-map',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chanjaiko',
            title: 'Chanjaiko',
            title_sw: 'Chanjaiko',
            image: '',
            image_width: '100%',
            description: "<img id='test_image' src='https://www.nalemoru.com/wp-content/uploads/2019/09/NaleMoru-Meet-The-Hadza-People-06.jpg' width='25%' align='left' style='border:5px solid black;margin:0px 20px 0px 20px'><p>After he was married but before independence (1950s) Mzee Bode and Maroba's grandfather lived at Mambutu for many months. At that time there were no people, the areas was full of wildlife and the ikanawangupee kenebee paintings of those early people who stood like giraffe were clearly visible",
            description_sw: "<img id='test_image' src='https://www.nalemoru.com/wp-content/uploads/2019/09/NaleMoru-Meet-The-Hadza-People-06.jpg' width='25%' align='left' style='border:5px solid black;margin:0px 20px 0px 20px'><p>After he was married but before independence (1950s) Mzee Bode and Maroba's grandfather lived at Mambutu for many months. At that time there were no people, the areas was full of wildlife and the ikanawangupee kenebee paintings of those early people who stood like giraffe were clearly visible",
            alignment: 'left_small',
            opacity: 'normal',
            video: 'no',
            sound: 'no',
            location: {
                center: [35.146062,  -3.990548],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hadza-cultural-map',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'hadza-cultural-map',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rock-paintings',
            title: 'Rock Paintings',
            title_sw: 'Michoro ya Mapango',
            image: '',
            image_width: '100%',
            description: "<img id='test_image' src='https://www.dropbox.com/s/d4s35pkq2r5tih8/2-.png?raw=1' width='25%' align='left' style='border:5px solid black;margin:0px 20px 0px 20px;paddingL 0px 0px 20px 0px'><p>Gudandi, Siagi's mother and elders Shush & Shella used to live in this area now taken over by the Iraqw.",
            description_sw: "<img id='test_image' src='https://www.dropbox.com/s/d4s35pkq2r5tih8/2-.png?raw=1' width='25%' align='left' style='border:5px solid black;margin:0px 20px 0px 20px;padding: 0px 0px 20px 0px'><p>Gudandi, Siagi's mother and elders Shush & Shella used to live in this area now taken over by the Iraqw.",
            alignment: 'left_small',
            opacity: 'normal',
            video: 'no',
            sound: 'no',
            location: {
                center: [35.364933,  -3.808903],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hadza-cultural-map',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'hadza-cultural-map',
                    opacity: 0
                }
            ]
        },
        {
            id: 'video',
            title: '',
            title_sw: '',
            image: '',
            image_width: '100%',
            description: '<video loop id="myVideo"><source src="https://www.dropbox.com/s/0llwi9me25vvmn4/Hadza%20Foraging%20Compilation.mp4?raw=1" type="video/mp4"></video><div id="myContent"><h1>Foraging Compilation</h1><p>The Hadza forage for honey and roots.</p></div>',
            description_sw: '<video loop id="myVideo"><source src="https://www.dropbox.com/s/0llwi9me25vvmn4/Hadza%20Foraging%20Compilation.mp4?raw=1" type="video/mp4"></video><div id="myContent"><h1>Foraging Compilation</h1><p>The Hadza forage for honey and roots.</p></div>',
            alignment: 'center',
            opacity: 'hidden',
            video: 'myVideo',
            sound: 'no',
            location: {
                center: [34.69620,  -3.67432],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hadza-cultural-map',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'hadza-cultural-map',
                    opacity: 0
                }
            ]
        },
        {
            id: 'video2',
            title: 'Foraging Compilation',
            title_sw: '',
            image: '',
            image_width: '100%',
            description: '<center><video loop id="myVideo2" width="66%" height="50%"><source src="https://www.dropbox.com/s/0llwi9me25vvmn4/Hadza%20Foraging%20Compilation.mp4?raw=1" type="video/mp4"></video><p>The Hadza forage for honey and roots.</center>',
            description_sw: '<center><video loop id="myVideo2" width="66%" height="50%"><source src="https://www.dropbox.com/s/0llwi9me25vvmn4/Hadza%20Foraging%20Compilation.mp4?raw=1" type="video/mp4"></video><p>The Hadza forage for honey and roots.</center>',
            alignment: 'left_small',
            opacity: 'normal',
            video: 'myVideo2',
            sound: 'no',
            location: {
                center: [34.69620,  -3.67432],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'hadza-cultural-map',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'hadza-cultural-map',
                    opacity: 0
                }
            ]
        }
        
       

    ]
};
