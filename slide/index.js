var slide = {
   init: function(){
       console.log('init')
       slide.bindEvent();
   },
   bindEvent:function(){
       //上滑
       document.getElementById('slideup').addEventListener('click',function(e){
           document.getElementById('slide').style.height = 0 ;
           document.getElementById('slide').style.opacity = '0';
       })

       //下滑
       document.getElementById('slidedown').addEventListener('click',function(e){
           document.getElementById('slide').style.height = '150px';
           document.getElementById('slide').style.opacity = '1';
       })
       
   }
}

if(document.readyState === 'complete' || document.readyState === 'loaded'){
  slide.init()
} else{
  document.addEventListener('DOMContentLoaded',slide.init);
}
