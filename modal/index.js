(function(global){
    var leo = function(selector){
        return new leo.init(selector);
    }

    leo.prototype = {
        modal: function(status){
            switch(status){
                case 'open':
                case 'OPEN':
                document.querySelector(leo.init.selector).classList.add('open');
                document.querySelector('.modal-overlay').classList.add('open');
                break;
                case 'close':
                case 'CLOSE':
                document.querySelector(leo.init.selector).classList.remove('open');
                document.querySelector('.modal-overlay').classList.remove('open');
                break;
            }
            console.log(typeof status == 'object' );
            if(typeof status == 'object' ){
                for(var key in status){
                    switch(key){
                        case "opacity":
                           document.querySelector('.modal-overlay').style.opacity = status[key];
                           break;
                    }
                }
            }
        }
    };

    leo.init = function(selector){
        //var that = this;
        leo.init.selector = selector;
    }
    
    leo.init.prototype = leo.prototype;

    global.leo = global.L$ = leo;
})(window)


var select = L$('#modal1');

console.log(select);
document.querySelector('#modalBtn').addEventListener('click',function(){

    L$('.modal').modal('open');
    L$('.modal').modal({
        opacity: .5,
    });
})

document.querySelector('#close').addEventListener('click',function(){
    L$('.modal').modal('close');
})
