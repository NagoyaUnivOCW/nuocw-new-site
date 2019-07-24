import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

import media from "./media"
import Image from "./image"

const Header = ({ siteTitle }) => {
  const [search, setSearch] = useState("")
  const [contents, setContents] = useState("")

  return (
    <header>
      <WrapHeader>
        <Wraps>
          <WrapHorizontal>
            <WrapLogo>
              <Link to="/">
                <Image
                  src="common/logo.png"
                  alt={siteTitle}
                  style={{ height: "100px", width: "auto" }}
                />
              </Link>
            </WrapLogo>
            <WrapVertical>
              <WrapLink>
                <StyledLinkforLinkList to="/">
                  <LinkList>お問い合わせ</LinkList>
                </StyledLinkforLinkList>
                <StyledLinkforLinkList to="/">
                  <LinkList>教員の方へ</LinkList>
                </StyledLinkforLinkList>
                <StyledLinkforLinkList to="/">
                  <LinkList>リンク集</LinkList>
                </StyledLinkforLinkList>
                <StyledLinkforLinkList to="/">
                  <LinkList>ENGLISH</LinkList>
                </StyledLinkforLinkList>
              </WrapLink>
              <WrapMenu>
                <WrapMenuChildren>
                  <WrapMenuHorizontal>
                    <WrapMenuBox>
                      <WrapMenuBoxChildren>
                        <MenuTitle
                          className={search}
                          onClick={() =>
                            setSearch(search === "" ? "activated" : "")
                          }
                        >
                          授業を探す
                        </MenuTitle>
                        <MenuListBox>
                          <WrapMenuListBoxHorizontal>
                            <WrapMenuListBoxVertical>
                              <MenuSubtitle>授業を探す</MenuSubtitle>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("category")}
                                >
                                  カテゴリから探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("depertment")}
                                >
                                  学部／研究科から探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <StyledLinkforMenuList to="/" />
                                <MenuList>詳細検索</MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("farewell")}
                                >
                                  最終講義
                                </MenuList>
                              </WrapMenuList>
                            </WrapMenuListBoxVertical>
                            <MenuContents>{contents}</MenuContents>
                          </WrapMenuListBoxHorizontal>
                        </MenuListBox>
                      </WrapMenuBoxChildren>
                    </WrapMenuBox>
                    <WrapMenuBox>
                      <WrapMenuBoxChildren>
                        <MenuTitle
                          className={search}
                          onClick={() =>
                            setSearch(search === "" ? "activated" : "")
                          }
                        >
                          授業を探す
                        </MenuTitle>
                        <MenuListBox>
                          <WrapMenuListBoxHorizontal>
                            <WrapMenuListBoxVertical>
                              <MenuSubtitle>授業を探す</MenuSubtitle>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("category")}
                                >
                                  カテゴリから探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("depertment")}
                                >
                                  学部／研究科から探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <StyledLinkforMenuList to="/" />
                                <MenuList>詳細検索</MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("farewell")}
                                >
                                  最終講義
                                </MenuList>
                              </WrapMenuList>
                            </WrapMenuListBoxVertical>
                            <MenuContents>{contents}</MenuContents>
                          </WrapMenuListBoxHorizontal>
                        </MenuListBox>
                      </WrapMenuBoxChildren>
                    </WrapMenuBox>
                    <WrapMenuBox>
                      <WrapMenuBoxChildren>
                        <MenuTitle
                          className={search}
                          onClick={() =>
                            setSearch(search === "" ? "activated" : "")
                          }
                        >
                          授業を探す
                        </MenuTitle>
                        <MenuListBox>
                          <WrapMenuListBoxHorizontal>
                            <WrapMenuListBoxVertical>
                              <MenuSubtitle>授業を探す</MenuSubtitle>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("category")}
                                >
                                  カテゴリから探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("depertment")}
                                >
                                  学部／研究科から探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <StyledLinkforMenuList to="/" />
                                <MenuList>詳細検索</MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("farewell")}
                                >
                                  最終講義
                                </MenuList>
                              </WrapMenuList>
                            </WrapMenuListBoxVertical>
                            <MenuContents>{contents}</MenuContents>
                          </WrapMenuListBoxHorizontal>
                        </MenuListBox>
                      </WrapMenuBoxChildren>
                    </WrapMenuBox>
                    <WrapMenuBox>
                      <WrapMenuBoxChildren>
                        <MenuTitle
                          className={search}
                          onClick={() =>
                            setSearch(search === "" ? "activated" : "")
                          }
                        >
                          授業を探す
                        </MenuTitle>
                        <MenuListBox>
                          <WrapMenuListBoxHorizontal>
                            <WrapMenuListBoxVertical>
                              <MenuSubtitle>授業を探す</MenuSubtitle>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("category")}
                                >
                                  カテゴリから探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("depertment")}
                                >
                                  学部／研究科から探す
                                </MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <StyledLinkforMenuList to="/" />
                                <MenuList>詳細検索</MenuList>
                              </WrapMenuList>
                              <WrapMenuList>
                                <MenuList
                                  onClick={() => setContents("farewell")}
                                >
                                  最終講義
                                </MenuList>
                              </WrapMenuList>
                            </WrapMenuListBoxVertical>
                            <MenuContents>{contents}</MenuContents>
                          </WrapMenuListBoxHorizontal>
                        </MenuListBox>
                      </WrapMenuBoxChildren>
                    </WrapMenuBox>
                  </WrapMenuHorizontal>
                </WrapMenuChildren>
              </WrapMenu>
            </WrapVertical>
          </WrapHorizontal>
        </Wraps>
      </WrapHeader>
    </header>
  )
}

const WrapHeader = styled.div`
  background: rgba(0, 110, 79, 1);
`

const Wraps = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 15px 0;
  ${media("width", "1100px", "110vw", "110vw")}
  height: 110px;
`

const WrapHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const WrapLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 800px;
`

const WrapLink = styled.div`
  text-align: right;
  margin: 10px 0;
`

const StyledLinkforLinkList = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #231815;
    text-decoration: underline;
  }
`

const LinkList = styled.div`
  font-size: 14px;
  list-style: none;
  display: inline-block;
  margin: 0 15px;
  &::before {
    content: "▲";
    margin-right: 5px;
  }
`

const WrapMenu = styled.div`
  width: 100%;
  height: 50px;
`

const WrapMenuChildren = styled.div`
  ${media("font-size", "16px", "1.6vw", "1.6vw")}
  height: 50px;
  margin: 0 auto;
  text-align: left;
`

const WrapMenuHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const WrapMenuBox = styled.div`
  ${media("flex-basis", "150px", "15vw", "15vw")}
`

const WrapMenuBoxChildren = styled.div`
  display: inline-block;
  vertical-align: top;
`

const MenuListBox = styled.div`
  display: block;
  position: absolute;
  top: 107px;
  left: 0;
  margin-top: 15px;
  padding: 15px 0px;
  border-top: transparent 15px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  height: auto;
  ${media("width", "1050px", "105vw", "105vw")}
  z-index: 2;
  border-radius: 10px;
  & div {
    opacity: 0;
  }
`

const MenuTitle = styled.div`
  height: 50px;
  ${media("width", "150px", "15vw", "15vw")}
  color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  border-left: 1px solid #ffffff;
  border-right: 0;
  &:hover {
    background-color: rgba(0, 80, 49, 1);
    transition: background-color 0.5s linear;
  }
  &::before {
    position: relative;
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 10px 5px 0;
    vertical-align: middle;
    background-image: "";
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transform: rotateX(180deg);
    transform-origin: center;
    transition: transform 0.2s ease-in-out 0s;
  }
  &::after {
    position: absolute;
    content: "";
    top: 92px;
    left: 50%;
    margin-left: -90px;
    border: 15px solid transparent;
    border-bottom: 15px solid rgba(0, 0, 0, 0.8);
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out 0s;
  }
  & + ${MenuListBox} {
    transform: scale(0.001, 0);
    transform-origin: calc(50% - 75px) 0;
    transition: transform 0.2s ease-in-out 0s;
  }
  &.activated {
    background-color: rgba(0, 80, 49, 1);
    transition: background-color 0.5s linear;
  }
  &.activated::before {
    transform: rotateX(0deg);
    transform-origin: center;
    transition: transform 0.5s ease-in-out 0s;
  }
  &.activated::after {
    transform: scaleX(1);
    transition: transform 0.5s ease-in-out 0.2s;
  }
  &.activated + ${MenuListBox} {
    transform: scale(1, 1);
    transform-origin: calc(50% - 75px) 0;
    transition: transform 0.5s ease-in-out 0.2s;
  }
  &.activated + ${MenuListBox} div {
    opacity: 1;
    transition: opacity 0.5s linear 0.7s;
  }
`

const WrapMenuListBoxHorizontal = styled.div`
  display: flex;
  flex-direction: row;
`

const WrapMenuListBoxVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  border-right: 1px solid #ffffff;
`

const MenuSubtitle = styled.div`
  list-style: none;
  padding: 15px;
  color: rgba(255, 255, 255, 1);
`

const MenuList = styled.div`
  list-style: none;
  padding: 10px 30px 10px 15px;
  color: rgba(255, 255, 255, 1);
  ${media("font-size", "14px", "1.4vw", "1.4vw")}
  &::after {
    position: absolute;
    content: ">";
    right: 0;
    margin: 0 10px 0 10px;
  }
`

const WrapMenuList = styled.div`
  position: relative;
  cursor: pointer;
  &:hover ${MenuList} {
    color: rgba(255, 255, 255, 0.5);
  }
`

const StyledLinkforMenuList = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & + ${MenuList}::after {
    position: absolute;
    content: "";
    right: 0;
    margin: 0 10px 0 10px;
  }
`

const MenuContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  color: rgba(255, 255, 255, 1);
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
