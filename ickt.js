var Ickt = (function(){
    var ickt = {};
    //Observer
    ickt.Observer = (function(){
        var _msg = {};
        return {
            on: function (type, fn){
                if(_msg[type]){
                    _msg[type].push(fn)
                } else {
                    _msg[type] = [fn]
                }
            },
            trigger: function (type){
                if(_msg[type]){
                    var args = Array.prototype.slice.call(arguments, 1);
                    // console.log(arguments)
                    // console.log(args)
                    for(var i = 0 ; i < _msg[type].length; i++){
                        _msg[type][i].apply(null, args)
                    }
                }
            },
            off: function(type, fn){
                if(type === undefined){
                    _msg= {};
                    return;
                }
                if(fn){
                    for( var i = _msg[type].length -1 ; i >= 0; i--){
                        if(_msg[type][i] === fn){
                            _msg[type].splice(i, 1);
                            return;
                        }
                    }

                } else {
                    _msg[type]=[]
                }
            },
            once: function(type, fn){
                var me = this
                // this.on(type, fn)
                // this.off(type, fn)
                
                function callback (){
                    me.off(type, callback)
                    fn.apply(null, arguments)
                    // me.off(type, callback)
                }
                this.on(type, callback)
            }
        }
    })();
    return ickt;
})()

var _ = Ickt;