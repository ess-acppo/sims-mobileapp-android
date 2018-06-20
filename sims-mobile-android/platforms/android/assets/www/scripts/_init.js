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
var curAlt;
var curWkt;
var curDiscipline;

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
var plantName; var Idx;
var numEntoHosts = 0;
var numEntoTargets = 0;
var hostName;
var numPathHosts = 0;
var numPathTargets = 0;
var esamples = 0;
var psamples = 0;
var addlObservers;

var hostweed = '<div class="row col-md-12 hostweed collapsed"><i class="fa fa-arrow-circle-up fa-3x text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-circle-down fa-3x expand text-arrows" data-action="expand"></i><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-2 col-sm-2"><span data-toggle="tooltip" title="" class="badge badge-success" data-original-title="1">1</span><label><span class="bold-red">*</span>Taxon ID</label><input type="text" class="form-control" placeholder="Host Name" name="PlantTaxonId"></div><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Host Name</label><input type="text" class="form-control" placeholder="Host Name" name="PlantTaxonText" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="CountList" value="Count" data-validate="N" data-section="PlantObsTab">&nbsp;<label>Count</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="CountList" value="List" data-validate="N" data-section="PlantObsTab">&nbsp;<label>List</label></div></div><div class="row col-md-12 col-sm-12 sims countArea hide"><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Count/Area</label>&nbsp;<span data-toggle="tooltip" title="2" class="badge bg-grey" data-original-title="2">1</span><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty" name="HostStatCount" value="0" data-section="PlantObsTab"><input type="number" class="qty" name="HostStatAreaNo" value="0" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="CheckFutureSurveyFlag" class="minimal" data-section="PlantObsTab">&nbsp;<label>Flag</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="ExternalPhotoExistFlag" class="minimal" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Latitude</label><input type="number" class="form-control hostweedlat" name="Latitude" placeholder="Latitude" readonly data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Longitude</label><input type="number" class="form-control hostweedlng" name="Longitude" placeholder="Longitude" readonly data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Point WKT<span class="bold-red">*</span></label><input type="text" class="form-control" readonly name="LocationPointWktClob" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Datum</label><select class="form-control" name="GpsDatumId" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3"><button class="btn btn-md btn-default getPlantCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText" style="height:60px;" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><img class="pp" src="images/plant.png" id="plantPic1"><input type="text" class="hide" id="iplantPic1" name="PlantObsAttachment1" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic2"><input type="text" class="hide" id="iplantPic2" name="PlantObsAttachment2" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic3"><input type="text" class="hide" id="iplantPic3" name="PlantObsAttachment3" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic4"><input type="text" class="hide" id="iplantPic4" name="PlantObsAttachment4" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic5"><input type="text" class="hide" id="iplantPic5" name="PlantObsAttachment5" value="" data-section="PlantObsAttachmentTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><i class="fa fa-trash text-danger fa-2x pull-right removePlant" data-action="removePlant"></i></div></div></div>';
var botSample = '<div class="row col-md-12 col-sm-12 sims dynarow sample collapsed"><i class="fa fa-arrow-circle-up fa-3x text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-circle-down fa-3x expand text-arrows" data-action="expand"></i><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><label>Sample Field ID <span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="SampleFieldLabelText" readonly data-section="PlantSampleTab"></div><div class="form-group col-md-7"><label>Additional Collectors</label><br /><input type="checkbox" name="AdditionalCollectorTab" data-section="PlantSampleTab" class="minimal"></div></div><div class="row col-md-12 col-sm-12 sims addlCollectors hide"><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName1" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName2" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName3" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims addlCollectors hide"><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName4" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName5" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName6" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Number Collected <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Number Collected" name="CollectedSampleCount" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Preliminary Taxon ID <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Preliminary ID" name="PrelimTaxonId" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Preliminary Taxon Text <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Preliminary ID" name="PrelimTaxonText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Latitude <span class="bold-red">*</span></label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude" readonly data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Longitude <span class="bold-red">*</span></label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude" readonly data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Point WKT<span class="bold-red">*</span></label><input type="text" class="form-control" readonly name="SamplePointWktClob" data-section="PlantSampleTab"></div><div class="form-group col-md-3 col-sm-3"><label>Datum</label><select class="form-control" name="GpsDatumId" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Time</label><input type="text" class="form-control" placeholder="Time" name="CollectedDatetime" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Altitude</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo" readonly data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText" style="height:60px;" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Identified By</label><select class="form-control" name="HostIdentifiedUserId" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><label>Habit <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Habit" name="HabitText" data-section="PlantSampleTab"></div><div class="form-group col-md-4 col-sm-4"><label>Description <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Description" name="DetailedDescriptionText" data-section="PlantSampleTab"></div><div class="form-group col-md-4 col-sm-4"><label>Habitat <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Habitat" name="HabitatText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><label>Landform <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="LandForm" name="LandformText" data-section="PlantSampleTab"></div><div class="form-group col-md-4 col-sm-4"><label>Soil/Geology <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Soil/Geology" name="SoilGeologyText" data-section="PlantSampleTab"></div><div class="form-group col-md-4 col-sm-4"><label>Abundance</label><input type="text" class="form-control" placeholder="Abundance" name="AbundanceText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-2"><label>Preservation Type</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPreservationTab-SP" class="minimal" data-attr="PlantPreservationTab" data-code="SP" data-desc="Spirit Sample" data-seq="1" data-section="PlantSampleTab">&nbsp;<label>Spirit Sample</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPreservationTab-DN" class="minimal" data-attr="PlantPreservationTab" data-code="DN" data-desc="DNA Sample" data-seq="2" data-section="PlantSampleTab">&nbsp;<label>DNA Sample</label></div><div class="form-group col-md-4 col-sm-4"><input type="checkbox" name="PlantPreservationTab-O" class="minimal" data-attr="PlantPreservationTab" data-code="O" data-desc="Other" data-seq="3" data-section="PlantSampleTab">&nbsp;<label>Other</label>&nbsp;<input type="text" class="form-control hide" placeholder="Other Text" name="BotPlantPreserverOtherText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><input type="checkbox" name="ExternalPhotoExistFlag" class="minimal" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><img class="pp" src="images/plant.png" id="plantPic1"><input type="text" class="hide" id="iplantPic1" name="SampleAttachment1" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic2"><input type="text" class="hide" id="iplantPic2" name="SampleAttachment2" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic3"><input type="text" class="hide" id="iplantPic3" name="SampleAttachment3" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic4"><input type="text" class="hide" id="iplantPic4" name="SampleAttachment4" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic5"><input type="text" class="hide" id="iplantPic5" name="SampleAttachment5" value="" data-section="SampleAttachmentTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><i class="fa fa-trash fa-2x text-danger pull-right removeBotSample"></i></div></div></div>';
var entobox = '<div class="row col-md-12 col-sm-12 entobox collapsed"><i class="fa fa-arrow-circle-up fa-3x text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-circle-down fa-3x expand text-arrows" data-action="expand"></i><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-2 col-sm-2"><span data-toggle="tooltip" title="" class="badge badge-success badge-host" data-original-title="1">1</span><label><span class="bold-red">*</span>Taxon ID</label><input type="text" class="form-control" placeholder="Host Name" name="PlantTaxonId" data-section="PlantObsTab"></div><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Host Name</label><input type="text" class="form-control" placeholder="Host Name" name="PlantTaxonText" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Count/Area</label>&nbsp;<span data-toggle="tooltip" title="2" class="badge bg-grey" data-original-title="2">1</span><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty" name="HostStatCount" value="0" data-section="PlantObsTab"><input type="number" class="qty" name="HostStatAreaNo" value="0" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="CheckFutureSurveyFlag" class="minimal" data-section="PlantObsTab">&nbsp;<label>Flag</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="ExternalPhotoExistFlag" class="minimal" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Method of Observation</label><select class="form-control" name="PlantObsMethodCode" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText" style="height:60px;" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 sims bg-target entotarget"><i class="fa fa-plus fa-2x text-arrows text-info" data-action="addEntoTarget"></i><div class="form-group col-md-2 col-sm-2"><span data-toggle="tooltip" title="" class="badge badge-success badge-target" data-original-title="1">1</span><label>Target Taxon Id</label><input type="text" name="TargetTaxonId" class="input-sm form-control" placeholder="Target Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6"><label>Target Taxon Name</label><input type="text" name="TargetTaxonText" class="input-sm form-control" placeholder="Target Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-2 col-sm-2"><label>Target Count</label><input type="text" name="TargetCount" class="input-sm form-control" placeholder="Target Count" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optA" value="A" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optP" value="P" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optS" value="S" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optND" value="N" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-12 col-sm-12"><label>Comments</label><input type="text" name="CommentText" class="input-sm form-control" placeholder="Comments" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 border-bottom-dark"><i class="fa fa-trash fa-2x text-danger pull-right" data-action="removeEntoTarget"></i></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Life Stage</label><select class="form-control select2" name="PlantLifeStgCode" style="width: 100%;" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Host Plant Status</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantStatusFruitingFlag" class="minimal" value="FR" data-section="PlantObsTab">&nbsp;<label>Fruiting</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantStatusFloweringFlag" class="minimal" value="FL" data-section="PlantObsTab">&nbsp;<label>Flowering</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantStatusFlushing_Flag" class="minimal" value="FU" data-section="PlantObsTab">&nbsp;<label>Flushing</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantStatusDeadWood_Flag" class="minimal" value="DE" data-section="PlantObsTab">&nbsp;<label>Deadwood</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Latitude</label><input type="number" class="form-control entolat" name="Latitude" placeholder="Latitude" readonly data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Longitude</label><input type="number" class="form-control entolng" name="Longitude" placeholder="Longitude" readonly data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Point WKT<span class="bold-red">*</span></label><input type="text" class="form-control" readonly name="LocationPointWktClob" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Datum</label><select class="form-control" name="GpsDatumId" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3"><button class="btn btn-md btn-default getEntoHostCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><img class="pp" src="images/plant.png" id="plantPic1"><input type="text" class="hide" id="iplantPic1" name="PlantObsAttachment1" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic2"><input type="text" class="hide" id="iplantPic2" name="PlantObsAttachment2" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic3"><input type="text" class="hide" id="iplantPic3" name="PlantObsAttachment3" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic4"><input type="text" class="hide" id="iplantPic4" name="PlantObsAttachment4" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic5"><input type="text" class="hide" id="iplantPic5" name="PlantObsAttachment5" value="" data-section="PlantObsAttachmentTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><i class="fa fa-trash text-danger fa-2x pull-right removeEntoHost" data-action="removeEntoHost"></i></div></div></div>';
var entotarget = '<div class="row col-md-12 col-sm-12 sims bg-target entotarget"><i class="fa fa-plus fa-2x text-arrows text-info" data-action="addEntoTarget"></i><div class="form-group col-md-2 col-sm-2"><span data-toggle="tooltip" title="" class="badge badge-success badge-target" data-original-title="1">1</span><label>Target Taxon Id</label><input type="text" name="TargetTaxonId" class="input-sm form-control" placeholder="Target Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6"><label>Target Taxon Name</label><input type="text" name="TargetTaxonText" class="input-sm form-control" placeholder="Target Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-2 col-sm-2"><label>Target Count</label><input type="text" name="TargetCount" class="input-sm form-control" placeholder="Target Count" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optA" value="A" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optP" value="P" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optS" value="S" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optND" value="N" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-12 col-sm-12"><label>Comments</label><input type="text" name="CommentText" class="input-sm form-control" placeholder="Comments" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 border-bottom-dark"><i class="fa fa-trash fa-2x text-danger pull-right" data-action="removeEntoTarget"></i></div></div>';
var entosample = '<div class="row col-md-12 col-sm-12 sims dynarow sample collapsed"><i class="fa fa-arrow-circle-up fa-3x text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-circle-down fa-3x expand text-arrows" data-action="expand"></i><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><label>Sample Field ID <span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="SampleFieldLabelText" readonly data-section="PlantSampleTab"></div><div class="form-group col-md-3 col-sm-3"><label>Additional Collectors</label><br /><input type="checkbox" name="AdditionalCollectorTab" class="minimal" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims addlCollectors hide"><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName1" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName2" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName3" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims addlCollectors hide"><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName4" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName5" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName6" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Number Collected <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Number Collected" name="CollectedSampleCount" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Preliminary ID <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Preliminary ID" name="PrelimTaxonId" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Preliminary Taxon Text <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Preliminary ID" name="PrelimTaxonText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Latitude <span class="bold-red">*</span></label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude" readonly data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Longitude <span class="bold-red">*</span></label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude" readonly data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Point WKT<span class="bold-red">*</span></label><input type="text" class="form-control" readonly name="SamplePointWktClob" data-section="PlantSampleTab"></div><div class="form-group col-md-3 col-sm-3"><label>Datum</label><select class="form-control" name="GpsDatumId" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><label>Time</label><input type="text" class="form-control" placeholder="Time" name="CollectedDatetime" data-section="PlantSampleTab"></div><div class="form-group col-md-4 col-sm-4"><label>Altitude</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo" readonly data-section="PlantSampleTab"></div><div class="form-group col-md-4 col-sm-4"><label>Collection Method</label><select class="form-control" name="EntoCollMethodCode" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText" style="height:30px;" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6"><label>Host/Other <span class="bold-red">*</span></label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="radio" name="HostFlag" class="minimal" value="Y" data-section="PlantSampleTab">&nbsp;<label>Host</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" name="HostFlag" class="minimal" value="N" data-section="PlantSampleTab">&nbsp;<label>Other</label></div><div class="form-group col-md-3 col-sm-3"><label>Host/Other Taxon Id</label><input type="text" class="form-control" placeholder="Other Name" name="HostTaxonId" data-section="PlantSampleTab"></div><div class="form-group col-md-3 col-sm-3"><label>Host/Other Taxon Text</label><input type="text" class="form-control" placeholder="Other Name" name="HostTaxonText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><label>Identified By</label><select class="form-control" name="HostIdentifiedUserId" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Plant Part</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-LE" class="minimal" value="LE" data-section="PlantSampleTab">&nbsp;<label>Leaves</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-FL" class="minimal" value="FL" data-section="PlantSampleTab">&nbsp;<label>Flower</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-FR" class="minimal" value="FR" data-section="PlantSampleTab">&nbsp;<label>Fruit</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-SE" class="minimal" value="SE" data-section="PlantSampleTab">&nbsp;<label>Seeds</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-ST" class="minimal" value="ST" data-section="PlantSampleTab">&nbsp;<label>Stem</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-SH" class="minimal" value="SH" data-section="PlantSampleTab">&nbsp;<label>Shoot</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-RO" class="minimal" value="RO" data-section="PlantSampleTab">&nbsp;<label>Root</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-BR" class="minimal" value="BR" data-section="PlantSampleTab">&nbsp;<label>Branch</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-TR" class="minimal" value="TR" data-section="PlantSampleTab">&nbsp;<label>Trunk</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Preservation Type</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPreservationTab-W7" class="minimal" value="W7" data-section="PlantSampleTab">&nbsp;<label>Wet (Ethanol 70-80%)</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPreservationTab-W8" class="minimal" value="W8" data-section="PlantSampleTab">&nbsp;<label>Wet (Ethanol>80%)</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPreservationTab-RE" class="minimal" value="RE" data-section="PlantSampleTab">&nbsp;<label>Rearing</label></div><div class="form-group col-md-3 col-sm-3">' +
    '<input type="checkbox" name="PlantPreservationTab-DR" class="minimal" value="DR" data-section="PlantSampleTab">&nbsp;<label>Dry</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPreservationTab-FT" class="minimal" value="FT" data-section="PlantSampleTab">&nbsp;<label>FTA Card</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPreservationTab-O" class="minimal" value="O" data-section="PlantSampleTab">&nbsp;<label>Other</label></div><div class="form-group col-md-3 col-sm-3"><input type="text" class="form-control" placeholder="Other Preservation Type" name="PlantPreservOtherText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><label>%Infested </label><select class="form-control" name="EntoInfestedPctCode" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><label>Damage Level </label><select class="form-control" name="EntoDamageLevelCode" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><label>Pest Level </label><select class="form-control" name="EntoPestLevelCode" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Life Stage</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="EntoLifeStgTab-A" class="minimal" value="A" data-section="PlantSampleTab">&nbsp;<label>Adult</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="EntoLifeStgTab-E" class="minimal" value="E" data-section="PlantSampleTab">&nbsp;<label>Egg</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="EntoLifeStgTab-I" class="minimal" value="I" data-section="PlantSampleTab">&nbsp;<label>Immature</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="EntoLifeStgTab-P" class="minimal" value="P" data-section="PlantSampleTab">&nbsp;<label>Pupae</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><input type="checkbox" name="ExternalPhotoExistFlag" class="minimal" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><img class="pp" src="images/plant.png" id="plantPic1"><input type="text" class="hide" id="iplantPic1" name="SampleAttachment1" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic2"><input type="text" class="hide" id="iplantPic2" name="SampleAttachment2" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic3"><input type="text" class="hide" id="iplantPic3" name="SampleAttachment3" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic4"><input type="text" class="hide" id="iplantPic4" name="SampleAttachment4" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic5"><input type="text" class="hide" id="iplantPic5" name="SampleAttachment5" value="" data-section="SampleAttachmentTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12">&nbsp;<i class="fa fa-trash fa-2x text-danger pull-right removeEntoSample"></i></div></div></div>';
var pathbox = '<div class="row col-md-12 col-sm-12 pathbox collapsed"><i class="fa fa-arrow-circle-up fa-3x text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-circle-down fa-3x expand text-arrows" data-action="expand"></i><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-2 col-sm-2"><span data-toggle="tooltip" title="" class="badge badge-success badge-host" data-original-title="1">1</span><label><span class="bold-red">*</span>Taxon ID</label><input type="text" class="form-control" placeholder="Taxon ID" name="PlantTaxonId" data-section="PlantObsTab"></div><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Host Name</label><input type="text" class="form-control" placeholder="Taxon Text" name="PlantTaxonText" data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Statistic Type</label><select class="form-control select2" name="PlantStatisticType" data-section="PlantObsTab"></select></div><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Count/Area</label>&nbsp;<span data-toggle="tooltip" title="2" class="badge bg-grey" data-original-title="2">1</span><br /><button type="button" class="btn btn-md btn-default qtyminus"><i class="fa fa-minus"></i></button><input type="number" class="qty" name="HostStatCount" value="0" data-section="PlantObsTab"><input type="number" class="qty" name="HostStatAreaNo" value="0" data-section="PlantObsTab"><button type="button" class="btn btn-md btn-default qtyplus"><i class="fa fa-plus"></i></button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="CheckFutureSurveyFlag" class="minimal" data-section="PlantObsTab">&nbsp;<label>Flag</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="ExternalPhotoExistFlag" class="minimal" data-section="PlantObsTab">&nbsp;<label>External Photo</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label><span class="bold-red">*</span>Method of Observation</label><select class="form-control" name="PlantObsMethodCode" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Notes</label><textarea class="form-control" rows="6" name="CommentText" style="height:60px;" data-section="PlantObsTab"></textarea></div></div><div class="row col-md-12 col-sm-12 sims bg-target pathtarget"><i class="fa fa-plus fa-2x text-arrows text-info" data-action="addPathTarget"></i><div class="form-group col-md-2 col-sm-2"><span data-toggle="tooltip" title="" class="badge badge-success badge-target" data-original-title="1">1</span><label>Target Taxon ID</label><input type="text" name="TargetTaxonId" class="input-sm form-control" placeholder="Target Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6"><label>Target Taxon Name</label><input type="text" name="TargetTaxonText" class="input-sm form-control" placeholder="Target Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-2 col-sm-2"><label>Target Count</label><input type="text" name="TargetCount" class="input-sm form-control" placeholder="Target Count" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optA" value="A" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optP" value="P" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optS" value="S" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optND" value="N" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-12 col-sm-12"><label>Comments</label><input type="text" name="CommentText" class="input-sm form-control" placeholder="Comments" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 border-bottom-dark"><i class="fa fa-trash fa-2x text-danger pull-right" data-action="removePathTarget"></i></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Life Stage</label><select class="form-control select2" name="PlantLifeStgCode" style="width: 100%;" data-section="PlantObsTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Latitude</label><input type="number" class="form-control pathlat" name="Latitude" placeholder="Latitude" readonly data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Longitude</label><input type="number" class="form-control pathlng" name="Longitude" placeholder="Longitude" readonly data-section="PlantObsTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Point WKT<span class="bold-red">*</span></label><input type="text" class="form-control" readonly name="LocationPointWktClob" data-section="PlantObsTab"></div></div>' +
    '<div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Datum</label><select class="form-control" name="GpsDatumId" data-section="PlantObsTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3 col-md-3 col-sm-3"><button class="btn btn-md btn-default getPathHostCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><img class="pp" src="images/plant.png" id="plantPic1"><input type="text" class="hide" id="iplantPic1" name="PlantObsAttachment1" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic2"><input type="text" class="hide" id="iplantPic2" name="PlantObsAttachment2" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic3"><input type="text" class="hide" id="iplantPic3" name="PlantObsAttachment3" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic4"><input type="text" class="hide" id="iplantPic4" name="PlantObsAttachment4" value="" data-section="PlantObsAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic5"><input type="text" class="hide" id="iplantPic5" name="PlantObsAttachment5" value="" data-section="PlantObsAttachmentTab"></div></div><div class="row col-md-12 col-sm-12 col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12 col-md-12 col-sm-12"><i class="fa fa-trash text-danger fa-2x pull-right removePathHost" data-action="removePathHost"></i></div></div></div>';
var pathtarget = '<div class="row col-md-12 col-sm-12 sims bg-target pathtarget"><i class="fa fa-plus fa-2x text-arrows text-info" data-action="addPathTarget"></i><div class="form-group col-md-2 col-sm-2"><span data-toggle="tooltip" title="" class="badge badge-success badge-target" data-original-title="1">1</span><label>Target Taxon ID</label><input type="text" name="TargetTaxonId" class="input-sm form-control" placeholder="Target Taxon ID" data-section="PlantObsTargetTab"></div><div class="form-group col-md-6 col-sm-6"><label>Target Taxon Name</label><input type="text" name="TargetTaxonText" class="input-sm form-control" placeholder="Target Taxon Text" data-section="PlantObsTargetTab"></div><div class="form-group col-md-2 col-sm-2"><label>Target Count</label><input type="text" name="TargetCount" class="input-sm form-control" placeholder="Target Count" data-section="PlantObsTargetTab"></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optA" value="A" data-section="PlantObsTargetTab">&nbsp;<label>Not Observed</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optP" value="P" data-section="PlantObsTargetTab">&nbsp;<label>Present</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optS" value="S" data-section="PlantObsTargetTab">&nbsp;<label>Suspected</label></div><div class="form-group col-md-3 col-sm-3"><input type="radio" class="minimal" name="TargetObservedCode" id="optND" value="N" data-section="PlantObsTargetTab">&nbsp;<label>Not Done</label></div><div class="form-group col-md-12 col-sm-12"><label>Comments</label><input type="text" name="CommentText" class="input-sm form-control" placeholder="Comments" data-section="PlantObsTargetTab"></div><div class="form-group col-md-12 col-sm-12 border-bottom-dark"><i class="fa fa-trash fa-2x text-danger pull-right" data-action="removePathTarget"></i></div></div>';
var pathsample = '<div class="row col-md-12 col-sm-12 sims dynarow sample collapsed"><i class="fa fa-arrow-circle-up fa-3x text-arrows collapse hide" data-action="collapse"></i><i class="fa fa-arrow-circle-down fa-3x expand text-arrows" data-action="expand"></i><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><label>Sample Field ID <span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="SampleFieldLabelText" readonly data-section="PlantSampleTab"></div><div class="form-group col-md-3 col-sm-3"><label>Additional Collectors</label><br /><input type="checkbox" name="AdditionalCollectorTab" class="minimal"></div></div><div class="row col-md-12 col-sm-12 sims addlCollectors hide"><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName1" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName2" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName3" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims addlCollectors hide"><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName4" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName5" data-section="PlantSampleTab"></select></div><div class="form-group col-md-4 col-sm-4"><select class="form-control" name="AdditionalCollectorName6" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><label>Number Collected <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Number Collected" name="CollectedSampleCount" data-section="PlantSampleTab"></div><div class="form-group col-md-4 col-sm-4"><label>Linked Sample #</label><input type="text" class="form-control" placeholder="Linked Sample #" name="LinkedSampleFieldLabelText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Preliminary ID <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Preliminary ID" name="PrelimTaxonId" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Preliminary Taxon Text <span class="bold-red">*</span></label><input type="text" class="form-control" placeholder="Preliminary ID" name="PrelimTaxonText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Latitude <span class="bold-red">*</span></label><input type="number" class="form-control samplelat" placeholder="Latitude" name="Latitude" readonly data-section="PlantSampleTab">' +
    '</div><div class="form-group col-md-6 col-sm-6"><label>Longitude <span class="bold-red">*</span></label><input type="number" class="form-control samplelng" placeholder="Longitude" name="Longitude" readonly data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Point WKT<span class="bold-red">*</span></label><input type="text" class="form-control" readonly name="SamplePointWktClob" data-section="PlantSampleTab"></div><div class="form-group col-md-3 col-sm-3"><label>Datum</label><select class="form-control" name="GpsDatumId" data-section="PlantSampleTab"><option>WGS84</option><option>GDA94</option></select></div><div class="form-group col-md-3 col-sm-3"><button class="btn btn-md btn-default getSampleCoords"><i class="fa fa-map-marker text-info"></i>&nbsp;Get Coordinates</button></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Time</label><input type="text" class="form-control" placeholder="Time" name="CollectedDatetime" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Altitude</label><input type="text" class="form-control samplealt" placeholder="Altitude" name="CollectedAltitudeNo" readonly data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><label>Additional Comments</label><textarea class="form-control" rows="6" name="CommentText" style="height:30px;" data-section="PlantSampleTab"></textarea></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Host/Other <span class="bold-red">*</span></label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><input type="radio" name="HostFlag" class="minimal" value="Y" data-section="PlantSampleTab">&nbsp;<label>Host</label></div><div class="form-group col-md-6 col-sm-6"><input type="radio" name="HostFlag" class="minimal" value="N" data-section="PlantSampleTab">&nbsp;<label>Other</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Host/Other Taxon Id</label><input type="text" class="form-control" placeholder="Other Name" name="HostTaxonId" data-section="PlantSampleTab"></div><div class="form-group col-md-6 col-sm-6"><label>Host/Other Taxon Text</label><input type="text" class="form-control" placeholder="Other Name" name="HostTaxonText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Identified By</label><select class="form-control" name="HostIdentifiedUserId" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Plant Part</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-LE" class="minimal" value="LE" data-section="PlantSampleTab">&nbsp;<label>Leaves</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-FL" class="minimal" value="FL" data-section="PlantSampleTab">&nbsp;<label>Flower</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-FR" class="minimal" value="FR" data-section="PlantSampleTab">&nbsp;<label>Fruit</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-SE" class="minimal" value="SE" data-section="PlantSampleTab">&nbsp;<label>Seeds</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-ST" class="minimal" value="ST" data-section="PlantSampleTab">&nbsp;<label>Stem</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-SH" class="minimal" value="SH" data-section="PlantSampleTab">&nbsp;<label>Shoot</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-RO" class="minimal" value="RO" data-section="PlantSampleTab">&nbsp;<label>Root</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-BR" class="minimal" value="BR" data-section="PlantSampleTab">&nbsp;<label>Branch</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-TR" class="minimal" value="TR" data-section="PlantSampleTab">&nbsp;<label>Trunk</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-WP" class="minimal" value="WP" data-section="PlantSampleTab">&nbsp;<label>Whole Plant</label></div><div class="form-group col-md-3 col-sm-3"><input type="checkbox" name="PlantPartTab-SO" class="minimal" value="SO" data-section="PlantSampleTab">&nbsp;<label>Soil</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><label>Symptoms</label><input type="text" class="form-control" placeholder="Symptoms" name="PathSymptomsText" data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Preservation Type <span class="bold-red">*</span></label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><input type="checkbox" name="PlantPreservationTab-FR" class="minimal" value="FR" data-section="PlantSampleTab">&nbsp;<label>Fresh</label></div><div class="form-group col-md-4 col-sm-4"><input type="checkbox" name="PlantPreservationTab-PR" class="minimal" value="PR" data-section="PlantSampleTab">&nbsp;<label>Pressed Specimen</label></div><div class="form-group col-md-4 col-sm-4"><input type="checkbox" name="PlantPreservationTab-DE" class="minimal" value="DE" data-section="PlantSampleTab">&nbsp;<label>Dessicate</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><input type="checkbox" name="PlantPreservationTab-EX" class="minimal" value="EX" data-section="PlantSampleTab">&nbsp;<label>Extract</label></div><div class="form-group col-md-4 col-sm-4"><input type="checkbox" name="PlantPreservationTab-IS" class="minimal" value="IS" data-section="PlantSampleTab">&nbsp;<label>Isolation</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-4 col-sm-4"><input type="checkbox" name="PlantPreservationTab-O" class="minimal" value="O" data-section="PlantSampleTab">&nbsp;<label>Other</label></div><div class="form-group col-md-4 col-sm-4"><input type="text" class="form-control" placeholder="Other Preservation Type" name="PlantPreservOtherText" readonly data-section="PlantSampleTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Incidence <span class="bold-red">*</span></label><select class="form-control" name="PathIncidCode" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-6 col-sm-6"><label>Severity <span class="bold-red">*</span></label><select class="form-control" name="PathSevCode" data-section="PlantSampleTab"></select></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><input type="checkbox" name="ExternalPhotoExistFlag" class="minimal" data-section="PlantSampleTab">&nbsp;&nbsp;<label>Photo(s) taken using external camera</label></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12"><img class="pp" src="images/plant.png" id="plantPic1"><input type="text" class="hide" id="iplantPic1" name="SampleAttachment1" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic2"><input type="text" class="hide" id="iplantPic2" name="SampleAttachment2" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic3"><input type="text" class="hide" id="iplantPic3" name="SampleAttachment3" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic4"><input type="text" class="hide" id="iplantPic4" name="SampleAttachment4" value="" data-section="SampleAttachmentTab"><img class="pp" src="images/plant.png" id="plantPic5"><input type="text" class="hide" id="iplantPic5" name="SampleAttachment5" value="" data-section="SampleAttachmentTab"></div></div><div class="row col-md-12 col-sm-12 sims"><div class="form-group col-md-12 col-sm-12">&nbsp;<i class="fa fa-trash fa-2x text-danger pull-right removePathSample"></i></div></div></div>';
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
    var image = $('<img name="" src="file:///storage/emulated/0/maps/PNG/' + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>');
    image.error(function () {
        div.innerHTML = '<img name="" src="file:///storage/emulated/0/maps/empty.jpg"/>';
    });
    div.innerHTML = '<img name="" src="file:///storage/emulated/0/maps/PNG/' + zoom + "/" + coord.x + "/" + coord.y + '.jpg"/>';  
    div.style.width = this.tileSize.width + 'px'; div.style.height = this.tileSize.height + 'px';
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
    today = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();
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
                for (var i = 0; i < results.observations.length; i++) {
                    var wkt = new Wkt.Wkt();
                    wkt.read(results.observations[i].ObservationWhereWktClob);
                    wkt.toObject();
                    var latLng = new google.maps.LatLng(wkt.toJson().coordinates[1], wkt.toJson().coordinates[0]);
                    var ti = results.observations[i].id.toString().trim() + "/" + results.observations[i].PlantDisciplineCode.toString().trim();
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        title: ti
                    });
                    markers.push(marker);
                    google.maps.event.addListener(marker, 'click', function () {
                        curIdx = this.title.split("/")[0];
                        var curD = "'" + this.title.split("/")[1].toString().trim() + "'";
                        curLat = this.getPosition().lat();
                        curLng = this.getPosition().lng();
                        //curAlt = this.getPosition().altitude();
                        if (infoWindow) {
                            infoWindow.close();
                        }
                        infoWindow = new google.maps.InfoWindow({
                            content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                            '<button class"btn btn-circle btn-info btn-lg edit" onclick="launchModal(' + curIdx + ',' + curD + ')"><i class="fa fa-pencil fa-2x"></i></button></div></div>'
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
                    url: "data/observations.json",
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
                        clearMarkers();
                        results = JSON.parse(data);
                        for (var i = 0; i < results.observations.length; i++) {
                            var wkt = new Wkt.Wkt();
                            wkt.read(results.observations[i].ObservationWhereWktClob);
                            wkt.toObject();
                            var latLng = new google.maps.LatLng(wkt.toJson().coordinates[1], wkt.toJson().coordinates[0]);
                            var ti = results.observations[i].id.toString().trim() + "/" + results.observations[i].PlantDisciplineCode.toString().trim();
                            var marker = new google.maps.Marker({
                                position: latLng,
                                map: map,
                                title: ti                                
                            });
                            google.maps.event.addListener(marker, 'click', function () {
                                curIdx = this.title.split("/")[0];
                                var curD = "'" + this.title.split("/")[1].toString().trim() + "'";
                                curLat = this.getPosition().lat();
                                curLng = this.getPosition().lng();
                                //curAlt = this.getPosition().altitude();
                                if (infoWindow) {
                                    infoWindow.close();
                                }
                                infoWindow = new google.maps.InfoWindow({
                                    content: '<div id="content"><h4>Observation ' + this.title + '</h4><div id="bodyContent">' +
                                    '<button class"btn btn-circle btn-info btn-lg edit" onclick="launchModal(' + curIdx + ',' + curD + ')"><i class="fa fa-pencil fa-2x"></i></button></div></div>'
                                });
                                infoWindow.setPosition(this.position);
                                infoWindow.open(map);
                                map.setCenter(this.position);
                            });
                        }
                        db.transaction(function (tx) {
                            tx.executeSql("UPDATE observations SET data = ?,filedt = ? WHERE id = ?", [JSON.stringify(results), today, 1], function (tx, res) {
                                //alert("Dataset updated.");
                                //$.growl({ title: "Changes Saved!", message: "Your changes have been saved!", location: "bc", size: "large" });
                            });
                        }, function (err) {
                            $.growl({ title: "Application Error", message: "An error occured while updating data to DB. " + err.message, location: "bc", size: "large" });
                        });
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
    curLat = newMarker.getPosition().lat();
    curLng = newMarker.getPosition().lng();
    curWkt = "POINT (" + curLng.toFixed(5) + " " + curLat.toFixed(5) + ")";
    //curAlt = newMarker.getPosition().altitude();
    if (curLat < -10.713507 || curLat > -1.48189 || curLng < 131.756836 || curLng > 156.124512) {
        $.growl({ title: "Out of bounds!", message: "Location is outside map bounds!", location: "bc", size: "large" });
        newMarker.setMap(null);
    }
    else {
        curIdx = -1;
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
        };
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
            if (position.coords.latitude < -10.713507 || position.coords.latitude > -1.48189 || position.coords.longitude < 131.756836 || position.coords.longitude > 156.124512) {
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

//function getGPSLoc() {
//    var t0, t1;
//    t0 = performance.now();
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function (position) {
//            $('#form1').find("input[type='text'][name='latitude']").val(position.coords.latitude);
//            $('#form1').find("input[type='text'][name='longitude']").val(position.coords.longitude);
//            $('#form1').find("input[type='text'][name='altitude']").val(position.coords.altitude);
//        }, function () {
//            handleLocationError(true, infoWindow, map.getCenter());
//        });
//    } else {
//        // Browser doesn't support Geolocation
//        handleLocationError(false, infoWindow, map.getCenter());
//    };
//    t1 = performance.now();
//    $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
//};

function getAltitude() {
    //var t0, t1;
    //t0 = performance.now();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            //$('#form1').find("input[type='text'][name='latitude']").val(position.coords.latitude);
            //$('#form1').find("input[type='text'][name='longitude']").val(position.coords.longitude);
            $('#form1').find("input[type='number'][name='AltitudeNo']").val(position.coords.altitude);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    };
    //t1 = performance.now();
    //$('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
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
    curDiscipline = f;
    switch (f) {
        case 0:
            loadModal('mo_sngObservation');
            break;
        case 1:
            loadModal('mo_grpObservation');
            break;
        case 'B':
            loadModal('mo_BotObservation');
            break;
        case 'E':
            loadModal('mo_EntObservation');
            break;
        case 'P':
            loadModal('mo_PatObservation');
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
                return (n.PlantDisciplineCode === 'S');
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
                    }
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
                return (n.PlantDisciplineCode === 'S' || n.PlantDisciplineCode === 'G');
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
                    }
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
                return (n.PlantDisciplineCode === 'P' || n.PlantDisciplineCode === 'E' || n.PlantDisciplineCode === 'B');
            });
            table = $('#srchPHTable').DataTable({
                "data": data,
                "columns": [
                    { "data": "id" },
                    {
                        "data": "PlantDisciplineCode",
                        "render": function (data, type, row, meta) {
                            if (data == 'S') return "Single";
                            if (data == 'G') return "Group";
                            if (data == 'B') return "Botany";
                            if (data == 'E') return "Entomology";
                            if (data == 'P') return "Pathology";
                        }
                    },
                    { "data": "SurvActivityId" },
                    { "data": "SiteId" },
                    {
                        "data": "ObservationDate",
                        "render": function (data, type, row, meta) {
                            return moment(data).format("YYYY-MM-DD");
                        }
                    },
                    { "data": "WaypointNumber" },
                    { "data": "ObservationWhereWktClob" },
                    { "data": "ObservWhereGpsDatumId" },
                    {
                        "data": "status",
                        "render": function (data, type, row, meta) {
                            if (data == 0) return "Saved";
                            if (data == 1) return "Submitted";
                        }
                    }
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
    //table.column(10).visible(false);
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
        today = yyyy.toString() + mm.toString() + dd.toString();
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
    console.log(JSON.stringify(objectifyPHForm(form1)));
    var obj = objectifyPHForm(form1);
    if (curIdx > 0) {
        results.observations[curIdx - 1] = obj;
    }
    else {
        //console.log(JSON.stringify(obj));
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
    //clearMarkers();
    //loadMapMarkers();
    //if (infoWindow) {
    //    infoWindow.close();
    //}
});

$(document).on('click', '#SaveExit', function (e) {
    //var obj = JSON.stringify(objectifyForm(form1));
    console.log(JSON.stringify(objectifyPHForm(form1)));
    var obj = objectifyPHForm(form1);
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
                //table.destroy();
                //loadData();
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
    curDiscipline = d.PlantDisciplineCode;
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
            switch (curDiscipline) {
                case "0":
                    loadModal('mo_sngObservation');
                    break;
                case "1":
                    loadModal('mo_grpObservation');
                    break;
                case "B":
                    loadModal('mo_BotObservation');
                    break;
                case "E":
                    loadModal('mo_EntObservation');
                    break;
                case "P":
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
    curDiscipline = d.PlantDisciplineCode;
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
            switch (curDiscipline) {
                case "0":
                    loadModal('mo_sngObservation');
                    break;
                case "1":
                    loadModal('mo_grpObservation');
                    break;
                case "B":
                    loadModal('mo_BotObservation');
                    break;
                case "E":
                    loadModal('mo_EntObservation');
                    break;
                case "P":
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
    loadPHDefaults();
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
    clearMarkers();
    loadMapMarkers();
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

$(document).on('click', '.obsForm', function (e) {
    $('.obsForm').removeClass('bg-Obs');
    $(this).addClass('bg-Obs');
    curDiscipline = $(this).find('input[type=radio][name="optObs"]').attr('data-discipline');
    $(this).find('input[type="radio"].minimal').iCheck('check');
});

$(document).on('click', '#showFormPH', function (e) {
    var zi;
    var formName = $("input[name='optObs']:checked").val();
    if (formName) {
        zi = $('#modalPHMenu').css('z-index');
        $('#modalForm').css('z-index', zi + 100);
        $('#modalPHMenu').modal('hide');
        loadModal(formName);
        $('#modalForm').modal();
    }
});

//$(document).on('click', '.getGPS', function (e) {
//    getGPSLoc();
//});

$(document).on('hidden.bs.modal', '#modalForm', function () {
    if (curIdx === -1) {
        newMarker.setMap(null);
    }
});

$(document).on('hidden.bs.modal', '#modalPHMenu', function () {
    if (curIdx === -1) {
        newMarker.setMap(null);
    }
});

$(document).on('click', '#btnData', function () {
    $('#postedData').toggleClass('hide');
});

$(document).on('change', 'input:checkbox', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $(this).val('Y');
    } else {
        $(this).val('N');
    }
});