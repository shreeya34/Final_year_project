document.addEventListener('DOMContentLoaded', () => {
    const forecastButton = document.getElementById('forecastButton');
    forecastButton.addEventListener('click', forecast);

    function forecast() {
        const timeSeriesData = document.getElementById('timeSeriesData').value;
        // You would process the data and perform forecasting here
        // For this example, let's assume you have forecasted data in an array called forecastedValues

        // Generate random forecasted values for demonstration
        const forecastedValues = [];
        for (let i = 0; i < 10; i++) {
            forecastedValues.push(Math.random() * 100);
        }

        displayChart(forecastedValues);
    }

    function displayChart(forecastedValues) {
        const forecastChart = document.getElementById('forecastChart').getContext('2d');
        new Chart(forecastChart, {
            type: 'line',
            data: {
                labels: Array.from({ length: forecastedValues.length }, (_, i) => i + 1),
                datasets: [{
                    label: 'Forecasted Values',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: forecastedValues,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });
    }
});