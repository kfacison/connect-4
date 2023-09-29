

    /*----- constants -----*/
	const COLORS = {
		"0": "white",
		"1": "purple",
		"-1": "orange"
	};

	/*----- state variables -----*/
	let board; //aray of 7 column
	let turn; //1 or -1
	let winner; // null= no winner; or 1 or -1 = winner; 'T' = tie game

	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/
	init();

	//initialize all state, then call render()
	function init(){
		//rotate board array 90 degrees counter-clockwise(pivit poit is[0][0])
		board =[
			[0, 0, 0, 0, 0, 0],//col 0
			
			[1, 0, 0, 0, 0, 0],//col 1
			
			[0, 0, 0, 0, 0, 0],//col 2
			
			[0, 0, 0,-1, 0, 0],//col 3
			
			[0, 0, 0, 0, 0, 0],//col 4
			
			[0, 0, 0, 0, 0, 0],//col 5
			
			[0, 0, 1, 0, 0, 0] //col 6
		];
		turn = 1;
		winner = null;
		render();
	}

	//visualize all base states
	function render(){
		renderBoard();
		renderMessage();
		renderControls();
	}

	function renderBoard(){
		board.forEach((colArr, colIdx) => {
			colArr.forEach((cellVal, rowIdx) => {
			const cellId = `c${colIdx}r${rowIdx}`;
			const cellEl = document.getElementById(cellId);
			cellEl.style.backgroundColor = COLORS[cellVal];
			});
			
		});
		
	}

	function renderMessage(){
		
	}
	//hide/show UI element(controls)
	function renderControls(){
		
	}