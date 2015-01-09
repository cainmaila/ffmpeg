var ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath("D:/ffmpeg/bin/ffmpeg.exe"); 
ffmpeg.setFfprobePath("D:/ffmpeg/bin/ffprobe.exe"); 
var command = new ffmpeg("mv.3gp")
				.inputFormat('mp4')
				.on('error', function(err) {
				    console.log('An error occurred: ' + err.message);
				  })
				.on('progress', function(progress) {
				    console.log('Processing a : ' + progress.percent + '% done');
				  })
				.save('output.mp4')