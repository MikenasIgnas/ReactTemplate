import React from 'react';
import { Descriptions } from 'antd';
import { useAppSelector } from '../../../store/hooks';

const RouteNumber = () => {
  const routeNumber = useAppSelector((state) => state.route.routeNumber);

  return (
    <Descriptions.Item label="Maršrutas">
      Maršrutas:
      {routeNumber}
    </Descriptions.Item>
      );
};

export default RouteNumber;
