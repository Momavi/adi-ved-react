import { Map, Placemark } from "@pbe/react-yandex-maps";

function Ymap() {
  return (
    <Map
      className="h-full w-full"
      defaultState={{
        center: [55.71125, 37.880491],
        zoom: 18,
        controls: ["zoomControl", "fullscreenControl"],
      }}
      modules={["control.ZoomControl", "control.FullscreenControl"]}
    >
      <Placemark defaultGeometry={[55.71125, 37.880491]} />
    </Map>
  );
}

export default Ymap