import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ZoneDetailsProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Zone Details">,
    route: { params: { zoneId: number } }
};

export function ZoneDetailsScreen({ route }: ZoneDetailsProps) {
    const { zoneId } = route.params;
    
    return (
        <scrollView className="page">
            <stackLayout>
                {/* En-tête avec carte */}
                <gridLayout rows="auto" className="gradient-header p-6">
                    <stackLayout>
                        <label text={`Zone ${zoneId}`} className="text-2xl font-bold text-white mb-2" />
                        <label text="Mise à jour il y a 2 min" className="text-white opacity-70" />
                    </stackLayout>
                </gridLayout>

                {/* Carte interactive */}
                <gridLayout className="-mt-6 mx-4">
                    <stackLayout className="card p-0">
                        <image
                            src="https://maps.googleapis.com/maps/api/staticmap?center=48.8584,2.2945&zoom=18&size=600x300&maptype=roadmap"
                            className="rounded-lg h-48"
                            stretch="aspectFill"
                        />
                    </stackLayout>
                </gridLayout>

                {/* Statistiques détaillées */}
                <gridLayout columns="*, *" rows="auto" className="m-4">
                    <stackLayout col="0" className="stat-card m-2 p-4">
                        <label text="15" className="text-2xl font-bold text-blue-600" />
                        <label text="Places libres" className="text-sm text-gray-600" />
                    </stackLayout>
                    <stackLayout col="1" className="stat-card m-2 p-4">
                        <label text="5 min" className="text-2xl font-bold text-green-600" />
                        <label text="Temps moyen" className="text-sm text-gray-600" />
                    </stackLayout>
                </gridLayout>

                {/* Section historique */}
                <stackLayout className="m-4">
                    <label text="Historique d'occupation" className="text-xl font-bold text-gray-800 mb-4" />
                    <stackLayout className="card p-4">
                        <gridLayout className="h-48 bg-gray-100 rounded-lg">
                            {/* Ici nous pourrions ajouter un graphique */}
                        </gridLayout>
                    </stackLayout>
                </stackLayout>

                {/* Informations supplémentaires */}
                <stackLayout className="m-4">
                    <label text="Informations" className="text-xl font-bold text-gray-800 mb-4" />
                    <stackLayout className="card p-4">
                        <gridLayout rows="auto, auto, auto" columns="24, *" className="gap-4">
                            <label row="0" col="0" text="🚗" className="text-lg" />
                            <label row="0" col="1" text="Parking couvert" className="text-gray-700" />
                            
                            <label row="1" col="0" text="⚡" className="text-lg" />
                            <label row="1" col="1" text="2 bornes de recharge" className="text-gray-700" />
                            
                            <label row="2" col="0" text="🎫" className="text-lg" />
                            <label row="2" col="1" text="Tarif: 2€/heure" className="text-gray-700" />
                        </gridLayout>
                    </stackLayout>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({});