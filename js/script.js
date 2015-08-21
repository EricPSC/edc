// put your javascript here

var $img = document.getElementById('sick'),
	$num = 1;
	
$img.addEventListener('click', addClassName);
	
function addClassName(){
	// $img.classList.toggle('active');
	// console.log($num);
	
	// console.log($num);
	$img.className = "";
	$img.classList.toggle("cf6_image-" + $num);
	$num = $num + 1;
if ($num > 4){
	$num = 1;
	}
};	



