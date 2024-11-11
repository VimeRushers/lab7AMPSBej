const sq = document.getElementById('letter');
        const sq1 = document.getElementById('1');
        const sq2 = document.getElementById('2');
        const sq3 = document.getElementById('3');
        const sq4 = document.getElementById('4');
        const sq5 = document.getElementById('5');

        sq1.addEventListener('mouseover', function(){
            sq.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor='coral';
        });
        sq2.addEventListener('mouseover', function(){
            sq.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor='#FF7F7F';
        });
        sq3.addEventListener('mouseover', function(){
            sq.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor='lightgreen';
        });
        sq4.addEventListener('mouseover', function(){
            sq.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor='lightblue';
        });
        sq5.addEventListener('mouseover', function(){
            sq.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor='#CBC3E3';
        });

        sq.addEventListener('mouseout', function(){
            sq.style.transition = 'background-color 1s ease';
            document.body.style.backgroundColor='lightgray';
        });

        const text = document.getElementById('button');
        text.addEventListener('mouseover', function(){
            text.textContent = 'THANKS';
        });
        text.addEventListener('mouseout', function(){
            text.textContent = 'HOVER ME';
        });

        const num1 = document.getElementById('11');
        num1.addEventListener('mouseover', function(){
            num1.style.width = '300px';
        });
        num1.addEventListener('mouseout', function(){
            num1.style.width = '200px';
        });

        const num2 = document.getElementById('22');
        num2.addEventListener('mouseover', function(){
            num2.style.width = '100px';
        });
        num2.addEventListener('mouseout', function(){
            num2.style.width = '200px';
        });