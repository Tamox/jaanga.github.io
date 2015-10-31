
	init();

	function init() {

		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = '' +
			'body { font: 12pt monospace; left: 0; margin: 0 auto; max-width: 800px; position: absolute: right: 0; }' +
			'iframe { border: 0px solid; ' +
		'';

		var reader = document.body.appendChild( document.createElement( 'script' ) );
		reader.onload = function() {

			hashChange();

		};
		reader.src = 'http://cdnjs.cloudflare.com/ajax/libs/showdown/1.3.0/showdown.min.js';

		window.addEventListener( 'hashchange', hashChange, false );

	}

	function hashChange() {

		var fileName = location.hash ? location.hash.substr( 1 ) : 'readme.md';
		var converter = new showdown.Converter();
		content = document.body.appendChild( document.createElement( 'div' ) );

		document.title = document.title ? document.title : fileName;

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'get', fileName, true );
		xmlHttp.onreadystatechange = function() {

			if ( xmlHttp.readyState !== 4 ) { return; }
 
			content.innerHTML = converter.makeHtml( xmlHttp.responseText );

			ifr.style.margin = '0 0 0' + ( -0.5 * ( window.innerWidth - document.body.clientWidth ) + 10 ) + 'px';
			ifr.style.width = ( window.innerWidth - 20 ) + 'px';

		};

		xmlHttp.send( null );

	}
