const article = document.getElementById('vip');
 
console.log(article)

const articles = document.querySelectorAll('article')
const color = '#ddee99';


for(let article of articles){
    article.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = '#ddaa33'
    })
}

article.addEventListener('click', ()=>{
    article.style.backgroundColor = '#ddee88';
})


document.querySelector('button').addEventListener('click',()=>{
    console.log(document.querySelector('input').value)
})

for(let article of document.querySelectorAll('article p')){
    article.textContent = 'Kazkas'
}


document.querySelector('button').addEventListener('click',()=>{
    console.log(document.querySelector('input').value)
})

for(let article of document.querySelectorAll('article p')){
    article.innerHTML = '<strong>Kazkas</strong>'
}



document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    for(let article of document.querySelectorAll('article p')){
        article.innerHTML = document.querySelector('input').value;
    }
})

document.querySelector('.todo form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let li = document.createElement('li');//create li element
    li.textContent = document.querySelector('.todo form input').value;//add content
    document.querySelector('.todo ul').appendChild(li)//move tu ul
})