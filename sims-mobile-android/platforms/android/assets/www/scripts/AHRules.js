var bcs = '<div class="form-group col-md-3 col-sm-3 col-xs-3 ripple"><input type="radio" class="minimal" name="bodyConditionScore_M_N" value="0" data-code="0" data-validate="Y">&nbsp;<label class="bcstext"></label></div>';
var defSyndrome = '<div class="row col-md-12 col-sm-12 col-xs-12 dynarow defSyndromeX"><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="text" class="form-control" name="SyndromeCode_M_S" value=""></div><div class="form-group col-md-9 col-sm-9 col-xs-9"><input type="text" class="form-control" name="SyndromeText_M_S" value=""></div><div class="form-group col-md-3 col-sm-3 col-xs-3 ripple"><input type="radio" class="minimal" name="SyndromeFlag_M_S" data-code="Y" data-validate="Y" value="Y">&nbsp;<label>Yes</label></div><div class="form-group col-md-3 col-sm-3 col-xs-3 ripple"><input type="radio" class="minimal" name="SyndromeFlag_M_S" data-code="N" data-validate="Y" value="N">&nbsp;<label>No</label></div><div class="form-group col-md-6 col-sm-6 col-xs-6 defSyndComments hide"><label><span class="bold-red">*</span>Comments</label><input type="text" class="form-control" placeholder="Syndrome Comments" name="SyndromeComments_O_S"></div></div>';
var syndrome = '<div class="form-group col-md-6 col-sm-6 col-xs-9"><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="text" class="form-control" name="SyndromeCode_M_S" value=""></div><div class="form-group col-md-9 col-sm-9 col-xs-9"><input type="text" class="form-control" name="SyndromeText_M_S" value=""></div></div><div class="form-group col-md-6 col-sm-6 col-xs-3"><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeSyndrome"><i class="fa fa-remove"></i></a></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label><span class="bold-red">*</span>Comments</label><input type="text" class="form-control" placeholder="Syndrome Comments" name="SyndromeComments_O_S"></div></div>';
var speciesTaxonSyndromSamples;
var syndromes = 0;
var syndromesData;
var possibleSamples;
var sampleTypes;
var defFieldTests;
var defaultSpecies;
var fieldTestsData;
/* AH Initialized variables */
var species = '<div class="row col-md-12 dynarow"><div class="form-group col-xs-2"><input type="text" class="form-control speciesText"/></div><div class="form-group col-xs-2"><label>Taxon Name<span class="bold-red">*</span></label></div><div class="form-group col-xs-2"><input type="text" class="form-control taxonText" placeholder="Taxon Name" name="taxonName"></div><div class="form-group col-xs-3" ><label>Number in Group<span class="bold-red">*</span></label></div><div class="form-group col-xs-1"><input type="text" class="form-control" placeholder="#" name="Number"></div><div class="form-group col-xs-1"><button type="button" class="btn btn-danger btn-circle btn-xs pull-right removeSpecies"><i class="fa fa-times-circle fa-2x"></i></button></div></div>';
var fieldtest = '<div class="row col-md-12 col-sm-12 col-xs-12 fieldtest collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*</span>Fieldtest Name</label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeFieldTest"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test ID</label><input type="text" class="form-control" placeholder="Field Test ID" readonly name="FieldTestID_M_N" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Name</label><input type="text" class="form-control" placeholder="Field Test Name" name="FieldTestName_M_S" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test</label><select class="form-control fieldTest" name="FieldTests_M_S"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="InvalidFlag_M_S" class="minimal">&nbsp;<label>Invalid</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Diseases</label><div class="row col-md-12 col-sm-12 col-xs-12 diseases"></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Comments</label><textarea class="form-control" rows="5" name="FieldTestComment_O_S" data-name="FieldTest-Additional Comments" data-section="AnimalFieldTestTab"></textarea></div></div></div>';
var preFieldtest = '<div class="row col-md-12 col-sm-12 col-xs-12 fieldtest collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*</span>Fieldtest Name</label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removePreFieldTest"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test ID</label><input type="text" class="form-control" placeholder="Field Test ID" readonly name="PFieldTestID_M_N" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Name</label><input type="text" class="form-control" placeholder="Field Test Name" name="PFieldTestName_M_S" /></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test</label><select class="form-control fieldTest" name="PFieldTests_M_S"></select></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="checkbox" name="PInvalidFlag_M_S" class="minimal">&nbsp;<label>Invalid</label></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Diseases</label><div class="row col-md-12 col-sm-12 col-xs-12 diseases"></div></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Field Test Comments</label><textarea class="form-control" rows="5" name="PFieldTestComment_O_S" data-name="FieldTest-Additional Comments" data-section="AnimalFieldTestTab"></textarea></div></div></div>';
var maggotSample = '<div class="row col-md-12 dynarow maggotSample"><div class="form-group col-md-12 col-sm-12 col-xs-12"><i class="fa fa-remove fa-2x text-danger removeMaggotSample pull-right"></i><label class="sampleName">Maggot Sample</label></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label>Sample Field Id<span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field Id" name="msfieldID" value="1"></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label>Sample Type<span class="bold-red">*</span></label><select class="form-control" name="msType"><option selected>Maggots</option></select></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label>Pathogen/Test Type</label><br /><input type="checkbox" class="form-control minimal" name="swfExcl" value="swfExcl" checked>&nbsp;<label>SWF Exclusion</label></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label>Additional Comment</label><textarea class="form-control" rows="3" name="msNotes" placeholder="Notes ..."></textarea></div></div>';
var animalSample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample FieldID </label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removeAnimalSample"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control" placeholder="Sample Field ID" name="SampleFieldLabelText_M_S" readonly data-name="Sample-Field Label" data-section="AnimalSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Sample Type</label><select class="form-control sampleType" name="SampleType_M_S" data-name="Sample-Type" data-section="AnimalSampleTab"></select></div></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 col-sm-12 col-xs-12 testTypes"></div></div></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="5" name="AdditionalComments_O_S" data-name="Sample-Additional Comments" data-section="AnimalSampleTab"></textarea></div></div></div>';
var preAnimalSample = '<div class="row col-md-12 col-sm-12 col-xs-12 sample collapsed"><div class="form-group col-md-6 col-sm-6 col-xs-7"><span data-toggle="tooltip" title="" class="badge bg-gray-blue mxr-5" data-original-title="1">1</span><label><span class="bold-red">*&nbsp;</span>Sample FieldID </label></div><div class="form-group col-md-6 col-sm-6 col-xs-5"><a href="#" class="form-control btn btn-md btn-default text-arrows collapse hide" data-action="collapse"><i class="fa fa-arrow-up"></i></a><a href="#" class="form-control btn btn-md btn-default text-arrows expand" data-action="expand"><i class="fa fa-arrow-down"></i></a><a href="#" class="form-control btn btn-md btn-danger text-arrows-2 removePreSample"><i class="fa fa-remove"></i></a></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><input type="text" class="form-control nextid" placeholder="Sample Field ID" name="PSampleFieldLabelText_M_S" readonly data-name="Sample-Field Label" data-section="AnimalSampleTab"></div></div><div class="row col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label><span class="bold-red">*&nbsp;</span>Sample Type</label><select class="form-control sampleType" name="PSampleType_M_S" data-name="Sample-Type" data-section="AnimalSampleTab"></select></div></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 col-sm-12 col-xs-12 testTypes"></div></div></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><div class="form-group col-md-6 col-sm-6 col-xs-12"><label>Additional Comments</label><textarea class="form-control" rows="5" name="PAdditionalComments_O_S" data-name="Sample-Additional Comments" data-section="AnimalSampleTab"></textarea></div></div></div>';
var animalAttachment = '<div class="form-group col-md-2 col-sm-2 col-xs-2"><img class="pp pull-right" src="images/plant.png" name="iAnimalAttachment_M_S"></div><div class="form-group col-md-7 col-sm-8 col-xs-8"><input type="text" class="form-control" name="AnimalAttachmentD_M_S" value=""><textarea class="form-control hide" name="AnimalAttachment_M_S" rows="5" cols="5"></textarea></div><div class="form-group col-md-2 col-sm-1 col-xs-1"><i class="fa fa-remove text-info fa-2x removeAnimalAttachment" style="cursor:pointer;"></i></div></div>';
var samples = 0;
var fieldTests = 0;
var ActivityDataAH;

var hidWidth;
var scrollBarWidths = 40;
/* AH Initialized variables */

function syncActivityDataAH() {
    //var settings = {
    //    "async": false,
    //    "crossDomain": true,
    //    "url": ActivityAddress,
    //    "method": "GET",
    //    "beforeSend": function () {
    //        //$.growl.notice({ title: "", message: "Syncing Activity Data ...", location: "bc", size: "small" });
    //    },
    //    "headers": {
    //        "authorization": authCode,
    //        "cache-control": "no-cache"
    //    }
    //};
    //$.ajax(settings).done(function (data) {
    //    ActivityDataAH = data;
    //    //siteData = data.activities[0].sites;
    //    //programId = data.activities[0].programId;
    //    lastSurvActValue = data.activities[0].activityId;
    //    db.transaction(function (tx) {
    //        tx.executeSql("DELETE FROM activitydataAH", [], function (tx, res) {
    //            //alert("Rows deleted.");
    //        });
    //    }, function (err) {
    //        $.growl.error({ title: "", message: "An error occured while deleting ActivityData from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
    //    });
    //    db.transaction(function (tx) {
    //        tx.executeSql("INSERT INTO activitydataAH (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'activity', JSON.stringify(ActivityDataAH)], function (tx, res) {
    //            //alert("Row inserted.");
    //        });
    //    }, function (err) {
    //        $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
    //    });
    //    db.transaction(function (tx) {
    //        tx.executeSql("UPDATE activitydataAH SET settingsval = ? WHERE id = ?", [JSON.stringify(ActivityDataAH), 1], function (tx, res) {
    //            //alert("Dataset updated.");
    //        });
    //    }, function (err) {
    //        $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
    //    });
    //}).fail(function (response) {
    //    $.growl.error({ title: "", message: "An error occurred while fetching Activity Data. " + response.responseText, location: "tc", size: "large", fixed: "true" });
    //    });

    $.getJSON("data/feralActivity.json", function (data) {
        ActivityDataAH = data;
        lastSurvActValue = data.activities[0].activityId;
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM activitydataAH", [], function (tx, res) {
                //alert("Rows deleted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while deleting ActivityData from DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO activitydataAH (id, settingstext, settingsval) VALUES (?,?,?)", [1, 'activity', JSON.stringify(ActivityDataAH)], function (tx, res) {
                //alert("Row inserted.");
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
        db.transaction(function (tx) {
            tx.executeSql("UPDATE activitydataAH SET settingsval = ? WHERE id = ?", [JSON.stringify(ActivityDataAH), 1], function (tx, res) {
                //alert("Dataset updated.");
                loadActivityDataAH();
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    });
}
function loadActivityDataAH() {
    $("#SurvActivityIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
    $.each(ActivityDataAH.activities, function (key, val) {
        if (val.programId === downerTeam) {
            var option = $('<option />');
            option.attr('value', val.activityId).text(val.activityName);
            $("#SurvActivityIdAH").append(option);
        }
    });
    $("#curActivities").find('option').remove().end().append($('<option value="0">- select -</option>'));
    $.each(ActivityDataAH.activities, function (key, val) {
        if (val.programId === downerTeam) {
            var option = $('<option />');
            option.attr('value', val.activityId).text(val.activityName);
            $("#curActivities").append(option);
        }
    });
    //$("#SiteIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
    //$.each(siteData, function (key, val) {
    //    var option = $('<option />');
    //    option.attr('value', val.id).text(val.name);
    //    $("#form1").find('select[id="SiteIdAH"]').append(option);
    //});
    //$("#SiteIdAH").append($('<option value="99999">New Site</option>'));
}
function refreshActivityDataAH(str) {
    var arr = ActivityDataAH.activities.filter(function (el) {
        return (el.activityId === Number(str));
    });
    if (arr && arr.length > 0) {
        siteData = arr[0].sites;
        programId = arr[0].programId;
        lastSurvActValue = arr[0].activityId;
        lastSiteValue = 0;
        //db.transaction(function (tx) {
        //    tx.executeSql("SELECT * FROM staffdataAH WHERE settingstext = ?", [programId + 'staff'], function (tx, res) {
        //        //This is not the first load
        //        if (res.rows && res.rows.length > 0) {
        //            //alert(JSON.stringify(res.rows.item(0).settingsval));
        //            staffDataS = JSON.parse(res.rows.item(0).settingsval);
        //        }
        //        else {
        //            $.growl.error({ title: "", message: "No staff Data available for this Activity.", location: "tc", size: "large", fixed: "true" });
        //        }
        //    });
        //}, function (err) {
        //    $.growl.error({ title: "", message: "An error occured while loading staff Data. " + err.message, location: "tc", size: "large", fixed: "true" });
        //});
    }
    //$("#SiteIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
    //$.each(siteData, function (key, val) {
    //    var option = $('<option />');
    //    option.attr('value', val.id).text(val.name);
    //    $("#SiteIdAH").append(option);
    //});
    //$("#SiteIdAH").append($('<option value="99999">New Site</option>'));
}
function loadAHDefaults() {
    // Loading Team Defaults //
    $.getJSON("data/staff_team.json", function (data) {
        $.each(data.staffs.staff, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.displayName);
            $("#form1").find('#ObservationStaffId').append(option);
        });
    }); 
    // Loading speciesTaxonSyndromSamples Defaults //
    $.getJSON("data/speciesTaxonSyndromSamples_NAF.json", function (data) {
        speciesTaxonSyndromSamples = data.species;
        $("#form1").find('#commonName').find('option').remove().end().append('<option value="0">- select -</option>');
        $.each(data.species, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.speciesCode).text(val.speciesName);
            $("#form1").find('#commonName').append(option);
        });
    }); 
    // Loading Body Condition Scores //
    $.getJSON("data/referenceCodes.json", function (data) {
        $.each(data.AnimalHealthReferenceCodes.BodyConditionScore, function (key, val) {
            var v_bcs = $(bcs);
            v_bcs.find('input[type="radio"][name="bodyConditionScore_M_N"]').val(val.code).data("code", val.code);
            v_bcs.find('.bcstext').text(val.desc);
            $("#form1").find(".body_condition_score").append(v_bcs);
            v_bcs.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
        });
        syndromesData = data.AnimalHealthReferenceCodes.Syndrome;
        $("#form1").find('#lstSyndromes').find('option').remove().end();
        $.each(data.AnimalHealthReferenceCodes.Syndrome, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.code).text(val.desc);
            $("#form1").find('#lstSyndromes').append(option);
        });
    }); 
    // Loading fieldTest Defaults //
    defFieldTests = '<option value="NONE">- select -</option>';
    $.getJSON("data/fieldTests.json", function (data) {
        fieldTestsData = data.fieldTests.fieldTest;
        $.each(data.fieldTests.fieldTest, function (key, val) {
            var option = '<option';
            option = option + ' value="' + val.fieldTestCde + '">';
            option = option + val.fieldTestName + "</option>";
            defFieldTests = defFieldTests + option;
        });
    }); 
    $.getJSON("data/activity.json", function (data) {
        defaultSpecies = data.activities.activity.metadata.species;
        $.each(defaultSpecies, function (key, val) {
        });
    }); 
}
$(document).on('change', 'select[id="commonName"]', function () {
    var t0,t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#mb6 .progText').text("Loading ...");
            $('#mb6 .progress').addClass('hide');
            $('#mb6 .fa-clock-o').addClass('hide');
            $('#modalProgress').modal();
            t0 = performance.now();
        }
    }).complete(function (e) {
            var str = $("#commonName option:selected").val();
            if (str !== '0') {
                //Filter data from speciesTaxonSyndromSamples
                var arr = jQuery.grep(speciesTaxonSyndromSamples, function (n, i) {
                    return (n.speciesCode === str);
                });
                //Load Taxa for selected species
                if (arr[0].taxa.length > 1) {
                    $("#form1").find('#taxon').find('option').remove().end().append('<option value="NONE">- select -</option>');
                }
                else {
                    $("#form1").find('#taxon').find('option').remove().end();
                }
                $.each(arr[0].taxa, function (key, val) {
                    var option = $('<option />');
                    option.attr('value', val.id).text(val.name);
                    $("#form1").find('#taxon').append(option);
                });
                //Load default syndromes for selected species
                $('.defSyndromeX').remove();
                for (var x = 0; x < arr[0].requiredSyndromes.length; x++) {
                    var idx = Number(arr[0].requiredSyndromes[x]);
                    var cidx = arr[0].requiredSyndromes[x];
                    syndromes = syndromes + 1;
                    var that = $(defSyndrome);
                    that.find('input[name^="SyndromeText_M_S"]').val(syndromesData[idx - 1].desc);
                    that.find('input[name^="SyndromeCode_M_S"]').val(syndromesData[idx - 1].code);
                    that.find('input[name^="SyndromeText_M_S"]').attr("name", "SyndromeText_M_S_" + syndromes);
                    that.find("input[name^='SyndromeCode_M_S']").attr("name", "SyndromeCode_M_S_" + syndromes);
                    that.find("input[name^='SyndromeFlag_M_S']").attr("name", "SyndromeFlag_M_S_" + syndromes);
                    that.find("input[name^='SyndromeComments_O_S']").attr("name", "SyndromeComments_O_S_" + syndromes);
                    $('#defSyndromes').append(that);
                    that.find("input[type='checkbox']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that.find("input[type='radio']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    $('#lstSyndromes option[value="' + cidx + '"]').remove();
                }
                //Prepare sample types for selected species for later load 
                possibleSamples = arr[0].possibleSamples;
                sampleTypes = '<option value="NONE">- select -</option>';
                $.each(arr[0].possibleSamples, function (key, val) {
                    var option = '<option';
                    option = option + ' value="' + val.sampleTypeCode + '">';
                    option = option + val.sampleTypeName + "</option>";
                    sampleTypes = sampleTypes + option;
                });
                //fetch defaults
                var def = jQuery.grep(defaultSpecies, function (n, i) {
                    return (n.speciesCode === str);
                });
                //Load default samples to the dropdownlist
                $('.sample').remove(); //Clear all Samples
                $.each(def[0].defaultSamples, function (key, val) { //For each default Sample
                    samples = samples + 1;
                    var that2 = $(preAnimalSample);
                    that2.find('select[name="PSampleType_M_S"]').find('option').remove().end().append($(sampleTypes));
                    that2.find("select[name='PSampleType_M_S']").val(val.sampleTypeCode);
                    //that2.find("select[name='PSampleType_M_S']:not([value^='" + val.sampleTypeCode + "'])").remove();
                    that2.find('.badge').text(samples);
                    //that2.find("input[name='sampleId']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
                    that2.find('input').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    that2.find('img').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    that2.find('select').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    that2.find('textarea').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
                    });
                    //Load default pathogens in the sample dropdownlist
                    var divTestTypes = that2.find(".testTypes");
                    var count = 0;
                    var arr1 = jQuery.grep(possibleSamples, function (n, i) {
                        return (n.sampleTypeCode === val.sampleTypeCode);
                    });
                    $.each(arr1[0].testFors, function (key2, val2) {
                        count++;
                        var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" name="PTestFor_M_S_' + samples + '_' + val2.testForCode + '" value="' + val2.testForCode + '">&nbsp;<label>' + val2.testForName + '</label></div>';
                        divTestTypes.append($(option));
                    });
                    //Check the default pathogens
                    $.each(val.testFors, function (key3, val3) {
                        divTestTypes.find("input[type='checkbox'][value='" + val3.testForCode + "']").val("Y").iCheck('check');
                    });
                    divTestTypes.find("input[type='checkbox'].minimal:not([value='Y'])").val("N");
                    that2.addClass('preSelectedSample');
                    that2.addClass('hide');
                    that2.find("input[type='checkbox']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that2.find("input[type='radio']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    $('#addPreSelectedSample').removeClass('hide');
                    $('#samples').append(that2);
                });
                $('.fieldtest').remove(); //Clear all Field Tests
                //Load default fieldtests
                $.each(def[0].fieldTests, function (key, val) { //For each default Field Test
                    fieldTests = fieldTests + 1;
                    var that3 = $(preFieldtest);
                    that3.find('select[name="PFieldTests_M_S"]').find('option').remove().end().append($(defFieldTests)).val(val.fieldTestCde);
                    //that3.find('select[name="FieldTests_M_S"]:not([value^="' + val.fieldTestCde + '"])').remove();
                    that3.find("input[name='PInvalidFlag_M_S']").val("N");
                    that.find('.badge').text(fieldTests);
                    that3.find('input').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
                    });
                    that3.find('img').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
                    });
                    that3.find('select').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
                    });
                    that3.find('textarea').each(function () {
                        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
                    });
                    var selectFT = that3.find('.diseases');
                    var diseases = 0;
                    selectFT.empty();
                    $.each(val.diseases, function (key2, val2) {
                        diseases = diseases + 1;
                        var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val2[0].diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Positive" data-validate="Y" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Negative" data-validate="Y" value="Negative">&nbsp;<label>Negative</label></div>';
                        selectFT.append($(disease));
                    });
                    that3.find("input[type='checkbox']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that3.find("input[type='radio']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that3.addClass('preSelectedFieldTest');
                    that3.addClass('hide');
                    $('#addPreSelectedFieldTest').removeClass('hide');
                    $('#fieldtests').append(that3);               
                });
            }
        }).done(function () {
            $('#modalProgress').modal('hide');
            $('#mb6 .progText').text("");
            t1 = performance.now();
            $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
        });
});
$(document).on('change', 'select.sampleType', function () {
    var that = this;
    var str = $(that).val();
    var nxtTF = $(this).closest('.sample').find('.testTypes');
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            t0 = performance.now();
            $('.overlay').removeClass('hide');
            $('.modal-body').addClass('hide');
            $('.modal-footer').addClass('hide');
        }
    }).complete(function (e) {            
            if (str !== 'NONE') {
                var arr = jQuery.grep(possibleSamples, function (n, i) {
                    return (n.sampleTypeCode === str);
                });
                nxtTF.empty();
                var count = 0;
                $.each(arr[0].testFors, function (key, val) {
                    count++;
                    //Raj! Change the fieldnames as per sample# here
                    var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" name="TestFor_M_S_' + samples + '_' + val.testForCode + '" value="' + val.testForCode + '">&nbsp;<label>' + val.testForName + '</label></div>';
                    nxtTF.append($(option));
                });
                nxtTF.find("input[type='checkbox']").iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
                nxtTF.find("input[type='radio']").iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue'
                });
            }
        }).done(function () {
            $('.overlay').addClass('hide');
            $('.modal-body').removeClass('hide');
            $('.modal-footer').removeClass('hide');
            t1 = performance.now();
            $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
        });
});
function loadPathogens(e) {
    var str = e.val();
    var nxtTF = e.parent().next('div').find('.testTypes');
    if (str !== 'NONE') {
        var arr = jQuery.grep(possibleSamples, function (n, i) {
            return (n.sampleTypeCode === str);
        });
        nxtTF.empty();
        var count = 0;
        $.each(arr[0].testFors, function (key, val) {
            count++;
            //Raj! Change the fieldnames as per sample# here
            var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" name="TestFor_M_S_' + samples + '_' + val.testForCode + '" value="' + val.testForCode + '">&nbsp;<label>' + val.testForName + '</label></div>';
            nxtTF.append($(option));
        });
        nxtTF.find("input[type='checkbox']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
        nxtTF.find("input[type='radio']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
    }
}
$(document).on('change', 'select.fieldTest', function () {
    var that = this;
    var nxtD = $(this).closest('.fieldtest').find('.diseases');
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            t0 = performance.now();
            $('.overlay').removeClass('hide');
            $('.modal-body').addClass('hide');
            $('.modal-footer').addClass('hide');
        }
    }).complete(function (e) {
            var str = $(that).val();
            var diseases = 0;
            if (str !== 'NONE') {
                nxtD.empty();
                var arr = jQuery.grep(fieldTestsData, function (n, i) {
                    return (n.fieldTestCde === str);
                });
                $.each(arr[0].diseases.disease, function (key, val) {
                    diseases = diseases + 1;
                    var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val.diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" value="Negative">&nbsp;<label>Negative</label></div>';
                    nxtD.append($(disease));
                    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                });
            }
        }).done(function () {
            $('.overlay').addClass('hide');
            $('.modal-body').removeClass('hide');
            $('.modal-footer').removeClass('hide');
            t1 = performance.now();
            $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>" + Math.round((t1 - t0)) + " ms");
        });
});
function loadDiseases(e) {
    var nxtD = e.parent().parent().find('.diseases');
    var str = e.val();
    var diseases = 0;
    if (str !== 'NONE') {
        nxtD.empty();
        var arr = jQuery.grep(fieldTestsData, function (n, i) {
            return (n.fieldTestCde === str);
        });
        $.each(arr[0].diseases.disease, function (key, val) {
            diseases = diseases + 1;
            var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val.diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="FieldTestResult_' + fieldTests + '_FT_' + val.diseaseCde + '" value="Negative">&nbsp;<label>Negative</label></div>';
            nxtD.append($(disease));
            nxtD.find("input[type='checkbox']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            nxtD.find("input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
        });
    }
}
function loadCommonNameData(d, e) {
    syndromes = 0;
    samples = 0;
    fieldTests = 0;
    var str = d;
    if (str !== '0') {
        $('#form1').find("#commonName").val(str);
        //Filter data from speciesTaxonSyndromSamples
        var arr = jQuery.grep(speciesTaxonSyndromSamples, function (n, i) {
            return (n.speciesCode === str);
        });

        //Load Taxa for selected species
        if (arr[0].taxa.length > 1) {
            $("#form1").find('#taxon').find('option').remove().end().append('<option value="NONE">- select -</option>');
        }
        else {
            $("#form1").find('#taxon').find('option').remove().end();
        }
        //console.time('Taxa');
        $.each(arr[0].taxa, function (key, val) {
            var option;
            if (val.id === e) {
                option = $('<option />');
            } else { option = $('<option selected />'); }
            option.attr('value', val.id).text(val.name);
            $("#form1").find('#taxon').append(option);
        });
        //console.timeEnd('Taxa');
        //Load default syndromes for selected species
        //console.time('Syndromes 1');
        $('.defSyndromeX').remove();
        //console.timeEnd('Syndromes 1');
        //console.time('Syndromes 2');
        for (var x = 0; x < arr[0].requiredSyndromes.length; x++) {
            var idx = Number(arr[0].requiredSyndromes[x]);
            var cidx = arr[0].requiredSyndromes[x];
            syndromes = syndromes + 1;
            var that = $(defSyndrome);
            that.find('input[name^="SyndromeText_M_S"]').val(syndromesData[idx - 1].desc);
            that.find('input[name^="SyndromeCode_M_S"]').val(syndromesData[idx - 1].code);
            that.find('input[name^="SyndromeText_M_S"]').attr("name", "SyndromeText_M_S_" + syndromes);
            that.find("input[name^='SyndromeCode_M_S']").attr("name", "SyndromeCode_M_S_" + syndromes);
            that.find("input[name^='SyndromeFlag_M_S']").attr("name", "SyndromeFlag_M_S_" + syndromes);
            that.find("input[name^='SyndromeComments_O_S']").attr("name", "SyndromeComments_O_S_" + syndromes);
            $('#defSyndromes').append(that);
            that.find("input[type='checkbox']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            that.find("input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            $('#lstSyndromes option[value="' + cidx + '"]').remove();
        };
        //console.timeEnd('Syndromes 2');
        //Prepare sample types for selected species for later load 
        //console.time('Species');
        possibleSamples = arr[0].possibleSamples;
        sampleTypes = '<option value="NONE">- select -</option>';
        $.each(arr[0].possibleSamples, function (key, val) {
            var option = '<option';
            option = option + ' value="' + val.sampleTypeCode + '">';
            option = option + val.sampleTypeName + "</option>";
            sampleTypes = sampleTypes + option;
        });
        //console.timeEnd('Species');
        //fetch defaults
        var def = jQuery.grep(defaultSpecies, function (n, i) {
            return (n.speciesCode === str);
        });
        //Load default samples to the dropdownlist
        //console.time('Samples');
        $('.sample').remove(); //Clear all Samples
        $.each(def[0].defaultSamples, function (key, val) { //For each default Sample
            samples = samples + 1;
            var that2 = $(preAnimalSample);
            that2.find('select[name="PSampleType_M_S"]').find('option').remove().end().append($(sampleTypes));
            that2.find("select[name='PSampleType_M_S']").val(val.sampleTypeCode);
            //that2.find("select[name='PSampleType_M_S']:not([value^='" + val.sampleTypeCode + "'])").remove();
            that2.find('.badge').text(samples);
            //that2.find("input[name='sampleId']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
            that2.find('input').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
            });
            that2.find('img').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
            });
            that2.find('select').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
            });
            that2.find('textarea').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
            });
            //Load default pathogens in the sample dropdownlist
            var divTestTypes = that2.find(".testTypes");
            var count = 0;
            var arr1 = jQuery.grep(possibleSamples, function (n, i) {
                return (n.sampleTypeCode === val.sampleTypeCode);
            });
            $.each(arr1[0].testFors, function (key2, val2) {
                count++;
                var option = '<div class="form-group col-md-6 col-sm-6 col-xs-6"><input type="checkbox" class="minimal" name="PTestFor_M_S__' + samples + '_' + val2.testForCode + '" value="' + val2.testForCode + '">&nbsp;<label>' + val2.testForName + '</label></div>';
                divTestTypes.append($(option));
            });
            //Check the default pathogens
            $.each(val.testFors, function (key3, val3) {
                divTestTypes.find("input[type='checkbox'][value='" + val3.testForCode + "']").val("Y").iCheck('check');
            });
            divTestTypes.find("input[type='checkbox'].minimal:not([value='Y'])").val("N");
            that2.addClass('preSelectedSample');
            that2.addClass('hide');
            that2.find("input[type='checkbox']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            that2.find("input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            $('#addPreSelectedSample').removeClass('hide');
            $('#samples').append(that2);
        });
        $('.fieldtest').remove(); //Clear all Field Tests
        //Load default fieldtests
        $.each(def[0].fieldTests, function (key, val) { //For each default Field Test
            fieldTests = fieldTests + 1;
            var that3 = $(preFieldtest);
            that3.find('select[name="PFieldTests_M_S"]').find('option').remove().end().append($(defFieldTests)).val(val.fieldTestCde);
            //that3.find('select[name="PFieldTests_M_S"]:not([value^="' + val.fieldTestCde + '"])').remove();
            that3.find("input[name='PInvalidFlag_M_S']").val("N");
            that.find('.badge').text(fieldTests);
            that3.find('input').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            });
            that3.find('img').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            });
            that3.find('select').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            });
            that3.find('textarea').each(function () {
                $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
            });
            var selectFT = that3.find('.diseases');
            var diseases = 0;
            selectFT.empty();
            $.each(val.diseases, function (key2, val2) {
                diseases = diseases + 1;
                var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val2[0].diseaseName + '</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Positive" data-validate="Y" value="Positive">&nbsp;<label>Positive</label></div><div class="form-group col-md-5 col-sm-5 col-xs-5"><input type="radio" class="form-control minimal" name="PFieldTestResult_' + fieldTests + '_FT_' + val2[0].diseaseCde + '" data-code="Negative" data-validate="Y" value="Negative">&nbsp;<label>Negative</label></div>';
                selectFT.append($(disease));
            });
            that3.find("input[type='checkbox']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            that3.find("input[type='radio']").iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            that3.addClass('preSelectedFieldTest');
            that3.addClass('hide');
            $('#addPreSelectedFieldTest').removeClass('hide');
            $('#fieldtests').append(that3);
        });        
    }
}
$(document).on('ifChecked', '.defSyndromeX input[type="radio"].minimal', function (event) {
    if ($(this).val() === 'Y') {
        $(this).parent().parent().parent().find('div.defSyndComments').removeClass('hide');
    }
    if ($(this).val() === 'N') {
        $(this).parent().parent().parent().find('div.defSyndComments').find('input[type=text]').val('');
        $(this).parent().parent().parent().find('div.defSyndComments').addClass('hide');
    }
});
function getNextAnimalID(e) {
    //Read from DB
    var nextID = resSettings.settings.device.currentAnimalNumber * 1 + 1;
    resSettings.settings.device.currentAnimalNumber = nextID;
    db.transaction(function (tx) {
        tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
            //$("#form1").find('input[type="text"].nextid').last().val(e + pad(nextID.toString(), 6));
            $("#form1").find('input[type="text"].nextid').last().val(nextID.toString());
        });
    }, function (err) {
        $.growl.error({ title: "", message: "An error occured while incrementing ID. " + err.message, location: "tc", size: "large" });
    });
}
//function getNextAnimalID() {
//    //Read from DB
//    db.transaction(function (tx) {
//        tx.executeSql("SELECT * FROM seqnum WHERE id = ? and attrname = ?", [2, 'animalid'], function (tx, res) {
//            if (res.rows && res.rows.length > 0) {
//                var nextID = res.rows.item(0).attrval + 1;
//                db.transaction(function (tx) {
//                    tx.executeSql("UPDATE seqnum set attrval = ? where id = ?", [nextID, 2], function (tx, res) {
//                        //alert("Row inserted.");
//                        //return e + pad(nextID.toString(), 4);
//                        return nextID;
//                        //$("#form1").find('input[type="text"].nextid').first().val(nextID);
//                    });
//                }, function (err) {
//                    $.growl({ title: "", message: "An error occured while incrementing ID. " + err.message, location: "bc", size: "large" });
//                });
//            }
//            else {
//                db.transaction(function (tx) {
//                    tx.executeSql("INSERT INTO seqnum (id, attrname, attrval) VALUES (?,?,?)", [2, 'animalid', 1], function (tx, res) {
//                        //alert("Row inserted.");
//                        //return e + pad('1', 4);
//                        return 1;
//                        //$("#form1").find('input[type="text"].nextid').first().val(1);
//                    });
//                }, function (err) {
//                    $.growl({ title: "", message: "An error occured while incrementing ID. " + err.message, location: "bc", size: "large" });
//                });
//            }
//        });
//    }, function (err) {
//        $.growl({ title: "", message: "An error occured while retrieving next ID. " + err.message, location: "bc", size: "large" });
//    });
//}
$(document).on('click', '#addSyndrome', function (e) {
    syndromes = syndromes + 1;
    var that = $(syndrome);
    that.find('input[name^="SyndromeText_M_S"]').val($('#lstSyndromes option:selected').text());
    that.find('input[name^="SyndromeCode_M_S"]').val($('#lstSyndromes option:selected').val());
    that.find('input[name^="SyndromeText_M_S"]').attr("name", "SyndromeText_M_S_" + syndromes);
    that.find("input[name^='SyndromeCode_M_S']").attr("name", "SyndromeCode_M_S_" + syndromes);
    that.find("input[name^='SyndromeFlag_M_S']").attr("name", "SyndromeFlag_M_S_" + syndromes);
    that.find("input[name^='SyndromeComments_O_S']").attr("name", "SyndromeComments_O_S_" + syndromes);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    $('#addedSyndromes').append(that);
    $('#lstSyndromes option:selected').remove();
});
$(document).on('click', '.removeSyndrome', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Syndrome?',
        content: 'Do you want to remove this Syndrome?',
        buttons: {
            Ok: function () {
                syndromes = syndromes - 1;
                var option = $('<option />');
                option.attr('value', $(this).parent().parent().find('.syndromeCode').text()).text(x.parent().parent().find('.syndromeText').text());
                $('#lstSyndromes').append(option);
                x.closest('.syndromeX').remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#noSyndromes', function (e) {
    $('.defSyndromeX').find('input[type=radio][name^="SyndromeFlag_M_S"][value="N"]').iCheck('check');
    //$('.defSyndromeX').find(':radio').val("N");
});
$(document).on('click', "#addAnimal", function (e) {
    e.preventDefault();
    $('.nav-tabs > .active').prev('li').prev('li').prev('li').prev('li').find('a').trigger('click');
    $('#tab_0').find("input[type='text'][name='animalNumber']").val($('#tab_0').find("input[type='text'][name='animalNumber']").val() * 1 + 1);
});
$(document).on('click', '#addSpecies', function (e) {
    var that = $(species);
    that.find('.speciesText').val($('#lstSpecies option:selected').text());
    $('.speciesFound').append(that);
    $('#lstSpecies option:selected').remove();
    //BindAutoComplete();
});
$(document).on('click', '.removeSpecies', function (e) {
    $('#lstSpecies').append('<option>' + $(this).parent().parent().find('.speciesText').text() + '</option>');
    $(this).closest('.row').remove();
});
$(document).on('click', '#addFieldTest', function (e) {
    fieldTests = fieldTests + 1;
    var that = $(fieldtest);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[name='FieldTestID_M_N']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
    that.find('select[name="FieldTests_M_S"]').find('option').remove().end().append($(defFieldTests));
    that.find("input[name='InvalidFlag_M_S']").val("N");
    that.find('.badge').text(fieldTests);
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + fieldTests + '_FT');
    });
    $('#fieldtests').append(that);      
});
$(document).on('click', '#addPreSelectedFieldTest', function (e) {
    fieldTests = fieldTests + 1;
    $('#addPreSelectedFieldTest').addClass('hide');
    $('.preSelectedFieldTest').removeClass('hide');
    $('.preSelectedFieldTest').find("input[name^='PFieldTestID_M_N']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
});
$(document).on('click', '.removeFieldTest', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Fieldtest?',
        content: 'Do you want to remove this Fieldtest?',
        buttons: {
            Ok: function () {
                fieldTests = fieldTests - 1;
                x.closest('.fieldtest').remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '.removePreFieldTest', function (e) {
    $.confirm({
        title: 'Remove Fieldtest?',
        content: 'Do you want to remove this Fieldtest?',
        buttons: {
            Ok: function () {
                fieldTests = fieldTests - 1;
                $('.preSelectedFieldTest').addClass('hide');
                $('#addPreSelectedFieldTest').removeClass('hide');
                $('.preSelectedFieldTest').find("input[name='FieldTestID_M_N']").val("");
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#addAnimalSample', function (e) {
    samples = samples + 1;
    //var nextID = getNextID('SAMPLE');
    var that = $(animalSample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('img').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + samples + '_S');
    });
    that.find('.badge').text(samples);
    that.find('select[name^="SampleType_M_S"]').find('option').remove().end().append($(sampleTypes));
    that.find("input[name^='SampleFieldLabelText']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
    $('#samples').append(that);
});
$(document).on('click', '#addPreSelectedSample', function (e) {
    $('#addPreSelectedSample').addClass('hide');
    $('.preSelectedSample').removeClass('hide');
    $('.preSelectedSample').find("input[name^='PSampleFieldLabelText']").val($("#form1").find('input[type="text"][name="animalNumber_M_S"]').val());
});
$(document).on('click', '.removeAnimalSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
                x.closest('.sample').remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '.removePreSample', function (e) {
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                $('.preSelectedSample').find("input[name^='SampleFieldLabelText']").val("");
                $('.preSelectedSample').addClass('hide');
                $('#addPreSelectedSample').removeClass('hide');
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#addMaggotSample', function (e) {
    var that = $(maggotSample);
    that.find("input[name='msfieldID']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    $('#maggotSamples').append(that);
    $(this).addClass('hide');
});
$(document).on('click', '.removeMaggotSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                $('.addMaggotSamples').next('.row').removeClass('hide');
                x.parent().parent().remove();
                $('.maggotSamplePlus').removeClass('hide');
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#btnNAD', function (e) {
    $(':radio[name=IntegumentFlag_M_S]').eq(1).iCheck('check');
    //$(':radio[name=IntegumentFlag_M_S]').eq(1).val("N");
    $(':radio[name=HeadNeckFlag_M_S]').eq(1).iCheck('check');
    //$(':radio[name=HeadNeckFlag_M_S]').eq(1).val("N");
    $(':radio[name=ThoraxFlag_M_S]').eq(1).iCheck('check');
    //$(':radio[name=ThoraxFlag_M_S]').eq(1).val("N");
    $(':radio[name=AbdomenFlag_M_S]').eq(1).iCheck('check');
    //$(':radio[name=AbdomenFlag_M_S]').eq(1).val("N");
    $(':radio[name=MuscSkeletalFlag_M_S]').eq(1).iCheck('check');
    //$(':radio[name=MuscSkeletalFlag_M_S]').eq(1).val("N");
    //$('#divINT').addClass('hide');
    //$('#divNEC').addClass('hide');
    //$('#divTHO').addClass('hide');
    //$('#divABD').addClass('hide');
    //$('#divMUS').addClass('hide');
});
$(document).on('blur', 'input[type=text][name="age"]', function (e) {
    var age = $(this).val();
    var yr = age.split(":")[0] * 1;
    var mn = age.split(":")[1] * 1;//enter months
    if (isNaN(mn) || isNaN(yr)) { $.growl({ title: "", message: "Invalid Month!" + err.message, location: "bc", size: "large" }); return; }
    if (mn < 1 || mn > 11) { $.growl({ title: "", message: "Invalid Month!" + err.message, location: "bc", size: "large" }); return; }
    var dy = 0;
    var today = new Date();
    var dobD = today.getDate();
    var dobM = 12 - mn + 1;
    var dobY = today.getFullYear() - yr - 1;
    if (dobD < 10) { dobD = '0' + dobD };
    if (dobM < 10) { dobM = '0' + dobM };
    $('input[type=text][name="dob"]').val(dobD.toString() + "/" + dobM.toString() + "/" + dobY.toString());
});
$(document).on('click', '#bsInfo', function () {
    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/assets/visguide.pdf', function (fileEntry) {
        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
            fileEntry.copyTo(dirEntry, 'file.pdf', function (newFileEntry) {
                cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                    {
                        error: function (e) {
                            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                        },
                        success: function () {
                            console.log('file opened successfully');
                        }
                    }
                );
            });
        });
    });
});
function loadModalAH(pagename) {
    var t0, t1;
    $.ajax({
        url: "",
        beforeSend: function (xhr) {
            $('#modalProgress').modal();
            $('#mb6 .progText').text("Loading ...");
            $('#mb6 .progress').addClass('hide');
            $('#mb6 .fa-clock-o').addClass('hide');
            $('#mb').empty();
            $('#mt').empty();
            $(document).find('script[id="pageScript"]').remove();
            $('#mb').load(pagename + '.html');
            t0 = performance.now();
            samples = 0;
            fieldTests = 0;
        }
    }).complete(function (e) {
        $('#form1').find("input[type=text],input[type=date],input[type=number], textarea").val("");
        $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
        $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
            setTimeout(function (e) {
                if (pagename === 'mo_sngObservation') {
                    loadActivityDataAH();
                    loadAHDefaults();
                }
            }, 200);
            setTimeout(function (e) {
                if (curIdx > -1) {
                    var data = results.observations[curPos];
                    if (data.commonName !== '0') {
                        loadCommonNameData(data.commonName_M_S, data.taxon_M_N);
                    }
                    //console.log(JSON.stringify(data));
                    $.each(data, function (key, value) {
                        if (key.startsWith('ObservationWhereWktClob') && value !== "") {
                            var wkt = new Wkt.Wkt();
                            wkt.read(value);
                            wkt.toObject();
                            $('#form1').find("input[name^='Longitude']").val(wkt.toJson().coordinates[0]);
                            $('#form1').find("input[name^='Latitude']").val(wkt.toJson().coordinates[1]);
                        }
                        if (key.startsWith("SampleFieldLabelText_M_S") && value > 0) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $('#addAnimalSample').trigger("click");
                                }
                            }).complete(function (e) {
                                $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                            });
                        }
                        if (key.startsWith("SampleType_M_S") && value !== "") {
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
                        if (key.startsWith("FieldTestID") && value > 0) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $('#addFieldTest').trigger("click");
                                }
                            }).complete(function (e) {
                                $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                            });
                        }
                        if (key.startsWith("FieldTests_M_S") && value !== "") {
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
                        if (key === "externalObserverFlag_O_S" && value === "Y") {
                            $('#form1').find("input[name='externalObserver_O_S']").removeClass('hide');
                            $('#form1').find("input[type='checkbox'][name='externalObserverFlag_O_S']").iCheck('check');
                        }
                        if (key === "externalObserverFlag_O_S" && value === "N") {
                            $('#form1').find("input[name='externalObserver_O_S']").addClass('hide');
                            $('#form1').find("input[type='checkbox'][name='externalObserverFlag_O_S']").iCheck('uncheck');
                        }
                        if (key === "gender_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "ageClass_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "bodyConditionScore_M_N" && value !== "0") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "woundsPresent_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                            if (value === 'Y') {
                                $('.addMaggotSamples').removeClass('hide');
                            }
                            if (value === 'N') {
                                $('.addMaggotSamples').addClass('hide');
                            }
                        }
                        if (key === "maggotsPresent_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                            if (value === 'Y') {
                                $('#addMaggotSample').removeClass('hide');
                                $('#maggotSamples').removeClass('hide');
                            }
                            if (value === 'N') {
                                $('#addMaggotSample').addClass('hide');
                                $('#maggotSamples').addClass('hide');
                            }
                        }
                        if (key.startsWith("SyndromeFlag_M_S") && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "postMortemConducted_M_S" && value !== "") {
                            if (value === "Y") {
                                $('#form1').find("input[type='radio'][name='" + key + "'][value='Y']").iCheck('check');
                                $('#tabPM').removeClass('hide');
                                reAdjust();
                            }
                            if (value === "N") {
                                $('#form1').find("input[type='radio'][name='" + key + "'][value='N']").iCheck('check');
                                $('#tabPM').addClass('hide');
                                reAdjust();
                            }
                        }
                        if (key === "IntegumentFlag_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "HeadNeckFlag_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "ThoraxFlag_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "AbdomenFlag_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key === "MuscSkeletalFlag_M_S" && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key.startsWith("PFieldTestResult") && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key.startsWith("FieldTestResult") && value !== "") {
                            $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        }
                        if (key.startsWith('PSampleFieldLabelText_M_S') && value > 0) {
                            $('#addPreSelectedSample').addClass('hide');
                            $('.preSelectedSample').removeClass('hide');
                        }
                        if (key.startsWith('PFieldTestID_M_N') && value > 0) {
                            $('#addPreSelectedFieldTest').addClass('hide');
                            $('.preSelectedFieldTest').removeClass('hide');
                        }
                        $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        $('#form1').find("input[type='number'][name='" + key + "']").val(value);
                        $('#form1').find("input[type='datetime-local'][name='" + key + "']").val(value);
                        $('#form1').find("input[type='checkbox'][name='" + key + "']").val(value);
                        $('#form1').find("input[type='checkbox'][name='" + key + "'][value='Y']").iCheck('check');
                        $('#form1').find("input[type='checkbox'][name='" + key + "'][value='N']").iCheck('uncheck');
                        //$('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                        $('#form1').find("select[name='" + key + "']").val(value);
                        $('#form1').find("textarea[name='" + key + "']").val(value);
                    });
                    $('#form1').find("input[type='number'][name^='id']").val(curIdx);
                    $('#form1').find("input[type='number'][name='status_M_N']").val(curIdx);
                    $('.nextid').text('');
                }
                else {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();
                    var hh = today.getHours();
                    var mi = today.getMinutes();
                    var ss = today.getSeconds();
                    if (dd < 10) {
                        dd = '0' + dd;
                    }
                    if (mm < 10) {
                        mm = '0' + mm;
                    }
                    if (hh < 10) {
                        hh = '0' + hh;
                    }
                    if (mi < 10) {
                        mi = '0' + mi;
                    }
                    if (ss < 10) {
                        ss = '0' + ss;
                    }
                    today = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString() + 'T' + hh.toString() + ':' + mi.toString() + ':' + ss.toString();
                    if (curIdx === -1) {
                        $('#form1').find("input[name^='Latitude']").val(curLat.toFixed(5));
                        $('#form1').find("input[name^='Longitude']").val(curLng.toFixed(5));
                        $('#form1').find("input[type='text'][name^='ObservationWhereWktClob']").val(curWkt);
                        //getAltitude();
                    }
                    $('#form1').find("input[name='dateTime_M_D']").val(today);
                    if (results.observations.length === 0) {
                        $('#form1').find("input[type='number'][name^='id']").val(1);
                    } else { $('#form1').find("input[type='number'][name^='id']").val(results.observations[results.observations.length - 1].id_M_N + 1); }
                    $('#form1').find("input[type='number'][name^='submittedBy_M_N']").val(resSettings.settings.device.ownerId);
                    $('#form1').find("select[name^='ObservationStaffId']").val(resSettings.settings.device.ownerId);
                    $('#form1').find("input[type='number'][name='status_M_N']").val("0");
                    $('#form1').find("input[type='text'][name='animalNumber_M_S']").val(getNextAnimalID(resSettings.settings.device.animalPrefix));
                    $('#form1').find("input[type='text'][name='AnimalDisciplineCode_M_S']").val(curDiscipline);
                    $('.nextid').text('');
                }
            }, 300);
        }).done(function () {
            reAdjust();
            $('#modalProgress').modal('hide');
            t1 = performance.now();
            $('#perfTime').html("<i class='fa fa-clock-o text-info'></i>&nbsp;" + Math.round((t1 - t0)) + " ms");
        });
}
$(document).on('ifChecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'externalObserverFlag_O_S') {
        $('input[name="externalObserver_O_S"').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('InvalidFlag_M_S')) {
        $(this).closest('.row').find('.diseases').empty();
        $(this).closest('.row').find('select').val("NONE");
    }
    $(this).val('Y');
});
$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'externalObserverFlag_O_S') {
        $('input[name="externalObserver_O_S"').addClass('hide');
    }
    $(this).val('N');
});
$(document).on('ifChecked', 'input[type="radio"].minimal', function (event) {
    //Group Observation Stuff
    //if ($(this).attr('name') === 'optSyndromes' && $(this).val() === 'Y') {
    //    $('.addedSyndrome').removeClass('hide');
    //    $('.addedSyndrome').next('div').removeClass('hide');
    //}
    //if ($(this).attr('name') === 'optSyndromes' && $(this).val() === 'N') {
    //    $('.addedSyndrome').addClass('hide');
    //    $('.addedSyndrome').next('div').addClass('hide');
    //}
    //Group Observation Stuff
    if ($(this).attr('name') === 'woundsPresent_M_S' && $(this).val() === 'Y') {
        $('.addMaggotSamples').removeClass('hide');
    }
    if ($(this).attr('name') === 'woundsPresent_M_S' && $(this).val() === 'N') {
        $('.addMaggotSamples').addClass('hide');
    }
    if ($(this).attr('name') === 'postMortemConducted_M_S' && $(this).val() === 'Y') {
        $('#tabPM').removeClass('hide');
    }
    if ($(this).attr('name') === 'postMortemConducted_M_S' && $(this).val() === 'N') {
        $('#tabPM').addClass('hide');
    }
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
    if ($(this).attr('name') === 'maggotsPresent_M_S' && $(this).val() === 'Y') {
        $('#addMaggotSample').removeClass('hide');
        $('#maggotSamples').removeClass('hide');
    }
    if ($(this).attr('name') === 'maggotsPresent_M_S' && $(this).val() === 'N') {
        $('#addMaggotSample').addClass('hide');
        $('#maggotSamples').addClass('hide');
    }
});

function IterateAH(data) {
    return true;
}

//$(document).on('focus', "#SiteIdAH", function (e) {
//    lastSiteValue = $(this).val();
//})
//    .on('change', "#SiteIdAH", function (e) {
//        var that = $(this);
//        var str = that.val();
//        //if (that.val() === "0" || lastSiteValue === "0") return;
//        if (that.val() === "0") return;
//        if (curDiscipline === "SF") {
//            //loadSiteData(str);
//            return;
//        }
//    });
$(document).on('focus', "#SurvActivityIdAH", function (e) {
    lastSurvActValue = $(this).val();
})
    .on('change', '#SurvActivityIdAH', function (e) {
        var that = $(this);
        var str = that.val();
        if (that.val() === "0") return;
        if (curDiscipline === "SF") {
            refreshActivityDataAH(str);
            //loadstaffData();
            //$('#form1').find("select[name^='ObservationStaffId']").val(resSettings.settings.device.ownerId);
            return;
        }
    });

$(document).on('click', '.getAHCoords', function (e) {
    var xlat = $('#form1').find('input.obslat');
    var xlng = $('#form1').find('input.obslng');
    var xdat = $('#form1').find('select.obsdat');
    var xwkt = $('#form1').find('input[name^="ObservationWhereWktClob"]');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude.toFixed(5));
            xlng.val(position.coords.longitude.toFixed(5));
            xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
            xdat.val("WGS84");
        }, function () {
            $.growl.error({ title: "", message: "GPS GetCurrentPosition Failed!", location: "tc", size: "large" });
        });
    } else {
        // Browser doesn't support Geolocation
        $.growl.error({ title: "", message: "Geolocation Failed!", location: "tc", size: "large" });
    }
    e.preventDefault();
});
$(document).on('click', "#addAnimalAttachment", function () {
    var Idx = numAttachments;
    var that1 = $(animalAttachment);
    //that1.find('input[type=hidden]').each(function () {
    //    $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    //});
    that1.find('input[type=text]').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx);
        $(this).attr('name', $(this).attr('name') + '_' + Idx);
    });
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx);
    });
    that1.find('img').each(function () {
        $(this).attr('id', $(this).attr('name') + '_' + Idx);
        $(this).attr('name', $(this).attr('name') + '_' + Idx);
    });
    $('#attachments').append(that1);
    numAttachments++;
    $('#numAttachments').text(numAttachments);
});
$(document).on('click', ".removeAnimalAttachment", function () {
    var x = $(this);
    if (numAttachments > 0) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this attachment?',
            buttons: {
                Ok: function () {
                    x.closest('.AnimalAttachment').remove();
                    numAttachments--;
                    $('#numAttachments').text(numAttachments);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});
function objectifyAHFormforSave(formArray) {
    var plantDisciplineCode;
    var addlObserver = 1;
    var vattachment = 1;
    var obsAttachment = 1;
    var sampleAttachment = 1;
    var observation = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            //if (formArray[i]['name'].startsWith('AdditionalObservers')) { continue; }
            //if (formArray[i]['name'].startsWith('AdditionalCollectors')) { continue; }
            //if (formArray[i]['name'].startsWith('PlantStatisticType')) { continue; }
            //if (formArray[i]['name'].startsWith('Latitude')) { continue; }
            //if (formArray[i]['name'].startsWith('Longitude')) { continue; }
            var fname = formArray[i]['name'].split("_")[0];
            var fMOC = formArray[i]['name'].split("_")[1];
            var fNSD = formArray[i]['name'].split("_")[2];
            var fnum = formArray[i]['name'].split("_")[3];
            var ftype = formArray[i]['name'].split("_")[4];
            if (fNSD === 'N') {
                observation[formArray[i]['name']] = Number(formArray[i]['value']);
            }
            else {
                if ($("[name='" + formArray[i]['name'] + "']").is(':radio')) {
                    observation[formArray[i]['name']] = $("[name='" + formArray[i]['name'] + "']:checked").val();
                }
                else {
                    observation[formArray[i]['name']] = formArray[i]['value'];
                }
            }
        }
    }
    return observation;
}
function objectifyAHFormforSubmit(data) {//serialize data function
    var modData = JSON.parse(JSON.stringify(data));
    delete modData.TimeHourCount_M_S;
    var jsonStr = JSON.stringify(modData);
    jsonStr = jsonStr.replace(/_O_N_\d_T/g, '').replace(/_M_S_\d_T/g, '').replace(/_O_S_\d_T/g, '').replace(/_M_N_\d_H/g, '').replace(/_M_S_\d_H/g, '').replace(/_O_S_\d_H/g, '').replace(/_O_N_\d_H/g, '');
    jsonStr = jsonStr.replace(/_M_S_\d_S/g, '').replace(/_O_N_\d_S/g, '').replace(/_M_S_\d_S/g, '').replace(/_M_D_\d_S/g, '').replace(/_O_S_\d_S/g, '');
    jsonStr = jsonStr.replace(/_M_N/g, '').replace(/_O_N/g, '').replace(/_M_D/g, '').replace(/_M_S/g, '').replace(/_O_S/g, '');
    var jsonData = JSON.parse(jsonStr);
    CleanUp(jsonData);
    delete jsonData.status;
    delete jsonData.id;
    return jsonData;
}
function preValidateAH() {
    return true;
}
function Iterate2AH(data) {
    return true;
}
function SubmitRecordAH(formArray) {//serialize data function
    var guid1 = guid().toUpperCase();
    var obsWrapper = {
        "header": {
            "ebmCID": guid1,
            "ebmMID": guid1,
            "ebmRTID": guid1,
            "ebmPID": guid1,
            "ebmSID": "ESFA",
            "ebmTimestamp": new Date().toISOString(),
            "propertySet": [{
                "name": "",
                "value": ""
            }]
        },
        "body": {
            "feralAnimalObservations": ""
        }
    };
    formArray["submittedBy"] = resSettings.settings.device.ownerId;
    obsWrapper.body.feralAnimalObservations = formArray;
    return obsWrapper;
}

/* tab scroller */
var widthOfList = function () {
    var itemsWidth = 0;
    $('#tabList li').each(function () {
        var itemWidth = $(this).outerWidth();
        itemsWidth += itemWidth;
    });
    return itemsWidth;
};
var widthOfHidden = function () {
    return (($('.tabs-wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
};
var getLeftPosi = function () {
    if ($('#tabList').position()) {
        return $('#tabList').position().left;
    }
    else return 0;
};
var reAdjust = function () {
    if (($('.tabs-wrapper').outerWidth()) < widthOfList()) {
        $('.scroller-right').show();
    }
    else {
        $('.scroller-right').hide();
    }
    if (getLeftPosi() < 0) {
        $('.scroller-left').show();
    }
    else {
        $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');
        $('.scroller-left').hide();
    }
};
$(document).on('click','.scroller-right', function () {
    $('.scroller-left').fadeIn('slow');
    $('.scroller-right').fadeOut('slow');
    $('#tabList').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function () {
    });
});
$(document).on('click', '.scroller-left', function () {
    $('.scroller-right').fadeIn('slow');
    $('.scroller-left').fadeOut('slow');
    $('#tabList').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function () {
    });
});    
/* tab scroller */