export interface Emergency {
    emergency: {
        emergencyId: string;
        requestTime: string;
    }
    device: {
        serialNumber: string;
    }
    holder: {
        firstName: string;
        lastName: string;
    }
}