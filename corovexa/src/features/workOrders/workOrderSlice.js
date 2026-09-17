// src/features/workOrders/workOrderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [
    { 
      workOrderId: 'WO-201', 
      targetPipeline: 'PL-101', 
      targetSensor: 'PIPE-01', 
      priority: 'High', 
      assignedTechnician: 'Marcus Torres', 
      jobStatus: 'In Progress', 
      workType: 'Reactive',
      createdAt: new Date().toISOString()
    },
    { 
      workOrderId: 'WO-202', 
      targetPipeline: 'PL-102', 
      targetSensor: 'PIPE-03', 
      priority: 'Low', 
      assignedTechnician: 'Priya Patel', 
      jobStatus: 'Open', 
      workType: 'Planned',
      createdAt: new Date().toISOString()
    }
  ]
};

const workOrderSlice = createSlice({
  name: 'workOrders',
  initialState,
  reducers: {
    dispatchWorkOrder: (state, action) => {
      state.jobs.unshift({
        workOrderId: `WO-${Math.floor(Math.random() * 1000) + 300}`,
        ...action.payload,
        jobStatus: 'Open',
        createdAt: new Date().toISOString()
      });
    },
    updateJobStatus: (state, action) => {
      const job = state.jobs.find(j => j.workOrderId === action.payload.workOrderId);
      if (job) job.jobStatus = action.payload.status;
    }
  },
});

export const { dispatchWorkOrder, updateJobStatus } = workOrderSlice.actions;
export default workOrderSlice.reducer;