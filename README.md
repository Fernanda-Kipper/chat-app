<h1 align="center">Talk It!</h1>
<h3 align="center">Version 2</h3>

<p align="center">
 <a href="#clone">Clone</a> • 
  <a href="#contribute">Contribute</a> •
 <a href="#license">License</a>
</p>

<p align="center">
<b>Single-channel Live Chat built in Angular using Firebase integration, which users can log in with their Google account and chat with everyone online!</b>
</p>
<p align="center">
  <img src="./src/assets/github/login.png" width="400px">
  <img src="./src/assets/github/chat.png" width="400px">
</p>

<h2 id="clone">Clone</h2>

<h4> Prerequisites</h4>

- Node v16.13.2
- npm v8.1.2
- Angular CLI v14.0.4

<h4>Starting</h4>

```
git clone https://github.com/Fernanda-Kipper/chat-app.git
cd chat-app
npm install
ng serve
$OPEN http://localhost:4200
```

### Atention 🛑

It is not recommended to store your API access keys on the client side, but in this project the angular environment configs were used together with Firebase SDK as recommended on the documentation, cause on the contrary, how API keys are commonly used, as API keys for Firebase are not used to control access to backend resources. If you want to know more about management of Firebase Keys, [read this article](https://firebase.google.com/docs/projects/api-keys).

<h2 id="contribute">Contribute 🚀</h2>

If you want to contribute, clone this repo, create your work branch and get your hands dirty!

```bash
git clone https://github.com/Fernanda-Kipper/chat-app.git
git checkout -b feature/NAME
```

After development

```bash
git push origin feature/NAME
```

 And then, open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

[How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)


<h2 id="license">License 📃 </h2>

This project is under [MIT](LICENSE) license

