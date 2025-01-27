import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "OptiFeux">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const parkingStats = {
        availableSpots: 45,
        chargingStations: 3,
        zones: [
            { id: 1, name: "Zone A", available: 15, total: 20 },
            { id: 2, name: "Zone B", available: 20, total: 25 },
            { id: 3, name: "Zone C", available: 10, total: 15 }
        ]
    };

    return (
        <scrollView className="page">
            {/* Header avec dégradé */}
            <stackLayout className="gradient-header p-8 pb-16">
                <gridLayout rows="auto, auto" columns="*, auto" className="mb-4">
                    <label row="0" col="0" text="OptiFeux" className="text-white font-bold text-2xl" />
                    <button row="0" col="1" text="☰" className="text-white text-xl" />
                    <label row="1" col="0" text="Trouvez votre place facilement" className="text-white opacity-80 mt-1" />
                </gridLayout>

                {/* Barre de recherche */}
                <gridLayout className="search-container">
                    <searchBar 
                        hint="Rechercher un parking..." 
                        textFieldHintColor="#ffffff80"
                        textFieldColor="white"
                    />
                </gridLayout>
            </stackLayout>

            {/* Conteneur principal avec effet de superposition */}
            <stackLayout className="-mt-8">
                {/* Cartes de statistiques */}
                <gridLayout columns="*, *" rows="auto" className="mx-4 mb-6">
                    <stackLayout col="0" className="stat-card m-2 p-4">
                        <label text="🚗" className="text-2xl mb-2" />
                        <label text={parkingStats.availableSpots.toString()} className="text-2xl font-bold text-blue-600" />
                        <label text="Places libres" className="text-sm text-gray-600" />
                    </stackLayout>
                    <stackLayout col="1" className="stat-card m-2 p-4">
                        <label text="⚡" className="text-2xl mb-2" />
                        <label text={parkingStats.chargingStations.toString()} className="text-2xl font-bold text-green-600" />
                        <label text="Bornes disponibles" className="text-sm text-gray-600" />
                    </stackLayout>
                </gridLayout>

                {/* Liste des zones */}
                <stackLayout className="px-4">
                    <label text="Zones de stationnement" className="text-xl font-bold text-gray-800 mb-4" />
                    {parkingStats.zones.map((zone) => (
                        <gridLayout 
                            key={zone.id}
                            columns="*, auto" 
                            className="card p-4 mb-3"
                            onTap={() => navigation.navigate("Zone Details", { zoneId: zone.id })}
                        >
                            <stackLayout col="0">
                                <label text={zone.name} className="text-lg font-bold text-gray-800" />
                                <gridLayout columns="auto, auto" className="mt-2">
                                    <label col="0" text={`${zone.available}/${zone.total}`} className="text-blue-600 font-bold" />
                                    <label col="1" text=" places disponibles" className="text-gray-600" />
                                </gridLayout>
                            </stackLayout>
                            <stackLayout col="1" verticalAlignment="center">
                                <label 
                                    text={zone.available > 5 ? "✓ Disponible" : "× Limité"}
                                    className={zone.available > 5 ? "zone-status-available" : "zone-status-limited"}
                                />
                            </stackLayout>
                        </gridLayout>
                    ))}
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({});