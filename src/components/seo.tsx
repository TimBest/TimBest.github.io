import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface Props {
  title: string;
  description?: string
  lang: string
  meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[]
}

class SEO extends Component<Props> {

  static defaultProps = {
    lang: `en`,
    meta: []
  }

  render() {
    return (
      <StaticQuery
        query={detailsQuery}
        render={data => {
          const metaDescription =
            this.props.description || data.site.siteMetadata.description
          return (
            <Helmet
              htmlAttributes={{
                lang: this.props.lang,
              }}
              title={this.props.title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={this.props.meta.concat([
                  {
                    name: `description`,
                    content: metaDescription,
                  },
                  {
                    property: `og:title`,
                    content: this.props.title,
                  },
                  {
                    property: `og:description`,
                    content: metaDescription,
                  },
                  {
                    property: `og:type`,
                    content: `website`,
                  },
                  {
                    name: `twitter:card`,
                    content: `summary`,
                  },
                  {
                    name: `twitter:creator`,
                    content: data.site.siteMetadata.author,
                  },
                  {
                    name: `twitter:title`,
                    content: this.props.title,
                  },
                  {
                    name: `twitter:description`,
                    content: metaDescription,
                  },
                ])
              }
            />
          )
        }}
      />
    )
  }
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
