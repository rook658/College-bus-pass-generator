
const routes=
            {A:{stops:['KANJIRAMPARA','MANJADIMOODU','VATTIYORKAVU','MANNARAKONAM','CPT HEADQUARTERS',
                'MELATHUMELE','MANNAMOOLA','PEROORKADA']},
            N:{stops:['PAPPANAMCODE','KAIMANAM','TVS JUNCTION','KARAMANA','KUNCHALUMOODU','EDAPAZHANJI','ESWARA VILASAM','COTTON HILL',
                'MANAVEEYAM','MUSEUM','PMG','PLAMOODU','PATTOM','PATTOM ST-MARYS']},
            T:{stops:['THAMPANOOR','THYCAUD HOSPITAL','METTUKADA','AYYAPAN TEMPLE','ANNIE MASCARENE SQUARE',
                'VAZHUTHACAUD(FOREST OFFICE)','AALTHARA JUNCTION','VELLAYAMBALAM','KOWDIAR','KURAVANKONAM',
                'MARAPALAM','PATTOM(SUT)','VYDYUTHI BHAVAN','POTTAKUZHY','COSMO','MURINJAPALAM','MEDICAL COLLEGE','ULLOR']},
            P:{stops:['POOJAPURA','CHENGALOOR','VIJAYAMOHINI MILL','PALLIMUKU','MARUTHAMKUZHI','SASTHAMANGALAM',
                'PIPINMOODU','OOLAMPARA','AMBALAMUKU','VAYALIKADA','MUTTADA','PARUTHIPPARA','KESAVADASAPURAM']},
            M:{stops:['MANACUAD','EAST FORT','AYURVEDA HOSPITAL','STATUE','UNIVERSITY LIBRARY','AKG CENTER',
            'GENERAL HOSPITAL JUNCTION','PATTOR','PALLIMUKU','KANNANMOOLA','KUMARAPURAM','MEDICAL COLLEGE HSS']},
            L:{stops:['ATTINGAL','ATTINGAL BUS STAND','MOONNUMUKU','MANAM','KORANI','CHAMPAKAMANGALAM','16 MILE',
                'THONNAKKAL AJ COLLEGE','CRP','PALLIPURAM','KANIYAPURAM','VETTUROAD','BLOCK OFFICE','KAZHAKUTTOM']},
            V:{stops:['KILIMANOR','PULIMATH','PORUNTHAMON','KARETTE','VAMANAPURAM','AMBALAMUKKU',
                'GOKULAM MEDICAL COLLEGE','VENJARAMOODU','THYCAUD','VELAVOOR','KOLIYACODE','SANTHIGIRI','POTHENCODE',
                'KATTAYIKONAM','CHENKOTTUKONAM','LNCP']}};

        const time_months=document.getElementById("duration");
        const type_passenger=document.getElementById("type");
        const route_no=document.getElementById("route");
        const point=document.getElementById("point");

        function updateStops() {
            const route = route_no.value;
            point.innerHTML = '<option value="">Select Boarding Point</option>';
            if (routes[route]) {
                routes[route].stops.forEach(stop => {
                const opt = document.createElement("option");
                opt.value = stop;
                opt.textContent = stop;
                point.appendChild(opt);
                });
            }
            calculateFee();
            }
        
        function calculateFee(){
            const Time=time_months.value;//6 months or 3 months
            const passenger=type_passenger.value;//staff or student
            const route=route_no.value;//Route 
            const Boarding_point=point.value;
            let fee=0;
            if(route==='A'){
                if(Time==="6 months"){
                    if(passenger==="Staff"){
                        if(routes.A.stops.slice(0, 6).includes(Boarding_point))
                            fee=3900;
                         else if(routes.A.stops.slice(6, 8).includes(Boarding_point))
                            fee=3100;
                    }
                    else if(passenger==="Student"){
                        if(routes.A.stops.slice(0, 6).includes(Boarding_point))
                            fee=3100;
                         else if(routes.A.stops.slice(6, 8).includes(Boarding_point))
                            fee=2500;
                    }
                }
                if(Time==="3 months"){
                    if(passenger==="Staff"){
                        if(routes.A.stops.slice(0, 6).includes(Boarding_point))
                            fee=2300;
                         else if(routes.A.stops.slice(6, 8).includes(Boarding_point))
                            fee=1900;
                    }
                    else if(passenger==="Student"){
                        if(routes.A.stops.slice(0, 6).includes(Boarding_point))
                            fee=1900;
                         else if(routes.A.stops.slice(6, 8).includes(Boarding_point))
                            fee=1500;
                    }
                }                          
            }
            if(route==='N'){
                if(Time==="6 months"){
                    if(passenger==="Staff"){
                        if(routes.N.stops.slice(0, 3).includes(Boarding_point))
                            fee=4700;
                         else if(routes.N.stops.slice(3, 5).includes(Boarding_point))
                            fee=3900;
                         else if(routes.N.stops.slice(5, 11).includes(Boarding_point))
                            fee=3100;
                         else if(routes.N.stops.slice(11, 14).includes(Boarding_point))
                            fee=2300;
                    }
                    else if(passenger==="Student"){
                        if(routes.N.stops.slice(0, 3).includes(Boarding_point))
                            fee=3800;
                         else if(routes.N.stops.slice(3, 5).includes(Boarding_point))
                            fee=3100;
                         else if(routes.N.stops.slice(5, 11).includes(Boarding_point))
                            fee=2500;
                         else if(routes.N.stops.slice(11, 14).includes(Boarding_point))
                            fee=1800;
                    }
                }
                if(Time==="3 months"){
                    if(passenger==="Staff"){
                        if(routes.N.stops.slice(0, 3).includes(Boarding_point))
                            fee=2900;
                         else if(routes.N.stops.slice(3, 5).includes(Boarding_point))
                            fee=2300;
                         else if(routes.N.stops.slice(5, 11).includes(Boarding_point))
                            fee=1900;
                         else if(routes.N.stops.slice(11, 14).includes(Boarding_point))
                            fee=1400;
                    }
                    else if(passenger==="Student"){
                        if(routes.N.stops.slice(0, 3).includes(Boarding_point))
                            fee=2300;
                         else if(routes.N.stops.slice(3, 5).includes(Boarding_point))
                            fee=1900;
                         else if(routes.N.stops.slice(5, 11).includes(Boarding_point))
                            fee=1500;
                         else if(routes.N.stops.slice(11, 14).includes(Boarding_point))
                            fee=1100;
                    }
                }                          
            }
            if(route==='P'){
                if(Time==="6 months"){
                    if(passenger==="Staff"){
                        if(routes.P.stops.slice(0, 6).includes(Boarding_point))
                            fee=3900;
                         else if(routes.P.stops.slice(6, 9).includes(Boarding_point))
                            fee=3100;
                        else if(routes.P.stops.slice(6, 13).includes(Boarding_point))
                            fee=2300;
                    }
                    else if(passenger==="Student"){
                        if(routes.P.stops.slice(0, 6).includes(Boarding_point))
                            fee=3100;
                         else if(routes.P.stops.slice(6, 9).includes(Boarding_point))
                            fee=2500;
                        else if(routes.P.stops.slice(6, 13).includes(Boarding_point))
                            fee=1800;
                    }
                }
                else if(Time==="3 months"){
                    if(passenger==="Staff"){
                        if(routes.P.stops.slice(0, 6).includes(Boarding_point))
                            fee=2300;
                         else if(routes.P.stops.slice(6, 9).includes(Boarding_point))
                            fee=1900;
                        else if(routes.P.stops.slice(6, 13).includes(Boarding_point))
                            fee=1400;
                    }
                    else if(passenger==="Student"){
                        if(routes.P.stops.slice(0, 6).includes(Boarding_point))
                            fee=1900;
                         else if(routes.P.stops.slice(6, 9).includes(Boarding_point))
                            fee=1500;
                        else if(routes.P.stops.slice(6, 13).includes(Boarding_point))
                            fee=1100;
                    }
                }                          
            }
            if(route==='T'){
                if(Time==="6 months"){
                    if(passenger==="Staff"){
                        if(routes.T.stops.slice(0, 5).includes(Boarding_point))
                            fee=3900;
                         else if(routes.T.stops.slice(5, 11).includes(Boarding_point))
                            fee=3100;
                        else if(routes.T.stops.slice(5, 19).includes(Boarding_point))
                            fee=2300;
                    }
                    else if(passenger==="Student"){
                        if(routes.T.stops.slice(0, 5).includes(Boarding_point))
                            fee=3100;
                         else if(routes.T.stops.slice(5, 11).includes(Boarding_point))
                            fee=2500;
                        else if(routes.T.stops.slice(11, 19).includes(Boarding_point))
                            fee=1800;
                    }
                }
                else if(Time==="3 months"){
                    if(passenger==="Staff"){
                    if(routes.T.stops.slice(0, 5).includes(Boarding_point))
                            fee=2300;
                         else if(routes.T.stops.slice(5, 11).includes(Boarding_point))
                            fee=1900;
                        else if(routes.T.stops.slice(11, 19).includes(Boarding_point))
                            fee=1400;
                    }
                    else if(passenger==="Student"){
                        if(routes.T.stops.slice(0, 5).includes(Boarding_point))
                            fee=1900;
                         else if(routes.T.stops.slice(5, 11).includes(Boarding_point))
                            fee=1500;
                        else if(routes.T.stops.slice(11, 19).includes(Boarding_point))
                            fee=1100;
                    }
                }                          
            }
            if(route==='M'){
                if(Time==="6 months"){
                    if(passenger==="Staff"){
                        if(routes.M.stops.slice(0, 4).includes(Boarding_point))
                            fee=3900;
                         else if(routes.M.stops.slice(4, 9).includes(Boarding_point))
                            fee=3100;
                        else if(routes.M.stops.slice(9,12).includes(Boarding_point))
                            fee=2300;
                    }
                    else if(passenger==="Student"){
                        if(routes.M.stops.slice(0, 4).includes(Boarding_point))
                            fee=3100;
                         else if(routes.M.stops.slice(4, 9).includes(Boarding_point))
                            fee=2500;
                        else if(routes.M.stops.slice(9,12).includes(Boarding_point))
                            fee=1800;
                    }
                }
                else if(Time==="3 months"){
                    if(passenger==="Staff"){
                        if(routes.M.stops.slice(0, 4).includes(Boarding_point))
                            fee=2300;
                         else if(routes.M.stops.slice(4, 9).includes(Boarding_point))
                            fee=1900;
                        else if(routes.M.stops.slice(9,12).includes(Boarding_point))
                            fee=1400;
                    }
                    else if(passenger==="Student"){
                        if(routes.M.stops.slice(0, 4).includes(Boarding_point))
                            fee=1900;
                         else if(routes.M.stops.slice(4, 9).includes(Boarding_point))
                            fee=1500;
                        else if(routes.M.stops.slice(9,12).includes(Boarding_point))
                            fee=1100;
                    }
                }                          
            }
            if(route==='L'){
                if(Time==="6 months"){
                    if(passenger==="Staff"){
                        if(routes.L.stops.slice(0, 4).includes(Boarding_point))
                            fee=5500;
                         else if(routes.L.stops.slice(4, 6).includes(Boarding_point))
                            fee=4700;
                        else if(routes.L.stops.slice(6, 10).includes(Boarding_point))
                            fee=3900;
                        else if(routes.L.stops.slice(10, 13).includes(Boarding_point))
                            fee=3100;
                        else if(routes.L.stops.slice(13, 15).includes(Boarding_point))
                            fee=2300;
                    }
                    else if(passenger==="Student"){
                        if(routes.L.stops.slice(0, 4).includes(Boarding_point))
                            fee=4400;
                         else if(routes.L.stops.slice(4, 6).includes(Boarding_point))
                            fee=3800;
                        else if(routes.L.stops.slice(6, 10).includes(Boarding_point))
                            fee=3100;
                        else if(routes.L.stops.slice(10, 13).includes(Boarding_point))
                            fee=2500;
                        else if(routes.L.stops.slice(13, 15).includes(Boarding_point))
                            fee=1800;
                    }
                }
                else if(Time==="3 months"){
                    if(passenger==="Staff"){
                        if(routes.L.stops.slice(0, 4).includes(Boarding_point))
                            fee=3300;
                         else if(routes.L.stops.slice(4, 6).includes(Boarding_point))
                            fee=2900;
                        else if(routes.L.stops.slice(6, 10).includes(Boarding_point))
                            fee=2300;
                        else if(routes.L.stops.slice(10, 13).includes(Boarding_point))
                            fee=1900;
                        else if(routes.L.stops.slice(13, 15).includes(Boarding_point))
                            fee=1400;
                    }
                    else if(passenger==="Student"){
                        if(routes.L.stops.slice(0, 4).includes(Boarding_point))
                            fee=2600;
                         else if(routes.L.stops.slice(4, 6).includes(Boarding_point))
                            fee=2300;
                        else if(routes.L.stops.slice(6, 10).includes(Boarding_point))
                            fee=1900;
                        else if(routes.L.stops.slice(10, 13).includes(Boarding_point))
                            fee=1500;
                        else if(routes.L.stops.slice(13, 15).includes(Boarding_point))
                            fee=1100;
                    }
                }                          
            }
            if(route==='V'){
                if(Time==="6 months"){
                    if(passenger==="Staff"){
                        if(routes.V.stops.slice(0, 3).includes(Boarding_point))
                            fee=7100;
                         else if(routes.V.stops.slice(3, 5).includes(Boarding_point))
                            fee=6300;
                        else if(routes.V.stops.slice(5, 7).includes(Boarding_point))
                            fee=5500;
                        else if(routes.V.stops.slice(7, 10).includes(Boarding_point))
                            fee=4700;
                        else if(routes.V.stops.slice(10, 12).includes(Boarding_point))
                            fee=3900;
                        else if(routes.V.stops.slice(12, 14).includes(Boarding_point))
                            fee=3100;
                        else if(routes.V.stops.slice(14, 16).includes(Boarding_point))
                            fee=2300;
                    }
                    else if(passenger==="Student"){
                        if(routes.V.stops.slice(0, 3).includes(Boarding_point))
                            fee=5700;
                         else if(routes.V.stops.slice(3, 5).includes(Boarding_point))
                            fee=5000;
                        else if(routes.V.stops.slice(5, 7).includes(Boarding_point))
                            fee=4400;
                        else if(routes.V.stops.slice(7, 10).includes(Boarding_point))
                            fee=3800;
                        else if(routes.V.stops.slice(10, 12).includes(Boarding_point))
                            fee=3100;
                        else if(routes.V.stops.slice(12, 14).includes(Boarding_point))
                            fee=2500;
                        else if(routes.V.stops.slice(14, 16).includes(Boarding_point))
                            fee=1800;
                    }
                }
                else if(Time==="3 months"){
                    if(passenger==="Staff"){
                        if(routes.V.stops.slice(0, 3).includes(Boarding_point))
                            fee=4300;
                         else if(routes.V.stops.slice(3, 5).includes(Boarding_point))
                            fee=3800;
                        else if(routes.V.stops.slice(5, 7).includes(Boarding_point))
                            fee=3300;
                        else if(routes.V.stops.slice(7, 10).includes(Boarding_point))
                            fee=2900;
                        else if(routes.V.stops.slice(10, 12).includes(Boarding_point))
                            fee=2300;
                        else if(routes.V.stops.slice(12, 14).includes(Boarding_point))
                            fee=1900;
                        else if(routes.V.stops.slice(14, 16).includes(Boarding_point))
                            fee=1400;
                    }
                    else if(passenger==="Student"){
                        if(routes.V.stops.slice(0, 3).includes(Boarding_point))
                            fee=3400;
                         else if(routes.V.stops.slice(3, 5).includes(Boarding_point))
                            fee=3000;
                        else if(routes.V.stops.slice(5, 7).includes(Boarding_point))
                            fee=2600;
                        else if(routes.V.stops.slice(7, 10).includes(Boarding_point))
                            fee=2300;
                        else if(routes.V.stops.slice(10, 12).includes(Boarding_point))
                            fee=1900;
                        else if(routes.V.stops.slice(12, 14).includes(Boarding_point))
                            fee=1500;
                        else if(routes.V.stops.slice(14, 16).includes(Boarding_point))
                            fee=1100;
                    }
                }                          
            }
            document.getElementById("fee").innerHTML=`Total fee :${fee}`;
            return fee;
        }
        time_months.addEventListener("change", calculateFee);
        type_passenger.addEventListener("change", calculateFee);
        route_no.addEventListener("change", updateStops);
        point.addEventListener("change", calculateFee);

        const submit=document.getElementById("submit");
        submit.addEventListener('click',(event)=>{
            event.preventDefault();
           localStorage.setItem("bus fee",calculateFee());

           window.location.href="payment.html";
        });