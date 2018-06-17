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
var HostStatCount;
var HostStatAreaNo;

function loadPHDefaults() {
    // Loading Activity Defaults //
    $.getJSON("data/activity.json", function (data) {
        var option = $('<option />');
        option.attr('value', data.activities.activity.metadata.id).text(data.activities.activity.metadata.name);
        $("#form1").find('#SurvActivityId').append(option);
    });

    // Loading sites //
    $.getJSON("data/activity.json", function (data) {
        $.each(data.activities.activity.metadata.sites, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.name);
            $("#form1").find('#SiteId').append(option);
        });
    });

    // Loading Team Defaults //
    $.getJSON("data/staff_team.json", function (data) {
        staffData = '<option value="NONE">- select -</option>';
        $.each(data.staffs.staff, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.displayName);
            $("#form1").find('#ObservationStaffId').append(option);

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
    that1.find('select[name="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    that1.find("input[type='radio'][name='CountList']").attr('name', 'CountList-' + Idx);
    //that1.find("input[type='text'][name='plantName1']").attr('name', 'plantName_' + Idx);
    //that1.find("select[name='statType1']").attr('name', 'statType_' + Idx);
    ////that1.find("input[name='statTypeVal1']").text(0);
    //that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    //that1.find("select[name='PlantStatisticType1']").attr('name', 'PlantStatisticType_' + Idx);
    //that1.find("input[name='statTypeVal1']").val(0);
    //that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    //that1.find("input[type='radio'][name='CountList1']").attr('name', 'CountList_' + Idx);
    //that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx);
    //that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx);
    //that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    //that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    //that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    //that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);
    //that1.find("img[id='plantPic1']").attr('name', 'iplantPic_' + Idx + '_1');
    //that1.find("input[id='iplantPic1']").attr('name', 'plantPic_' + Idx + '_1');
    //that1.find("img[id='plantPic2']").attr('name', 'iplantPic_' + Idx + '_2');
    //that1.find("input[id='iplantPic2']").attr('name', 'plantPic_' + Idx + '_2');
    //that1.find("img[id='plantPic3']").attr('name', 'iplantPic_' + Idx + '_3');
    //that1.find("input[id='iplantPic3']").attr('name', 'plantPic_' + Idx + '_3');
    //that1.find("img[id='plantPic4']").attr('name', 'iplantPic_' + Idx + '_4');
    //that1.find("input[id='iplantPic4']").attr('name', 'plantPic_' + Idx + '_4');
    //that1.find("img[id='plantPic5']").attr('name', 'iplantPic_' + Idx + '_5');
    //that1.find("input[name='iplantPic5']").attr('name', 'plantPic_' + Idx + '_5');
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    that1.find('select[name="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    that1.find("input[type='radio'][name='TargetObservedCode']").attr('name', 'TargetObservedCode-' + Idx);
    //that1.find("input[type='text'][name='ehostName1']").attr('name', 'ehostName_' + Idx);
    //that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    //that1.find("select[name='PlantStatisticType1']").attr('name', 'PlantStatisticType_' + Idx);
    //that1.find("input[name='statTypeVal1']").val(0);
    //that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    //that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx);
    //that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx);
    //that1.find('select[name="PlantObservationMethod1"]').find('option').remove().end().append($(MoB));
    //that1.find("select[name='PlantObservationMethod1']").attr('name', 'PlantObservationMethod_' + Idx);
    //that1.find("input[type='text'][name='entoTarget1']").attr('name', 'entoTarget_' + Idx);
    //that1.find("input[type='text'][name='Count1']").attr('name', 'count_' + Idx);
    //that1.find("input[type='radio'][name='TargetObserved1']").attr('name', 'TargetObserved_' + Idx);
    //that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    //that1.find("input[type='checkbox'][name='hpstatus1']").attr('name', 'hpstatus1_' + Idx);
    //that1.find("input[type='checkbox'][name='hpstatus2']").attr('name', 'hpstatus2_' + Idx);
    //that1.find("input[type='checkbox'][name='hpstatus3']").attr('name', 'hpstatus3_' + Idx);
    //that1.find("input[type='checkbox'][name='hpstatus4']").attr('name', 'hpstatus4_' + Idx);
    //that1.find('select[name="lifeStage1"]').find('option').remove().end().append($(elifeStage));
    //that1.find("select[name='lifeStage1']").attr('name', 'lifeStage_' + Idx);
    //that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    //that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    //that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    //that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-host').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numEntoHosts++;
    numEntoTargets++;
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
    that1.find("input[type='radio'][name='TargetObservedCode']").attr('name', 'TargetObservedCode-' + Idx);
    //that1.find("input[type='text'][name='entoTarget1']").attr('name', 'entoTarget_' + Idx);
    //that1.find("input[type='text'][name='Count1']").attr('name', 'Count_' + Idx);
    //that1.find("input[type='radio'][name='TargetObserved1']").attr('name', 'TargetObserved_' + Idx);
    //that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');;
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-target').text(Idx * 1);
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
    that1.find('select[name="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    that1.find("input[type='radio'][name='TargetObservedCode']").attr('name', 'TargetObservedCode-' + Idx);
    //that1.find("input[type='text'][name='phostName1']").attr('name', 'phostName_' + Idx);
    //that1.find("select[name='PlantStatisticType1']").attr('name', 'PlantStatisticType_' + Idx);
    //that1.find("input[name='statTypeVal1']").val(0);
    //that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    //that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx);
    //that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx);
    //that1.find("select[name='PlantObservationMethod1']").attr('name', 'PlantObservationMethod_' + Idx);
    //that1.find("input[type='text'][name='pathTarget1']").attr('name', 'pathTarget_' + Idx);
    //that1.find("input[type='text'][name='count1']").attr('name', 'count_' + Idx);
    //that1.find("input[type='checkbox'][name='optTarget1']").attr('name', 'optTarget_' + Idx);
    //that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    //that1.find("select[name='lifeStage1']").attr('name', 'lifeStage_' + Idx);
    //that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    //that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    //that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    //that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-host').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numPathHosts++;
    numPathTargets++;
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
    that1.find("input[type='radio'][name='TargetObservedCode']").attr('name', 'TargetObservedCode-' + Idx);
    //that1.find("input[type='text'][name='pathTarget1']").attr('name', 'pathTarget_' + Idx);
    //that1.find("input[type='text'][name='Count1']").attr('name', 'count_' + Idx);
    //that1.find("input[type='checkbox'][name='TargetObserved1']").attr('name', 'TargetObserved_' + Idx);
    //that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
    that1.find("input[type='radio'].minimal").iCheck('uncheck');
    that1.find('.badge-target').text(Idx * 1);
    that1.insertAfter(that);
    numPathTargets++;
});

$(document).on('click', "[data-action=removePlant]", function () {
    var x = $(this);
    if (numPlants > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Plant?',
            buttons: {
                Ok: function () {
                    x.closest('.hostweed').remove();
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
    var x = $(this);
    if (numEntoHosts > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Host?',
            buttons: {
                Ok: function () {
                    x.closest('.entobox').remove();
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
    var x = $(this);
    if (numEntoTargets > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Target?',
            buttons: {
                Ok: function () {
                    x.closest('.entotarget').remove();
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
    var x = $(this);
    if (numPathHosts > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Host?',
            buttons: {
                Ok: function () {
                    x.closest('.pathbox').remove();
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
    var x = $(this);
    if (numPathTargets > 1) {
        $.confirm({
            title: 'Confirm Remove!',
            content: 'Do you want to remove this Target?',
            buttons: {
                Ok: function () {
                    x.closest('.pathtarget').remove();
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
    that.find('select[name="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    //that.find("select[name='identifiedBy']").find("option").remove().end().append($(staffData));
    //that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + bsamples);
    //that.find("select[id='identifiedBy_" + bsamples + "']").attr("name", "identifiedBy_" + bsamples);
    //that.find("input[name='bsampleId']").attr("id", "bsampleId_" + bsamples);
    //that.find("input[id='bsampleId_" + bsamples + "']").attr("name", "bsampleId_" + bsamples);
    //that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + bsamples);
    //that.find("input[id='addlCollectors_" + bsamples + "']").attr("name", "addlCollectors_" + bsamples);
    //that.find("input[name='numCollected']").attr("id", "numCollected_" + bsamples);
    //that.find("input[id='numCollected_" + bsamples + "']").attr("name", "numCollected_" + bsamples);
    //that.find("input[name='crossCollection']").attr("id", "crossCollection_" + bsamples);
    //that.find("input[id='crossCollection_" + bsamples + "']").attr("name", "crossCollection_" + bsamples);
    //that.find("input[name='prelimID']").attr("id", "prelimID_" + bsamples);
    //that.find("input[id='prelimID_" + bsamples + "']").attr("name", "prelimID_" + bsamples);
    //that.find("input[name='latitude']").attr("id", "latitude_" + bsamples);
    //that.find("input[id='latitude_" + bsamples + "']").attr("name", "latitude_" + bsamples);
    //that.find("input[name='longitude']").attr("id", "longitude_" + bsamples);
    //that.find("input[id='longitude_" + bsamples + "']").attr("name", "longitude_" + bsamples);
    //that.find("input[name='altitude']").attr("id", "altitude_" + bsamples);
    //that.find("input[id='altitude_" + bsamples + "']").attr("name", "altitude_" + bsamples);
    //that.find("input[name='habit']").attr("id", "habit_" + bsamples);
    //that.find("input[id='habit_" + bsamples + "']").attr("name", "habit_" + bsamples);
    //that.find("input[name='description']").attr("id", "description_" + bsamples);
    //that.find("input[id='description_" + bsamples + "']").attr("name", "description_" + bsamples);
    //that.find("input[name='habitat']").attr("id", "habitat_" + bsamples);
    //that.find("input[id='habitat_" + bsamples + "']").attr("name", "habitat_" + bsamples);
    //that.find("input[name='landform']").attr("id", "landform_" + bsamples);
    //that.find("input[id='landform_" + bsamples + "']").attr("name", "landform_" + bsamples);
    //that.find("input[name='soilGeology']").attr("id", "soilGeology_" + bsamples);
    //that.find("input[id='soilGeology_" + bsamples + "']").attr("name", "soilGeology_" + bsamples);
    //that.find("input[name='externalCam']").attr("id", "externalCam_" + bsamples);
    //that.find("input[id='externalCam_" + bsamples + "']").attr("name", "externalCam_" + bsamples);
    //that.find("input[name='BotPlantPreserve-SP']").attr("id", "BotPlantPreserve-SP_" + bsamples);
    //that.find("input[id='BotPlantPreserve-SP_" + bsamples + "']").attr("name", "BotPlantPreserve-SP_" + bsamples);
    //that.find("input[name='BotPlantPreserve-DN']").attr("id", "BotPlantPreserve-DN_" + bsamples);
    //that.find("input[id='BotPlantPreserve-DN_" + bsamples + "']").attr("name", "BotPlantPreserve-DN_" + bsamples);
    //that.find("input[name='BotPlantPreserve-O']").attr("id", "BotPlantPreserve-O_" + bsamples);
    //that.find("input[id='BotPlantPreserve-O_" + bsamples + "']").attr("name", "BotPlantPreserve-O_" + bsamples);
    //that.find("input[name='BotPlantPreserverOtherText']").attr("id", "BotPlantPreserverOtherText_" + bsamples);
    //that.find("input[id='BotPlantPreserverOtherText_" + bsamples + "']").attr("name", "BotPlantPreserverOtherText_" + bsamples);
    //that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + bsamples);
    //that.find("textarea[id='addlObsrvns_" + bsamples + "']").attr("name", "addlObsrvns_" + bsamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    that.find('select[name="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    //that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    //that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + bsamples);
    //that.find("select[id='identifiedBy_" + bsamples + "']").attr("name", "identifiedBy_" + bsamples);
    //that.find("input[name='bsampleId']").attr("id", "bsampleId_" + bsamples);
    //that.find("input[id='bsampleId_" + bsamples + "']").attr("name", "bsampleId_" + bsamples);
    //that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + bsamples);
    //that.find("input[id='addlCollectors_" + bsamples + "']").attr("name", "addlCollectors_" + bsamples);
    //that.find("input[name='numCollected']").attr("id", "numCollected_" + bsamples);
    //that.find("input[id='numCollected_" + bsamples + "']").attr("name", "numCollected_" + bsamples);
    //that.find("input[name='crossCollection']").attr("id", "crossCollection_" + bsamples);
    //that.find("input[id='crossCollection_" + bsamples + "']").attr("name", "crossCollection_" + bsamples);
    //that.find("input[name='prelimID']").attr("id", "prelimID_" + bsamples);
    //that.find("input[id='prelimID_" + bsamples + "']").attr("name", "prelimID_" + bsamples);
    //that.find("input[name='latitude']").attr("id", "latitude_" + bsamples);
    //that.find("input[id='latitude_" + bsamples + "']").attr("name", "latitude_" + bsamples);
    //that.find("input[name='longitude']").attr("id", "longitude_" + bsamples);
    //that.find("input[id='longitude_" + bsamples + "']").attr("name", "longitude_" + bsamples);
    //that.find("input[name='altitude']").attr("id", "altitude_" + bsamples);
    //that.find("input[id='altitude_" + bsamples + "']").attr("name", "altitude_" + bsamples);
    //that.find("input[name='habit']").attr("id", "habit_" + bsamples);
    //that.find("input[id='habit_" + bsamples + "']").attr("name", "habit_" + bsamples);
    //that.find("input[name='description']").attr("id", "description_" + bsamples);
    //that.find("input[id='description_" + bsamples + "']").attr("name", "description_" + bsamples);
    //that.find("input[name='habitat']").attr("id", "habitat_" + bsamples);
    //that.find("input[id='habitat_" + bsamples + "']").attr("name", "habitat_" + bsamples);
    //that.find("input[name='landform']").attr("id", "landform_" + bsamples);
    //that.find("input[id='landform_" + bsamples + "']").attr("name", "landform_" + bsamples);
    //that.find("input[name='soilGeology']").attr("id", "soilGeology_" + bsamples);
    //that.find("input[id='soilGeology_" + bsamples + "']").attr("name", "soilGeology_" + bsamples);
    //that.find("input[name='externalCam']").attr("id", "externalCam_" + bsamples);
    //that.find("input[id='externalCam_" + bsamples + "']").attr("name", "externalCam_" + bsamples);
    //that.find("input[name='BotPlantPreserve-SP']").attr("id", "BotPlantPreserve-SP_" + bsamples);
    //that.find("input[id='BotPlantPreserve-SP_" + bsamples + "']").attr("name", "BotPlantPreserve-SP_" + bsamples);
    //that.find("input[name='BotPlantPreserve-DN']").attr("id", "BotPlantPreserve-DN_" + bsamples);
    //that.find("input[id='BotPlantPreserve-DN_" + bsamples + "']").attr("name", "BotPlantPreserve-DN_" + bsamples);
    //that.find("input[name='BotPlantPreserve-O']").attr("id", "BotPlantPreserve-O_" + bsamples);
    //that.find("input[id='BotPlantPreserve-O_" + bsamples + "']").attr("name", "BotPlantPreserve-O_" + bsamples);
    //that.find("input[name='BotPlantPreserverOtherText']").attr("id", "BotPlantPreserverOtherText_" + bsamples);
    //that.find("input[id='BotPlantPreserverOtherText_" + bsamples + "']").attr("name", "BotPlantPreserverOtherText_" + bsamples);
    //that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + bsamples);
    //that.find("textarea[id='addlObsrvns_" + bsamples + "']").attr("name", "addlObsrvns_" + bsamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    that.find('select[name="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name="EntoCollMethodCode"]').find('option').remove().end().append($(eCollMethod));
    that.find('select[name="EntoInfestedPctCode"]').find('option').remove().end().append($(percInfested));
    that.find('select[name="EntoDamageLevelCode"]').find('option').remove().end().append($(damageLevel));
    that.find('select[name="EntoPestLevelCode"]').find('option').remove().end().append($(pestLevel));
    //that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    //that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + esamples);
    //that.find("select[id='identifiedBy_" + esamples + "']").attr("name", "identifiedBy_" + esamples);
    //that.find("input[name='esampleId']").attr("id", "esampleId_" + esamples);
    //that.find("input[id='esampleId_" + esamples + "']").attr("name", "esampleId_" + esamples);
    //that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + esamples);
    //that.find("input[id='addlCollectors_" + esamples + "']").attr("name", "addlCollectors_" + esamples);
    //that.find("input[name='numCollected']").attr("id", "numCollected_" + esamples);
    //that.find("input[id='numCollected_" + esamples + "']").attr("name", "numCollected_" + esamples);
    //that.find("input[name='crossCollection']").attr("id", "crossCollection_" + esamples);
    //that.find("input[id='crossCollection_" + esamples + "']").attr("name", "crossCollection_" + esamples);
    //that.find("input[name='prelimID']").attr("id", "prelimID_" + esamples);
    //that.find("input[id='prelimID_" + esamples + "']").attr("name", "prelimID_" + esamples);
    //that.find("input[name='latitude']").attr("id", "latitude_" + esamples);
    //that.find("input[id='latitude_" + esamples + "']").attr("name", "latitude_" + esamples);
    //that.find("input[name='longitude']").attr("id", "longitude_" + esamples);
    //that.find("input[id='longitude_" + esamples + "']").attr("name", "longitude_" + esamples);
    //that.find("input[name='duration']").attr("id", "duration_" + esamples);
    //that.find("input[id='duration_" + esamples + "']").attr("name", "duration_" + esamples);
    //that.find("input[name='altitude']").attr("id", "altitude_" + esamples);
    //that.find("input[id='altitude_" + esamples + "']").attr("name", "altitude_" + esamples);
    //that.find('select[name="EntoCollectionMethod"]').find('option').remove().end().append($(eCollMethod));
    //that.find("select[name='EntoCollectionMethod']").attr("id", "EntoCollectionMethod_" + esamples);
    //that.find("select[id='EntoCollectionMethod_" + esamples + "']").attr("name", "EntoCollectionMethod_" + esamples);
    //that.find("input[name='hostother']").attr("id", "hostother_" + esamples);
    //that.find("input[id='hostother_" + esamples + "']").attr("name", "hostother_" + esamples);
    //that.find("input[name='othername']").attr("id", "othername_" + esamples);
    //that.find("input[id='othername_" + esamples + "']").attr("name", "othername_" + esamples);
    //that.find("input[name='plantPart']").attr("id", "plantPart_" + esamples);
    //that.find("input[id='plantPart_" + esamples + "']").attr("name", "plantPart_" + esamples);
    //that.find("input[name='EntoPlantPreserve']").attr("id", "EntoPlantPreserve_" + esamples);
    //that.find("input[id='EntoPlantPreserve_" + esamples + "']").attr("name", "EntoPlantPreserve_" + esamples);
    //that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + esamples);
    //that.find("input[id='othPreserveType_" + esamples + "']").attr("name", "othPreserveType_" + esamples);
    //that.find('select[name="EntoInfestedPct"]').find('option').remove().end().append($(percInfested));
    //that.find("select[name='EntoInfestedPct']").attr("id", "EntoInfestedPct_" + esamples);
    //that.find("select[id='EntoInfestedPct_" + esamples + "']").attr("name", "EntoInfestedPct_" + esamples);
    //that.find('select[name="EntoDamageLevel"]').find('option').remove().end().append($(damageLevel));
    //that.find("select[name='EntoDamageLevel']").attr("id", "EntoDamageLevel_" + esamples);
    //that.find("select[id='EntoDamageLevel_" + esamples + "']").attr("name", "EntoDamageLevel_" + esamples);
    //that.find('select[name="EntoPestLevel"]').find('option').remove().end().append($(pestLevel));
    //that.find("select[name='EntoPestLevel']").attr("id", "EntoPestLevel_" + esamples);
    //that.find("select[id='EntoPestLevel_" + esamples + "']").attr("name", "EntoPestLevel_" + esamples);
    //that.find("input[name='EntoLifeStage']").attr("id", "EntoLifeStage_" + esamples);
    //that.find("input[id='EntoLifeStage_" + esamples + "']").attr("name", "EntoLifeStage_" + esamples);
    //that.find("input[name='externalCam']").attr("id", "externalCam_" + esamples);
    //that.find("input[id='externalCam_" + esamples + "']").attr("name", "externalCam_" + esamples);
    //that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + esamples);
    //that.find("textarea[id='addlObsrvns_" + esamples + "']").attr("name", "addlObsrvns_" + esamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    that.find('select[name="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name="EntoCollMethodCode"]').find('option').remove().end().append($(eCollMethod));
    that.find('select[name="EntoInfestedPctCode"]').find('option').remove().end().append($(percInfested));
    that.find('select[name="EntoDamageLevelCode"]').find('option').remove().end().append($(damageLevel));
    that.find('select[name="EntoPestLevelCode"]').find('option').remove().end().append($(pestLevel));
    //that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    //that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + esamples);
    //that.find("select[id='identifiedBy_" + esamples + "']").attr("name", "identifiedBy_" + esamples);
    //that.find("input[name='esampleId']").attr("id", "esampleId_" + esamples);
    //that.find("input[id='esampleId_" + esamples + "']").attr("name", "esampleId_" + esamples);
    //that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + esamples);
    //that.find("input[id='addlCollectors_" + esamples + "']").attr("name", "addlCollectors_" + esamples);
    //that.find("input[name='numCollected']").attr("id", "numCollected_" + esamples);
    //that.find("input[id='numCollected_" + esamples + "']").attr("name", "numCollected_" + esamples);
    //that.find("input[name='crossCollection']").attr("id", "crossCollection_" + esamples);
    //that.find("input[id='crossCollection_" + esamples + "']").attr("name", "crossCollection_" + esamples);
    //that.find("input[name='prelimID']").attr("id", "prelimID_" + esamples);
    //that.find("input[id='prelimID_" + esamples + "']").attr("name", "prelimID_" + esamples);
    //that.find("input[name='latitude']").attr("id", "latitude_" + esamples);
    //that.find("input[id='latitude_" + esamples + "']").attr("name", "latitude_" + esamples);
    //that.find("input[name='longitude']").attr("id", "longitude_" + esamples);
    //that.find("input[id='longitude_" + esamples + "']").attr("name", "longitude_" + esamples);
    //that.find("input[name='duration']").attr("id", "duration_" + esamples);
    //that.find("input[id='duration_" + esamples + "']").attr("name", "duration_" + esamples);
    //that.find("input[name='altitude']").attr("id", "altitude_" + esamples);
    //that.find("input[id='altitude_" + esamples + "']").attr("name", "altitude_" + esamples);
    //that.find('select[name="EntoCollectionMethod"]').find('option').remove().end().append($(eCollMethod));
    //that.find("select[name='EntoCollectionMethod']").attr("id", "EntoCollectionMethod_" + esamples);
    //that.find("select[id='EntoCollectionMethod_" + esamples + "']").attr("name", "EntoCollectionMethod_" + esamples);
    //that.find("input[name='hostother']").attr("id", "hostother_" + esamples);
    //that.find("input[id='hostother_" + esamples + "']").attr("name", "hostother_" + esamples);
    //that.find("input[name='othername']").attr("id", "othername_" + esamples);
    //that.find("input[id='othername_" + esamples + "']").attr("name", "othername_" + esamples);
    //that.find("input[name='plantPart']").attr("id", "plantPart_" + esamples);
    //that.find("input[id='plantPart_" + esamples + "']").attr("name", "plantPart_" + esamples);
    //that.find("input[name='EntoPlantPreserve']").attr("id", "EntoPlantPreserve_" + esamples);
    //that.find("input[id='EntoPlantPreserve_" + esamples + "']").attr("name", "EntoPlantPreserve_" + esamples);
    //that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + esamples);
    //that.find("input[id='othPreserveType_" + esamples + "']").attr("name", "othPreserveType_" + esamples);
    //that.find('select[name="EntoInfestedPct"]').find('option').remove().end().append($(percInfested));
    //that.find("select[name='EntoInfestedPct']").attr("id", "EntoInfestedPct_" + esamples);
    //that.find("select[id='EntoInfestedPct_" + esamples + "']").attr("name", "EntoInfestedPct_" + esamples);
    //that.find('select[name="EntoDamageLevel"]').find('option').remove().end().append($(damageLevel));
    //that.find("select[name='EntoDamageLevel']").attr("id", "EntoDamageLevel_" + esamples);
    //that.find("select[id='EntoDamageLevel_" + esamples + "']").attr("name", "EntoDamageLevel_" + esamples);
    //that.find('select[name="EntoPestLevel"]').find('option').remove().end().append($(pestLevel));
    //that.find("select[name='EntoPestLevel']").attr("id", "EntoPestLevel_" + esamples);
    //that.find("select[id='EntoPestLevel_" + esamples + "']").attr("name", "EntoPestLevel_" + esamples);
    //that.find("input[name='EntoLifeStage']").attr("id", "EntoLifeStage_" + esamples);
    //that.find("input[id='EntoLifeStage_" + esamples + "']").attr("name", "EntoLifeStage_" + esamples);
    //that.find("input[name='externalCam']").attr("id", "externalCam_" + esamples);
    //that.find("input[id='externalCam_" + esamples + "']").attr("name", "externalCam_" + esamples);
    //that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + esamples);
    //that.find("textarea[id='addlObsrvns_" + esamples + "']").attr("name", "addlObsrvns_" + esamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    that.find('select[name="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name="PathIncidCode"]').find('option').remove().end().append($(incidence));
    that.find('select[name="PathSevCode"]').find('option').remove().end().append($(severity));
    //that.find('select[name="identifiedBy"]').find('option').remove().end().append($(staffData));
    //that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + psamples);
    //that.find("select[id='identifiedBy_" + psamples + "']").attr("name", "identifiedBy_" + psamples);
    //that.find("input[name='psampleId']").attr("id", "psampleId_" + psamples);
    //that.find("input[id='psampleId_" + psamples + "']").attr("name", "psampleId_" + psamples);
    //that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + psamples);
    //that.find("input[id='addlCollectors_" + psamples + "']").attr("name", "addlCollectors_" + psamples);
    //that.find("input[name='numCollected']").attr("id", "numCollected_" + psamples);
    //that.find("input[id='numCollected_" + psamples + "']").attr("name", "numCollected_" + psamples);
    //that.find("input[name='crossCollection']").attr("id", "crossCollection_" + psamples);
    //that.find("input[id='crossCollection_" + psamples + "']").attr("name", "crossCollection_" + psamples);
    //that.find("input[name='prelimID']").attr("id", "prelimID_" + psamples);
    //that.find("input[id='prelimID_" + psamples + "']").attr("name", "prelimID_" + psamples);
    //that.find("input[name='latitude']").attr("id", "latitude_" + psamples);
    //that.find("input[id='latitude_" + psamples + "']").attr("name", "latitude_" + psamples);
    //that.find("input[name='longitude']").attr("id", "longitude_" + psamples);
    //that.find("input[id='longitude_" + psamples + "']").attr("name", "longitude_" + psamples);
    //that.find("input[name='altitude']").attr("id", "altitude_" + psamples);
    //that.find("input[id='altitude_" + psamples + "']").attr("name", "altitude_" + psamples);
    //that.find("input[name='hostother']").attr("id", "hostother_" + psamples);
    //that.find("input[id='hostother_" + psamples + "']").attr("name", "hostother_" + psamples);
    //that.find("input[name='othername']").attr("id", "othername_" + psamples);
    //that.find("input[id='othername_" + psamples + "']").attr("name", "othername_" + psamples);
    //that.find("input[name='PathPlantPart']").attr("id", "PathPlantPart_" + psamples);
    //that.find("input[id='PathPlantPart_" + psamples + "']").attr("name", "PathPlantPart_" + psamples);
    //that.find("input[name='PathPlantPreserve']").attr("id", "PathPlantPreserve_" + psamples);
    //that.find("input[id='PathPlantPreserve_" + psamples + "']").attr("name", "PathPlantPreserve_" + psamples);
    //that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + psamples);
    //that.find("input[id='othPreserveType_" + psamples + "']").attr("name", "othPreserveType_" + psamples);
    //that.find('select[name="PathIncidence"]').find('option').remove().end().append($(incidence));
    //that.find("select[name='PathIncidence']").attr("id", "PathIncidence_" + psamples);
    //that.find("select[id='PathIncidence_" + psamples + "']").attr("name", "PathIncidence_" + psamples);
    //that.find('select[name="PathSeverity"]').find('option').remove().end().append($(severity));
    //that.find("select[name='PathSeverity']").attr("id", "PathSeverity_" + psamples);
    //that.find("select[id='PathSeverity_" + psamples + "']").attr("name", "PathSeverity_" + psamples);
    //that.find("input[name='externalCam']").attr("id", "externalCam_" + psamples);
    //that.find("input[id='externalCam_" + psamples + "']").attr("name", "externalCam_" + psamples);
    //that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + psamples);
    //that.find("textarea[id='addlObsrvns_" + psamples + "']").attr("name", "addlObsrvns_" + psamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    that.find('select[name="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name="PathIncidCode"]').find('option').remove().end().append($(incidence));
    that.find('select[name="PathSevCode"]').find('option').remove().end().append($(severity));
    //that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + psamples);
    //that.find("select[id='identifiedBy_" + psamples + "']").attr("name", "identifiedBy_" + psamples);
    //that.find("input[name='psampleId']").attr("id", "psampleId_" + psamples);
    //that.find("input[id='psampleId_" + psamples + "']").attr("name", "psampleId_" + psamples);
    //that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + psamples);
    //that.find("input[id='addlCollectors_" + psamples + "']").attr("name", "addlCollectors_" + psamples);
    //that.find("input[name='numCollected']").attr("id", "numCollected_" + psamples);
    //that.find("input[id='numCollected_" + psamples + "']").attr("name", "numCollected_" + psamples);
    //that.find("input[name='crossCollection']").attr("id", "crossCollection_" + psamples);
    //that.find("input[id='crossCollection_" + psamples + "']").attr("name", "crossCollection_" + psamples);
    //that.find("input[name='prelimID']").attr("id", "prelimID_" + psamples);
    //that.find("input[id='prelimID_" + psamples + "']").attr("name", "prelimID_" + psamples);
    //that.find("input[name='latitude']").attr("id", "latitude_" + psamples);
    //that.find("input[id='latitude_" + psamples + "']").attr("name", "latitude_" + psamples);
    //that.find("input[name='longitude']").attr("id", "longitude_" + psamples);
    //that.find("input[id='longitude_" + psamples + "']").attr("name", "longitude_" + psamples);
    //that.find("input[name='altitude']").attr("id", "altitude_" + psamples);
    //that.find("input[id='altitude_" + psamples + "']").attr("name", "altitude_" + psamples);
    //that.find("input[name='hostother']").attr("id", "hostother_" + psamples);
    //that.find("input[id='hostother_" + psamples + "']").attr("name", "hostother_" + psamples);
    //that.find("input[name='othername']").attr("id", "othername_" + psamples);
    //that.find("input[id='othername_" + psamples + "']").attr("name", "othername_" + psamples);
    //that.find("input[name='PathPlantPart']").attr("id", "PathPlantPart_" + psamples);
    //that.find("input[id='PathPlantPart_" + psamples + "']").attr("name", "PathPlantPart_" + psamples);
    //that.find("input[name='othPreserveType']").attr("id", "othPreserveType_" + psamples);
    //that.find("input[id='othPreserveType_" + psamples + "']").attr("name", "othPreserveType_" + psamples);
    //that.find("select[name='PathIncidence']").attr("id", "PathIncidence_" + psamples);
    //that.find("select[id='PathIncidence_" + psamples + "']").attr("name", "PathIncidence_" + psamples);
    //that.find("select[name='PathSeverity']").attr("id", "PathSeverity_" + psamples);
    //that.find("select[id='PathSeverity_" + psamples + "']").attr("name", "PathSeverity_" + psamples);
    //that.find("input[name='externalCam']").attr("id", "externalCam_" + psamples);
    //that.find("input[id='externalCam_" + psamples + "']").attr("name", "externalCam_" + psamples);
    //that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + psamples);
    //that.find("textarea[id='addlObsrvns_" + psamples + "']").attr("name", "addlObsrvns_" + psamples);
    that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    $(this).val('Y');
});

$(document).on('ifChecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'AdditionalObserverTab') {
        $('.addlObserver').removeClass('hide');
    };
    if ($(this).attr('name').startsWith('addlCollectors')) {
        $('.addlCollectors').removeClass('hide');
    };
    $(this).val('Y');
});

$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'AdditionalObserverTab') {
        $('.addlObserver').addClass('hide');
    };
    if ($(this).attr('name').startsWith('addlCollectors')) {
        $('.addlCollectors').addClass('hide');
    };
    $(this).val('N');
});


$(document).on('click', '.getPlantCoords', function (e) {
    var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
    var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
    var xwkt = $(this).closest('.pathbox').find('input[name="LocationPointWktClob"]');  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
            xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
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
    var xwkt = $(this).closest('.pathbox').find('input[name="LocationPointWktClob"]');  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
            xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
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
    var xwkt = $(this).closest('.pathbox').find('input[name="LocationPointWktClob"]');  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
            xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    };
    e.preventDefault();
});

//$(document).on('click', '.getObsCoords', function (e) {
//    var xlat = $(this).$('#form1').find('input.obslat');
//    var xlng = $(this).$('#form1').find('input.obslng');
//    var xalt = $(this).$('#form1').find('input.obsalt');
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function (position) {
//            xlat.val(position.coords.latitude);
//            xlng.val(position.coords.longitude);
//            xalt.val(position.coords.altitude)
//        }, function () {
//            handleLocationError(true);
//        });
//    } else {
//        // Browser doesn't support Geolocation
//        handleLocationError(false);
//    };
//    e.preventDefault();
//});

$(document).on('click', '.getSampleCoords', function (e) {
    var xlat = $(this).closest('.sample').find('input.samplelat');
    var xlng = $(this).closest('.sample').find('input.samplelng');
    var xalt = $(this).closest('.sample').find('input.samplealt');
    var xwkt = $(this).closest('.sample').find('input[name="SamplePointWktClob"]');  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            xlat.val(position.coords.latitude);
            xlng.val(position.coords.longitude);
            xalt.val(position.coords.altitude);
            xwkt.val("POINT (" + position.coords.longitude.toFixed(5) + " " + position.coords.latitude.toFixed(5) + ")");
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
                        $("#form1").find('input[type="text"].nextid').first().val(e + pad(nextID.toString(), 6));
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
                        $("#form1").find('input[type="text"].nextid').first().val(e + pad('1', 6));
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
    if ($(this).data('validate') != 'N') {
        $('#form1').find("input[type='radio'][name='" + $(this).attr('name') + "']").val($(this).val());
    }
});

//$(document).on('change', 'input:radio', function (e) {
//    e.preventDefault();
//    if ($(this).is(":checked") && $(this).data('validate') != 'N') {
//        $('#form1').find("input[type='radio'][name='" + $(this).attr('name') + "']").val($(this).val());
//    }
//});

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
            loadPHDefaults();
            bsamples = 0;
            esamples = 0;
            psamples = 0;
            numPlants = 0;
            numEntoHosts = 0;
            numEntoTargets = 0;
            numPathHosts = 0;
            numPathTargets = 0;
        }
    })
        .complete(function (e) {
            $('#form1').find("input[type=text], textarea").val("");
            $('#form1').find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
            $('#form1').find("input[type='radio'].minimal").iCheck('uncheck');
            if (curIdx != -1) {
                var data = results.observations[curIdx - 1];
                //console.log(JSON.stringify(data));
                //console.time('load Modal');
                $.each(data, function (key, value) {
                    //console.time('load Modal 1');
                    if (key == "ObservationWhereWktClob" && value != "") {
                        var wkt = new Wkt.Wkt();
                        wkt.read(value);
                        wkt.toObject();
                        $('#form1').find("input[type='number'][name='Longitude']").val(wkt.toJson().coordinates[0]);
                        $('#form1').find("input[type='number'][name='Latitude']").val(wkt.toJson().coordinates[1]);
                    }
                    if (key == "AdditionalObserverTab" && value.length > 0) {
                        $('#form1').find("input[type='checkbox'][name='AdditionalObserverTab']").iCheck('check');
                        $.each(value, function (key1, value1) {
                            $('#form1').find("input[type='text'][name='AdditionalObserverName']").eq(key1).val(value1.AdditionalObserverName);
                        });
                    }
                    if (key == "PlantObsTab" && curDiscipline == "B" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $("#addPlant").trigger("click");
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2 == "PlantTaxonText") {
                                        $('div.hostweed').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2 == "HostStatCount" && value2 > 0) {
                                        $('div.hostweed').eq(key1).find("select[name='PlantStatisticType']").val('C');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name='HostStatAreaNo']").addClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name='HostStatCount']").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2 == "HostStatAreaNo" && value2 > 0) {
                                        $('div.hostweed').eq(key1).find("select[name='PlantStatisticType']").val('A');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name='HostStatCount']").addClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name='HostStatAreaNo']").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2 == "LocationPointWktClob") {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.hostweed').eq(key1).find("input[type='number'][name='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.hostweed').eq(key1).find("input[type='number'][name='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.hostweed').eq(key1).find("input[type='text'][name='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='date'][name='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='number'][name='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='checkbox'][name='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='checkbox'][name='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.hostweed').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.hostweed').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("select[name='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("textarea[name='" + key2 + "']").val(value2);
                                    if (key2 == "PlantSampleTab") {
                                        $.each(value2, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    loadBotanySample();
                                                }
                                            }).complete(function (e) {
                                                $.each(value3, function (key4, value4) {
                                                    $('div.botsample').eq(key3).find("input[type='text'][name='" + key4 + "']").val(value4);
                                                    $('div.botsample').eq(key3).find("input[type='date'][name='" + key4 + "']").val(value4);
                                                    $('div.botsample').eq(key3).find("input[type='number'][name='" + key4 + "']").val(value4);
                                                    $('div.botsample').eq(key3).find("input[type='checkbox'][name='" + key4 + "']").val(value4);
                                                    $('div.botsample').eq(key3).find("input[type='checkbox'][name='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.botsample').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.botsample').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.botsample').eq(key3).find("select[name='" + key4 + "']").val(value4);
                                                    $('div.botsample').eq(key3).find("textarea[name='" + key4 + "']").val(value4);
                                                });
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key == "PlantObsTab" && curDiscipline == "E" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $("#addEntoHost").trigger("click");
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2 == "PlantTaxonText") {
                                        $('div.entobox').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2 == "HostStatCount" && value2 > 0) {
                                        $('div.entobox').eq(key1).find("select[name='PlantStatisticType']").val('C');
                                        $('div.entobox').eq(key1).find("input[type='number'][name='HostStatAreaNo']").addClass('hide');
                                        $('div.entobox').eq(key1).find("input[type='number'][name='HostStatCount']").removeClass('hide');
                                    }
                                    if (key2 == "HostStatAreaNo" && value2 > 0) {
                                        $('div.entobox').eq(key1).find("select[name='PlantStatisticType']").val('A');
                                        $('div.entobox').eq(key1).find("input[type='number'][name='HostStatCount']").addClass('hide');
                                        $('div.entobox').eq(key1).find("input[type='number'][name='HostStatAreaNo']").removeClass('hide');
                                    }
                                    if (key2 == "LocationPointWktClob") {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.entobox').eq(key1).find("input[type='number'][name='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.entobox').eq(key1).find("input[type='number'][name='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.entobox').eq(key1).find("input[type='text'][name='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='date'][name='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='number'][name='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='checkbox'][name='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='checkbox'][name='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("select[name='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("textarea[name='" + key2 + "']").val(value2);
                                    if (key2 == "PlantObsTargetTab") {
                                        $.each(value2, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    if (key3 > 0) {
                                                        $('div.entobox').eq(key1).find('div.entotarget').eq(key3 - 1).find("[data-action=addEntoTarget]").trigger("click");
                                                    }
                                                }
                                            }).complete(function (e) {
                                                $.each(value3, function (key4, value4) {
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='text'][name='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='date'][name='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='number'][name='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("select[name='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("textarea[name='" + key4 + "']").val(value4);
                                                });
                                            });
                                        });
                                    }
                                    if (key2 == "PlantSampleTab") {
                                        $.each(value2, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    loadEntoSample();
                                                }
                                            }).complete(function (e) {
                                                $.each(value3, function (key4, value4) {
                                                    $('div.entosample').eq(key3).find("input[type='text'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='date'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='number'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='checkbox'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='checkbox'][name='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.entosample').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.entosample').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("select[name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("textarea[name='" + key4 + "']").val(value4);                                                });
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                    if (key == "PlantObsTab" && curDiscipline == "P" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    $("#addPathHost").trigger("click");
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    if (key2 == "PlantTaxonText") {
                                        $('div.pathbox').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2 == "HostStatCount" && value2 > 0) {
                                        $('div.pathbox').eq(key1).find("select[name='PlantStatisticType']").val('C');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name='HostStatAreaNo']").addClass('hide');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name='HostStatCount']").removeClass('hide');
                                    }
                                    if (key2 == "HostStatAreaNo" && value2 > 0) {
                                        $('div.pathbox').eq(key1).find("select[name='PlantStatisticType']").val('A');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name='HostStatCount']").addClass('hide');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name='HostStatAreaNo']").removeClass('hide');
                                    }
                                    if (key2 == "LocationPointWktClob") {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.pathbox').eq(key1).find("input[type='number'][name='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.pathbox').eq(key1).find("input[type='number'][name='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.pathbox').eq(key1).find("input[type='text'][name='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='date'][name='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='number'][name='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='checkbox'][name='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='checkbox'][name='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("select[name='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("textarea[name='" + key2 + "']").val(value2);
                                    if (key2 == "PlantObsTargetTab") {
                                        $.each(value2, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    if (key3 > 0) {
                                                        $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3 - 1).find("[data-action=addPathTarget]").trigger("click");
                                                    }
                                                }
                                            }).complete(function (e) {
                                                $.each(value3, function (key4, value4) {
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='text'][name='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='date'][name='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='number'][name='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("select[name='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("textarea[name='" + key4 + "']").val(value4);
                                                });
                                            });
                                        });
                                    }
                                    if (key2 == "PlantSampleTab") {
                                        $.each(value2, function (key3, value3) {
                                            $.ajax({
                                                url: "",
                                                beforeSend: function (xhr) {
                                                    loadPathSample();
                                                }
                                            }).complete(function (e) {
                                                $.each(value3, function (key4, value4) {
                                                    $('div.entosample').eq(key3).find("input[type='text'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='date'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='number'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='checkbox'][name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("input[type='checkbox'][name='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.entosample').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.entosample').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("select[name='" + key4 + "']").val(value4);
                                                    $('div.entosample').eq(key3).find("textarea[name='" + key4 + "']").val(value4);                                                    });
                                            });
                                        });
                                    }
                                });
                            });                           
                        });
                    }
                    if (key == "PlantSampleTab" && curDiscipline == "B" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    loadBotanySample();
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    $('div.sample').eq(key1).find("input[type='text'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name='" + key2 + "']").val(value2);
                                });
                            });
                        });
                    }
                    if (key == "PlantSampleTab" && curDiscipline == "E" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                            $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    loadEntoSample();
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    $('div.sample').eq(key1).find("input[type='text'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name='" + key2 + "']").val(value2);
                                });
                            });
                        });
                    }
                    if (key == "PlantSampleTab" && curDiscipline == "P" && value.length > 0) {
                        $.each(value, function (key1, value1) {
                             $.ajax({
                                url: "",
                                beforeSend: function (xhr) {
                                    loadPathSample();
                                }
                            }).complete(function (e) {
                                $.each(value1, function (key2, value2) {
                                    $('div.sample').eq(key1).find("input[type='text'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name='" + key2 + "']").val(value2);
                                });
                            });
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
                    //if (key.startsWith("bsampleId_") && value != "") {
                    //    $.ajax({
                    //        url: "",
                    //        beforeSend: function (xhr) {
                    //            loadBotanySample();
                    //        }
                    //    }).complete(function (e) {
                    //        $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                    //    });
                    //}
                    //if (key.startsWith("esampleId_") && value != "") {
                    //    $.ajax({
                    //        url: "",
                    //        beforeSend: function (xhr) {
                    //            loadEntoSample();
                    //        }
                    //    }).complete(function (e) {
                    //        $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                    //    });
                    //}
                    //if (key.startsWith("psampleId_") && value != "") {
                    //    $.ajax({
                    //        url: "",
                    //        beforeSend: function (xhr) {
                    //            loadPathSample();
                    //        }
                    //    }).complete(function (e) {
                    //        $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                    //    });
                    //}
                    //if (key.startsWith("plantPic_") && value != "") {
                    //    $('#form1').find("img[name='" + key + "']").attr("src", "images/" + value);
                    //}
                    //console.timeEnd('load Modal 5');
                    //console.time('load Modal 6');
                    $('#form1').find("input[type='text'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='date'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='number'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name='" + key + "'][value='on']").iCheck('check');
                    $('#form1').find("input[type='radio'][name='" + key + "'][value='" + value + "']").iCheck('check');
                    $('#form1').find("input[type='radio'][name='" + key + "']").val(value);
                    $('#form1').find("select[name='" + key + "']").val(value);
                    $('#form1').find("textarea[name='" + key + "']").val(value);
                    //console.timeEnd('load Modal 6');
                });
                $('#form1').find("input[type='text'][name='id']").val(curIdx);
                //$('#form1').find("input[type='text'][name='track_id']").val(curIdx);
                //$('#form1').find("input[type='text'][name='age']").inputmask("99:99");
                $('.nextid').text('');
                //console.timeEnd('load Modal');
            }
            else {
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
                $('#form1').find("input[type='number'][name='Latitude']").val(curLat.toFixed(5));
                $('#form1').find("input[type='number'][name='Longitude']").val(curLng.toFixed(5));
                $('#form1').find("input[type='text'][name='ObservationWhereWktClob']").val(curWkt);
                getAltitude();
                $('#form1').find("input[type='date'][name='ObservationDate']").val(today);
                $('#form1').find("input[type='number'][name='DurationMinsCount']").val("0");
                $('#form1').find("input[type='number'][name='id']").val(results.observations.length + 1);
                //$('#form1').find("input[type='text'][name='track_id']").val(results.observations.length + 1);
                $('#form1').find("input[type='number'][name='status']").val("0");
                $('#form1').find("input[type='text'][name='PlantDisciplineCode']").val(curDiscipline);
                //$('#form1').find("input[type='text'][name='age']").inputmask("99:99");
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

$(document).on('ifChecked', 'input[type="radio"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') == 'addlCollectors') {
        $('#Roles').modal();
    };
    if ($(this).attr('name') == 'otherSample') {
        $(this).parent('div').parent('div').find('input[type="text"]').removeClass('hide');
    };
    if ($(this).attr('name').startsWith('CountList') && $(this).val() === 'Count') {
        var that = $(this).parentsUntil('.hostweed').parent().find('div.countArea');
        that.find("input[type='number'][name='HostStatAreaNo']").val(HostStatAreaNo);
        that.find("input[type='number'][name='HostStatCount']").val(HostStatCount);
        that.removeClass('hide');
    };
    if ($(this).attr('name').startsWith('CountList') && $(this).val() === 'List') {
        var that = $(this).parentsUntil('.hostweed').parent().find('div.countArea');
        HostStatAreaNo = that.find("input[type='number'][name='HostStatAreaNo']").val();
        HostStatCount = that.find("input[type='number'][name='HostStatCount']").val();
        that.find("input[type='number'][name='HostStatAreaNo']").val("0");
        that.find("input[type='number'][name='HostStatCount']").val("0");
        that.addClass('hide');
    };
});

$(document).on('change', 'select[name="PlantStatisticType"]', function () {
    var str = $(this).val();
    if (str == 'C') {
        $(this).closest('.pathbox').find("input[type='number'][name='HostStatAreaNo']").addClass('hide');
        $(this).closest('.pathbox').find("input[type='number'][name='HostStatCount']").removeClass('hide');
    }
    if (str == 'A') {
        $(this).closest('.pathbox').find("input[type='number'][name='HostStatAreaNo']").removeClass('hide');
        $(this).closest('.pathbox').find("input[type='number'][name='HostStatCount']").addClass('hide');
    }
});
