# ![Export audition Icon](img/icons/audition-icon-r.png) Audition

If you have some layers with audio in After Effects, you can export the audio to Audition using this tool.

DuIO will build a multi-track session in Audition, creating one clip for each layer with audio in the composition. Audio in precomposition is not supported (yet).  
Audio levels and their keyframes will be transfered to Audition too, but if the channels (left and right) do not have the same levels, only the average level will be set in Audition.

## ![export audition optn](img/icons/circle-little_r.png) Audition options

This is the *Audition* options panel shown in *Normal* mode:  
![Export Audition optn ](img/screenshots/Export-audition-optn.PNG)

- **Audio Active Only**: check this to export only the layers with audio enabled. If it is unchecked, muted layers will be exported too.
- **Transcode and conform media**: if this button is checked, DuIO will use ffmpeg to extract audio from videos and conform the files before importing them in Audition. This is the best way to import any format, but the media files used in Audition will not be the same than the media files used in After Effects. There is no loss of quality, as DuIO will create uncompressed PCM audio (*.wav) matching your settings.
- **Open session in Audition** will automatically launch Audition and open the file after the export is complete.

When you click the *Export* button, you will be asked to save the Audition session file (/*.sesx). The transcoded media files will be stored in a folder called *Imported Files* next to it.
