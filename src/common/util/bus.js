/*
 * @Author: xingpan 
 * @Date: 2021-05-06 16:33:19 
 * @Last Modified by: xingpan
 * @Last Modified time: 2022-12-29 15:50:09
 */

export default {
    bus: {},
    
    $on(name, fn) {
        (this.bus[name] || (this.bus[name] = [])).push(fn);
    },

    $emit(name, args) {
        const callback = this.bus[name];
        if(callback) {
            callback.forEach(fn => {
                fn.call(this, args);
            })
        }
    },

    $off(name) {
        this.callback[name] = null;
    }
}