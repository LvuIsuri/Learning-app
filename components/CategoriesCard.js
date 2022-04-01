import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import { FONTS, COLORS, SIZES } from '../constants';
import { IconLabel } from '../components'

const CategoriesCard = ({ containerStyle, category }) => {
    return (
        <TouchableOpacity>
            <ImageBackground
                source={ category?.thumbnail }
                resizeMode = "cover"
                style={{
                    height: 150,
                    width: 200,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    justifyContent: "flex-end",
                    ...containerStyle


                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.h2
                    }}
            >
                { category?.title}
            </Text>
            </ImageBackground>
          
        </TouchableOpacity>
    )
}
export default CategoriesCard;