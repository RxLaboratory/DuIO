# OCA for Adobe After Effects

[*OCA*, the Open Cel Animation format](http://rainboxlab.org/tools/oca/) is an open format to ease the exchange of traditionnal/frame-by-frame/cel animation between different applications.

It is able to import all animation keyframes from an *OCA* document, keeping the layer structure, blending modes, and a lot of other information. This *OCA* format can then be exported from drawing/animation applications like *Krita*, *Photoshop*, *TVPaint*, etc. and imported in *Adobe After Effects* or [*Blender*](http://blender.org).

The documentation about *OCA* is available on [oca-docs.rainboxlab.org](http://oca-docs.rainboxlab.org).

This is the *OCA* importer for *After Effects*.

## Features

This *OCA* import will import the most common features of all drawing/animation software:

- Imports the layers
- Layer Groups as composition (and pass through mode as "collapse transformation")
- Layer Labels
- Layer Visibility
- Frames and their duration (animation exposure)
- Opacity Keyframes
- Blending Modes (see [this table](oca-blending-modes.md) for a list and correspondance)
- Layer Sizes and Coordinates
- Document background color (as composition background color)
- Document color depth (as project bits per channel, changed only if it's higher than the current project)

![YOUTUBE](cjAMmYF8OtE)
