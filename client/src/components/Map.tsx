import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: unknown) => void;
}

export function MapView({ className }: MapViewProps) {
  return (
    <iframe
      src="https://maps.google.com/maps?q=3927+Saint+Elmo+Ave,+Chattanooga,+TN+37412&z=15&output=embed"
      className={cn("w-full h-full border-0 min-h-96", className)}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Smash Boyz Burgers Location"
    />
  );
}
