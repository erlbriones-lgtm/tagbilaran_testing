declare module 'react-img-mapper' {
  import React from 'react';

  export interface CustomArea {
    id?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    shape: 'rect' | 'circle' | 'poly';
    coords: number[];
    fillColor?: string;
    strokeColor?: string;
    lineWidth?: number;
    preFillColor?: string;
    disabled?: boolean;
    active?: boolean;
    [key: string]: any;
  }

  export interface Map {
    name: string;
    areas: CustomArea[];
  }

  export interface ImageMapperProps {
    src: string;
    map: Map;
    onClick?: (area: CustomArea, index: number, event: React.MouseEvent) => void;
    onMouseEnter?: (area: CustomArea, index: number, event: React.MouseEvent) => void;
    onMouseLeave?: (area: CustomArea, index: number, event: React.MouseEvent) => void;
    onMouseMove?: (area: CustomArea, index: number, event: React.MouseEvent) => void;
    onMouseDown?: (area: CustomArea, index: number, event: React.MouseEvent) => void;
    onMouseUp?: (area: CustomArea, index: number, event: React.MouseEvent) => void;
    onLoad?: () => void;
    active?: boolean;
    disabled?: boolean;
    fillColor?: string;
    strokeColor?: string;
    lineWidth?: number;
    imgWidth?: number;
    width?: number;
    height?: number;
    natural?: boolean;
    responsive?: boolean;
    parentWidth?: number;
    stayHighlighted?: boolean;
    stayMultiHighlighted?: boolean;
    toggleHighlighted?: boolean;
    rerenderProps?: any[];
  }

  const ImageMapper: React.FC<ImageMapperProps>;
  export default ImageMapper;
}
