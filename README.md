# ▥ FlexGrid

Create clean, simple and powerful multi-device grid layouts via Flexible Boxes. Short, intuitive predefined structure and flexible options system, mixin generators to match any of your needs.

- [Installation](#installation)
    - [Manual](#manual)
    - [via Bower](#bower)
- [Demo & Documentation](#documentation)
    - [Basic](#basic)
    - [Media Queries](#mediaQueries)
    - [Mixed](#mixed)
- [FAQ](#faq)


## <a name="installation"></a>Installation

### <a name="manual"></a>Manual

#### with CSS

Download [full](https://raw.githubusercontent.com/godban/flexgrid/master/dist/css/flexgrid.css) or [minified](https://raw.githubusercontent.com/godban/flexgrid/master/dist/css/flexgrid.min.css) version.
Include inside <code>&lt;head&gt;</code> section

```html
<link rel="stylesheet" href="pathto/flexbox.min.css">
```

#### with Sass

Download [flexgrid.zip](https://raw.githubusercontent.com/godban/flexgrid/master/dist/flexgrid.zip).
Extract it to Sass working directory.
Import <code>flexbox.scss</code> to your styles:
 
```scss
@import 'flexbox';
```

or use it as separate compiled file.

### <a name="bower"></a>via Bower

    bower install flexgrid
    
and use CSS or Sass version from bower package.

## <a name="documentation"></a>Demo & Documentation

Demo and most detailed documentation you can find [here](http://godban.com.ua/projects/flexgrid/ "FlexGrid demo & documentation").

### <a name="basic"></a>Basic

FlexGrid systems are used for creating page layouts through a series of rows and columns that house your content. 
By default FlexGrid have 12 columns.

- Rows must be placed within a <code>.container</code> with predefined paddings that equal half column gutter.
- Use rows .row to create horizontal groups of columns.
- Content should be placed within columns with classes <code>.XS-n, .S-n, .M-n, .L-n, .XL-n</code> where n is columns number from 1 to 12 (by default).
- Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on <code>.row</code>, by default it's 10px.

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

Media queries is a basis of any Responsive Grid System. To change column behavior each media query breakpoint connected with column class name with simply recognizing size name: <code>XS, S, M, L, XL</code>. 

As example column with <code>.M6</code> class will be halfwidth until the window width becomes equal to 768px or less matching <code>$screen__M</code>.

<img src="https://raw.githubusercontent.com/godban/flexgrid/master/demo/images/media-queries.png" width="500" alt="Areas">

Predefined break points:
```scss
$screen__XS: 320px;
$screen__S:  480px;
$screen__M:  768px;
$screen__L:  1024px;
$screen__XL: 1440px;
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
@media (max-width: $screen__M) {
    .foo {
        ...
    }
}
```

### <a name="mixed"></a>Mixed columns

Wanna different behavior on multiple devices? Try to mix columns.

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

### <a name="offset"></a>Offseting columns

Move columns right using <code>-off</code> suffix on grid classes. These will increase left indent of a column. As example <code>.M2-off</code> moves <code>.M6</code> block over 2 columns.

```html
<div class="container">
    <div class="row">
        <div class="M6 M1-off">...</div>
        <div class="M5">...</div>
    </div>
    <div class="row">
        <div class="M6 M2-off">...</div>
    </div>
    <div class="row">
        <div class="M4">...</div>
        <div class="M4 M4-off">...</div>
    </div>
</div>
```

## <a name="faq"></a>FAQ

### What is Grid?

The vast majority of websites out there use a grid. They may not explicitly have a grid system in place, but if they have a "main content area" floated to the left a "sidebar" floated to the right, it's a simple grid.

### Why use Grid at all?

Using grid system can significant speed up your work, keep you code understandable and DRY.

## Contributing

I'll check out your contribution if you:

* Have a clear and comprehancive description for your changes in pull request.

## License

MIT
