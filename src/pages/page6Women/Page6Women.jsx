import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ButtonWithIcon from '../../components/UI/buttonWithIcon/ButtonWithIcon'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { Link } from 'react-router-dom'
import { PageHistory, CounterContext, UserAnswer } from '../../context'
import {css, StyleSheet} from 'aphrodite/no-important'

function Page6Women() {
  const page = 'Page6Women'
  let { ans, setAns } = useContext(UserAnswer)
  let { pages, setPages } = useContext(PageHistory)
  let { counter, setCounter } = useContext(CounterContext)
  function nextPage(value, choiceAns = false, count = false) {
    if (count) {
      setCounter(counter += 1)
      window.sessionStorage.setItem('counter', JSON.stringify(counter))
    }
    setPages(pages => [...pages, page])
    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
    if (choiceAns) {
      setAns(ans => Object.assign({}, ans, value))
      window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, value)))
    }
  }
  const styles = StyleSheet.create({
    page :{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      textDecoration: 'none',
  }
  })
  return (
    <section className={css(styles.page)}>
      <TitlePage text={"Every face shape has a perfect fit. What’s yours?"} />
      <Link style={{textDecoration: 'none'}}to="/Page7">
        <ButtonWithIcon onClick={() => {
          nextPage({ 'face_shape': 'long' }, true, true)
        }} style={{ marginBottom: '14px' }} url={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA0OCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Im92YWwiPgo8cGF0aCBpZD0iRmlsbCAxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjAwNTggNDcuMTU3MkM0My4yOTkgNDYuNTQwOSA0Ni42MDUxIDQ0LjYxODkgNDcuNjAwNyA0My43Mjk1TDQ1Ljk4MzQgNDIuMjMwMUM0Ni43NjI1IDQyLjc2NTEgNDcuNDYzMiA0My4xMDk4IDQ3Ljk2OTkgNDMuMzIwNkM0Ny45OTE4IDQzLjI4NzEgNDggNDMuMjY4NiA0OCA0My4yNjg2QzQ1LjgxMTMgNDEuNTkzMyA0NC4yNDc0IDM1LjAwNTYgNDQuMjQ3NCAzNS4wMDU2QzQyLjk5NyAzMS43NjcxIDQyLjA1ODggMjAuMDQzNiA0Mi4wNTg4IDIwLjA0MzZDNDIuMDU4OCAxNi42OTM4IDQwLjgwODQgMTMuMjMyMiA0MC44MDg0IDEzLjIzMjJDMzguNTE0OCA2LjE5NzgyIDMzLjQwNzYgMi45NTk2NCAzMy40MDc2IDIuOTU5NjRDMzIuOTg4MyAyLjY5Mzk2IDMyLjU2MzUgMi40NTY5OCAzMi4xMzc4IDIuMjQwNzRDMzEuNzEyNCAyLjA0MzU0IDI5LjA2NzYgMC44NjM0NjcgMjUuODE4NCAwLjQ0MDM2N0MyMy44MzA1IDAuMjM2MzQ3IDIyLjQ2MjggMC4zOTE0OTMgMjIuNDYyOCAwLjM5MTQ5M0MyMS4zNzE2IDAuNDg0Njk1IDIwLjM0ODcgMC42ODY3MjYgMTkuMzkyNyAwLjk2OTQ1NUMxNy45MzI1IDEuNDk0ODUgMTYuNTQ5NCAyLjM2NzQ4IDE1LjM3NDkgMy43Mjk0MUMxNS4zNzQ5IDMuNzI5NDEgMTUuMzY3MSAzLjcwNTgyIDE1LjMwMyAzLjcwMDcxQzExLjA3MSAxLjk4NjE1IDcuOTkyOTcgMTEuMTA1NyA3Ljk4NjIyIDExLjEyNTZDNy4wNzk5OSAxMy4zMzI2IDYuMjU0NDYgMTcuMDU2NiA2LjI1NDQ2IDE3LjA1NjZMNS42Mjg4NSAyNC41MDk2QzUuMTU5NTcgMzAuODc0MyAyLjczNjQgMzguODMwMiAyLjczNjQgMzguODMwMkMxLjc5ODEyIDQxLjc2MTUgMCA0My4xODUxIDAgNDMuMTg1MUMwLjQxMzMyOCA0My42MDkzIDAuOTE4ODgxIDQzLjk4ODQgMS40OTEzNSA0NC4zMjY1QzEuODIwMzMgNDQuMTU3MiAyLjYwNTY1IDQzLjczMjEgMy4zNTA3NyA0My4xNzE4TDIuMDg1NDggNDQuNjUwNUM0Ljg5MTg5IDQ2LjA3MTggOC45MjkgNDYuNjc1MyAxMS44NTE1IDQ2LjkzMTZDMTQuMDg2MyA0Ny4xNTcyIDE1LjIwNjUgNDcuMTE4MyAxNS40NzQ1IDQ3LjEyMDZMMzMuMDA1OCA0Ny4xNTcyWiIgZmlsbD0iIzg5OTU5QyIvPgo8ZyBpZD0iRmlsbCA0MyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzYuNTk0OCAxNC40ODVDMzQuODI4NyAxMi4yMDE1IDMxLjE0NTUgMTAuNSAyNy42NjUxIDEwLjVIMjAuMjQ1OUMxNi43NjYgMTAuNSAxMy4wODE5IDEyLjIwMTUgMTEuMzE2MyAxNC40ODVDOS4zNjQyNCAxNy4wMDk5IDguNzgxMiAyMC4yOTgyIDguNzIyOSAyMi4zMzU3QzguNjM0NzUgMjUuNDA4NyA5LjA0NzQ3IDI4Ljk5NzkgOS43NTk1MSAzNC4wNjI5QzEwLjIwNzEgMzcuMjUwMSAxMS42Nzk0IDQxLjc4ODggMTIuNjc2MSA0My4zMDY1QzEzLjY1MzUgNDUuMjUyMSAxOS40Nzc0IDUxLjU2MzMgMjMuOTU1NyA1MS42QzI4LjQzNDEgNTEuNTYzMyAzNC4yNTcxIDQ1LjI1MjEgMzUuMjM1IDQzLjMwNjVDMzYuMjMyMSA0MS43ODg4IDM3LjcwMzUgMzcuMjUwMSAzOC4xNTIgMzQuMDYyOUMzOC44NjM2IDI4Ljk5NzkgMzkuMjc2NyAyNS40MDg3IDM5LjE4ODEgMjIuMzM1N0MzOS4xMjk0IDIwLjI5ODIgMzguNTQ3MyAxNy4wMDk5IDM2LjU5NDggMTQuNDg1WiIgZmlsbD0iI0ZGRjFFMyIvPgo8cGF0aCBkPSJNMzYuNTk0OCAxNC40ODVDMzQuODI4NyAxMi4yMDE1IDMxLjE0NTQgMTAuNSAyNy42NjUxIDEwLjVIMjAuMjQ1OUMxNi43NjYgMTAuNSAxMy4wODE5IDEyLjIwMTUgMTEuMzE2MyAxNC40ODVDOS4zNjQyNCAxNy4wMDk5IDguNzgxMiAyMC4yOTgyIDguNzIyOSAyMi4zMzU3QzguNjM0NzUgMjUuNDA4NyA5LjA0NzQ3IDI4Ljk5NzkgOS43NTk1MSAzNC4wNjI5QzEwLjIwNzEgMzcuMjUwMSAxMS42Nzk0IDQxLjc4ODggMTIuNjc2MSA0My4zMDY1QzEzLjY1MzUgNDUuMjUyMSAxOS40Nzc0IDUxLjU2MzMgMjMuOTU1NyA1MS42QzI4LjQzNDEgNTEuNTYzMyAzNC4yNTcxIDQ1LjI1MjEgMzUuMjM1IDQzLjMwNjVDMzYuMjMyMSA0MS43ODg4IDM3LjcwMzUgMzcuMjUwMSAzOC4xNTIgMzQuMDYyOUMzOC44NjM2IDI4Ljk5NzkgMzkuMjc2NyAyNS40MDg3IDM5LjE4ODEgMjIuMzM1N0MzOS4xMjk0IDIwLjI5ODIgMzguNTQ3MyAxNy4wMDk5IDM2LjU5NDggMTQuNDg1IiBzdHJva2U9IiM4OTk1OUMiIHN0cm9rZS13aWR0aD0iMi4yOCIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=='} text={"I have a long face"} />
      </Link>
      <Link style={{textDecoration: 'none'}}to="/Page7">
        <ButtonWithIcon onClick={() => {
          nextPage({ 'face_shape': 'round' }, true, true)
        }} style={{ marginBottom: '14px' }} url={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA0OCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Im92YWwiPgo8cGF0aCBpZD0iRmlsbCAxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjAwNTggNDcuMTU3MkM0My4yOTkgNDYuNTQwOSA0Ni42MDUxIDQ0LjYxODkgNDcuNjAwNyA0My43Mjk1TDQ1Ljk4MzQgNDIuMjMwMUM0Ni43NjI1IDQyLjc2NTEgNDcuNDYzMiA0My4xMDk4IDQ3Ljk2OTkgNDMuMzIwNkM0Ny45OTE4IDQzLjI4NzEgNDggNDMuMjY4NiA0OCA0My4yNjg2QzQ1LjgxMTMgNDEuNTkzMyA0NC4yNDc0IDM1LjAwNTYgNDQuMjQ3NCAzNS4wMDU2QzQyLjk5NyAzMS43NjcxIDQyLjA1ODggMjAuMDQzNiA0Mi4wNTg4IDIwLjA0MzZDNDIuMDU4OCAxNi42OTM4IDQwLjgwODQgMTMuMjMyMiA0MC44MDg0IDEzLjIzMjJDMzguNTE0OCA2LjE5NzgyIDMzLjQwNzYgMi45NTk2NCAzMy40MDc2IDIuOTU5NjRDMzIuOTg4MyAyLjY5Mzk2IDMyLjU2MzUgMi40NTY5OCAzMi4xMzc4IDIuMjQwNzRDMzEuNzEyNCAyLjA0MzU0IDI5LjA2NzYgMC44NjM0NjcgMjUuODE4NCAwLjQ0MDM2N0MyMy44MzA1IDAuMjM2MzQ3IDIyLjQ2MjggMC4zOTE0OTMgMjIuNDYyOCAwLjM5MTQ5M0MyMS4zNzE2IDAuNDg0Njk1IDIwLjM0ODcgMC42ODY3MjYgMTkuMzkyNyAwLjk2OTQ1NUMxNy45MzI1IDEuNDk0ODUgMTYuNTQ5NCAyLjM2NzQ4IDE1LjM3NDkgMy43Mjk0MUMxNS4zNzQ5IDMuNzI5NDEgMTUuMzY3MSAzLjcwNTgyIDE1LjMwMyAzLjcwMDcxQzExLjA3MSAxLjk4NjE1IDcuOTkyOTcgMTEuMTA1NyA3Ljk4NjIyIDExLjEyNTZDNy4wNzk5OSAxMy4zMzI2IDYuMjU0NDYgMTcuMDU2NiA2LjI1NDQ2IDE3LjA1NjZMNS42Mjg4NSAyNC41MDk2QzUuMTU5NTcgMzAuODc0MyAyLjczNjQgMzguODMwMiAyLjczNjQgMzguODMwMkMxLjc5ODEyIDQxLjc2MTUgMCA0My4xODUxIDAgNDMuMTg1MUMwLjQxMzMyOCA0My42MDkzIDAuOTE4ODgxIDQzLjk4ODQgMS40OTEzNSA0NC4zMjY1QzEuODIwMzMgNDQuMTU3MiAyLjYwNTY1IDQzLjczMjEgMy4zNTA3NyA0My4xNzE4TDIuMDg1NDggNDQuNjUwNUM0Ljg5MTg5IDQ2LjA3MTggOC45MjkgNDYuNjc1MyAxMS44NTE1IDQ2LjkzMTZDMTQuMDg2MyA0Ny4xNTcyIDE1LjIwNjUgNDcuMTE4MyAxNS40NzQ1IDQ3LjEyMDZMMzMuMDA1OCA0Ny4xNTcyWiIgZmlsbD0iIzg5OTU5QyIvPgo8ZyBpZD0iRmlsbCA0MyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzYuNTk0OCAxNC40ODVDMzQuODI4NyAxMi4yMDE1IDMxLjE0NTUgMTAuNSAyNy42NjUxIDEwLjVIMjAuMjQ1OUMxNi43NjYgMTAuNSAxMy4wODE5IDEyLjIwMTUgMTEuMzE2MyAxNC40ODVDOS4zNjQyNCAxNy4wMDk5IDguNzgxMiAyMC4yOTgyIDguNzIyOSAyMi4zMzU3QzguNjM0NzUgMjUuNDA4NyA5LjA0NzQ3IDI4Ljk5NzkgOS43NTk1MSAzNC4wNjI5QzEwLjIwNzEgMzcuMjUwMSAxMS42Nzk0IDQxLjc4ODggMTIuNjc2MSA0My4zMDY1QzEzLjY1MzUgNDUuMjUyMSAxOS40Nzc0IDUxLjU2MzMgMjMuOTU1NyA1MS42QzI4LjQzNDEgNTEuNTYzMyAzNC4yNTcxIDQ1LjI1MjEgMzUuMjM1IDQzLjMwNjVDMzYuMjMyMSA0MS43ODg4IDM3LjcwMzUgMzcuMjUwMSAzOC4xNTIgMzQuMDYyOUMzOC44NjM2IDI4Ljk5NzkgMzkuMjc2NyAyNS40MDg3IDM5LjE4ODEgMjIuMzM1N0MzOS4xMjk0IDIwLjI5ODIgMzguNTQ3MyAxNy4wMDk5IDM2LjU5NDggMTQuNDg1WiIgZmlsbD0iI0ZGRjFFMyIvPgo8cGF0aCBkPSJNMzYuNTk0OCAxNC40ODVDMzQuODI4NyAxMi4yMDE1IDMxLjE0NTQgMTAuNSAyNy42NjUxIDEwLjVIMjAuMjQ1OUMxNi43NjYgMTAuNSAxMy4wODE5IDEyLjIwMTUgMTEuMzE2MyAxNC40ODVDOS4zNjQyNCAxNy4wMDk5IDguNzgxMiAyMC4yOTgyIDguNzIyOSAyMi4zMzU3QzguNjM0NzUgMjUuNDA4NyA5LjA0NzQ3IDI4Ljk5NzkgOS43NTk1MSAzNC4wNjI5QzEwLjIwNzEgMzcuMjUwMSAxMS42Nzk0IDQxLjc4ODggMTIuNjc2MSA0My4zMDY1QzEzLjY1MzUgNDUuMjUyMSAxOS40Nzc0IDUxLjU2MzMgMjMuOTU1NyA1MS42QzI4LjQzNDEgNTEuNTYzMyAzNC4yNTcxIDQ1LjI1MjEgMzUuMjM1IDQzLjMwNjVDMzYuMjMyMSA0MS43ODg4IDM3LjcwMzUgMzcuMjUwMSAzOC4xNTIgMzQuMDYyOUMzOC44NjM2IDI4Ljk5NzkgMzkuMjc2NyAyNS40MDg3IDM5LjE4ODEgMjIuMzM1N0MzOS4xMjk0IDIwLjI5ODIgMzguNTQ3MyAxNy4wMDk5IDM2LjU5NDggMTQuNDg1IiBzdHJva2U9IiM4OTk1OUMiIHN0cm9rZS13aWR0aD0iMi4yOCIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=='} text={"I have a round face"} />
      </Link>
      <Link style={{textDecoration: 'none'}}to="/Page7">
        <ButtonWithIcon onClick={() => {
          nextPage({ 'face_shape': 'between' }, true, true)
        }} style={{ marginBottom: '14px' }} url={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA0OCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Im92YWwiPgo8cGF0aCBpZD0iRmlsbCAxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjAwNTggNDcuMTU3MkM0My4yOTkgNDYuNTQwOSA0Ni42MDUxIDQ0LjYxODkgNDcuNjAwNyA0My43Mjk1TDQ1Ljk4MzQgNDIuMjMwMUM0Ni43NjI1IDQyLjc2NTEgNDcuNDYzMiA0My4xMDk4IDQ3Ljk2OTkgNDMuMzIwNkM0Ny45OTE4IDQzLjI4NzEgNDggNDMuMjY4NiA0OCA0My4yNjg2QzQ1LjgxMTMgNDEuNTkzMyA0NC4yNDc0IDM1LjAwNTYgNDQuMjQ3NCAzNS4wMDU2QzQyLjk5NyAzMS43NjcxIDQyLjA1ODggMjAuMDQzNiA0Mi4wNTg4IDIwLjA0MzZDNDIuMDU4OCAxNi42OTM4IDQwLjgwODQgMTMuMjMyMiA0MC44MDg0IDEzLjIzMjJDMzguNTE0OCA2LjE5NzgyIDMzLjQwNzYgMi45NTk2NCAzMy40MDc2IDIuOTU5NjRDMzIuOTg4MyAyLjY5Mzk2IDMyLjU2MzUgMi40NTY5OCAzMi4xMzc4IDIuMjQwNzRDMzEuNzEyNCAyLjA0MzU0IDI5LjA2NzYgMC44NjM0NjcgMjUuODE4NCAwLjQ0MDM2N0MyMy44MzA1IDAuMjM2MzQ3IDIyLjQ2MjggMC4zOTE0OTMgMjIuNDYyOCAwLjM5MTQ5M0MyMS4zNzE2IDAuNDg0Njk1IDIwLjM0ODcgMC42ODY3MjYgMTkuMzkyNyAwLjk2OTQ1NUMxNy45MzI1IDEuNDk0ODUgMTYuNTQ5NCAyLjM2NzQ4IDE1LjM3NDkgMy43Mjk0MUMxNS4zNzQ5IDMuNzI5NDEgMTUuMzY3MSAzLjcwNTgyIDE1LjMwMyAzLjcwMDcxQzExLjA3MSAxLjk4NjE1IDcuOTkyOTcgMTEuMTA1NyA3Ljk4NjIyIDExLjEyNTZDNy4wNzk5OSAxMy4zMzI2IDYuMjU0NDYgMTcuMDU2NiA2LjI1NDQ2IDE3LjA1NjZMNS42Mjg4NSAyNC41MDk2QzUuMTU5NTcgMzAuODc0MyAyLjczNjQgMzguODMwMiAyLjczNjQgMzguODMwMkMxLjc5ODEyIDQxLjc2MTUgMCA0My4xODUxIDAgNDMuMTg1MUMwLjQxMzMyOCA0My42MDkzIDAuOTE4ODgxIDQzLjk4ODQgMS40OTEzNSA0NC4zMjY1QzEuODIwMzMgNDQuMTU3MiAyLjYwNTY1IDQzLjczMjEgMy4zNTA3NyA0My4xNzE4TDIuMDg1NDggNDQuNjUwNUM0Ljg5MTg5IDQ2LjA3MTggOC45MjkgNDYuNjc1MyAxMS44NTE1IDQ2LjkzMTZDMTQuMDg2MyA0Ny4xNTcyIDE1LjIwNjUgNDcuMTE4MyAxNS40NzQ1IDQ3LjEyMDZMMzMuMDA1OCA0Ny4xNTcyWiIgZmlsbD0iIzg5OTU5QyIvPgo8ZyBpZD0iRmlsbCA0MyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzYuNTk0OCAxNC40ODVDMzQuODI4NyAxMi4yMDE1IDMxLjE0NTUgMTAuNSAyNy42NjUxIDEwLjVIMjAuMjQ1OUMxNi43NjYgMTAuNSAxMy4wODE5IDEyLjIwMTUgMTEuMzE2MyAxNC40ODVDOS4zNjQyNCAxNy4wMDk5IDguNzgxMiAyMC4yOTgyIDguNzIyOSAyMi4zMzU3QzguNjM0NzUgMjUuNDA4NyA5LjA0NzQ3IDI4Ljk5NzkgOS43NTk1MSAzNC4wNjI5QzEwLjIwNzEgMzcuMjUwMSAxMS42Nzk0IDQxLjc4ODggMTIuNjc2MSA0My4zMDY1QzEzLjY1MzUgNDUuMjUyMSAxOS40Nzc0IDUxLjU2MzMgMjMuOTU1NyA1MS42QzI4LjQzNDEgNTEuNTYzMyAzNC4yNTcxIDQ1LjI1MjEgMzUuMjM1IDQzLjMwNjVDMzYuMjMyMSA0MS43ODg4IDM3LjcwMzUgMzcuMjUwMSAzOC4xNTIgMzQuMDYyOUMzOC44NjM2IDI4Ljk5NzkgMzkuMjc2NyAyNS40MDg3IDM5LjE4ODEgMjIuMzM1N0MzOS4xMjk0IDIwLjI5ODIgMzguNTQ3MyAxNy4wMDk5IDM2LjU5NDggMTQuNDg1WiIgZmlsbD0iI0ZGRjFFMyIvPgo8cGF0aCBkPSJNMzYuNTk0OCAxNC40ODVDMzQuODI4NyAxMi4yMDE1IDMxLjE0NTQgMTAuNSAyNy42NjUxIDEwLjVIMjAuMjQ1OUMxNi43NjYgMTAuNSAxMy4wODE5IDEyLjIwMTUgMTEuMzE2MyAxNC40ODVDOS4zNjQyNCAxNy4wMDk5IDguNzgxMiAyMC4yOTgyIDguNzIyOSAyMi4zMzU3QzguNjM0NzUgMjUuNDA4NyA5LjA0NzQ3IDI4Ljk5NzkgOS43NTk1MSAzNC4wNjI5QzEwLjIwNzEgMzcuMjUwMSAxMS42Nzk0IDQxLjc4ODggMTIuNjc2MSA0My4zMDY1QzEzLjY1MzUgNDUuMjUyMSAxOS40Nzc0IDUxLjU2MzMgMjMuOTU1NyA1MS42QzI4LjQzNDEgNTEuNTYzMyAzNC4yNTcxIDQ1LjI1MjEgMzUuMjM1IDQzLjMwNjVDMzYuMjMyMSA0MS43ODg4IDM3LjcwMzUgMzcuMjUwMSAzOC4xNTIgMzQuMDYyOUMzOC44NjM2IDI4Ljk5NzkgMzkuMjc2NyAyNS40MDg3IDM5LjE4ODEgMjIuMzM1N0MzOS4xMjk0IDIwLjI5ODIgMzguNTQ3MyAxNy4wMDk5IDM2LjU5NDggMTQuNDg1IiBzdHJva2U9IiM4OTk1OUMiIHN0cm9rZS13aWR0aD0iMi4yOCIvPgo8L2c+CjwvZz4KPC9zdmc+Cg=='} text={"In between"} />
      </Link>
      <Link style={{textDecoration: 'none'}}to="/Page7">
        <ButtonSkip onClick={() => {
          nextPage(null, false, true)
        }} style={{ marginTop: '77px' }} text={"I don’t know"} />
      </Link>
    </section>
  )
}

export default Page6Women