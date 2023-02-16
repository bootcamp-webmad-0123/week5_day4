const getApiData = () => {

    axios
        .get('https://multiapi-app.fly.dev/contacts')
        .then(({ data }) => {
            renderAgeChart(data)
        })
        .catch(err => console.log(err))
}


// Chart básico
const drawFirstChart = () => {

    const data = {
        labels: ['UNO', 'DOS', 'TRES'],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['rgba(255, 0, 0, .2)', 'rgba(0, 255, 0, .2)', 'rgba(0, 0, 255, .2)'],
            borderColor: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 0, 255, 1)'],
            borderWidth: 2
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: true
            }
        }
    }

    new Chart('chart1', {
        type: 'polarArea',
        data,
        options
    })
}


// Chart mixto
const drawSecondChart = () => {

    const data = {
        labels: ['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS'],
        datasets: [
            {
                data: [10, 20, 30, 20, 16, 44],
                backgroundColor: 'rgba(255, 0, 0, .2)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 2,
                label: 'GRUPO 1',
            },
            {
                data: [5, 40, 26, 12, 41, 89],
                backgroundColor: 'rgba(0, 255, 0, .2)',
                borderColor: 'rgba(0, 255, 0, 1)',
                borderWidth: 2,
                label: 'GRUPO 2',
                type: 'bar'
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }


    new Chart('chart2', {
        type: 'line',
        data,
        options
    })
}





// Chart que consume una API
const renderAgeChart = contacts => {

    const data = {
        labels: ['Mayores de 33', 'Menores de 33'],
        datasets: [{
            data: [
                contacts.filter(elm => elm.age > 33).length,
                contacts.filter(elm => elm.age <= 33).length
            ],
            backgroundColor: ['rgba(255, 0, 0, .2)', 'rgba(0, 255, 0, .2)', 'rgba(0, 0, 255, .2)'],
            borderColor: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 0, 255, 1)'],
        }]
    }

    new Chart('chart3', {
        type: 'doughnut',
        data
    })

}






drawFirstChart()
drawSecondChart()
getApiData()