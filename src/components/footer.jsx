import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import media from "./media"

const Footer = ({ siteTitle }) => (
  <footer>
    <Wrap>
      <FooterLink>
        <Box>
          <Li>授業を探す</Li>
          <Link to="/">
            <Li>カテゴリから探す</Li>
          </Link>
          <Link to="/">
            <Li>学部／大学院から探す</Li>
          </Link>
          <Link to="/">
            <Li>詳細検索</Li>
          </Link>
          <Link to="/">
            <Li>一分間授業紹介</Li>
          </Link>
        </Box>
        <Box>
          <Li>TOPICS</Li>
          <Link to="/">
            <Li>No.7 「0と1がつなぐ社会」</Li>
          </Link>
          <Link to="/">
            <Li>バックナンバー</Li>
          </Link>
          <Link to="/">
            <Li>留学生の声（英語版）</Li>
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Li>ごあいさつ</Li>
          </Link>
          <Link to="/">
            <Li>「名大の授業について」</Li>
          </Link>
          <Link to="/">
            <Li>用語解説</Li>
          </Link>
          <Link to="/">
            <Li>ヘルプ</Li>
          </Link>
          <Link to="/">
            <Li>お問い合わせ</Li>
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Li>教員の方へ</Li>
          </Link>
          <Link to="/">
            <Li>OCW公式Twitter（日本語版）</Li>
          </Link>
          <Link to="/">
            <Li>OCW公式Twitter（英語版）</Li>
          </Link>
          <Link to="/">
            <Li>OCW公式Facebook</Li>
          </Link>
          <Link to="/">
            <Li>English Page</Li>
          </Link>
        </Box>
      </FooterLink>
    </Wrap>
    <Wrap2>
      <Copyright>
        OCW website, and all course materials made public on this site,
        <br />
        may be used under the terms and conditions listed under "About OCW"
        <br />© 2020 Nagoya University
      </Copyright>
    </Wrap2>
  </footer>
)

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: rgba(35, 24, 21, 0.1);
`

const Wrap2 = styled.div`
  background-color: rgba(35, 24, 21, 0.2);
`

const FooterLink = styled.div`
  ${media("width", "1000px", "100vw", "100vw")}
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > div + div {
    border-left: 1px solid #666666;
    border-right: 0;
  }
`

const Box = styled.div`
  vertical-align: top;
  ${media("width", "250px", "25vw", "25vw")}
`

const Li = styled.li`
  list-style: none;
  margin: 10px;
  font-style: bold;
  color: #666666;
`

const Copyright = styled.div`
  ${media("width", "1000px", "100vw", "100vw")}
  padding: 30px 0;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  color: rgba(35, 24, 21, 1);
`

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
