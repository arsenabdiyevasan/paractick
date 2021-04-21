const username=document.querySelector('.text')
const password=document.querySelector('.password')
const btn=document.querySelector('.sign')
const email=document.querySelector('.email')
btn.addEventListener('click', e =>{
    e.preventDefault();

    if(username.value === ""  &&  password.value === "" && email.value === ""){alert('пусто')};

    if(username.value !== "" &&  password.value !== "" && email.value !== ""){
        if(username.value === 'admin' && password.value === "admin"){
            alert('welcom');
            window.open('index2.html', '_self');
            localStorage.setItem('isAuth','true')
        }else{
            alert('akefsldks')
            localStorage.setItem('isAuth','true')
            username.value=''
            password.value=''

        }
    }
})



window.addEventListener('load', () =>{
    const isAuth =localStorage.getItem('isAuth')
    console.log(isAuth);

    if(!isAuth) return;

    if(isAuth === 'true'){
        window.open('index2.html','_self')
    }
})

