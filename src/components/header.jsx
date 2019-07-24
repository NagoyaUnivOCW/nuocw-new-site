import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

const Header = ({ siteTitle }) => {
  const changeActive = e => {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      )

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            const target = el.dataset.target
            const $target = document.getElementById(target)

            el.classList.toggle("is-active")
            $target.classList.toggle("is-active")
          })
        })
      }
    })
  }

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Image
              src="common/logo.png"
              alt={siteTitle}
              style={{ height: "70px", width: "175px" }}
              imgStyle={{
                height: "70px",
                width: "175px",
                maxHeight: "100%",
              }}
            />
          </Link>
          <span
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
            onClick={changeActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="./">
              Home
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">授業を探す</span>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/">
                  カテゴリから探す
                </Link>
                <Link className="navbar-item" to="/">
                  学部／研究科から探す
                </Link>
                <Link className="navbar-item" to="/">
                  詳細検索
                </Link>
                <Link className="navbar-item" to="/">
                  最終講義
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">特集記事</span>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="./">
                  No.7 「0と1がつなぐ社会」
                </Link>
                <Link className="navbar-item" to="./">
                  過去のトピックス
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">初めての方へ</span>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="./">
                  名大の授業について
                </Link>
                <Link className="navbar-item" to="./">
                  用語解説
                </Link>
                <Link className="navbar-item" to="./">
                  ヘルプ
                </Link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">More</span>
              <div className="navbar-dropdown is-right">
                <Link className="navbar-item" to="/">
                  お問い合わせ
                </Link>
                <Link className="navbar-item" to="/">
                  教員の方へ
                </Link>
                <Link className="navbar-item" to="/">
                  リンク集
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/">
                  ENGLISH
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
