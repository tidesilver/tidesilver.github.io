var posts=["2024/09/11/hello-world/","2021/04/06/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };