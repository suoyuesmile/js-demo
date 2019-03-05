# 如何理解CSRF

## CSRF 是什么？

> CSRF 是一種 Web 上的攻擊手法，全稱是 Cross Site Request Forgery，**跨站請求偽造**。不要跟 XSS 搞混了，他們兩種是不同的東西，那到底什麼是 CSRF 呢？先從我自身的一個案例談起好了。

## 案例

### 偷懒的删除功能

```html
<a href='/delete?id=3'>刪除</a>
```
这是一段删除按钮的代码？有什么问题吗？

通常来说我妈通过`session_id`判断是否为本人操作，确实只有本人才能删除自己的文章

那么，有没有可能不是本人主动删除的呢

假如作者本人收到了一段其他链接，像这样的

```html
<a href='https://small-min.blog.com/delete?id=3'>開始測驗</a>
```

由于浏览器机制，浏览器带有`cookie`,存储了作者的`session`数据，这种情况下，作者即使没主动去操作而这段代码在作者不知情的情况下却执行了，**這也是為什麼 CSRF 又稱作 one-click attack 的緣故**

在这种情况下，作者点击了按钮，就会连到博客那边去了，我们再伪造一下，跳到一个测试网站，而同时执行跨站脚本伪造请求

```html
<img src='https://small-min.blog.com/delete?id=3' width='0' height='0' />
<a href='/test'>開始測驗</a>用一个宽度为0的图片
```

用一个宽度为0的图片伪造请求，这样都不用点击就可以发送那个删除请求

不管怎样，如果用户处于登录状态，浏览器就一定存有他的`session`信息

### 防御伪造请求攻击

#### 首先想到的我讲`GET`请求改成`POST`那不就行了

```html
<form action="https://small-min.blog.com/delete" method="POST">
  <input type="hidden" name="id" value="3"/>
  <input type="submit" value="開始測驗"/>
</form>

<!--更高级-->
<iframe style="display:none" name="csrf-frame"></iframe>
<form method='POST' action='https://small-min.blog.com/delete' target="csrf-frame" id="csrf-form">
  <input type='hidden' name='id' value='3'>
  <input type='submit' value='submit'>
</form>
<script>document.getElementById("csrf-form").submit()</script>
```

果然没那么简单，改成`POST`也不安全

#### 那我改成后端只接收`JSON`呢	

```html
<form action="https://small-min.blog.com/delete" method="post" enctype="text/plain">
<input name='{"id":3, "ignore_me":"' value='test"}' type='hidden'>
<input type="submit"
  value="delete!"/>
</form>
```

还是可以攻击到，`server`检查`content-type`设置成`text/plain`或许可以阻止这个攻击

但是你的后端设置`Access-Control-Allow-Origin` 設成 `*` `method`改成什么都没用了

#### 常规防御方法

1. 使用者防御

   > CSRF 攻擊之所以能成立，是因為使用者在被攻擊的網頁是處於已經登入的狀態，所以才能做出一些行為。雖然說這些攻擊應該由網頁那邊負責處理，但如果你真的很怕，怕網頁會處理不好的話，你可以在每次使用完網站就登出，就可以避免掉 CSRF。

2. server 防御

   > ### 檢查 Referer
   >
   > request 的 header 裡面會帶一個欄位叫做 referer，代表這個 request 是從哪個地方過來的，可以檢查這個欄位看是不是合法的 domain，不是的話直接 reject 掉即可。
   >
   > 但這個方法要注意的地方有三個，第一個是有些瀏覽器可能不會帶 referer，第二個是有些使用者可能會關閉自動帶 referer 的這個功能，這時候你的 server 就會 reject 掉由真的使用者發出的 request。
   >
   > ### 加上圖形驗證碼、簡訊驗證碼等等
   >
   > 就跟網路銀行轉帳的時候一樣，都會要你收簡訊驗證碼，多了這一道檢查就可以確保不會被 CSRF 攻擊。
   >
   > 圖形驗證碼也是，攻擊者並不知道圖形驗證碼的答案是什麼，所以就不可能攻擊了。
   >
   > 這是一個很完善的解決方法，但如果使用者每次刪除 blog 都要打一次圖形驗證碼，他們應該會煩死吧！
   >
   > ### 加上 CSRF token
   >
   > 要防止 CSRF 攻擊，我們其實只要確保有些資訊「只有使用者知道」即可。那該怎麼做呢？
   >
   > ```html
   > <form action="https://small-min.blog.com/delete" method="POST">
   >   <input type="hidden" name="id" value="3"/>
   >   <input type="hidden" name="csrftoken" value="fj1iro2jro12ijoi1"/>
   >   <input type="submit" value="刪除文章"/>
   > </form>
   > ```
   >
   > 我們在 form 裡面加上一個 hidden 的欄位，叫做`csrftoken`，這裡面填的值由 server 隨機產生，並且存在 server 的 session 中。
   >
   > 按下 submit 之後，server 比對表單中的`csrftoken`與自己 session 裡面存的是不是一樣的，是的話就代表這的確是由使用者本人發出的 request。這個 csrftoken 由 server 產生，並且每一段不同的 session 就應該要更換一次。
   >
   > ### Double Submit Cookie
   >
   > 上一種解法需要 server 的 state，亦即 csrf token 必須被保存在 server 當中，才能驗證正確性。而現在這個解法的好處就是完全不需要 server 儲存東西。
   >
   > ```html
   > Set-Cookie: csrftoken=fj1iro2jro12ijoi1
   > 
   > <form action="https://small-min.blog.com/delete" method="POST">
   >   <input type="hidden" name="id" value="3"/>
   >   <input type="hidden" name="csrftoken" value="fj1iro2jro12ijoi1"/>
   >   <input type="submit" value="刪除文章"/>
   > </form>
   > ```
   >
   > 這個解法的前半段與剛剛的相似，由 server 產生一組隨機的 token 並且加在 form 上面。但不同的點在於，除了不用把這個值寫在 session 以外，同時也讓 client side 設定一個名叫 csrftoken 的 cookie，值也是同一組 token。
   >
   > ### browser 本身的防禦
   >
   > Google 在 Chrome 51 版的時候正式加入了這個功能：[SameSite cookie](https://www.chromestatus.com/feature/4672634709082112)，對詳細運行原理有興趣的可參考：[draft-west-first-party-cookies-07](https://tools.ietf.org/html/draft-west-first-party-cookies-07)。
   >
   > ```html
   > Set-Cookie: session_id=ewfewjf23o1; SameSite
   > 
   > Set-Cookie: session_id=ewfewjf23o1; SameSite=Strict
   > Set-Cookie: foo=bar; SameSite=Lax
   > ```
   > 講到這種比較新的東西，相信大家一定都很想知道瀏覽器的支援度如何，caniuse 告訴我們說：目前只有 Chrome 支援這個新的特性（畢竟是 Google 自己推的方案，自己當然要支持一下）。雖然瀏覽器的支援度不太高，但日後其他瀏覽器可能也會跟進實做這個方案，不妨在現在就把 SameSite 加上去，以後就不用再為 CSRF 煩惱了。

## 参考

1. [Cross-Site Request Forgery (CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)#Prevention_measures_that_do_NOT_work)

2. [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)

3. [一次较为深刻的CSRF认识](http://m.2cto.com/article/201505/400902.html)

4. [[技術分享\] Cross-site Request Forgery (Part 2)](http://cyrilwang.pixnet.net/blog/post/31813672)

5. [Spring Security Reference](http://docs.spring.io/spring-security/site/docs/3.2.5.RELEASE/reference/htmlsingle/#csrf)

6. [CSRF 攻击的应对之道](https://www.ibm.com/developerworks/cn/web/1102_niugang_csrf/)

   

