import { ref } from 'vue';
import axios from 'axios';

export default function(url:string){
    // 加载状态；
    const loading = ref(true);
    // 请求的数据；
    const data = ref(null);
    // 错误信息；
    const errorMsg = ref('');

    axios.get(url).then(response => {
        loading.value = false;
        data.value = response.data;
    }).catch(err => {
        errorMsg.value = err || '未知错误';
    })

    return {
        loading,
        data,
        errorMsg
    }
}