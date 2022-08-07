let MVC = (function(){
    let Model = (function (){
        let _model = {};
        return {
            set(key, value){
                let keys = key.split('.');
                let saveKey = keys.pop();
                let result = _model;
                keys.forEach(item => {
                    if(result[item] === undefined){
                        result[item] = {};
                    }
                    if(result[item] !== null && (typeof result[item] === 'object' || typeof result[item] === 'function')) {
                        result = result[item];
                    } else {
                        throw new Error(`attribute the type of ${item} is ${typeof result[item]}  and can't be added`);
                    }
                })
                result[saveKey] = value;
                console.log(_model, this.get(key));
            },
            get(key){
               let keys = key.split('.');
               let result = _model;
               keys.forEach(item => {
                   result = result[item];
                   if(result === undefined){
                       throw new Error(`attribute ${item} is undefine,can't to be continue`);
                   }
               });
               return result;
            }
        };
    })()

    let View = (function(){
        let _view = {};
        return {
            add(key, fn){
                _view[key] = fn;
            },
            render(key){
               return  _view[key] && _view[key](Model)
            }
        };
    })()

    let Ctrl = (function(){
        let _ctrl = {};
        return {
            add(key, fn){
                _ctrl[key] = fn;
            },
            init(key){
                return _ctrl[key] && _ctrl[key](Model, View);

            },
            install(){
                for(let key in _ctrl){
                    this.init(key);
                }
            }
        };
    })()

    return {
        addModel(key, value){
            Model.set(key, value);
        },

        addView(key, value){
            View.add(key, value);

        },

        addCtrl(key, value){
            Ctrl.add(key, value);

        },

        install() {
            Ctrl.install();
        }
    };
})()