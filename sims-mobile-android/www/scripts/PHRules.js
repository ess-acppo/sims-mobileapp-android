var staffData;
var statType;
var MoB;
var elifeStage;
var plifeStage;
var eCollMethod;
var percInfested;
var damageLevel;
var pestLevel;
var incidence;
var severity;

function loadPHDefaults() {
    // Loading Activity Defaults //
    $.getJSON("data/activity.json", function (data) {
        var option = $('<option />');
        option.attr('value', data.activities.activity.metadata.name).text(data.activities.activity.metadata.name);
        $("#form1").find('#surveillanceActivity').append(option);
    });

    // Loading sites //
    $.getJSON("data/activity.json", function (data) {
        $.each(data.activities.activity.metadata.sites, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.name);
            $("#form1").find('#siteCommunity').append(option);
        });
    });

    // Loading Team Defaults //
    $.getJSON("data/staff_team.json", function (data) {
        staffData = '<option value="NONE">- select -</option>';
        $.each(data.staffs.staff, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.displayName);
            $("#form1").find('#observer').append(option);

            var option1 = '<option';
            option1 = option1 + ' value="' + val.id + '">';
            option1 = option1 + val.displayName + "</option>";
            staffData = staffData + option1;
        });
    });

    // Loading Plant Statistic Type //
    $.getJSON("data/PHDefaults.json", function (data) {
        statType = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.PlantStatisticType, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            statType = statType + option1;
        });
    });

    // Loading Plant Observation Method //
    $.getJSON("data/PHDefaults.json", function (data) {
        MoB = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.PlantObservationMethod, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            MoB = MoB + option1;
        });
    });

    // Loading Life Stage //
    $.getJSON("data/PHDefaults.json", function (data) {
        elifeStage = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.EntoLifeStage, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            elifeStage = elifeStage + option1;
        });
    });
    $.getJSON("data/PHDefaults.json", function (data) {
        plifeStage = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.PlantLifeStage, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            plifeStage = plifeStage + option1;
        });
    });

    // Loading Ento Collection Method //
    $.getJSON("data/PHDefaults.json", function (data) {
        eCollMethod = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.EntoCollectionMethod, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            eCollMethod = eCollMethod + option1;
        });
    });

    // Loading Ento Percentage Infested //
    $.getJSON("data/PHDefaults.json", function (data) {
        percInfested = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.EntoInfestedPct, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            percInfested = percInfested + option1;
        });
    });

    // Loading Ento Damage Level //
    $.getJSON("data/PHDefaults.json", function (data) {
        damageLevel = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.EntoDamageLevel, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            damageLevel = damageLevel + option1;
        });
    });

    // Loading Ento Pest Level //
    $.getJSON("data/PHDefaults.json", function (data) {
        pestLevel = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.EntoPestLevel, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            pestLevel = pestLevel + option1;
        });
    });

    // Loading Path Incidence //
    $.getJSON("data/PHDefaults.json", function (data) {
        incidence = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.PathIncidence, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            incidence = incidence + option1;
        });
    });

    // Loading Path Severity //
    $.getJSON("data/PHDefaults.json", function (data) {
        severity = '<option value="NONE">- select -</option>';
        $.each(data.PlantHealthReferenceCodes.PathSeverity, function (key, val) {
            var option1 = '<option';
            option1 = option1 + ' value="' + val.code + '">';
            option1 = option1 + val.desc + "</option>";
            severity = severity + option1;
        });
    });
}

$(document).on('click', '.qtyplus', function (e) {
    e.preventDefault();
    fieldName = $(this).prev().attr('name');
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal)) {
        $('input[name=' + fieldName + ']').text(currentVal + 1);
        $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        $('input[name=' + fieldName + ']').text(0);
        $('input[name=' + fieldName + ']').val(0);
    }
});

$(document).on('click', ".qtyminus", function (e) {
    e.preventDefault();
    fieldName = $(this).next().attr('name');
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $('input[name=' + fieldName + ']').text(currentVal - 1);
        $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        $('input[name=' + fieldName + ']').text(0);
        $('input[name=' + fieldName + ']').val(0);
    }
});

$(document).on('click', "#addPlant", function () {
    var Idx = numPlants;
    var that1 = $(hostweed);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='plantName1']").attr('name', 'plantName_' + Idx);
    that1.find("select[name='statType1']").attr('name', 'statType_' + Idx);
    //that1.find("input[name='statTypeVal1']").text(0);
    that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    that1.find("select[name='PlantStatisticType1']").attr('name', 'PlantStatisticType_' + Idx);
    that1.find("input[name='statTypeVal1']").val(0);
    that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    that1.find("input[type='radio'][name='CountList1']").attr('name', 'CountList_' + Idx);
    that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx);
    that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx);
    that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);
    that1.find("img[id='plantPic1']").attr('name', 'iplantPic_' + Idx + '_1');
    that1.find("input[id='iplantPic1']").attr('name', 'plantPic_' + Idx + '_1');
    that1.find("img[id='plantPic2']").attr('name', 'iplantPic_' + Idx + '_2');
    that1.find("input[id='iplantPic2']").attr('name', 'plantPic_' + Idx + '_2');
    that1.find("img[id='plantPic3']").attr('name', 'iplantPic_' + Idx + '_3');
    that1.find("input[id='iplantPic3']").attr('name', 'plantPic_' + Idx + '_3');
    that1.find("img[id='plantPic4']").attr('name', 'iplantPic_' + Idx + '_4');
    that1.find("input[id='iplantPic4']").attr('name', 'plantPic_' + Idx + '_4');
    that1.find("img[id='plantPic5']").attr('name', 'iplantPic_' + Idx + '_5');
    that1.find("input[name='iplantPic5']").attr('name', 'plantPic_' + Idx + '_5');
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numPlants++;
    $('#numPlants').text(numPlants);
});

$(document).on('click', "#addEntoHost", function () {
    var Idx = numEntoHosts;
    var that1 = $(entobox);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='ehostName1']").attr('name', 'ehostName_' + Idx);
    that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    that1.find("select[name='PlantStatisticType1']").attr('name', 'PlantStatisticType_' + Idx);
    that1.find("input[name='statTypeVal1']").val(0);
    that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx);
    that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx);
    that1.find('select[name="PlantObservationMethod1"]').find('option').remove().end().append($(MoB));
    that1.find("select[name='PlantObservationMethod1']").attr('name', 'PlantObservationMethod_' + Idx);
    that1.find("input[type='text'][name='entoTarget1']").attr('name', 'entoTarget_' + Idx);
    that1.find("input[type='text'][name='Count1']").attr('name', 'count_' + Idx);
    that1.find("input[type='radio'][name='TargetObserved1']").attr('name', 'TargetObserved_' + Idx);
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find("input[type='checkbox'][name='hpstatus1']").attr('name', 'hpstatus1_' + Idx);
    that1.find("input[type='checkbox'][name='hpstatus2']").attr('name', 'hpstatus2_' + Idx);
    that1.find("input[type='checkbox'][name='hpstatus3']").attr('name', 'hpstatus3_' + Idx);
    that1.find("input[type='checkbox'][name='hpstatus4']").attr('name', 'hpstatus4_' + Idx);
    that1.find('select[name="lifeStage1"]').find('option').remove().end().append($(elifeStage));
    that1.find("select[name='lifeStage1']").attr('name', 'lifeStage_' + Idx);
    that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);
    that1.find('.badge').text(Idx * 1 + 1);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    $('#hostweeds').append(that1);
    numEntoHosts++;
    $('#numEntoHosts').text(numEntoHosts);
});

$(document).on('click', "[data-action=addEntoTarget]", function () {
    var Idx = numEntoTargets;
    var that = $(this).closest('.entotarget');
    var that1 = $(entotarget);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='entoTarget1']").attr('name', 'entoTarget_' + Idx);
    that1.find("input[type='text'][name='Count1']").attr('name', 'Count_' + Idx);
    that1.find("input[type='radio'][name='TargetObserved1']").attr('name', 'TargetObserved_' + Idx);
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');;
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.insertAfter(that);
    numEntoTargets++;
});

$(document).on('click', "#addPathHost", function () {
    var Idx = numPathHosts;
    var that1 = $(pathbox);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='phostName1']").attr('name', 'phostName_' + Idx);
    that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    that1.find("select[name='PlantStatisticType1']").attr('name', 'PlantStatisticType_' + Idx);
    that1.find("input[name='statTypeVal1']").val(0);
    that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx);
    that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx);
    that1.find('select[name="PlantObservationMethod1"]').find('option').remove().end().append($(MoB));
    that1.find("select[name='PlantObservationMethod1']").attr('name', 'PlantObservationMethod_' + Idx);
    that1.find("input[type='text'][name='pathTarget1']").attr('name', 'pathTarget_' + Idx);
    that1.find("input[type='text'][name='count1']").attr('name', 'count_' + Idx);
    that1.find("input[type='checkbox'][name='optTarget1']").attr('name', 'optTarget_' + Idx);
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find('select[name="lifeStage1"]').find('option').remove().end().append($(plifeStage));
    that1.find("select[name='lifeStage1']").attr('name', 'lifeStage_' + Idx);
    that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numPathHosts++;
    $('#numPathHosts').text(numPathHosts);
});

$(document).on('click', "[data-action=addPathTarget]", function () {
    var Idx = numPathTargets;
    var that = $(this).closest('.pathtarget');
    var that1 = $(pathtarget);
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='pathTarget1']").attr('name', 'pathTarget_' + Idx);
    that1.find("input[type='text'][name='Count1']").attr('name', 'count_' + Idx);
    that1.find("input[type='checkbox'][name='TargetObserved1']").attr('name', 'TargetObserved_' + Idx);
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.insertAfter(that);
    numPathTargets++;
});

$(document).on('click', "[data-action=removePlant]", function () {
    var that = $(this).closest('.hostweed');
    if (numPlants > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Plant?',
            buttons: {
                Ok: function () {
                    that.remove();
                    numPlants--;
                    $('#numPlants').text(numPlants);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});

$(document).on('click', "[data-action=removeEntoHost]", function () {
    var that = $(this).closest('.entobox');
    if (numEntoHosts > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Host?',
            buttons: {
                Ok: function () {
                    that.remove();
                    numEntoHosts--;
                    $('#numEntoHosts').text(numEntoHosts);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});

$(document).on('click', "[data-action=removeEntoTarget]", function () {
    var that = $(this).closest('.entotarget');
    if (numEntoTargets > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Target?',
            buttons: {
                Ok: function () {
                    that.remove();
                    numEntoTargets--;
                    //$('#numEntoHosts').text(numEntoTargets);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});

$(document).on('click', "[data-action=removePathHost]", function () {
    var that = $(this).closest('.pathbox');
    if (numPathHosts > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Host?',
            buttons: {
                Ok: function () {
                    that.remove();
                    numPathHosts--;
                    $('#numEntoHosts').text(numPathHosts);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});

$(document).on('click', "[data-action=removePathTarget]", function () {
    var that = $(this).closest('.pathtarget');
    if (numPathTargets > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Target?',
            buttons: {
                Ok: function () {
                    that.remove();
                    numPathTargets--;
                    //$('#numEntoHosts').text(numEntoTargets);
                },
                cancel: function () {
                    //close
                }
            }
        });
    }
});

$(document).on('click', "[data-action=expand]", function () {
    var x = $(this).closest('.collapsed');
    x.removeClass('collapsed');
    x.addClass('expanded');
    x.find('.collapse').removeClass('hide');
    x.find('.expand').addClass('hide');
    x.css("background-color", "#fffcec");
});

$(document).on('click', "[data-action=collapse]", function () {
    var x = $(this).closest('.expanded');
    x.addClass('collapsed');
    x.removeClass('expanded');
    x.find('.collapse').addClass('hide');
    x.find('.expand').removeClass('hide');
    x.css("background-color", "#fff");
});

$(document).on('click', '#addBotanySample', function (e) {
    bsamples = bsamples + 1;
    var that = $(botSample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("select[name='identifiedBy']").find("option").remove().end().append($(staffData));
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + bsamples);
    that.find("select[id='identifiedBy_" + bsamples + "']").attr("name", "identifiedBy_" + bsamples);
    that.find("input[name='bsampleId']").attr("id", "bsampleId_" + bsamples);
    that.find("input[id='bsampleId_" + bsamples + "']").attr("name", "bsampleId_" + bsamples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + bsamples);
    that.find("input[id='addlCollectors_" + bsamples + "']").attr("name", "addlCollectors_" + bsamples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + bsamples);
    that.find("input[id='numCollected_" + bsamples + "']").attr("name", "numCollected_" + bsamples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + bsamples);
    that.find("input[id='crossCollection_" + bsamples + "']").attr("name", "crossCollection_" + bsamples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + bsamples);
    that.find("input[id='prelimID_" + bsamples + "']").attr("name", "prelimID_" + bsamples);
    that.find("input[name='latitude']").attr("id", "latitude_" + bsamples);
    that.find("input[id='latitude_" + bsamples + "']").attr("name", "latitude_" + bsamples);
    that.find("input[name='longitude']").attr("id", "longitude_" + bsamples);
    that.find("input[id='longitude_" + bsamples + "']").attr("name", "longitude_" + bsamples);
    that.find("input[name='altitude']").attr("id", "altitude_" + bsamples);
    that.find("input[id='altitude_" + bsamples + "']").attr("name", "altitude_" + bsamples);
    that.find("input[name='habit']").attr("id", "habit_" + bsamples);
    that.find("input[id='habit_" + bsamples + "']").attr("name", "habit_" + bsamples);
    that.find("input[name='description']").attr("id", "description_" + bsamples);
    that.find("input[id='description_" + bsamples + "']").attr("name", "description_" + bsamples);
    that.find("input[name='habitat']").attr("id", "habitat_" + bsamples);
    that.find("input[id='habitat_" + bsamples + "']").attr("name", "habitat_" + bsamples);
    that.find("input[name='landform']").attr("id", "landform_" + bsamples);
    that.find("input[id='landform_" + bsamples + "']").attr("name", "landform_" + bsamples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + bsamples);
    that.find("input[id='soilGeology_" + bsamples + "']").attr("name", "soilGeology_" + bsamples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + bsamples);
    that.find("input[id='externalCam_" + bsamples + "']").attr("name", "externalCam_" + bsamples);
    that.find("input[name='BotPlantPreserve-SP']").attr("id", "BotPlantPreserve-SP_" + bsamples);
    that.find("input[id='BotPlantPreserve-SP_" + bsamples + "']").attr("name", "BotPlantPreserve-SP_" + bsamples);
    that.find("input[name='BotPlantPreserve-DN']").attr("id", "BotPlantPreserve-DN_" + bsamples);
    that.find("input[id='BotPlantPreserve-DN_" + bsamples + "']").attr("name", "BotPlantPreserve-DN_" + bsamples);
    that.find("input[name='BotPlantPreserve-O']").attr("id", "BotPlantPreserve-O_" + bsamples);
    that.find("input[id='BotPlantPreserve-O_" + bsamples + "']").attr("name", "BotPlantPreserve-O_" + bsamples);
    that.find("input[name='BotPlantPreserverOtherText']").attr("id", "BotPlantPreserverOtherText_" + bsamples);
    that.find("input[id='BotPlantPreserverOtherText_" + bsamples + "']").attr("name", "BotPlantPreserverOtherText_" + bsamples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + bsamples);
    that.find("textarea[id='addlObsrvns_" + bsamples + "']").attr("name", "addlObsrvns_" + bsamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID("SM"));
    that.insertAfter($('.samples'));
});

function loadBotanySample() {
    bsamples = bsamples + 1;
    var that = $(botSample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + bsamples);
    that.find("select[id='identifiedBy_" + bsamples + "']").attr("name", "identifiedBy_" + bsamples);
    that.find("input[name='bsampleId']").attr("id", "bsampleId_" + bsamples);
    that.find("input[id='bsampleId_" + bsamples + "']").attr("name", "bsampleId_" + bsamples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + bsamples);
    that.find("input[id='addlCollectors_" + bsamples + "']").attr("name", "addlCollectors_" + bsamples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + bsamples);
    that.find("input[id='numCollected_" + bsamples + "']").attr("name", "numCollected_" + bsamples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + bsamples);
    that.find("input[id='crossCollection_" + bsamples + "']").attr("name", "crossCollection_" + bsamples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + bsamples);
    that.find("input[id='prelimID_" + bsamples + "']").attr("name", "prelimID_" + bsamples);
    that.find("input[name='latitude']").attr("id", "latitude_" + bsamples);
    that.find("input[id='latitude_" + bsamples + "']").attr("name", "latitude_" + bsamples);
    that.find("input[name='longitude']").attr("id", "longitude_" + bsamples);
    that.find("input[id='longitude_" + bsamples + "']").attr("name", "longitude_" + bsamples);
    that.find("input[name='altitude']").attr("id", "altitude_" + bsamples);
    that.find("input[id='altitude_" + bsamples + "']").attr("name", "altitude_" + bsamples);
    that.find("input[name='habit']").attr("id", "habit_" + bsamples);
    that.find("input[id='habit_" + bsamples + "']").attr("name", "habit_" + bsamples);
    that.find("input[name='description']").attr("id", "description_" + bsamples);
    that.find("input[id='description_" + bsamples + "']").attr("name", "description_" + bsamples);
    that.find("input[name='habitat']").attr("id", "habitat_" + bsamples);
    that.find("input[id='habitat_" + bsamples + "']").attr("name", "habitat_" + bsamples);
    that.find("input[name='landform']").attr("id", "landform_" + bsamples);
    that.find("input[id='landform_" + bsamples + "']").attr("name", "landform_" + bsamples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + bsamples);
    that.find("input[id='soilGeology_" + bsamples + "']").attr("name", "soilGeology_" + bsamples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + bsamples);
    that.find("input[id='externalCam_" + bsamples + "']").attr("name", "externalCam_" + bsamples);
    that.find("input[name='BotPlantPreserve-SP']").attr("id", "BotPlantPreserve-SP_" + bsamples);
    that.find("input[id='BotPlantPreserve-SP_" + bsamples + "']").attr("name", "BotPlantPreserve-SP_" + bsamples);
    that.find("input[name='BotPlantPreserve-DN']").attr("id", "BotPlantPreserve-DN_" + bsamples);
    that.find("input[id='BotPlantPreserve-DN_" + bsamples + "']").attr("name", "BotPlantPreserve-DN_" + bsamples);
    that.find("input[name='BotPlantPreserve-O']").attr("id", "BotPlantPreserve-O_" + bsamples);
    that.find("input[id='BotPlantPreserve-O_" + bsamples + "']").attr("name", "BotPlantPreserve-O_" + bsamples);
    that.find("input[name='BotPlantPreserverOtherText']").attr("id", "BotPlantPreserverOtherText_" + bsamples);
    that.find("input[id='BotPlantPreserverOtherText_" + bsamples + "']").attr("name", "BotPlantPreserverOtherText_" + bsamples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + bsamples);
    that.find("textarea[id='addlObsrvns_" + bsamples + "']").attr("name", "addlObsrvns_" + bsamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.insertAfter($('.samples'));
};

$(document).on('click', '.removeBotSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                bsamples = bsamples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});

$(document).on('click', '#addEntoSample', function (e) {
    esamples = esamples + 1;
    var that = $(entosample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + esamples);
    that.find("select[id='identifiedBy_" + esamples + "']").attr("name", "identifiedBy_" + esamples);
    that.find("input[name='esampleId']").attr("id", "esampleId_" + esamples);
    that.find("input[id='esampleId_" + esamples + "']").attr("name", "esampleId_" + esamples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + esamples);
    that.find("input[id='addlCollectors_" + esamples + "']").attr("name", "addlCollectors_" + esamples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + esamples);
    that.find("input[id='numCollected_" + esamples + "']").attr("name", "numCollected_" + esamples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + esamples);
    that.find("input[id='crossCollection_" + esamples + "']").attr("name", "crossCollection_" + esamples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + esamples);
    that.find("input[id='prelimID_" + esamples + "']").attr("name", "prelimID_" + esamples);
    that.find("input[name='latitude']").attr("id", "latitude_" + esamples);
    that.find("input[id='latitude_" + esamples + "']").attr("name", "latitude_" + esamples);
    that.find("input[name='longitude']").attr("id", "longitude_" + esamples);
    that.find("input[id='longitude_" + esamples + "']").attr("name", "longitude_" + esamples);
    that.find("input[name='duration']").attr("id", "duration_" + esamples);
    that.find("input[id='duration_" + esamples + "']").attr("name", "duration_" + esamples);
    that.find("input[name='altitude']").attr("id", "altitude_" + esamples);
    that.find("input[id='altitude_" + esamples + "']").attr("name", "altitude_" + esamples);
    that.find('select[name="EntoCollectionMethod"]').find('option').remove().end().append($(eCollMethod));
    that.find("select[name='EntoCollectionMethod']").attr("id", "EntoCollectionMethod_" + esamples);
    that.find("select[id='EntoCollectionMethod_" + esamples + "']").attr("name", "EntoCollectionMethod_" + esamples);
    that.find("input[name='hostother']").attr("id", "hostother_" + esamples);
    that.find("input[id='hostother_" + esamples + "']").attr("name", "hostother_" + esamples);
    that.find("input[name='othername']").attr("id", "othername_" + esamples);
    that.find("input[id='othername_" + esamples + "']").attr("name", "othername_" + esamples);
    that.find("input[name='plantPart']").attr("id", "plantPart_" + esamples);
    that.find("input[id='plantPart_" + esamples + "']").attr("name", "plantPart_" + esamples);
    that.find("input[name='EntoPlantPreserve']").attr("id", "EntoPlantPreserve_" + esamples);
    that.find("input[id='EntoPlantPreserve_" + esamples + "']").attr("name", "EntoPlantPreserve_" + esamples);
    that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + esamples);
    that.find("input[id='othPreserveType_" + esamples + "']").attr("name", "othPreserveType_" + esamples);
    that.find('select[name="EntoInfestedPct"]').find('option').remove().end().append($(percInfested));
    that.find("select[name='EntoInfestedPct']").attr("id", "EntoInfestedPct_" + esamples);
    that.find("select[id='EntoInfestedPct_" + esamples + "']").attr("name", "EntoInfestedPct_" + esamples);
    that.find('select[name="EntoDamageLevel"]').find('option').remove().end().append($(damageLevel));
    that.find("select[name='EntoDamageLevel']").attr("id", "EntoDamageLevel_" + esamples);
    that.find("select[id='EntoDamageLevel_" + esamples + "']").attr("name", "EntoDamageLevel_" + esamples);
    that.find('select[name="EntoPestLevel"]').find('option').remove().end().append($(pestLevel));
    that.find("select[name='EntoPestLevel']").attr("id", "EntoPestLevel_" + esamples);
    that.find("select[id='EntoPestLevel_" + esamples + "']").attr("name", "EntoPestLevel_" + esamples);
    that.find("input[name='EntoLifeStage']").attr("id", "EntoLifeStage_" + esamples);
    that.find("input[id='EntoLifeStage_" + esamples + "']").attr("name", "EntoLifeStage_" + esamples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + esamples);
    that.find("input[id='externalCam_" + esamples + "']").attr("name", "externalCam_" + esamples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + esamples);
    that.find("textarea[id='addlObsrvns_" + esamples + "']").attr("name", "addlObsrvns_" + esamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID("SM"));
    that.insertAfter($('.samples'));
});

function loadEntoSample() {
    esamples = esamples + 1;
    var that = $(entosample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + esamples);
    that.find("select[id='identifiedBy_" + esamples + "']").attr("name", "identifiedBy_" + esamples);
    that.find("input[name='esampleId']").attr("id", "esampleId_" + esamples);
    that.find("input[id='esampleId_" + esamples + "']").attr("name", "esampleId_" + esamples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + esamples);
    that.find("input[id='addlCollectors_" + esamples + "']").attr("name", "addlCollectors_" + esamples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + esamples);
    that.find("input[id='numCollected_" + esamples + "']").attr("name", "numCollected_" + esamples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + esamples);
    that.find("input[id='crossCollection_" + esamples + "']").attr("name", "crossCollection_" + esamples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + esamples);
    that.find("input[id='prelimID_" + esamples + "']").attr("name", "prelimID_" + esamples);
    that.find("input[name='latitude']").attr("id", "latitude_" + esamples);
    that.find("input[id='latitude_" + esamples + "']").attr("name", "latitude_" + esamples);
    that.find("input[name='longitude']").attr("id", "longitude_" + esamples);
    that.find("input[id='longitude_" + esamples + "']").attr("name", "longitude_" + esamples);
    that.find("input[name='duration']").attr("id", "duration_" + esamples);
    that.find("input[id='duration_" + esamples + "']").attr("name", "duration_" + esamples);
    that.find("input[name='altitude']").attr("id", "altitude_" + esamples);
    that.find("input[id='altitude_" + esamples + "']").attr("name", "altitude_" + esamples);
    that.find('select[name="EntoCollectionMethod"]').find('option').remove().end().append($(eCollMethod));
    that.find("select[name='EntoCollectionMethod']").attr("id", "EntoCollectionMethod_" + esamples);
    that.find("select[id='EntoCollectionMethod_" + esamples + "']").attr("name", "EntoCollectionMethod_" + esamples);
    that.find("input[name='hostother']").attr("id", "hostother_" + esamples);
    that.find("input[id='hostother_" + esamples + "']").attr("name", "hostother_" + esamples);
    that.find("input[name='othername']").attr("id", "othername_" + esamples);
    that.find("input[id='othername_" + esamples + "']").attr("name", "othername_" + esamples);
    that.find("input[name='plantPart']").attr("id", "plantPart_" + esamples);
    that.find("input[id='plantPart_" + esamples + "']").attr("name", "plantPart_" + esamples);
    that.find("input[name='EntoPlantPreserve']").attr("id", "EntoPlantPreserve_" + esamples);
    that.find("input[id='EntoPlantPreserve_" + esamples + "']").attr("name", "EntoPlantPreserve_" + esamples);
    that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + esamples);
    that.find("input[id='othPreserveType_" + esamples + "']").attr("name", "othPreserveType_" + esamples);
    that.find('select[name="EntoInfestedPct"]').find('option').remove().end().append($(percInfested));
    that.find("select[name='EntoInfestedPct']").attr("id", "EntoInfestedPct_" + esamples);
    that.find("select[id='EntoInfestedPct_" + esamples + "']").attr("name", "EntoInfestedPct_" + esamples);
    that.find('select[name="EntoDamageLevel"]').find('option').remove().end().append($(damageLevel));
    that.find("select[name='EntoDamageLevel']").attr("id", "EntoDamageLevel_" + esamples);
    that.find("select[id='EntoDamageLevel_" + esamples + "']").attr("name", "EntoDamageLevel_" + esamples);
    that.find('select[name="EntoPestLevel"]').find('option').remove().end().append($(pestLevel));
    that.find("select[name='EntoPestLevel']").attr("id", "EntoPestLevel_" + esamples);
    that.find("select[id='EntoPestLevel_" + esamples + "']").attr("name", "EntoPestLevel_" + esamples);
    that.find("input[name='EntoLifeStage']").attr("id", "EntoLifeStage_" + esamples);
    that.find("input[id='EntoLifeStage_" + esamples + "']").attr("name", "EntoLifeStage_" + esamples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + esamples);
    that.find("input[id='externalCam_" + esamples + "']").attr("name", "externalCam_" + esamples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + esamples);
    that.find("textarea[id='addlObsrvns_" + esamples + "']").attr("name", "addlObsrvns_" + esamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.insertAfter($('.samples'));
};

$(document).on('click', '.removeEntoSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                esamples = esamples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});

$(document).on('click', '#addPathSample', function (e) {
    psamples = psamples + 1;
    var that = $(pathsample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + psamples);
    that.find("select[id='identifiedBy_" + psamples + "']").attr("name", "identifiedBy_" + psamples);
    that.find("input[name='psampleId']").attr("id", "psampleId_" + psamples);
    that.find("input[id='psampleId_" + psamples + "']").attr("name", "psampleId_" + psamples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + psamples);
    that.find("input[id='addlCollectors_" + psamples + "']").attr("name", "addlCollectors_" + psamples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + psamples);
    that.find("input[id='numCollected_" + psamples + "']").attr("name", "numCollected_" + psamples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + psamples);
    that.find("input[id='crossCollection_" + psamples + "']").attr("name", "crossCollection_" + psamples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + psamples);
    that.find("input[id='prelimID_" + psamples + "']").attr("name", "prelimID_" + psamples);
    that.find("input[name='latitude']").attr("id", "latitude_" + psamples);
    that.find("input[id='latitude_" + psamples + "']").attr("name", "latitude_" + psamples);
    that.find("input[name='longitude']").attr("id", "longitude_" + psamples);
    that.find("input[id='longitude_" + psamples + "']").attr("name", "longitude_" + psamples);
    that.find("input[name='altitude']").attr("id", "altitude_" + psamples);
    that.find("input[id='altitude_" + psamples + "']").attr("name", "altitude_" + psamples);
    that.find("input[name='hostother']").attr("id", "hostother_" + psamples);
    that.find("input[id='hostother_" + psamples + "']").attr("name", "hostother_" + psamples);
    that.find("input[name='othername']").attr("id", "othername_" + psamples);
    that.find("input[id='othername_" + psamples + "']").attr("name", "othername_" + psamples);
    that.find("input[name='PathPlantPart']").attr("id", "PathPlantPart_" + psamples);
    that.find("input[id='PathPlantPart_" + psamples + "']").attr("name", "PathPlantPart_" + psamples);
    that.find("input[name='PathPlantPreserve']").attr("id", "PathPlantPreserve_" + psamples);
    that.find("input[id='PathPlantPreserve_" + psamples + "']").attr("name", "PathPlantPreserve_" + psamples);
    that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + psamples);
    that.find("input[id='othPreserveType_" + psamples + "']").attr("name", "othPreserveType_" + psamples);
    that.find('select[name="PathIncidence"]').find('option').remove().end().append($(incidence));
    that.find("select[name='PathIncidence']").attr("id", "PathIncidence_" + psamples);
    that.find("select[id='PathIncidence_" + psamples + "']").attr("name", "PathIncidence_" + psamples);
    that.find('select[name="PathSeverity"]').find('option').remove().end().append($(severity));
    that.find("select[name='PathSeverity']").attr("id", "PathSeverity_" + psamples);
    that.find("select[id='PathSeverity_" + psamples + "']").attr("name", "PathSeverity_" + psamples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + psamples);
    that.find("input[id='externalCam_" + psamples + "']").attr("name", "externalCam_" + psamples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + psamples);
    that.find("textarea[id='addlObsrvns_" + psamples + "']").attr("name", "addlObsrvns_" + psamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.find("input.nextid").val(getNextID("SM"));
    that.insertAfter($('.samples'));
});

function loadPathSample() {
    psamples = psamples + 1;
    var that = $(pathsample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + psamples);
    that.find("select[id='identifiedBy_" + psamples + "']").attr("name", "identifiedBy_" + psamples);
    that.find("input[name='psampleId']").attr("id", "psampleId_" + psamples);
    that.find("input[id='psampleId_" + psamples + "']").attr("name", "psampleId_" + psamples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + psamples);
    that.find("input[id='addlCollectors_" + psamples + "']").attr("name", "addlCollectors_" + psamples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + psamples);
    that.find("input[id='numCollected_" + psamples + "']").attr("name", "numCollected_" + psamples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + psamples);
    that.find("input[id='crossCollection_" + psamples + "']").attr("name", "crossCollection_" + psamples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + psamples);
    that.find("input[id='prelimID_" + psamples + "']").attr("name", "prelimID_" + psamples);
    that.find("input[name='latitude']").attr("id", "latitude_" + psamples);
    that.find("input[id='latitude_" + psamples + "']").attr("name", "latitude_" + psamples);
    that.find("input[name='longitude']").attr("id", "longitude_" + psamples);
    that.find("input[id='longitude_" + psamples + "']").attr("name", "longitude_" + psamples);
    that.find("input[name='altitude']").attr("id", "altitude_" + psamples);
    that.find("input[id='altitude_" + psamples + "']").attr("name", "altitude_" + psamples);
    that.find("input[name='hostother']").attr("id", "hostother_" + psamples);
    that.find("input[id='hostother_" + psamples + "']").attr("name", "hostother_" + psamples);
    that.find("input[name='othername']").attr("id", "othername_" + psamples);
    that.find("input[id='othername_" + psamples + "']").attr("name", "othername_" + psamples);
    that.find("input[name='PathPlantPart']").attr("id", "PathPlantPart_" + psamples);
    that.find("input[id='PathPlantPart_" + psamples + "']").attr("name", "PathPlantPart_" + psamples);
    that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + psamples);
    that.find("input[id='othPreserveType_" + psamples + "']").attr("name", "othPreserveType_" + psamples);
    that.find('select[name="PathIncidence"]').find('option').remove().end().append($(incidence));
    that.find("select[name='PathIncidence']").attr("id", "PathIncidence_" + psamples);
    that.find("select[id='PathIncidence_" + psamples + "']").attr("name", "PathIncidence_" + psamples);
    that.find('select[name="PathSeverity"]').find('option').remove().end().append($(severity));
    that.find("select[name='PathSeverity']").attr("id", "PathSeverity_" + psamples);
    that.find("select[id='PathSeverity_" + psamples + "']").attr("name", "PathSeverity_" + psamples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + psamples);
    that.find("input[id='externalCam_" + psamples + "']").attr("name", "externalCam_" + psamples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + psamples);
    that.find("textarea[id='addlObsrvns_" + psamples + "']").attr("name", "addlObsrvns_" + psamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
    that.find("input[type='radio'].minimal").iCheck('uncheck');
    that.insertAfter($('.samples'));
}

$(document).on('click', '.removePathSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                psamples = psamples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});

var btns = $(document).on('click', 'div.btn-group.glossary > .btn', function (e) {
    e.preventDefault();
    if (this.id === 'all') {
        $('#hostweeds > div').fadeIn(450);
        $(this).parent().parent().find('.badge').text(numPlants);
    } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#hostweeds > div').not($el).hide();
        $(this).parent().parent().find('.badge').text($el.length);
    }
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
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

$(document).on('click', '.getPlantCoords', function (e) {
    var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
    var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    };
    e.preventDefault();
});

$(document).on('click', '.getEntoHostCoords', function (e) {
    var xlat = $(this).closest('.entobox').find('input.entolat');
    var xlng = $(this).closest('.entobox').find('input.entolng');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    };
    e.preventDefault();
});

$(document).on('click', '.getPathHostCoords', function (e) {
    var xlat = $(this).closest('.pathbox').find('input.pathlat');
    var xlng = $(this).closest('.pathbox').find('input.pathlng');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    };
    e.preventDefault();
});

$(document).on('click', '.getObsCoords', function (e) {
    var xlat = $(this).$('#form1').find('input.obslat');
    var xlng = $(this).$('#form1').find('input.obslng');
    var xalt = $(this).$('#form1').find('input.obsalt');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
            xalt.val(position.coords.altitude)
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    };
    e.preventDefault();
});

$(document).on('click', '.getSampleCoords', function (e) {
    var xlat = $(this).closest('.sample').find('input.samplelat');
    var xlng = $(this).closest('.sample').find('input.samplelng');
    var xalt = $(this).closest('.sample').find('input.samplealt');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
            xalt.val(position.coords.altitude);
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    };
    e.preventDefault();
});


$(document).on('click', 'img.pp', function () {
    var that = $(this);
    var ppname = that.attr("name");
    var inpname = ppname.substring(1, ppname.length);
    if (!navigator.camera) {
        $.growl.warning({ title: "Error", message: "Camera API not supported!", location: "bc", size: "large" });
        return;
    }
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
        encodingType: 1,     // 0=JPG 1=PNG
        targetWidth: 640,
        targetHeight: 480,
        saveToPhotoAlbum:true
    };

    navigator.camera.getPicture(
        function onSuccess(imgURI) {
            $("#form1").find("input[type=text][name='" + inpname + "']").val(imgURI);
            that.attr("src", imgURI);
            //$(this, this.$el).attr('src', "data:image/png;base64," + imgData);
        },
        function onFail() {
            $.growl.warning({ title: "Error", message: "Error taking picture'!", location: "bc", size: "large" });
        },
        options);

    return false;
});

function getNextID(e) {
    //Read from DB
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM seqnum WHERE id = ? and attrname = ?", [1, 'sampleid'], function (tx, res) {
            if (res.rows && res.rows.length > 0) {
                var nextID = res.rows.item(0).attrval + 1;
                db.transaction(function (tx) {
                    tx.executeSql("UPDATE seqnum set attrval = ? where id = ?", [nextID, 1], function (tx, res) {
                        //alert("Row inserted.");
                        //return e + pad(nextID.toString(), 4);
                        $("#form1").find('input[type="text"].nextid').first().val(e + pad(nextID.toString(), 4));
                    });
                }, function (err) {
                    $.growl({ title: "Application Error", message: "An error occured while incrementing ID. " + err.message, location: "bc", size: "large" });
                });
            }
            else {
                db.transaction(function (tx) {
                    tx.executeSql("INSERT INTO seqnum (id, attrname, attrval) VALUES (?,?,?)", [1, 'sampleid', 1], function (tx, res) {
                        //alert("Row inserted.");
                        //return e + pad('1', 4);
                        $("#form1").find('input[type="text"].nextid').first().val(e + pad('1', 4));
                    });
                }, function (err) {
                    $.growl({ title: "Application Error", message: "An error occured while incrementing ID. " + err.message, location: "bc", size: "large" });
                });
            }
        });
    }, function (err) {
        $.growl({ title: "Application Error", message: "An error occured while retrieving next ID. " + err.message, location: "bc", size: "large" });
    });
};

$(document).on('ifClicked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    event.preventDefault();
    $('#form1').find("input[type='radio'][name='" + $(this).attr('name') + "']").val($(this).val());
});

$(document).on('change', 'input:radio', function (e) {
    e.preventDefault();
    if ($(this).is(":checked")) {
        $('#form1').find("input[type='radio'][name='" + $(this).attr('name') + "']").val($(this).val());
    }
});

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
    })
        .complete(function (e) {
            $('#form1').find("input[type=text], textarea").val("");
            $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck').val('off');
            $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
            if (curIdx > 0) {
                var data = results.observations[curIdx - 1];
                var px = 0;
                console.log(JSON.stringify(data));
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
                    if (key.startsWith("ehostName_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $("#addEntoHost").trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                            $('#form1').find("div.entobox").eq(px).addClass(value.substring(1, 2).toLowerCase());
                            $('div.glossary').find('#' + value.substring(1, 2).toLowerCase()).removeClass('hide');
                            px++;
                        });
                    }
                    if (key.startsWith("entoTarget_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $("#addEntoTarget").trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("phostName_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $("#addPathHost").trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                            $('#form1').find("div.pathbox").eq(px).addClass(value.substring(1, 2).toLowerCase());
                            $('div.glossary').find('#' + value.substring(1, 2).toLowerCase()).removeClass('hide');
                            px++;
                        });
                    }
                    if (key.startsWith("pathTarget_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                $("#addPathTarget").trigger("click");
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
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
                    if (key.startsWith("esampleId_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                loadEntoSample();
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
                    }
                    if (key.startsWith("psampleId_") && value != "") {
                        $.ajax({
                            url: "",
                            beforeSend: function (xhr) {
                                loadPathSample();
                            }
                        }).complete(function (e) {
                            $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                        });
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