var omarkerPosition=null;
var nmarkerPosition=null;
var markers=null;
var map=null;

var oldimgId=null;
var onetime=false;
function showMap()
{
	if(!onetime)
	{
		init();
		onetime=true;
	}
	
}

function init()
{
      
//Server that contains the shp information
var layerhost='http://globalmonitoring.sdstate.edu/geoserver/wms/reflect';  
 //Shape Name in the server
var layername='EastWeb:us_wnv_9912_mer';
//For data beyond 2010.
//var layername11='EastWeb:RSWNV11';
var layername11='EastWeb:us_wnv_9912_mer';
// Avoid pink error tiles
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;
OpenLayers.Util.onImageLoadErrorColor = "transparent";
// Map is in mercator this time, so over-ride the default
var options = {
	  //scales:[19568,9784,4892,2446,1223],
	  projection: new OpenLayers.Projection("EPSG:900913"),						//Google Mercator projection equivalnet to ESRI:Web spherical Mercator
	  displayProjection: new OpenLayers.Projection("EPSG:4326"), 				//Equivalent of WGS 84
	  units:"m",
	  maxResolution:"auto",
	  maxExtent: new OpenLayers.Bounds(-20037508,-20037508,20037508,20037508.34), //Earth bound for Google spherical mercator projection
	  controls:[new OpenLayers.Control.PanZoomBar(),new OpenLayers.Control.Navigation()]
	};
	// Create the map object
map = new OpenLayers.Map('mapdiv', options);	

// create Google Maps layer
var gmap = new OpenLayers.Layer.Google(
  "Google Streets", // the default
  {'sphericalMercator':true,minZoomLevel:3, maxZoomLevel:9}); 						//Fixed the zoom level Min=3 and Max=7
var gphy = new OpenLayers.Layer.Google(
    "Google Physical",
    {type: G_PHYSICAL_MAP,'sphericalMercator':true,minZoomLevel:3, maxZoomLevel:9});
    
var gsat = new OpenLayers.Layer.Google(
    "Google Satellite",
    {type: G_SATELLITE_MAP,'sphericalMercator':true,minZoomLevel:3, maxZoomLevel:9});
                  
var ghyb = new OpenLayers.Layer.Google(
                "Google Hybrid",
                {type: G_HYBRID_MAP, 'sphericalMercator':true,minZoomLevel:3, maxZoomLevel:9});


/* Non Google WMS overlayes WNV fixed classification type */
  	
wnvfx1999 = new OpenLayers.Layer.WMS(
	   '1999',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/jpeg', 'transparent':'true','styles':'ylorrd_mnrw_99'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
wnvfx2000 = new OpenLayers.Layer.WMS(
	   '2000',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_00'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  );   
  
wnvfx2001 = new OpenLayers.Layer.WMS(
	   '2001',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_01'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
wnvfx2002 = new OpenLayers.Layer.WMS(
	   '2002',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_02'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': true}
  ); 
  
wnvfx2003 = new OpenLayers.Layer.WMS(
	   '2003',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_03'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvfx2004 = new OpenLayers.Layer.WMS(
	   '2004',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_04'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
 wnvfx2005 = new OpenLayers.Layer.WMS(
	   '2005',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_05'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  );          
  
 wnvfx2006 = new OpenLayers.Layer.WMS(
	   '2006',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_06'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvfx2007 = new OpenLayers.Layer.WMS(
	   '2007',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_07'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvfx2008 = new OpenLayers.Layer.WMS(
	   '2008',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_08'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvfx2009 = new OpenLayers.Layer.WMS(
	   '2009',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_09'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvfx2010 = new OpenLayers.Layer.WMS(
	   '2010',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_10'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
 
wnvfx2011 = new OpenLayers.Layer.WMS(
	   '2011',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_11'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
wnvfx2012 = new OpenLayers.Layer.WMS(
	   '2012',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_mnrw_12'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  );   
             
/* Non Google WMS overlayes WNV quantile classification type */  
  
wnvqn1999 = new OpenLayers.Layer.WMS(
	   '1999',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_99'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
wnvqn2000 = new OpenLayers.Layer.WMS(
	   '2000',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_00'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  );   
  
wnvqn2001 = new OpenLayers.Layer.WMS(
	   '2001',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_01'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
wnvqn2002 = new OpenLayers.Layer.WMS(
	   '2002',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_02'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
wnvqn2003 = new OpenLayers.Layer.WMS(
	   '2003',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_03'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvqn2004 = new OpenLayers.Layer.WMS(
	   '2004',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_04'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
  
 wnvqn2005 = new OpenLayers.Layer.WMS(
	   '2005',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_05'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility':false}
  );          
  
 wnvqn2006 = new OpenLayers.Layer.WMS(
	   '2006',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_06'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvqn2007 = new OpenLayers.Layer.WMS(
	   '2007',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_07'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvqn2008 = new OpenLayers.Layer.WMS(
	   '2008',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_08'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvqn2009 = new OpenLayers.Layer.WMS(
	   '2009',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_09'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
wnvqn2010 = new OpenLayers.Layer.WMS(
	   '2010',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_10'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  ); 
 
wnvqn2011 = new OpenLayers.Layer.WMS(
	   '2011',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_11'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  );   
wnvqn2012 = new OpenLayers.Layer.WMS(
	   '2012',
	   layerhost, 
	   {'layers':layername,'tiled':true, 'format':'image/png', 'transparent':'true','styles':'ylorrd_qnrw_12'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': false}
  );     
  
 // State WMS Layer 
var state = new OpenLayers.Layer.WMS(
	   'Boundary',
	   layerhost, 
	   {'layers':'EastWeb:StateBoundary','tiled':true, 'format':'image/png', 'transparent':'true'},
	   {'opacity': 1.0, 'isBaseLayer':false, 'visibility': true}
  ); 
  
map.addLayers([gmap,gphy,gsat,ghyb,wnvfx1999,wnvfx2000,wnvfx2001,wnvfx2002,wnvfx2003,wnvfx2004,wnvfx2005,wnvfx2006,wnvfx2007,wnvfx2008,wnvfx2009,wnvfx2010,wnvfx2011,wnvfx2012,wnvqn1999,wnvqn2000,wnvqn2001,wnvqn2002,wnvqn2003,wnvqn2004,wnvqn2005,wnvqn2006,wnvqn2007,wnvqn2008,wnvqn2009,wnvqn2010,wnvqn2011,wnvqn2012,state]);
//map.addControl(new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('fakeswitch')}));
//Center the Map at Kansas 
var point = new OpenLayers.LonLat(-94.60,39.12);  
point.transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()); 
map.setCenter(point,1);  

//Add marker layer
markers = new OpenLayers.Layer.Markers("Markers");    
map.addLayer(markers);
//Add map scale
//var scaleline = new OpenLayers.Control.ScaleLine();
//map.addControl(scaleline);

// Load default legend	
DisplayLegend(layername,'ylorrd_mnrw_99');
document.getElementById('tsgraphic').innerHTML = "Click on Map to view WNV incidence time series";	
//////////// Start Getfeature Info ////////////////

//proxy layer      
OpenLayers.ProxyHost = "geoproxy.php?url=";
//Start Click event
this.map.events.register('click', map, function (e) {
		//Get feature info
        document.getElementById('tsgraphic').innerHTML = "Loading... please wait...";
        var maplayer=map.layers[31].params.LAYERS;         
       /* var params = {
            REQUEST: "GetFeatureInfo",
            EXCEPTIONS: "application/vnd.ogc.se_xml",
            BBOX: map.getExtent().toBBOX(),
            SERVICE: "WMS",
            VERSION: "1.1.1",
            X: parseInt(e.xy.x),
            Y: parseInt(e.xy.y),
            INFO_FORMAT: 'text/html',
            QUERY_LAYERS:layername,
            FEATURE_COUNT: "50",
            Layers:layername,
            Styles: '',
            WIDTH: map.size.w,
            HEIGHT: map.size.h,
            //format: 'image/png',
            //srs:'EPSG:900913'
           }; */
	        x1=parseInt(e.xy.x);
			y1=parseInt(e.xy.y);
	    	var url = layerhost 
	      + "?REQUEST=GetFeatureInfo"
	      + "&EXCEPTIONS=application/vnd.ogc.se_xml"
	      + "&BBOX=" + map.getExtent().toBBOX()
	      + "&X=" + x1
	      + "&Y=" + y1
	      + "&INFO_FORMAT=text/plain" // [Supports: GML,plain,&HTML- No xml]
	      + "&QUERY_LAYERS=" +maplayer
	      + "&LAYERS="+maplayer
	      + "&FEATURE_COUNT=50"
	      + "&SRS=EPSG:900913"
	      + "&STYLES="
	      + "&WIDTH=" + map.size.w
	      + "&HEIGHT=" + map.size.h;
        OpenLayers.loadURL(url, '', this, setHTML);
        OpenLayers.Event.stop(e);
    }); 	
 	
/////////////End Getfeature Info//////////////////
}
 
////////////////// Start Map layers' visibilty change ////////////
function getClassification()
{
	var fixradio= document.getElementById("fixradio");
	var manradio= document.getElementById("manradio");
	if(fixradio.checked==true)
	{
		return fixradio.value;
	}
	else
	{
		return manradio.value;
	}
}

function changeLayer(opacity,layer)
 {	
 	var layername='EastWeb:us_wnv_9912_mer';
 	var layername11='EastWeb:us_wnv_9912_mer'; 	
 	//var classtype= document.getElementById("classification").value;
 	var classtype=getClassification();
 	var value=layer;
 	var opacity=opacity/10;			// Openlayers only support the opacity between 0.0-1.0.
 	var maylayerCount=31;			// Upto 2011 it as 29
 	if(classtype=="manual")
 	{
 		DisplayLegend(layername,'ylorrd_mnrw_02'); // All mannual Incidene rates have same legend so no need to put redundent legend class in each images.
 		switch(value)
 		{
 			case 1999:
 			var n=4;
 			//alert(OpenLayers.getScale());
 			this.map.layers[n].setVisibility(true);
			this.map.layers[n].setOpacity(opacity);
 			 for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			
 			break;
 			case 2000:
 			var n=5;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2001:
 			var n=6;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			
 			case 2002:
 			var n=7;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2003:
 			var n=8;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2004:
 			var n=9;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2005:
 			var n=10;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2006:
 			var n=11;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2007:
 			var n=12;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2008:
 			var n=13;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2009:
 			var n=14;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2010:
 			var n=15;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2011:
 			var n=16;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
			
			case 2012:
 			var n=17;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			
 			default:
 			alert(" Opps, Error in Map Classification !!")
 		}
 	}
 	else
 	{
 		switch(value)
 		{
 			case 1999:
 			var n=18;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_99');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			 for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			
 			break;
 			case 2000:
 			var n=19;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_00');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2001:
 			var n=20;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_01');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			
 			case 2002:
 			var n=21;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_02');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2003:
 			var n=22;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_03');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2004:
 			var n=23;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_04');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2005:
 			var n=24;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_05');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2006:
 			var n=25;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_06');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2007:
 			var n=26;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_07');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2008:
 			var n=27;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_08');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2009:
 			var n=28;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_09');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2010:
 			var n=29;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_10');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			case 2011:
 			var n=30;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_11');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
 			
			case 2012:
 			var n=31;
 			this.map.layers[n].setVisibility(true);
 			this.map.layers[n].setOpacity(opacity);
 			DisplayLegend(layername,'ylorrd_qnrw_12');
			for(var i=4;i<n;i++)
			{
				this.map.layers[i].setVisibility(false);		
			}
 			for(var i=n+1;i<=maylayerCount;i++)
 			{
 				this.map.layers[i].setVisibility(false);
 			}
 			break;
			
 			default:
 			alert(" Opps, Error in Map Classification !!")
 		}
 	}

}
////////////////// End Map layers' visibilty change ////////////

//Chagne classification types Fixed or Time Series
function changeClassification()
{
	changeLayer($( "#opaslider" ).slider( "value"),$( "#mapslider" ).slider( "value" ));
}
// Set different background types google satellite,hybrid,physical,streets
function setBackground()
 { 	
 	this.map.setBaseLayer(this.map.layers[1]);
 	var maptype= document.getElementById("background").value;
 	switch(maptype)
 	{
 		case "streets":
 		this.map.setBaseLayer(this.map.layers[0]);
 		break;
 		case "satellite":
 		this.map.setBaseLayer(this.map.layers[2]);
 		break;
 		case "terrain":
 		this.map.setBaseLayer(this.map.layers[1]);
 		break;
 		case "hybrid":
 		this.map.setBaseLayer(this.map.layers[3]);
 		break;
 		default:
 		alert("Error in Map type selection");
 	}
 }



///////////////////////////////// Start Jquery ///////////////////////////////////


$(document).ready(function() { // It is equivalent to $(function(){});
	//Map slider	
	$( "#mapslider" ).slider({
			
			range: "min",
			value: 2002,
			min: 1999,
			max: 2012,
			slide: function( event, ui ) {
				$( "#yearlabel" ).val(ui.value );
				changeLayer($( "#opaslider" ).slider( "value" ),ui.value);
				//$('select').selectToUISlider();
			}
		});
		// To dispaly incidence year
		$( "#yearlabel" ).val( $( "#mapslider" ).slider( "value" ) ); 
		
		//Opacity Sider
		$( "#opaslider" ).slider({		
		range: "min",
		value: 10,
		min: 1,
		max: 10,
		slide: function( event, ui ) {
			//$( "#yearlabel" ).val(ui.value );
			changeLayer(ui.value,$( "#mapslider" ).slider( "value" ));
			//$('select').selectToUISlider();
		}
	});
	
	///////////////////////
	// $("#next").click(function(){
		// var opaValue= $( "#opaslider" ).slider( "value" );
		// var mapValue= $( "#mapslider" ).slider( "value" );
		// mapValue=mapValue+1;
		// //alert(mapValue);
		// changeLayer(opaValue,mapValue);
		// $("#mapslider").slider('value', mapValue);
	// });
		
	///////////////////////
	$('#prev, #next').click(function(){
	var opaValue= $( "#opaslider" ).slider( "value" );
	var currentMap=$( "#mapslider" ).slider( "value" );
	var nextMap=$(this).is("#prev")?(currentMap-1):(currentMap+1);
	
	$('#prev, #next').show();
	    if(nextMap <= 1999)
		{
			$('#prev').hide();

		}
		else if(nextMap >= 2013 - 1)
		{
			$('#next').hide();
		}
		// To dispaly incidence year
		 
		changeLayer(opaValue,nextMap);
		$("#mapslider").slider('value', nextMap);
		$( "#yearlabel" ).val( $( "#mapslider" ).slider( "value" ) );

	});

	////////////////////////////////////////////
	$.fn.extend({
		mapsliderLabels:function()
		{
			
	        //$sliderdiv.css({'font-weight': 'normal'});
	        $('#mapslider').prepend('<span class="mapLabel" style="left:-2px;">99</span>')   //Append labels to map slider bar
	       	.append('<span class="mapLabel" style="left:4px;">00</span>')
	        .append('<span class="mapLabel" style="left:18px;">01</span>')
	        .append('<span class="mapLabel" style="left:30px;">02</span>')
	        .append('<span class="mapLabel" style="left:43px;">03</span>')
	        .append('<span class="mapLabel" style="left:55px;">04</span>')
	        .append('<span class="mapLabel" style="left:69px;">05</span>') 
	        .append('<span class="mapLabel" style="left:83px;">06</span>')
	        .append('<span class="mapLabel" style="left:97px;">07</span>')
	        .append('<span class="mapLabel" style="left:110px;">08</span>')
	        .append('<span class="mapLabel" style="left:120px;">09</span>')
	        .append('<span class="mapLabel" style="left:135px;">10</span>')
			.append('<span class="mapLabel" style="left:147px;">11</span>')
	        .append('<span class="mapLabel" style="left:158px;">12</span>');
			
		},
		opasliderLabels:function()
		{
			$('#opaslider').prepend('<span class="opaLabel" style="left:-10px;">Highest</span>')    //Append labelst to transparency slider bar
	      	.append('<span class="opaLabel" style="left:110px;">Lowest</span>');
	      	//.append('<p class=opaLabel>Transparency </p>');
		}
		
	});
		
	$('#mapslider').mapsliderLabels();													// Call the mapslider label 
	$('#opaslider').opasliderLabels();													// Call the transparency label			
	
	
	$('.tooltip').tooltip({width: '280px',height: '51px'});							//Classification type tooltip

});


///////////////////////////////// End Jquery ///////////////////////////////////

/////////////////////////////////Start Time Series Graphics//////////////////////
function setHTML(response)
{	
	//Read XML from the Get Request method
	//document.getElementById('nodelist').innerHTML = response.responseText;
        
	//Parse XML elements to generate chart 	
	//yearlyCases= new Object();	
	var extract=response.responseText.split("=");
	//alert(extract);
	
	var county= extract[3].slice(0,-10);		//Extract county	
	var pop=extract[5].slice(0,-6);			//Extract Population
	var wnv99=extract[6].slice(0,-6);		//Extract incidence rates
	var wnv00=extract[7].slice(0,-6);
	var wnv01=extract[8].slice(0,-6);
	var wnv02=extract[9].slice(0,-6);
	var wnv03=extract[10].slice(0,-6);
	var wnv04=extract[11].slice(0,-6);
	var wnv05=extract[12].slice(0,-6);
	var wnv06=extract[13].slice(0,-6);
	var wnv07=extract[14].slice(0,-6);
	var wnv08=extract[15].slice(0,-6);
	var wnv09=extract[16].slice(0,-6);
	var wnv10=extract[17].slice(0,-6);	
	var wnv11=extract[18].slice(0,-6);
	var wnv12=extract[19].slice(0,-9);
	
	var llat=extract[34].slice(0,-4); 		//Extract lat value
	var llon=extract[35].slice(0,-6); 		//Extract lon value
	var state=extract[36].slice(0,-9);		//Extract state
	state=state.split('-');
	state=state[0];
		
   // alert("state:" + state + "\n county:" + county + "\n pop:" + pop + "\n 99:" + wnv99 + "\n 00:" + wnv00 + "\n 01:" + wnv01 + "\n 02:" + wnv02 + "\n 03:" + wnv03 + "\n 04:" + wnv04 + "\n 05:" + wnv05 + "\n 06:" + wnv06 + "\n 07:" + wnv07 + "\n 08:" + wnv08 + "\n 09:" + wnv09 + "\n 10:" + wnv10 + "\n 11:" + wnv11+ "\n 12:" + wnv12+"\n"+llon+"\n"+llat);                                                                             

	/*
	yearlyCases["state"]=state;
	yearlyCases["county"]=county;
	yearlyCases["pop"]=pop;
	yearlyCases["wnv99"]=wnv99;
	yearlyCases["wnv00"]=wnv00;
	yearlyCases["wnv01"]=wnv01;
	yearlyCases["wnv02"]=wnv02;
	yearlyCases["wnv03"]=wnv03;
	yearlyCases["wnv04"]=wnv04;
	yearlyCases["wnv05"]=wnv05;
	yearlyCases["wnv06"]=wnv06;
	yearlyCases["wnv07"]=wnv07;
	yearlyCases["wnv08"]=wnv08;
	yearlyCases["wnv09"]=wnv09;
	yearlyCases["wnv10"]=wnv10;
	*/
		
	//google.load("visualization", "1", {packages:["corechart"]});
	
	var chartOptions={'fontName' : 'Arial',width: 336, height: 168,colors:['FF0000'],title:county+','+state+"  "+' Population: '+parseInt(pop),vAxis:{title: 'WNV cases',maxValue:8},hAxis:{title:"Years"},legend:"none",pointSize:2};
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Cases');  
	//Add data on Google chart
	data.addRow(["99",parseInt(wnv99)]);  	
	data.addRow(["00",parseInt(wnv00)]);
	data.addRow(["01",parseInt(wnv01)]);
	data.addRow(["02",parseInt(wnv02)]);
	data.addRow(["03",parseInt(wnv03)]);
	data.addRow(["04",parseInt(wnv04)]);
	data.addRow(["05",parseInt(wnv05)]);
	data.addRow(["06",parseInt(wnv06)]);
	data.addRow(["07",parseInt(wnv07)]);
	data.addRow(["08",parseInt(wnv08)]);
	data.addRow(["09",parseInt(wnv09)]);
	data.addRow(["10",parseInt(wnv10)]);
	data.addRow(["11",parseInt(wnv11)]); 
	data.addRow(["12",parseInt(wnv12)]);
	//Draw google chart   
   	var chart= new google.visualization.LineChart(document.getElementById('tsgraphic'));
   	chart.draw(data,chartOptions); 
   	
	
	//Add position marker on the Google map	    
	/*
	var location = new OpenLayers.LonLat(llon,llat);			
   	var size = new OpenLayers.Size(21,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png',size,offset);   
    markers.addMarker(new OpenLayers.Marker(location,icon.clone()));
	
	markers.removeMarker(omarkerPosition);
    nmarkePosition = new OpenLayers.Marker();
    omarkerPosition=nmarkePosition;
    markers.addMarker(nmarkePosition);
    */
	
    var nmarkerPosition = new OpenLayers.LonLat(llon,llat);   		
   	var size = new OpenLayers.Size(20,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    //var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png',size,offset);
    var icon = new OpenLayers.Icon('images/marker-blue.png',size,offset);     
    markers.clearMarkers(); //Clear all old markers  
    omarkerPosition=nmarkerPosition;
    markers.addMarker(new OpenLayers.Marker(nmarkerPosition,icon));
    	
    var newpopup = new OpenLayers.Popup.Anchored("countyName",
                   new OpenLayers.LonLat(llon,llat),
                   new OpenLayers.Size(200,15),
                   "<div style='font-size:.9em;font-color:black'><em>"+county +"," +state+"</em></div>",null,
                   true);
	        
	       // newpopup.border = '1px solid black';
            newpopup.opacity = .7;            
            newpopup.panMapIfOutOfView = true;
            newpopup.autoSize=true;
            newpopup.backgroundColor="#878787";
            // Force the popup to always open to the top-right
			newpopup.calculateRelativePosition = function () {
			    return '1';
			}
            map.addPopup(newpopup,true);
		
    
    
    
}
/////////////////////////////////End Time Series Graphics////////////////////////

//Generate dynamic legened Images
function DisplayLegend(layername,legendstyle)
{
	var lgimg=document.getElementById('legenddiv');
	if(oldimgId!=null||oldimgId!=undefined)
	{	//alert(oldimgId);
		lgimg.removeChild(document.getElementById(oldimgId));
		
	}	
	var layerhost='http://globalmonitoring.sdstate.edu/geoserver/wms/reflect';
	//var layername='EastWeb:RSWNV';
	// var legendstyle='ylorrd_qnrw_10';
	var layername=layername;
	var legendstyle=legendstyle;	
	var lg_img = document.createElement('img');
	//var imgId=legid;
	var imgId='legend'+new Date().getTime();
	oldimgId=imgId;
	lg_img.src=layerhost+"?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=35&HEIGHT=18&LAYER="+layername+"&LEGEND_OPTIONS=forceRule:True;dx:0.2;dy:0.2;mx:0.2;my:0.2;borderColor:0000ff;border:true;fontColor:000000;bgColor:a5a5a5;fontSize:12&STYLE="+legendstyle;
	lg_img.setAttribute('id',imgId);
	lg_img.style.position = "relative";
	document.getElementById('legenddiv').appendChild(lg_img);
	
	
}  
