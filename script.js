         
        $(document).ready(function() {
            $('#submit').click(function(e) {
                e.preventDefault();
                var age = parseInt($('#age').val());
                var sex = $('#sex').val();
                var smoking = $('#smoking').val();
                var vaccinated = $('#vaccinated').val()
                var riskLevel = 0;
                if (age < 26 && sex === 'female' && smoking === 'no' && vaccinated === 'yes' && sexualPartners === '1') {
                    riskLevel = 10;
                } else if (age >= 26 && sex === 'male' && smoking === 'yes' && vaccinated === 'no' && sexualPartners === '6') {
                    riskLevel = 80;
                } else if (age >= 26 && sex === 'male' && smoking === 'yes' && vaccinated === 'no' && sexualPartners === '3') {
                    riskLevel = 60;
                } else if (age < 26 && sex === 'female' && smoking === 'no' && vaccinated === 'yes' && sexualPartners === '3') {
                    riskLevel = 20;
                } else {
                    riskLevel = 40;
                }
                $('#result').text('Your risk level is: ' + riskLevel + '%');
                const ctx = document.getElementById('myChart').getContext('2d');
                const myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Low Risk', 'High Risk'],
                        datasets: [{
                            label: 'Risk Level',
                            data: [100 - riskLevel, riskLevel],
                            backgroundColor: [
                                'rgba(0, 255, 0, 0.2)',
                                'rgba(255, 0, 0, 0.2)'
                            ],
                            borderColor: [
                                'rgba(0, 255, 0, 1)',
                                'rgba(255, 0, 0, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            });
        });
  