var bcs = '<div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="radio" class="minimal" name="optbodyCond" value="">&nbsp;<label class="bcstext"></label></div>';
var defSyndrome = '<div class="row col-md-12 col-sm-12 col-xs-12 dynarow defSyndromeX indentLeft"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label class="syndromeText"></label></div><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="radio" class="minimal" name="syndrome" data-code="Yes" data-validate="Y" value="Yes">&nbsp;<label>Yes</label></div><div class="form-group col-md-3 col-sm-3 col-xs-3"><input type="radio" class="minimal" name="syndrome" data-code="Yes" data-validate="Y" value="No">&nbsp;<label>No</label></div><div class="form-group col-md-6 col-sm-6 col-xs-6 defSyndComments"><label><span class="bold-red">*</span>Comments</label><input type="text" class="form-control" placeholder="Syndrome Comments" name="defSyndComments"></div></div>';
//var syndrome = '<div class="row col-md-12  dynarow"><div class="form-group col-md-12 col-sm-12 col-xs-12"><i class="fa fa-times-circle fa-2x text-default removeSyndrome pull-right"></i></div><div class="form-group col-xs-5"><label class="syndromeCode hide" name="syndCode"/><label class="syndromeText" name="syndText"/></div><div class="form-group col-xs-3"><input type="text" class="form-control" placeholder="Number" name="syndNumber"></div><div class="form-group col-xs-3"><input type="text" class="form-control" placeholder="Percent" name="syndPercent"></div><div class="form-group col-xs-11"><input type="text" class="form-control" placeholder="Syndrome Comments" name="syndComments"></div></div>';
var syndrome = '<div class="row col-md-12 col-sm-12 col-xs-12 dynarow syndromeX indentLeft"><div class="form-group col-md-12 col-sm-12 col-xs-12"><i class="fa fa-remove fa-2x text-danger removeSyndrome pull-right"></i><label class="syndromeCode hide" name="syndCode"/><input type="radio" class="minimal" name="syndrome" value="Yes" checked>&nbsp;<label class="syndromeText" name="syndText"/></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label><span class="bold-red">*</span>Comments</label><input type="text" class="form-control" placeholder="Syndrome Comments" name="syndComments"></div></div>';
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
var fieldtest = '<div class="row col-md-12 dynarow fieldtest"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label class="ftName">Field Test 1</label><i class="fa fa-times-circle fa-2x text-default removeFieldTest pull-right"></i></div><div class="form-group col-xs-6"><label>Fieldtest Name<span class="bold-red">*</span></label><input type="text" class="form-control hide" placeholder="Field Test ID" name="ftId"/><select class="form-control" name="fieldTest"></select></div><div class="form-group col-xs-6"><label>&nbsp;</label><br/><input type="checkbox" name="ftInvalid" class="minimal"><label>Invalid</label></div><div class="row col-md-12 col-sm-12 col-xs-12 diseases indentLeft"></div><div class="form-group col-xs-11"><label>Field Test Comment</label><input type="text" class="form-control" name="ftComment"/></div></div>';
var preFieldtest = '<div class="row col-md-12 dynarow fieldtest"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label class="ftName">Field Test 1</label><i class="fa fa-times-circle fa-2x text-default removePreFieldTest pull-right"></i></div><div class="form-group col-xs-6"><label>Fieldtest Name<span class="bold-red">*</span></label><input type="text" class="form-control hide" placeholder="Field Test ID" name="ftId"/><select class="form-control" name="pFieldTest"></select></div><div class="form-group col-xs-6"><label>&nbsp;</label><br/><input type="checkbox" name="ftInvalid" class="minimal"><label>Invalid</label></div><div class="row col-md-12 col-sm-12 col-xs-12 diseases indentLeft"></div><div class="form-group col-xs-11"><label>Field Test Comment</label><input type="text" class="form-control" name="ftComment"/></div></div>';
var maggotSample = '<div class="row col-md-12 dynarow maggotSample"><div class="form-group col-md-12 col-sm-12 col-xs-12"><i class="fa fa-remove fa-2x text-danger removeMaggotSample pull-right"></i><label class="sampleName">Maggot Sample 1</label></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Sample Field Id<span class="bold-red">*</span></label><input type="text" class="form-control nextid" placeholder="Sample Field Id" name="msfieldID" value="1"></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Sample Type<span class="bold-red">*</span></label><select class="form-control" name="msType"><option selected>Maggots</option></select></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Pathogen/Test Type</label><br /><input type="checkbox" class="form-control minimal" name="swfExcl" value="swfExcl" checked><label>SWF Exclusion</label></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Additional Comment</label><textarea class="form-control" rows="3" name="msNotes" placeholder="Notes ..."></textarea></div></div>';
var sample = '<div class="row col-md-12 dynarow sample"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label class="sampleName">Sample 1</label><i class="fa fa-times-circle fa-2x text-default removeSample pull-right"></i></div><div class="form-group col-xs-6"><label>Sample Field ID</label><input type="text" class="form-control nextid" readonly placeholder="Sample Field ID" value="1" name="sampleId"></div><div class="form-group col-xs-6"><label>Sample Type</label><select class="form-control" name="sampleType"></select></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 testTypes indentLeft"></div></div><div class="form-group col-md-12 col-sm-12 col-xs-12 border-bottom"><label>Additional Comments</label><textarea class="form-control" rows="6" name="sAddlComments"></textarea></div></div>';
var preSample = '<div class="row col-md-12 dynarow sample"><div class="form-group col-md-12 col-sm-12 col-xs-12"><label class="sampleName">Sample 1</label><i class="fa fa-times-circle fa-2x text-default removePreSample pull-right"></i></div><div class="form-group col-xs-6"><label>Sample Field ID</label><input type="text" class="form-control nextid" readonly placeholder="Sample Field ID" value="" name="sampleId"></div><div class="form-group col-xs-6"><label>Sample Type</label><select class="form-control" name="sampleType"></select></div><div class="form-group col-md-12 col-sm-12 col-xs-12"><label>Pathogen/Test Type</label><div class="row col-md-12 testTypes indentLeft"></div></div><div class="form-group col-md-12 col-sm-12 col-xs-12 border-bottom"><label>Additional Comments</label><textarea class="form-control" rows="6" name="sAddlComments"></textarea></div></div>';
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
            });
        }, function (err) {
            $.growl.error({ title: "", message: "An error occured while updating ActivityData to DB. " + err.message, location: "tc", size: "large", fixed: "true" });
        });
    });
}
function loadActivityDataAH() {
    $.getJSON("data/feralActivity.json", function (data) {
        ActivityDataAH = data;
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
        $("#SiteIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
        $.each(siteData, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.name);
            $("#form1").find('select[id="SiteIdAH"]').append(option);
        });
        $("#SiteIdAH").append($('<option value="99999">New Site</option>'));
    });
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
    };
    $("#SiteIdAH").find('option').remove().end().append($('<option value="0">- select -</option>'));
    $.each(siteData, function (key, val) {
        var option = $('<option />');
        option.attr('value', val.id).text(val.name);
        $("#SiteIdAH").append(option);
    });
    $("#SiteIdAH").append($('<option value="99999">New Site</option>'));
}
function loadAHDefaults() {
    // Loading Team Defaults //
    $.getJSON("data/staff_team.json", function (data) {
        $.each(data.staffs.staff, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.displayName);
            $("#form1").find('#userName').append(option);
        });
    }); 
    // Loading speciesTaxonSyndromSamples Defaults //
    $.getJSON("data/speciesTaxonSyndromSamples_NAF.json", function (data) {
        speciesTaxonSyndromSamples = data.species;
        $("#form1").find('#commonName').find('option').remove().end().append('<option value="NONE">- select -</option>');
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
            v_bcs.find('input[type="radio"][name="optbodyCond"]').val(val.description);
            v_bcs.find('.bcstext').text(val.desc);
            $("#form1").find(".body_condition_score").append(v_bcs);
            $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
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
            $('.overlay').removeClass('hide');
            $('.modal-body').addClass('hide');
            $('.modal-footer').addClass('hide');
            t0 = performance.now();
        }
    }).complete(function (e) {
            var str = $("#commonName option:selected").val();
            if (str !== 'NONE') {
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
                    that.find('.syndromeText').text(syndromesData[idx - 1].desc);
                    that.find('.syndromeText').attr("name", "syndText" + syndromes);
                    that.find("input[name='syndrome']").attr("name", "syndrome" + syndromes);
                    that.find(".defSyndComments").addClass('hide');
                    that.find("input[name='defSyndComments']").attr("name", "defSyndComments" + syndromes);
                    that.insertAfter($('.defSyndromes'));
                    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
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
                    var that2 = $(preSample);
                    that2.find("input[type='checkbox']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that2.find("input[type='radio']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that2.find('select[name="sampleType"]').find('option').remove().end().append($(sampleTypes));
                    that2.find("input[name='sampleId']").attr("id", "pSampleId_" + samples);
                    //that2.find("input[name='sampleId']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
                    that2.find("input[id='pSampleId_" + samples + "']").attr("name", "pSampleId_" + samples);
                    that2.find(".sampleName").text("Sample " + samples);
                    that2.find("select[name='sampleType']").attr("id", "sampleType_" + samples);
                    that2.find("select[name='sampleType']").val(val.sampleTypeCode);
                    that2.find("select[id='sampleType_" + samples + "']").attr("name", "pSampleType_" + samples);
                    that2.find("select[id='sampleType_" + samples + "']").addClass("sampleType");
                    that2.find("#sampleType_" + samples + " :not([value^='" + val.sampleTypeCode + "'])").remove();
                    that2.find("textarea[name='sAddlComments']").attr("id", "pSAddlComments_" + samples);
                    that2.find("textarea[id='pSAddlComments_" + samples + "']").attr("name", "pSAddlComments_" + samples);
                    //Load default pathogens in the sample dropdownlist
                    var divTestTypes = that2.find(".testTypes");
                    var count = 0;
                    var arr1 = jQuery.grep(possibleSamples, function (n, i) {
                        return (n.sampleTypeCode === val.sampleTypeCode);
                    });
                    $.each(arr1[0].testFors, function (key2, val2) {
                        count++;
                        var option = '<div class="form-group col-xs-6 bg-gray-blue"><input type="checkbox" class="minimal" name=pTestType_' + samples + '_' + val2.testForCode + ' value="' + val2.testForCode + '"><label>' + val2.testForName + '</label></div>';
                        divTestTypes.append($(option));
                    });
                    that2.find("input[type='checkbox']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    that2.find("input[type='radio']").iCheck({
                        checkboxClass: 'icheckbox_square-blue',
                        radioClass: 'iradio_square-blue'
                    });
                    //Check the default pathogens
                    $.each(val.testFors, function (key3, val3) {
                        divTestTypes.find("input[type='checkbox'][value='" + val3.testForCode + "']").val("on").iCheck('check');
                    });
                    divTestTypes.find("input[type='checkbox'].minimal:not([value='on'])").val("off");
                    that2.addClass('preSelectedSample');
                    that2.addClass('hide');
                    $('#addPreSelectedSample').removeClass('hide');
                    that2.insertAfter($('.samples'));
                });
                $('.fieldtest').remove(); //Clear all Field Tests
                //Load default fieldtests
                $.each(def[0].fieldTests, function (key, val) { //For each default Field Test
                    fieldTests = fieldTests + 1;
                    var that3 = $(preFieldtest);
                    that3.find("select[name='pFieldTest']").attr("id", "pFieldTest_" + fieldTests);
                    that3.find('select[id="pFieldTest_' + fieldTests + '"]').find('option').remove().end().append($(defFieldTests));
                    that3.find('select[id="pFieldTest_' + fieldTests + '"]').val(val.fieldTestCde);
                    that3.find(".ftName").text("Field Test " + fieldTests);
                    that3.find("select[id='pfieldTest_" + fieldTests + "']").attr("name", "pFieldTest_" + fieldTests);
                    that3.find("#pFieldTest" + fieldTests + " :not([value^='" + val.fieldTestCde + "'])").remove();
                    that3.find("input[name='ftId']").attr("id", "pFtId_" + fieldTests);
                    that3.find("input[id='pFtId_" + fieldTests + "']").attr("name", "pFtId_" + fieldTests);
                    that3.find("input[name='ftInvalid']").attr("id", "pFtInvalid_" + fieldTests);
                    that3.find("input[id='pFtInvalid_" + fieldTests + "']").attr("name", "pFtInvalid_" + fieldTests);
                    that3.find("input[id='pFtInvalid_" + fieldTests + "']").val("off");
                    that3.find("input[name='ftComment']").attr("id", "pFtComment_" + fieldTests);
                    that3.find("input[id='pFtComment_" + fieldTests + "']").attr("name", "pFtComment_" + fieldTests);
                    var selectFT = that3.find('.diseases');
                    var diseases = 0;
                    selectFT.empty();
                    $.each(val.diseases, function (key2, val2) {
                        diseases = diseases + 1;
                        var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val2[0].diseaseName + '</label></div><div class="form-group col-xs-1">&nbsp;</div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="pFtResult_' + fieldTests + '_' + val2[0].diseaseCde + '" value="Positive"><label>Positive</label></div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="pFtResult_' + fieldTests + '_' + val2[0].diseaseCde + '" value="Negative"><label>Negative</label></div>';
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
                    that3.insertAfter($('.fieldtests'));               
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
$(document).on('change', 'select.sampleType', function () {
    var that = this;
    var str = $(that).val();
    var nxtTF = $(this).parent().next('div').find('.testTypes');
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
                    var option = '<div class="form-group col-xs-6 bg-gray-blue"><input type="checkbox" class="minimal" name=testType_' + samples + '_' + val.testForCode + ' value="off"><label>' + val.testForName + '</label></div>';
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
            var option = '<div class="form-group col-xs-6 bg-gray-blue"><input type="checkbox" class="minimal" name=testType_' + samples + '_' + val.testForCode + ' value="off"><label>' + val.testForName + '</label></div>';
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
    var nxtD = $(this).parent().parent().find('.diseases');
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
                    var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val.diseaseName + '</label></div><div class="form-group col-xs-1">&nbsp;</div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="ftResult_' + fieldTests + '_' + val.diseaseCde + '" value="Positive"><label>Positive</label></div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="ftResult_' + fieldTests + '_' + val.diseaseCde + '" value="Negative"><label>Negative</label></div>';
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
            var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val.diseaseName + '</label></div><div class="form-group col-xs-1">&nbsp;</div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="ftResult_' + fieldTests + '_' + val.diseaseCde + '" value="Positive"><label>Positive</label></div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="ftResult_' + fieldTests + '_' + val.diseaseCde + '" value="Positive"><label>Negative</label></div>';
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
    if (str !== 'NONE') {
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
            that.find('.syndromeText').text(syndromesData[idx - 1].description);
            that.find('.syndromeText').attr("name", "syndText" + syndromes);
            that.find("input[name='syndrome']").attr("name", "syndrome" + syndromes);
            that.find("input[name='defSyndComments']").attr("name", "defSyndComments" + syndromes);
            that.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });
            that.insertAfter($('.defSyndromes'))
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
        $('.sample').remove();
        samples = samples + 1;
        var that2 = $(preSample);
        that2.find("input[type='checkbox']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
        that2.find("input[type='radio']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
        that2.find('select[name="sampleType"]').find('option').remove().end().append($(sampleTypes));
        that2.find("input[name='sampleId']").attr("id", "pSampleId_" + samples);
        //that2.find("input[name='sampleId']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
        that2.find("input[id='pSampleId_" + samples + "']").attr("name", "pSampleId_" + samples);
        that2.find(".sampleName").text("Sample " + samples);
        that2.find("select[name='sampleType']").attr("id", "sampleType_" + samples);
        that2.find("select[name='sampleType']").val(def[0].defaultSamples[0].sampleTypeCode);
        that2.find("select[id='sampleType_" + samples + "']").attr("name", "pSampleType_" + samples);
        that2.find("select[id='sampleType_" + samples + "']").addClass("sampleType");
        that2.find("#sampleType_" + samples + " :not([value^='" + def[0].defaultSamples[0].sampleTypeCode + "'])").remove();
        that2.find("textarea[name='sAddlComments']").attr("id", "pSAddlComments_" + samples);
        that2.find("textarea[id='pSAddlComments_" + samples + "']").attr("name", "pSAddlComments_" + samples);
        //console.timeEnd('Samples');
        //Load default pathogens in the sample dropdownlist
        //console.time('pathogens');
        var divTestTypes = that2.find(".testTypes");
        var count = 0;
        var arr1 = jQuery.grep(possibleSamples, function (n, i) {
            return (n.sampleTypeCode === def[0].defaultSamples[0].sampleTypeCode);
        });
        $.each(arr1[0].testFors, function (key, val) {
            count++;
            var option = '<div class="form-group col-xs-6 bg-gray-blue"><input type="checkbox" class="minimal" name=pTestType_' + samples + '_' + val.testForCode + ' value="' + val.testForCode + '"><label>' + val.testForName + '</label></div>';
            divTestTypes.append($(option));
        });
        that2.find("input[type='checkbox']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
        that2.find("input[type='radio']").iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
        });
        $.each(def[0].defaultSamples[0].testFors, function (key, val) {
            divTestTypes.find("input[type='checkbox'][value='" + val.testForCode + "']").val("on").iCheck('check');
        });
        divTestTypes.find("input[type='checkbox'].minimal:not([value='on'])").val("off");
        that2.addClass('preSelectedSample');
        that2.addClass('hide');
        $('#addPreSelectedSample').removeClass('hide');
        that2.insertAfter($('.samples'));
        //console.timeEnd('pathogens');
        //Load default fieldtests
        //console.time('fieldtests');
        $('.fieldtest').remove();
        fieldTests = fieldTests + 1;
        var that3 = $(preFieldtest);
        that3.find("select[name='pFieldTest']").attr("id", "pFieldTest_" + fieldTests);
        that3.find('select[id="pFieldTest_' + fieldTests + '"]').find('option').remove().end().append($(defFieldTests));
        that3.find('select[id="pFieldTest_' + fieldTests + '"]').val(def[0].fieldTests[0].fieldTestCde);
        that3.find(".ftName").text("Field Test " + fieldTests);
        that3.find("select[id='pFieldTest_" + fieldTests + "']").attr("name", "pFieldTest_" + fieldTests);
        that3.find("#pFieldTest_" + fieldTests + " :not([value^='" + def[0].fieldTests[0].fieldTestCde + "'])").remove();
        that3.find("input[name='ftId']").attr("id", "pFtId_" + fieldTests);
        that3.find("input[id='pFtId_" + fieldTests + "']").attr("name", "pFtId_" + fieldTests);
        that3.find("input[name='ftInvalid']").attr("id", "pFtInvalid_" + fieldTests);
        that3.find("input[id='pFtInvalid_" + fieldTests + "']").attr("name", "pFtInvalid_" + fieldTests);
        that3.find("input[name='ftComment']").attr("id", "pFtComment_" + fieldTests);
        that3.find("input[id='pFtComment_" + fieldTests + "']").attr("name", "pFtComment_" + fieldTests);
        var selectFT = that3.find('.diseases');
        var diseases = 0;
        selectFT.empty();
        $.each(def[0].fieldTests[0].diseases, function (key, val) {
            diseases = diseases + 1;
            var disease = '<div class="form-group col-md-12 col-sm-12 col-xs-12"><label>' + val[0].diseaseName + '</label></div><div class="form-group col-xs-1">&nbsp;</div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="pFtResult_' + fieldTests + '_' + val[0].diseaseCde + '" value="Positive"><label>Positive</label></div><div class="form-group col-xs-5 bg-gray-blue"><input type="radio" class="form-control minimal" name="pFtResult_' + fieldTests + '_' + val[0].diseaseCde + '" value="Negative"><label>Negative</label></div>';
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
        that3.insertAfter($('.fieldtests'));
        //console.timeEnd('fieldtests');
    }
}
$(document).on('ifChecked', '.defSyndromeX input[type="radio"].minimal', function (event) {
    if ($(this).val() === 'Yes') {
        $(this).parent().parent().parent().find('div.defSyndComments').removeClass('hide');
    }
    if ($(this).val() === 'No') {
        $(this).parent().parent().parent().find('div.defSyndComments').find('input[type=text]').val('');
        $(this).parent().parent().parent().parent().find('div.defSyndComments').addClass('hide');
    }
});
function getNextAnimalID(e) {
    //Read from DB
    var nextID = resSettings.settings.device.currentAnimalNumber * 1 + 1;
    resSettings.settings.device.currentAnimalNumber = nextID;
    db.transaction(function (tx) {
        tx.executeSql("UPDATE settings SET settingsval = ? WHERE id = ?", [JSON.stringify(resSettings), 1], function (tx, res) {
            //alert("Row inserted.");
            //return e + pad(nextID.toString(), 4);
            $("#form1").find('input[type="text"].nextid').last().val(e + pad(nextID.toString(), 6));
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
    that.find('.syndromeCode').text($('#lstSyndromes option:selected').val());
    that.find('.syndromeText').text($('#lstSyndromes option:selected').text());
    that.find('.syndromeCode').attr("name", "syndCode" + syndromes);
    that.find('.syndromeText').attr("name", "syndText" + syndromes);
    //that.find("input[name='syndNumber']").attr("name", "syndNumber" + syndromes);
    //that.find("input[name='syndPercent']").attr("name", "syndPercent" + syndromes);
    that.find("input[name='syndComments']").attr("name", "syndComments" + syndromes);
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
                x.parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});
$(document).on('click', '#noSyndromes', function (e) {
    $('.defSyndromeX').find(':radio').iCheck('check');
    $('.defSyndromeX').find(':radio').val("No");
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
    that.find('select[name="fieldTest"]').find('option').remove().end().append($(defFieldTests));
    that.find(".ftName").text("Field Test " + fieldTests);
    that.find("select[name='fieldTest']").attr("id", "fieldTest_" + fieldTests);
    that.find("select[id='fieldTest_" + fieldTests + "']").addClass("fieldTest");
    that.find("select[id='fieldTest_" + fieldTests + "']").attr("name", "fieldTest_" + fieldTests);
    that.find("input[name='ftId']").attr("id", "ftId_" + fieldTests);
    that.find("input[id='ftId_" + fieldTests + "']").attr("name", "ftId_" + fieldTests);
    that.find("input[name='ftId_" + fieldTests + "']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
    that.find("input[name='ftInvalid']").attr("id", "ftInvalid_" + fieldTests);
    that.find("input[id='ftInvalid_" + fieldTests + "']").attr("name", "ftInvalid_" + fieldTests);
    that.find("input[id='ftInvalid_" + fieldTests + "']").val("off");
    that.find("input[name='ftComment']").attr("id", "ftComment_" + fieldTests);
    that.find("input[id='ftComment_" + fieldTests + "']").attr("name", "ftComment_" + fieldTests);
    that.insertAfter($('.fieldtests'));
});
$(document).on('click', '#addPreSelectedFieldTest', function (e) {
    $('#addPreSelectedFieldTest').addClass('hide');
    $('.preSelectedFieldTest').removeClass('hide');
    $('.preSelectedFieldTest').find("input[placeholder='Field Test ID']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
});
$(document).on('click', '.removeFieldTest', function (e) {
    fieldTests = fieldTests - 1;
    $(this).parent().parent().remove();
});
$(document).on('click', '.removePreFieldTest', function (e) {
    $('.preSelectedFieldTest').addClass('hide');
    $('#addPreSelectedFieldTest').removeClass('hide');
    $('.preSelectedFieldTest').find("input[placeholder='Field Test ID']").val("");
});
$(document).on('click', '#addSample', function (e) {
    samples = samples + 1;
    //var nextID = getNextID('SAMPLE');
    var that = $(sample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name="sampleType"]').find('option').remove().end().append($(sampleTypes));
    that.find("input[name='sampleId']").attr("id", "sampleId_" + samples);
    that.find("input[name='sampleId']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
    that.find("input[id='sampleId_" + samples + "']").attr("name", "sampleId_" + samples);
    that.find(".sampleName").text("Sample " + samples);
    that.find("select[name='sampleType']").attr("id", "sampleType_" + samples);
    that.find("select[id='sampleType_" + samples + "']").attr("name", "sampleType_" + samples);
    that.find("select[id='sampleType_" + samples + "']").addClass("sampleType");
    that.find("textarea[name='sAddlComments']").attr("id", "sAddlComments_" + samples);
    that.find("textarea[id='sAddlComments_" + samples + "']").attr("name", "sAddlComments_" + samples);
    that.insertAfter($('.samples'));
});
$(document).on('click', '#addPreSelectedSample', function (e) {
    $('#addPreSelectedSample').addClass('hide');
    $('.preSelectedSample').removeClass('hide');
    $('.preSelectedSample').find("input[placeholder='Sample Field ID']").val($("#form1").find('input[type="text"][name="animalNumber"]').val());
});
$(document).on('click', '.removeSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
                x.parent().parent().remove();
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
                $('.preSelectedSample').find("input[placeholder='Sample Field ID']").val("");
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
    $(':radio[name=optINT]').eq(1).iCheck('check');
    $(':radio[name=optINT]').eq(1).val("No");
    $(':radio[name=optNEC]').eq(1).iCheck('check');
    $(':radio[name=optNEC]').eq(1).val("No");
    $(':radio[name=optTHO]').eq(1).iCheck('check');
    $(':radio[name=optTHO]').eq(1).val("No");
    $(':radio[name=optABD]').eq(1).iCheck('check');
    $(':radio[name=optABD]').eq(1).val("No");
    $(':radio[name=optMUS]').eq(1).iCheck('check');
    $(':radio[name=optMUS]').eq(1).val("No");
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
            //samples = 0;
            bsamples = 0;
            esamples = 0;
            psamples = 0;
            //fieldTests = 0;
            numPlants = 0;
            numEntoHosts = 0;
            numEntoTargets = 0;
            numPathHosts = 0;
            numPathTargets = 0;
        }
    }).complete(function (e) {
            $('#form1').find("input[type=text], textarea").val("");
            $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck');
            $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
            setTimeout(function (e) {
                if (pagename === 'mo_sngObservation') {
                    loadActivityDataAH();
                    loadAHDefaults();
                }
                if (pagename === 'mo_grpObservation') {
                    loadActivityDataAH();
                    loadAHDefaults();
                }
            }, 300);
            setTimeout(function (e) {
                if (curIdx > -1) {
                    var data = results.observations[curIdx - 1];
                    var px = 0;
                    console.log(JSON.stringify(data));
                    if (data.commonName !== 'NONE') {
                        $('#form1').find("#commonName").val(data.commonName);
                        loadCommonNameData(data.commonName, data.taxon);
                    }
                    //console.time('load Modal');
                    $.each(data, function (key, value) {
                        //console.time('load Modal 1');
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
                        console.timeEnd('load Modal 1');
                        console.time('load Modal 2');
                        if (key.startsWith("sampleType_") && value !== "") {
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
                        console.timeEnd('load Modal 2');
                        console.time('load Modal 3');
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
                        console.timeEnd('load Modal 3');
                        console.time('load Modal 4');
                        if (key.startsWith("fieldTest_") && value !== "") {
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
                        console.timeEnd('load Modal 4');
                        console.time('load Modal 5');
                        if (key === "extObs" && value === "on") {
                            $('#form1').find("input[name='extObserver']").removeClass('hide');
                            $('#form1').find("input[type='checkbox'][name='extObs']").iCheck('check');
                        }
                        if (key === "extObs" && value === "off") {
                            $('#form1').find("input[name='extObserver']").addClass('hide');
                            $('#form1').find("input[type='checkbox'][name='extObs']").iCheck('uncheck');
                        }
                        if (key === "pmConducted" && value === "Yes") {
                            $('#tabPM').removeClass('hide');
                        }
                        if (key === "pmConducted" && value === "No") {
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
                        if (key.startsWith("plantPic_") && value !== "") {
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
                        //$('#form1').find("input[type='radio'][name='" + key + "']").val(value);
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
                    getAltitude();
                    $('#form1').find("input[type='text'][name='sDate']").val(today);
                    $('#form1').find("input[type='text'][name='id']").val(results.observations.length + 1);
                    //$('#form1').find("input[type='text'][name='track_id']").val(results.observations.length + 1);
                    $('#form1').find("input[type='text'][name='status']").val("0");
                    $('#form1').find("input[type='text'][name='age']").inputmask("99:99");
                    $('#form1').find("input[type='text'][name='AnimalNumber']").val(getNextAnimalID(resSettings.settings.device.animalPrefix));
                    $('#form1').find("input[type='text'][name^='AnimalDisciplineCode']").val(curDiscipline);
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
$('input[type="checkbox"].minimal').on('ifClicked', function (event) {
    //alert(event.type + ' callback');
    event.preventDefault();
    var nam = $(this).attr('name').split('-')[0];
    var idx = $(this).attr('name').split('-')[1];
    if (nam === 'weed' && $('input[type=checkbox][name=both-' + idx + ']').val() === 'on') {
        $.growl.warning({ title: "Plant Health Rules", message: "Operation Not Allowed!", location: "bc", size: "large" });
        $(this).val('off');
        $(this).iCheck('uncheck');
        return;
    }
    if (nam === 'both' && $('input[type=checkbox][name=weed-' + idx + ']').val() === 'on') {
        $.growl.warning({ title: "Plant Health Rules", message: "Operation Not Allowed!", location: "bc", size: "large" });
        $(this).val('off');
        $(this).iCheck('uncheck');
        return;
    }
    $(this).val('on');
});
$(document).on('ifChecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'extObs') {
        $('input[name="extObserver"').removeClass('hide');
    }
    if ($(this).attr('name').startsWith('ftInvalid')) {
        $(this).closest('.row').find('.diseases').empty();
        $(this).closest('.row').find('select').val("NONE");
    }
    $(this).val('on');
});
$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'extObs') {
        $('input[name="extObserver"').addClass('hide');
    }
    $(this).val('off');
});
$(document).on('ifChecked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'optSyndromes' && $(this).val() === 'Yes') {
        $('.addedSyndrome').removeClass('hide');
        $('.addedSyndrome').next('div').removeClass('hide');
    }
    if ($(this).attr('name') === 'optSyndromes' && $(this).val() === 'No') {
        $('.addedSyndrome').addClass('hide');
        $('.addedSyndrome').next('div').addClass('hide');
    }
    if ($(this).attr('name') === 'optWounds' && $(this).val() === 'Yes') {
        $('.addMaggotSamples').removeClass('hide');
    }
    if ($(this).attr('name') === 'optWounds' && $(this).val() === 'No') {
        $('.addMaggotSamples').addClass('hide');
    }
    if ($(this).attr('name') === 'pmConducted' && $(this).val() === 'Yes') {
        $('#tabPM').removeClass('hide');
    }
    if ($(this).attr('name') === 'pmConducted' && $(this).val() === 'No') {
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
    if ($(this).attr('name') === 'optMaggots' && $(this).val() === 'Yes') {
        $('#addMaggotSample').removeClass('hide');
        $('.maggotSamples').removeClass('hide');
    }
    if ($(this).attr('name') === 'optMaggots' && $(this).val() === 'No') {
        $('#addMaggotSample').addClass('hide');
        $('.maggotSamples').addClass('hide');
    }
});

$(document).on('focus', "#SiteIdAH", function (e) {
    lastSiteValue = $(this).val();
})
    .on('change', "#SiteIdAH", function (e) {
        var that = $(this);
        var str = that.val();
        //if (that.val() === "0" || lastSiteValue === "0") return;
        if (that.val() === "0") return;
        if (curDiscipline === "S") {
            //loadSiteData(str);
            return;
        }
    });
$(document).on('focus', "#SurvActivityIdAH", function (e) {
    lastSurvActValue = $(this).val();
})
    .on('change', '#SurvActivityIdAH', function (e) {
        var that = $(this);
        var str = that.val();
        if (that.val() === "0") return;
        if (curDiscipline === "S") {
            refreshActivityDataAH(str);
            //loadstaffData();
            //$('#form1').find("select[name^='ObservationStaffId']").val(resSettings.settings.device.ownerId);
            return;
        }
    });

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
    return $('#tabList').position().left;
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