var buttonDict = {
    "#buttonConstruction": "Construction"
};

/*
$('#buttonConstruction').hide();
$('#buttonEdges').hide();
$('#buttonPaths').hide();
$('#buttonZone').hide();
$('#buttonBikes').hide();
$('#buttonBuses').hide();
$('#buttonStalls').hide();
$('#buttonTrees').hide();
$('#buttonStanding').hide();
$('#buttonAmenities').hide();
*/


$(document).ready(function() {
	/*
	$('#buttonConstruction').click(function(){
		if($(this.id).attr('value')==this.id.concat(" On"){
			$(this).val('Construction Off'); // change the value to Show
			$("#Construction").hide();
			$(this).show();
		}else{
			$(this).val('Construction On'); // change the value to Hide
			$("#Construction").show();
		}
	})
	*/
	
	$('#buttonConstruction').click(function(){
		if($('#buttonConstruction').attr('value')=='Construction On'){
			$(this).val('Construction Off'); // change the value to Show
			$("#Construction").hide();
			$(this).show();
		}else{
			$(this).val('Construction On'); // change the value to Hide
			$("#Construction").show();
		}
	})
	
	$('#buttonEdges').click(function(){
		if($('#buttonEdges').attr('value')=='Edges On'){
			$(this).val('Edges Off'); // change the value to Show
			$("#Edges").hide();
			$(this).show();
		}else{
			$(this).val('Edges On'); // change the value to Hide
			$("#Edges").show();
		}
	})
	
	$('#buttonPaths').click(function(){
		if($('#buttonPaths').attr('value')=='Paths On'){
			$(this).val('Paths Off'); // change the value to Show
			$("#Paths").hide();
			$(this).show();
		}else{
			$(this).val('Paths On'); // change the value to Hide
			$("#Paths").show();
		}
	})
	
	$('#buttonZone').click(function(){
		if($('#buttonZone').attr('value')=='Zone On'){
			$(this).val('Zone Off'); // change the value to Show
			$("#Zone").hide();
			$(this).show();
		}else{
			$(this).val('Zone On'); // change the value to Hide
			$("#Zone").show();
		}
	})
	
	$('#buttonBikes').click(function(){
		if($('#buttonBikes').attr('value')=='Bikes On'){
			$(this).val('Bikes Off'); // change the value to Show
			$("#Bikes").hide();
			$(this).show();
		}else{
			$(this).val('Bikes On'); // change the value to Hide
			$("#Bikes").show();
		}
	})
	
	$('#buttonBuses').click(function(){
		if($('#buttonBuses').attr('value')=='Buses On'){
			$(this).val('Buses Off'); // change the value to Show
			$("#Buses").hide();
			$(this).show();
		}else{
			$(this).val('Buses On'); // change the value to Hide
			$("#Buses").show();
		}
	})
	
	$('#buttonStalls').click(function(){
		if($('#buttonStalls').attr('value')=='Stalls On'){
			$(this).val('Stalls Off'); // change the value to Show
			$("#Stalls").hide();
			$(this).show();
		}else{
			$(this).val('Stalls On'); // change the value to Hide
			$("#Stalls").show();
		}
	})
	
	$('#buttonTrees').click(function(){
		if($('#buttonTrees').attr('value')=='Trees On'){
			$(this).val('Trees Off'); // change the value to Show
			$("#Trees").hide();
			$(this).show();
		}else{
			$(this).val('Trees On'); // change the value to Hide
			$("#Trees").show();
		}
	})
	
	$('#buttonStanding').click(function(){
		if($('#buttonStanding').attr('value')=='Standing On'){
			$(this).val('Standing Off'); // change the value to Show
			$("#Standing").hide();
			$(this).show();
		}else{
			$(this).val('Standing On'); // change the value to Hide
			$("#Standing").show();
		}
	})
	
	$('#buttonAmenities').click(function(){
		if($('#buttonAmenities').attr('value')=='Amenities On'){
			$(this).val('Amenities Off'); // change the value to Show
			$("#Amenities").hide();
			$(this).show();
		}else{
			$(this).val('Amenities On'); // change the value to Hide
			$("#Amenities").show();
		}
	})
	
	
	$('#buttonTopography').click(function(){
		if($('#buttonTopography').attr('value')=='Topography On'){
			$(this).val('Topography Off'); // change the value to Show
			$("#Topography").hide();
			$(this).show();
		}else{
			$(this).val('Topography On'); // change the value to Hide
			$("#Topography").show();
		}
	})
	
	
	$('#buttonLightRail').click(function(){
		if($('#buttonLightRail').attr('value')=='LightRail On'){
			$(this).val('LightRail Off'); // change the value to Show
			$("#LightRail").hide();
			$(this).show();
		}else{
			$(this).val('LightRail On'); // change the value to Hide
			$("#LightRail").show();
		}
	})


	$('#buttonDesign').click(function(){
		if($('#buttonDesign').attr('value')=='Design On'){
			$(this).val('Design Off'); // change the value to Show
			$("#Design").hide();
			$(this).show();
		}else{
			$(this).val('Design On'); // change the value to Hide
			$("#Design").show();
		}
	})
});

/*

var visibility = {};
//$('#hiddenText').hide();
$('input').click(function() {
	try {
		if(visibility[this]===false) {
			$(this).show();
			visibility[this] = true;
		} else {
			$(this).hide();
			visibility[this] = false;
		}
	} catch (e) {
		$(this).hide();
		visibility[this] = false;
	}
});

*/
