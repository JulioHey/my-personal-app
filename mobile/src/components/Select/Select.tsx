import React from 'react';
import { AntDesign  } from '@expo/vector-icons';

import RNPickerSelect from 'react-native-picker-select';

interface SelectProps {
    width?: number,
    isHeader?: string,
    populatedOptions?: Array<{
        label: string
        value: string
    }>,
    value?: string,
    onChangeFunction(e: string, index?: number): void
}


const Select: React.FC<SelectProps> = (props) => {

    return (
        <RNPickerSelect
            style={{
            inputAndroid: {
                width: props.width ? (props.width - 20) : 70,
                fontSize: 12,
                justifyContent: 'center',
                color: "#000",
                textAlign: 'center',
                padding: 0,
              },
            iconContainer: {
                position: "relative",
              },
            viewContainer: {
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: props.width ? props.width : 90,
                height: 25,
                marginRight: 10,
                borderRadius: 8,
                backgroundColor: "#FFF",
            },
            }}
            value={props.value}
            onValueChange={props.onChangeFunction}
            items={props.populatedOptions ? props.populatedOptions : []}
            Icon = {() => {return(
                <AntDesign
                    name="caretdown"
                    color='black'
                    size={15}
                />);
            }}
        />
    );
}

export default Select;
