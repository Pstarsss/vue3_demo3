<template>
    <div class="">
      <section>
          <h2>HTTP的历史</h2>
          <div>
              影响一个HTTP网络请求的因素主要有两个：带宽和延迟
              <p>
                  带宽： 其实指在规定时间内从一端流到另一端的信息量，集数据传输效率。就现代的科技设备发展来看，这部分的影响已经非常小。
              </p>
              <p>
                  延迟的话：一般有多种因素的影响。有浏览器的堵塞，DNS的查询，网络链接的建立。
                  <ul>
                    <li>
                        浏览器的堵塞：；浏览器会因为一些原因堵塞请求。为啥呢？，浏览器对于同一个域名下，只能保持一定的连接数（最大的并发链接量），
                        过多的连接会造成堵塞，影响浏览器对网页的加载速度。

                        <strong>不同的浏览器对同一域名下的并发连接数是不一样的额</strong>
                        <strong>可想而知，如果在</strong>
                        <br>
                        长链接&amp;短连接。

                        长链接：http1.1版本默认使用长链接，长链接的http请求头的content中会岛上Connection：keep-alive， 当然不需要的时候改成 close就行；<br>
                        但是长链接不是永久连接不断开的状态，只是连接在一定时间内，不会自动断开，后续请求直接使用改次连接。<br>
                        那什么时候断开呢？一般呢会设置连接的过期时间：Keep-Alive：timeout=xxx。另外TCP还有心跳包来检测当前连接是否还活着
                    </li>
                    <li>    

                    </li>
                    <li>

                    </li>
                  </ul>                
              </p>
          </div>
      </section>
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';

export default defineComponent({

    name: '',

    setup() {
        onMounted(function () {
        });
    }

})

</script>