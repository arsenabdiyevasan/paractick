const row=document.querySelector('.row')
const title=document.querySelector('.bl')
const content=document.querySelector('.bll')
const btn=document.querySelector('.btn')

btn.addEventListener('click' ,e=>{
    e.preventDefault();

    if(title.value === '' && content.value === '') alert('поля не должны быть пустыми');

    if(title.value !== '' && content.value !== ''){
        row.insertAdjacentHTML('afterbegin', cardTemplate(title.value, content.value,
            currentTime()));
            title.value='';
            content.value='';
    }
})

function cardTemplate(title,content,time){
    if(content.length >= 1){
        return `
        <div class="wrap">
        <div class="container">
            <div class="blocki">
                <div class="top">
                    <h2>${title}</h2>
                </div>
                <div class="bb shorted">
                    <p>${content}</p>
                    <spanc class="time">${time}</spanc>
                </div>
                <div class="foot">
                    <button class="btn2 dele">Delete</button>
                    <button class="btn2 compl">Complate</button>
                    <button class="btn2 edit">edit</button>
                </div>
            </div>
        </div>
        
        
    </div>`
    }else{
        return`
        <div class="wrap">
        <div class="container">
            <div class="blocki">
                <div class="top">
                    <h2>${title}</h2>
                </div>
                <div class="bb shorted">
                    <p>${content}</p>
                    <spanc class="time">${time}</spanc>
                </div>
                <div class="foot">
                    <button class="btn2 dele">Delete</button>
                    <button class="btn2 compl">Complate</button>
                    <button class="btn2 edit">edit</button>
                </div>
            </div>
        </div>
        
        
    </div>`
    }
}

function currentTime(){
    return `${moment().format('L')} ${moment().format('LTS')}`
}

window.addEventListener('load', () =>{
    const isAuth =localStorage.getItem('isAuth')

    if(isAuth === 'true') return;

    if(!isAuth){
        window.open('index.html','_self')
    }
})

const del =document.querySelector('.del');
del.addEventListener('click',e =>{

    localStorage.removeItem('isAuth')
})