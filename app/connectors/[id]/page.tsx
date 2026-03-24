import React from 'react';
import { CONNECTORS } from '../utils/connectors';

export function generateStaticParams() {
  return CONNECTORS.map((connector) => ({
    id: connector.id,
  }));
}

// Other existing code...