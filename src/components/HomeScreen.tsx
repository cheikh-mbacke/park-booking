import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Search, Map } from "lucide-react";

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
      <gridLayout rows="*, auto">
        <scrollView row="0" className="page">
          {/* Header avec dégradé */}
          <stackLayout className="gradient-header p-8 pb-16">
            <gridLayout rows="auto, auto" columns="*, auto" className="mb-4">
              <label
                row="0"
                col="0"
                text="OptiFeux"
                className="text-white font-bold text-2xl"
              />
              <button row="0" col="1" text="☰" className="text-white text-xl" />
              <label
                row="1"
                col="0"
                text="Trouvez votre place facilement"
                className="text-white opacity-80 mt-1"
              />
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
                <label
                  text={parkingStats.availableSpots.toString()}
                  className="text-2xl font-bold text-blue-600"
                />
                <label text="Places libres" className="text-sm text-gray-600" />
              </stackLayout>
              <stackLayout col="1" className="stat-card m-2 p-4">
                <label text="⚡" className="text-2xl mb-2" />
                <label
                  text={parkingStats.chargingStations.toString()}
                  className="text-2xl font-bold text-green-600"
                />
                <label
                  text="Bornes disponibles"
                  className="text-sm text-gray-600"
                />
              </stackLayout>
            </gridLayout>

            {/* Liste des zones */}
            <stackLayout className="px-4">
              <label
                text="Zones de stationnement"
                className="text-xl font-bold text-gray-800 mb-4"
              />
              {parkingStats.zones.map((zone) => (
                <gridLayout
                  key={zone.id}
                  columns="*, auto"
                  className="card p-4 mb-3"
                  onTap={() =>
                    navigation.navigate("Zone Details", { zoneId: zone.id })
                  }
                >
                  <stackLayout col="0">
                    <label
                      text={zone.name}
                      className="text-lg font-bold text-gray-800"
                    />
                    <gridLayout columns="auto, auto" className="mt-2">
                      <label
                        col="0"
                        text={`${zone.available}/${zone.total}`}
                        className="text-blue-600 font-bold"
                      />
                      <label col="1" text=" places" className="text-gray-600" />
                    </gridLayout>
                  </stackLayout>
                  <stackLayout col="1" verticalAlignment="center">
                    <label
                      text={zone.available > 5 ? "✓ Disponible" : "× Limité"}
                      className={`text-sm text-white px-4 py-2 rounded-full ${
                        zone.available > 5 ? "bg-green-500" : "bg-red-500"
                      }`}
                      style={{ textAlign: "center", minWidth: 80 }}
                    />
                  </stackLayout>
                </gridLayout>
              ))}
            </stackLayout>
          </stackLayout>
        </scrollView>

        {/* Barre de navigation en bas */}
        <gridLayout
          row="1"
          columns="*, *, *"
          className="bg-white border-t border-gray-200 gridLayout"
        >
          <stackLayout
            col="0"
            className="stackLayout"
            onTap={() => console.log("Search tapped")}
          >
            <label text="🔍" className="text-2xl" />
            <label text="Recherche" className="text-xs text-gray-600" />
          </stackLayout>

          <stackLayout
            col="1"
            className="stackLayout"
            onTap={() => console.log("Map tapped")}
          >
            <label text="🗺️" className="text-2xl" />
            <label text="Carte" className="text-xs text-gray-600" />
          </stackLayout>

          <stackLayout
            col="2"
            className="stackLayout"
            onTap={() => console.log("Settings tapped")}
          >
            <label text="⚙️" className="text-2xl" />
            <label text="Paramètres" className="text-xs text-gray-600" />
          </stackLayout>
        </gridLayout>
      </gridLayout>
    );
}

const styles = StyleSheet.create({});