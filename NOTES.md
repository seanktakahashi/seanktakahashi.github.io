## Deploying Subfolder to Github Pages

[resource](https://gist.github.com/cobyism/4730490)

Github Pages can serve a website from a branch as opposed to `trunk`. 
We can take advantage of `git subtree` to serve a React website then, 
bundled up in the `dist` folder using the command:

```
git subtree push --prefix public origin gh-pages
```

#### Problems

[problem](http://andrewdc.com/ghpages-gatsby-and-domains/)
[github convo about problem](https://github.com/gatsbyjs/gatsby/issues/6)

Problems can occur though if you want to add a `CNAME` or `robots.txt` file.
This could be solved in a few ways, but seems best solved in the webpack bunlder.
In particular, we want the bundler to copy over a certain set of files from 
say the `public` folder into the `dist` folder:

#### Solution

[solution on Stackoverflow](https://stackoverflow.com/questions/45578665/push-assets-folder-to-public-directory-with-webpack)

Use Copy-Webpack-Plugin

I also notice that I need to copy my favicon and `index.html` over to `dist` from `public`.
Looks like I copied it manually at first
