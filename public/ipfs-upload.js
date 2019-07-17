function upload(){
	const reader = new FileReader()
	reader.onloadend = function() {
		 // Connect to IPFS
		 console.log("Uploading to ipfs")
        const buf = buffer.Buffer(reader.result) // Convert data into buffer
        ipfs.files.add(buf, (err, result) => { // Upload buffer to IPFS
          if(err) {
            console.error(err)
            return
          }
          console.log(result)
          const a = document.createElement('a')
		  a.href = 'https://gateway.ipfs.io/ipfs/'+ result[0].hash + "/"
		  a.innerHTML = "done"
		  video.src = a.href;
		  video.setAttribute("style", "display : inline");
		  document.body.appendChild(a)
	})
    torrentUpload()
}
	reader.readAsArrayBuffer(file.files[0])

}

function getIpfs(){
	video.src = 'https://gateway.ipfs.io/ipfs/' + ipfsHash.value + "/";
	video.setAttribute("style", "display : inline");
}

var iph = "Qmdn6TA4UkV2VbfL4GTGowZC9jCZtMgNLAKLDBWy7XQUHZ"
var trh = "9aae85caf6ba36ff95d2ea2a0e4ae836358b2ecb"
