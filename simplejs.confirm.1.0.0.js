/**
* Generated by : Mustafa Sacli
*/
/**
* Dependencies Simple scripts;
* -
* -
*/
function confirmDialog(title, content, confirmDoneFunction, confirmCancelFunction){
    $.confirm({
        title: title,
        content: content,
        confirm: function () {
            if(isNotNullAndUndefined(confirmDoneFunction)){
                confirmDoneFunction();            
            }
        },
        cancel: function () {
            if(isNotNullAndUndefined(confirmCancelFunction)){
                confirmCancelFunction();            
            }
        }
        }); 
}