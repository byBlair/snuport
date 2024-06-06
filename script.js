document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['경험', '자격증', '활동 경력', '수상 경력'],
            datasets: [{
                label: '데이터 시각화',
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                duration: 2000, // 애니메이션 지속 시간
                easing: 'easeOutBounce' // 애니메이션 이징 함수
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // 차트 데이터를 점진적으로 업데이트하는 함수
    function updateChartData(chart, data) {
        let i = 0;
        const interval = setInterval(() => {
            chart.data.datasets[0].data = data.map((val, index) => {
                return index <= i ? val : 0;
            });
            chart.update();
            i++;
            if (i >= data.length) {
                clearInterval(interval);
            }
        }, 500);
    }

    // 최종 데이터 값
    const finalData = [4, 1, 1, 3];
    updateChartData(myChart, finalData);
});
