import * as React from 'react'
import SEO from '../components/seo'
import '../static/adoorable.css'

interface ADoorIs {
  text: string;
  className: string;
}

const insta = "https://www.instagram.com/an.adoorable.world/"
const aDoorIs: ADoorIs[] = [
  { text: "Janus", className: "five" },
  { text: "a home", className: "six" },
  { text: "an exit", className: "seven" },
  { text: "the past", className: "eight" },
  { text: "a portal", className: "eight" },
  { text: "a passage", className: "nine" },
  { text: "a barrier", className: "nine" },
  { text: "a mystery", className: "nine" },
  { text: "the future", className: "eleven" },
  { text: "an entrance", className: "eleven" },
  { text: "an opportunity", className: "fourteen" },
]


interface QuoteProps {
  text: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => (
  <div className="quote">
    <div className="body">
      <div className="open-quote">❝</div>
      <div className="text">{text}</div>
    </div>
    <div className="author">- {author}</div>
  </div>
)


const getRandomDescriptor = (exclude?: ADoorIs) => {
  if (aDoorIs.length < 2) {
    return aDoorIs[0]
  }
  let descriptor = exclude
  while (descriptor === exclude) {
    descriptor = aDoorIs[Math.floor(Math.random() * aDoorIs.length)]
  }
  return descriptor!
}


const Adoorable: React.FC = () => {
  const [descriptor, setDescriptor] = React.useState<ADoorIs>(
    aDoorIs[Math.floor(Math.random() * aDoorIs.length)]
  )

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setDescriptor(prev => getRandomDescriptor(prev))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="adoorable">
      <SEO title="@an.adoorable.world"/>
      <div className="container">
        <div className="subtitle">
          <h2>A door is </h2>
          <div className={`typewriter ${descriptor.className}`}>{descriptor.text}</div>
        </div>
        <p>
          <a href={insta} target="_blank" rel="noopener noreferrer">@an.adoorable.world</a> is an instagram profile with a curated list of the BEST doors. Follow me and part take
          on a journey as we explore the doors of this world to find the truth of what it means to be a door.
        </p>
        <h3>What the fans are saying</h3>
        <Quote text="Lol this is the most Tim thing I have heard!!" author="Amit" />
        <Quote text="A picture with YOU in it! Yay! " author="Leslie" />
        <Quote text="did you follow Tim? OR AN INSTAGRAM ACCOUNT ABOUT DOORS?!?!" author="Katherine" />
        <Quote text="Matches your Instagram username on multiple levels" author="Nick" />
        <Quote text="Hah" author="Jake" />
        <Quote text="All of those are amazing" author="John" />
        <Quote text="😮" author="Steve" />
        <Quote text="The colors and textures in this one are really captivating !" author="Jayna" />
        <Quote text="*" author="Roland" />
        <Quote text="Beautiful" author="Liz" />
      </div>
    </div>
  )
}

export default Adoorable
