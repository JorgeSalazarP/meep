import React from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from "use-supercluster";
import credentials from './credentials';
import Marker from './Marker';
import Popup from './Popup';

const Map = ({ mapData })=>{

  
  const [zoom,setZoom] = React.useState(10);
  const [bounds,setBounds] = React.useState(null);

 
  const points = mapData.map(transport=>({

    properties:{
      cluster: false,
      transportId: transport.id,
      batteryLevel:transport.batteryLevel,
   
      
    },
    geometry:{  
      coordinates:[transport.x,transport.y]
    }
    
  }));



  const {clusters} = useSupercluster({
    points,
    bounds,
    zoom,
    options:{radius: 75, maxZoom: 20}
  });

  return (

    <GoogleMapReact
        bootstrapURLKeys={{key: credentials.mapsKey }} // {key:procces.env.REACT_APP_API_GOOGLE_KEY}
        defaultCenter={{lat: 38.711046 , lng: -9.160096}}
        defaultZoom={12}
        onChange={({zoom,bounds})=>{
            setZoom(zoom);
            setBounds([
                bounds.nw.lng,
                bounds.se.lat,
                bounds.se.lng,
                bounds.nw.lat
            ]);
        }}
       
    >
        { clusters.map(cluster=>{
                  
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } = cluster.properties;

            if (isCluster) {
                return(
                    <Marker 
                        key={`cluster-${cluster.id}`}
                        lat={latitude}
                        lng={longitude}
                    >
                        <div
                            className="cluster-marker"
                            style={{
                                width: `${10 + (pointCount / points.length) * 20}px`,
                                height: `${10 + (pointCount / points.length) * 20}px`
                            }}
                        >
                            {pointCount}

                        </div>
                    </Marker>
                )
            }

            return(
                <Marker
                    key={cluster.properties.transportId}
                    lat={longitude + 47.87}
                    lng={latitude - 47.87}
                >   
                   
                    <Popup
                    
                        batteryLevel={cluster.properties.batteryLevel}
                       
                    />
                    
                </Marker>
            )})
                    
        }

    </GoogleMapReact>

  );
}

export default Map;
