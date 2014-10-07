$(document).ready(function () {

	appModel = new Backbone.Model();




	appModel.on('change', function () {

		$('#nav-app-title').html(appModel.get('title'));
		$('#app-title').html(appModel.get('title'));

		$('#app-id').html(appModel.get('id'));
		$('#app-color').html(appModel.get('color'));
	});


	// keep direct reference to the input field element
	var $input = $('#app-title-input');

	$input.on('change', function () {
		var inputValue = $input.val();

		appModel.set('title', inputValue);
	});

	appModel.set('title', 'App teste');

	appModel.set('id', '5678909876');

	appModel.set('color', 'red');

});