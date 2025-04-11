##P5-patterns 0.0.19
![](https://github.com/ALADAS-org/p5-patterns/blob/master/screenshots/Truchet_PieQuarter.png)   

Description    
This is a extension for `P5.js`, it's purpose is to ease the generation of tiled/wallpaper/grid patterns. The pattern design is described by a `JSON` file (e.g. `Truchet_c64.json`) 

1. Usage 
   +1.1. Install
   * Open a Command Line (cmd.exe) 
   * Input these command: 
       * `git clone https://github.com/ALADAS-org/P5-Patterns.git`
       * `cd P5-Patterns`
       * `npm install` (this wwill install `http-server`)        
   +1.2. Launch a local http server with `run_server.bat` script
   +1.3. Double click on `test`: it's a URL shortcut (128.0.0.1:8080/)

2. Pattern language grammar 
   + _Name_: pattern's name, optional but useful if you want to display it in the title bar or status bar 
   + _Description_: explains the pattern design, typically it may provide URL(s) to document the principle used (e.g. _Truchet_)  
   + _Categories_: used to classify patterns (e.g. _Truchet_)
   + _GridSize_: _Grid_ size in _Cell_ unit, the number of _Cells_ in a row (`width`) and column (`height`) of the _Grid_ (e.g. `{ "width": 27, "height": 15 }`)
   + _CellSize_: _Cell_ size in _pixel_ unit (e.g. `{ "width": 20, "height": 20 }`)
   + _MaxCellValue_: each _Cell_ should have a _Value_ (which is typically random), thus _MaxCellValue_ defines the last included version of the _values interval_ (e.g. [0..7], the first value of the interval is always 0)  
   + _BackgroundColor_: defines the _Background color_ of the _Grid_ (e.g. `#000000` for Black)
   + _Shapes_: defines the _Shapes_ for each possible _Cell value_ (e.g. `[0..MaxCellValue]`)
   ```
     "Shapes": {
        "0": { "Shape": "Line", "Start": "NW", "End": "SE", 
               "Color": "#ffffff", "FillColor": "#000000", "Thickness": 4 },

        "1": { "Shape": "Line", "Start": "SW", "End": "NE", 
               "Color": "#ffffff", "FillColor": "#000000", "Thickness": 4 }			  
    }
   ```


Note: To force refresh it may be needed to use `CTRL F5` to force refresh of the Browser cache. In some cases it's better to close and restart the local _Http server_ 