# Sprites

This repo is to link together all the resources to provide a workflow to work with SVG and raster graphics.

**It's still very much a WIP**.

## Frontend Intalling

1. `npm install`
2. `bower install`

## Running the tasks

Just run `grunt` after you have installed.


## Features

* [x] Vector Icons - SVG Icons
* [x] Fallback PNG for those vector icons.
* [x] External cacheable SVG "sprite" file using symbol syntax.
* [x] SVG for everyone making it work on lower IE.
* [x] Ability to create critical fallback PNGs for when you modifiy the SVG Styles dramatically.
* [x] ~~Raster Icons - (Icons with heavy textures).~~ No Longer in as it complicates the process
* [ ] Ability for colours/size to come through on the fallbacks
* [ ] A system to handle the mission critical png
* [ ] Work out naming convensions
* [ ] Ignore any modifiers
* [ ] Don't Strip out colours.
* [ ] Set up - Modernizr - rely on "no-svg" not "lt-ie9" for older browsers.
* [ ] Error report on dodgy SVG exports


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

## Browser Testing Required

<table class="environments">
    <tbody><tr>
        <th align="left">Internet Explorer</th>
        <td align="center">6.0</td>
        <td align="center">7.0</td>
        <td align="center">8.0</td>
        <td align="center">9.0</td>
        <td align="center">10.0</td>
        <td align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>

    <tr>
        <th align="left">Chrome</th>
        <td colspan="6" align="center">Latest stable</td>
    </tr>

    <tr>
        <th align="left">Firefox</th>
        <td colspan="6" align="center">Latest stable</td>
    </tr>

    <tr>
        <th align="left">Safari</th>
        <td align="center">iOS 5</td>
        <td align="center">iOS 6</td>
        <td align="center">iOS 7</td>
        <td align="center">Safari 6.1 </td>
        <td colspan="2" align="center">Safari</td>

    </tr>

    <tr>
        <th align="left">Android</th>
        <td align="center">2.3</td>
        <td colspan="5" align="center">4</td>
    </tr>
    <tr>
        <th align="left">Windows</th>
        <td colspan="6" align="center">Windows 8</td>
    </tr>
</tbody></table>

## Using SVGs in the page

It enables externally linking to an external SVG file using the following syntax:

```<svg class="icon-clothes">
    <use xlink:href="/theme/images/compiled/vector-sprites-working.svg#icon-clothes"></use>
</svg>```
