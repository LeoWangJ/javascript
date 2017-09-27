var lightbox = {
   init: function(){
       console.log('init')
       lightbox.bindEvent();
   },
   bindEvent:function(){
       //彈窗
       document.querySelector('#lightbox').addEventListener('click',function(e){
           document.getElementById('modal').classList.remove('lightMask');
           document.getElementById('shadow').classList.add("shadow");
           document.getElementById('modal').classList.add('lightShow');
       })

       //關閉
       document.getElementById('close').addEventListener('click',function(e){
           document.getElementById('shadow').classList.remove('shadow');
           document.getElementById('modal').classList.remove('lightShow');
           document.getElementById('modal').classList.add('lightMask');
       })
   }
}

if(document.readyState === 'complete' || document.readyState === 'loaded'){
  lightbox.init()
} else{
  document.addEventListener('DOMContentLoaded',lightbox.init);
}
