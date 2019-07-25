import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer has-background-white-ter">
      <nav className="level">
        <div className="level-item">
          <ul className="has-text-justified content">
            <p>授業を探す</p>
            <p>
              <Link to="./">カテゴリから探す</Link>
            </p>
            <p>
              <Link to="./">学部／大学院から探す</Link>
            </p>
            <p>
              <Link to="./">詳細検索</Link>
            </p>
            <p>
              <Link to="./">一分間授業紹介</Link>
            </p>
          </ul>
        </div>

        <div className="level-item">
          <ul className="has-text-justified content">
            <p>TOPICS</p>
            <p>
              <Link to="./">No.7 「0と1がつなぐ社会」</Link>
            </p>
            <p>
              <Link to="./">バックナンバー</Link>
            </p>
          </ul>
        </div>

        <div className="level-item">
          <ul className="has-text-justified content">
            <p>
              <Link to="./">ごあいさつ</Link>
            </p>
            <p>
              <Link to="./">「名大の授業について」</Link>
            </p>
            <p>
              <Link to="./">用語解説</Link>
            </p>
            <p>
              <Link to="./">ヘルプ</Link>
            </p>
            <p>
              <Link to="./">お問い合わせ</Link>
            </p>
          </ul>
        </div>

        <div className="level-item">
          <ul className="has-text-justified content">
            <p>
              <Link to="./">教員の方へ</Link>
            </p>
            <p>
              <Link to="./">OCW公式Twitter（日本語版）</Link>
            </p>
            <p>
              <Link to="./">OCW公式Twitter（英語版）</Link>
            </p>
            <p>
              <Link to="./">OCW公式Facebook</Link>
            </p>
            <p>
              <Link to="./">Engpsh Page</Link>
            </p>
          </ul>
        </div>
      </nav>
    </div>

    <div className="footer has-background-grey-lighter">
      <div className="has-text-centered">
        OCW website, and all course materials made pubpc on this site,
        <br />
        may be used under the terms and conditions psted under "About OCW"
        <br />© 2020 Nagoya University
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
