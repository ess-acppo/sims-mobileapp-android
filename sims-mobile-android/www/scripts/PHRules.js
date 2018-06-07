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

$("#clCollectors").click(function (e) {
    $('#Collectors').find('button').removeClass('hide');
});

$(document).on('click', '.removeCollector', function (e) {
    $(this).remove();
});

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
    that1.find("input[type='text'][name='plantName1']").attr('name', 'plantName_' + Idx);
    that1.find("select[name='statType1']").attr('name', 'statType_' + Idx);
    //that1.find("input[name='statTypeVal1']").text(0);
    that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    that1.find("input[name='PlantStatisticType1']").attr('name', 'PlantStatisticType1_' + Idx);
    that1.find("input[name='statTypeVal1']").val(0);
    that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    that1.find("input[type='radio'][name='CountList1']").attr('name', 'CountList_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    //that1.find("input[type='checkbox'][name='weed1']").attr('name', 'weed_' + Idx).iCheck({
    //    checkboxClass: 'icheckbox_square-blue',
    //    radioClass: 'iradio_square-blue'
    //});
    //that1.find("input[type='checkbox'][name='both1']").attr('name', 'both_' + Idx).iCheck({
    //    checkboxClass: 'icheckbox_square-blue',
    //    radioClass: 'iradio_square-blue'
    //});
    that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
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

    that1.find('.badge').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numPlants++;
    $('#numPlants').text(numPlants);
});

$(document).on('click', "#addEntoHost", function () {
    var Idx = numEntoHosts;
    var that1 = $(entobox);
    that1.find("input[type='text'][name='hostName1']").attr('name', 'hostName_' + Idx);
    that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    that1.find("input[name='PlantStatisticType1']").attr('name', 'PlantStatisticType1_' + Idx);
    that1.find("input[name='statTypeVal1']").val(0);
    that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('select[name="PlantObservationMethod1"]').find('option').remove().end().append($(MoB));
    that1.find("select[name='PlantObservationMethod1']").attr('name', 'PlantObservationMethod_' + Idx);
    that1.find("input[type='text'][name='target1']").attr('name', 'target_' + Idx);
    that1.find("input[type='text'][name='count1']").attr('name', 'count_' + Idx);
    that1.find("input[type='checkbox'][name='optTarget1']").attr('name', 'optTarget_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find("input[type='checkbox'][name='fruiting']").attr('name', 'fruiting_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='checkbox'][name='flowering']").attr('name', 'flowering_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='checkbox'][name='flushing']").attr('name', 'flushing_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='checkbox'][name='deadwood']").attr('name', 'deadwood_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('select[name="lifeStage1"]').find('option').remove().end().append($(elifeStage));
    that1.find("select[name='lifeStage1']").attr('name', 'lifeStage_' + Idx);
    that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);
    that1.find('.badge').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numEntoHosts++;
    $('#numHosts').text(numEntoHosts);
});

$(document).on('click', "[data-action=addEntoTarget]", function () {
    var Idx = numEntoTargets;
    var that = $(this).closest('.entotarget');
    var that1 = $(entotarget);
    that1.find("input[type='text'][name='target1']").attr('name', 'target_' + Idx);
    that1.find("input[type='text'][name='count1']").attr('name', 'count_' + Idx);
    that1.find("input[type='checkbox'][name='optTarget1']").attr('name', 'optTarget_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.insertAfter(that);
});

$(document).on('click', "#addPathHost", function () {
    var Idx = numPathHosts;
    var that1 = $(pathbox);
    that1.find("input[type='text'][name='hostName1']").attr('name', 'hostName_' + Idx);
    that1.find('select[name="PlantStatisticType1"]').find('option').remove().end().append($(statType));
    that1.find("input[name='PlantStatisticType1']").attr('name', 'PlantStatisticType1_' + Idx);
    that1.find("input[name='statTypeVal1']").val(0);
    that1.find("input[name='statTypeVal1']").attr('name', 'statTypeVal_' + Idx);
    that1.find("input[type='checkbox'][name='earmark1']").attr('name', 'earmark_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='checkbox'][name='extPhoto1']").attr('name', 'extPhoto_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find('select[name="PlantObservationMethod1"]').find('option').remove().end().append($(MoB));
    that1.find("select[name='PlantObservationMethod1']").attr('name', 'PlantObservationMethod_' + Idx);
    that1.find("input[type='text'][name='target1']").attr('name', 'target_' + Idx);
    that1.find("input[type='text'][name='count1']").attr('name', 'count_' + Idx);
    that1.find("input[type='checkbox'][name='optTarget1']").attr('name', 'optTarget_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.find('select[name="lifeStage1"]').find('option').remove().end().append($(plifeStage));
    that1.find("select[name='lifeStage1']").attr('name', 'lifeStage_' + Idx);
    that1.find("textarea[name='notes1']").attr('name', 'notes_' + Idx);
    that1.find("input[type='text'][name='latitude1']").attr('name', 'latitude_' + Idx);
    that1.find("input[type='text'][name='longitude1']").attr('name', 'longitude_' + Idx);
    that1.find("select[name='datum1']").attr('name', 'datum_' + Idx);

    that1.find('.badge').text(Idx * 1 + 1);
    $('#hostweeds').append(that1);
    numPathHosts++;
    $('#numHosts').text(numPathHosts);
});

$(document).on('click', "[data-action=addPathTarget]", function () {
    var Idx = numPathTargets;
    var that = $(this).closest('.pathtarget');
    var that1 = $(pathtarget);
    that1.find("input[type='text'][name='target1']").attr('name', 'target_' + Idx);
    that1.find("input[type='text'][name='count1']").attr('name', 'count_' + Idx);
    that1.find("input[type='checkbox'][name='optTarget1']").attr('name', 'optTarget_' + Idx).iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that1.find("input[type='text'][name='comments1']").attr('name', 'comments_' + Idx);
    that1.insertAfter(that);
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
    samples = samples + 1;
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
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + samples);
    that.find("select[id='identifiedBy_" + samples + "']").attr("name", "identifiedBy_" + samples);
    that.find("input[name='bsampleId']").attr("id", "bsampleId_" + samples);
    that.find("input[id='bsampleId_" + samples + "']").attr("name", "bsampleId_" + samples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + samples);
    that.find("input[id='addlCollectors_" + samples + "']").attr("name", "addlCollectors_" + samples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + samples);
    that.find("input[id='numCollected_" + samples + "']").attr("name", "numCollected_" + samples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + samples);
    that.find("input[id='crossCollection_" + samples + "']").attr("name", "crossCollection_" + samples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + samples);
    that.find("input[id='prelimID_" + samples + "']").attr("name", "prelimID_" + samples);
    that.find("input[name='latitude']").attr("id", "latitude_" + samples);
    that.find("input[id='latitude_" + samples + "']").attr("name", "latitude_" + samples);
    that.find("input[name='longitude']").attr("id", "longitude_" + samples);
    that.find("input[id='longitude_" + samples + "']").attr("name", "longitude_" + samples);
    that.find("input[name='altitude']").attr("id", "altitude_" + samples);
    that.find("input[id='altitude_" + samples + "']").attr("name", "altitude_" + samples);
    that.find("input[name='habit']").attr("id", "habit_" + samples);
    that.find("input[id='habit_" + samples + "']").attr("name", "habit_" + samples);
    that.find("input[name='description']").attr("id", "description_" + samples);
    that.find("input[id='description_" + samples + "']").attr("name", "description_" + samples);
    that.find("input[name='habitat']").attr("id", "habitat_" + samples);
    that.find("input[id='habitat_" + samples + "']").attr("name", "habitat_" + samples);
    that.find("input[name='landform']").attr("id", "landform_" + samples);
    that.find("input[id='landform_" + samples + "']").attr("name", "landform_" + samples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + samples);
    that.find("input[id='soilGeology_" + samples + "']").attr("name", "soilGeology_" + samples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + samples);
    that.find("input[id='externalCam_" + samples + "']").attr("name", "externalCam_" + samples);
    that.find("input[name='BotPlantPreserve-SP']").attr("id", "BotPlantPreserve-SP_" + samples);
    that.find("input[id='BotPlantPreserve-SP_" + samples + "']").attr("name", "BotPlantPreserve-SP_" + samples);
    that.find("input[name='BotPlantPreserve-DN']").attr("id", "BotPlantPreserve-DN_" + samples);
    that.find("input[id='BotPlantPreserve-DN_" + samples + "']").attr("name", "BotPlantPreserve-DN_" + samples);
    that.find("input[name='BotPlantPreserve-O']").attr("id", "BotPlantPreserve-O_" + samples);
    that.find("input[id='BotPlantPreserve-O_" + samples + "']").attr("name", "BotPlantPreserve-O_" + samples);
    that.find("input[name='BotPlantPreserverOtherText']").attr("id", "BotPlantPreserverOtherText_" + samples);
    that.find("input[id='BotPlantPreserverOtherText_" + samples + "']").attr("name", "BotPlantPreserverOtherText_" + samples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + samples);
    that.find("textarea[id='addlObsrvns_" + samples + "']").attr("name", "addlObsrvns_" + samples);
    that.find("input.nextid").val(getNextID("SM"));
    that.insertAfter($('.samples'));
});

function loadBotanySample() {
    samples = samples + 1;
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
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + samples);
    that.find("select[id='identifiedBy_" + samples + "']").attr("name", "identifiedBy_" + samples);
    that.find("input[name='bsampleId']").attr("id", "bsampleId_" + samples);
    that.find("input[id='bsampleId_" + samples + "']").attr("name", "bsampleId_" + samples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + samples);
    that.find("input[id='addlCollectors_" + samples + "']").attr("name", "addlCollectors_" + samples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + samples);
    that.find("input[id='numCollected_" + samples + "']").attr("name", "numCollected_" + samples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + samples);
    that.find("input[id='crossCollection_" + samples + "']").attr("name", "crossCollection_" + samples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + samples);
    that.find("input[id='prelimID_" + samples + "']").attr("name", "prelimID_" + samples);
    that.find("input[name='latitude']").attr("id", "latitude_" + samples);
    that.find("input[id='latitude_" + samples + "']").attr("name", "latitude_" + samples);
    that.find("input[name='longitude']").attr("id", "longitude_" + samples);
    that.find("input[id='longitude_" + samples + "']").attr("name", "longitude_" + samples);
    that.find("input[name='altitude']").attr("id", "altitude_" + samples);
    that.find("input[id='altitude_" + samples + "']").attr("name", "altitude_" + samples);
    that.find("input[name='habit']").attr("id", "habit_" + samples);
    that.find("input[id='habit_" + samples + "']").attr("name", "habit_" + samples);
    that.find("input[name='description']").attr("id", "description_" + samples);
    that.find("input[id='description_" + samples + "']").attr("name", "description_" + samples);
    that.find("input[name='habitat']").attr("id", "habitat_" + samples);
    that.find("input[id='habitat_" + samples + "']").attr("name", "habitat_" + samples);
    that.find("input[name='landform']").attr("id", "landform_" + samples);
    that.find("input[id='landform_" + samples + "']").attr("name", "landform_" + samples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + samples);
    that.find("input[id='soilGeology_" + samples + "']").attr("name", "soilGeology_" + samples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + samples);
    that.find("input[id='externalCam_" + samples + "']").attr("name", "externalCam_" + samples);
    that.find("input[name='BotPlantPreserve-SP']").attr("id", "BotPlantPreserve-SP_" + samples);
    that.find("input[id='BotPlantPreserve-SP_" + samples + "']").attr("name", "BotPlantPreserve-SP_" + samples);
    that.find("input[name='BotPlantPreserve-DN']").attr("id", "BotPlantPreserve-DN_" + samples);
    that.find("input[id='BotPlantPreserve-DN_" + samples + "']").attr("name", "BotPlantPreserve-DN_" + samples);
    that.find("input[name='BotPlantPreserve-O']").attr("id", "BotPlantPreserve-O_" + samples);
    that.find("input[id='BotPlantPreserve-O_" + samples + "']").attr("name", "BotPlantPreserve-O_" + samples);
    that.find("input[name='BotPlantPreserverOtherText']").attr("id", "BotPlantPreserverOtherText_" + samples);
    that.find("input[id='BotPlantPreserverOtherText_" + samples + "']").attr("name", "BotPlantPreserverOtherText_" + samples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + samples);
    that.find("textarea[id='addlObsrvns_" + samples + "']").attr("name", "addlObsrvns_" + samples);
    that.insertAfter($('.samples'));
};

$(document).on('click', '.removeBotSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});

$(document).on('click', '#addEntoSample', function (e) {
    samples = samples + 1;
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
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + samples);
    that.find("select[id='identifiedBy_" + samples + "']").attr("name", "identifiedBy_" + samples);
    that.find("input[name='esampleId']").attr("id", "esampleId_" + samples);
    that.find("input[id='esampleId_" + samples + "']").attr("name", "esampleId_" + samples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + samples);
    that.find("input[id='addlCollectors_" + samples + "']").attr("name", "addlCollectors_" + samples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + samples);
    that.find("input[id='numCollected_" + samples + "']").attr("name", "numCollected_" + samples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + samples);
    that.find("input[id='crossCollection_" + samples + "']").attr("name", "crossCollection_" + samples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + samples);
    that.find("input[id='prelimID_" + samples + "']").attr("name", "prelimID_" + samples);
    that.find("input[name='latitude']").attr("id", "latitude_" + samples);
    that.find("input[id='latitude_" + samples + "']").attr("name", "latitude_" + samples);
    that.find("input[name='longitude']").attr("id", "longitude_" + samples);
    that.find("input[id='longitude_" + samples + "']").attr("name", "longitude_" + samples);
    that.find("input[name='duration']").attr("id", "duration_" + samples);
    that.find("input[id='duration_" + samples + "']").attr("name", "duration_" + samples);
    that.find("input[name='altitude']").attr("id", "altitude_" + samples);
    that.find("input[id='altitude_" + samples + "']").attr("name", "altitude_" + samples);
    that.find("select[name='EntoCollectionMethod']").attr("id", "EntoCollectionMethod_" + samples);
    that.find("select[id='EntoCollectionMethod_" + samples + "']").attr("name", "EntoCollectionMethod_" + samples);
    that.find("input[name='habit']").attr("id", "habit_" + samples);
    that.find("input[id='habit_" + samples + "']").attr("name", "habit_" + samples);
    that.find("input[name='description']").attr("id", "description_" + samples);
    that.find("input[id='description_" + samples + "']").attr("name", "description_" + samples);
    that.find("input[name='habitat']").attr("id", "habitat_" + samples);
    that.find("input[id='habitat_" + samples + "']").attr("name", "habitat_" + samples);
    that.find("input[name='landform']").attr("id", "landform_" + samples);
    that.find("input[id='landform_" + samples + "']").attr("name", "landform_" + samples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + samples);
    that.find("input[id='soilGeology_" + samples + "']").attr("name", "soilGeology_" + samples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + samples);
    that.find("input[id='externalCam_" + samples + "']").attr("name", "externalCam_" + samples);
    that.find("input[name='spiritSample']").attr("id", "spiritSample_" + samples);
    that.find("input[id='spiritSample_" + samples + "']").attr("name", "spiritSample_" + samples);
    that.find("input[name='dnaSample']").attr("id", "dnaSample_" + samples);
    that.find("input[id='dnaSample_" + samples + "']").attr("name", "dnaSample_" + samples);
    that.find("input[name='otherSample']").attr("id", "otherSample_" + samples);
    that.find("input[id='otherSample_" + samples + "']").attr("name", "otherSample_" + samples);
    that.find("input[name='othText']").attr("id", "othText_" + samples);
    that.find("input[id='othText_" + samples + "']").attr("name", "othText_" + samples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + samples);
    that.find("textarea[id='addlObsrvns_" + samples + "']").attr("name", "addlObsrvns_" + samples);
    that.find("input.nextid").val(getNextID("SM"));
    that.insertAfter($('.samples'));
});

function loadEntoSample() {
    samples = samples + 1;
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
    that.find("select[name='identifiedBy']").attr("id", "identifiedBy_" + samples);
    that.find("select[id='identifiedBy_" + samples + "']").attr("name", "identifiedBy_" + samples);
    that.find("input[name='esampleId']").attr("id", "esampleId_" + samples);
    that.find("input[id='esampleId_" + samples + "']").attr("name", "esampleId_" + samples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + samples);
    that.find("input[id='addlCollectors_" + samples + "']").attr("name", "addlCollectors_" + samples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + samples);
    that.find("input[id='numCollected_" + samples + "']").attr("name", "numCollected_" + samples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + samples);
    that.find("input[id='crossCollection_" + samples + "']").attr("name", "crossCollection_" + samples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + samples);
    that.find("input[id='prelimID_" + samples + "']").attr("name", "prelimID_" + samples);
    that.find("input[name='latitude']").attr("id", "latitude_" + samples);
    that.find("input[id='latitude_" + samples + "']").attr("name", "latitude_" + samples);
    that.find("input[name='longitude']").attr("id", "longitude_" + samples);
    that.find("input[id='longitude_" + samples + "']").attr("name", "longitude_" + samples);
    that.find("input[name='duration']").attr("id", "duration_" + samples);
    that.find("input[id='duration_" + samples + "']").attr("name", "duration_" + samples);
    that.find("input[name='altitude']").attr("id", "altitude_" + samples);
    that.find("input[id='altitude_" + samples + "']").attr("name", "altitude_" + samples);
    that.find("select[name='collectionMethod']").attr("id", "collectionMethod_" + samples);
    that.find("select[id='collectionMethod_" + samples + "']").attr("name", "collectionMethod_" + samples);
    that.find("input[name='habit']").attr("id", "habit_" + samples);
    that.find("input[id='habit_" + samples + "']").attr("name", "habit_" + samples);
    that.find("input[name='description']").attr("id", "description_" + samples);
    that.find("input[id='description_" + samples + "']").attr("name", "description_" + samples);
    that.find("input[name='habitat']").attr("id", "habitat_" + samples);
    that.find("input[id='habitat_" + samples + "']").attr("name", "habitat_" + samples);
    that.find("input[name='landform']").attr("id", "landform_" + samples);
    that.find("input[id='landform_" + samples + "']").attr("name", "landform_" + samples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + samples);
    that.find("input[id='soilGeology_" + samples + "']").attr("name", "soilGeology_" + samples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + samples);
    that.find("input[id='externalCam_" + samples + "']").attr("name", "externalCam_" + samples);
    that.find("input[name='spiritSample']").attr("id", "spiritSample_" + samples);
    that.find("input[id='spiritSample_" + samples + "']").attr("name", "spiritSample_" + samples);
    that.find("input[name='dnaSample']").attr("id", "dnaSample_" + samples);
    that.find("input[id='dnaSample_" + samples + "']").attr("name", "dnaSample_" + samples);
    that.find("input[name='otherSample']").attr("id", "otherSample_" + samples);
    that.find("input[id='otherSample_" + samples + "']").attr("name", "otherSample_" + samples);
    that.find("input[name='othText']").attr("id", "othText_" + samples);
    that.find("input[id='othText_" + samples + "']").attr("name", "othText_" + samples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + samples);
    that.find("textarea[id='addlObsrvns_" + samples + "']").attr("name", "addlObsrvns_" + samples);
    that.insertAfter($('.samples'));
};

$(document).on('click', '.removeEntoSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
                x.parent().parent().parent().remove();
            },
            cancel: function () {
                //close
            }
        }
    });
});

$(document).on('click', '#addPathSample', function (e) {
    samples = samples + 1;
    var that = $(pathsample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[name='psampleId']").attr("id", "psampleId_" + samples);
    that.find("input[id='psampleId_" + samples + "']").attr("name", "psampleId_" + samples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + samples);
    that.find("input[id='addlCollectors_" + samples + "']").attr("name", "addlCollectors_" + samples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + samples);
    that.find("input[id='numCollected_" + samples + "']").attr("name", "numCollected_" + samples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + samples);
    that.find("input[id='crossCollection_" + samples + "']").attr("name", "crossCollection_" + samples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + samples);
    that.find("input[id='prelimID_" + samples + "']").attr("name", "prelimID_" + samples);
    that.find("input[name='latitude']").attr("id", "latitude_" + samples);
    that.find("input[id='latitude_" + samples + "']").attr("name", "latitude_" + samples);
    that.find("input[name='longitude']").attr("id", "longitude_" + samples);
    that.find("input[id='longitude_" + samples + "']").attr("name", "longitude_" + samples);
    that.find("input[name='altitude']").attr("id", "altitude_" + samples);
    that.find("input[id='altitude_" + samples + "']").attr("name", "altitude_" + samples);
    that.find("input[name='habit']").attr("id", "habit_" + samples);
    that.find("input[id='habit_" + samples + "']").attr("name", "habit_" + samples);
    that.find("input[name='description']").attr("id", "description_" + samples);
    that.find("input[id='description_" + samples + "']").attr("name", "description_" + samples);
    that.find("input[name='habitat']").attr("id", "habitat_" + samples);
    that.find("input[id='habitat_" + samples + "']").attr("name", "habitat_" + samples);
    that.find("input[name='landform']").attr("id", "landform_" + samples);
    that.find("input[id='landform_" + samples + "']").attr("name", "landform_" + samples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + samples);
    that.find("input[id='soilGeology_" + samples + "']").attr("name", "soilGeology_" + samples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + samples);
    that.find("input[id='externalCam_" + samples + "']").attr("name", "externalCam_" + samples);
    that.find("input[name='spiritSample']").attr("id", "spiritSample_" + samples);
    that.find("input[id='spiritSample_" + samples + "']").attr("name", "spiritSample_" + samples);
    that.find("input[name='dnaSample']").attr("id", "dnaSample_" + samples);
    that.find("input[id='dnaSample_" + samples + "']").attr("name", "dnaSample_" + samples);
    that.find("input[name='otherSample']").attr("id", "otherSample_" + samples);
    that.find("input[id='otherSample_" + samples + "']").attr("name", "otherSample_" + samples);
    that.find("input[name='othText']").attr("id", "othText_" + samples);
    that.find("input[id='othText_" + samples + "']").attr("name", "othText_" + samples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + samples);
    that.find("textarea[id='addlObsrvns_" + samples + "']").attr("name", "addlObsrvns_" + samples);
    that.find("input.nextid").val(getNextID("SM"));
    that.insertAfter($('.samples'));
});

function loadPathSample() {
    samples = samples + 1;
    var that = $(pathsample);
    that.find("input[type='checkbox']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[type='radio']").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue'
    });
    that.find("input[name='psampleId']").attr("id", "psampleId_" + samples);
    that.find("input[id='psampleId_" + samples + "']").attr("name", "psampleId_" + samples);
    that.find("input[name='addlCollectors']").attr("id", "addlCollectors_" + samples);
    that.find("input[id='addlCollectors_" + samples + "']").attr("name", "addlCollectors_" + samples);
    that.find("input[name='numCollected']").attr("id", "numCollected_" + samples);
    that.find("input[id='numCollected_" + samples + "']").attr("name", "numCollected_" + samples);
    that.find("input[name='crossCollection']").attr("id", "crossCollection_" + samples);
    that.find("input[id='crossCollection_" + samples + "']").attr("name", "crossCollection_" + samples);
    that.find("input[name='prelimID']").attr("id", "prelimID_" + samples);
    that.find("input[id='prelimID_" + samples + "']").attr("name", "prelimID_" + samples);
    that.find("input[name='latitude']").attr("id", "latitude_" + samples);
    that.find("input[id='latitude_" + samples + "']").attr("name", "latitude_" + samples);
    that.find("input[name='longitude']").attr("id", "longitude_" + samples);
    that.find("input[id='longitude_" + samples + "']").attr("name", "longitude_" + samples);
    that.find("input[name='altitude']").attr("id", "altitude_" + samples);
    that.find("input[id='altitude_" + samples + "']").attr("name", "altitude_" + samples);
    that.find("input[name='habit']").attr("id", "habit_" + samples);
    that.find("input[id='habit_" + samples + "']").attr("name", "habit_" + samples);
    that.find("input[name='description']").attr("id", "description_" + samples);
    that.find("input[id='description_" + samples + "']").attr("name", "description_" + samples);
    that.find("input[name='habitat']").attr("id", "habitat_" + samples);
    that.find("input[id='habitat_" + samples + "']").attr("name", "habitat_" + samples);
    that.find("input[name='landform']").attr("id", "landform_" + samples);
    that.find("input[id='landform_" + samples + "']").attr("name", "landform_" + samples);
    that.find("input[name='soilGeology']").attr("id", "soilGeology_" + samples);
    that.find("input[id='soilGeology_" + samples + "']").attr("name", "soilGeology_" + samples);
    that.find("input[name='externalCam']").attr("id", "externalCam_" + samples);
    that.find("input[id='externalCam_" + samples + "']").attr("name", "externalCam_" + samples);
    that.find("input[name='spiritSample']").attr("id", "spiritSample_" + samples);
    that.find("input[id='spiritSample_" + samples + "']").attr("name", "spiritSample_" + samples);
    that.find("input[name='dnaSample']").attr("id", "dnaSample_" + samples);
    that.find("input[id='dnaSample_" + samples + "']").attr("name", "dnaSample_" + samples);
    that.find("input[name='otherSample']").attr("id", "otherSample_" + samples);
    that.find("input[id='otherSample_" + samples + "']").attr("name", "otherSample_" + samples);
    that.find("input[name='othText']").attr("id", "othText_" + samples);
    that.find("input[id='othText_" + samples + "']").attr("name", "othText_" + samples);
    that.find("textarea[name='addlObsrvns']").attr("id", "addlObsrvns_" + samples);
    that.find("textarea[id='addlObsrvns_" + samples + "']").attr("name", "addlObsrvns_" + samples);
    that.insertAfter($('.samples'));
}

$(document).on('click', '.removePathSample', function (e) {
    var x = $(this);
    $.confirm({
        title: 'Remove Sample?',
        content: 'Do you want to remove this sample?',
        buttons: {
            Ok: function () {
                samples = samples - 1;
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