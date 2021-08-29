## Convert Video to GIF

To convert the entire video to GIF, use the following command:

```sh
ffmpeg -i small.mp4 small.gif
```

To convert just a portion of a video clip to GIF, use the following command:

```sh
ffmpeg -t 3 -ss 00:00:02 -i small.webm small-clip.gif
```

The snippet above directs ffmpeg to create a GIF 3 seconds long starting at 2 seconds into the video.

The default conversion doesn't appear to be high quality, so you can configure the bitrate via another parameter:

```sh
ffmpeg -i small.mp4 -b 2048k small.gif
```

## Convert GIF to Video

The command is quite simple:

```sh
ffmpeg -f gif -i animation.gif animation.mp4
```

You can use this same command format to convert to other video formats:

```sh
ffmpeg -f gif -i aniation.gif animation.mpeg

ffmpeg -f gif -i animation.gif animation.webm
```
