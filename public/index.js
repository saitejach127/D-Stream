const file = document.getElementById('file')
const ipfs = window.IpfsApi('localhost', '5001', {protocol: 'https'})
const infoHash = document.getElementById('infoHash')
const ipfsHash = document.getElementById('ipfsHash')
const video = document.getElementById('video')
let data;
var client = new WebTorrent()
let tor;

function redirect(){
	var hash = infoHash.value;
	var data = "magnet:?xt=urn:btih:" + hash + "&dn=name.txt&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
	getIpfs()
	getTorrent()
}


