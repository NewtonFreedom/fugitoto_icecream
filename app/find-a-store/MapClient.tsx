"use client";

import { useEffect, useRef } from "react";

type Store = { name: string; addr: string; latlng: [number, number] };
export default function MapClient({ stores }: { stores: Store[] }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      const map = L.map(mapRef.current!, { scrollWheelZoom: false }).setView(
        [-36.8485, 174.7633],
        12
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
      }).addTo(map);

      const markers = stores.map((s) =>
        L.marker(s.latlng as any).bindPopup(`<strong>${s.name}</strong><br>${s.addr}`)
      );

      const group = L.featureGroup(markers).addTo(map);
      map.fitBounds(group.getBounds().pad(0.25));
    })();
  }, [stores]);

  return (
    <div
      ref={mapRef}
      style={{ height: 420, borderRadius: 16, overflow: "hidden" }}
    />
  );
}
