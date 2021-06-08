import axios from 'axios';

const BASE_URL = 'https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneIds=545,467,473';

export const getData = () => ( axios.get(BASE_URL) );


