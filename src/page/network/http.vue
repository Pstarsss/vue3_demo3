<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="http">
      <section class="px1">
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
                        浏览器的堵塞：浏览器会因为一些原因堵塞请求。为啥呢？，浏览器对于同一个域名下，只能保持一定的连接数（最大的并发链接量），
                        过多的连接会造成堵塞，影响浏览器对网页的加载速度。

                        <strong>不同的浏览器对同一域名下的并发连接数是不一样</strong>
                        <br>
                        长链接&amp;短连接。
                        <br>
                        长链接：http1.1版本默认使用长链接，长链接的http请求头的content中会岛上Connection：keep-alive， 当然不需要的时候改成 close就行；<br>
                        但是长链接不是永久连接不断开的状态，只是连接在一定时间内，不会自动断开，后续请求直接使用改次连接。<br>
                        那什么时候断开呢？一般呢会设置连接的过期时间：Keep-Alive：timeout=xxx。另外TCP还有心跳包来检测当前连接是否还活着
                        <br>
                        短链接：每次进行网络请求都正常的TCP的三次握手&amp;四次挥手。

                    </li>
                    <li>    
                        DNS查询：浏览器需要知道目标服务器的IP地址才能建立连接，那么将域名解析称IP的这个系统就是DNS
                    </li>
                    <li>
                        建议连接的时候：TCP连接。
                    </li>
                  </ul>                
              </p>

              <p>
                  HTTPS与HTTP的一些区别
                HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。
            
                HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。
            
                HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
            
                HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。
              </p>
          </div>

            <img src="./img/img-1.png">
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

<style lang="less" scoped>

.http {
    padding: 0 20px;
    line-height: 2;

    .px1 {
    
    }
}


</style>