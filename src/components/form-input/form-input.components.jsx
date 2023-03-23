import {Group, Input, FormInputLabel} from './form-input.styles.jsx';

const FormInput = ({label, ...otherProps}) => {
    return (
    <Group>
        <Input {...otherProps} />
        {label && (
        <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>  /*If otherProps.value.length >0 so we typed something, this value evaluates to truthy and passes through. If =0, then it is falsy. */
        )}
        
    </Group>
        
    );
};

export default FormInput;