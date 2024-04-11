import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles"
import React from "react";
import { Dispatch, SetStateAction, useState } from 'react'

interface IButton extends TouchableOpacityProps{
    setPageI: Dispatch<SetStateAction<number>>
    page:number
}
export interface IPagina{
    setPageI: Dispatch<SetStateAction<number>>
  }
export function ButtonSlide({setPageI,page}: IButton){
    return(
        <TouchableOpacity style={styles.bola} onPress={() => setPageI(page)} />
    )
}