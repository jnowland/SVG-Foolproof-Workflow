# Sprites

This repo is to link together all the resources to provide a workflow to work with SVG and raster graphics.

It's still a WIP.

## Frontnend Intalling

1. `npm install`
2. `bower install`

## Running the tasks

`grunt`


## Features

[x] ~~Raster Icons - (Icons with heavy textures).~~ No Longer in as it complicates it.
[x] Vector Icons - SVG Icons
[x] Fallback PNG for those vector icons.
[x] External cacheable SVG "sprite" file using symbol syntax.
[x] SVG for everyone making it work on lower IE.
[x] Ability to create critical fallback PNGs for when you modifiy the SVG Styles dramatically.
[ ] Ability for colours/size to come through on the fallbacks
[ ] A system to handle the mission critical png
[ ] Work out naming convensions
    [ ] Ignore any modifiers
[ ] Don't Strip out colours.
[ ] Set up - Modernizr - rely on "no-svg" not "lt-ie9" for older browsers.
[ ] Error report on dodgy SVG exports


It enables externally linking to an external SVG file using the following syntax:

```<svg class="icon-clothes">
    <use xlink:href="/theme/images/compiled/vector-sprites-working.svg#icon-clothes"></use>
</svg>
```

## Current Workflow

## Suggested Workflow

1. Filled SVG Exported
2. Copy to directory
3. Strip fill content out
4. SVG Store Squish them together.
5. Make PNGs for Filled
6.



# Dependancies

1. SVG For Everybody - enables external svg uses on ie9,10,11.
2.
