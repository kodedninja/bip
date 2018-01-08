function bip(el, m) {
	if (!po2(el.width) || !po2(el.height)) {
		console.log("bip: Please use a <canvas> with power of 2 sizes.")
	}

	var ctx = el.getContext('2d')
	var one = el.height / m.length

	var id = ctx.createImageData(one,one)
	var d  = id.data

	for (var y = 0; y < m.length; y++) {
		for (var x = 0; x < m[y].length; x++) {
			px(x, y, m[y][x])
		}
	}

	function px(x, y, c) {
		var a = [c.r, c.g, c.b, 255]
		for (var i = 0; i < d.length; i++) {
			d[i] = a[i%4]
		}
		ctx.putImageData( id, one*x, one*y )
	}

	function po2(n) {
		return ((n & -n) == n)
	}
}

bip.fill = function(w, h, c) {
	var r = new Array(h);
	for (var y = 0; y < h; y++) {
		r[y] = new Array(w)
		for (var x = 0; x < w; x++) r[y][x] = c
	}
	return r
}
