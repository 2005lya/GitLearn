function IcktVUE (options){
    this.$el = document.querySelector(options.el);
    this.data = options.data;
    this.$data = {};
    this.init();
}

Object.assign(IcktVUE.prototype, {
    init(){
        let fn = {};
        let doms = Array.from(this.$el.querySelectorAll("*"));
        console.log(doms)
        doms.filter(dom => dom.getAttribute('v-model'))
            .forEach(dom => {
                let key = dom.getAttribute('v-model');
                console.log(key)
                dom.oninput = e => {
                    this.data[key] = e.target.value;
                }
                addFn(key, function(value){
                    dom.value = value;
                })
            })


        doms.forEach(dom => {
            if(!dom.innerHTML){
                return;
            }
            let arr = dom.innerHTML.match(/{{\w+}}/g);
            arr = [...new Set(arr)];
            if(arr.length){
                dom._tpl = dom.innerHTML;
                arr.forEach(function(item){
                    let key = item.replace(/{{(\w+)}}/, '$1');
                    addFn(key, function(value){
                        dom.innerHTML = dom._tpl.replace(/{{(\w+)}}/g, value);
                    })
                })   
            }
        })

        function addFn(key, callback){
            if(!fn[key]){
                fn[key]= [callback]
            } else {
                fn[key].push(callback);
            }
        }


        function updateView(data, key){
            console.log(data, key);
            fn[key]&&fn[key].forEach(callback => callback(data[key]));
        }


        Object.keys(this.data).forEach(key => {
            let val = this.$data[key];
            let $data = this.$data;
            Reflect.defineProperty(this.data, key, {
                get(){
                    return $data[key];
                },
                set(value){
                    $data[key] = value;
                    updateView($data, key);
                }
            })
            this.$data[key] = val
        })
    }
})