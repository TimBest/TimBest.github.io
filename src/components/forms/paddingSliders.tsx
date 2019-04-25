import React from 'react'

interface Props {
  paddingX: number;
  paddingY: number;
  onXChange: (padding: number) => void;
  onYChange: (padding: number) => void;
}

class PaddingSliders extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
  }

  onChange(
    axis: "x" | "y",
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const padding = parseInt(event.target.value);
    if (axis === "x") {
      this.props.onXChange(padding);
    } else {
      this.props.onYChange(padding);
    }
  }


  render() {
    return (
      <>
        <input
          type="range"
          min="0"
          max="100"
          value={this.props.paddingX}
          onChange={this.onChange.bind(this, "x")}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={this.props.paddingY}
          onChange={this.onChange.bind(this, "y")}
        />
      </>
    );
  }
}

export default PaddingSliders
