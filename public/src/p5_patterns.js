// ========================================================================================================
// ========================================     p5_patterns.js     ========================================
// ========================================================================================================
// https://github.com/processing/p5.js/wiki/Global-and-instance-mode
let p5p = undefined;

const p5p_sketch = ( p ) => {
    let renderer = undefined; 
  
    p.setup = () => {     
        let canvas = p.createCanvas(P5P.DEFAULT_CANVAS_WIDTH, P5P.DEFAULT_CANVAS_HEIGHT);
		canvas.parent(P5P.CANVAS_ID);

        p.angleMode(p.DEGREES);
        renderer = new P5P.Renderer(p, canvas); 
    }; // setup()
  
    p.draw = () => {     
        // renderer.grid.visible = false;
        renderer.grid.draw();
    }; // draw()

    p.getP5 = () => {
        return p;
    }; // getP5()
}; // p5p_sketch 

// NB: first define 'P5P' with 'Parent classes' (eg: 'Shape')
let SuperKLS = {
    Shape: class { 
        constructor(p5, cell, origin, json_data) {
            // console.log(">> new Shape");
			this._klass = "SuperKLS.Shape";
            this._p5    = p5;  
            this._cell  = cell; 
            this._grid  = cell.grid;
			this._renderer = this._grid.renderer;
            this._origin = origin;  
            this._json_data = json_data;
            
            this._position       = this.getPoint(this.getArgValue(P5P.POSITION_ARG, P5P.CARDINAL_POINT_NW));
            this._size           = this.getArgValue(P5P.SIZE_ARG,       this._cell.size);
			
            this._color          = this.getArgValue(P5P.COLOR_ARG,      "#ff0000");
			this._drawThickness  = 1;
			
			this._fill_color     = this.getArgValue(P5P.FILL_COLOR_ARG, "#ffff00");
			
            this._center_point   = { x: this._origin.x + this._size.width/2, 
			                         y: this._origin.y + this._size.height/2 };            
        } // SuperKLS.Shape constructor

        draw() {            
        } // SuperKLS.Shape.draw()
		
		get p5() {
            return this._p5;
        } // SuperKLS.Shape getter for 'p5'
		
		get klass() {
            return this._klass;
        } // SuperKLS.Shape getter for 'klass'
		
		get grid() {
            return this._grid;
        } // SuperKLS.Shape getter for 'grid'
		
		get renderer() {
            return this._renderer;
        } // SuperKLS.Shape getter for 'renderer'

        get cell() {
            return this._cell;
        } // SuperKLS.Shape getter for 'cell'
		
		get json_data() {
            return this._json_data;
        } // SuperKLS.Shape getter for 'json_data'

        get origin() {
            return this._origin;
        } // SuperKLS.Shape getter for 'origin'
		
		get color() {
            return this._color;
        } // SuperKLS.Shape getter for 'color'
		
		get fillColor() {
            return this._fill_color;
        } // SuperKLS.Shape getter for 'fillColor'

        getArgValue(name, default_value) {
            let value = default_value;
            if ( this._json_data[name] != undefined )  value = this._json_data[name];
            return value;
        } // SuperKLS.Shape.getArgValue()  

		setStroke() {
			if (this._drawThickness == 0 || this._color == "none")
				this._p5.noStroke();
			else {
				this._p5.strokeWeight(this._drawThickness);
				this._p5.stroke(this._color);
			}							
		} // setStroke		

        getPoint( cardinal_point ) {
            let point = { x: this._origin, y: this._origin };
            switch (cardinal_point) {
                case P5P.CARDINAL_POINT_NW:  
                    point.x = this._origin.x; 
                    point.y = this._origin.y;
                    break;

                case P5P.CARDINAL_POINT_N:  
                    point.x = this._origin.x + this._cell.size.width / 2.0; 
                    point.y = this._origin.y;
                    break;

                case P5P.CARDINAL_POINT_NE:  
                    point.x = this._origin.x + this._cell.size.width; 
                    point.y = this._origin.y;
                    break;

                case P5P.CARDINAL_POINT_E:  
                    point.x = this._origin.x + this._cell.size.width; 
                    point.y = this._origin.y + this._cell.size.height / 2.0;
                    break;

                case P5P.CARDINAL_POINT_SE:  
                    point.x = this._origin.x + this._cell.size.width; 
                    point.y = this._origin.y + this._cell.size.height;
                    break;

                case P5P.CARDINAL_POINT_S:  
                    point.x = this._origin.x + this._cell.size.width / 2.0; 
                    point.y = this._origin.y + this._cell.size.height;
                    break;

                case P5P.CARDINAL_POINT_SW:  
                    point.x = this._origin.x; 
                    point.y = this._origin.y + this._cell.size.height;
                    break;

                case P5P.CARDINAL_POINT_W:  
                    point.x = this._origin.x; 
                    point.y = this._origin.y + this._cell.size.height / 2.0;
                    break;
            }
            return point;
        } // SuperKLS.Shape.getPoint()
    } // SuperKLS.Shape class
}; // SuperKLS

let P5P = {
	Attributes: {},
	
	SetAttribute: ( name, value ) => {
        P5P.Attributes[name] = value;
    }, // SetAttribute()
	
	GetAttribute: ( name ) => {
		let value = "";
		if (P5P.Attributes[name] != undefined) {
			value = P5P.Attributes[name];
		} 
		return value;
    }, // GetAttribute()
		
	PATTERN_DATA:       "PATTERN_DATA",
	CANVAS_ID:          "p5p_canvas_id",
	
    UNKNOWN_ATTRIBUTE:      "Unknown attribute",
    DEFAULT_CANVAS_WIDTH  : 600,
    DEFAULT_CANVAS_HEIGHT : 400, 

    RENDERER_KLASS:     "Renderer", 
    GRID_KLASS:         "Grid", 
    CELL_KLASS:         "Cell",         	
	
	LINE_SHAPE:         "Line",
	ELLIPSE_SHAPE:      "Ellipse",
	RECTANGLE_SHAPE:    "Rectangle",
	POLYGRAM_SHAPE:     "Polygram",
    
    CARDINAL_POINT_NW : "NW",
    CARDINAL_POINT_N :  "N",
    CARDINAL_POINT_NE : "NE", 
    CARDINAL_POINT_E :  "E",
    CARDINAL_POINT_SE : "SE", 
    CARDINAL_POINT_S :  "S",
    CARDINAL_POINT_SW : "SW",
    CARDINAL_POINT_W :  "W",
     
    P5_ARG:             "p5",
    CANVAS_ARG:         "canvas",
    PATTERN_DATA_ARG:   "pattern_data",
    GRID_ARG:           "grid",
    DIRTY_ARG:          "dirty",

    PARTS_ARG:          "Parts",

    WIDTH_ARG:          "width", 
    HEIGHT_ARG:         "height",
    GRID_SIZE_ARG:      "GridSize",
    CELL_SIZE_ARG:      "CellSize",
    MAX_CELL_VALUE_ARG: "MaxCellValue",
    SHAPES_ARG:         "Shapes",

    SHAPE_ARG:          "Shape",
    POSITION_ARG:       "Position",
    CENTER_ARG:         "Center",
    SIZE_ARG:           "Size",
    BG_COLOR_ARG:       "BackgroundColor",
    COLOR_ARG:          "Color",    
    FILL_COLOR_ARG:     "FillColor",
    DEFAULT_BG_COLOR:   "#00FF00",
    THICKNESS_ARG:      "Thickness",
	
	ARC_ARG:            "Arc", 

    START_ARG :         "Start",
    END_ARG :           "End",
	
	IS_STAR_ARG:        "IsStar",
	VERTEX_COUNT_ARG:   "VertexCount",

    FILL_STYLE_ARG:     "FillStyle",
    PIE_PIECE_ARG:      "PiePiece",
   
    Renderer : class {
		constructor(p5, canvas) {
            // console.log("new P5pRenderer p5: " + p5);
            this._p5 = p5;
            this._attributes = {};			
			this._canvas = canvas;
            this._grid = new P5P.Grid(p5, this, P5P.GetAttribute(P5P.PATTERN_DATA));
        } // P5P.Renderer constructor
		
		get klass() {
            return this._klass;
        } // P5P.Renderer getter for 'klass'

        get p5() {
            return this._p5;
        } // P5P.Renderer getter for 'p5'
		
		get canvas() {
            return this._canvas;
        } // P5P.Renderer getter for 'canvas'

        get grid() {
            return this._grid;
        } // P5P.Renderer getter for 'grid'
		
		drawArc(shape, start_angle, end_angle) {
			// console.log(" >> draw_arc " + start_angle + " " + end_angle);
			let arc_center_point = this._center;
			
			if (start_angle == 0 && end_angle == 90) {
				arc_center_point = shape.getPoint(P5P.CARDINAL_POINT_NW);
			}
			else if (start_angle == 90 && end_angle == 180) {
				arc_center_point = shape.getPoint(P5P.CARDINAL_POINT_NE);
			}
			else if (start_angle == 180 && end_angle == 270) {
				arc_center_point = shape.getPoint(P5P.CARDINAL_POINT_SE);
			}
			else if (start_angle == 270 && end_angle == 0) {
				arc_center_point = shape.getPoint(P5P.CARDINAL_POINT_SW);
			}
		
			let pivot = this._p5.createVector(arc_center_point.x, arc_center_point.y);
			// this._p5.fill(this._fill_color);
			this._p5.arc(pivot.x, pivot.y, shape.cell.size.width*2, shape.cell.size.height*2, 
						 start_angle, end_angle, this._p5.PIE);
		} // P5P.Renderer.drawArc()	
		
		// Draws a Polygram (regular polygon or a star) (is_star = true)
	    // https://processing.org/examples/star.html
		drawPolygram(shape, center, vertex_count_arg, size, is_star) {
			// console.log(" >> Renderer/drawPolygram is_star: " + is_star);
			this._p5.fill(shape.fillColor);
			
			this._p5.angleMode(this._p5.RADIANS);
			let vertex_count = vertex_count_arg;

		    if (is_star == false) {
			   vertex_count = vertex_count_arg / 2;
		    }			

			const HALF_PI = Math.PI / 2.0;
			const TWO_PI  = Math.PI * 2.0;
			
			let angle       = TWO_PI / vertex_count;
			let half_angle  = angle / 2.0;
			
			let shift_angle = (vertex_count/2.0) * Math.PI + Math.PI;
			
			let radius_1 = size.width  / 2.0;
			let radius_2 = size.height / 2.0; //size.height / 2.0;
			
			if (is_star == true) {
				// radius_1 = size.width/2.2;
			    radius_2 = radius_2 / 2;
				if (vertex_count_arg == 3 || vertex_count_arg == 4) {
					let decrement = Math.pow(2, vertex_count) / 2;
					radius_2 = size.width / (14 - decrement );
				}
				if (vertex_count_arg == 5) shift_angle += Math.PI; 
			}
			else if (is_star == false) {
				//if (vertex_count % 2 == 1) shift_angle = HALF_PI/vertex_count; // + Math.PI;
				if (vertex_count_arg % 2 == 1) shift_angle = HALF_PI/vertex_count_arg + Math.PI;
			}
			//shift_angle = 0;			
			
			let x = center.x; // - shape.cell.size.width  / 2.0;
			let y = center.y; // - shape.cell.size.height / 2.0;
			
			this._p5.beginShape();
				for (let a = shift_angle; a < TWO_PI + shift_angle; a += angle) {
					let sx = x + Math.cos(a) * radius_2;
					let sy = y + Math.sin(a) * radius_2;
					this._p5.vertex(sx, sy);
					
					sx = x + Math.cos(a + half_angle) * radius_1;
					sy = y + Math.sin(a + half_angle) * radius_1;		
					this._p5.vertex(sx, sy);
				}
			this._p5.endShape(this._p5.CLOSE);
			
			this._p5.angleMode(this._p5.DEGREES);
		} // P5P.Renderer.drawPolygram()
    }, // P5P.Renderer class

    Grid: class {
        static DEFAULT_SIZE      = { "width": 18, "height": 18 };
        static DEFAULT_CELL_SIZE = { "width": 20, "height": 20 };

        constructor(p5, renderer, pattern_data) {		
            this._p5           = p5;
			this._renderer     = renderer;
            this._dirty        = true;
			this._pattern_data = pattern_data;
            
            // console.log( "new Grid 1 DEFAULT_GRID_SIZE: " + JSON.stringify(P5P.Grid.DEFAULT_SIZE)); 
            let width_arg  = P5P.Grid.DEFAULT_SIZE[P5P.WIDTH_ARG];   
            let height_arg = P5P.Grid.DEFAULT_SIZE[P5P.HEIGHT_ARG];  
            
            if ( this._pattern_data[P5P.GRID_SIZE_ARG] != undefined ) {
                width_arg  = this._pattern_data[P5P.GRID_SIZE_ARG][P5P.WIDTH_ARG];
                height_arg = this._pattern_data[P5P.GRID_SIZE_ARG][P5P.HEIGHT_ARG];
            }  
            this._width  = width_arg;  
            this._height = height_arg;

            let cell_size_arg = P5P.Grid.DEFAULT_CELL_SIZE;   
            // console.log("* default cell_size: " + JSON.stringify(cell_size_arg));			
            if ( this._pattern_data[P5P.CELL_SIZE_ARG] != undefined )  cell_size_arg = this._pattern_data[P5P.CELL_SIZE_ARG];
            // console.log("* cell_size: " + JSON.stringify(cell_size_arg));
			this._cell_size = cell_size_arg;
			
			// let canvas_width  = this._width  * this._cell_size.width  / 2;
			// let canvas_height = this._height * this._cell_size.height / 2;
            // this._p5.width  = canvas_width;
			// this._p5.height = canvas_height;

            let bg_color_arg = P5P.DEFAULT_BG_COLOR;
            if ( this._pattern_data[P5P.BG_COLOR_ARG] != undefined )  bg_color_arg = this._pattern_data[P5P.BG_COLOR_ARG];
            this._bg_color = bg_color_arg;

            let max_cell_value_arg = 1;
            if ( this._pattern_data[P5P.MAX_CELL_VALUE_ARG] != undefined )  max_cell_value_arg = this._pattern_data[P5P.MAX_CELL_VALUE_ARG];
            this._max_cell_value = max_cell_value_arg;
          
            this._visible = true;   
            this._origin  = this.computeOrigin();         
        } // P5P.Grid.constructor()
		
		get klass() {
            return this._klass;
        } // P5P.Grid getter for 'klass'

        get p5() {
            return this._p5;
        } // P5P.Grid getter for 'p5'		
		
        get renderer() {
            return this._renderer;
        } // P5P.Grid getter for 'renderer'
		
        draw() {
            // this.p5.background("red");
            if ( this._dirty ) this._dirty = false;
            else return;

            console.log(">> Grid.draw()");

            this._p5.background(this._bg_color);
            this._p5.strokeWeight(0.1);

            const get_random_int = (max) => {
                return Math.floor(Math.random() * max);
            }; // get_random_int()

            let cells = [];

            if (this._visible) { 
                for ( let ix=0; ix < this._width; ix++ ) {
                    for ( let iy=0; iy < this._height; iy++ ) {
                        let cx = this._origin.x + ix * this._cell_size.width;
                        let cy = this._origin.y + iy * this._cell_size.height;
						
						// console.log("cx: " + cx + "  cy:" + cy);
                        
                        let cell_origin = { x: cx, y: cy };
                        // console.log("Grid.draw() cell_origin: " + JSON.stringify(cell_origin));

                        let cell_value = get_random_int(this._max_cell_value + 1);
                        // console.log("   Grid.draw() cell_value: " + cell_value);
						
						// console.log("   Grid.draw() pattern_data: " + JSON.stringify(this._pattern_data));

                        let cell_json_data = this._pattern_data[P5P.SHAPES_ARG][cell_value.toString()]; 
						// console.log("   Grid.draw() cell_json_data: " + JSON.stringify(cell_json_data));

                        let cell = new P5P.Cell(this._p5, this, cell_origin, cell_json_data);
                        // cells.push(cell);
                        cell.draw();
                        // this.p5.square( x, y, this.cell_size);  
                    } // for iy=0..this._height
                } // for ix=0..this._width
            }
            else { 
                p5p.rect( this._origin.x, this._origin.y, 
                          this._width  * this._cell_size.width, 
						  this._height * this._cell_size.height); 
            }
        } // P5P.Grid.draw()

        getAttribute( name ) {
            if ( this._component.getAttribute(name) != P5P.UNKNOWN_ATTRIBUTE ) return this._component.getAttribute(name);
            return P5P.UNKNOWN_ATTRIBUTE;
        } // P5P.Grid.getAttribute()

        setAttribute( name, value ) {
            this._component.setAttribute(name, value);
        } // P5P.Grid.setAttribute()

        get dirty() {
            return this._dirty;
        } // P5P.Grid getter for 'dirty'

        get bgColor() {
            return this._bg_color;
        } // P5P.Grid getter for 'bgColor'

        get cellSize() {
            return this._cell_size;
        } // P5P.Grid getter for 'cellSize'

        get patternData() {
            return this._pattern_data;
        } // P5P.Grid getter for 'patternData'

        get origin() {
            return this._origin;
        } // P5P.Grid getter for 'origin'

        get visible() {
            return this._visible;
        } // P5P.Grid getter for 'visible'

        set visible(value) {
            this._visible = value;
        } // P5P.Renderer setter for 'visible'

        computeOrigin() {
            let ox = this._p5.width  / 2.0 - (this._width  * this._cell_size.width) / 2.0;
            let oy = this._p5.height / 2.0 - (this._height * this._cell_size.height) / 2.0;
            return { x: ox, y : oy };
        } // P5P.Grid.computeOrigin()
    }, // P5P.Grid class

    Cell: class {
        constructor(p5, grid, origin, json_data ) {
			// console.log(">> New Cell")
			this._klass     = P5P.CELL_KLASS;
            this._p5        = p5;
            this._grid      = grid;            
            this._origin    = origin;
            this._cell_size = grid.cellSize;
			this._json_data = json_data;
			// console.log("   Cell constructor json_data: " + JSON.stringify(this._json_data));
			
			// console.log("   Cell Size: " + JSON.stringify(this._cell_size));

            let center_x = this._origin.x + this._cell_size.width/2;
            let center_y = this._origin.y + this._cell_size.height/2;
			this._center = { x: center_x, y: center_y };
			// console.log("   Cell center: " + center_x + ", " + center_y);
			
			// console.log("   Cell json_data: " +  JSON.stringify(json_data));
            // console.log("new Cell() json_data: " + JSON.stringify(this._json_data));
            // this._pattern_data = grid.patternData;
        } // P5P.Grid constructor
		
		get klass() {
            return this._klass;
        } // P5P.Cell getter for 'klass'

        get origin() {
            return this._origin;
        } // P5P.Cell getter for 'origin'

        get grid() {
            return this._grid;
        } // P5P.Cell getter for 'grid'

        get center() {
            return this._center;
        } // P5P.Cell getter for 'center'

        get size() {
            return this._cell_size;
        } // P5P.Cell getter for 'size'

        hexToRgb(hex) {
            hex = hex.replace('#', '');
        
            var bigint = parseInt(hex, 16);
        
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;
        
            return this._p5.color(r, g, b);
        } // P5P.Cell.hexToRgb()

        draw() {
            // console.log("   Cell.draw()");
			let bg_color = this._grid.bgColor;
			// console.log("   Cell bg_color BEFORE: " + bg_color);
			// console.log("   Cell json_data: " + JSON.stringify(this._json_data));
			if (this._json_data[P5P.BG_COLOR_ARG] != undefined) bg_color = this._json_data[P5P.BG_COLOR_ARG];
			// console.log("   Cell bg_color AFTER: " + bg_color);

            if ( this._visible) {
                this._p5.fill( this.hexToRgb(bg_color) );
                this._p5.rect( this._origin.x, this._origin.y, this._cell_size.width, this._cell_size.height );
            }
			this.drawShapes();
        } // P5P.Cell.draw()
		
		drawShapes() {
			let shape_count = this._json_data.length;
			// console.log(">> Cell.drawPattern() shape_count: " + shape_count);			
			
			for ( let i=0; i < shape_count; i++ ) {
				let shape_data = this._json_data[i];

				let shape_arg = "Rectangle";          
				if ( shape_data[P5P.SHAPE_ARG] != undefined ) shape_arg = shape_data[P5P.SHAPE_ARG];
				// console.log("   Cell shape_arg: " +  shape_arg);

				switch ( shape_arg ) {
					case P5P.LINE_SHAPE:      this._shape = new P5P.LineShape(this._p5,      this, this._origin, shape_data);
                             				  break;
											  
					case P5P.RECTANGLE_SHAPE: this._shape = new P5P.RectangleShape(this._p5, this, this._origin, shape_data);
                            				  break;
											  
					case P5P.ELLIPSE_SHAPE:   this._shape = new P5P.EllipseShape(this._p5,   this, this._origin, shape_data);
 					                          break;
											  
                    case P5P.POLYGRAM_SHAPE:  this._shape = new P5P.PolygramShape(this._p5,  this, this._origin, shape_data);
     					                      break;
				}    
				this._shape.draw();
            }
		} // P5P.Cell.drawShapes()
    }, // P5P.Cell class

    ComboShape: class extends SuperKLS.Shape {
        constructor(p5, cell, origin, json_data) {            
            super(p5, cell, origin, json_data); 
            
            let parts_arg = {};            
            if ( this._json_data[P5P.PARTS_ARG] != undefined )  parts_arg = this._json_data[P5P.PARTS_ARG];            
        } // P5P.ComboShape constructor

        draw() {   
        } // P5P.ComboShape.draw()
    }, // P5P.ComboShape class

    LineShape: class extends SuperKLS.Shape {
        constructor(p5, cell, origin, json_data) {            
            super(p5, cell, origin, json_data);
            // console.log(">> new LineShape"); 
			this._klass = P5P.LINE_SHAPE;
			
            this._start = this.getArgValue(P5P.START_ARG, P5P.CARDINAL_POINT_N);
            this._end   = this.getArgValue(P5P.END_ARG,   P5P.CARDINAL_POINT_S);
            this._thickness = this.getArgValue(P5P.THICKNESS_ARG, 1);
            // console.log("   start: " + start_arg + "  end: " + end_arg);            
        } // P5P.LineShape constructor

        draw() {   
            let start_pos = this.getPoint(this._start);
            let end_pos   = this.getPoint(this._end);     

            this._p5.stroke(this._color);
            this._p5.strokeWeight(this._thickness);
            
            this._p5.line(start_pos.x, start_pos.y, end_pos.x, end_pos.y);
            
            this._p5.strokeWeight(0.2);
        } // P5P.LineShape.draw()
    }, // P5P.LineShape class

    RectangleShape: class extends SuperKLS.Shape {
        constructor(p5, cell, origin, json_data) {            
            super(p5, cell, origin, json_data);
			this._klass = P5P.RECTANGLE_SHAPE;
        } // P5P.RectangleShape constructor

        draw() {   
            let width  = 15;
            let height = 10; 

            let center = this._cell.center;
            center.x -= width /2; 
            center.y -= height /2;        

            this._p5.fill("white");
            this._p5.rect(center.x, center.y, width, height);     
        } // P5P.RectangleShape.draw()
    }, // P5P.RectangleShape class

    EllipseShape: class extends SuperKLS.Shape {
        constructor(p5, cell, origin, json_data) {            
            super(p5, cell, origin, json_data);
			this._klass = P5P.ELLIPSE_SHAPE;
			
			this._arc    = this.getArgValue(P5P.ARC_ARG);
			this._center = this.getArgValue(P5P.CENTER_ARG, P5P.CARDINAL_POINT_NW);	
            // console.log("   this._arc: " + JSON.stringify(this._arc));			
        } // P5P.EllipseShape constructor

        draw() {          
            let center = this._cell.center;
            // this._p5.fill("white");
            this._p5.fill(this._fill_color);
			
			if (this._arc != undefined) {
				this._grid.renderer.drawArc(this, this._arc.start, this._arc.end);
				// draw_arc(this._arc.start, this._arc.end);
			}
			else {
				this._p5.ellipse(center.x, center.y, 15, 10);
			}
        } // P5P.EllipseShape.draw()
    }, // P5P.EllipseShape class

    PolygramShape : class extends SuperKLS.Shape {
        constructor(p5, cell, origin, json_data) {
            super(p5, cell, origin, json_data);
			// console.log(">> new PolygramShape");
			this._klass = P5P.POLYGRAM_SHAPE;
			
			this._is_star      = this.getArgValue(P5P.IS_STAR_ARG, false);
			this._vertex_count = this.getArgValue(P5P.VERTEX_COUNT_ARG, 5);
			// onsole.log("  this._cell:" + this._cell);
			
			// console.log("  this._cell.center:" + JSON.stringify(this._cell.center));
			this._center = this._cell.center;
        } // constructor()
        
        draw() {
            // console.log(">> PolygramShape.draw");
            // if (! this.visible) return;
            
            //let draw_origin = getP5().createVector(this.origin.x, this.origin.y);
            this.setStroke();
            this._p5.fill(this._fill_color);            
          
            let vertex_count = 5;
            if (this._vertex_count >=3 && this._vertex_count <=16) {
                vertex_count = this._vertex_count;
            }
            
            this._renderer.drawPolygram(this, this._center, vertex_count, this._cell.size, this._is_star);
        } // P5P.Polygram.draw()
    } // PolygramShape class
}; // P5P namespace

//console.log(">> After P5P definition");
//console.log(" p5p_sketch: " + p5p_sketch);
// let p5p = new p5(p5p_sketch);