<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>West Nile Virus Incidence in the United Sates </title>
<link rel='shortcut icon' href='http://globalmonitoring.sdstate.edu/eastweb/maps/wnv1999_2011/images/favicon.ico' type='image/x-icon' />
<!-- Metadata Starts-->
<meta name="author" content="Aashis Lamsal,Michael Wimberly,Aashis,Ashis,Lamsal,Wimberly,Mike Wimberly,Mike"/>
<meta name="description" content="West Nile virus is a prototypical emerging pathogen that is indigenous to Africa, Asia, Europe, and Australia. The virus spread rapidly across the North American continent after invading via the New York City metropolitan area during the summer of 1999. Web based geovisualization of the spatio-temporal patterns of human WNV cases offers an opportunity for exploratory analysis of the progression of the WNV epidemic and subsequent patterns of endemic WNV."/>
<meta name="keywords" content="West Nile Virus, Wnv, West Nile virus mapping, infectious disease mapping,web mapping,NIH mosquito projects,NIH,EASTweb,Aashis Lamsal,Aashis,Michael Wimberly,Wimberly,Mike,Michael,Lamsal,Ting-Wu,Ting-Wu Chuang,South Dakota State University,Geogrpahic Information Science Center of Excellence,GIS,web maps,web portal, mosquito portals,incidence mapping,disease incidence mappping,west nile incidence,GIScCE brookings"/>
<!-- Metadata Ends-->
<link href="css/style.css" rel="stylesheet" type="text/css"/>
<link href="css/style_r.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="css/thickbox.css" type="text/css" media="screen" />
<!-- <link href="css/master-reset.css" rel="stylesheet" type="text/css"> -->
<!--Interactive Scripts-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script type="text/javascript" src="js/newinteractive.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
<!-- Google API Start -->
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true&amp;key=ABQIAAAAzJxrThr6CEVz6mTO1VZeERT4--c_gnEmyMDCYhxacJWtfBHA1RSDpHRvhDu100ZpYGN4uYxzIr_AYQ" type="text/javascript"></script> 
<script type="text/javascript" src="js/OpenLayers.js"></script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script> <!--Load the AJAX API for charting-->
<!-- Google API End -->
<!-- Jquery UI Start -->
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/themes/base/jquery-ui.css" type="text/css" media="all" />
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js" type="text/javascript"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/i18n/jquery-ui-i18n.min.js" type="text/javascript"></script>
<script src="js/tooltip.jquery.js" type="text/javascript"></script>
<!-- Jquery End -->
<!--Current pageScripts -->
<script type="text/javascript">
// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});      
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback();
</script>
</head>
<body onload="showMap();">
<div id="wr">
<div id="hdr">
<?php include("includes/header.php");?>
</div>
<div id="bdy-part">
 <div class="clr"></div>
	<p align="left" class="para" style="width:1080px;margin-left:10px;" >
		West Nile virus (WNV) is a flavivirus vectored primarily by culicine mosquitoes with birds as the major natural reservoir hosts. WNV disease in humans ranges in severity from asymptomatic infections to mild fever to life-threatening neuroinvasive disease. Prior to 1999, WNV was found in Africa, Asia, Europe, the Middle East, and Australia. The first human cases in the Western Hemisphere were detected in New York City during the summer of 1999. The virus subsequently dispersed across North America, reaching the Pacific Coast in 2003 and spreading to all 48 of the conterminous United States by 2006. Surveillance data documenting the spread of WNV offers a rare opportunity to visualize and study the geographic expansion of an emerging infectious disease along with its subsequent endemic cycles. Therefore, we developed this web visualization tool to facilitate the exploratory analysis of the spatial and temporal patterns of WNV in the United States. 
	</p>
	<div class="clr"></div>
<div id="main-cnt">
<div>
	<!-- Interactitve Mapping starts from here -->
	<div id="interactive_map" style="display:block">
		<div style="position:relative">
			<div id="mapdiv"></div>
			<div id="changebackground">
				<input type="text" id="yearlabel"/>
				<select name="bckgroundtype" id="background" onchange="setBackground();">
				<option selected="selected" value="streets">Streets</option>
				<option value="satellite">Satellite</option>
				<option value="terrain">Terrain</option>
				<option value="hybrid">Hybrid</option>
				</select>
				<!---Next previous button starts from here.
				<input type="button" id="prev" value="<<"/>
				<input type="button" id="next" value=">>"/> -->	
			</div>
					
	
		</div>
	</div>

	<!--- Map control container starts from here-->
	<div style="float:left;height:433px;" id="mapcontrol_container">
	<div id="slidercontainer">
		<div class="legendlabels"><a href="javascript:;" id="Fixed: Map legend remains fixed over time. Time-Varying: Map legend is different for each year." class="tooltip">Classification Type</a></div>
		<div id="radiodiv"> 
		<!-- <select name="classification" id="classification" onchange="changeClassification();" style="margin-bottom: 7px; margin-top: 7px; margin-left: 5px">
			<option selected="selected" value="manual">Fixed</option>
			<option value="quantile">Time-varying</option>
		</select>
		-->
		<input type="radio" value="manual" name='classification' id="manradio" onclick="changeClassification();" checked="checked">Fixed</input>
		<input type="radio" value="quantile" name='classification' id="fixradio" style="position:absolute;left:135px;" onclick="changeClassification();"><span style="position:relative;left:94px;" >Time-varying</span></input>

		</div>
		<div class="legendlabels" style="height:30px;width:338px;"><a href="javascript:;" id="Move the slider bar to navigate through time." class="tooltip" >Year</a>
			<input type="button" id="next" />
			<input type="button" id="prev"/>
		</div>
		<div id="mapslider"> </div>
		<div class="legendlabels" style="margin-top:20px;"><a href="javascript:;" id="Move the slider bar to change the transparency of choropleth map." class="tooltip" >Transparency</a></div>
		<div id="opaslider"></div>
		<div class="clr">&nbsp;</div>
		<div class="legendlabels"><a href="javascript:;" id="Click on the map to visualize the time series in a specific county." class="tooltip">Incidence Time Series</a></div>
		<div id="timeseriesgraphic">
			<div id="tsgraphic"> </div>
		</div>
	</div>
	
	</div>
</div>
<div class="clr"></div>
<div>
	<p style="width:1080px;margin-left:10px;margin-top:15px;">
		Data were obtained from the USGS/CDC ArboNET Maps website (<a style="color:#0066FF;"href="http://diseasemaps.usgs.gov">http://diseasemaps.usgs.gov</a>) and include the total number of reported cases (neuroinvasive and non-neuroinvasive) of human WNV disease for each county. This website was developed by the Geographic Information Science Center of Excellence at South Dakota State University as part of the Epidemiological Applications of Spatial Technologies (EASTWeb) project and is supported by the National Institutes of Health, National Institute of Allergy and Infectious Diseases (Grant R01-AI079411). Its contents are solely the responsibility of the authors and do not necessarily represent the official views of the NIH. For more information about the EASTWeb project contact <a style="color:#0066FF;" href="http://globalmonitoring.sdstate.edu/people.php?name=Wimberly">Dr. Michael C. Wimberly</a>.	</p>
</div>
</div>
<!-- leggend layer start from here -->

<div style="left:935px;top:-285px;z-index:1000; width:160px; height: 169px;overflow:hidden;" id="legenddiv">
<br/>
<p style="font-weight:bold;background:#a5a5a5;">WNV Incidence per 100,000<p>
</div>
</div>
<div id="footer">
<?php include("includes/footer.php");?>
</div> 
</div>
</body>

</html>
