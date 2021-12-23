import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Seo title="Home" />
      {/* bottom layer */}
      {/* <div 
        className='bottom-layer' 
        style={{
          height: `100vh`,
          width: `100vw`,
          position: `absolute`,
          top: 0,
          left: 0
      }}>
        <div 
          className='vertical'
          style={{ 
            background:`#707070`,
            width:`1px`,
            position: `absolute`,
            height:`100%`,
            left:`50%`,
            opacity: .3 }} 
        />
        <div 
          className='horizontal'
          style={{ 
            background:`#707070`,
            height:`1px`,
            position: `absolute`,
            width:`100%`,
            top:`60vh`,
            opacity: .3,
            transformOrigin: `0 50%` }} 
        />l
        <ul 
          className='numbers' 
          style={{ 
            display: `flex`, 
            top: `33vh`, 
            width: `100%`, 
            position:`absolute`, 
            justifyContent: `space-between`,
            listStyle: `none`
          }}>
            <li style={{ color:`#707070`, opacity: .3 }}>01</li>
            <li style={{ color:`#707070`, opacity: .3 }}>02</li>
            <li style={{ color:`#707070`, opacity: .3 }}>03</li>
            <li style={{ color:`#707070`, opacity: .3 }}>04</li>
            <li style={{ color:`#707070`, opacity: .3 }}>05</li>
            <li style={{ color:`#707070`, opacity: .3 }}>06</li>
            <li style={{ color:`#707070`, opacity: .3 }}>07</li>
            <li style={{ color:`#707070`, opacity: .3 }}>08</li>
            <li style={{ color:`#707070`, opacity: .3 }}>09</li>
            <li style={{ color:`#707070`, opacity: .3 }}>10</li>
          </ul>
      </div> */}

    {/* content */}

        {/* image and title */}
        <div style={{
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          zIndex: `1`,
          display: `flex`,
          justifyContent: `space-between`,
          flexDirection: `column`,
          width: `50vw`,
        }}>
          <StaticImage
            src="../images/home.png"
            width={1000}
            height={700}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="home image"
            style={{ 
              marginBottom: 0,
              maxWidth: `100%`
            }}
          />
          {/* <div style={{ 
              display: `flex`, 
              flexDirection: `column`, 
              justifyContent: `flex-end`,
            }}>
                <p style={{ color: `white`, }}>Dev / Animation</p>
                <p style={{ color: `white`,  paddingTop:`0.1rem` }}>Visual and experience design</p>      
            </div> */}
        </div>

        <div style={{
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          zIndex: `2`,
          display: `flex`,
          justifyContent: `space-between`,
          flexDirection: `row`
        }}>
            <h1 style={{
                color: `white`,
                fontSize: `6vw`,
                paddingRight: `25rem`,
                textAlign:`left`
              }}>GARETH</h1>
            <h1 style={{
                color: `white`,
                WebkitTextFillColor:`transparent`,
                fontSize: `6vw`,
                textAlign:`right`,
                WebkitTextStrokeWidth:`1px`
              }}>VEALE</h1>
        </div>
  </Layout>
)

export default IndexPage
