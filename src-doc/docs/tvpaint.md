# ![Import tvp Icon](img/icons/importTVP-icon-r.png) Clip from TVPaint

!!! hint
    Since its 11th version, _TVPaint_ comes with a tool to import clips in _After Effects_, but the importer in DuIO works a bit differently:

    - the animation exposure can optionally be set directly on the frames instead of using time remapping,  
    - there is one level of precomposition less, so the resulting compositions are a bit cleaner,  
    - the camera is not imported with the clip, as it can be imported using the better [_TVPaint Camera_](tvpcam.md) import tool, with more options and precision, and which can be set on a [*2D Camera*](https://duik-docs.rainboxlab.org/camera-2d.html) created by [Duik](https://rainboxlab.org/tools/duik/).
    - The DuIO importer handles more blending modes than the one provided with TVPaint.

## TVPaint 11 and newer

1. Export the clip to JSON (using the Layers structure tab of the export panel).

    ![TVPaint export panel](img/screenshots/export-layer-structure.PNG)

2. Click on the TVPaint button in DuIO, and select the JSON file.

## Previous versions of TVPaint

1. Export the clip using the "*MJ_AFX_Export*" script for TVPaint, which is provided with DuIO.  
The script creates a folder containing all needed frames in the clip, and a "*clipInfo.txt*" file.

2. When importing the clip with DuIO, just select this text file, everything is automated.
