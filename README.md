# Base64 Certificate Viewer

You can see the details of certificates.

[Firefox](https://addons.mozilla.org/en-US/firefox/addon/certificate-viewer-for-humans/)

[Chrome](https://chrome.google.com/webstore/detail/fkahpjlecgjpojmkondflnfcdikppklf)

## Installation

	$ npm install
	& npm run dev:firefox
	
Built with npm 6.7.0 and node v9.11.1
	
## Build the extension with 

	& ./build_for_firefox.sh
	
Gulp is used only to get forge from npm registry and put it in dist.

## Run tests
    $ npm run test:watch


## Usage

Run `$ gulp --watch` and load the `dist`-directory into firefox.

## Entryfiles (bundles)

There are two kinds of entryfiles that create bundles.

1. All js-files in the root of the `./app/scripts` directory
2. All css-,scss- and less-files in the root of the `./app/styles` directory

## Tasks

### Build

    $ gulp


| Option         | Description                                                                                                                                           |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--watch`      | Starts a livereload server and watches all assets. <br>To reload the extension on change include `livereload.js` in your bundle.                      |
| `--production` | Minifies all assets                                                                                                                                   |
| `--verbose`    | Log additional data to the console.                                                                                                                   |
| `--vendor`     | Compile the extension for different vendors (chrome, firefox, opera, edge)  Default: chrome                                                                 |
| `--sourcemaps` | Force the creation of sourcemaps. Default: !production                                                                                                |


### pack

Zips your `dist` directory and saves it in the `packages` directory.

    $ gulp pack --vendor=firefox

### Version

Increments version number of `manifest.json` and `package.json`,
commits the change to git and adds a git tag.


    $ gulp patch      // => 0.0.X

or

    $ gulp feature    // => 0.X.0

or

    $ gulp release    // => X.0.0


## Globals

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. It will be set to `development` unless you use the `--production` option.


**Example:** `./app/background.js`

```javascript
if(process.env.NODE_ENV === 'development'){
  console.log('We are in development mode!');
}
```

The icon is based on Certificate By Karen Tyler https://thenounproject.com/search/?q=certificate&i=531027
