import React from 'react';
import { TouchableOpacity, Text, View, Image,ImageBackground } from 'react-native';
import { FONTS, COLORS, SIZES, icons} from '../constants';
import { IconLabel } from '../components'

const HorizontalCard = ({ containerStyle, course }) => {
    

    return(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {/* Thumnail */}
            <ImageBackground
                source={ course.thumbnail }
                resizeMode="cover"
                style={{
                    width:130,
                    height: 130,
                    marginBottom: SIZES.radius
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        backgroundColor:COLORS.white
                    }}
                >                
                    <Image
                        source={ icons.favourite }
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: course.is_favourite ? COLORS.secondary: COLORS.additionalColor4
                        }}
                    />                
                </View>
            
            </ImageBackground>

            {/* Detail */}
            <View
                style={{
                    flex:1,
                    marginLeft: SIZES.base
                }}
            >
                    <Text
                        style={{
                            ...FONTS.h3,
                            fontSize: 18
                        }}
                    >
                        {course.title}
                    </Text>
                    {/* Intrustor and duration */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: SIZES.base
                        }}
                    >
                        <Text
                            style= {{
                                ...FONTS.body4
                            }}
                        >
                            By {course.instructor}
                        </Text>
                        <IconLabel
                        icon={icons.time}
                        label = {course.duration}
                        containerStyle={{
                            marginLeft: SIZES.base
                            
                        }}
                        iconStyle={{
                            width: 15,
                            height: 15
                        }}
                        labelStyle={{
                            ...FONTS.body4
                        }}
                    />
                    </View>
                    
                    {/* Price and rating */}

                    {/* <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: SIZES.base
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h2,
                                color: COLORS.primary
                            }}
                        >
                            ${ course.price.toFixed(2)}
                        </Text>
                        <IconLabel
                            icon={icons.star}
                            label={course.ratings}
                            containerStyle={{
                                marginLeft: SIZES.base
                            }}
                            iconStyle={{
                                with:15,
                                height: 15,
                                tintColor:COLORS.primary2
                            }}
                            labelStyle={{
                                marginLeft:5,
                                color: COLORS.black,
                                ...FONTS.h3
                            }}
                        />
                    </View> */}
            </View>
        </TouchableOpacity>
        
    )
  
}
export default HorizontalCard;