var Component = React.createClass({
    App.propTypes = {
        customProp:function(props,propName,componentName){
            if(!ClipboardItem.isValid(props[propName])){
                return new Error('Validation failed!');
            }
        }
    }
});