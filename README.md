# M1raculous.dk-FiveM-Server-Template
 
It's pretty simple to use. I didn't spend a whole lot of time creating it. - You can *always* re-make it. But give credit, please.

# About
#### I've used following languages & frameworks:
![HTML5](https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

# Set-up & Customize
It's pretty simple to set-up & customize.
Head into public/assets/js/main.js

```js
let config = {
  cfx: "ydxaky",
  author: "M1raculous",
};
```
Change the cfx to your own cfx ip.

Then scroll down to the bottom you will see following:

```js
    let serverInformation = `
    <p class="overflow-auto">
    <b>Server Name:</b> ${sv_hostname}
    <br>
    <b>Discord:</b> <a href="${discord}"> Join discord</a>
    <p><b>Server IP:</b> <a href="fivem://connect/${serverip}">Join Server</a></p>
    <p><b>Framework:</b> ${framework}</p>
    <br>
    `;
```
You can add more stuff, but please only touch if you know what you are doing.


When you are done, head back into public/index.html
On line 44 you will find a img tag:
```html
          <img class="h-48 w-full object-cover md:h-full md:w-48"
                src="assets/images/prject_logo-alpha_transparent.png" alt="Profile Picture">
```
You will need to replace the picture with the picture you want. Repeat the same step until you are done. 

On line 47 you will find a p tag:
```html
              <p class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Owner</p>
```
Here you can change what the persons role is. Repeat this step until you are done. Repeat this step.
We are almost done!

On line 48 & 49 you will find a anchor tag & a p tag.

```html
              <a href="https://discord.com/users/415443330026045440" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">M1raculous</a>
              <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel pulvinar
                nisi, vel mattis sem. Sed tellus nulla.</p>
```
Where it says "M1raculous" is where it displays the persons name. Under that line you can see some text that isn't readable. You can describe the perons and his/hers tasks. Repeat this step.



# PLEASE NOTE!!!
There may be bugs, report them and i will *maybe* fix them. Remember this is a *free* website. Don't expect good support. This website is **NOT** responsive.

Made by **M1raculous#1337**