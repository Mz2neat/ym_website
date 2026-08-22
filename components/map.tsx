"use client";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function CustomMap({ neighbournets }: { neighbournets: any[] }) {

    return (
     <div className="h-[500px] w-full overflow-hidden relative rounded-xl border border-[#2683EB]">

        <MapContainer 
            center={[56.1304, -106.3468]} 
            zoom={4} 
            scrollWheelZoom={false} // FIX: Prevents the map from hijacking the mouse wheel while scrolling the page
            style={{ height: "100%", width: "100%" }}
        >

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {neighbournets?.map((neighbournet) => (
              neighbournet.latitude && neighbournet.longitude && (
                <Marker
                key={neighbournet.neighbournet_id}
                position={[neighbournet.latitude, neighbournet.longitude]}
                icon={customIcon}
                >
                  
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold text-sm text-[#04143d]">
                        YM {neighbournet.neighbournet_name}
                      </h3>
                      <p className="text-xs text-gray-500 m-0">
                        {neighbournet.neighbournet_name}
                      </p>
                    </div>
                  </Popup>
                  </Marker>
              )
            ))}

        </MapContainer>
    </div>
  );
}