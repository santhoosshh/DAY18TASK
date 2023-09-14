const display = document.createElement('footer');
display.className='footer sticky-top mt-auto py-3 bg-light';
display.id="display";
document.body.appendChild(display);

const container = document.createElement('div');
container.className='container';
container.id='background'
document.body.appendChild(container);

const cardRow = document.createElement('div');
cardRow.className='row g-3';
container.appendChild(cardRow);
 
fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
        const cardcol = document.createElement('div');
        cardcol.className='col-lg-4 col-sm-12'; 
        
        const card = document.createElement('div');
        card.className='card';
        card.id='cardsty';
        

        const cardheader = document.createElement('div')
        const h5=document.createElement('p');
        h5.id="countryname"
        cardheader.className = 'card-header';
        cardheader.id='c-head'
        h5.innerHTML=post.name.common;

        const cardbody = document.createElement('div');
        cardbody.className = 'card-body';
        cardbody.id='c-body'

        const img = document.createElement('img');
        img.src=post.flags.png;

        const text1 = document.createElement('p');
        text1.classname='text1';
        text1.id='t1'
        text1.innerHTML=`Capital : ${post.capital}`;


        const text2 = document.createElement('p');
        text2.classname='text2';
        text2.id='t2'
        text2.innerHTML=`Region : ${post.region}`;

        const text3 = document.createElement('p');
        text3.classname='text3';
        text3.id='t3'
        text3.innerHTML=`Country Code : ${post.cca3}`;
        
        const button = document.createElement('button');
        button.className="btn btn-primary";
        button.id='btn'
        button.innerHTML="Click for weather";
        button.addEventListener('click',openweather)
       
      
        async function openweather(){
          try{
            latlang=post.latlng;
            lat=latlang[0];
            lon=latlang[1];
            var url=await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5eb80903ee2b10ea7daf78f1a1299fdd`)
            var result= await url.json();
            var res=result.main.temp;
            var res2=document.getElementById('display');
            res2.innerHTML="";
            res2.innerHTML=` Weather of ${name.common} is ${res}`;
            alert(` Weather of ${name.common} is ${res}`);
          }
          catch(error){
            alert(error.message);
          }
        }
        
        cardRow.appendChild(cardcol);
        cardcol.appendChild(card);
        card.appendChild(cardheader);
        cardheader.appendChild(h5);
        card.appendChild(cardbody);
        cardbody.appendChild(img);
        cardbody.appendChild(text1);
        cardbody.appendChild(text2);
        cardbody.appendChild(text3);
        cardbody.appendChild(button);
        var name= post.name;
});
})
.catch(error => console.log(error));