// 날씨 정보를 가져오는 비동기 함수
async function fetchWeather() {
  try {
    // Weather API에 데이터를 요청하는 fetch()함수 사용
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a1875c16568f4f27991111408240908&q=Seoul`);

    // 응답이 성공적이지 않은 경우, 에러 발생
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    // 응답된 데이터를 JSON 형식으로 변환하여 저장
    const data = await response.json();

    // 날씨 UI를 업데이트하는 함수에 데이터 전달
    updateWeatherUI(data);

  } catch (error) {
    console.error('Error fetching weather data: ', error);
  }
}

function updateWeatherUI(data) {
  const weatherInfo = `
    <p>온도: ${data.current.temp_c}</P>
  `;

  document.getElementById('weather-info').innerHTML = weatherInfo;
}

fetchWeather();