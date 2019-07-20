function torrentUpload(){
	console.log("Uploading to torrent")
	client.seed(file.files, onTorrent)
}

function onTorrent(torrent){
	tor = torrent;
	torrent.files.forEach((file) => {
		console.log(torrent.numPeers)
		tor = torrent;
		file.renderTo('video#video');
	})
}

var change = true;

setInterval(()=>{
	if(tor.numPeers == 0&&change){
		turnIpfs();
		change = false;
	}
},1000)

function turnIpfs(){
	var time = video.currentTime;
	video.src = 'https://gateway.ipfs.io/ipfs/'+ ipfsHash.value + "/";
	video.currentTime = time;
}

function getTorrent(){
	var hash = infoHash.value;
	var data = "magnet:?xt=urn:btih:" + hash + "&dn=name.txt&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969"
	client.add(data, onTorrent)
}

var plink = "magnet:?xt=urn:btih:6f63dbb79ab7e4339ed79e025977b6c5103fc780&dn=GTA+Grand+Theft+Auto+V+PC+with+DLC&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969"
var links = "magnet:?xt=urn:btih:9aae85caf6ba36ff95d2ea2a0e4ae836358b2ecb&dn=RNN1.++Why+sequence+models-5Vl-bK7tfD8.mp4&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"

var l = `http://share.camoe.cn:8080/announce
udp://tracker.torrent.eu.org:451/announce
http://t.nyaatracker.com:80/announce
 
udp://tracker.doko.moe:6969/announce
 
http://asnet.pw:2710/announce
 
udp://thetracker.org:80/announce
 
http://tracker.tfile.co:80/announce
 
http://pt.lax.mx:80/announce
 
udp://santost12.xyz:6969/announce
 
https://tracker.bt-hash.com:443/announce
 
udp://bt.xxx-tracker.com:2710/announce
 
udp://tracker.vanitycore.co:6969/announce
 
udp://zephir.monocul.us:6969/announce
 
http://grifon.info:80/announce
 
http://retracker.spark-rostov.ru:80/announce
 
http://tr.kxmp.cf:80/announce
 
http://tracker.city9x.com:2710/announce
 
udp://bt.aoeex.com:8000/announce
 
http://tracker.tfile.me:80/announce
 
udp://tracker.tiny-vps.com:6969/announce
 
http://retracker.telecom.by:80/announce
 
http://tracker.electro-torrent.pl:80/announce
 
udp://tracker.tvunderground.org.ru:3218/announce
 
udp://tracker.halfchub.club:6969/announce
 
udp://retracker.nts.su:2710/announce
 
udp://wambo.club:1337/announce
 
udp://tracker.dutchtracking.com:6969/announce
 
udp://tc.animereactor.ru:8082/announce
 
udp://tracker.justseed.it:1337/announce
 
udp://tracker.leechers-paradise.org:6969/announce
 
udp://tracker.opentrackr.org:1337/announce
 
https://open.kickasstracker.com:443/announce
 
udp://tracker.coppersurfer.tk:6969/announce
 
udp://open.stealth.si:80/announce
 
http://retracker.mgts.by:80/announce
 
http://retracker.bashtel.ru:80/announce
 
udp://inferno.demonoid.pw:3418/announce
 
udp://tracker.cypherpunks.ru:6969/announce
 
http://tracker.calculate.ru:6969/announce
 
udp://tracker.sktorrent.net:6969/announce
 
udp://tracker.grepler.com:6969/announce
 
udp://tracker.flashtorrents.org:6969/announce
 
udp://tracker.yoshi210.com:6969/announce
 
udp://tracker.tiny-vps.com:6969/announce
 
udp://tracker.internetwarriors.net:1337/announce
 
udp://mgtracker.org:2710/announce
 
http://tracker.yoshi210.com:6969/announce
 
http://tracker.tiny-vps.com:6969/announce
 
udp://tracker.filetracker.pl:8089/announce
 
udp://tracker.ex.ua:80/announce
 
http://mgtracker.org:2710/announce
 
udp://tracker.aletorrenty.pl:2710/announce
 
http://tracker.filetracker.pl:8089/announce
 
http://tracker.ex.ua/announce
 
http://mgtracker.org:6969/announce
 
http://retracker.krs-ix.ru:80/announce
 
udp://tracker2.indowebster.com:6969/announce
 
http://thetracker.org:80/announce
 
http://tracker.bittor.pw:1337/announce
 
udp://tracker.kicks-ass.net:80/announce
 
udp://tracker.aletorrenty.pl:2710/announce
 
http://tracker.aletorrenty.pl:2710/announce
 
http://tracker.bittorrent.am/announce
 
udp://tracker.kicks-ass.net:80/announce
 
http://tracker.kicks-ass.net/announce
 
http://tracker.baravik.org:6970/announce
 
http://tracker.dutchtracking.com/announce
  
http://tracker.dutchtracking.com:80/announce
 
udp://tracker4.piratux.com:6969/announce
 
http://tracker.internetwarriors.net:1337/announce
 
udp://tracker.skyts.net:6969/announce
 
http://tracker.dutchtracking.nl/announce
  
http://tracker2.itzmx.com:6961/announce
  
http://tracker2.wasabii.com.tw:6969/announce
 
udp://tracker.sktorrent.net:6969/announce
  
http://www.wareztorrent.com:80/announce
  
udp://bt.xxx-tracker.com:2710/announce
 
udp://tracker.eddie4.nl:6969/announce
 
udp://tracker.grepler.com:6969/announce
 
udp://tracker.mg64.net:2710/announce
 
udp://tracker.coppersurfer.tk:6969/announce
 
http://tracker.opentrackr.org:1337/announce
  
http://tracker.dutchtracking.nl:80/announce
  
http://tracker.edoardocolombo.eu:6969/announce
  
http://tracker.ex.ua:80/announce
  
http://tracker.kicks-ass.net:80/announce
  
http://tracker.mg64.net:6881/announce
 
udp://tracker.flashtorrents.org:6969/announce
 
http://tracker.tfile.me/announce
  
http://tracker1.wasabii.com.tw:6969/announce
 
udp://tracker.bittor.pw:1337/announce
 
http://tracker.tvunderground.org.ru:3218/announce
 
http://tracker.grepler.com:6969/announce
 
udp://tracker.bittor.pw:1337/announce
 
http://tracker.flashtorrents.org:6969/announce
 
http://retracker.gorcomnet.ru/announce
 
udp://tracker.sktorrent.net:6969/announce
 
udp://tracker.sktorrent.net:6969
 
udp://public.popcorn-tracker.org:6969/announce
 
udp://tracker.ilibr.org:80/announce
 
udp://tracker.kuroy.me:5944/announce
 
udp://tracker.mg64.net:6969/announce
 
udp://tracker.cyberia.is:6969/announce
 
http://tracker.devil-torrents.pl:80/announce
 
udp://tracker2.christianbro.pw:6969/announce
 
udp://retracker.lanta-net.ru:2710/announce
 
udp://tracker.internetwarriors.net:1337/announce
 
udp://ulfbrueggemann.no-ip.org:6969/announce
 
http://torrentsmd.eu:8080/announce
 
udp://peerfect.org:6969/announce
 
udp://tracker.swateam.org.uk:2710/announce
 
http://ns349743.ip-91-121-106.eu:80/announce
 
http://torrentsmd.me:8080/announce
 
http://agusiq-torrents.pl:6969/announce
 
http://fxtt.ru:80/announce
 
udp://tracker.vanitycore.co:6969/announce
 
udp://explodie.org:6969`
