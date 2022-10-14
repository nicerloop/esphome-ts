export interface ListEntity {
    key: number;
    name: string;
    uniqueId: string;
    objectId: string;
}

export interface SensorEntity extends ListEntity {
    accuracyDecimals: number;
    deviceClass?: 'temperature' | 'humidity' | string;
    icon: string;
    unitOfMeasurement: string;
}

export interface BinarySensorEntity extends ListEntity {
    deviceClass: string;
}

export interface LightEntity extends ListEntity {
    effects: string[];
    supportsBrightness: boolean;
    supportsRgb: boolean;
}

export interface CoverEntity extends ListEntity {
    assumedState: boolean;
    supportsPosition: boolean;
    supportsTilt: boolean;
}

export type ComponentType = 'light' | 'binarySensor' | 'sensor' | 'switch' | 'cover';
