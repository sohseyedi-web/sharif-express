import { SetStateAction, useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj";
import { Vector as VectorLayer } from "ol/layer";
import VectorSource from "ol/source/Vector";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Icon, Style } from "ol/style";

const MapComponent = ({
  setAddress,
}: {
  setAddress: React.Dispatch<SetStateAction<string>>;
}) => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const markerLayerRef = useRef<VectorLayer<VectorSource> | null>(null);

  useEffect(() => {
    if (mapElement.current) {
      const initialCoordinates = fromLonLat([48.6785, 31.350906]);

      const map = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: initialCoordinates,
          zoom: 12,
        }),
      });

      // Create a vector layer for markers
      const markerSource = new VectorSource();
      const markerLayer = new VectorLayer<VectorSource>({
        source: markerSource,
      });
      map.addLayer(markerLayer);
      markerLayerRef.current = markerLayer;

      // Add initial marker
      const initialMarker = new Feature({
        geometry: new Point(initialCoordinates),
      });
      initialMarker.setStyle(
        new Style({
          image: new Icon({
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
            anchor: [0.5, 1],
          }),
        })
      );
      markerSource.addFeature(initialMarker);

      // Add click event to set marker position and fetch address
      map.on("click", (event) => {
        const coordinates = event.coordinate;
        const lonLat = toLonLat(coordinates);

        // Remove existing features
        markerSource.clear();

        // Add new marker
        const newMarker = new Feature({
          geometry: new Point(coordinates),
        });
        newMarker.setStyle(
          new Style({
            image: new Icon({
              src: "https://openlayers.org/en/latest/examples/data/icon.png",
              anchor: [0.5, 1],
            }),
          })
        );
        markerSource.addFeature(newMarker);
        console.log(lonLat);

        // Fetch address
        fetch(
          `https://api.neshan.org/v5/reverse?lat=${lonLat[1]}&lng=${lonLat[0]}`,
          {
            headers: {
              "Api-Key": "service.8ead83ec778b4312834d4c829039f591",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data && data.formatted_address) {
              setAddress(data.formatted_address);
            } else {
              setAddress("آدرسی یافت نشد");
            }
          })
          .catch((error) => {
            console.error("Error fetching address:", error);
            setAddress("خطا در دریافت آدرس");
          });
      });

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.setTarget(undefined);
      }
    };
  }, [setAddress]);

  return (
    <div id="address">
      <div ref={mapElement} style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default MapComponent;
