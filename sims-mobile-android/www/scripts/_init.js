var infoWindow;
var zoomlevel = document.getElementById('zoomlevel');
var zoomlevel2 = document.getElementById('zoomlevel2');
var settings = document.getElementById('AppMode');
var map;
var mapc;
var myCenter = new google.maps.LatLng(-6.314993, 143.95555);
var mymap = new MyMapType();
var mymapc = new MyMapType2();

var results; // = JSON.parse('{"observations":[{"id":"1","surveillanceActivity":"1617Q5AS_06","animalType":"Wild","commonName":"Pig","taxon":"Suss scrofa","groupNum":"10","obsDate":"21-OCT-2017","userName":"Shen, Angela","latitude":"-10.579917","longitude":"142.219391","datum":"WGS84","obsProximity":"3","adultNumber":"10","adultPercent":"5%","maleNumber":"5","malePercent":"2%","juvNumber":"8","juvPercent":"4%","femaleNumber":"4","femalePercent":"1%","aunkNumber":"0","aunkPercent":"0%","gunkNumber":"0","gunkpercent":"0%","optSyndromes":"2","syndText1":"Abnormal aggression, attacking other animals, people or objects","syndNumber1":"3","syndPercent1":"40%","syndComments1":"Few","syndText2":"Wobbly, weakness, staggers, unable to rise or paralysed","syndNumber2":"6","syndPercent2":"50%","syndComments2":"Few Nmbers","addlObsrvns":"Nothing","status":"0"}]}');
var newMarker;
var db = null;
var markers = [];
var markersc = [];
var table;
var statusElem = document.getElementById('status');
var dbElem = document.getElementById('dbready');
var curIdx;
var curLat;
var curLng;
var curObType;

var AppMode = 'IAH';
/* AH Initialized variables */
var species = '<div class="row col-md-12 sims dynarow"><div class="form-group col-xs-2"><input type="text" class="form-control speciesText"/></div><div class="form-group col-xs-2"><label>Taxon Name<span class="bold-red">*</span></label></div><div class="form-group col-xs-2"><input type="text" class="form-control taxonText" placeholder="Taxon Name" name="taxonName"></div><div class="form-group col-xs-3" ><label>Number in Group<span class="bold-red">*</span></label></div><div class="form-group col-xs-1"><input type="text" class="form-control" placeholder="#" name="Number"></div><div class="form-group col-xs-1"><button type="button" class="btn btn-danger btn-circle btn-xs pull-right removeSpecies"><i class="fa fa-times-circle fa-2x"></i></button></div></div>';
var fieldtest = '<div class="row col-md-12 sims dynarow fieldtest"><div class="form-group col-xs-12"><label class="ftName">Field Test 1</label><i class="fa fa-times-circle fa-2x text-default removeFieldTest pull-right"></i></div><div class="form-group col-xs-6"><label>Fieldtest Name<span class="bold-red">*</span></label><input type="text" class="form-control hide" placeholder="Field Test ID" name="ftId"/><select class="form-control" name="fieldTest"></select></div><div class="form-group col-xs-6"><label>&nbsp;</label><br/><input type="checkbox" name="ftInvalid" class="minimal"><label>Invalid</label></div><div class="row col-xs-12 diseases indentLeft"></div><div class="form-group col-xs-11"><label>Field Test Comment</label><input type="text" class="form-control" name="ftComment"/></div></div>';
var preFieldtest = '<div class="row col-md-12 sims dynarow fieldtest"><div class="form-group col-xs-12"><label class="ftName">Field Test 1</label><i class="fa fa-times-circle fa-2x text-default removePreFieldTest pull-right"></i></div><div class="form-group col-xs-6"><label>Fieldtest Name<span class="bold-red">*</span></label><input type="text" class="form-control hide" placeholder="Field Test ID" name="ftId"/><select class="form-control" name="pFieldTest"></select></div><div class="form-group col-xs-6"><label>&nbsp;</label><br/><input type="checkbox" name="ftInvalid" class="minimal"><label>Invalid</label></div><div class="row col-xs-12 diseases indentLeft"></div><div class="form-group col-xs-11"><label>Field Test Comment</label><input type="text" class="form-control" name="ftComment"/></div></div>';
var maggotSample = '<div class="row col-md-12 sims dynarow maggotSample"><div class="form-group col-xs-12"><label class="sampleName">Maggot Sample 1</label><i class="fa fa-times-circle fa-2x text-default removeMaggotSample pull-right"></i></div><div class="form-group col-xs-12"><label>Sample Field Id<span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field Id" name="msfieldID" value="1"></div><div class="form-group col-xs-12"><label>Sample Type<span class="bold-red">*</span></label><select class="form-control" name="msType"><option selected>Maggots</option></select></div><div class="form-group col-xs-12"><label>Pathogen/Test Type</label><br /><input type="checkbox" class="form-control minimal" name="swfExcl" value="swfExcl" checked><label>SWF Exclusion</label></div><div class="form-group col-xs-12"><label>Additional Comment</label><textarea class="form-control" rows="3" name="msNotes" placeholder="Notes ..."></textarea></div></div>';
var sample = '<div class="row col-md-12 sims dynarow sample"><div class="form-group col-xs-12"><label class="sampleName">Sample 1</label><i class="fa fa-times-circle fa-2x text-default removeSample pull-right"></i></div><div class="form-group col-xs-6"><label>Sample Field ID</label><input type="text" class="form-control nextid" readonly placeholder="Sample Field ID" value="1" name="sampleId"></div><div class="form-group col-xs-6"><label>Sample Type</label><select class="form-control" name="sampleType"></select></div><div class="form-group col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 sims testTypes indentLeft"></div></div><div class="form-group col-xs-12 border-bottom"><label>Additional Comments</label><textarea class="form-control" rows="6" name="sAddlComments"></textarea></div></div>';
var preSample = '<div class="row col-md-12 sims dynarow sample"><div class="form-group col-xs-12"><label class="sampleName">Sample 1</label><i class="fa fa-times-circle fa-2x text-default removePreSample pull-right"></i></div><div class="form-group col-xs-6"><label>Sample Field ID</label><input type="text" class="form-control nextid" readonly placeholder="Sample Field ID" value="" name="sampleId"></div><div class="form-group col-xs-6"><label>Sample Type</label><select class="form-control" name="sampleType"></select></div><div class="form-group col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 sims testTypes indentLeft"></div></div><div class="form-group col-xs-12 border-bottom"><label>Additional Comments</label><textarea class="form-control" rows="6" name="sAddlComments"></textarea></div></div>';
var samples = 0;
var fieldTests = 0;
/* AH Initialized variables */

/* PH Initialized variables */
var numPlants = 0;
//var box = "<div class='box border-all bg-white collapsed-box'><div class='box-header border-bottom'><div class='row col-md-12 sims'><div class='form-group col-xs-1'><span data-toggle='tooltip' title='' class='badge bg-green' data-original-title='1'>1</span>&nbsp;<button type='button' class='btn btn-md btn-default btn-PH-red' title='Remove Plant' data-action='removePlant'><i class='fa fa-remove'></i></button><button type='button' class='btn btn-md btn-default btn-PH-blue' title='Add Plant' data-action='addPlant'><i class='fa fa-plus'></i></button></div><div class='form-group col-xs-1'><label><span class='bold-red'>*</span>PlantName</label></div><div class='form-group col-xs-2 ui-widget'><input type='text' class='form-control taxonText' name='plantName' placeholder='Plant Name'><span class='errtext hide normal-red'>Cannot be empty!</span></div><div class='form-group col-xs-1'><label><span class='bold-red'>*</span>Statistic Type</label></div><div class='form-group col-xs-1'><select class='form-control select2' name='statType' style='width: 100%;'><option selected='selected'>Statistic Type</option><option>Count</option><option>Area (m2)</option></select><span class='errtext hide normal-red'>Cannot be empty!</span></div><div class='form-group col-xs-1'><label><span class='bold-red'>*</span>Count/Area</label></div><div class='form-group col-xs-2'><div class='btn-group'><button type='button' class='btn btn-default qtyminus'><i class='fa fa-minus'></i></button><button type='button' class='btn btn-default qty' name='statTypeVal'>0</button><button type='button' class='btn btn-default qtyplus'><i class='fa fa-plus'></i></button><span class='errtext hide normal-red'>Cannot be empty!</span></div></div><div class='form-group col-xs-1'><i class='fa fa-check-circle-o fa-2x pull-right text-gray' title='Flag'></i></div><div class='form-group col-xs-1'><i class='fa fa-dot-circle-o fa-2x pull-right text-gray' title='External Device Photo'></i></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-1'>&nbsp;</div><div class='form-group col-xs-1'>&nbsp;</div><div class='form-group col-xs-1'><label class='label-x-PH'>Weed</label><input type='checkbox' name='weed' class='minimal'></div><div class='form-group col-xs-1'><label class='label-x-PH'>Both</label><input type='checkbox' name='both' class='minimal'></div><div class='form-group col-xs-2'>&nbsp;</div><div class='form-group col-xs-1'><label>Photos</label></div><div class='form-group col-xs-2'><img class='pp' src='dist/img/Plant1-1.jpeg' alt='Plant1-1'><img class='pp' src='dist/img/Plant1-2.jpeg' alt='Plant1-2'><img class='pp' src='dist/img/Plant1-3.jpeg' alt='Plant1-3'></div><div class='form-group col-xs-1'><button class='btn btn-md btn-default' disabled id='newPhoto'><i class='fa fa-camera'></i></button></div></div><div class='box-tools pull-right'><button type='button' class='btn btn-box-tool' data-widget='collapse'><i class='fa fa-arrow-down'></i></button></div></div><div class='box-body'><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Notes</label></div><div class='form-group col-xs-8' style='width: 63.3%'><input type='text' class='form-control' name='notes' placeholder='Notes'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Latitude</label></div><div class='form-group col-xs-2'><input type='text' class='form-control' name='latitude' placeholder='Latitude'><span class='errtext hide normal-red'>Cannot be empty!</span></div><div class='form-group col-xs-1'><label>Longitude</label></div><div class='form-group col-xs-2'><input type='text' class='form-control' name='longitude' placeholder='Longitude'><span class='errtext hide normal-red'>Cannot be empty!</span></div><div class='form-group col-xs-1'><label>Datum</label></div><div class='form-group col-xs-1'><select class='form-control' name='datum'><option>WGS84</option><option>GDA94</option></select></div><div class='form-group col-xs-1'><button type='button' class='btn btn-md btn-success getCoords'><i class='fa fa-map-marker'></i></button></div></div></div></div>";
var hostweed = '<div class="row col-md-12 hostweed collapsed"><div class="row col-md-12 sims"><div class="form-group col-md-6">&nbsp;<i class="fa fa-arrow-up fa-2x pull-right text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-down fa-2x pull-right expand text-arrows" data-action="expand"></i></div><div class="form-group col-md-6"><span data-toggle="tooltip" title="" class="badge badge-success" data-original-title="1">1</span><label><span class="bold-red">*</span>PlantName</label><input type="text" class="form-control taxonText" name="plantName1" placeholder="Plant Name"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-3"><input type="radio" class="minimal" name="CountList1" value="Count">&nbsp;<label>Count</label></div><div class="form-group col-md-3"><input type="radio" class="minimal" name="CountList1" value="List">&nbsp;<label>List</label></div><div class="form-group col-md-6"><label><span class="bold-red">*</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType1"><option selected="selected">Statistic Type</option><option value="C">Count</option><option value="A">Area (m2)</option></select></div></div><div class="row col-md-12 sims"><div class="form-group col-md-6"><label><span class="bold-red">*</span>Count/Area</label>&nbsp;<span data-toggle="tooltip" title="2" class="badge bg-grey" data-original-title="2">1</span><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="text" class="qty" name="statTypeVal1" value="0"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div><div class="form-group col-md-3"><input type="checkbox" name="earmark1" class="minimal">&nbsp;<label>Flag</label></div><div class="form-group col-md-3"><input type="checkbox" name="extPhoto1" class="minimal">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 sims"><div class="form-group col-md-6"><label>Latitude</label><input type="text" class="form-control hostweedlat" name="latitude1" placeholder="Latitude"></div><div class="form-group col-md-6"><label>Longitude</label><input type="text" class="form-control hostweedlng" name="longitude1" placeholder="Longitude"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-3"><label>Datum</label><select class="form-control" name="datum1"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3"><button class="btn btn-md btn-default getPlantCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 sims"><div class="form-group col-md-12"><label>Notes</label><textarea class="form-control" rows="6" name="notes1" style="height:60px;"></textarea></div></div><div class="row col-md-12 sims"><div class="form-group col-md-12"><img class="pp" src="images/plant.png" id="plantPic1"><input type="text" class="hide" id="iplantPic1" value="x"><img class="pp" src="images/plant.png" id="plantPic2"><input type="text" class="hide" id="iplantPic2" value="x"><img class="pp" src="images/plant.png" id="plantPic3"><input type="text" class="hide" id="iplantPic3" value="x"><img class="pp" src="images/plant.png" id="plantPic4"><input type="text" class="hide" id="iplantPic4" value="x"><img class="pp" src="images/plant.png" id="plantPic5"><input type="text" class="hide" id="iplantPic5" value="x"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-12"><i class="fa fa-trash text-danger pull-right removePlant" data-action="removePlant"></i></div></div></div>';
var botSample = '<div class="row col-md-12 sims dynarow sample collapsed"><div class="row col-md-12 sims"><div class="form-group col-md-6">&nbsp;<i class="fa fa-arrow-up fa-2x pull-right text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-down fa-2x pull-right expand text-arrows" data-action="expand"></i></div><div class="form-group col-md-3"><label>Sample Field ID <span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field ID" value="SM001" name="bsampleId"></div><div class="form-group col-md-3"><label>Additional Collectors</label><br /><input type="checkbox" name="addlCollectors" class="minimal"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-4"><label>Number Collected <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Number Collected" name="numCollected"></div><div class="form-group col-md-4"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="crossCollection"></div><div class="form-group col-md-4"><label>Preliminary ID <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Preliminary ID" name="prelimID"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-6"><label>Latitude <span class="bold-red">*</span></label><input type="text" class="form-control samplelat" placeholder="Latitude" name="latitude"></div><div class="form-group col-md-6"><label>Longitude <span class="bold-red">*</span></label><input type="text" class="form-control samplelng" placeholder="Longitude" name="longitude"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-6"><label>Datum</label><select class="form-control" name="datum"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-6"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 sims"><div class="form-group col-md-6"><label>Time</label><input type="text" class="form-control" placeholder="Time" name="duration"></div><div class="form-group col-md-6"><label>Altitude</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="altitude"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="addlObsrvns" style="height:30px;"></textarea></div></div><div class="row col-md-12 sims"><div class="form-group col-md-4"><label>Habit <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Habit" name="habit"></div><div class="form-group col-md-4"><label>Description <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Description" name="description"></div><div class="form-group col-md-4"><label>Habitat <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Habitat" name="habitat"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-4"><label>Landform <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="LandForm" name="landform"></div><div class="form-group col-md-4"><label>Soil/Geology <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Soil/Geology" name="soilGeology"></div><div class="form-group col-md-4"><label>Abundance</label><input type="text" class="form-control" placeholder="Abundance" name="abundance"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-12"><input type="checkbox" name="externalCam" class="minimal">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 sims"><div class="form-group col-md-2"><label>Sample Type</label></div><div class="form-group col-md-3"><input type="checkbox" name="spiritSample" class="minimal">&nbsp;<label>Spirit Sample</label></div><div class="form-group col-md-3"><input type="checkbox" name="dnaSample" class="minimal">&nbsp;<label>DNA Sample</label></div><div class="form-group col-md-4"><input type="checkbox" name="otherSample" class="minimal">&nbsp;<label>Other</label>&nbsp;<input type="text" class="form-control hide" placeholder="Other Text" name="othText"></div></div><div class="row col-md-12 sims"><div class="form-group col-md-12"><i class="fa fa-trash text-danger pull-right removeBotSample"></i></div></div></div>';
var plantName; var Idx;
var entobox = "<div class='row col-md-12 hostweed collapsed'><div class='row col-md-12 sims'><div class='form-group col-sm-5'><span data-toggle='tooltip' title='' class='badge badge-success' data-original-title='1'>1</span><label><span class='bold-red'>*</span>Host Name</label><input type='text' class='form-control taxonText' placeholder='Host Name' name='hostName1'></div><div class='form-group col-sm-3'><label><span class='bold-red'>*</span>Statistic Type</label><select class='form-control select2' name='statType1'><option selected='selected'>Statistic Type</option><option value='C'>Count</option><option value='A'>Area (m2)</option></select></div><div class='form-group col-sm-3'><label><span class='bold-red'>*</span>Count/Area</label>&nbsp;<span data-toggle='tooltip' title='2' class='badge bg-grey' data-original-title='2'>1</span><br /><button type='button' class='btn btn-md btn-default qtyminus'><i class='fa fa-minus'></i></button><input type='text' class='qty' name='statTypeVal1' value='0'><button type='button' class='btn btn-md btn-default qtyplus'><i class='fa fa-plus'></i></button></div><div class='form-group col-sm-1'><i class='fa fa-arrow-up fa-2x pull-right text-arrows collapse hide' data-action='collapse'></i><i class='fa fa-arrow-down fa-2x pull-right expand text-arrows' data-action='expand'></i>&nbsp;</div></div><div class='row col-md-12 sims'><div class='form-group col-sm-3'><label>Flag</label><br /><input type='checkbox' name='earmark1' class='minimal'></div><div class='form-group col-sm-3'><label>External Photo</label><br /><input type='checkbox' name='extPhoto1' class='minimal'></div><div class='form-group col-sm-6'><label><span class='bold-red'>*</span>Method of Observation</label><select class='form-control' name='mob1'><option>Direct</option><option>Sweep</option><option>Beat</option><option>Dissection</option><option>Other</option></select></div></div><div class='row col-md-12 sims'><div class='form-group col-sm-12'><label>Notes</label><textarea class='form-control' rows='6' name='notes1' style='height:60px;'></textarea></div></div><div class='row col-md-12 sims bg-target entotarget'><div class='form-group col-sm-1'><i class='fa fa-plus fa-2x pull-right text-danger' data-action='addEntoTarget'></i></div><div class='form-group col-sm-7'><input type='text' name='target1' class='input-sm form-control taxonText' placeholder='Target 1'></div><div class='form-group col-sm-4'><input type='text' name='Count1' class='input-sm form-control' placeholder='Target Count'></div><div class='form-group col-sm-2'><label>Not Observed</label><br/><input type='radio' class='minimal' name='optTarget1' id='optNO' value='Not Observed' Checked></div><div class='form-group col-sm-2'><label>Present</label><br /><input type='radio' class='minimal' name='optTarget1' id='optP' value='Present'></div><div class='form-group col-sm-2'><label>Suspected</label><br /><input type='radio' class='minimal' name='optTarget1' id='optS' value='Suspected'></div><div class='form-group col-sm-2'><label>Not Done</label><br /><input type='radio' class='minimal' name='optTarget1' id='optND' value='Not Done'></div><div class='form-group col-sm-12'><label>Comments</label><br /><input type='text' name='comments1' class='input-sm form-control' placeholder='Comments'></div></div><div class='row col-md-12 sims'><div class='form-group col-sm-4'><label>Life Stage</label><select class='form-control select2' name='lifeStage1' style='width: 100%;'><option selected='selected'>Seedling</option><option>Immature</option><option>Mature</option></select></div><div class='form-group col-sm-2'><label>Fruiting</label><br /><input type='checkbox' name='hpstatus1' class='minimal'></div><div class='form-group col-sm-2'><label>Flowering</label><br /><input type='checkbox' name='hpstatus2' class='minimal'></div><div class='form-group col-sm-2'><label>Flushing</label><br /><input type='checkbox' name='hpstatus3' class='minimal'></div><div class='form-group col-sm-2'><label>Deadwood</label><br /><input type='checkbox' name='hpstatus4' class='minimal'></div></div><div class='row col-md-12 sims'><div class='form-group col-sm-4'><label>Latitude</label><input type='text' class='form-control hostweedlat' name='latitude1' placeholder='Latitude'></div><div class='form-group col-sm-4'><label>Longitude</label><input type='text' class='form-control hostweedlng' name='longitude1' placeholder='Longitude'></div><div class='form-group col-sm-3'><label>Datum</label><select class='form-control' name='datum1'><option>WGS84</option><option>GDA94</option></select></div><div class='form-group col-sm-1'><i class='fa fa-map-marker fa-2x text-info getPlantCoords'></i></div></div></div>";
var entotarget = "<div class='row col-md-12 sims bg-target entotarget'><div class='form-group col-sm-1'><i class='fa fa-plus fa-2x pull-right text-danger' data-action='addEntoTarget'></i></div><div class='form-group col-sm-7'><input type='text' name='target1' class='input-sm form-control taxonText' placeholder='Target 1'></div><div class='form-group col-sm-4'><input type='text' name='Count1' class='input-sm form-control' placeholder='Target Count'></div><div class='form-group col-sm-2'><label>Not Observed</label><br/><input type='radio' class='minimal' name='optTarget1' id='optNO' value='Not Observed' Checked></div><div class='form-group col-sm-2'><label>Present</label><br /><input type='radio' class='minimal' name='optTarget1' id='optP' value='Present'></div><div class='form-group col-sm-2'><label>Suspected</label><br /><input type='radio' class='minimal' name='optTarget1' id='optS' value='Suspected'></div><div class='form-group col-sm-2'><label>Not Done</label><br /><input type='radio' class='minimal' name='optTarget1' id='optND' value='Not Done'></div><div class='form-group col-sm-12'><label>Comments</label><br /><input type='text' name='comments1' class='input-sm form-control' placeholder='Comments'></div></div>";
var entosample = "<div class='row col-md-12 sims dynarow sample collapsed'><div class='row col-md-12 sims'><div class='form-group col-xs-3'><label>Sample Field ID <span class='bold-red'>*</span></label><input type='text' class='form-control nextid' placeholder='Sample Field ID' value='SM001' name='bsampleId'></div><div class='form-group col-xs-3'><label>Additional Collectors</label><br /><input type='checkbox' name='addlCollectors' class='minimal'></div><div class='pull-right'><i class='fa fa-arrow-up fa-2x pull-right text-arrows collapse hide' data-action='collapse'></i><i class='fa fa-arrow-down fa-2x pull-right expand text-arrows' data-action='expand'></i>&nbsp;</div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>Number Collected <span class='bold-red'>*</span></label><input type='text' class='form-control' placeholder='Number Collected' name='numCollected'></div><div class='form-group col-xs-4'><label>Linked Sample #</label><input type='text' class='form-control' placeholder='Linked Sample #' name='crossCollection'></div><div class='form-group col-xs-4'><label>Preliminary ID <span class='bold-red'>*</span></label><input type='text' class='form-control' placeholder='Preliminary ID' name='prelimID'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>Latitude <span class='bold-red'>*</span></label><input type='text' class='form-control samplelat' placeholder='Latitude' name='latitude'></div><div class='form-group col-xs-4'><label>Longitude <span class='bold-red'>*</span></label><input type='text' class='form-control samplelng' placeholder='Longitude' name='longitude'></div><div class='form-group col-sm-2'><label>Datum</label><select class='form-control' name='datum'><option>WGS84</option><option>GDA94</option></select></div><div class='form-group col-xs-1'><i class='fa fa-map-marker fa-2x text-info getSampleCoords'></i></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>Time</label><input type='text' class='form-control' placeholder='Time' name='duration'></div><div class='form-group col-xs-4'><label>Altitude</label><input type='text' class='form-control samplealt' placeholder='Altitude' name='altitude'></div><div class='form-group col-xs-3'><label>Collection Method</label><select class='form-control' name='collectionMethod'><option>Collection Method 1</option><option>Collection Method 2</option><option>Collection Method 3</option></select></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-12'><label>Additional Comments</label><textarea class='form-control' rows='6' name='addlObsrvns' style='height:30px;'></textarea></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Host/Other <span class='bold-red'>*</span></label></div><div class='form-group col-xs-2'><input type='radio' name='hostother' class='minimal'>&nbsp;<label>Host</label></div><div class='form-group col-xs-2'><input type='radio' name='hostother' class='minimal'>&nbsp;<label>Other</label></div><div class='form-group col-xs-4'><input type='text' class='form-control' placeholder='Other Name' name='otheName'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Identified By</label></div><div class='form-group col-xs-4'><select class='form-control' name='identifiedBy'><option>User 1</option><option>User 2</option></select></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Plant Part</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Leaves</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Flower</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Fruit</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Seeds</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Stem</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>&nbsp;</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Shoot</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Root</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Branch</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Trunk</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Preservation Type</label></div><div class='form-group col-xs-4'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Wet (Ethanol 70-80%)</label></div><div class='form-group col-xs-3'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Wet (Ethanol>80%)</label></div><div class='form-group col-xs-3'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Dry</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>&nbsp;</label></div><div class='form-group col-xs-2'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Rearing</label></div><div class='form-group col-xs-2'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>FTA Card</label></div><div class='form-group col-xs-2'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Other</label></div><div class='form-group col-xs-4'><input type='text' class='form-control' placeholder='Other Preservation Type' name='othPresType'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>%Infested </label><select class='form-control' name='percInfested'><option>Percent Infected 1</option><option>Percent Infected 1</option></select></div><div class='form-group col-xs-4'><label>Damage Level </label><select class='form-control' name='damageLevel'><option>Damage Level 1</option><option>Damage Level 1</option></select></div><div class='form-group col-xs-4'><label>Pest Level </label><select class='form-control' name='pestLevel'><option>Pest Level 1</option><option>Pest Level 2</option></select></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Life Stage</label></div><div class='form-group col-xs-3'><input type='checkbox' name='lifeStage' class='minimal'>&nbsp;<label>Adult</label></div><div class='form-group col-xs-2'><input type='checkbox' name='lifeStage' class='minimal'>&nbsp;<label>Egg</label></div><div class='form-group col-xs-3'><input type='checkbox' name='lifeStage' class='minimal'>&nbsp;<label>Immature</label></div><div class='form-group col-xs-2'><input type='checkbox' name='lifeStage' class='minimal'>&nbsp;<label>Pupae</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-9'><input type='checkbox' name='externalCam' class='minimal'>&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-12'><i class='fa fa-trash text-danger pull-right removeEntoSample'></i></div></div></div>";
var numEntoHosts = 0;
var numEntoTargets = 0;
var hostName;
var pathbox = "<div class='row col-md-12 hostweed collapsed'><div class='row col-md-12 sims'><div class='form-group col-sm-5'><span data-toggle='tooltip' title='' class='badge badge-success' data-original-title='1'>1</span><label><span class='bold-red'>*</span>Host Name</label><input type='text' class='form-control taxonText' placeholder='Host Name' name='hostName1'></div><div class='form-group col-sm-3'><label><span class='bold-red'>*</span>Statistic Type</label><select class='form-control select2' name='statType1'><option selected='selected'>Statistic Type</option><option value='C'>Count</option><option value='A'>Area (m2)</option></select></div><div class='form-group col-sm-3'><label><span class='bold-red'>*</span>Count/Area</label>&nbsp;<span data-toggle='tooltip' title='2' class='badge bg-grey' data-original-title='2'>1</span><br /><button type='button' class='btn btn-md btn-default qtyminus'><i class='fa fa-minus'></i></button><input type='text' class='qty' name='statTypeVal1' value='0'><button type='button' class='btn btn-md btn-default qtyplus'><i class='fa fa-plus'></i></button></div><div class='form-group col-sm-1'><i class='fa fa-arrow-up fa-2x pull-right text-arrows collapse hide' data-action='collapse'></i><i class='fa fa-arrow-down fa-2x pull-right expand text-arrows' data-action='expand'></i>&nbsp;</div></div><div class='row col-md-12 sims'><div class='form-group col-sm-3'><label>Flag</label><br /><input type='checkbox' name='earmark1' class='minimal'></div><div class='form-group col-sm-3'><label>External Photo</label><br /><input type='checkbox' name='extPhoto1' class='minimal'></div><div class='form-group col-sm-6'><label><span class='bold-red'>*</span>Method of Observation</label><select class='form-control' name='mob1'><option>Dissection</option><option>Visual</option></select></div></div><div class='row col-md-12 sims bg-target pathtarget'><div class='form-group col-sm-1'><i class='fa fa-plus fa-2x pull-right text-danger' data-action='addPathTarget'></i></div><div class='form-group col-sm-7'><input type='text' name='target1' class='input-sm form-control taxonText' placeholder='Target 1'></div><div class='form-group col-sm-4'><input type='text' name='Count1' class='input-sm form-control' placeholder='Target Count'></div><div class='form-group col-sm-2'><label>Not Observed</label><br/><input type='radio' class='minimal' name='optTarget1' id='optNO' value='Not Observed' Checked></div><div class='form-group col-sm-2'><label>Present</label><br /><input type='radio' class='minimal' name='optTarget1' id='optP' value='Present'></div><div class='form-group col-sm-2'><label>Suspected</label><br /><input type='radio' class='minimal' name='optTarget1' id='optS' value='Suspected'></div><div class='form-group col-sm-2'><label>Not Done</label><br /><input type='radio' class='minimal' name='optTarget1' id='optND' value='Not Done'></div><div class='form-group col-sm-12'><label>Comments</label><br /><input type='text' name='comments1' class='input-sm form-control' placeholder='Comments'></div></div><div class='row col-md-12 sims'><div class='form-group col-sm-4'><label>Life Stage</label><select class='form-control select2' name='lifeStage1' style='width: 100%;'><option selected='selected'>Seedling</option><option>Immature</option><option>Mature</option></select></div><div class='form-group col-sm-8'><label>Notes</label><textarea class='form-control' rows='6' name='notes1'></textarea></div></div><div class='row col-md-12 sims'><div class='form-group col-sm-4'><label>Latitude</label><input type='text' class='form-control hostweedlat' name='latitude1' placeholder='Latitude'></div><div class='form-group col-sm-4'><label>Longitude</label><input type='text' class='form-control hostweedlng' name='longitude1' placeholder='Longitude'></div><div class='form-group col-sm-3'><label>Datum</label><select class='form-control' name='datum1'><option>WGS84</option><option>GDA94</option></select></div><div class='form-group col-sm-1'><i class='fa fa-map-marker fa-2x text-info getPlantCoords'></i></div></div></div>";
var pathtarget = "<div class='row col-md-12 sims bg-target pathtarget'><div class='form-group col-sm-1'><i class='fa fa-plus fa-2x pull-right text-danger' data-action='addEntoTarget'></i></div><div class='form-group col-sm-7'><input type='text' name='target1' class='input-sm form-control taxonText' placeholder='Target 1'></div><div class='form-group col-sm-4'><input type='text' name='Count1' class='input-sm form-control' placeholder='Target Count'></div><div class='form-group col-sm-2'><label>Not Observed</label><br/><input type='radio' class='minimal' name='optTarget1' id='optNO' value='Not Observed' Checked></div><div class='form-group col-sm-2'><label>Present</label><br /><input type='radio' class='minimal' name='optTarget1' id='optP' value='Present'></div><div class='form-group col-sm-2'><label>Suspected</label><br /><input type='radio' class='minimal' name='optTarget1' id='optS' value='Suspected'></div><div class='form-group col-sm-2'><label>Not Done</label><br /><input type='radio' class='minimal' name='optTarget1' id='optND' value='Not Done'></div><div class='form-group col-sm-12'><label>Comments</label><br /><input type='text' name='comments1' class='input-sm form-control' placeholder='Comments'></div></div>";
var pathsample = "<div class='row col-md-12 sims dynarow sample collapsed'><div class='row col-md-12 sims'><div class='form-group col-xs-3'><label>Sample Field ID <span class='bold-red'>*</span></label><input type='text' class='form-control nextid' placeholder='Sample Field ID' value='SM001' name='bsampleId'></div><div class='form-group col-xs-3'><label>Additional Collectors</label><br /><input type='checkbox' name='addlCollectors' class='minimal'></div><div class='pull-right'><i class='fa fa-arrow-up fa-2x pull-right text-arrows collapse hide' data-action='collapse'></i><i class='fa fa-arrow-down fa-2x pull-right expand text-arrows' data-action='expand'></i>&nbsp;</div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>Number Collected <span class='bold-red'>*</span></label><input type='text' class='form-control' placeholder='Number Collected' name='numCollected'></div><div class='form-group col-xs-4'><label>Linked Sample #</label><input type='text' class='form-control' placeholder='Linked Sample #' name='crossCollection'></div><div class='form-group col-xs-4'><label>Preliminary ID <span class='bold-red'>*</span></label><input type='text' class='form-control' placeholder='Preliminary ID' name='prelimID'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>Latitude <span class='bold-red'>*</span></label><input type='text' class='form-control samplelat' placeholder='Latitude' name='latitude'></div><div class='form-group col-xs-4'><label>Longitude <span class='bold-red'>*</span></label><input type='text' class='form-control samplelng' placeholder='Longitude' name='longitude'></div><div class='form-group col-sm-2'><label>Datum</label><select class='form-control' name='datum'><option>WGS84</option><option>GDA94</option></select></div><div class='form-group col-xs-1'><i class='fa fa-map-marker fa-2x text-info getSampleCoords'></i></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>Time</label><input type='text' class='form-control' placeholder='Time' name='duration'></div><div class='form-group col-xs-4'><label>Altitude</label><input type='text' class='form-control samplealt' placeholder='Altitude' name='altitude'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-12'><label>Additional Comments</label><textarea class='form-control' rows='6' name='addlObsrvns' style='height:30px;'></textarea></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Host/Other <span class='bold-red'>*</span></label></div><div class='form-group col-xs-4'><input type='text' class='form-control' placeholder='Other Name' name='otheName'></div><div class='form-group col-xs-2'><label>Identified By</label></div><div class='form-group col-xs-4'><select class='form-control' name='identifiedBy'><option>User 1</option><option>User 2</option></select></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Plant Part</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Leaves</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Flower</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Fruit</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Seeds</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>&nbsp;</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Stem</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Shoot</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Root</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Branch</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>&nbsp;</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Trunk</label></div><div class='form-group col-xs-4'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Whole Plant</label></div><div class='form-group col-xs-2'><input type='checkbox' name='plantPart' class='minimal'>&nbsp;<label>Soil</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>&nbsp;</label></div><div class='form-group col-xs-2'><label>Symptoms</label></div><div class='form-group col-xs-8'><input type='text' class='form-control samplelat' placeholder='Symptoms' name='symptoms'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>Preservation Type <span class='bold-red'>*</span></label></div><div class='form-group col-xs-2'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Fresh</label></div><div class='form-group col-xs-4'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Pressed Specimen</label></div><div class='form-group col-xs-3'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Dessicate</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-2'><label>&nbsp;</label></div><div class='form-group col-xs-2'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Extract</label></div><div class='form-group col-xs-2'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Isolation</label></div><div class='form-group col-xs-2'><input type='checkbox' name='preservationType' class='minimal'>&nbsp;<label>Other</label></div><div class='form-group col-xs-4'><input type='text' class='form-control' placeholder='Other Preservation Type' name='othPresType'></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-4'><label>Incidence <span class='bold-red'>*</span></label><select class='form-control' name='incidence'><option>Incidence 1</option><option>Incidence 1</option></select></div><div class='form-group col-xs-4'><label>Severity <span class='bold-red'>*</span></label><select class='form-control' name='severity'><option>Severity 1</option><option>Severity 1</option></select></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-9'><input type='checkbox' name='externalCam' class='minimal'>&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class='row col-md-12 sims'><div class='form-group col-xs-12'><i class='fa fa-trash text-danger pull-right removePathSample'></i></div></div></div>";
var numPathHosts = 0;
var numPathTargets = 0;
var esamples = 0; 
var psamples = 0;
/* PH Initialized variables */

var track_id = '';      // Name/ID of the exercise
var watch_id = null;    // ID of the geolocation
var tracking_data = []; // Array containing GPS position objects
var elementc;
var mapc;
var trackCoords;
var myLatLng;
var paths = [];

function MyMapType() { };
MyMapType.prototype.tileSize = new google.maps.Size(256, 256);
MyMapType.prototype.maxZoom = 13;
MyMapType.prototype.minZoom = 5;
MyMapType.prototype.name = "Offline Map";
MyMapType.prototype.getTile = function (coord, zoom, ownerDocument) {
    zoomlevel.innerHTML = '<i class="fa fa-search"></i><span class="badge badge-info">' + zoom + '</span>';
    var div = ownerDocument.createElement('div');
    div.innerHTML = '<img name="" src="file:///storage/emulated/0/maps/PNG/' + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>';
    div.style.width = this.tileSize.width + 'px'; div.style.height = this.tileSize.height + 'px';
    //
    return div;
};

function MyMapType2() { };
MyMapType2.prototype.tileSize = new google.maps.Size(256, 256);
MyMapType2.prototype.maxZoom = 21;
MyMapType2.prototype.minZoom = 18;
MyMapType2.prototype.name = "Offline Map";
MyMapType2.prototype.getTile = function (coord, zoom, ownerDocument) {
    zoomlevel2.innerHTML = '<i class="fa fa-search"></i><span class="badge badge-info">' + zoom + '</span>';
    var div = ownerDocument.createElement('div');
    div.innerHTML = '<img name="" src="file:///storage/emulated/0/maps/PNG/' + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>';
    div.style.width = this.tileSize.width + 'px'; div.style.height = this.tileSize.height + 'px';
    return div;
};

document.addEventListener('deviceready', initLoad, false);

setInterval(function () {
    statusElem.className = navigator.onLine ? 'btn btn-circle btn-lg btn-success' : 'btn btn-circle btn-lg btn-danger';
    //statusElem.innerHTML = navigator.onLine ? 'internet-on' : 'internet-off';
}, 1000);

function initLoad() {
    //Invoke OTP functionality
    //initVerify();
    //$('#modalVerify').modal();
    //return;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = dd.toString() + '/' + mm.toString() + '/' + yyyy.toString();
    db = window.sqlitePlugin.openDatabase({ name: "sims.db", location: 'default' });
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS observations (id integer primary key, filedt text, data blob)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS seqnum (id integer primary key, attrname text, attrval int default 0)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS settings (id integer primary key, settingstext text, settingsval text default 'IAH')");
    }, function (err) {
        $.growl({ title: "Application Error", message: "An error occurred while initializing the DB. " + err.message, location: "bc", size: "large" });
        dbElem.className = 'btn btn-circle btn-lg btn-danger hide';
        //dbElem.innerHTML = 'db-off';
        });
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM settings WHERE id = ?", [1], function (tx, res) {
            if (res.rows && res.rows.length > 0) {
                AppMode = res.rows.item(0).settingsval;
            }
            else {
                db.transaction(function (tx) {
                    tx.executeSql("INSERT INTO settings (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'AppMode', 'IAH'], function (tx, res) {
                        AppMode = 'IAH';
                    });
                }, function (err) {
                    $.growl({ title: "Application Error", message: "An error occured while setting the AppMode to IAH. " + err.message, location: "bc", size: "large" });
                });
            };
            settings.innerHTML = AppMode;
        });
    }, function (err) {
        $.growl({ title: "Application Error", message: "An error occured while retrieving next ID. " + err.message, location: "bc", size: "large" });
    });


    dbElem.className = 'btn btn-circle btn-lg btn-success hide';
    //dbElem.innerHTML = 'db-on';
    var mapOptions = { zoom: 7, center: myCenter, streetViewControl: false, panControl: false, zoomControl: false, mapTypeControl: false, scaleControl: false, overviewMapControl: false, mapTypeControlOptions: { mapTypeIds: ["xx"] } };
    map = new google.maps.Map(document.getElementById("map"), mapOptions); map.mapTypes.set('xx', mymap); map.setMapTypeId('xx');

    var mapOptionsc = { zoom: 22, center: myLatLng, streetViewControl: false, panControl: false, zoomControl: false, mapTypeControl: false, scaleControl: false, overviewMapControl: false, mapTypeControlOptions: { mapTypeIds: ["xx"] } };
    mapc = new google.maps.Map(document.getElementById("mb2"), mapOptionsc); mapc.mapTypes.set('xx', mymapc); mapc.setMapTypeId('xx');

    loadMapMarkers();
    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
    });
}

function loadMapMarkers() {
    //Read from DB
    var d;
    db.readTransaction(function (tx) {
        tx.executeSql("SELECT * FROM observations WHERE id = ?", [1], function (tx, res) {
            if (res.rows && res.rows.length > 0) {
                results = JSON.parse(res.rows.item(0).data);
                //alert(JSON.stringify(d));
                //switch (AppMode) {
                //    case "IAH":
                //        results = jQuery.grep(d, function (n, i) {
                //            return (n.observations.obType < 2);
                //        });
                //    case "AH":
                //        results = jQuery.grep(d, function (n, i) {
                //            return (n.observations.obType < 2);
                //        });
                //    case "PH":
                //        results = jQuery.grep(d, function (n, i) {
                //            return (n.observations.obType > 1);
                //        });
                //}
                for (var i = 0; i < results.observations.length; i++) {
                    var latLng = new google.maps.LatLng(results.observations[i].latitude, results.observations[i].longitude);
                    var id = results.observations[i].id;
                    var obType = results.observations[i].obType;
                    var ti = id.toString().trim() + "/" + obType.toString();
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        title: ti
                    });
                    markers.push(marker);
                    google.maps.event.addListener(marker, 'click', function () {
                        curIdx = this.title.split("/")[0];
                        curObType = this.title.split("/")[1];
                        curLat = this.getPosition().lat();
                        curLng = this.getPosition().lng();
                        if (infoWindow) {
                            infoWindow.close();
                        }
                        infoWindow = new google.maps.InfoWindow({
                            content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                            '<button class"btn btn-circle btn-info btn-lg edit" onclick="launchModal(' + curIdx + ',' + curObType + ')"><i class="fa fa-pencil fa-2x"></i></button></div></div>'
                        });
                        infoWindow.setPosition(this.position);
                        infoWindow.open(map);
                        map.setCenter(this.position);
                    });
                }
            }
        });
    }, function (err) {
        $.growl({ title: "Application Error", message: "An error occured while retrieving observations. " + err.message, location: "bc", size: "large" });
    });
};

function resetData() {
    $.confirm({
        title: 'Confirm Data Reset!',
        content: 'Do you want to delete all the observation records?',
        buttons: {
            Ok: function () {
                $.ajax({
                    method: "GET",
                    url: "data/grpObservations.json",
                    contentType: "json",
                    success: function (data) {
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1; //January is 0!
                        var yyyy = today.getFullYear();
                        if (dd < 10) {
                            dd = '0' + dd
                        }
                        if (mm < 10) {
                            mm = '0' + mm
                        }
                        today = dd.toString() + '/' + mm.toString() + '/' + yyyy.toString();
                        db.transaction(function (tx) {
                            tx.executeSql("DELETE FROM observations", [], function (tx, res) {
                                //alert("Rows deleted.");
                            });
                            tx.executeSql("DELETE FROM seqnum", [], function (tx, res) {
                                //alert("Rows deleted.");
                            });
                        }, function (err) {
                            $.growl({ title: "Application Error", message: "An error occured while deleting row from DB. " + err.message, location: "bc", size: "large" });
                        });
                        db.transaction(function (tx) {
                            tx.executeSql("INSERT INTO observations (id, filedt, data) VALUES (?,?,?)", [1, today, JSON.stringify(data)], function (tx, res) {
                                //alert("Row inserted.");
                            });
                            tx.executeSql("INSERT INTO seqnum (id, attrname, attrval) VALUES (?,?,?)", [1, 'sampleid', 0], function (tx, res) {
                                //alert("Row inserted.");
                            });
                        }, function (err) {
                            $.growl({ title: "Application Error", message: "An error occured while inserting row to DB. " + err.message, location: "bc", size: "large" });
                            });
                        results = JSON.parse(data);
                        for (var i = 0; i < results.observations.length; i++) {
                            var latLng = new google.maps.LatLng(results.observations[i].latitude, results.observations[i].longitude);
                            var id = results.observations[i].id;
                            var obType = results.observations[i].obType;
                            var ti = id.toString().trim() + "/" + obType.toString();
                            var marker = new google.maps.Marker({
                                position: latLng,
                                map: map,
                                title: ti
                            });
                            google.maps.event.addListener(marker, 'click', function () {
                                curIdx = this.title.split("/")[0];
                                curObType = this.title.split("/")[1];
                                curLat = this.getPosition().lat();
                                curLng = this.getPosition().lng();
                                if (infoWindow) {
                                    infoWindow.close();
                                }
                                infoWindow = new google.maps.InfoWindow({
                                    content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                                    '<button class"btn btn-circle btn-info btn-lg edit" onclick="launchModal(' + curIdx + ',' + curObType + ')"><i class="fa fa-pencil fa-2x"></i></button></div></div>'
                                });
                                infoWindow.setPosition(this.position);
                                infoWindow.open(map);
                                map.setCenter(this.position);
                            });
                        }
                        $.growl({ title: "Application Info", message: "Data reset complete!", location: "bc", size: "large" });
                    },
                    failure: function () {
                        $.growl({ title: "Application Error", message: "Error!", location: "bc", size: "large" });

                    }
                });
            },
            cancel: function () {
                //close
            }
        }
    });
};

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

function placeMarker(location) {
    newMarker = new google.maps.Marker({
        position: location,
        map: map
    });
    curIdx = 0;
    curLat = newMarker.getPosition().lat();
    curLng = newMarker.getPosition().lng();
    switch (AppMode) {
        case 'IAH':
            $('#modalMenu').modal();
            break;
        case 'AH':
            $('#modalAHMenu').modal();
            break;
        case 'PH':
            $('#modalPHMenu').modal();
            break;
    } 
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

function myLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (position.coords.latitude < -10.713507 || position.coords.latitude > 131.756836 || position.coords.longitude < -1.48189 || position.coords.longitude > 156.124512) {
                $.growl({ title: "Out of bounds!", message: "Location is outside map bounds!", location: "bc", size: "large" });
            }
            else {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                //infoWindow = new google.maps.InfoWindow({
                //    content: '<div id="content"><h4>Your Location</h4><div id="bodyContent">' +
                //    position.coords.latitude + ',' + position.coords.longitude + '</div></div>'
                //});
                //infoWindow.setPosition(pos);
                //infoWindow.open(map);
                map.setZoom(11);
                map.setCenter(pos);
                $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                placeMarker(pos);
            }
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
};

function getGPSLoc() {
    var t0, t1;
    t0 = performance.now();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $('#form1').find("input[type='text'][name='latitude']").val(position.coords.latitude);
            $('#form1').find("input[type='text'][name='longitude']").val(position.coords.longitude);
            $('#form1').find("input[type='text'][name='altitude']").val(position.coords.altitude);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    };
    t1 = performance.now();
    $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
};

function downloadCSV() {
    $('#mt1').text('All Observations');
    switch (AppMode) {
        case "IAH":
            $('#modalGrid').modal();
            break;
        case "AH":
            $('#modalGrid').modal();
            break;
        case "PH": 
            $('#modalPHGrid').modal();
            break;
        default:
            break;
    }
};

function launchModal(e,f) {
    curIdx = e;
    switch (f) {
        case 0:
            loadModal('mo_sngObservation');
            break;
        case 1:
            loadModal('mo_grpObservation');
            break;
        case 2:
            loadModal('mo_BotObservation');
            break;
        case 3:
            loadModal('mo_EntObservation');
            break;
        case 4:
            loadModal('mo_PattObservation');
            break;
    } 
    $('#modalForm').modal();
};

function loadData() {
    var data;
    var tab;
    switch (AppMode) {
        case "IAH":
            data = jQuery.grep(results.observations, function (n, i) {
                return (n.obType === 0);
            });
            table = $('#srchTable').DataTable({
                "data": data,
                "columns": [
                    { "data": "surveillanceActivity" },
                    { "data": "commonName" },
                    {
                        "data": "sDate",
                        "render": function (data, type, row, meta) {
                            return moment(data).format("DD/MM/YYYY");
                        }
                    },
                    { "data": "latitude" },
                    { "data": "longitude" },
                    { "data": "datum" },
                    { "data": "id" },
                    {
                        "data": "status",
                        "render": function (data, type, row, meta) {
                            if (data == 0) return "Saved";
                            if (data == 1) return "Submitted";
                        }
                    },
                    {
                        "data": "discipline",
                        "render": function (data, type, row, meta) {
                            if (data == 'S') return "Single";
                            if (data == 'G') return "Group";
                            if (data == 'B') return "Botany";
                            if (data == 'E') return "Entomology";
                            if (data == 'P') return "Pathology";
                        }
                    },
                    { "data": "obType" }
                ],
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": false
            });
            break;
        case "AH":
            data = jQuery.grep(results.observations, function (n, i) {
                return (n.obTyoe < 2);
            });
            table = $('#srchTable').DataTable({
                "data": data,
                "columns": [
                    { "data": "surveillanceActivity" },
                    { "data": "commonName" },
                    {
                        "data": "sDate",
                        "render": function (data, type, row, meta) {
                            return moment(data).format("DD/MM/YYYY");
                        }
                    },
                    { "data": "latitude" },
                    { "data": "longitude" },
                    { "data": "datum" },
                    { "data": "id" },
                    {
                        "data": "status",
                        "render": function (data, type, row, meta) {
                            if (data == 0) return "Saved";
                            if (data == 1) return "Submitted";
                        }
                    },
                    {
                        "data": "discipline",
                        "render": function (data, type, row, meta) {
                            if (data == 'S') return "Single";
                            if (data == 'G') return "Group";
                            if (data == 'B') return "Botany";
                            if (data == 'E') return "Entomology";
                            if (data == 'P') return "Pathology";
                        }
                    },
                    { "data": "obType" }
                ],
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": false
            });
            break;
        case "PH":
            data = jQuery.grep(results.observations, function (n, i) {
                return (n.obType > 1);
            });
            table = $('#srchPHTable').DataTable({
                "data": data,
                "columns": [
                    { "data": "surveillanceActivity" },
                    { "data": "siteCommunity" },
                    {
                        "data": "sDate",
                        "render": function (data, type, row, meta) {
                            return moment(data).format("DD/MM/YYYY");
                        }
                    },
                    { "data": "Waypoint" },
                    { "data": "latitude" },
                    { "data": "longitude" },
                    { "data": "datum" },
                    { "data": "id" },
                    {
                        "data": "status",
                        "render": function (data, type, row, meta) {
                            if (data == 0) return "Saved";
                            if (data == 1) return "Submitted";
                        }
                    },
                    {
                        "data": "discipline",
                        "render": function (data, type, row, meta) {
                            if (data == 'S') return "Single";
                            if (data == 'G') return "Group";
                            if (data == 'B') return "Botany";
                            if (data == 'E') return "Entomology";
                            if (data == 'P') return "Pathology";
                        }
                    },
                    { "data": "obType" }
                ],
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": false
            });
            break;
        default:
            data = results.observations;
    }
    table.column(10).visible(false);
};

function exportTableToCSV($table, filename) {
    csv = "";
    var $rows = $table.find('tr:has(td)'),

        // Temporary delimiter characters unlikely to be typed by keyboard
        // This is to avoid accidentally splitting the actual contents
        tmpColDelim = String.fromCharCode(11), // vertical tab character
        tmpRowDelim = String.fromCharCode(0), // null character

        // actual delimiter characters for CSV format
        colDelim = '","',
        rowDelim = '"\r\n"',

        // Grab text from table into CSV formatted string
        csv = '"' + $rows.map(function (i, row) {
            var $row = $(row),
                $cols = $row.find('td');

            return $cols.map(function (j, col) {
                var $col = $(col),
                    text = $col.text();

                return text.replace(/"/g, '""'); // escape double quotes

            }).get().join(tmpColDelim);

        }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"';

    window.resolveLocalFileSystemURL('file:///storage/emulated/0/Download', function (fs) {
        //alert('file system open: ' + fs);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = dd.toString() + mm.toString() + yyyy.toString();
        fs.getFile("sample" + today + ".csv", { create: true, exclusive: false }, function (fileEntry) {
            //alert("fileEntry is file?" + fileEntry.isFile.toString());
            fileEntry.createWriter(function (fileWriter) {
                fileWriter.onwriteend = function () {
                    //alert("Successful file read...");
                    //readFile(fileEntry);
                };
                fileWriter.onerror = function (e) {
                    $.growl({ title: "Application Error", message: "Failed file read: " + e.toString(), location: "bc", size: "large" });
                };
                fileWriter.seek(0);
                var blob = new Blob([csv], { type: 'text/plain' });
                fileWriter.write(blob);
                $.growl({ title: "Application Info", message: 'File saved to Download folder.', location: "bc", size: "large" });
            });
        });
    });
};

function loadModal(pagename) {
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalForm .overlay').removeClass('hide');
            $('#modalForm .modal-body').addClass('hide');
            $('#modalForm .modal-footer').addClass('hide');
            $('#mb').empty();
            $('#mt').empty();
            $('#mt2').empty();
            $(document).find('script[id="pageScript"]').remove();
            $('#mb').load(pagename + '.html');
            t0 = performance.now();
            if (pagename == 'mo_sngObservation') {
                loadAHDefaults();
                if (curIdx == 0) {
                    getNextAnimalID();
                }
            }
            if (pagename == 'mo_grpObservation') {
                loadAHDefaults();
            }
            if (pagename == 'mo_BotObservation') {
                loadPHDefaults();
            }
            if (pagename == 'mo_EntObservation') {
                loadPHDefaults();
            }
            if (pagename == 'mo_PatObservation') {
                loadPHDefaults();
            }
            samples = 0;
            fieldTests = 0;
            numPlants = 0;
        }
    })
        .complete(function (e) {
            $('#form1').find("input[type=text], textarea").val("");
            $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck');
            $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
            if (curIdx > 0) {
                var data = results.observations[curIdx - 1];
                var px = 0;
                console.log(JSON.stringify(data));
                if (curObType < 2 && data.commonName != 'NONE') {
                    $('#form1').find("#commonName").val(data.commonName);
                    loadCommonNameData(data.commonName, data.taxon);
                }
                //console.time('load Modal');
                $.each(data, function (key, value) {
                    //console.time('load Modal 1');
                    if (key.startsWith("plantName_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $("#addPlant").trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                            $('#form1').find("div.hostweed").eq(px).addClass(value.substring(1, 2).toLowerCase());
                            $('div.glossary').find('#' + value.substring(1, 2).toLowerCase()).removeClass('hide');
                            px++;
                            });
                    }
                    if (key.startsWith("plantPic_") && value != "x") {
                        $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        $('#form1').find("img[name='i" + key + "']").attr("src", value);
                    }
                    if (key.startsWith("plantPic_") && value == "x") {
                        $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        $('#form1').find("img[name='i" + key + "']").attr("src", 'images/plant.png');
                    }
                    if (key.startsWith("bsampleId_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                loadBotanySample();
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("sampleId_") && value > 0) {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#addSample').trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    //console.timeEnd('load Modal 1');
                    //console.time('load Modal 2');
                    if (key.startsWith("sampleType_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#form1').find("select[name='" + key + "']").val(value);
                                loadPathogens($('#form1').find("select[name='" + key + "']"));
                            }
                        }).complete(function (e) {
                            $('#form1').find("select[name='" + key + "']").val(value);
                        });
                    }
                    //console.timeEnd('load Modal 2');
                    //console.time('load Modal 3');
                    if (key.startsWith("ftId_") && value > 0) {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#addFieldTest').trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    //console.timeEnd('load Modal 3');
                    //console.time('load Modal 4');
                    if (key.startsWith("fieldTest_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $('#form1').find("select[name='" + key + "']").val(value);
                                loadDiseases($('#form1').find("select[name='" + key + "']"));
                            }
                        }).complete(function (e) {
                            $('#form1').find("select[name='" + key + "']").val(value);
                        });
                    }
                    //console.timeEnd('load Modal 4');
                    //console.time('load Modal 5');
                    if (key == "extObs" && value == "on") {
                        $('#form1').find("input[name='extObserver']").removeClass('hide');
                        $('#form1').find("input[type='checkbox'][name='extObs']").iCheck('check');
                    }
                    if (key == "extObs" && value == "off") {
                        $('#form1').find("input[name='extObserver']").addClass('hide');
                        $('#form1').find("input[type='checkbox'][name='extObs']").iCheck('uncheck');
                    }
                    if (key == "pmConducted" && value == "Yes") {
                        $('#tabPM').removeClass('hide');
                    }
                    if (key == "pmConducted" && value == "No") {
                        $('#tabPM').addClass('hide');
                    }
                    if (key.startsWith("pSampleId_") && value > 0) {
                        $('#addPreSelectedSample').addClass('hide');
                        $('.preSelectedSample').removeClass('hide');
                    }
                    if (key.startsWith("pFtId_") && value > 0) {
                        $('#addPreSelectedFieldTest').addClass('hide');
                        $('.preSelectedFieldTest').removeClass('hide');
                    }
                    if (key.startsWith("plantPic_") && value != "") {
                        $('#form1').find("img[name='" + key + "']").attr("src", "images/" + value);
                    }
                    if (key.startsWith("statTypeVal_")) {
                        $('#form1').find("input[type='button'][name='" + key + "']").prop('value', value);
                    }
                    //console.timeEnd('load Modal 5');
                    //console.time('load Modal 6');
                    $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name='" + key + "'][value='on']").iCheck('check');
                    $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    $('#form1').find("input[type='radio'][name='" + key + "']").val(value);
                    $('#form1').find("select[name='" + key + "']").val(value);
                    $('#form1').find("textarea[name='" + key + "']").val(value);
                    //console.timeEnd('load Modal 6');
                });
                $('#form1').find("input[type='text'][name='id']").val(curIdx);
                $('#form1').find("input[type='text'][name='track_id']").val(curIdx);
                $('#form1').find("input[type='text'][name='age']").inputmask("99:99");
                $('.nextid').text('');
                //console.timeEnd('load Modal');
            }
            else {
                var today = new Date();
                $('#form1').find("input[type='text'][name='latitude']").val(curLat.toFixed(5));
                $('#form1').find("input[type='text'][name='longitude']").val(curLng.toFixed(5));
                $('#form1').find("input[type='text'][name='sDate']").val(today);
                $('#form1').find("input[type='text'][name='id']").val(results.observations.length + 1);
                $('#form1').find("input[type='text'][name='track_id']").val(results.observations.length + 1);
                $('#form1').find("input[type='text'][name='status']").val("0");
                $('#form1').find("input[type='text'][name='obType']").val(curObType);
                $('#form1').find("input[type='text'][name='discipline']").val(curDiscipline);
                $('#form1').find("input[type='text'][name='age']").inputmask("99:99");
                $('.nextid').text('');
            }
        }).done(function () {
            $('#modalForm .overlay').addClass('hide');
            $('#modalForm .modal-body').removeClass('hide');
            $('#modalForm .modal-footer').removeClass('hide');
            t1 = performance.now();
            $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
        });
};

function objectifyForm(formArray) {//serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
    }
    return returnArray;
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

function BindAutoComplete() {
    function log(message) {
        //$("<div>").text(message).prependTo("#log");
        //$("#log").scrollTop(0);
    }
    $(".taxonText").autocomplete({
        source: function (request, response) {
            var names = [];
            $.ajax({
                url: "http://ag-bie.ala.org.au/ws/auto",
                dataType: "json",
                data: {
                    q: request.term,
                    limit: 100
                },
                success: function (data) {
                    $.each(data.autoCompleteList, function () {
                        if (this.name) {
                            names.push(this.matchedNames[0]);
                        }
                        else {
                            names.push('Not Defined');
                        }
                    });
                    response(names);
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            log(ui.item ?
                "Selected: " + ui.item.label :
                "Nothing selected, input was " + this.value);
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
};

function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

$(document).on('click', '#Save', function (e) {
    //var obj = JSON.stringify(objectifyForm(form1));
    //console.log(JSON.stringify(objectifyForm(form1)));
    var obj = objectifyForm(form1);
    if (curIdx > 0) {
        results.observations[curIdx - 1] = obj;
    }
    else {
        //alert(JSON.stringify(obj));
        results.observations.push(obj);
        //curIdx = results.observations.length;
    }
    db.transaction(function (tx) {
        tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
            //alert("Dataset updated.");
            $.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large" });
        });
    }, function (err) {
        $.growl({ title: "Application Error", message: "An error occured while updating row to DB. " + err.message, location: "bc", size: "large" });
        });
    //$('#modalForm').modal('hide');
    ////clearMarkers();
    ////loadMapMarkers();
    ////if (infoWindow) {
    ////    infoWindow.close();
    ////}
});

$(document).on('click', '#SaveExit', function (e) {
    //var obj = JSON.stringify(objectifyForm(form1));
    //console.log(JSON.stringify(objectifyForm(form1)));
    var obj = objectifyForm(form1);
    if (curIdx > 0) {
        results.observations[curIdx - 1] = obj;
    }
    else {
        //alert(JSON.stringify(obj));
        results.observations.push(obj);
        //curIdx = results.observations.length;
    }
    db.transaction(function (tx) {
        tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
            $.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large" });
            //alert("Dataset updated.");
        });
    }, function (err) {
        $.growl({ title: "Application Error", message: "An error occured while updating row to DB. " + err.message, location: "bc", size: "large" });
        });
    $('#modalForm').modal('hide');
    clearMarkers();
    loadMapMarkers();
    if (infoWindow) {
        infoWindow.close();
    }
});

$(document).on('click', '#settings', function (e) {
    $.confirm({
        title: 'App Settings!',
        content: '' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
        '<label>Application Mode is currently set to:</label>' +
        '<select class="appMode form-control"><option value=IAH>International Animal Health (IAH)</option><option value=AH>Animal Health (AH)</option><option value=PH>Plant Health (PH)</option></select>' +
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: 'Submit',
                btnClass: 'btn-blue',
                action: function () {
                    var v_appMode = this.$content.find('.appMode').val();
                    if (!v_appMode) {
                        $.growl({ title: "Application Error", message: "Provide a valid mode: IAH, PH, AH!", location: "bc", size: "large" });
                        return false;
                    }
                    db.transaction(function (tx) {
                        tx.executeSql("UPDATE settings SET settingsval = ? WHERE settingstext = ?", [v_appMode, "AppMode"], function (tx, res) {
                            //alert("Dataset updated.");
                            AppMode = v_appMode;
                            settings.innerHTML = AppMode;
                            $.growl({ title: 'Application Settings', message: 'Application Mode set to:' + v_appMode, location: "bc", size: "large" });
                        });
                    }, function (err) {
                        $.growl({ title: "Application Error", message: "An error occured while updating AppMode to DB. " + err.message, location: "bc", size: "large" });
                    });
                }
            },
            cancel: function () {
                //close
            }
        },
        onContentReady: function () {
            // bind to events
            this.$content.find('.appMode').val(AppMode);
        }
    });
});

$(document).on('click', '#Delete', function (e) {
    $.confirm({
        title: 'Delete Observation?',
        content: 'Do you want to delete this observation?',
        buttons: {
            Ok: function () {
                results.observations.splice(curIdx - 1, 1);
                db.transaction(function (tx) {
                    tx.executeSql("UPDATE observations SET data = ? WHERE id = ?", [JSON.stringify(results), 1], function (tx, res) {
                        //alert("Dataset updated.");
                    });
                }, function (err) {
                    $.growl({ title: "Application Error", message: "An error occured while updating row to DB. " + err.message, location: "bc", size: "large" });
                });
                $('#modalForm').modal('hide');
                table.destroy();
                loadData();
                clearMarkers();
                loadMapMarkers();
            },
            cancel: function () {
                //close
            }
        }
    });
});

$(document).on('click', '#srchTable tbody tr', function () {
    var t0, t1;
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
    var d = table.row(this).data();
    curIdx = d.id;
    curObType = d.obType;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            t0 = performance.now();
            $('.overlay').removeClass('hide');
            $('.modal-body').addClass('hide');
            $('.modal-footer').addClass('hide');
        }
    })
        .complete(function (data) {
            switch (curObType) {
                case "0":
                    loadModal('mo_sngObservation');
                    break;
                case "1":
                    loadModal('mo_grpObservation');
                    break;
                case "2":
                    loadModal('mo_BotObservation');
                    break;
                case "3":
                    loadModal('mo_EntObservation');
                    break;
                case "4":
                    loadModal('mo_PatObservation');
                    break;
            }
            var zi = $('#modalGrid').css('z-index');
            $('#modalForm').css('z-index', zi + 100);
            $('#modalForm').modal();
        }).done(function () {
            $('.overlay').addClass('hide');
            $('.modal-body').removeClass('hide');
            $('.modal-footer').removeClass('hide');
            $('#modalGrid').modal('hide');
            t1 = performance.now();
            $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
        });
});

$(document).on('click', '#srchPHTable tbody tr', function () {
    var t0, t1;
    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
    }
    else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
    var d = table.row(this).data();
    curIdx = d.id;
    curObType = d.obType;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            t0 = performance.now();
            $('.overlay').removeClass('hide');
            $('.modal-body').addClass('hide');
            $('.modal-footer').addClass('hide');
        }
    })
        .complete(function (data) {
            switch (curObType) {
                case "0":
                    loadModal('mo_sngObservation');
                    break;
                case "1":
                    loadModal('mo_grpObservation');
                    break;
                case "2":
                    loadModal('mo_BotObservation');
                    break;
                case "3":
                    loadModal('mo_EntObservation');
                    break;
                case "4":
                    loadModal('mo_PatObservation');
                    break;
            }
            var zi = $('#modalPHGrid').css('z-index');
            $('#modalForm').css('z-index', zi + 100);
            $('#modalForm').modal();
        }).done(function () {
            $('.overlay').addClass('hide');
            $('.modal-body').removeClass('hide');
            $('.modal-footer').removeClass('hide');
            $('#modalPHGrid').modal('hide');
            t1 = performance.now();
            $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
        });
});

$(document).on('click', '.export', function (event) {
    var args = [$('#srchTable_wrapper'), 'export.csv'];
    exportTableToCSV.apply(this, args);
});

$(document).on('click', '.sync', function (event) {
    $.each(results.observations, function (index, value) {
        $.ajax({
            method: "POST",
            url: "http://ec2-52-65-97-167.ap-southeast-2.compute.amazonaws.com:8081/gateway/grpObservations/add",
            data: JSON.stringify(value),
            contentType: "application/json",
            dataType: "json",
            success: function () {
                //$.growl({ title: "Apply Changes", message: "Success! Observations synced to cloud.", location: "bc", size: "large" });
            },
            complete: function () {
                //$.growl({ title: "Apply Changes", message: "Success! Observations synced to cloud.", location: "bc", size: "large" });
            },
            failure: function () {
                $.growl.error({ message: "Sync - Failed!" });
            }
        });
    });
    $.growl({ title: "Apply Changes", message: "Success! Observations synced to cloud.", location: "bc", size: "large" });
});

$(document).on('shown.bs.modal', '#modalPHGrid', function () {
    //loadAHDefaults();
    loadData();
});

$(document).on('hidden.bs.modal', '#modalPHGrid', function () {
    table.destroy();
});

$(document).on('shown.bs.modal', '#modalGrid', function () {
    loadAHDefaults();
    loadData();
});

$(document).on('hidden.bs.modal', '#modalGrid', function () {
    table.destroy();
});

$(document).on('hidden.bs.modal', '#modalForm', function () {
    //table.destroy();
    //loadAHDefaults();
    //loadData();
});

$(document).ready(function () {
    $('.modal-body').height($(window).height() / 1.46);
    $('.overlay').height($(window).height()/1.56);
    $('.datetimepicker').datetimepicker({
        format: 'd-MMM-YYYY hh:mm Z',
        defaultDate: Date.now()
    });
    $('.datepicker').datepicker({
        format: 'd-MMM-YYYY hh:mm Z',
        todayHighlight: true,
        autoclose: true
    });
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
});

$(document).on('ifClicked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    event.preventDefault();
    $('#form1').find("input[type='radio'][name='" + $(this).attr('name') + "']").val($(this).parent('div').next().text());
});

$(document).on('change', 'input:radio', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $('#form1').find("input[type='radio'][name='" + $(this).attr('name') + "']").val($(this).next().text());
    }
});

$(document).on('ifChecked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'optSyndromes' && $(this).val() === 'Yes') {
        $('.addedSyndrome').removeClass('hide');
        $('.addedSyndrome').next('div').removeClass('hide');
    };
    if ($(this).attr('name') === 'optSyndromes' && $(this).val() === 'No') {
        $('.addedSyndrome').addClass('hide');
        $('.addedSyndrome').next('div').addClass('hide');
    };
    if ($(this).attr('name') === 'optObs') {
        $('.obsForm').removeClass('bg-Obs');
        $(this).closest('.obsForm').addClass('bg-Obs');
        curObType = $(this).attr('data-id');
    };
    if ($(this).attr('name') == 'optWounds' && $(this).val() == 'Yes') {
        $('.addMaggotSamples').removeClass('hide');
        $('.addMaggotSamples').next('div').removeClass('hide');
    };
    if ($(this).attr('name') == 'optWounds' && $(this).val() == 'No') {
        $('.addMaggotSamples').addClass('hide');
        $('.addMaggotSamples').next('div').addClass('hide');
    };
    if ($(this).attr('name') == 'pmConducted' && $(this).val() == 'Yes') {
        $('#tabPM').removeClass('hide');
    };
    if ($(this).attr('name') == 'pmConducted' && $(this).val() == 'No') {
        $('#tabPM').addClass('hide');
    };
    //if ($(this).attr('name') == 'optINT' && $(this).val() == 'Yes') {
    //    $('#divINT').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optINT' && $(this).val() == 'No') {
    //    $('#divINT').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optNEC' && $(this).val() == 'Yes') {
    //    $('#divNEC').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optNEC' && $(this).val() == 'No') {
    //    $('#divNEC').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optTHO' && $(this).val() == 'Yes') {
    //    $('#divTHO').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optTHO' && $(this).val() == 'No') {
    //    $('#divTHO').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optABD' && $(this).val() == 'Yes') {
    //    $('#divABD').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optABD' && $(this).val() == 'No') {
    //    $('#divABD').addClass('hide');
    //};
    //if ($(this).attr('name') == 'optMUS' && $(this).val() == 'Yes') {
    //    $('#divMUS').removeClass('hide');
    //};
    //if ($(this).attr('name') == 'optMUS' && $(this).val() == 'No') {
    //    $('#divMUS').addClass('hide');
    //};
    if ($(this).attr('name') == 'optMaggots' && $(this).val() == 'Yes') {
        $('#addMaggotSample').removeClass('hide');
        $('.maggotSamplePlus').removeClass('hide');
        $('.maggotSample').removeClass('hide');
    };
    if ($(this).attr('name') == 'optMaggots' && $(this).val() == 'No') {
        $('#addMaggotSample').addClass('hide');
        $('.maggotSamplePlus').addClass('hide');
        $('.maggotSample').addClass('hide');
    };
    //Plant Helath
    if ($(this).attr('name') == 'addlCollectors') {
        $('#Roles').modal();
    };
    if ($(this).attr('name') == 'otherSample') {
        $(this).parent('div').parent('div').find('input[type="text"]').removeClass('hide');
    };
});

$(document).on('ifChecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'extObs') {
        $('input[name="extObserver"').removeClass('hide');
    };
    if ($(this).attr('name') === 'addlObs') {
        $('.addlObserver').removeClass('hide');
    };
    if ($(this).attr('name').startsWith('ftInvalid')) {
        $(this).closest('.row').find('.diseases').empty();
        $(this).closest('.row').find('select').val("NONE");
    };
    $(this).val('on');
});

$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'extObs') {
        $('input[name="extObserver"').addClass('hide');
    };
    if ($(this).attr('name') === 'addlObs') {
        $('.addlObserver').addClass('hide');
    };
    $(this).val('off');
});

$(document).on('click', '.obsForm', function (e) {
    $('.obsForm').removeClass('bg-Obs');
    $(this).addClass('bg-Obs');
    curObType = $(this).find('input[type=radio][name="optObs"]').attr('data-id');
    curDiscipline = $(this).find('input[type=radio][name="optObs"]').attr('data-discipline');
    $(this).find('input[type="radio"].minimal').iCheck('check');
});

$(document).on('click', '#showFormPH', function (e) {
    var zi;
    var formName = $("input[name='optObs']:checked").val();
    zi = $('#modalPHMenu').css('z-index');
    $('#modalForm').css('z-index', zi + 100);
    $('#modalPHMenu').modal('hide');
    loadModal(formName);
    $('#modalForm').modal();
});

$(document).on('click', '.getGPS', function (e) {
    getGPSLoc();
});

$(document).on('hidden.bs.modal', '#modalForm', function () {
    if (curIdx === 0) {
        newMarker.setMap(null);
    }
});

$(document).on('hidden.bs.modal', '#modalPHMenu', function () {
    if (curIdx === 0) {
        newMarker.setMap(null);
    }
});

$(document).on('click', '#btnData', function () {
    $('#postedData').toggleClass('hide');
});

$(document).on('change', 'input:checkbox', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $(this).val('on');
    } else {
        $(this).val('off');
    }
});

$(document).on('click', "#movetodest", function () {
    $("#source > option:selected").each(function () {
        $(this).remove().appendTo("#destination");
    });
});

$(document).on('click', "#movetosource", function () {
    $("#destination > option:selected").each(function () {
        $(this).remove().appendTo("#source");
    });
});