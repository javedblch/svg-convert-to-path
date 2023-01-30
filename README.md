# SVG Convert to Path

> ### Performs runtime shapes & text to path conversion of complex SVG files.

## Installation

```bash
npm install --save svg-convert-to-path
```

## Usage

```bash
const ConvertToPath = require('svg-convert-to-path');
```

### Load | Save as Files

```javascript

var options={
loadAs:'file.svg',
saveAs:'file-convert.svg'
}	

const convert = await ConvertToPath.getPath(options);

```

### Load | Save as Buffer

```javascript

var svg = fs.readFileSync('./public/file.svg');
svg=Buffer.from(svg);

var options={
loadAs:svg,
saveAs:'buffer'
}

const convert = await ConvertToPath.getPath(options);

```

### Load | Save as Base64

```javascript

var svg = fs.readFileSync('./public/file.svg','base64');

var options={
loadAs:svg,
saveAs:'base64'
}

const convert = await ConvertToPath.getPath(options);

```

### Load | Save as SVG String (utf-8)

```javascript

var svg = fs.readFileSync('./public/file.svg',{encoding:'utf8'});

var options={
loadAs:svg,
saveAs:'utf8' | 'utf-8'
}

const convert = await ConvertToPath.getPath(options);

```
## Fonts Handling

All dynamically added & built-in fonts load from **svg-convert-to-path/config/fonts.json** file

### Dynamically Add Fonts

Dynamically add fonts with json key & value pair {"name", "path"}. Each font needs to be added one time only for all future purposes.

```javascript
var font={"name":"Lexend Tera","path": "/lexend_tera.ttf"};

const addFonts = await ConvertToPath.push(font);

```

### Add Fonts Manually

Open **svg-convert-to-path/config/fonts.json** and simply add more fonts.

```javascript

{
   "font":[
      {
         "name":"Times New Roman",
         "path":"./public/fonts/times.ttf"
      },
      {
         "name":"Anton",
         "path":"./public/fonts/anton.ttf"
      }	  
   ]
}

```

## Supported Tags
'text | tspan | rect | circle | ellipse | line | polyline | polygon'

## Attributes
Supports all major attributes including  x, y, dx, dy, opacity, stroke, transform, class-based styling etc. Supports Solid Fill, Linear and Radial Gradients.

## Multilingual Font Handling

Supports all Languages & Unicode characters. The package will auto detect Multilingual & Unicode characters in the svg file. 

To make Multilingual work, download **Arial Unicode MS** font and save it to **svg-convert-to-path/config/fonts** location as **arial-unicode-ms.ttf**. You can [click here](https://www.fonts100.com/5092/arial_unicode_ms.zip) to download.

## Google Fonts Handling

In case of a missing font, the code will search for the required font from [Google Fonts Github](https://github.com/google/fonts). 

On failure, loads font from default settings. You may change the default font settings using the **font**, **fontPath** and **fontSize** params.

## Built-in Common Fonts

'Helvetica | Arial | Verdana | Tahoma | Trebuchet MS | Impact | Times New Roman | Courier | Comic Sans MS'

## Options


Params | &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  Data Type &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  | Description
--- | --- | ---
**options.loadAs** | {String - Buffer - Base64 - UTF-8} | Contains SVG object that needs to be converted. Loads from a **Local Directory** or from type **Buffer** - **Base64** - **SVG String**
**options.saveAs** | {String} | Returns the convert to path SVG object. Saves to a **Local Directory** or returns type **Buffer** - **Base64** - **SVG String**
**options.font** | {String} | **Optional** - Param for default font. Applicable if unable to find the relevant font. Default is **Times New Roman**
**options.fontPath** | {String} | **Optional** - Param for default font path. Applicable if unable to find relevant fonts and **options.font** param is defined. Default is **svg-convert-to-path/config/fonts/times.ttf**
**options.fontSize** | {Number} | **Optional** - Param for default font size. Applicable if no font size is defined within SVG text tag. Default is **16**

# Performance & Compatibility
The package ensures fast and efficient performance and is fully compatible with all the popular Node.js frameworks.

# Upgrade
For additions & upgrades, the creator of this package can be contacted any time at javedblch@gmail.com or via [LinkedIn](https://www.linkedin.com/in/javed-baloch-672a5013/).

# License

MIT
