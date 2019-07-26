import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Footer = ({ siteTitle }) => (
  <footer>
    <Footer1>
      <nav className="level">
        <div className="level-item">
          <ul className="has-text-justified content">
            <p>授業を探す</p>
            <p>
              <StyledLink to="/">カテゴリから探す</StyledLink>
            </p>
            <p>
              <StyledLink to="/">学部／大学院から探す</StyledLink>
            </p>
            <p>
              <StyledLink to="/">詳細検索</StyledLink>
            </p>
            <p>
              <StyledLink to="/">一分間授業紹介</StyledLink>
            </p>
          </ul>
        </div>

        <div className="level-item">
          <ul className="has-text-justified content">
            <p>TOPICS</p>
            <p>
              <StyledLink to="/">No.7 「0と1がつなぐ社会」</StyledLink>
            </p>
            <p>
              <StyledLink to="/">バックナンバー</StyledLink>
            </p>
          </ul>
        </div>

        <div className="level-item">
          <ul className="has-text-justified content">
            <p>
              <StyledLink to="/">ごあいさつ</StyledLink>
            </p>
            <p>
              <StyledLink to="/">「名大の授業について」</StyledLink>
            </p>
            <p>
              <StyledLink to="/">用語解説</StyledLink>
            </p>
            <p>
              <StyledLink to="/">ヘルプ</StyledLink>
            </p>
            <p>
              <StyledLink to="/">お問い合わせ</StyledLink>
            </p>
          </ul>
        </div>

        <div className="level-item">
          <ul className="has-text-justified content">
            <p>
              <StyledLink to="/">教員の方へ</StyledLink>
            </p>
            <p>
              <StyledLink to="/">OCW公式Twitter（日本語版）</StyledLink>
            </p>
            <p>
              <StyledLink to="/">OCW公式Twitter（英語版）</StyledLink>
            </p>
            <p>
              <StyledLink to="/">OCW公式Facebook</StyledLink>
            </p>
            <p>
              <StyledLink to="/">Engpsh Page</StyledLink>
            </p>
          </ul>
        </div>
      </nav>
    </Footer1>

    <Footer2>
      <div className="has-text-centered">
        OCW website, and all course materials made pubpc on this site,
        <br />
        may be used under the terms and conditions psted under "About OCW"
        <br />© 2020 Nagoya University
      </div>
    </Footer2>
  </footer>
)

const Footer1 = styled.div`
  padding: 3rem 1.5rem 6rem;
  background-color: #707070;
  color: #ffffff;
`

const Footer2 = styled.div`
  padding: 3rem 1.5rem 6rem;
  background-color: #323232;
  color: #ffffff;
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: underline;
`

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
