# web-test-usage
 - It is Isomorphic React-Redux as infrastructure boilerplate, providing heavy __**Scripting**__ website, for testing purpose.

 ## Install
 ```
 $ git clone git@github.com:wahengchang/web-test-usage.git
 $ cd web-test-usage
 $ npm install
 ```

 ## Run
 ```
  $ npm run dev
  //server rendering page: http://localhost:3000/server/heavy
  //client rendering page: http://localhost:3000/heavyscripting.html
 ```
Client Rendering: drawing 500 circle purely from client script
![image](https://user-images.githubusercontent.com/5538753/28815744-ec99ab3a-76d4-11e7-9bad-ba73713d1252.png)
![image](https://user-images.githubusercontent.com/5538753/28815794-23d02c32-76d5-11e7-9462-6c19ab057726.png)


Server Rendering: drawing 500 circle by server
![image](https://user-images.githubusercontent.com/5538753/28815744-ec99ab3a-76d4-11e7-9bad-ba73713d1252.png)
![image](https://user-images.githubusercontent.com/5538753/28815838-44a15e4a-76d5-11e7-914c-8979d26d0f15.png)


 ## Production build
 ```
  $ npm run build
  $ node dist/server
 ```
 
 
## Reference
 - [https://github.com/wahengchang/react-redux-boilerplate](https://github.com/wahengchang/react-redux-boilerplate)
