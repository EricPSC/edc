/* put your javascript here */

/*var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.520618, lng: -73.552457},
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}
*/


var $sizers = document.getElementsByTagName('button');
var $fontsize = document.getElementsByTagName('body')[0];
var $default = '100%';
$fontsize.style.fontSize = $default;

for(var $i = 0; $i < $sizers.length; $i++){
	$sizers[$i].addEventListener('click', function(){
		//write stuff
		var $getBtn = this.innerHTML;
		if($getBtn == ' + '){
			
			$fontsize.style.fontSize = '200%';
		}else {
			
			$fontsize.style.fontSize = '100%';
		}
	});
}






