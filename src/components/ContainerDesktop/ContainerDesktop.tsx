import React from 'react';

import { DesktopDashboard } from './components/DesktopDashboard/DesktopDashboard';
import { PreviewDashboard } from './components/PreviewDashboard/PreviewDashboard';
import './ContainerDeskop.css';

export const ContainerDesktop = () => (
  <div className={'container'}>
    <DesktopDashboard />
    <PreviewDashboard />
  </div>
);
