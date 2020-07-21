var config = {
    style: 'mapbox://styles/rgriscom/ckcu0xy5h3cb01jleahvsa1f9',
    accessToken: 'pk.eyJ1IjoicmdyaXNjb20iLCJhIjoiY2tjb2hjbDljMGwzcTJwcGIxczEydmJ3aCJ9.fG3UHhMot8UFHrRIsTqfSA',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: '<center>Original People</center>',
    subtitle: '<center>Land, Culture, History & Destiny</center>',
    byline: '<center><i>An interactive story</i></center>',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'tanzania',
            title: 'Introduction',
            image: '',
            description: '<img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Hadza_montage.png" align="left" style=”margin: 10px 10px 10px 10px /> <p>The Hadzabe community of the Yaida Valley requested <a href="http://www.ujamaa-crt.org/">UCRT</a> to assist them them to undertake a cultural mapping exercise. More than 200 Hadzabe, young and old, men and women, participated in this exercise during the months of October 2004 and October 2006. The goals of this exercise were among the following: a) to enable elders to impart to young people the deep connection between lang & culture through identifying and relating the stories of special sites; b) to show to outsiders & government leaders an ownership of land that only comes through a long historical relationship and a deep knowledge of the land; and c) in this vein to garner support for their rights to land and use of natural resources.</p>',
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
            image: 'https://ssl.c.photoshelter.com/img-get/I0000b6HRoGzjkwY/s/850/Evolution-of-Diet-010.jpg',
            description: 'We Hadzabe have no record of famine in our oral history. The reason is that we depend on natural producs of the environment...',
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
            image: 'https://jimmynelsonfoundation.com/wp-content/uploads/2019/04/jimmy-nelson-foundation-hadzabe-tanzania-gallery-mike-holtby-6-groter.jpg',
            description: 'Research based on blood samples and DNA comparisons of people all over the world indicate that we Hadzabe are on of the original peoples.',
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
            title: 'Land of the Hadza',
            image: 'https://jimmynelsonfoundation.com/wp-content/uploads/2019/04/jimmy-nelson-foundation-hadzabe-tanzania-gallery-mike-holtby-6-groter.jpg',
            description: 'Research based on blood samples and DNA comparisons of people all over the world indicate that we Hadzabe are on of the original peoples.',
            location: {
                center: [34.69620,  -3.67432],
                zoom: 9.26,
                pitch: 46.50,
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
       
    ]
};
