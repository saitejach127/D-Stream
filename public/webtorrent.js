function torrentUpload(){
	console.log("Uploading to torrent")
	client.seed(file.files, onTorrent)
}

function onTorrent(torrent){
	tor = torrent;
	torrent.files.forEach((file) => {
		file.appendTo('.output')
		// video.setAttribute("style", "display : inline");
	})
}

function getTorrent(){
	var hash = infoHash.value;
	var data = "magnet:?xt=urn:btih:" + hash + "&dn=name.txt&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
	client.add(data, onTorrent)
}
