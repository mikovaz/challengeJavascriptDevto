
const urlApi="https://devto-7e35a-default-rtdb.firebaseio.com";

const crearPost =(e)=>{
  e.preventDefault()
  const url=`${urlApi}/devto.json`
  const inputNodes = Array.from(e.target.querySelectorAll('input'))
  const txtAreaNode=e.target.querySelectorAll('textarea')
  const post={}
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d= new Date()
  //console.log()
  const month=months[d.getMonth()];
  console.log(month)
  const day=d.getUTCDate()
  inputNodes.forEach((input)=>{
      post[input.name]=input.value
  })
  txtAreaNode.forEach((txt)=>{
      post[txt.name]=txt.value
  })
  post['commentsPost']='0 comments'
  post['reactionsPost']='0 reactions'
  post['timeReadP']='4 min read'
  post['datePost'] = `${month} ${day}`
  post['idPost']=`${d.getTime()}`
  fetch(url,{
    method: 'POST',
    body : JSON.stringify(post),
    headers: {
      'Content-Type':'application/json'
    }
  })
  setTimeout(()=>{
      window.location.href='./index.html'
  },1000)
  .then((respuesta)=>respuesta.json())
  .then((body)=>funcion(body))
  .catch((error)=>console.log(error))
}