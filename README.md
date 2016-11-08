static-website-i18n
=========================

This repository contains a tool for generating a static website with i18n done, which means one template, multi languages.

### Installation
npm install static-website-i18n

### Global configuration

#### Edit config.json according to your own website

To get started, you better customize the global configurations according to your website, like the name of your website, the languages your website supports, etc. Go to the root directory and find the 'config.json' file. The value of the property 'websiteRoot' would be the name of the distribution directory, which can be released anytime you done with the development.

The property 'sourceRoot' indicates the name of your development directory. You can name it as 'src' or 'dev' or whatever you like. As initialization, I make it as 'src'.

The property 'languageText' lists all the languages your whole website supports. The values of each item of this object would be shown to users, in which case you have to make sure that they spelled right, whereas the keys of each item would be used in the URI of the website pages.

Besides the above, you may need other settings for your website. Just add them in this file, then you can require them via the webpack configuration file.

In the directory 'src/global-i18n/', all json files of the languages for the public components are there. If you need more datas, add variables to each language and reference them in your page templates.

### How to use public sources as global using for the whole website

#### Put public resources into public directory in your distribution dir.

In the directory of distribution, which is initialized as 'www.mysite.com', there is a directory named public. All stuff for global using is here. Things like favicon, third-party plugins or libraries, fonts and images for public components, css reset, etc.

In pages you are going to develop, you can use absolute path like '/public/' to reference them.

### How to use public templates

#### Edit templates as modules for requiring

Public templates like 'header' & 'footer' are all in 'src/templates'. They need parameters to generate the right string of the HTML texts and exports as a module. Require them whereever you need. You can also create your own templates as you like.

### How to create a new page for the website

#### Go to pages directory, create a new dir named based on the new page

Go to 'src/pages/', create a new directory in it. Notice, the name of the new directory would be appeared in the URI of the new page, so you have to be careful with its name. Make sure to create a clear name for the page you are going to develop, and all your team partners can realize it without any thoughts.

In the new directory, duplicate 'webpack.config.js' from demos (like 'src/pages/home/') in it. Remember that this webpack.config.js can be used in any page directory without any edit.

Create 'entry.js' manually, and require the css&js of the new page.

Create 'index.html', and import public header & footer in it, just like the demo did.

Create a directory named 'i18n', put json files with all the languages the new page supports in it. Notice that, json files must be named as the keys of the property 'languageText' in the global configuration. These json files' names would be part of the URI of the page, so be careful with it!

For css or js, put them in subdirectory 'css/' and 'js/', that would be more clear for the development. If you do not, you need to change the webpack configuration for it.

Then you also need to make a directory named 'images' for all the images the new page needs. Make it and put your images in it. All the images, not only for css background-image, but also for html 'img' src attribute. Notice that, the images in css, would be compressed when webpack bundled, this is configured in 'webpack.config.js', if you want to change the quality of compression or you just want to remove them, just edit 'webpack.config.js'.

Although we have fonts in public directory for global using in the whole website, you may need some special fonts for just the new page, feel free to create a directory named 'fonts' and put all the fonts for the new page in it. They would be bundled to the 'assets' of the distribution directory as well. All references of these static stuff are set in webpack configuration, no need for you to do more.

Last but not least, run 'webpack'.

Then the page you are developing has bundled into the distribution directory, contained by the directory named as the page itself.

Just go to the distribution directory to check them out.

### How to test the website for distribution

#### Start a web server to test your website, after run webpack bundling in each page dir.

Before releasing the website, make sure it works well. Notice that, when you test it, you have to start a web server and make the root be the distribution directory. Test them in your browser.


Have fun!
