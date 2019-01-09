var game_canvas;
var game_context;

var cloudx;

setInterval(updateGame, 10);

function initGame () {
	game_canvas = document.getElementById("gameCanvas");
	game_context = game_canvas.getContext("2d");

	
	cloudx = game_canvas.width;

}

function updateGame () {
	game_context.clearRect(0, 0, game_canvas.width, game_canvas.height);

	game_context.fillStyle = "green";

	game_context.fillRect(50, 50, 50, 50);
	
	game_context.fillStyle = "red";

	game_context.fillRect(40, (game_canvas.height - 100 ), 50, 50);
	
	game_context.fillStyle = "blue";

	game_context.fillRect((game_canvas.width / 2) + 50, (game_canvas.height / 2 ), 50, 50);

	game_context.fillStyle = "white";

	cloudx = cloudx - 20

	game_context.fillRect(cloudx, 50, 50, 50);



}
