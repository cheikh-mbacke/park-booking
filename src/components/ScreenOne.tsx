import { Dialogs, Screen } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "One">,
    navigation: FrameNavigationProp<MainStackParamList, "One">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    const [screenWidth, setScreenWidth] = useState(Screen.mainScreen.widthDIPs);

    return (
        <flexboxLayout style={styles.container}>
            {/* Header */}
            <gridLayout rows="auto" columns="*, auto" className="gradient-bg p-6">
                <label col="0" className="text-xl font-bold text-white">OptiFeux</label>
                <button col="1" className="p-2 text-white" onTap={() => Dialogs.alert("Menu")}>
                    ☰
                </button>
            </gridLayout>

            {/* Search Bar */}
            <gridLayout rows="auto" columns="*" className="p-4">
                <searchBar 
                    hint="Rechercher un parking..." 
                    className="search-bar"
                    textFieldHintColor="#9ca3af"
                />
            </gridLayout>

            {/* Main Content - Responsive Container */}
            <scrollView className="flex-grow">
                <flexboxLayout className="responsive-container">
                    {/* Map Container */}
                    <flexboxLayout className="map-container p-4">
                        <stackLayout className="card p-6">
                            <image src="https://maps.googleapis.com/maps/api/staticmap?center=48.8584,2.2945&zoom=15&size=600x300&maptype=roadmap" 
                                   stretch="aspectFill" 
                                   height="200" />
                            <stackLayout className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3">
                                <label className="font-semibold">Analyse en temps réel</label>
                                <label className="text-xs text-gray-500">Mise à jour il y a 2 min</label>
                            </stackLayout>
                        </stackLayout>
                    </flexboxLayout>

                    {/* Info Container */}
                    <flexboxLayout className="info-container">
                        {/* Statistics */}
                        <flexboxLayout className="stats-container p-4">
                            <stackLayout className="stat-card rounded-2xl p-4 m-1">
                                <gridLayout rows="auto, auto" columns="auto, *">
                                    <label row="0" col="0" className="text-2xl">🚗</label>
                                    <label row="0" col="1" className="text-right text-2xl font-bold text-blue-600">45</label>
                                    <label row="1" colSpan="2" className="text-sm text-gray-600 mt-2">Places libres</label>
                                </gridLayout>
                            </stackLayout>
                            <stackLayout className="stat-card rounded-2xl p-4 m-1">
                                <gridLayout rows="auto, auto" columns="auto, *">
                                    <label row="0" col="0" className="text-2xl">⚡</label>
                                    <label row="0" col="1" className="text-right text-2xl font-bold text-green-600">3</label>
                                    <label row="1" colSpan="2" className="text-sm text-gray-600 mt-2">Bornes disponibles</label>
                                </gridLayout>
                            </stackLayout>
                        </flexboxLayout>

                        {/* Parking Spots List */}
                        <stackLayout className="parking-list p-4">
                            <label className="text-lg font-bold mb-3 text-gray-800">État des places</label>
                            {[1, 2, 3].map((spot) => (
                                <gridLayout key={spot} className="card p-4" rows="auto" columns="*, auto">
                                    <stackLayout col="0">
                                        <label className="text-lg font-bold text-gray-800">Zone {spot}</label>
                                        <label className="text-sm text-gray-600">{spot * 15} places disponibles</label>
                                    </stackLayout>
                                    <stackLayout col="1" className={`rounded-full px-4 py-2 ${
                                        spot * 15 > 20 ? 'bg-green-100' : 'bg-red-100'
                                    }`}>
                                        <label className={spot * 15 > 20 ? 'text-green-800' : 'text-red-800'}>
                                            {spot * 15 > 20 ? '✓ Disponible' : '× Limité'}
                                        </label>
                                    </stackLayout>
                                </gridLayout>
                            ))}
                        </stackLayout>
                    </flexboxLayout>
                </flexboxLayout>
            </scrollView>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#f8fafc"
    }
});