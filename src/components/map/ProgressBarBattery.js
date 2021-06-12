import styled from 'styled-components';
import { rangeBatteryLevel } from '../transportPublic/filters/rangeBatteryLevel';

const ProgressBarBattery = styled.span`
    display: inline-block;
    height: 100%;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
    transition: width .4s ease-in-out; 
    background-color: ${({ batteryLevel }) => batteryLevel <= rangeBatteryLevel.med ? 'rgb(243, 35, 35)' : 'rgb(132, 235, 15)'  };
    width: ${({ batteryLevel }) => batteryLevel <= rangeBatteryLevel.med ? '20px' : '50px'  }

    
`;

export default ProgressBarBattery;