// =============================================================================================
// ================================           demo.js           ================================
// =============================================================================================
const run_demo = async () => {
  console.log("----- Demo script ('demo.js') -----");	
	// let url = "patterns/tests/Truchet_PieQuarter_4x4.json";	
	// let url = "patterns/Truchet/Truchet_C64.json";	
	// let url = "patterns/Truchet/Truchet_PieQuarter.json";	
	let url = "patterns/PolygramDemo.json";
	console.log("URL of pattern definition file: " + url);
    
    // NB: seems to work better than 'fetch'
	let xmlhttp = new XMLHttpRequest();	
	
	xmlhttp.onreadystatechange = async function() {
	    // console.log("readyState: " + this.readyState + "    this.status: " + this.status);
	 	if (this.readyState == 4 && this.status == 200) {
	 		let json_data = JSON.parse(this.responseText);
			
			let json_pp = await JsonPP.Run(json_data);			
			JsonPP.PrintConstants();
			
	 		P5P.SetAttribute(P5P.PATTERN_DATA, json_pp);
			
			console.log(">> Start P5_Patterns");
			p5p = new p5(p5p_sketch);
	 	}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}; // run_demo()

run_demo();

// console.log(">> Start P5_Patterns");
// p5p = new p5(p5p_sketch);