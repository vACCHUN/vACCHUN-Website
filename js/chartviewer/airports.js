const airport = {
    "LHCC": "Budapest FIR",
    "LHBP": "Budapest-Ferihegy",
    "LHDC": "Debrecen",
    "LHSM": "Sármellék",
    "LHPR": "Győr-Pér",
    "LHPP": "Pécs-Pogány",
    "LHUD": "Szeged",
    "LHNY": "Nyíregyháza",
    "LHBC": "Békéscsaba",
    "LHFM": "Fertőszentmiklós",
    "LHAK": "Atkár-Gyöngyöshalász",
    "LHBF": "Bükfürdő",
    "LHBI": "Biharkeresztes",
    "LHBL": "Ballószög",
    "LHBS": "Budaörs",
    "LHBY": "Bőny",
    "LHCL": "Cegléd",
    "LHDK": "Dunakeszi",
    "LHFC": "Bodmér-Felcsút",
    "LHGD": "Gödöllő",
    "LHMP": "Matkópuszta",
    "LHMR": "Maklár",
    "LHGU": "Győrújbarát Heliport",
    "LHHM": "Hódmezővásárhely",
    "LHHO": "Hajdúszoboszló",
    "LHJK": "Jakabszállás",
    "LHKA": "Kalocsa-Foktő",
    "LHKH": "Kiskunfélegyháza",
    "LHKI": "Kiskőrős-Akasztó",
    "LHKK": "Kiskunlacháza",
    "LHKV": "Kaposújlak",
    "LHPS": "Pusztaszer",
    "LHPW": "Pusztaszer-West",
    "LHSI": "Sitke",
    "LHSK": "Siófok-Kiliti",
    "LHSS": "Szolnok-Szandaszőlős",
    "LHST": "Szatymaz",
    "LHSV": "Szarvas-Kákahalom",
    "LHSZ": "Szentes",
    "LHTL": "Tököl",
    "LHUH": "Sárszentmihály-Úrhida",
    "LHVE": "Veresegyház",
    "LHKE": "Kecskemét",
    "LHSN": "Szolnok",
    "LHPA": "Pápa"
    
}
const info = {
    "LHCC": `<h1>Budapest FIR</h1><img id='FIRimg'src='../../img/info/FIR.png'>`,
    "LHBP": `<h1>Budapest-Ferihegy</h1><a style='color: #fff'href='../assets/Pilot_Briefing_Budapest_Liszt_Ferenc_Airport.pdf'>LHBP Briefing</a><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Budapest Liszt Ferenc Nemzetközi Repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHDC": `<div class='airport-info-div'>
    <h1>Debrecen</h1>
    <strong>ICAO:</strong> LHDC<br/>
    <strong>Name:</strong> Debrecen International Airport <br/>
    <strong>Elevation:</strong> 361ft<br/>
    <strong>Frequencies:</strong> Debrecen INFO - 125.910<br/>
    <strong>Runways:</strong> 04R-22L<br/>
    <strong>Surface:</strong> Concrete<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1500 AGL | 04R Right - 22L Left<br/>
    <strong>Remarks:</strong> NADP in force. RMZ and TMZ. IFR flights entering controlled airspace after departure shall obtain en route clearance before take-off. Mandatory VFR reporting points in use (JOZA, HOPI, EBES).<br/></div>`,


    "LHSM": `<div class='airport-info-div'>
    <h1>Sármellék</h1>
    <strong>ICAO:</strong> LHSM<br/>
    <strong>Name:</strong> Hévíz-Balaton Airport <br/>
    <strong>Elevation:</strong> 408ft<br/>
    <strong>Frequencies:</strong> Balaton INFO - 134.585<br/>
    <strong>Runways:</strong> 16-34<br/>
    <strong>Surface:</strong> Concrete<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1500 AGL | 16 Both - 34 Both<br/>
    <strong>Remarks:</strong> RMZ and TMZ. IFR flights entering controlled airspace after departure shall obtain en route clearance before take-off. VFR reporting points in use (BALATON, DIOSKAL).<br/></div>`,

    
    "LHPR": `<div class='airport-info-div'>
    <h1>Győr-Pér</h1>
    <strong>ICAO:</strong> LHPR<br/>
    <strong>Name:</strong> Győr/Pér <br/>
    <strong>Elevation:</strong> 426ft<br/>
    <strong>Frequencies:</strong> Pér INFO - 129.910<br/>
    <strong>Runways:</strong> 11-29<br/>
    <strong>Surface:</strong> Asphalt<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1500 AGL | 11 Left - 29 Right<br/>
    <strong>Remarks:</strong> Visual circling in the northern sector of RWY 11/29 is prohibited for speed category C and D aircraft.<br/></div>`,


    "LHPP": `<div class='airport-info-div'>
    <h1>Pécs-Pogány</h1>
    <strong>ICAO:</strong> LHPP<br/>
    <strong>Name:</strong> Pécs/Pogány <br/>
    <strong>Elevation:</strong> 651ft<br/>
    <strong>Frequencies:</strong> Pogány INFO - 126.915<br/>
    <strong>Runways:</strong> 16-34<br/>
    <strong>Surface:</strong> Asphalt<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1000 AGL | 16 Right - 34 Left<br/>
    <strong>Remarks:</strong> The village of Pogány must be avoided by all engine propelled aircraft, except aircraft making instrument approach for RWY 34.<br/></div>`,


    "LHNY": `<div class='airport-info-div'>
    <h1>Nyíregyháza</h1>
    <strong>ICAO:</strong> LHNY<br/>
    <strong>Name:</strong> Nyíregyháza <br/>
    <strong>Elevation:</strong> 338ft<br/>
    <strong>Frequencies:</strong> Budapest Information (East) - 133.000<br/>
    <strong>Runways:</strong> 18-36<br/>
    <strong>Surface:</strong> Asphalt<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1000 AGL | 18 Right - 36 Left<br/>
    <strong>Remarks:</strong> RMZ and TMZ. IFR flights entering controlled airspace after departure shall obtain en route clearance before take-off. Mandatory VFR reporting points in use (PERIT, ROMKA, ANIWE, OMNIS, TISVAS, HAJNAS). <br/></div>`,


    "LHUD": `<div class='airport-info-div'>
    <h1>Szeged</h1>
    <strong>ICAO:</strong> LHUD<br/>
    <strong>Name:</strong> Szeged <br/>
    <strong>Elevation:</strong> 268ft<br/>
    <strong>Frequencies:</strong> Budapest Information (East) - 133.000<br/>
    <strong>Runways:</strong> 16L-34R // 16R-34L<br/>
    <strong>Surface:</strong> Grass // Asphalt<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1200 AMSL | 16L/R Right - 34L/R Left<br/>
    <strong>Remarks:</strong> Engine driven aircraft are required to establish two way radio communication with Szeged AFIS unit whenever arriving to, departing from LHUD or overflying LHUD TIZ airspace.<br/></div>`,
    
    
    "LHBC": `<div class='airport-info-div'>
    <h1>Békéscsaba</h1>
    <strong>ICAO:</strong> LHBC<br/>
    <strong>Name:</strong> Békéscsaba <br/>
    <strong>Elevation:</strong> 286ft<br/>
    <strong>Frequencies:</strong> Budapest Information (East) - 133.000<br/>
    <strong>Runways:</strong> 17L-35R // 17R-35L<br/>
    <strong>Surface:</strong> Asphalt // Grass<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1200 AMSL | 17L Left - 35R Right // 17R Right (Glider only) - 35L Left (Glider only)<br/>
    <strong>Remarks:</strong> NIL<br/></div>`,
    
    
    "LHFM": `<div class='airport-info-div'>
    <h1>Fertőszentmiklós</h1>
    <strong>ICAO:</strong> LHFM<br/>
    <strong>Name:</strong> Fertőszentmiklós<br/>
    <strong>Elevation:</strong> 440ft<br/>
    <strong>Frequencies:</strong> Budapest Information (West) - 125.500<br/>
    <strong>Runways:</strong> 16-34<br/>
    <strong>Surface:</strong> Asphalt<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1400 AMSL | 16 Both - 34 Both<br/>
    <strong>Remarks:</strong> Only day VFR allowed. Flight plan must be filed. TIZ R=5km 4000ft. Parachuting PPR. For international traffic report has to be made min. 1 hour before entering or departing respectively.<br/></div>`,
    
    "LHAK": `<div class='airport-info-div'>
    <h1>Atkár - Gyöngyöshalász</h1>
    <strong>ICAO:</strong> LHAK<br/>
    <strong>Name:</strong> Atkár - Gyöngyöshalász<br/>
    <strong>Elevation:</strong> 364ft<br/>
    <strong>Frequencies:</strong> Budapest Information (North-East) - 134.850<br/>
    <strong>Runways:</strong> 13-31 | 02-20<br/>
    <strong>Surface:</strong> Grass<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1400 AMSL | 13 Left - 31 Right // 02 Right - 20 Left<br/>
    <strong>Remarks:</strong> Nil<br/></div>`,
    
    "LHBI": `<h1>Biharkeresztes</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Biharkeresztes&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHBL": `<h1>Ballószög</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Ballószög repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHBS": `<h1>Budaörs</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHBS&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHBY": `<h1>Bőny</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bőny repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHCL": `<h1>Cegléd</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHCL&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHDK": `<h1>Dunakeszi</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHDK&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHFC": `<h1>Bodmér-Felcsút</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Felcsút&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    
    
    "LHMR": `<div class='airport-info-div'>
    <h1>Maklár</h1>
    <strong>ICAO:</strong> LHMR<br/>
    <strong>Name:</strong> Maklár<br/>
    <strong>Elevation:</strong> 541ft<br/>
    <strong>Frequencies:</strong> Budapest Information (East) - 133.000<br/>
    <strong>Runways:</strong> 17-35<br/>
    <strong>Surface:</strong> Grass<br/>
    <strong>Traffic Pattern Altitude/Direction:</strong> 1000 AGL | 17 Left - 35 Right<br/>
    <strong>Remarks:</strong> Only day VFR allowed. Forbidden to fly over Maklár with motor plane.<br/></div>`,


    "LHGD": `<h1>Gödöllő</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Gödöllői Sportrepülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHGU": `<h1>Győrújbarát Heliport</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Győrújbarát&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHHO": `<h1>Hajdúszoboszló</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHHO&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHJK": `<h1>Jakabszállás</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHJK&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHKA": `<h1>Kalocsa-Foktő</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHKA&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHKH": `<h1>Kiskunfélegyháza</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kiskunfélegyházai Repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHKK": `<h1>Kiskunlacháza</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHKK&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHKV": `<h1>Kaposújlak</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHKV&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHPS": `<h1>Pusztaszer</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Pusztaszer repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHPW": `<h1>Pusztaszer-West</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Pusztaszer West repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHSK": `<h1>Siófok-Kiliti</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHSK&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHSS": `<h1>Szolnok-Szandaszőlős</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHSS&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHST": `<h1>Szatymaz</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHST&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHSV": `<h1>Szarvas-Kákahalom</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Szarvas-Káka Repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHTL": `<h1>Tököl</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=LHTL&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHUH": `<h1>Sárszentmihály-Úrhida</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Úrhidai Repülőtér&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHVE": `<h1>Veresegyház</h1><br><p class='info-text'></p><div class='mapouter'><div class='gmap_canvas'><iframe class='gmap_iframe' width='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=East Line Air Team&amp;t=p&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe></div><style>.mapouter{position:relative;text-align:right;width:100%;height:100%px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}</style></div>`,
    "LHKE": `<h1>Kecskemét</h1>`,
    "LHSN": `<h1>Szolnok</h1>`,
    "LHPA": `<h1>Pápa</h1>`
}

const chart = {
    "LHCC": {
        
        "enroute": {
            "En-route Chart": "../charts/LHCC/enroute/LH_ENR_6_LHCC_ERC_en.pdf",
            "Fauna Chart": "../charts/LHCC/enroute/LH_ENR_6_LHCC_FAUNA_en.pdf",
            "Aerial Sporting Chart": "../charts/LHCC/enroute/LH_ENR_6_LHCC_SPORT_en.pdf"
        }
    },
    "LHBP": {
        "aerodrome": {
            "ADC": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_ADC_en.pdf#zoom=50",
            "Parking/Docking Chart 1": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_PDC_1_en.pdf",
            "Parking/Docking Chart 2": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_PDC_2_en.pdf",
            "Parking/Docking Chart 3": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_PDC_3_en.pdf",
            "Parking/Docking Chart 4": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_PDC_4_en.pdf",
            "Taxi Procedures for Arrivals": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_TAXI_ARR_en.pdf",
            "Taxi Procedures for Departures": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_TAXI_DEP_en.pdf",
            "AOCA 31L - 31R": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_AOCA_13L31R_en.pdf",
            "AOCA 13R - 31L": "../charts/LHBP/aerodrome/LH_AD_2_LHBP_AOCA_13R31L_en.pdf"
        },
        "sid": {
            "13L": "../charts/LHBP/sid/LH_AD_2_LHBP_SID_13L_en.pdf",
            "13R": "../charts/LHBP/sid/LH_AD_2_LHBP_SID_13R_en.pdf",
            "31R": "../charts/LHBP/sid/LH_AD_2_LHBP_SID_31R_en.pdf",
            "31L": "../charts/LHBP/sid/LH_AD_2_LHBP_SID_31L_en.pdf"  
        },
        "star": {
            "13L - 13R": "../charts/LHBP/star/LH_AD_2_LHBP_STAR_13L13R_en.pdf",
            "31L - 31R": "../charts/LHBP/star/LH_AD_2_LHBP_STAR_31L31R_en.pdf",
            "ATCSMAC": "../charts/LHBP/star/LH_AD_2_LHBP_ATCSMAC_en.pdf",
            "Holding Procedures": "../charts/LHBP/star/LH_AD_2_LHBP_HLDG_en.pdf",
            "TMA": "../charts/LHBP/star/LH_AD_2_LHBP_TMA_en.pdf"
        }, 
        "approach": {
            "ILS or LOC 13L": "../charts/LHBP/approach/LH_AD_2_LHBP_ILS_OR_LOC_13L_en.pdf",
            "ILS or LOC 13R": "../charts/LHBP/approach/LH_AD_2_LHBP_ILS_OR_LOC_13R_en.pdf",
            "ILS or LOC 31R": "../charts/LHBP/approach/LH_AD_2_LHBP_ILS_OR_LOC_31R_en.pdf",
            "ILS or LOC 31L": "../charts/LHBP/approach/LH_AD_2_LHBP_ILS_OR_LOC_31L_en.pdf",
            "VOR 31R": "../charts/LHBP/approach/LH_AD_2_LHBP_VOR_31R_en.pdf",
            "VOR 13L": "../charts/LHBP/approach/LH_AD_2_LHBP_VOR_13L_en.pdf",
            "RNP 13L": "../charts/LHBP/approach/LH_AD_2_LHBP_RNP_13L_en.pdf",
            "RNP 13R": "../charts/LHBP/approach/LH_AD_2_LHBP_RNP_13R_en.pdf",
            "RNP 31L": "../charts/LHBP/approach/LH_AD_2_LHBP_RNP_31L_en.pdf",
            "RNP Y 31R": "../charts/LHBP/approach/LH_AD_2_LHBP_RNP_Y_31R_en.pdf",
            "RNP Z 31R": "../charts/LHBP/approach/LH_AD_2_LHBP_RNP_Z_31R_en.pdf",
            "VAC": "../charts/LHBP/approach/LH_AD_2_LHBP_VAC_en.pdf",
            "PATC 13R - 31L": "../charts/LHBP/approach/LH_AD_2_LHBP_PATC_13R31L_en.pdf",
            "PATC 13L - 31R": "../charts/LHBP/approach/LH_AD_2_LHBP_PATC_13L31R_en.pdf"
        }
    },
    "LHDC": {
        "aerodrome": {
            "ADC": "../charts/LHDC/aerodrome/LH_AD_2_LHDC_ADC_en.pdf",
            "AOCA": "../charts/LHDC/aerodrome/LH_AD_2_LHDC_AOCA_04R22L_en.pdf"
        },
        "sid": {
            "04R": "../charts/LHDC/sid/LH_AD_2_LHDC_SID_04R_en.pdf",
            "22L": "../charts/LHDC/sid/LH_AD_2_LHDC_SID_22L_en.pdf"
        },
        "star": {
            "04R - 22L": "../charts/LHDC/star/LH_AD_2_LHDC_STAR_04R22L_en.pdf"
        },
        "approach": {
            "ILS or LOC 04R": "../charts/LHDC/approach/LH_AD_2_LHDC_ILS_OR_LOC_04R_en.pdf",
            "NDB 22L": "../charts/LHDC/approach/LH_AD_2_LHDC_NDB_22L_en.pdf",
            "RNP 04R": "../charts/LHDC/approach/LH_AD_2_LHDC_RNP_04R_en.pdf",
            "RNP 04R": "../charts/LHDC/approach/LH_AD_2_LHDC_RNP_22L_en.pdf",
            "VAC": "../charts/LHDC/approach/LH_AD_2_LHDC_VAC_en.pdf"
        }

    },
    "LHSM": {
        "aerodrome": {
            "ADC": "../charts/LHSM/aerodrome/LH_AD_2_LHSM_ADC_en.pdf",
            "AOCA": "../charts/LHSM/aerodrome/LH_AD_2_LHSM_AOCA_1634_en.pdf"
        },
        "sid": {
            "16": "../charts/LHSM/sid/LH_AD_2_LHSM_SID_16_en.pdf",
            "34": "../charts/LHSM/sid/LH_AD_2_LHSM_SID_34_en.pdf"
        },
        "approach": {
            "ILS or LOC 16": "../charts/LHSM/approach/LH_AD_2_LHSM_ILS_OR_LOC_16_en.pdf",
            "NDB 16": "../charts/LHSM/approach/LH_AD_2_LHSM_NDB_16_en.pdf",
            "NDB 34": "../charts/LHSM/approach/LH_AD_2_LHSM_NDB_34_en.pdf",
            "RNP 16": "../charts/LHSM/approach/LH_AD_2_LHSM_RNP_16_en.pdf",
            "RNP 34": "../charts/LHSM/approach/LH_AD_2_LHSM_RNP_34_en.pdf",
            "VAC": "../charts/LHSM/approach/LH_AD_2_LHSM_VAC_en.pdf"
        },
        "star": {
            "16 - 34": "../charts/LHSM/star/LH_AD_2_LHSM_STAR_1634_en.pdf"
        }
    },
    "LHUD": {
        "aerodrome": {
            "ADC": "../charts/LHUD/aerodrome/LH_AD_2_LHUD_ADC_en.pdf",
            "AOCA": "../charts/LHUD/aerodrome/LH_AD_2_LHUD_AOCA_16R34L_en.pdf"
        },
        "approach": {
            "VAC": "../charts/LHUD/approach/LH_AD_2_LHUD_VAC_en.pdf"
        }
    },
    "LHPR": {
        "aerodrome": {
            "ADC": "../charts/LHPR/aerodrome/LH_AD_2_LHPR_ADC_en.pdf",
            "AOCA": "../charts/LHPR/aerodrome/LH_AD_2_LHPR_AOCA_1129_en.pdf"
        },
        "sid": {
            "11": "../charts/LHPR/sid/LH_AD_2_LHPR_SID_11_en.pdf",
            "29": "../charts/LHPR/sid/LH_AD_2_LHPR_SID_29_en.pdf"
        },
        "approach": {
            "ILS or LOC 29": "../charts/LHPR/approach/LH_AD_2_LHPR_ILS_OR_LOC_29_en.pdf",
            "RNP 11": "../charts/LHPR/approach/LH_AD_2_LHPR_RNP_11_en.pdf",
            "RNP 29": "../charts/LHPR/approach/LH_AD_2_LHPR_RNP_29_en.pdf",
            "VOR 11": "../charts/LHPR/approach/LH_AD_2_LHPR_VOR_11_en.pdf",
            "VOR 29": "../charts/LHPR/approach/LH_AD_2_LHPR_VOR_29_en.pdf",
            "VAC": "../charts/LHPR/approach/LH_AD_2_LHPR_VAC_en.pdf"
        }
    },
    "LHPP": {
        "aerodrome": {
            "ADC": "../charts/LHPP/aerodrome/LH_AD_2_LHPP_ADC_en.pdf",
            "AOCA": "../charts/LHPP/aerodrome/LH_AD_2_LHPP_AOCA_1634_en.pdf"
        },
        "approach": {
            "ILS or LOC 34": "../charts/LHPP/approach/LH_AD_2_LHPP_ILS_OR_LOC_34_en.pdf",
            "NDB 16": "../charts/LHPP/approach/LH_AD_2_LHPP_NDB_16_en.pdf",
            "RNP 16": "../charts/LHPP/approach/LH_AD_2_LHPP_RNP_16_en.pdf",
            "RNP 34": "../charts/LHPP/approach/LH_AD_2_LHPP_RNP_34_en.pdf",
            "VAC": "../charts/LHPP/approach/LH_AD_2_LHPP_VAC_en.pdf"
        }
    },
    "LHNY": {
        "aerodrome": {
            "ADC": "../charts/LHNY/aerodrome/LH_AD_2_LHNY_ADC_en.pdf"
        },
        "approach": {
            "RNP Y 18": "../charts/LHNY/approach/LH_AD_2_LHNY_RNP_Y_18_en.pdf",
            "RNP Y 36": "../charts/LHNY/approach/LH_AD_2_LHNY_RNP_Y_36_en.pdf",
            "RNP Z 18": "../charts/LHNY/approach/LH_AD_2_LHNY_RNP_Z_18_en.pdf",
            "RNP Z 36": "../charts/LHNY/approach/LH_AD_2_LHNY_RNP_Z_36_en.pdf",
            "VAC": "../charts/LHNY/approach/LH_AD_2_LHNY_VAC_en.pdf"
        },
        "sid": {
            "18": "../charts/LHNY/sid/LH_AD_2_LHNY_SID_18_en.pdf",
            "36": "../charts/LHNY/sid/LH_AD_2_LHNY_SID_36_en.pdf",
        },
        "star": {
            "18 - 36": "../charts/LHNY/star/LH_AD_2_LHNY_STAR_1836_en.pdf"
        }
    },
    "LHBC": {
        "aerodrome": {
            "ADC": "../charts/LHBC/aerodrome/LH_AD_2_LHBC_ADC_en.pdf"
        },   
        "approach": {
            "NDB 17L": "../charts/LHBC/approach/LH_AD_2_LHBC_NDB_17L_en.pdf",
            "NDB 35R": "../charts/LHBC/approach/LH_AD_2_LHBC_NDB_35R_en.pdf",
            "RNP 17L": "../charts/LHBC/approach/LH_AD_2_LHBC_RNP_17L_en.pdf",
            "RNP 35R": "../charts/LHBC/approach/LH_AD_2_LHBC_RNP_35R_en.pdf",
            "VAC": "../charts/LHBC/approach/LH_AD_2_LHBC_VAC_en.pdf"
        }
    },
    "LHBF": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHBF/images/VFR_LHBF_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHBF/images/VFR_LHBF_VAC_v2.jpg"
        }
    },
    "LHFM": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHFM/images/VFR_LHFM_ADC_v5.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHFM/images/VFR_LHFM_VAC_v5.jpg"
        }
    },
    "LHGU": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHGU/images/VFR_LHGU_ADC_v5.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHGU/images/VFR_LHGU_VAC_v5.jpg"
        }
    },
    "LHBY": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHBY/images/VFR_LHBY_ADC_v4.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHBY/images/VFR_LHBY_VAC_v6.jpg"
        }
    },
    "LHKV": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHKV/images/VFR_LHKV_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHKV/images/VFR_LHKV_VAC_v3.jpg"
        }
    },
    "LHUH": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHUH/images/VFR_LHUH_ADC_v3.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHUH/images/VFR_LHUH_VAC_v4.jpg"
        }
    },
    "LHFC": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHFC/images/VFR_LHFC_ADC_v1.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHFC/images/VFR_LHFC_VAC_v1.jpg"
        }
    },
    "LHKA": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHKA/images/VFR_LHKA_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHKA/images/VFR_LHKA_VAC_v2.jpg"
        }
    },
    "LHTL": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHTL/images/VFR_LHTL_ADC_v8.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHTL/images/VFR_LHTL_VAC_v8.jpg"
        }
    },
    "LHKK": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHKK/images/VFR_LHKK_ADC_v4.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHKK/images/VFR_LHKK_VAC_v3.jpg"
        }
    },
    "LHBS": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHBS/images/VFR_LHBS_ADC_v5.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHBS/images/VFR_LHBS_VAC_v5.jpg"
        }
    },
    "LHDK": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHDK/images/VFR_LHDK_ADC_v3.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHDK/images/VFR_LHDK_VAC_v3.jpg"
        }
    },
    "LHDV": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHDV/images/VFR_LHDV_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHDV/images/VFR_LHDV_VAC_v3.jpg"
        }
    },
    "LHVE": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHVE/images/VFR_LHVE_ADC_v3.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHVE/images/VFR_LHVE_VAC_v4.jpg"
        }
    },
    "LHGD": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHGD/images/VFR_LHGD_ADC_v4.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHGD/images/VFR_LHGD_VAC_v5.jpg"
        }
    },
    "LHBL": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHBL/images/VFR_LHBL_ADC_v7.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHBL/images/VFR_LHBL_VAC_v8.jpg"
        }
    },
    "LHJK": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHJK/images/VFR_LHJK_ADC_v3.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHJK/images/VFR_LHJK_VAC_v5.jpg"
        }
    },
    "LHKH": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHKH/images/VFR_LHKH_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHKH/images/VFR_LHKH_VAC_v3.jpg"
        }
    },
    "LHKI": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHKI/images/VFR_LHKI_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHKI/images/VFR_LHKI_VAC_v2.jpg"
        }
    },
    "LHAK": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHAK/images/VFR_LHAK_ADC_v3.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHAK/images/VFR_LHAK_VAC_v5.jpg"
        }
    },
    "LHCL": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHCL/images/VFR_LHCL_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHCL/images/VFR_LHCL_VAC_v3.jpg"
        }
    },
    "LHPS": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHPS/images/VFR_LHPS_ADC_v6.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHPS/images/VFR_LHPS_VAC_v5.jpg"
        }
    },
    "LHPW": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHPW/images/VFR_LHPW_ADC_v6.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHPW/images/VFR_LHPW_VAC_v5.jpg"
        }
    },
    "LHSI": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHSI/images/VFR_LHSI_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHSI/images/VFR_LHSI_VAC_v2.jpg"
        }
    },
    "LHST": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHST/images/VFR_LHST_ADC_v7.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHST/images/VFR_LHST_VAC_v7.jpg"
        }
    },
    "LHSS": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHSS/images/VFR_LHSS_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHSS/images/VFR_LHSS_VAC_v2.jpg"
        }
    },
    "LHSV": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHSV/images/VFR_LHSV_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHSV/images/VFR_LHSV_VAC_v2.jpg"
        }
    },
    "LHSZ": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHSZ/images/VFR_LHSZ_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHSZ/images/VFR_LHSZ_VAC_v3.jpg"
        }
    },
    "LHHM": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHHM/images/VFR_LHHM_ADC_v2.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHHM/images/VFR_LHHM_VAC_v3.jpg"
        }
    },
    "LHMP": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHMP/images/VFR_LHMP_ADC_v3.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHMP/images/VFR_LHMP_VAC_v3.jpg"
        }
    },
    "LHHO": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHHO/images/VFR_LHHO_ADC_v5.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHHO/images/VFR_LHHO_VAC_v6.jpg"
        }
    },
    "LHBI": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHBI/images/VFR_LHBI_ADC_v4.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHBI/images/VFR_LHBI_VAC_v4.jpg"
        }
    },
    "LHSK": {
        "aerodrome": {
            "ADC": "https://vfrmanual.hungarocontrol.hu/files/LHSK/images/VFR_LHSK_ADC_v4.jpg"
        },
        "approach": {
            "VAC": "https://vfrmanual.hungarocontrol.hu/files/LHSK/images/VFR_LHSK_VAC_v3.jpg"
        }
    }
}

export default {airport, info, chart};
