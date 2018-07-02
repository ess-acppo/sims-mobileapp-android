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
var vError = 0;
var vErrDescription = [];
var vFailed = false;
var HostStatCountFlag = 0;
var HostStatAreaFlag = 0;

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
        $.each(data.staffs.staff, function (key, val) {
            var option = $('<option />');
            option.attr('value', val.id).text(val.displayName);
            $("#form1").find('#ObservationStaffId').append(option);
        });
        staffData = '<option value="NONE">- select -</option>';
        $.each(data.staffs.staff, function (key, val) {
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
    pStatisticType = $(this).parent().parent().find('select[name^=PlantStatisticType]').val();
    if (pStatisticType == 'C') {
        fieldName = $(this).parent().find('input.count').attr('name');
    } else { fieldName = $(this).parent().find('input.area').attr('name'); }
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
    pStatisticType = $(this).parent().parent().find('select[name^=PlantStatisticType]').val();
    if (pStatisticType == 'C') {
        fieldName = $(this).parent().find('input.count').attr('name');
    } else { fieldName = $(this).parent().find('input.area').attr('name'); }
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
    that1.find('select[name^="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name^="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name^="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    //that1.find("input[type='radio'][name='CountList']").attr('name', 'CountList-' + Idx);
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
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
    that1.find('select[name^="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name^="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name^="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('.entotarget input').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.entotarget select').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.entotarget textarea').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
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
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
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
    that1.find('select[name^="PlantStatisticType"]').find('option').remove().end().append($(statType));
    that1.find('select[name^="PlantLifeStgCode"]').find('option').remove().end().append($(plifeStage));
    that1.find('select[name^="PlantObsMethodCode"]').find('option').remove().end().append($(MoB));
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_H');
    })
    that1.find('.pathtarget input').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.pathtarget select').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
    that1.find('.pathtarget textarea').each(function () {
        var x = $(this).attr('name').split("_");
        $(this).attr('name', x[0] + '_' + x[1] + '_' + x[2] + '_' + Idx + '_T');
    })
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
    that1.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
    that1.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + Idx + '_T');
    })
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
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
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
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + bsamples + '_S');
    })
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
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="EntoCollMethodCode"]').find('option').remove().end().append($(eCollMethod));
    that.find('select[name^="EntoInfestedPctCode"]').find('option').remove().end().append($(percInfested));
    that.find('select[name^="EntoDamageLevelCode"]').find('option').remove().end().append($(damageLevel));
    that.find('select[name^="EntoPestLevelCode"]').find('option').remove().end().append($(pestLevel));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
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
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="EntoCollMethodCode"]').find('option').remove().end().append($(eCollMethod));
    that.find('select[name^="EntoInfestedPctCode"]').find('option').remove().end().append($(percInfested));
    that.find('select[name^="EntoDamageLevelCode"]').find('option').remove().end().append($(damageLevel));
    that.find('select[name^="EntoPestLevelCode"]').find('option').remove().end().append($(pestLevel));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + esamples + '_S');
    })
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
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="PathIncidCode"]').find('option').remove().end().append($(incidence));
    that.find('select[name^="PathSevCode"]').find('option').remove().end().append($(severity));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    //that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    that.find('select[name^="HostIdentifiedUserId"]').find('option').remove().end().append($(staffData));
    that.find('select[name^="PathIncidCode"]').find('option').remove().end().append($(incidence));
    that.find('select[name^="PathSevCode"]').find('option').remove().end().append($(severity));
    that.find('input').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('select').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    that.find('textarea').each(function () {
        $(this).attr('name', $(this).attr('name') + '_' + psamples + '_S');
    })
    //that.find("input[type='checkbox'].minimal").iCheck('uncheck').val('N');
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
    if ($(this).attr('name').startsWith('AdditionalCollectorTab')) {
        $('.addlCollectors').removeClass('hide');
    };
    $(this).val('Y');
});

$(document).on('ifUnchecked', 'input[type="checkbox"].minimal', function (event) {
    //alert(event.type + ' callback');
    if ($(this).attr('name') === 'AdditionalObserverTab') {
        $('.addlObserver').addClass('hide');
    };
    if ($(this).attr('name').startsWith('AdditionalCollectorTab')) {
        $('.addlCollectors').addClass('hide');
    };
    $(this).val('N');
});


$(document).on('click', '.getPlantCoords', function (e) {
    var xlat = $(this).closest('.hostweed').find('input.hostweedlat');
    var xlng = $(this).closest('.hostweed').find('input.hostweedlng');
    var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
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
    var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
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
    var xwkt = $(this).closest('.pathbox').find('input[name^="LocationPointWktClob"]');
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
    var xwkt = $(this).closest('.sample').find('input[name^="SamplePointWktClob"]');
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
        saveToPhotoAlbum: true
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
        $('#form1').find("input[type='radio'][name^='" + $(this).attr('name') + "']").val($(this).val());
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
                console.log(JSON.stringify(data));
                //console.time('load Modal');
                $.each(data, function (key, value) {
                    //console.time('load Modal 1');
                    if (key.startsWith('ObservationWhereWktClob') && value != "") {
                        var wkt = new Wkt.Wkt();
                        wkt.read(value);
                        wkt.toObject();
                        $('#form1').find("input[type='number'][name='Longitude']").val(wkt.toJson().coordinates[0]);
                        $('#form1').find("input[type='number'][name='Latitude']").val(wkt.toJson().coordinates[1]);
                    }
                    if (key == "AdditionalObserverTab" && value.length > 0) {
                        $('#form1').find("input[type='checkbox'][name='AdditionalObserverTab']").iCheck('check');
                        addlObservers = '<option value="NONE">- select -</option>';
                        $.each(value, function (key1, value1) {
                            //$('#form1').find("input[type='text'][name='AdditionalObserverName']").eq(key1).val(value1.AdditionalObserverName);
                            $('#form1').find("input[type='text'][name^='AdditionalObserverName" + value1.ObserverNo + "']").val(value1.AdditionalObserverName);
                            var option1 = '<option';
                            option1 = option1 + ' value="' + value1.ObserverNo + '">';
                            option1 = option1 + value1.AdditionalObserverName + "</option>";
                            addlObservers = addlObservers + option1;
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
                                    if (key2.startsWith("PlantTaxonText")) {
                                        $('div.hostweed').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatCount") && value2 > 0) {
                                        $('div.hostweed').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                                        $('div.hostweed').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("div.countArea").removeClass('hide');
                                        $('div.hostweed').eq(key1).find("input[type='radio'][name^='CountList'][value='Count']").iCheck('check');
                                    }
                                    if (key2.startsWith("LocationPointWktClob")) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.hostweed').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.hostweed').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.hostweed').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.hostweed').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.hostweed').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
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
                                    if (key2.startsWith("PlantTaxonText")) {
                                        $('div.entobox').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatCount") && value2 > 0) {
                                        $('div.entobox').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                                        $('div.entobox').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                                    }
                                    if (key2.startsWith("LocationPointWktClob")) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.entobox').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.entobox').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.entobox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.entobox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
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
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='text'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='date'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='number'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                                    $('div.entobox').eq(key1).find('div.entotarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                                });
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
                                    if (key2.startsWith("PlantTaxonText")) {
                                        $('div.pathbox').eq(key1).addClass(value2.substring(0, 1).toLowerCase());
                                        $('div.glossary').find('#' + value2.substring(0, 1).toLowerCase()).removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatCount") && value2 > 0) {
                                        $('div.pathbox').eq(key1).find("select[name^='PlantStatisticType']").val('C');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatCount']").removeClass('hide');
                                    }
                                    if (key2.startsWith("HostStatAreaNo") && value2 > 0) {
                                        $('div.pathbox').eq(key1).find("select[name^='PlantStatisticType']").val('A');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatCount']").addClass('hide');
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
                                    }
                                    if (key2.startsWith("LocationPointWktClob")) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.pathbox').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    $('div.pathbox').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='Y']").iCheck('check');
                                    $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.pathbox').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.pathbox').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
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
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='text'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='date'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='number'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='checkbox'][name^='" + key4 + "'][value='on']").iCheck('check');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "'][value='" + value4 + "']").iCheck('check');
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("input[type='radio'][name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("select[name^='" + key4 + "']").val(value4);
                                                    $('div.pathbox').eq(key1).find('div.pathtarget').eq(key3).find("textarea[name^='" + key4 + "']").val(value4);
                                                });
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
                                    if (key2.startsWith("SamplePointWktClob")) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    if (key2 == "AdditionalCollectorTab" && value2.length > 0) {
                                        $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectorTab']").iCheck('check');
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                        });
                                    }
                                    if (key2 == "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
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
                                    if (key2.startsWith("SamplePointWktClob")) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    if (key2 == "AdditionalCollectorTab" && value2.length > 0) {
                                        $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectorTab']").iCheck('check');
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                        });
                                    }
                                    if (key2 == "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "EntoLifeStgTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
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
                                    if (key2.startsWith("SamplePointWktClob")) {
                                        var wkt = new Wkt.Wkt();
                                        wkt.read(value2);
                                        wkt.toObject();
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Longitude']").val(wkt.toJson().coordinates[0]);
                                        $('div.sample').eq(key1).find("input[type='number'][name^='Latitude']").val(wkt.toJson().coordinates[1]);
                                    }
                                    if (key2 == "AdditionalCollectorTab" && value2.length > 0) {
                                        $('div.sample').eq(key1).find("input[type='checkbox'][name^='AdditionalCollectorTab']").iCheck('check');
                                        $('div.sample').eq(key1).find('select[name^="AdditionalCollectorName"]').find('option').remove().end().append($(addlObservers)).val('NONE');
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("select[name^='AdditionalCollectorName']").eq(key3).val(value3);
                                        });
                                    }
                                    if (key2 == "PlantPreservationTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    if (key2 == "PlantPartTab" && value2.length > 0) {
                                        $.each(value2, function (key3, value3) {
                                            $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "-" + value3 + "']").iCheck('check');
                                        });
                                    }
                                    $('div.sample').eq(key1).find("input[type='text'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='date'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='number'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("input[type='checkbox'][name^='" + key2 + "'][value='on']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "'][value='" + value2 + "']").iCheck('check');
                                    $('div.sample').eq(key1).find("input[type='radio'][name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("select[name^='" + key2 + "']").val(value2);
                                    $('div.sample').eq(key1).find("textarea[name^='" + key2 + "']").val(value2);
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
                    //if (key.startsWith("plantPic_") && value != "") {
                    //    $('#form1').find("img[name='" + key + "']").attr("src", "images/" + value);
                    //}
                    //console.timeEnd('load Modal 5');
                    //console.time('load Modal 6');
                    $('#form1').find("input[type='text'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='date'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='number'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name^='" + key + "']").val(value);
                    $('#form1').find("input[type='checkbox'][name^='" + key + "'][value='on']").iCheck('check');
                    $('#form1').find("input[type='radio'][name^='" + key + "'][value='" + value + "']").iCheck('check');
                    $('#form1').find("input[type='radio'][name^='" + key + "']").val(value);
                    $('#form1').find("select[name^='" + key + "']").val(value);
                    $('#form1').find("textarea[name^='" + key + "']").val(value);
                    //console.timeEnd('load Modal 6');
                });
                $('#form1').find("input[type='text'][name^='id']").val(curIdx);
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
                $('#form1').find("input[type='number'][name^='Latitude']").val(curLat.toFixed(5));
                $('#form1').find("input[type='number'][name^='Longitude']").val(curLng.toFixed(5));
                $('#form1').find("input[type='text'][name^='ObservationWhereWktClob']").val(curWkt);
                getAltitude();
                $('#form1').find("input[type='date'][name^='ObservationDate']").val(today);
                $('#form1').find("input[type='number'][name^='DurationMinsCount']").val("0");
                $('#form1').find("input[type='number'][name^='id']").val(results.observations.length + 1);
                //$('#form1').find("input[type='text'][name^='track_id']").val(results.observations.length + 1);
                $('#form1').find("input[type='number'][name^='status']").val("0");
                $('#form1').find("input[type='text'][name^='PlantDisciplineCode']").val(curDiscipline);
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
        that.find("input[type='number'][name^='HostStatAreaNo']").val(HostStatAreaNo);
        that.find("input[type='number'][name^='HostStatCount']").val(HostStatCount);
        that.find("select[name^='PlantStatisticType']").val('C');
        that.find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        that.find("input[type='number'][name^='HostStatCount']").removeClass('hide');
        that.find("input[type='number'][name^='HostStatCount']").val(0);
        that.find("input[type='number'][name^='HostStatCount']").text(0);
        that.removeClass('hide');
    };
    if ($(this).attr('name').startsWith('CountList') && $(this).val() === 'List') {
        var that = $(this).parentsUntil('.hostweed').parent().find('div.countArea');
        HostStatAreaNo = that.find("input[type='number'][name^='HostStatAreaNo']").val();
        HostStatCount = that.find("input[type='number'][name^='HostStatCount']").val();
        that.find("input[type='number'][name^='HostStatAreaNo']").val("0");
        that.find("input[type='number'][name^='HostStatCount']").val("0");
        that.addClass('hide');
    };
});

$(document).on('change', 'select[name^="PlantStatisticType"]', function () {
    var str = $(this).val();
    if (str == 'C') {
        $(this).parent().parent().find("input[type='number'][name^='HostStatAreaNo']").addClass('hide');
        $(this).parent().parent().find("input[type='number'][name^='HostStatCount']").removeClass('hide');
    }
    if (str == 'A') {
        $(this).parent().parent().find("input[type='number'][name^='HostStatAreaNo']").removeClass('hide');
        $(this).parent().parent().find("input[type='number'][name^='HostStatCount']").addClass('hide');
    }
});

function objectifyPHFormforSave(formArray) {
    var addlObserver = 1;
    var obsAttachment = 1;
    var sampleAttachment = 1;
    var observation = {
        "AdditionalObserverTab": [],
        "PlantObsTab": [],
        "PlantSampleTab": [],
        "ObsAttachmentTab": []
    };
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name'].length > 0) {
            if (formArray[i]['name'].startsWith('AdditionalCollectorTab')) { continue; }
            if (formArray[i]['name'].startsWith('PlantStatisticType')) { continue; }
            if (formArray[i]['name'].startsWith('Latitude')) { continue; }
            if (formArray[i]['name'].startsWith('Longitude')) { continue; }
            if (formArray[i]['name'].startsWith('AdditionalObserverTab')) { continue; }
            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] == "") {
                continue;
            }
            var fname = formArray[i]['name'].split("_")[0];
            var fMOC = formArray[i]['name'].split("_")[1];
            var fNSD = formArray[i]['name'].split("_")[2];
            var fnum = formArray[i]['name'].split("_")[3];
            var ftype = formArray[i]['name'].split("_")[4];

            //if (fMOC = 'M' && formArray[i]['value'] == null) {
            //    return false;
            //}

            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] != "") {
                //var x = formArray[i]['name'].substr(formArray[i]['name'].length - 1);
                var observer = { "ObserverNo": "", "AdditionalObserverName": "" };
                observer.ObserverNo = addlObserver;
                observer.AdditionalObserverName = formArray[i]['value'];
                observation.AdditionalObserverTab.push(observer);
                addlObserver++;
                continue;
            }

            if (ftype == 'H' && fname != 'GpsDatumId') {
                if (fname == 'PlantTaxonId') {
                    var vPlantObsTab = {
                        "PlantObsTargetTab": [],
                        "PlantObsAttachmentTab": []
                    };
                }
                if (fname.startsWith('PlantObsAttachment')) {
                    //var x = fname.substr(fname.length - 1);
                    var attachment = { "AttachmentNo": "", "AttachmentPath": "" };
                    attachment.AttachmentNo = obsAttachment;
                    attachment.AttachmentPath = formArray[i]['value'];
                    vPlantObsTab.PlantObsAttachmentTab.push(attachment);
                    obsAttachment++;
                    continue;
                }
                vPlantObsTab[formArray[i]['name']] = formArray[i]['value'];
                continue;
            }
            if (ftype == 'T' && fname != 'CommentText') {
                if (fname == 'TargetTaxonId') {
                    var vPlantObsTargetTab = {};
                }
                vPlantObsTargetTab[formArray[i]['name']] = formArray[i]['value'];
                continue;
            }
            if (ftype == 'T' && fname == 'CommentText') {
                vPlantObsTargetTab[formArray[i]['name']] = formArray[i]['value'];
                vPlantObsTab.PlantObsTargetTab.push(vPlantObsTargetTab);
                continue;
            }
            if (ftype == 'H' && fname == 'GpsDatumId') {
                vPlantObsTab[formArray[i]['name']] = formArray[i]['value'];
                observation.PlantObsTab.push(vPlantObsTab);
                continue;
            }
            if (ftype == 'S' && fname != 'ExternalPhotoExistFlag') {
                if (fname == 'SampleFieldLabelText') {
                    var vPlantSampleTab = {
                        "AdditionalCollectorTab": [],
                        "PlantPreservationTab": [],
                        "PlantPartTab": [],
                        "EntoLifeStgTab": [],
                        "SampleAttachmentTab": []
                    };
                }
                if (fname.startsWith('AdditionalCollectorName') && formArray[i]['value'] == 'NONE') {
                    continue;
                }
                if (fname.startsWith('AdditionalCollectorName') && formArray[i]['value'] != 'NONE') {
                    vPlantSampleTab.AdditionalCollectorTab.push(formArray[i]['value']);
                    continue;
                }
                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] != 'Y') {
                    continue;
                }
                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] == 'Y') {
                    //var vPlantpart = fname.split("_")[0];
                    var vPlantpart = fname.split("-")[1];
                    vPlantSampleTab.PlantPartTab.push(vPlantpart);
                    continue;
                }
                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] != 'Y') {
                    continue;
                }
                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] == 'Y') {
                    //var vPlantPreservation = fname.split("_")[0];
                    var vPlantPreservation = fname.split("-")[1];
                    vPlantSampleTab.PlantPreservationTab.push(vPlantPreservation);
                    continue;
                }
                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] != 'Y') {
                    continue;
                }
                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] == 'Y') {
                    //var vEntoLifeStgTab = fname.split("_")[0];
                    var vEntoLifeStgTab = fname.split("-")[1];
                    vPlantSampleTab.EntoLifeStgTab.push(vEntoLifeStgTab);
                    continue;
                }
                if (fname.startsWith('SampleAttachment')) {
                    //var x = fname.substr(fname.length - 1);
                    var attachment = { "AttachmentNo": "", "AttachmentPath": "" };
                    attachment.AttachmentNo = sampleAttachment;
                    attachment.AttachmentPath = formArray[i]['value'];
                    vPlantSampleTab.SampleAttachmentTab.push(attachment);
                    sampleAttachment++;
                    continue;
                }
                vPlantSampleTab[formArray[i]['name']] = formArray[i]['value'];
                continue;
            }
            if (ftype == 'S' && fname == 'ExternalPhotoExistFlag') {
                vPlantSampleTab[formArray[i]['name']] = formArray[i]['value'];
                observation.PlantSampleTab.push(vPlantSampleTab);
                continue;
            }
            //alert(formArray[i]['name'] + ':' + formArray[i]['value']);
            if (fNSD == 'N') {
                observation[formArray[i]['name']] = Number(formArray[i]['value']);
            }
            else { observation[formArray[i]['name']] = formArray[i]['value']; }
        }
    }
    return observation;
}

function objectifyPHFormforSubmit(data) {//serialize data function
    var modData = JSON.parse(JSON.stringify(data));
    var jsonStr = JSON.stringify(modData);
    jsonStr = jsonStr.replace(/_O_N_\d_T/g, '').replace(/_M_S_\d_T/g, '').replace(/_O_S_\d_T/g, '').replace(/_M_N_\d_H/g, '').replace(/_M_S_\d_H/g, '').replace(/_O_S_\d_H/g, '').replace(/_O_N_\d_H/g, '');
    jsonStr = jsonStr.replace(/_M_S_\d_S/g, '').replace(/_O_N_\d_S/g, '').replace(/_M_S_\d_S/g, '').replace(/_M_D_\d_S/g, '').replace(/_O_S_\d_S/g, '');
    jsonStr = jsonStr.replace(/_M_N/g, '').replace(/_O_N/g, '').replace(/_M_D/g, '').replace(/_M_S/g, '');
    var jsonData = JSON.parse(jsonStr);
    delete jsonData.status_M_N;
    return jsonData;
}

function Iterate(data) {
    var modData = JSON.parse(JSON.stringify(data));
    delete modData.status_M_N;
    $.each(modData, function (index, value) {
        if (typeof value == 'object') {
            Iterate(value);
        }
        else {
            //console.log(index + ":" + value);
            if (isNaN(index)) {
                var fname = index.split("_")[0];
                var fMOC = index.split("_")[1];
                var fNSD = index.split("_")[2];
                var fnum = index.split("_")[3];
                var ftype = index.split("_")[4];
                if (fname == 'HostStatCount' && value == 0) { HostStatCountFlag = 1; }
                if (fname == 'HostStatAreaNo' && value == 0 && HostStatCountFlag == 1) {
                    console.log('HostStatCount and Area fields - both cannot be NULL');
                    vError = 1;
                    vErrDescription.push('HostStatCount and Area fields - both cannot be NULL');
                    vFailed = true;
                    return false;
                }
                if (fMOC == 'M' && fNSD == 'S' && value == '') {
                    console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push(index + ' field cannot be NULL');
                    vFailed = true;
                    return false;
                }
                if (fMOC == 'M' && fNSD == 'N' && value == 0) {
                    if (fname == 'HostStatCount') return true;
                    if (fname == 'HostStatAreaNo') return true;
                    console.log(index + ' field cannot be NULL');
                    vError = 1;
                    vErrDescription.push(index + ' field cannot be NULL');
                    vFailed = true;
                    return false;
                }
            }
        }
    });
    if (vFailed == true) {
        return { "vError": vError, "vErrDescription": vErrDescription.join('<br/>') };
    } else { return { "vError": 0, "vErrDescription": "" }; }
};

//function objectifyPHFormforSubmit(formArray) {//serialize data function
//    var addlObserver = 1;
//    var obsAttachment = 1;
//    var sampleAttachment = 1;
//    var observation = {
//        "SubmittedByStaffId": 0,
//        "SurvActivityId": 0,
//        "SiteId": 0,
//        "PlantDisciplineCode": "",
//        "ObservationDate": "",
//        "ObservationStaffId": 0,
//        "WaypointNumber": 0,
//        "DurationMinsCount": 0,
//        "ObservWhereGpsDatumId": "",
//        "ObservationWhereWktClob": "",
//        "AltitudeNo": 0,
//        "AdditionalObserverTab": [],
//        "PlantObsTab": [],
//        "PlantSampleTab":  [],
//        "ObsAttachmentTab": [],
//        "id": 1,
//        "status": 0
//    };
//    for (var i = 0; i < formArray.length; i++) {
//        if (formArray[i]['name'].length > 0) {     
//            if (formArray[i]['name'].startsWith('AdditionalCollectorTab')) { continue; }
//            if (formArray[i]['name'].startsWith('PlantStatisticType')) { continue; }
//            if (formArray[i]['name'].startsWith('Latitude')) { continue; }
//            if (formArray[i]['name'].startsWith('Longitude')) { continue; }
//            if (formArray[i]['name'].startsWith('AdditionalObserverTab')) { continue; }
//            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] == "") {    
//                continue;
//            }
//            var fname = formArray[i]['name'].split("_")[0];
//            var fMOC = formArray[i]['name'].split("_")[1];
//            var fNSD = formArray[i]['name'].split("_")[2];
//            var fnum = formArray[i]['name'].split("_")[3];
//            var ftype = formArray[i]['name'].split("_")[4];

//            //if (fMOC = 'M' && formArray[i]['value'] == null) {
//            //    return false;
//            //} 

//            if (formArray[i]['name'].startsWith('AdditionalObserverName') && formArray[i]['value'] != "") {
//                //var x = formArray[i]['name'].substr(formArray[i]['name'].length - 1);
//                var observer = { "ObserverNo": "", "AdditionalObserverName": "" };
//                observer.ObserverNo = addlObserver;
//                observer.AdditionalObserverName = formArray[i]['value'];
//                observation.AdditionalObserverTab.push(observer);
//                addlObserver++;
//                continue;
//            }

//            if (ftype == 'H' && fname != 'GpsDatumId') {
//                if (fname == 'PlantTaxonId') {
//                    var vPlantObsTab = {
//                        "PlantTaxonId": 0,
//                        "PlantTaxonText": "",
//                        "HostStatCount": 0,
//                        "HostStatAreaNo": 0,
//                        "CheckFutureSurveyFlag": "",
//                        "ExternalPhotoExistFlag": "",
//                        "PlantObsMethodCode": "",
//                        "CommentText": "",
//                        "PlantLifeStgCode": "",
//                        "PlantStatusFruitingFlag": "",
//                        "PlantStatusFloweringFlag": "",
//                        "PlantStatusFlushingFlag": "",
//                        "PlantStatusDeadWoodFlag": "",
//                        "GpsDatumId": "",
//                        "LocationPointWktClob": "",
//                        "PlantObsTargetTab": [],
//                        "PlantObsAttachmentTab": []
//                    };
//                }
//                if (fname.startsWith('PlantObsAttachment')) {
//                    //var x = fname.substr(fname.length - 1);
//                    var attachment = { "AttachmentNo": "", "AttachmentPath": "" };
//                    attachment.AttachmentNo = obsAttachment;
//                    attachment.AttachmentPath = formArray[i]['value'];
//                    vPlantObsTab.PlantObsAttachmentTab.push(attachment);
//                    obsAttachment++;
//                    continue;
//                }
//                vPlantObsTab[fname] = formArray[i]['value'];
//                continue;
//            } 
//            if (ftype == 'T' && fname != 'CommentText') {
//                if (fname == 'TargetTaxonId') {
//                    var vPlantObsTargetTab = {
//                        "TargetTaxonId": 0,
//                        "TargetTaxonText": "",
//                        "TargetCount": 0,
//                        "TargetObservedCode": "",
//                        "CommentText": ""
//                    };
//                }
//                vPlantObsTargetTab[fname] = formArray[i]['value'];
//                continue;
//            }
//            if (ftype == 'T' && fname == 'CommentText') {
//                vPlantObsTargetTab[fname] = formArray[i]['value'];
//                vPlantObsTab.PlantObsTargetTab.push(vPlantObsTargetTab);
//                continue;
//            }
//            if (ftype == 'H' && fname == 'GpsDatumId') {
//                vPlantObsTab[fname] = formArray[i]['value'];
//                observation.PlantObsTab.push(vPlantObsTab);
//                continue;
//            }
//            if (ftype == 'S' && fname != 'ExternalPhotoExistFlag') {
//                if (fname == 'SampleFieldLabelText') {
//                    var vPlantSampleTab = {
//                        "SampleFieldLabelText": "",
//                        "CollectedSampleCount": 0,
//                        "LinkedSampleFieldLabelText": "",
//                        "PrelimTaxonId": 0,
//                        "PrelimTaxonText": "",
//                        "GpsDatumId": "",
//                        "SamplePointWktClob": "",
//                        "CollectedDatetime": "",
//                        "CollectedAltitudeNo": 0,
//                        "CommentText": "",
//                        "HabitText": "",
//                        "DetailedDescriptionText": "",
//                        "HabitatText": "",
//                        "LandformText": "",
//                        "SoilGeologyText": "",
//                        "AbundanceText": "",
//                        "ExternalPhotoExistFlag": "",
//                        "PlantPreservOtherText": "",
//                        "HostFlag": "",
//                        "HostTaxonId": 0,
//                        "HostTaxonText": "",
//                        "HostIdentifiedUserId": "",
//                        "EntoCollMethodCode": "",
//                        "EntoInfestedPctCode": "",
//                        "EntoDamageLevelCode": "",
//                        "EntoPestLevelCode": "",
//                        "PathSymptomsText": "",
//                        "PathIncidCode": "",
//                        "PathSevCode": "",
//                        "AdditionalCollectorTab": [],
//                        "PlantPreservationTab": [],
//                        "PlantPartTab": [],
//                        "EntoLifeStgTab": [],
//                        "SampleAttachmentTab": []
//                    };
//                }
//                if (fname.startsWith('AdditionalCollectorName') && formArray[i]['value'] == 'NONE') {
//                    continue;
//                }
//                if (fname.startsWith('AdditionalCollectorName') && formArray[i]['value'] != 'NONE') {
//                    vPlantSampleTab.AdditionalCollectorTab.push(formArray[i]['value']);
//                    continue;
//                }
//                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] != 'Y') {
//                    continue;
//                }
//                if (fname.startsWith('PlantPartTab') && formArray[i]['value'] == 'Y') {
//                    var vPlantpart = fname.split("_")[0];
//                    vPlantpart = vPlantpart.split("-")[1];
//                    vPlantSampleTab.PlantPartTab.push(vPlantpart);
//                    continue;
//                }
//                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] != 'Y') {
//                    continue;
//                }
//                if (fname.startsWith('PlantPreservationTab') && formArray[i]['value'] == 'Y') {
//                    var vPlantPreservation = fname.split("_")[0];
//                    vPlantPreservation = vPlantPreservation.split("-")[1];
//                    vPlantSampleTab.PlantPreservationTab.push(vPlantPreservation);
//                    continue;
//                }
//                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] != 'Y') {
//                    continue;
//                }
//                if (fname.startsWith('EntoLifeStgTab') && formArray[i]['value'] == 'Y') {
//                    var vEntoLifeStgTab = fname.split("_")[0];
//                    vEntoLifeStgTab = vEntoLifeStgTab.split("-")[1];
//                    vPlantSampleTab.EntoLifeStgTab.push(vEntoLifeStgTab);
//                    continue;
//                }
//                if (fname.startsWith('SampleAttachment')) {
//                    //var x = fname.substr(fname.length - 1);
//                    var attachment = { "AttachmentNo": "", "AttachmentPath": "" };
//                    attachment.AttachmentNo = sampleAttachment;
//                    attachment.AttachmentPath = formArray[i]['value'];
//                    vPlantSampleTab.SampleAttachmentTab.push(attachment);
//                    sampleAttachment++;
//                    continue;
//                }
//                vPlantSampleTab[fname] = formArray[i]['value'];
//                continue;
//            }
//            if (ftype == 'S' && fname == 'ExternalPhotoExistFlag') {
//                vPlantSampleTab[fname] = formArray[i]['value'];
//                observation.PlantSampleTab.push(vPlantSampleTab);
//                continue;
//            }       
//            //alert(formArray[i]['name'] + ':' + formArray[i]['value']);
//            if (fNSD == 'N') {
//                observation[fname] = Number(formArray[i]['value']);
//            }
//            else { observation[fname] = formArray[i]['value'];}           
//        }
//    }
//    return observation;
//}

function SubmitRecord(formArray) {//serialize data function
    var guid1 = guid();
    var obsWrapper = {
        "header": {
            "ebmCID": guid1,
            "ebmMID": guid1,
            "ebmSID": "SIMS Mobile App",
            "ebmTimestamp": new Date().toISOString()
        },
        "body": {
            "plantHealth": ""
        }
    };
    obsWrapper.body.plantHealth = formArray;
    return obsWrapper;
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

$(document).on('click', '#downloadPNGMaps', function (e) {
    //e.preventDefault();
    var url2 = 'http://sprinq.com.au/files/PNG.zip';
    var filename = "PNG.zip";
    window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024, function (fs) {
        //console.log('file system open: ' + fs.name);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url2, true);
        xhr.responseType = 'blob';
        xhr.onloadend = function () {
            if (this.status == 200) {
                var blob = new Blob([this.response], { type: "octet/stream" });
                fs.root.getFile(filename, { create: true, exclusive: false }, function (fileEntry) {
                    writeFile(fileEntry, blob);
                }, function (e) {
                    console.log("Failed file save: " + e.toString());
                });
            }
        };
        xhr.send();
    });
});

function writeFile(fileEntry, dataObj, isAppend) {
    fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function () {
            //console.log("Successful file write...");
            //processZip("ms-appdata:///local/PNG.zip", cordova.file.dataDirectory);
            processZip(fileEntry.toURL() + "PNG.zip", cordova.file.dataDirectory);
        };
        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };
        fileWriter.write(dataObj);
    });
}

function processZip(zipSource, destination) {
    // Handle the progress event
    var progressHandler = function (progressEvent) {
        var percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        // Display progress in the console : 8% ...
        console.log(percent + "%");
    };
    // Proceed to unzip the file
    window.zip.unzip(zipSource, destination, (status) => {
        if (status == 0) {
            console.log("Files succesfully decompressed");
        }
        if (status == -1) {
            console.error("Oops, cannot decompress files");
        }
    }, progressHandler);
}