import styled from 'styled-components';
import { rangeBatteryLevel } from '../transportPublic/filters/rangeBatteryLevel';

const ProgressBarBattery = styled.span`
    display: inline-block;
    height: 100%;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
    transition: width .4s ease-in-out; 

    background-color: ${({ batteryLevel }) => batteryLevel <= rangeBatteryLevel.med && 'rgb(243, 35, 35)' }; 
    background-color: ${({ batteryLevel }) => batteryLevel > rangeBatteryLevel.max && 'rgb(132, 235, 15)' };
    background-color: ${({ batteryLevel }) => ((batteryLevel > rangeBatteryLevel.med &&  batteryLevel <= rangeBatteryLevel.max) && '#fd9253' )};
    
    width: ${({ batteryLevel }) => batteryLevel <= rangeBatteryLevel.med && '20px'};
    width: ${({ batteryLevel }) => ((batteryLevel > rangeBatteryLevel.med &&  batteryLevel <= rangeBatteryLevel.max) && '30px')};
    width: ${({ batteryLevel }) => batteryLevel > rangeBatteryLevel.max && '50px'};
    
`;

export default ProgressBarBattery;