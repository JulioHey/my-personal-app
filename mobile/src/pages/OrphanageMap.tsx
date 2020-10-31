import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Feather} from '@expo/vector-icons';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

export default function OrphangesMap() {
    return (
    <View style={styles.container}>
        <View style={styles.footer}>
        <Text style={styles.footerText}>1 orfanatos encontrados</Text>

        <RectButton style={styles.createOrphanageButton}>
            <Feather name="plus" size={20} color="#FFF"/>
        </RectButton>
        </View>
    </View>
    );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    
      map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
      },
    
      calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 16,
        justifyContent: "center",
        elevation: 3,
    
      },
    
      calloutText: {
        color: "#0089a5",
        fontSize: 14,
        fontFamily: "Nunito_700Bold",
      },
    
      footer: {
        position: "absolute",
        left: 24,
        bottom: 32,
        right: 24,
    
        backgroundColor: "#FFF",
        borderRadius: 20,
        height: 46,
        paddingLeft: 24,
    
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    
        elevation: 3,
      },
    
      footerText: {
        fontFamily: "Nunito_700Bold",
        color: "#8fa7b3"
      },
    
      createOrphanageButton: {
        width: 46,
        height: 46,
        backgroundColor: "#15c3d6",
        borderRadius: 20,
    
        justifyContent: "center",
        alignItems: "center",
      }
    });
    