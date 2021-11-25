/**
* Generated by : Mustafa Sacli
*/
/**
* Dependencies Simple scripts;
* - simplejs.common.1.0.0.js
* -
*/
// Old name : callAjaxOperation
function callAjax(requestUrl, requestData, requestDataType = 'json', requestType, requestCache = false, requestContentType, successFunction, errorFunction) {
    //debugger;
    $.ajax({
        url: requestUrl,
        data: requestData,//JSON.stringify(dataObj),
        dataType: requestDataType,
        type: requestType,//"POST",
        cache: requestCache,//false
        contentType: requestContentType,//"application/json;charset=utf-8", //'html'
        success: function (response) {
            //debugger;
            if (isNotNullAndUndefined(successFunction)) {
                successFunction(response);
            }
            //console.log(response);
        },
        error: function (error) {
            console.error(error);
            if (isNotNullAndUndefined(errorFunction)) {
                errorFunction(error);
            }
        }
    });
}

//callAjaxPostOperation
function ajaxPost(requestUrl, requestData, requestDataType = 'json', requestCache = false, requestContentType = "application/json;charset=utf-8", successFunction, errorFunction) {
    callAjax(requestUrl, requestData, requestDataType, requestType = "POST", requestCache, requestContentType, successFunction, errorFunction);
}

//callAjaxGetOperation
function ajaxGet(requestUrl, requestData, requestDataType = 'json', requestCache = false, requestContentType = "application/json;charset=utf-8", successFunction, errorFunction) {
    callAjax(requestUrl, requestData, requestDataType, requestType = "GET", requestCache, requestContentType, successFunction, errorFunction);
}