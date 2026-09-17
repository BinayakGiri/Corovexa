// src/features/telemetry/telemetrySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pipelines: [
    {
      pipelineId: 'PL-101',
      location: 'Blast Furnace Feed',
      pipelineStatus: 'Critical',
      sensors: [
        { sensorId: 'PIPE-01', metric: 'Pressure', currentValue: 152, unit: 'kPa', thresholds: { warningMax: 140, criticalMax: 150 }, status: 'Active' },
        { sensorId: 'PIPE-02', metric: 'Temperature', currentValue: 85, unit: '°C', thresholds: { warningMax: 75, criticalMax: 90 }, status: 'Active' }
      ]
    },
    {
      pipelineId: 'PL-102',
      location: 'North Sector',
      pipelineStatus: 'Healthy',
      sensors: [
        { sensorId: 'PIPE-03', metric: 'Flow Rate', currentValue: 12.4, unit: 'm/s', thresholds: { warningMax: 15, criticalMax: 18 }, status: 'Active' }
      ]
    }
  ],
  activeAlerts: [
    { id: 1, timestamp: new Date().toISOString(), pipelineId: 'PL-101', severity: 'Critical', condition: 'Pressure exceeded 150 kPa', operationalImpact: 'Throughput reduced by 15%', isAcknowledged: false }
  ],
  kpis: {
    uptimePercentage: 98.4,
    onlineSensors: 3,
    mttr: 4.2, // hours
    mtbf: 720 // hours
  }
};

const telemetrySlice = createSlice({
  name: 'telemetry',
  initialState,
  reducers: {
    acknowledgeAlert: (state, action) => {
      const alert = state.activeAlerts.find(a => a.id === action.payload.alertId);
      if (alert) {
        alert.isAcknowledged = true;
        alert.acknowledgedBy = action.payload.userName;
      }
    },

    updateSensorThreshold: (state, action) => {
      const { pipelineId, sensorId, warningMax, criticalMax } = action.payload;
      const pipeline = state.pipelines.find(p => p.pipelineId === pipelineId);
      if (pipeline) {
        const sensor = pipeline.sensors.find(s => s.sensorId === sensorId);
        if (sensor) {
          sensor.thresholds = { 
            warningMax: Number(warningMax), 
            criticalMax: Number(criticalMax) 
          };
        }
      }
    }
  }
});

export const { acknowledgeAlert, updateSensorThreshold } = telemetrySlice.actions;
export default telemetrySlice.reducer;