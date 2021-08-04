
const printWeather = document.getElementById("weather");

    
//todays date
let todayDate = new Date();
//tomorrows date
let tmrwDate = new Date();
tmrwDate.setDate(todayDate.getDate() + 1);


const today06 = getDate(todayDate, "T06:00:00Z");
const today12 = getDate(todayDate, "T12:00:00Z");
const today18 = getDate(todayDate, "T18:00:00Z");

const tmrw06 = getDate(tmrwDate, "T06:00:00Z");
const tmrw12 = getDate(tmrwDate, "T12:00:00Z");
const tmrw18 = getDate(tmrwDate, "T18:00:00Z");




function getForecast() {
    fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json`)
    .then((response) => response.json())
    .then(function(forecast){
        
        const td06 = getParams(forecast, today06);
        const td12 = getParams(forecast, today12);
        const td18 = getParams(forecast, today18);

        const tm06 = getParams(forecast, tmrw06);
        const tm12 = getParams(forecast, tmrw12);
        const tm18 = getParams(forecast, tmrw18);

        printForecast(td06, td12, td18, tm06, tm12, tm18);

        rotate(td06[0].wd);
        rotate(td12[0].wd);
        rotate(td18[0].wd);
        rotate(tm06[0].wd);
        rotate(tm12[0].wd);
        rotate(tm18[0].wd);
       
    });

};

//get date in right format for match with validTime
function getDate(day, time) {

    const yyyy = day.getFullYear();
    const mm = String(day.getMonth() + 1).padStart(2, '0');
    const dd = String(day.getDate()).padStart(2, '0');

    day = yyyy + '-' + mm + '-' + dd;

    day += time;

    return day;
};


function getParams(forecast, time) {
            
    const arr = []; 
    const date = forecast.timeSeries.find( ({ validTime }) => validTime === time );
    
    if (date === undefined) {

        arr.push({"t": "N/A", "ws": "N/A", "wd": "N/A", "Wsymb2": "N/A"});
    
    } else {
        
        let tResult = date.parameters.find( ({name}) => name === "t");
        let wsResult = date.parameters.find( ({name}) => name === "ws");
        let wdResult = date.parameters.find( ({name}) => name === "wd");
        let Wsymb2num = date.parameters.find( ({name}) => name === "Wsymb2");
    
        let Wsymb2Result = switchDesc(Wsymb2num.values[0]);

        arr.push({"t": tResult.values[0], "ws": wsResult.values[0], "wd": wdResult.values[0], "Wsymb2": Wsymb2Result});

    };

    return arr;
};

function switchDesc(num) {
    
    let val; 

    switch(num) {
        case 1:
            val = "Clear sky";
            break;
        case 2:
            val = "Nearly clear sky"
            break;
        case 3:
            val = "Variable cloudiness";
            break;
        case 4:
            val = "Halfclear sky";
            break;
        case 5:
            val = "Cloudy sky"
            break;
        case 6:
            val = "Overcast";
            break;
        case 7:
            val = "Fog";
            break;
        case 8:
            val = "Light rain showers"
            break;
        case 9:
            val = "Moderate rain showers";
            break;
        case 10:
            val = "Heavy rain showers";
            break;
        case 11:
            val = "Thunderstorm";
            break;
        case 12:
            val = "Light sleet showers";
            break;
        case 13:
            val = "Moderate sleet showers";
            break;
        case 14:
            val = "Heavy sleet showers";
            break;
        case 15:
            val = "Light snow showers";
            break;
        case 16:
            val = "Moderate snow showers"
            break;
        case 17:
            val = "Heave snow showers";
            break;
        case 18:
            val = "Light rain";
            break;
        case 19:
            val = "Moderate rain"
            break;
        case 20:
            val = "Heavy rain";
            break;
        case 21:
            val = "Thunder";
            break;
        case 22:
            val = "Light sleet"
            break;
        case 23:
            val = "Moderate sleet";
            break;
        case 24:
            val = "Heavy sleet";
            break;
        case 25:
            val = "LIght snowfall"
            break;
        case 26:
            val = "Moderate snowfall";
            break;
        case 27:
            val = "Heavy snowfall";
            break;
        default:
            val = "N/A";
    };

    return val;
}

function printForecast(td06, td12, td18, tm06, tm12, tm18) {
    
    printWeather.insertAdjacentHTML("beforeend", `
   
        <article>
            <caption>Idag</caption>
            <table id="weatherToday" class="opacity">
                <thead>
                    <tr>
                        <th scope="col">Kl.</th>
                        <th scope="col">Temperatur °C</th>
                        <th scope="col">Vind m/s</th>
                        <th scope="col">Himmel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" data-label="Kl.">06</td>
                        <td data-label="Temperatur">${td06[0].t}</td>
                        <td data-label="Vind"><i id="${td06[0].wd}" class="fas fa-long-arrow-alt-up"></i> ${td06[0].ws}</td>
                        <td data-label="Himmel">${td06[0].Wsymb2}</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Kl.">12</td>
                        <td data-label="Temperatur">${td12[0].t}</td>
                        <td data-label="Vind"><i id="${td12[0].wd}" class="fas fa-long-arrow-alt-up"></i> ${td12[0].ws}</td>
                        <td data-label="Himmel">${td12[0].Wsymb2}</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Kl.">18</td>
                        <td data-label="Temperatur">${td18[0].t}</td>
                        <td data-label="Vind"><i id="${td18[0].wd}" class="fas fa-long-arrow-alt-up"></i> ${td18[0].ws}</td>
                        <td data-label="Himmel">${td18[0].Wsymb2}</td>
                    </tr>
                </tbody>
            </table>
        </article>
        <article>
            <caption>Imorgon</caption>
            <table id="weatherTmrw" class="opacity">
                <thead>
                    <tr>
                        <th scope="col">Kl.</th>
                        <th scope="col">Temperatur °C</th>
                        <th scope="col">Vind m/s</th>
                        <th scope="col">Himmel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" data-label="Kl.">06</td>
                        <td data-label="Temperatur">${tm06[0].t}</td>
                        <td data-label="Vind"><i id="${tm06[0].wd}" class="fas fa-long-arrow-alt-up"> </i>  ${tm06[0].ws}</td>
                        <td data-label="Himmel">${tm06[0].Wsymb2}</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Kl.">12</td>
                        <td data-label="Temperatur">${tm12[0].t}</td>
                        <td data-label="Vind"><i id="${tm12[0].wd}" class="fas fa-long-arrow-alt-up"> </i>  ${tm12[0].ws}</td>
                        <td data-label="Himmel">${tm12[0].Wsymb2}</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Kl.">18</td>
                        <td data-label="Temperatur">${tm18[0].t}</td>
                        <td data-label="Vind"><i id="${tm18[0].wd}" class="fas fa-long-arrow-alt-up"> </i> ${tm18[0].ws}</td>
                        <td data-label="Himmel">${tm18[0].Wsymb2}</td>
                    </tr>
                </tbody>
            </table>
        </article>`
    );

};

//rotate wind arrow
function rotate(data) {

    let icon = document.getElementById(`${data}`);

    icon.style.transform = `rotate(${data}deg)`;

    if (data === "N/A") icon.parentNode.innerHTML = "N/A";

};



export {getForecast};

