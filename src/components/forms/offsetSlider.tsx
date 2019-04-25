import React from 'react'

interface Props {
  maxOffset: number;
  onMaxOffsetChange: (padding: number) => void;
}

class OffsetSlider extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const padding = parseInt(event.target.value);
    this.props.onMaxOffsetChange(padding);
  }

  // TODO: support negative ranges
  render() {
    return (
      <>
        <input
          type="range"
          min="0"
          max="40"
          value={this.props.maxOffset}
          onChange={this.onChange.bind(this)}
        />
      </>
    );
  }
}

export default OffsetSlider;
