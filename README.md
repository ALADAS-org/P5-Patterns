## P5-patterns 0.0.21
![](https://github.com/ALADAS-org/p5-patterns/blob/master/screenshots/Truchet_PieQuarter.png) 
![](https://github.com/ALADAS-org/p5-patterns/blob/master/screenshots/Truchet_C64.png) 
![](https://github.com/ALADAS-org/p5-patterns/blob/master/screenshots/PolygramDemo.png)   

Description    
This is an extension for `P5.js` (2D client side drawing library).
The purpose of this extension is to ease the generation of tiled/wallpaper/grid patterns. 
The pattern design is described by a `JSON` file (e.g. `Truchet_PieQuarter.json`).

NB: A custom _Json Preprocessor_ (https://github.com/ALADAS-org/json-preprocessor) is used.
This is optional of course but thise allows the usage of _Named colors_ (instead of the RGB values in hexadecimal).
 
1. Release Notes    
   + 1.1. `0.0.21`    
   - Usage of a custom `Json Preprocessor` for the _color palette_ of `Truchet_PieQuarter` and `PolygramDemo` patterns    
   - Support of 3 and 4 branches stars (_Shuriken like_ shapes)    
   
   + 1.2. `0.0.20`: added `Polygram` shape (`Polygon` an `N-star`) 

2. Usage    
   + 2.1. Install    
   * Open a Command Line (cmd.exe) 
   * Input these command: 
       - `git clone https://github.com/ALADAS-org/p5-Patterns.git`
       - `cd p5-Patterns`
       - `npm install`    
	   
   + 2.2. Launch a local _Http server_ with `run.bat` script
   
   + 2.3. Double click on `demo`: it's a `URL` shortcut (`128.0.0.1:8080/`)

3. Pattern language (JSON)    

   + _Name_    
   pattern's name, optional but useful if you want to display it in the title bar or status bar
   
   + _Description_    
   Explains the pattern design, typically it may provide URL(s) to document the principle used (e.g. _Truchet_
   
   + _Categories_    
   Used to classify patterns (e.g. _Truchet_)
   
   + _GridSize_    
   _Grid_ size in _Cell_ unit, the number of _Cells_ in a row (`width`) and column (`height`) of the _Grid_ (e.g. `{ "width": 27, "height": 15 }`)
   
   + _CellSize_    
   _Cell_ size in _pixel_ unit (e.g. `{ "width": 20, "height": 20 }`)
   
   + _MaxCellValue_    
   Each _Cell_ should have a _Value_ (which is typically random), thus _MaxCellValue_ defines the last included version of the _values interval_ (e.g. [0..7], the first value of the interval is always 0)  
   
   + _BackgroundColor_    
   Defines the _Background color_ of the _Grid_ (e.g. `#000000` for Black)
   
   + _Shapes_    
   Defines the _Shapes_ for each possible _Cell value_ (e.g. `[0..MaxCellValue]`). 
   Available shapes: `Line`, `Rectangle`, `Ellipse` (`Ellipse` and `Arc of Ellipse`), `Polygram` (`Polygon` and `N-star`).    
   Please find below an extract from `Truchet_PieQuarter.json` pattern definition file.
```	
	"@include": { "src": "includes/color_palette_Sepia.json", "#type": "COLOR_PALETTE" },
	
    "Shapes": {	
	    "0": [ { "Shape": "Ellipse", "FillColor": "$DoubleSpanishWhite", "Arc": { "start": 0, "end": 90 } } ],
        "1": [ { "Shape": "Ellipse", "FillColor": "$IndianKhaki", "Arc": { "start": 90, "end": 180 } } ],		
		"2": [ { "Shape": "Ellipse", "FillColor": "$Shadow", "Arc": { "start": 180, "end": 270 } } ],	
        ...			  
     }
```

Note: To force refresh it may be needed to use `CTRL F5` to force refresh of the Browser cache. In some cases it's better to close and restart the local _Http server_ 

  