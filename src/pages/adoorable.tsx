import * as React from 'react'
import SEO from '../components/seo'
import '../images/adoorable.css'

interface ADoorIs {
  text: string;
  className: string;
}

const aDoorIs: ADoorIs[] = [
  {
    text: "a portal",
    className: "portal"
  },
  {
    text: "an opportunity",
    className: "opportunity"
  },
  {
    text: "a portal",
    className: "portal"
  },
  {
    text: "a mystery",
    className: "mystery"
  },
  {
    text: "a home",
    className: "home"
  },
]

interface Props {} 


interface State {
  descriptor: ADoorIs;
} 

export default class Adoorable extends React.Component<Props, State> {
  insta = "https://www.instagram.com/a_door.able/"

  constructor(props: Props) {
    super(props)
    this.state = {
      descriptor: aDoorIs[Math.floor(Math.random()*aDoorIs.length)]
    }
  }

  componentDidMount() {
    window.setInterval(() => {
      if (aDoorIs.length < 2) {
        return
      }
      let descriptor = this.state.descriptor
      while (descriptor === this.state.descriptor) {
        descriptor = aDoorIs[Math.floor(Math.random()*aDoorIs.length)]

      }
      this.setState({descriptor})
    }, 4000)
  }

  render =() => (
    <div className="adoorable">
      <SEO title="@a_door.able"/>
      <div className="container">
        <div className="subtitle">
          <h2>A door is </h2>
          <div className={`typewriter ${this.state.descriptor.className}`}>{this.state.descriptor.text}</div>
        </div>
        <p>
        <a href={this.insta} target="_blank">@a_door.able</a> is an instagram profile with a curated list of the BEST doors. Follow me and part take
          on a journey as we explore the doors of this world to find the truth of what it means to be a door.
        </p>
        <h3>What the fans are saying</h3>
        <div className="quote">
          <div className="body">
            <div className="open-quote">❝</div>
            <div className="text">Lol this is the most Tim thing I have heard!!</div>
          </div>
          <div className="author">- Amit</div>
        </div>
        <div className="quote">
          <div className="body">
            <div className="open-quote">❝</div>
            <div className="text">Hah</div>
          </div>
          <div className="author">- Jake</div>
        </div>
        <div className="quote">
          <div className="body">
            <div className="open-quote">❝</div>
            <div className="text">All of those are amazing</div>
          </div>
          <div className="author">- John</div>
        </div>
        <div className="quote">
          <div className="body">
            <div className="open-quote">❝</div>
            <div className="text">did you follow Tim? OR AN INSTAGRAM ACCOUNT ABOUT DOORS THAT MOVES INTO THE META OF DOORS????</div>
          </div>
          <div className="author">- Kathrine</div>
        </div>
      </div>
    </div>
  )
}

