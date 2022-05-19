import React, { useContext } from 'react'
import ButtonChoice from '../../components/UI/buttonChoice/ButtonChoice'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { Link } from 'react-router-dom'
import { CounterContext, PageHistory, UserAnswer } from '../../context'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import {css, StyleSheet} from 'aphrodite/no-important'

const Page1 = () => {
  let { counter, setCounter } = useContext(CounterContext)
  let { pages, setPages } = useContext(PageHistory)
  let { ans, setAns } = useContext(UserAnswer)
  const page = 'Page1'

  function nextPage(value) {
    setPages(pages => [...pages, page])
    setCounter(counter += 1)
    setAns(ans => Object.assign({}, ans, value))
    window.sessionStorage.setItem('counter', JSON.stringify(counter))
    window.sessionStorage.setItem('pages', JSON.stringify([...pages, page]))
    window.sessionStorage.setItem('ans', JSON.stringify(Object.assign({}, ans, value)))
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
      <TitlePage text={'You are looking for'} />
      <Link style={{textDecoration: 'none'}} to='/Page2MenOrWoman'>
        <ButtonChoice onClick={() => {
          nextPage({'gender': 5 })
        }} url={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0MiA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzFfMjA0MyIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQ0Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDAuMDIyNDYwOUg0MS41ODYzVjQzLjJIMFYwLjAyMjQ2MDlaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMV8yMDQzKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzkuMDI5IDM1Ljk0OTZDMzguMTc2NSAzNS4wMDM2IDMxLjM1NzIgMzIuNTIwNCAzMC4zODI5IDMyLjA0NzNDMjkuNDA4OCAzMS41NzQ0IDI4LjA2OTIgMzAuNzQ2NyAyOC4wNjkyIDMwLjc0NjdMMjcuNjQ0NCAzMC4xNjNMMjYuNjA3OSAzMC4wMzcyQzI1LjgyMTIgMzAuMTExMiAyNS43MzYyIDI3Ljk3NDggMjUuNzgwOCAyNi4zODdDMzEuNjM4MSAyNi4wNCAzMy41MTk0IDI0Ljk1NzcgMzQuMDg2IDI0LjQ1NjlMMzMuMTY1NiAyMy42MTI4QzMzLjYwOSAyMy45MTM5IDM0LjAwNzcgMjQuMTA4IDM0LjI5NiAyNC4yMjY3QzM0LjMwODUgMjQuMjA3OCAzNC4zMTMyIDI0LjE5NzQgMzQuMzEzMiAyNC4xOTc0QzMzLjA2NzcgMjMuMjU0MiAzMi4xNzc4IDE5LjU0NDYgMzIuMTc3OCAxOS41NDQ2QzMxLjQ2NjEgMTcuNzIxMiAzMC45MzI0IDExLjExOTggMzAuOTMyNCAxMS4xMTk4QzMwLjkzMjQgOS4yMzM1NyAzMC4yMjA3IDcuMjg0NDUgMzAuMjIwNyA3LjI4NDQ1QzI4LjkxNTcgMy4zMjM0OSAyNi4wMDk1IDEuNTAwMTMgMjYuMDA5NSAxLjUwMDEzQzI1Ljc3MDkgMS4zNTA1MyAyNS41MjkgMS4yMTcwOSAyNS4yODY5IDEuMDk1NDlDMjUuMDQ0OCAwLjk4NDQ0NiAyMy41Mzk5IDAuMzE5ODA2IDIxLjY5MDkgMC4wODE3MjYyQzIwLjU1OTYgLTAuMDMzMzEzOCAxOS43ODE1IDAuMDU0MjA2MiAxOS43ODE1IDAuMDU0MjA2MkMxOS4xNjA1IDAuMTA2NTI2IDE4LjU3ODQgMC4yMjAyODYgMTguMDM0NCAwLjM3OTQ4NkMxNy4yMDM2IDAuNjc1MzI2IDE2LjQxNjUgMS4xNjY2OSAxNS43NDgyIDEuOTMzNTdDMTUuNzQ4MiAxLjkzMzU3IDE1Ljc0MzcgMS45MjAyOSAxNS43MDcxIDEuOTE3NDFDMTMuMjk5MSAwLjk1MTk2NiAxMS41NDc2IDYuMDg3MDEgMTEuNTQzNyA2LjA5ODIxQzExLjAyOCA3LjM0MTA5IDEwLjU1ODMgOS40Mzc4OSAxMC41NTgzIDkuNDM3ODlMMTAuMjAyMyAxMy42MzQ3QzkuOTM1MjQgMTcuMjE4NCA4LjU1NjIgMjEuNjk4MiA4LjU1NjIgMjEuNjk4MkM4LjAyMjQ0IDIzLjM0ODkgNi45OTkyNCAyNC4xNTA0IDYuOTk5MjQgMjQuMTUwNEM3LjIzNDQ0IDI0LjM4OTQgNy41MjIxMiAyNC42MDI4IDcuODQ3ODggMjQuNzkzMUM4LjAzNTA4IDI0LjY5NzkgOC40ODE5NiAyNC40NTg1IDguOTA1OTYgMjQuMTQyOEw4LjE4NTk2IDI0Ljk3NTZDOS43ODI3NiAyNS43NzYgMTIuMDggMjYuMTE1NiAxMy43NDMxIDI2LjI2QzEzLjkxNDEgMjUuMTUxNSAxNC4yMDA4IDIyLjg5NjYgMTQuMDY0NyAyMC45NDJDMTQuMTk3MyAyMi4yNzAyIDE0LjQ0MTMgMjQuOTUyMyAxNC40MDEzIDI2LjMxQzE1LjEzMDEgMjYuMzU3MiAxNS42NTI0IDI2LjM2NTEgMTUuODA0OCAyNi4zNjY0QzE1Ljg1MDggMjcuOTU2MyAxNS43Njg1IDMwLjExMTUgMTQuOTc4NCAzMC4wMzcyTDEzLjk0MiAzMC4xNjNMMTMuNTE3IDMwLjc0NjdDMTMuNTE3IDMwLjc0NjcgMTIuMTc3NSAzMS41NzQ0IDExLjIwMzIgMzIuMDQ3M0MxMC4yMjkyIDMyLjUyMDQgMy40MDk2NCAzNS4wMDM2IDIuNTU3MTYgMzUuOTQ5NkMxLjcwNDg0IDM2Ljg5NTUgMC4xMjE3OTggMzguMTUyOCAtMC4wMDAxMjIwNyA0MC44OTQ0VjQzLjJINDEuNTg2M1Y0MC44OTQ0QzQxLjQ2NDUgMzguMTUyOCAzOS44ODE1IDM2Ljg5NTUgMzkuMDI5IDM1Ljk0OTZaIiBmaWxsPSIjNUI2OTcxIi8+CjwvZz4KPC9zdmc+Cg=='} name={"Women Style"} />
      </Link>

      <Link style={{textDecoration: 'none'}} to='/Page2MenOrWoman'>
        <ButtonChoice onClick={() => {
          nextPage({'gender': 4 })
        }} url={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NSA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00My44MTM2IDM5LjY2OTVDNDMuNzgwNSAzOS41NjczIDQzLjY1OTIgMzkuMjMwMiA0My42NTkyIDM5LjIzMDJDNDMuNjE2MiAzOS4xMjE3IDQzLjU3MTcgMzkuMDE1MyA0My41MjQ2IDM4LjkxMjlDNDMuNTI0NiAzOC45MTI5IDQzLjQ2NTQgMzguODA2IDQzLjQyNjcgMzguNzcyN0M0My4wMjU4IDM4LjQzMjQgNDEuMzQ3MiAzNy4xMzY5IDM3Ljc4NzggMzUuOTU2N0MzNy43ODc4IDM1Ljk1NjcgMzIuMDczNCAzMy42Mzk0IDMxLjgwMzUgMzMuNDE0NUMzMS41MzM2IDMzLjE4OTUgMjkuOTEzNiAzMi40OTIyIDI5LjkxMzYgMzIuNDkyMkMyOS45MTM2IDMyLjQ5MjIgMjkuNzU1OCAzMi4yNTYyIDI5LjU3NzMgMzEuNzYxN0MyOS40MjI2IDMxLjI3MjYgMjkuMjY0OCAzMC41OTExIDI5LjE4NjYgMjkuNjk3NUwyOS4xMzU4IDI5LjY3OTZDMjkuMTMzOSAyOS42NjA0IDI5LjEzMTQgMjkuNjQyOCAyOS4xMjk2IDI5LjYyMzRIMjguOTc2MkwyOC4zODY3IDI5LjQxNTlMMjguMDkxNSAyNi43NDQ2VjI1LjM1NTNDMjguMTAzNyAyNS4zMTAzIDI4LjExNzYgMjUuMjY0MiAyOC4xMzM2IDI1LjIxN0MyOC4zODcyIDI0Ljg3NzggMjguNTg1OSAyNC41MTUzIDI4Ljc0MTMgMjQuMTUxM0MyOS4wOTM2IDIzLjU0MDcgMjkuNDY3NyAyMi42Mjc0IDI5LjczNzQgMjEuNDg5QzMwLjEyMzUgMjEuODE5IDMwLjMyMzQgMjEuMDU1NCAzMC4zMjM0IDIxLjA1NTRDMzAuNjQ0NiAyMC4xMzcgMzEuNjEzIDE3Ljg2NDEgMzEuNjEzIDE3Ljg2NDFDMzIuMDA4NiAxNy4xMDIyIDMxLjkyNTQgMTYuMDQ4OSAzMS45MjU0IDE2LjA0ODlDMzEuOTc0NCAxNC45NjY2IDMxLjQ5NDYgMTQuNzA4NiAzMC45NjkgMTUuMzE4NkMzMS4wMjUxIDE0Ljk4MzggMzEuMTM2NSAxNC4yNTY2IDMxLjE4NTQgMTMuODk5NEMzMS44OTczIDExLjEyNzkgMzAuNzI3IDcuMjcxNDQgMzAuNzI3IDcuMjcxNDRDMzAuNjQzMiA2Ljk2Njk2IDMwLjY5MzEgNy4xMzU0NCAzMC42MTQ3IDYuOTEyMDhDMzAuMTkwNiA1Ljg1MTI4IDI5LjE4OTEgMy41NzYwOCAyNi4yNjE2IDEuODIxMDRDMjMuMzEwMSAwLjA1MTYwMzggMjQuODY3NCAwLjEwNjMyNCAyNS4yMzMzIDAuMDQyNDgzOEMyNS4yMzMzIDAuMDQyNDgzOCAyMS4zNDc0IC0wLjQ4MzExNiAxNy40Mzg5IDIuMTYzMTJDMTcuNjY4NiAxLjc4MDU2IDE4LjEzNTQgMS4zMDEyIDE4LjEzNTQgMS4zMDEyQzE2LjUzNTUgMi4yMjk2OCAxNi4wMzUgMi45NjI2NCAxNS44ODg1IDMuMzk0OTZDMTUuNzQ4NSAzLjUyNDI0IDE1LjYwOTQgMy42NTg4IDE1LjQ3MDkgMy43OThDMTQuMjA4NSAzLjgyMzI4IDEzLjE0MyA1LjA3NjA4IDEzLjE0MyA1LjA3NjA4TDE0LjA0NDMgNC43Njc2QzEyLjQ5OTIgNS40NzI3MiAxMi41ODUxIDcuMzY3NiAxMi41ODUxIDcuMzY3NkwxMy4yMTQ0IDYuODIzNDRDMTMuMDcwNiA3LjAyMDcyIDEyLjk0NjkgNy4yMzAzMiAxMi44NDEzIDcuNDQ5NTJDMTEuOTY1NCA5LjI2OTUyIDEyLjM0NjYgMTEuNzY2OCAxMi44MzIyIDEzLjU2OTRDMTIuOTQyOSAxNC4wMjQ3IDEzLjA5ODIgMTQuNzAzIDEzLjIyNDUgMTUuNDAxN0MxMi4wMDY2IDE0LjE4MTggMTIuMjU5NCAxNy4xNzgzIDEyLjI1OTQgMTcuMTc4M0MxMi4zMTA3IDE3Ljg2NDcgMTIuODcxIDE4Ljg2OSAxMi44NzEgMTguODY5QzEzLjE1NzMgMTkuNjMyOSAxMy42MTUyIDIwLjc0OTIgMTMuNjE1MiAyMC43NDkyQzEzLjk1OTggMjEuNzE0NSAxNC4yNTMgMjEuODE2NCAxNC40NDc1IDIxLjcxMTFDMTQuNjU2IDIyLjUwOTIgMTQuOTIxNiAyMy4zNzU2IDE1LjIwNyAyMy45MzFDMTUuMjA3IDIzLjkzMSAxNS4yMTc4IDIzLjk0OTggMTUuMjM1NyAyMy45ODEyQzE1LjU4MDIgMjQuODE4IDE1Ljk2MSAyNS4yMDc5IDE1Ljk2MSAyNS4yMDc5TDE1LjkyIDI3LjYxMDhDMTUuODIxMSAyOC41MTUzIDE1LjcyMTMgMjkuNDIyIDE1LjcyMTMgMjkuNDIyTDE0LjkzMyAyOS42MzNDMTQuOTMzIDI5LjYzMyAxNC43Mzk0IDMxLjUyNjIgMTQuMjY5OCAzMi41MTExQzEzLjYxODcgMzIuODE3NCA4LjA3MDI0IDM1LjQyMSA2LjY3MzEyIDM1Ljg0NDZDNi42NzMxMiAzNS44NDQ2IDIuNDE4MjQgMzcuMzQzNiAwLjc1MDI0IDM4Ljc5MjZDMC43NTAyNCAzOC43OTI2IDAuNTUwODggMzkuMDIyNSAwLjUwMzM2IDM5LjEzMjJDMC40OTQ0IDM5LjE1MzcgMC40ODY0IDM5LjE3NjQgMC40Nzc2IDM5LjE5ODNDMC40Nzc2IDM5LjE5ODMgMC4zNzQ3MiAzOS40NTU2IDAuMzEzNiAzOS42NTM0VjM5LjY1MzdDMC4xNDQ2NCA0MC4xODk0IDAuMDMwMDggNDAuNzk2MiAwIDQxLjQ5MTRWNDMuMTc3N0g0NC4xMjUxVjQxLjQ5MTRDNDQuMDk1MiA0MC44MDIgNDMuOTgwNSA0MC4yMDE3IDQzLjgxMzYgMzkuNjY5NVoiIGZpbGw9IiM1QjY5NzEiLz4KPC9zdmc+Cg=='} name={"Men Style"} />
      </Link>

      <Link style={{textDecoration: 'none'}} to='/Page2MenOrWoman'>
        <ButtonSkip text={"I'd like to see both"} onClick={() => {
          nextPage()
        }} />
      </Link>
    </section>
  )
}

export default Page1