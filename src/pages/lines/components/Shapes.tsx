import * as React from 'react'

interface Props {
  backgroundSize: number,
  fill: string,
  rotation: number,
  rotationCenter: number
}

const ShapeBase: React.FC<React.PropsWithChildren<Props>> = ({
  backgroundSize,
  rotation,
  rotationCenter,
  children
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 400 400"
      height={backgroundSize}
      width={backgroundSize}
    >
      <g
        transform={`rotate(${rotation}, ${rotationCenter}, ${rotationCenter})`}
      >
      {children}
      </g>
    </svg>
  );
}

const Diagonal: React.FC<Props> = (props) => {
  return (
    <ShapeBase {...props}>
        <path d="M12 5 H395 V388 Z" fill={props.fill} />
        <path d="M5 12 V395 H388 Z" fill={props.fill} />
    </ShapeBase>
  );
}

const DoubleDiagonal: React.FC<Props> = (props) => {
  return (
    <ShapeBase {...props}>
      <path d="M12 5 H395 V188 Z" fill={props.fill} />
      <path d="M5 12 V195 H388 Z" fill={props.fill} />
      <path d="M12 205 H395 V388 Z" fill={props.fill} />
      <path d="M5 212 V395 H388 Z" fill={props.fill} />
    </ShapeBase>
  );
}

const Wedge: React.FC<Props> = (props) => {
  return (
    <ShapeBase {...props}>
        <path d="M5 188 V5 H388 Z" fill={props.fill} />
        <path d="M8.5 200 L395 12 V388 Z" fill={props.fill} />
        <path d="M5 212 V395 H388 Z" fill={props.fill} />
    </ShapeBase>
  );
}

const WedgeAndLine: React.FC<Props> = (props) => {
  return (
    <ShapeBase {...props}>
        <path d="M5 188 V5 H388 Z" fill={props.fill} />
        <path d="M12 195 H395 V12 Z" fill={props.fill} />
        <path d="M12 205 H395 V388 Z" fill={props.fill} />
        <path d="M5 212 V395 H388 Z" fill={props.fill} />
    </ShapeBase>
  );
}

const TwoRectangles: React.FC<Props> = (props) => {
  return (
    <ShapeBase {...props}>
        <path d="M5 5 V395 h190 V5 Z" fill={props.fill} />
        <path d="M205 5 V395 h190 V5 Z" fill={props.fill} />
    </ShapeBase>
  );
}

const ThreeRectangles: React.FC<Props> = (props) => {
  return (
    <ShapeBase {...props}>
        <path d="M5 5 V395 h123.3 V5 Z" fill={props.fill} />
        <path d="M138.3 5 V395 h123.3 V5 Z" fill={props.fill} />
        <path d="M271.6 5 V395 h123.3 V5 Z" fill={props.fill} />
    </ShapeBase>
  );
}

const FourRectangles: React.FC<Props> = (props) => {
  return (
    <ShapeBase {...props}>
        <path d="M5 5 V395 h87.5 V5 Z" fill={props.fill} />
        <path d="M105 5 V395 h87.5 V5 Z" fill={props.fill} />
        <path d="M205 5 V395 h87.5 V5 Z" fill={props.fill} />
        <path d="M305 5 V395 h87.5 V5 Z" fill={props.fill} />
    </ShapeBase>
  );
}

const Shapes = [
  Diagonal,
  DoubleDiagonal,
  Wedge,
  WedgeAndLine,
  TwoRectangles,
  ThreeRectangles,
  FourRectangles,
]
export default Shapes;
