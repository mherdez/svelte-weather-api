<script>
  import './App.css';

  const getWeather = async (city) => {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1592e28623msha1546bdbbb37bf4p1bec8djsn65cf0e56a3df',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  let ciudades = [];

  let ciudad,
    location,
    current;
  let name, region, country;
  let temp_c, wind_kph, wind_dir, humidity, pressure_in, condition;
  let icon, text;

  const getInput = async () => {
    if (!ciudad) return;
    const newPlace = await getWeather(ciudad);
    // console.log(newPlace)
    location = newPlace.location;
    current = newPlace.current;

    name = location.name;
    region = location.region;
    country = location.country;

    temp_c = current.temp_c;
    wind_kph = current.wind_kph;
    wind_dir = current.wind_dir;
    humidity = current.humidity;
    pressure_in = current.pressure_in;
    condition = current.condition;

    icon = condition.icon;
    text = condition.text;

    const newCity = {
      name,
      region,
      country,
      temp_c,
      wind_kph,
      wind_dir,
      humidity,
      pressure_in,
      icon,
      text,
    };
    ciudades = [newCity, ...ciudades];
    ciudad = ''
  };
</script>

<div class="container">
  <header class="container-header">
    <input class="input" type="text" bind:value={ciudad} />
    <button class="btn" on:click={getInput}>Añadir ciudad</button>
  </header>
  <main class="container-main">
    {#each ciudades as ciudad}
      <article class="card">
        <div class="card-header">
          <div class="card-header-icon">
            <img
              src={`https:${ciudad.icon}`}
              alt="icon weather api"
              crossorigin="anonymous"
            />
          </div>
          <div class="card-header-info">
            <p class="card-header-info-condition">{ciudad.text}</p>
            <p class="card-header-info-temp">{ciudad.temp_c}<span>º</span></p>
            <p class="card-header-info-city">
              {ciudad.name}, {ciudad.region}, {ciudad.country}
            </p>
          </div>
        </div>
        <div class="card-body">
          <p class="card-body-info-wind">
            Wind: <span>{ciudad.wind_dir} {ciudad.wind_kph} km/h</span>
          </p>
          <p class="card-body-info-humidity">
            Humidity: <span>{ciudad.humidity}%</span>
          </p>
          <p class="card-body-info-pressure">
            Pressure: <span>{ciudad.pressure_in} in</span>
          </p>
        </div>
      </article>
    {/each}
  </main>
</div>

<style>
  .container {
    margin: 20px auto;
    text-align: center;
  }
  .input {
    height: 35px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
  }
  .btn {
    height: 35px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
  }
</style>
