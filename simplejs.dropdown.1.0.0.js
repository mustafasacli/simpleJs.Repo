/**
* Generated by : Mustafa Sacli
*/
/**
* Dependencies Simple scripts;
* - simplejs.common.1.0.0.js
* -
*/
$(document).ready(function () {
    callSimpleAjaxDropDowns();
});

function loadDropDownWithOps(dropDown, dropDownUrl, selectedValue, defaultText = "Seçiniz", default_text_value,
    valueProperty = "Value", textProperty = "Text", url_values, error_function, pre_action, post_action) {
    //let dropDown = $('#' + dropDownId);

    if (isNotNullAndUndefined(dropDown) === false)
        throw new Error('dropdown element not found.');

    dropDown.empty();

    if (isNotNullAndUndefined(dropDownUrl) === false || isNullOrWhiteSpace(toNullString(dropDownUrl)))
        throw new Error('Ajax request url should be defined.');

    if (isNotNullAndUndefined(textProperty) === false)
        throw new Error('text property for ajax request should be defined.');

    if (isNotNullAndUndefined(valueProperty) === false)
        throw new Error('value property for ajax request should be defined.');

    if (isNullOrWhiteSpace(defaultText) === false || isNullOrWhiteSpace(toNullString(default_text_value)) === false) {
        dropDown.append('<option value="' + toNullString(default_text_value) + '">' + toNullString(defaultText) + '</option>');
    }

    try {
        if (isNotNullAndUndefined(pre_action) && isNullOrWhiteSpace(toNullString(pre_action)) === false) {
            pre_action();
        }
    } catch (err) {
        console.error(err);
    }

    $.getJSON(dropDownUrl, url_values, function (response) {
        $.each(response, function (key, entry) {
            dropDown.append($('<option></option>')
                .attr('value', entry[valueProperty])
                .text(entry[textProperty]));
        });
    }).done(function () {
        try {
            if (isNotNullAndUndefined(selectedValue) && isNullOrWhiteSpace(toNullString(selectedValue)) === false) {
                //setTimeout(function () {
                dropDown.val(selectedValue);
                //}, 500);
                // console.log(selectedValue);
            } else {
                dropDown.prop('selectedIndex', 0);
            }
        } catch (err) {
            console.error(err);
        }

        try {
            if (isNotNullAndUndefined(post_action) && isNullOrWhiteSpace(toNullString(post_action)) === false) {
                post_action();
            }
        } catch (err) {
            console.error(err);
        }
    }).fail(function () {
        if (isNotNullAndUndefined(error_function)) {
            error_function();
        }
    });
}

/*
 TODO : SHOULD BE TESTED.
 */
function callSimpleAjaxDropDowns() {
    $(".select simple-ajax-call").forEach(function (selectElement) {
        rebuildDropDown(selectElement);
    });
}

function rebuildDropDown(dropdownElement) {
    try {
        // remove any existing options
        dropdownElement.empty();
        /**
         * <div class="col-md-4">
            <div class="form-group form-md-line-input form-md-floating-label">
                <label for="dropDownId" class="control-label">Choice: </label>
                <select id="dropDownId" class="form-control select2 tooltips simple-ajax-call"
                action_url="" text_item="" value_item="" default_value="" default_text=""
                value_dictionary_function="" error_function="" pre_action="" post_action=""></select>
            </div>
        </div>
         * */
        // ajax call and build drop down.
        let action_url_value = dropdownElement.getAttribute('action_url');
        let text_item_value = dropdownElement.getAttribute('text_item');
        let value_item_value = dropdownElement.getAttribute('value_item');
        let default_value = dropdownElement.getAttribute('default_value');
        let default_text = toNullString(dropdownElement.getAttribute('default_text'));
        let default_text_value = toNullString(dropdownElement.getAttribute('default_text_value'));
        let value_dictionary_function = selectElement.getAttribute('value_dictionary_function');
        let error_function = selectElement.getAttribute('error_function');
        let values = null;
        let pre_action = selectElement.getAttribute('pre_action');
        let post_action = selectElement.getAttribute('post_action');

        if (isNotNullAndUndefined(value_dictionary_function) && isNullOrWhiteSpace(toNullString(value_dictionary_function)) === false) {
            values = value_dictionary_function();
        }

        loadDropDownWithOps(
            dropdown, action_url_value, default_value, toNullString(default_text), default_text_value,
            value_item_value, text_item_value, values, function () {
                console.log('Error at loading drop down with ' + dropdownElement.id + ' id.');

                if (isNotNullAndUndefined(error_function) && isNullOrWhiteSpace(toNullString(error_function)) === false) {
                    error_function();
                }
            }, pre_action, post_action);
    } catch (err) {
        console.error(err);
    }
}