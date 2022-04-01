import React from 'react';
import {  View } from 'react-native';
import { COLORS } from '../constants';

const LineDivided = ({ lineStyle }) => {
    return(
        <View
            style={{
                height: 2,
                width: "100%",
                backgroundColor: COLORS.gray30,
                ...lineStyle
            }}
        />
    )
}
export default LineDivided;