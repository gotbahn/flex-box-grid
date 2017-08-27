# ▥ Flex Box Grid

[![npm](https://img.shields.io/npm/v/flex-box-grid.svg?maxAge=2592000)](https://www.npmjs.com/package/flex-box-grid)
[![Build Status](https://travis-ci.org/godban/flex-box-grid.svg?branch=master)](https://travis-ci.org/godban/flex-box-grid)
[![David](https://img.shields.io/david/dev/godban/flex-box-grid.svg)](https://github.com/godban/flex-box-grid)
[![npm](https://img.shields.io/npm/dt/flex-box-grid.svg?maxAge=2592000)](https://www.npmjs.com/package/flex-box-grid)
[![npm](https://img.shields.io/npm/dm/flex-box-grid.svg?maxAge=2592000)](https://www.npmjs.com/package/flex-box-grid)

Responsive, mobile first Flexbox Grid

- [Installation](#installation)
    - [npm](#npm)
    - [manual](#manual)
- [Demo & Documentation](#documentation)
    - [Basic](#basic)
    - [Media Queries](#mediaQueries)
    - [Mixing](#mixed)
    - [Nesting](#nested)
    - [Offsetting](#offset)
    - [Reordering](#reorder)
    - [Reversing](#reverse)
    - [Aligning](#alignment)
        - [Horizontal](#alignmentHorizontal)
        - [Vertical](#alignmentVertical)
    - [Distribution](#distribution)
        - [Between](#distributionBetween)
        - [Around](#distributionAround)
- [Browsers Support](#browsersSupport)
- [FAQ](#faq)


## <a name="installation"></a>Installation

### <a name="npm"></a>via npm

    npm install flex-box-grid
    
and use CSS or Sass version from `node_modules/flex-box-grid` folder

### <a name="manual"></a>Manual

#### with CSS

Download [css](https://raw.githubusercontent.com/godban/flex-box-grid/master/dist/css/index.css) and include inside <code>&lt;head&gt;</code> section.

#### with Sass

Download [flexboxgrid.zip](https://raw.githubusercontent.com/godban/flex-box-grid/master/dist/flexboxgrid.zip).
Extract it to Sass working directory

## <a name="documentation"></a>Demo & Documentation

Demo and most detailed documentation you can find [here](http://godban.github.io/flex-box-grid) "Flex Box Grid Demo & Documentation").

### <a name="basic"></a>Basic

Flex Box Grid systems are used for creating page layouts through a series of rows and columns that house your content. 
By default Flex Box Grid have 12 columns.

- Rows must be placed within a <code>.container</code> with predefined paddings that equal half column gutter.
- Use rows .row to create horizontal groups of columns.
- Content should be placed within columns with classes <code>.X-n, .S-n, .M-n, .L-n, .XL-n</code> where n is columns number from 1 to 12 (by default).
- Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on <code>.row</code>, by default it's 10px.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/base-M.jpg" width="90px" alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/base-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row">
        <div class="M1">...</div> * 12
        <div class="M8">...</div><div class="M4">...</div>
        <div class="M6">...</div><div class="M6">...</div>
        <div class="M4">...</div> * 3
    </div>
</div>
```

### <a name="mediaQueries"></a>Media Queries

Media queries is a basis of any Responsive Grid System. To change column behavior each media query breakpoint connected with column class name with simply recognizing size name: <code>X, S, M, L, XL</code>. 

As example column with <code>.M6</code> class will be halfwidth until the window width becomes equal to 768px or less matching <code>$screen--M</code>.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/media-queries.png" width="500" alt="Areas">

Predefined break points:
```scss
$break--S:  480px;
$break--M:  768px;
$break--L:  1024px;
$break--XL: 1440px;
```

To change column content behavior...
```html
<div class="container">
    <div class="row">
        <div class="M6">
            <div class="foo">...</div>
        </div>
    </div>
</div>
```

...use appropriate media query
```scss
@media (min-width: $screen--M) {
    .foo {
        ...
    }
}
```

### <a name="mixed"></a>Mixing columns

Wanna different behavior on multiple devices? Try to mix columns.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/mixin-M.jpg" width="90px" alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/mixin-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row">
        <div class="M4 L8">...</div>
        <div class="M8 L4">...</div>
    </div>
    <div class="row">
        <div class="M6 L4">...</div>
        <div class="M6 L4">...</div>
        <div class="M12 L4">...</div>
    </div>
</div>
```

You can mix any number of different grid classes

### <a name="nested"></a>Nesting columns

Grid columns can be nested one into another.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/nesting-M.jpg" width="90px" alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/nesting-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row">
        <div class="M8">
            <div class="row">
                <div class="M6">...</div>
                <div class="M6">...</div>
            </div>
        </div>
        <div class="M4">
            <div class="row">
                <div class="M4">...</div>
                <div class="M4">...</div>
                <div class="M4">...</div>
            </div>
        </div>
    </div>
</div>
```

### <a name="offset"></a>Offseting columns

Move columns right using <code>--offsetN</code> suffix on grid classes. These will increase left indent of a column. As example <code>.M--offset2</code> moves <code>.M6</code> block over 2 columns.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/offsetting-M.jpg" width="90px" alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/offsetting-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row">
        <div class="M6 M--offset1">...</div>
        <div class="M5">...</div>
    </div>
    <div class="row">
        <div class="M6 M--offset2">...</div>
    </div>
    <div class="row">
        <div class="M4">...</div>
        <div class="M4 M--offset4">...</div>
    </div>
</div>
```

### <a name="reorder"></a>Reordering columns

Grid columns order can be changed in any way with <code>--orderN</code> suffix.
You can change swap blocks position on different devices. No need to duplicate blocks anymore.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/reordering-M.jpg" width="90px" 
alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/reordering-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row">
        <div class="M3 X--order4">...</div>
        <div class="M3 X--order1">...</div>
        <div class="M3 X--order2">...</div>
        <div class="M3 X--order3">...</div>
    </div>
    <div class="row">
        <div class="M6 M--order6">...</div>
        <div class="M3 M--order6">...</div>
    </div>
</div>
```

### <a name="reverse"></a>Reversing columns

Well, hard to say what for, but columns can be also reversed with <code>N--reverse</code>

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/reversing-M.jpg" width="90px" 
alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/reversing-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row X--reverse">
        <div class="M1">1</div>
        <div class="M1">2</div>
        <div class="M1">3</div>
        <div class="M1">4</div>
        <div class="M1">5</div>
        <div class="M1">6</div>
        <div class="M1">7</div>
        <div class="M1">8</div>
        <div class="M1">9</div>
        <div class="M1">10</div>
        <div class="M1">11</div>
        <div class="M1">12</div>
    </div>
</div>
```


### <a name="alignment"></a>Aligning columns

#### <a name="alignmentHorizontal"></a>Horizontal

There is predefined classes for horizontal alignment with <code class="line-sass-class">--start</code>, <code class="line-sass-class">--center</code>, <code class="line-sass-class">--end</code>.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/aligning-horizontal-M.jpg" width="90px" 
alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/aligning-horizontal-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row X--start">
        <div class="X3">...</div>
        <div class="X3">...</div>
    </div>
    <div class="row X--center">
        <div class="X3">...</div>
        <div class="X3">...</div>
    </div>
    <div class="row X--end">
        <div class="X3">...</div>
        <div class="X3">...</div>
    </div>
</div>
```

#### <a name="alignmentVertical"></a>Vertical

There is also predefined classes for vertical alignment with <code class="line-sass-class">--top</code>, <code class="line-sass-class">--middle</code>, <code class="line-sass-class">--bottom</code>.
Also you can do full height stretch with <code>N--stretch</code>.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/aligning-vertical-M.jpg" width="90px" 
alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/aligning-vertical-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row X--top">
        <div class="X3">...</div>
        <div class="X3">...</div>
    </div>
    <div class="row X--middle">
        <div class="X3">...</div>
        <div class="X3">...</div>
    </div>
    <div class="row X--bottom">
        <div class="X3">...</div>
        <div class="X3">...</div>
    </div>
    <div class="row X--stretch">
        <div class="X6">...</div>
        <div class="X6">...</div>
    </div>
</div>
```

### <a name="distribution"></a>Distribution column space

#### <a name="distributionBetween"></a>Between

Another helpful feature can be distribution columns space between or around columns.

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/distribution-between-M.jpg" width="90px" 
alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/distribution-between-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row X--between">
        <div class="X2">...</div>
        <div class="X2">...</div>
        <div class="X2">...</div>
        <div class="X2">...</div>
    </div>
</div>
```

#### <a name="distributionAround"></a>Around

<img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/distribution-around-M.jpg" width="90px" 
alt="Mobile"><img src="https://raw.githubusercontent.com/godban/flex-box-grid/master/demo/images/distribution-around-L.jpg" width="307px" alt="Laptop">

```html
<div class="container">
    <div class="row X--around">
        <div class="X2">...</div>
        <div class="X2">...</div>
        <div class="X2">...</div>
        <div class="X2">...</div>
    </div>
</div>
```

## <a name="browsersSupport"></a>Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" /></br>Opera | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" /></br>iOS Safari | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera-mini.png" alt="Opera Mini" width="16px" height="16px" /></br>Opera Mini | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" /></br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## <a name="faq"></a>FAQ

### What is Grid?

The vast majority of websites out there use a grid. They may not explicitly have a grid system in place, but if they have a "main content area" floated to the left a "sidebar" floated to the right, it's a simple grid.

### Why use Grid at all?

Using grid system can significant speed up your work, keep you code understandable, solid and DRY.

### Why use Flexbox Grid System (FGS) instead float one?

Simply. It's more flexible :) FGS provides you not only the same functionality as float one, it allows significant expand Grid functionality with sorting, reordering, aligning and distribution features.

### Concerns?

If you can't say, "Screw IE9" you probably not ready for Flexboxes model in general yet.
Also at the moment FGS should contain vendor prefixes <code>-ms-</code> for IE10 and <code>-webkit-</code> for Safari, which increase little bit styles size.


### Why use Flex Box Grid? What alternatives are exist?</dt>
    
I tried to use [Foundation Grid](http://foundation.zurb.com/docs/components/grid.html) by Zurb, [Flexbox Grid](http://flexboxgrid.com/) by Kristofer Joseph, [Solved by Flexbox](https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/grid.css) by Philip Walton and others. All of them not bad, but in my opinion too complicated for first meet, have specific namespaces and have not full features that Flexboxes model provides.

Flex Box Grid uses simple object oriented name spacing, provides ease customization via Sass variables and have full list of Flexbox features.

## Contributing

I'll check out your contribution if you:

* Have a clear and comprehensive description for your changes in pull request.

## License

MIT
