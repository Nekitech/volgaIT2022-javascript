import React, { useContext } from 'react'
import TitlePage from '../../components/UI/titlePage/TitlePage'
import ChoiceSizeButton from '../../components/UI/choiceSizeButton/ChoiceSizeButton'
import { Link } from 'react-router-dom'
import ButtonSkip from '../../components/UI/buttonSkip/ButtonSkip'
import { PageHistory, UserAnswer, CounterContext } from '../../context'
import {css, StyleSheet} from 'aphrodite/no-important'

function Page41() {
  const page = 'Page41'
  let { counter, setCounter } = useContext(CounterContext)
  let { pages, setPages } = useContext(PageHistory)
  let { ans, setAns } = useContext(UserAnswer)
  let choicePage = (ans['eyewear_type'] === 211 && ans['eyewear_type'] !== 210) ? 'SunglassesPage' : 'EyeglassesPage'
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
      <TitlePage style={{ marginBottom: '38px' }} text={"What's your current frame size?"} />
      <img style={{ marginBottom: '35px' }} src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzE4IiBoZWlnaHQ9IjExOCIgdmlld0JveD0iMCAwIDMxOCAxMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTk2Ljk3NiAyMC41OTYyQzE5Ni4xMjYgMjEuMzM5NSAxOTQuOTEgMjEuNzExMSAxOTMuMzI4IDIxLjcxMTFDMTkxLjk1NCAyMS43MTExIDE5MC44NDUgMjEuNDg4NyAxOTAgMjEuMDQzOVYxOC43ODg4QzE5MC40NDUgMTkuMDI1MyAxOTAuOTYzIDE5LjIxODEgMTkxLjU1NCAxOS4zNjczQzE5Mi4xNDUgMTkuNTE2NiAxOTIuNzA2IDE5LjU5MTIgMTkzLjIzNSAxOS41OTEyQzE5NC44MjggMTkuNTkxMiAxOTUuNjI1IDE4LjkzOCAxOTUuNjI1IDE3LjYzMTdDMTk1LjYyNSAxNi4zODczIDE5NC44IDE1Ljc2NTIgMTkzLjE1IDE1Ljc2NTJDMTkyLjg1MiAxNS43NjUyIDE5Mi41MjMgMTUuNzk0NyAxOTIuMTYyIDE1Ljg1MzhDMTkxLjgwMiAxNS45MTMgMTkxLjUwOSAxNS45NzYzIDE5MS4yODQgMTYuMDQzOUwxOTAuMjQ1IDE1LjQ4NjRMMTkwLjcwOSA5LjE5NDIxSDE5Ny40MDdWMTEuNDA3SDE5Mi45OThMMTkyLjc3IDEzLjgzMUwxOTMuMDY2IDEzLjc3MTlDMTkzLjQwOSAxMy42OTMxIDE5My44MzQgMTMuNjUzNyAxOTQuMzQxIDEzLjY1MzdDMTk1LjUzNSAxMy42NTM3IDE5Ni40ODUgMTMuOTg4NyAxOTcuMTkyIDE0LjY1ODdDMTk3Ljg5OCAxNS4zMjg4IDE5OC4yNTIgMTYuMjQ2NiAxOTguMjUyIDE3LjQxMjFDMTk4LjI1MiAxOC43OTE2IDE5Ny44MjcgMTkuODUzIDE5Ni45NzYgMjAuNTk2MlpNMjA2LjE3NCA5LjE5NDIxVjIxLjU0MjJIMjAzLjU2NFYxNC4zOTY5TDIwMy41OSAxMy4yMjI5TDIwMy42MzIgMTEuOTM5MUMyMDMuMTk4IDEyLjM3MjcgMjAyLjg5NyAxMi42NTcgMjAyLjcyOCAxMi43OTIyTDIwMS4zMDkgMTMuOTMyNEwyMDAuMDUxIDEyLjM2MTRMMjA0LjAyOSA5LjE5NDIxSDIwNi4xNzRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIzOC43MDggMjEuNzExMUMyNDAuMDI2IDIxLjcxMTEgMjQxLjA1NiAyMS4zMjY4IDI0MS44IDIwLjU1ODJDMjQyLjU0MyAxOS43ODk3IDI0Mi45MTQgMTguNzQ2NiAyNDIuOTE0IDE3LjQyOUMyNDIuOTE0IDE2LjIwNzIgMjQyLjYwMiAxNS4yNSAyNDEuOTc3IDE0LjU1NzRDMjQxLjM1MiAxMy44NjQ4IDI0MC40ODggMTMuNTE4NiAyMzkuMzg0IDEzLjUxODZDMjM4LjE1NyAxMy41MTg2IDIzNy4yNjQgMTMuOTk3MiAyMzYuNzA3IDE0Ljk1NDRIMjM2LjU5N0MyMzYuNjQ4IDEzLjk4MDMgMjM2LjgxNCAxMy4yMjg2IDIzNy4wOTUgMTIuNjk5M0MyMzcuMzc3IDEyLjE3IDIzNy44IDExLjc3MDMgMjM4LjM2NiAxMS41QzIzOC45MzIgMTEuMjI5NyAyMzkuNjYzIDExLjA5NDYgMjQwLjU1OCAxMS4wOTQ2QzI0MS4wNDggMTEuMDk0NiAyNDEuNTQzIDExLjE1MDkgMjQyLjA0NSAxMS4yNjM1VjkuMTc3MzVDMjQxLjY0NSA5LjA5Mjg5IDI0MS4wOTMgOS4wNTA2NiAyNDAuMzg5IDkuMDUwNjZDMjM4LjMyOCA5LjA1MDY2IDIzNi43ODEgOS42NDc1MSAyMzUuNzQ4IDEwLjg0MTJDMjM0LjcxNSAxMi4wMzQ5IDIzNC4xOTggMTMuODUzNiAyMzQuMTk4IDE2LjI5NzNDMjM0LjE5OCAxNy40NDAzIDIzNC4zODMgMTguNDE3MiAyMzQuNzUxIDE5LjIyOEMyMzUuMTIgMjAuMDM4OCAyMzUuNjQ0IDIwLjY1NTQgMjM2LjMyMiAyMS4wNzc3QzIzNy4wMDEgMjEuNSAyMzcuNzk2IDIxLjcxMTEgMjM4LjcwOCAyMS43MTExWk0yMzAuODYyIDIxLjU0MjJWOS4xOTQyNEgyMjguNzE3TDIyNC43MzkgMTIuMzYxNUwyMjUuOTk3IDEzLjkzMjRMMjI3LjQxNiAxMi43OTIyQzIyNy41ODUgMTIuNjU3MSAyMjcuODg2IDEyLjM3MjcgMjI4LjMyIDExLjkzOTJMMjI4LjI3OCAxMy4yMjNMMjI4LjI1MiAxNC4zOTY5VjIxLjU0MjJIMjMwLjg2MlpNMjM3LjMxOSAxOC45MzI0QzIzNy42NzEgMTkuMzk0MSAyMzguMTE3IDE5LjYyNSAyMzguNjU4IDE5LjYyNUMyMzkuMjE1IDE5LjYyNSAyMzkuNjQzIDE5LjQzNzggMjM5Ljk0MiAxOS4wNjMzQzI0MC4yNCAxOC42ODg5IDI0MC4zODkgMTguMTU1NCAyNDAuMzg5IDE3LjQ2MjhDMjQwLjM4OSAxNi44NjAzIDI0MC4yNSAxNi4zODYgMjM5Ljk3MSAxNi4wMzk3QzIzOS42OTIgMTUuNjkzNCAyMzkuMjcxIDE1LjUyMDIgMjM4LjcwOCAxNS41MjAyQzIzOC4xNzkgMTUuNTIwMiAyMzcuNzI3IDE1LjY5MiAyMzcuMzUzIDE2LjAzNTRDMjM2Ljk3OCAxNi4zNzg5IDIzNi43OTEgMTYuNzc4NyAyMzYuNzkxIDE3LjIzNDhDMjM2Ljc5MSAxNy45MDQ4IDIzNi45NjcgMTguNDcwNyAyMzcuMzE5IDE4LjkzMjRaIiBmaWxsPSIjRTFFMUUxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjc5LjAyNiAyMS43MTExQzI4MC40OTUgMjEuNzExMSAyODEuNTgzIDIxLjE5MzEgMjgyLjI5IDIwLjE1NzFDMjgyLjk5NyAxOS4xMjEgMjgzLjM1IDE3LjUyNDggMjgzLjM1IDE1LjM2ODJDMjgzLjM1IDEzLjI4NDkgMjgyLjk4NSAxMS43MDI3IDI4Mi4yNTYgMTAuNjIxNkMyODEuNTI3IDkuNTQwNTQgMjgwLjQ1IDkgMjc5LjAyNiA5QzI3Ny41NjIgOSAyNzYuNDc4IDkuNTE2NjEgMjc1Ljc3NCAxMC41NDk4QzI3NS4wNyAxMS41ODMgMjc0LjcxOCAxMy4xODkyIDI3NC43MTggMTUuMzY4MkMyNzQuNzE4IDE3LjQ1NzIgMjc1LjA4IDE5LjAzNjYgMjc1LjgwNCAyMC4xMDY0QzI3Ni41MjcgMjEuMTc2MiAyNzcuNjAxIDIxLjcxMTEgMjc5LjAyNiAyMS43MTExWk0yNjEuNDkyIDIxLjU0MjJWOS4xOTQyNkgyNTkuMzQ3TDI1NS4zNjkgMTIuMzYxNUwyNTYuNjI3IDEzLjkzMjRMMjU4LjA0NiAxMi43OTIyQzI1OC4yMTUgMTIuNjU3MSAyNTguNTE2IDEyLjM3MjcgMjU4Ljk1IDExLjkzOTJMMjU4LjkwOCAxMy4yMjNMMjU4Ljg4MiAxNC4zOTdWMjEuNTQyMkgyNjEuNDkyWk0yNzIuMzM3IDIxLjU0MjJWMTguOTgzMUgyNzMuODIzVjE2Ljk1NjFIMjcyLjMzN1Y5LjE5NDI2SDI2OS45MjlMMjY0LjUxNiAxNy4xNjcyVjE4Ljk4MzFIMjY5Ljc4NlYyMS41NDIySDI3Mi4zMzdaTTI2Ni44MTMgMTYuOTU2MUgyNjkuNzg2VjE0Ljg2MTVDMjY5Ljc4NiAxNC41MTI0IDI2OS44IDE0LjAwNTYgMjY5LjgyOCAxMy4zNDEyQzI2OS44NTYgMTIuNjc2OCAyNjkuODc5IDEyLjI5MTEgMjY5Ljg5NiAxMi4xODQxSDI2OS44MjhDMjY5LjYyIDEyLjY0NTggMjY5LjM2OSAxMy4wOTYzIDI2OS4wNzYgMTMuNTM1NUwyNjYuODEzIDE2Ljk1NjFaTTI3Ny43MDQgMTguNjI0MUMyNzcuOTY2IDE5LjI4MDEgMjc4LjQwNiAxOS42MDgxIDI3OS4wMjYgMTkuNjA4MUMyNzkuNjM0IDE5LjYwODEgMjgwLjA3MyAxOS4yNzU5IDI4MC4zNDMgMTguNjExNUMyODAuNjE0IDE3Ljk0NzEgMjgwLjc0OSAxNi44NjYgMjgwLjc0OSAxNS4zNjgyQzI4MC43NDkgMTMuODUzNiAyODAuNjEyIDEyLjc2NTUgMjgwLjMzOSAxMi4xMDM5QzI4MC4wNjYgMTEuNDQyMyAyNzkuNjI4IDExLjExMTUgMjc5LjAyNiAxMS4xMTE1QzI3OC40MTIgMTEuMTExNSAyNzcuOTczIDExLjQ0MjMgMjc3LjcwOCAxMi4xMDM5QzI3Ny40NDQgMTIuNzY1NSAyNzcuMzExIDEzLjg1MzYgMjc3LjMxMSAxNS4zNjgyQzI3Ny4zMTEgMTYuODgyOSAyNzcuNDQyIDE3Ljk2ODIgMjc3LjcwNCAxOC42MjQxWiIgZmlsbD0iI0UxRTFFMSIvPgo8cGF0aCBkPSJNMjEzLjc1IDEzLjc1SDIxOC4yNVYxOC4yNUgyMTMuNzVWMTMuNzVaIiBzdHJva2U9IiNFMUUxRTEiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxwYXRoIGQ9Ik0yNTAuNjAzIDE2Ljg0OTZWMTUuODQ5NkgyNDcuNjAzVjE2Ljg0OTZIMjUwLjYwM1oiIGZpbGw9IiNFMUUxRTEiIHN0cm9rZT0iI0UxRTFFMSIvPgo8ZyBvcGFjaXR5PSIwLjgzNDMzMyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTk2Ljk3NiAyMi41OTYyQzE5Ni4xMjYgMjMuMzM5NSAxOTQuOTEgMjMuNzExMSAxOTMuMzI4IDIzLjcxMTFDMTkxLjk1NCAyMy43MTExIDE5MC44NDUgMjMuNDg4NyAxOTAgMjMuMDQzOVYyMC43ODg4QzE5MC40NDUgMjEuMDI1MyAxOTAuOTYzIDIxLjIxODEgMTkxLjU1NCAyMS4zNjczQzE5Mi4xNDUgMjEuNTE2NiAxOTIuNzA2IDIxLjU5MTIgMTkzLjIzNSAyMS41OTEyQzE5NC44MjggMjEuNTkxMiAxOTUuNjI1IDIwLjkzOCAxOTUuNjI1IDE5LjYzMTdDMTk1LjYyNSAxOC4zODczIDE5NC44IDE3Ljc2NTIgMTkzLjE1IDE3Ljc2NTJDMTkyLjg1MiAxNy43NjUyIDE5Mi41MjMgMTcuNzk0NyAxOTIuMTYyIDE3Ljg1MzhDMTkxLjgwMiAxNy45MTMgMTkxLjUwOSAxNy45NzYzIDE5MS4yODQgMTguMDQzOUwxOTAuMjQ1IDE3LjQ4NjRMMTkwLjcwOSAxMS4xOTQySDE5Ny40MDdWMTMuNDA3SDE5Mi45OThMMTkyLjc3IDE1LjgzMUwxOTMuMDY2IDE1Ljc3MTlDMTkzLjQwOSAxNS42OTMxIDE5My44MzQgMTUuNjUzNyAxOTQuMzQxIDE1LjY1MzdDMTk1LjUzNSAxNS42NTM3IDE5Ni40ODUgMTUuOTg4NyAxOTcuMTkyIDE2LjY1ODdDMTk3Ljg5OCAxNy4zMjg4IDE5OC4yNTIgMTguMjQ2NiAxOTguMjUyIDE5LjQxMjFDMTk4LjI1MiAyMC43OTE2IDE5Ny44MjcgMjEuODUzIDE5Ni45NzYgMjIuNTk2MlpNMjA2LjE3NCAxMS4xOTQyVjIzLjU0MjJIMjAzLjU2NFYxNi4zOTY5TDIwMy41OSAxNS4yMjI5TDIwMy42MzIgMTMuOTM5MUMyMDMuMTk4IDE0LjM3MjcgMjAyLjg5NyAxNC42NTcgMjAyLjcyOCAxNC43OTIyTDIwMS4zMDkgMTUuOTMyNEwyMDAuMDUxIDE0LjM2MTRMMjA0LjAyOSAxMS4xOTQySDIwNi4xNzRaIiBmaWxsPSIjMjE5NkYzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjM0LjcwOCAyMy43MTExQzIzNi4wMjYgMjMuNzExMSAyMzcuMDU2IDIzLjMyNjggMjM3LjggMjIuNTU4MkMyMzguNTQzIDIxLjc4OTcgMjM4LjkxNCAyMC43NDY2IDIzOC45MTQgMTkuNDI5QzIzOC45MTQgMTguMjA3MiAyMzguNjAyIDE3LjI1IDIzNy45NzcgMTYuNTU3NEMyMzcuMzUyIDE1Ljg2NDggMjM2LjQ4OCAxNS41MTg2IDIzNS4zODQgMTUuNTE4NkMyMzQuMTU3IDE1LjUxODYgMjMzLjI2NCAxNS45OTcyIDIzMi43MDcgMTYuOTU0NEgyMzIuNTk3QzIzMi42NDggMTUuOTgwMyAyMzIuODE0IDE1LjIyODYgMjMzLjA5NSAxNC42OTkzQzIzMy4zNzcgMTQuMTcgMjMzLjggMTMuNzcwMyAyMzQuMzY2IDEzLjVDMjM0LjkzMiAxMy4yMjk3IDIzNS42NjMgMTMuMDk0NiAyMzYuNTU4IDEzLjA5NDZDMjM3LjA0OCAxMy4wOTQ2IDIzNy41NDMgMTMuMTUwOSAyMzguMDQ1IDEzLjI2MzVWMTEuMTc3M0MyMzcuNjQ1IDExLjA5MjkgMjM3LjA5MyAxMS4wNTA3IDIzNi4zODkgMTEuMDUwN0MyMzQuMzI4IDExLjA1MDcgMjMyLjc4MSAxMS42NDc1IDIzMS43NDggMTIuODQxMkMyMzAuNzE1IDE0LjAzNDkgMjMwLjE5OCAxNS44NTM2IDIzMC4xOTggMTguMjk3M0MyMzAuMTk4IDE5LjQ0MDMgMjMwLjM4MyAyMC40MTcyIDIzMC43NTEgMjEuMjI4QzIzMS4xMiAyMi4wMzg4IDIzMS42NDQgMjIuNjU1NCAyMzIuMzIyIDIzLjA3NzdDMjMzLjAwMSAyMy41IDIzMy43OTYgMjMuNzExMSAyMzQuNzA4IDIzLjcxMTFaTTIyNi44NjIgMjMuNTQyMlYxMS4xOTQySDIyNC43MTdMMjIwLjczOSAxNC4zNjE1TDIyMS45OTcgMTUuOTMyNEwyMjMuNDE2IDE0Ljc5MjJDMjIzLjU4NSAxNC42NTcxIDIyMy44ODYgMTQuMzcyNyAyMjQuMzIgMTMuOTM5MkwyMjQuMjc4IDE1LjIyM0wyMjQuMjUyIDE2LjM5NjlWMjMuNTQyMkgyMjYuODYyWk0yMzMuMzE5IDIwLjkzMjRDMjMzLjY3MSAyMS4zOTQxIDIzNC4xMTcgMjEuNjI1IDIzNC42NTggMjEuNjI1QzIzNS4yMTUgMjEuNjI1IDIzNS42NDMgMjEuNDM3OCAyMzUuOTQyIDIxLjA2MzNDMjM2LjI0IDIwLjY4ODkgMjM2LjM4OSAyMC4xNTU0IDIzNi4zODkgMTkuNDYyOEMyMzYuMzg5IDE4Ljg2MDMgMjM2LjI1IDE4LjM4NiAyMzUuOTcxIDE4LjAzOTdDMjM1LjY5MiAxNy42OTM0IDIzNS4yNzEgMTcuNTIwMiAyMzQuNzA4IDE3LjUyMDJDMjM0LjE3OSAxNy41MjAyIDIzMy43MjcgMTcuNjkyIDIzMy4zNTMgMTguMDM1NEMyMzIuOTc4IDE4LjM3ODkgMjMyLjc5MSAxOC43Nzg3IDIzMi43OTEgMTkuMjM0OEMyMzIuNzkxIDE5LjkwNDggMjMyLjk2NyAyMC40NzA3IDIzMy4zMTkgMjAuOTMyNFoiIGZpbGw9IiM4OTk1OUMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNzUuMDI2IDIzLjcxMTFDMjc2LjQ5NSAyMy43MTExIDI3Ny41ODMgMjMuMTkzMSAyNzguMjkgMjIuMTU3MUMyNzguOTk3IDIxLjEyMSAyNzkuMzUgMTkuNTI0OCAyNzkuMzUgMTcuMzY4MkMyNzkuMzUgMTUuMjg0OSAyNzguOTg1IDEzLjcwMjcgMjc4LjI1NiAxMi42MjE2QzI3Ny41MjcgMTEuNTQwNSAyNzYuNDUgMTEgMjc1LjAyNiAxMUMyNzMuNTYyIDExIDI3Mi40NzggMTEuNTE2NiAyNzEuNzc0IDEyLjU0OThDMjcxLjA3IDEzLjU4MyAyNzAuNzE4IDE1LjE4OTIgMjcwLjcxOCAxNy4zNjgyQzI3MC43MTggMTkuNDU3MiAyNzEuMDggMjEuMDM2NiAyNzEuODA0IDIyLjEwNjRDMjcyLjUyNyAyMy4xNzYyIDI3My42MDEgMjMuNzExMSAyNzUuMDI2IDIzLjcxMTFaTTI1Ny40OTIgMjMuNTQyMlYxMS4xOTQzSDI1NS4zNDdMMjUxLjM2OSAxNC4zNjE1TDI1Mi42MjcgMTUuOTMyNEwyNTQuMDQ2IDE0Ljc5MjJDMjU0LjIxNSAxNC42NTcxIDI1NC41MTYgMTQuMzcyNyAyNTQuOTUgMTMuOTM5MkwyNTQuOTA4IDE1LjIyM0wyNTQuODgyIDE2LjM5N1YyMy41NDIySDI1Ny40OTJaTTI2OC4zMzcgMjMuNTQyMlYyMC45ODMxSDI2OS44MjNWMTguOTU2MUgyNjguMzM3VjExLjE5NDNIMjY1LjkyOUwyNjAuNTE2IDE5LjE2NzJWMjAuOTgzMUgyNjUuNzg2VjIzLjU0MjJIMjY4LjMzN1pNMjYyLjgxMyAxOC45NTYxSDI2NS43ODZWMTYuODYxNUMyNjUuNzg2IDE2LjUxMjQgMjY1LjggMTYuMDA1NiAyNjUuODI4IDE1LjM0MTJDMjY1Ljg1NiAxNC42NzY4IDI2NS44NzkgMTQuMjkxMSAyNjUuODk2IDE0LjE4NDFIMjY1LjgyOEMyNjUuNjIgMTQuNjQ1OCAyNjUuMzY5IDE1LjA5NjMgMjY1LjA3NiAxNS41MzU1TDI2Mi44MTMgMTguOTU2MVpNMjczLjcwNCAyMC42MjQxQzI3My45NjYgMjEuMjgwMSAyNzQuNDA2IDIxLjYwODEgMjc1LjAyNiAyMS42MDgxQzI3NS42MzQgMjEuNjA4MSAyNzYuMDczIDIxLjI3NTkgMjc2LjM0MyAyMC42MTE1QzI3Ni42MTQgMTkuOTQ3MSAyNzYuNzQ5IDE4Ljg2NiAyNzYuNzQ5IDE3LjM2ODJDMjc2Ljc0OSAxNS44NTM2IDI3Ni42MTIgMTQuNzY1NSAyNzYuMzM5IDE0LjEwMzlDMjc2LjA2NiAxMy40NDIzIDI3NS42MjggMTMuMTExNSAyNzUuMDI2IDEzLjExMTVDMjc0LjQxMiAxMy4xMTE1IDI3My45NzMgMTMuNDQyMyAyNzMuNzA4IDE0LjEwMzlDMjczLjQ0NCAxNC43NjU1IDI3My4zMTEgMTUuODUzNiAyNzMuMzExIDE3LjM2ODJDMjczLjMxMSAxOC44ODI5IDI3My40NDIgMTkuOTY4MiAyNzMuNzA0IDIwLjYyNDFaIiBmaWxsPSIjODk5NTlDIi8+CjxwYXRoIGQ9Ik0yMTYuNTc3IDE5Ljk2MTFWMTcuODQ5NkgyMTIuMDQyVjE5Ljk2MTFIMjE2LjU3N1oiIGZpbGw9IiM4OTk1OUMiLz4KPHBhdGggZD0iTTI0Ny4xMzkgMTkuOTYxMVYxNy44NDk2SDI0Mi42MDNWMTkuOTYxMUgyNDcuMTM5WiIgZmlsbD0iIzg5OTU5QyIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE4IDI1Ljc2MzJMMzE4IDQuODcxMTJDMzE4IDMuNzY2IDMxNy4xMjcgMi44NjUyNiAzMTYuMDIyIDIuODQwNzhDMjk1LjQyNCAyLjM5NjUzIDEyMC4zNzEgLTEuMzExNjggOTcuODI5NCAwLjQ5MTAyQzczLjg3MDggMi40MDUwOSA2OC4xMjE3IDUuMDM4NzggNTguNTM4OCAxMy4xODA5QzUwLjA3NjIgMjAuMzY5NyAxMC4yMzIxIDc0Ljg5NzYgMS4wMjUwNSA4NS4yMTgyQy0wLjMyODAzMyA4Ni43MzMzIC0wLjMzNjYwOSA4OC45OTYyIDAuOTY5OTQgOTAuNTUxN0MyLjA5MTU4IDkxLjg4ODEgMTYuNjkyNiAxMDEuNCAyMi4xMjMzIDk0LjUzNTNDMjYuNTQxMyA4OC45NTA5IDQzLjY4NTUgNTYuMjI0NCA1MC4xNTM0IDQ2LjY0NTVDNTYuNjIxMiAzNy4wNjc4IDY2LjkyNDEgMTQuMzIwNCAxMDQuNzc3IDIxLjUwNTVDMTIyLjk4NCAyNC4xMzggMTYzLjk2MSAzMi4wNDAzIDE3Mi4zNDIgMzIuMDQwM0MxODAuMTMxIDMyLjA0MDMgMjk5LjI1IDI4LjMxNzQgMzE2LjA0IDI3Ljc5MTFDMzE3LjEzNiAyNy43NTY5IDMxOCAyNi44NTk4IDMxOCAyNS43NjMyWiIgZmlsbD0iIzg5OTU5QyIvPgo8cGF0aCBkPSJNODAuMTU3MiA1OFY0Ny4yOTJIODMuMDUwM1Y1NS42NjM2SDg3LjE3MzhWNThIODAuMTU3MlpNOTUuMjQ1MSA1OEg4OC44ODc3VjQ3LjI5Mkg5NS4yNDUxVjQ5LjYxMzhIOTEuNzgwOFY1MS4yOTgzSDk0Ljk4ODhWNTMuNjIwMUg5MS43ODA4VjU1LjY0MTZIOTUuMjQ1MVY1OFpNMTA3LjMxNSA1OEgxMDMuNTIxTDk5LjYxMDQgNTAuNDU2MUg5OS41NDQ0Qzk5LjYzNzIgNTEuNjQyNiA5OS42ODM2IDUyLjU0ODMgOTkuNjgzNiA1My4xNzMzVjU4SDk3LjEyMDFWNDcuMjkySDEwMC44OTlMMTA0Ljc5NiA1NC43MzM0SDEwNC44NEMxMDQuNzcxIDUzLjY1NDMgMTA0LjczNyA1Mi43ODc2IDEwNC43MzcgNTIuMTMzM1Y0Ny4yOTJIMTA3LjMxNVY1OFpNMTE2LjYzMiA1NC43NDhDMTE2LjYzMiA1NS40MTIxIDExNi40NjMgNTYuMDAyOSAxMTYuMTI2IDU2LjUyMDVDMTE1Ljc5IDU3LjAzMzIgMTE1LjMwNCA1Ny40MzM2IDExNC42NjkgNTcuNzIxN0MxMTQuMDM0IDU4LjAwNDkgMTEzLjI5IDU4LjE0NjUgMTEyLjQzNSA1OC4xNDY1QzExMS43MjIgNTguMTQ2NSAxMTEuMTI0IDU4LjA5NzcgMTEwLjY0MSA1OEMxMTAuMTU3IDU3Ljg5NzUgMTA5LjY1NCA1Ny43MjE3IDEwOS4xMzIgNTcuNDcyN1Y1NC44OTQ1QzEwOS42ODQgNTUuMTc3NyAxMTAuMjU3IDU1LjM5OTkgMTEwLjg1MyA1NS41NjFDMTExLjQ0OSA1NS43MTczIDExMS45OTYgNTUuNzk1NCAxMTIuNDk0IDU1Ljc5NTRDMTEyLjkyMyA1NS43OTU0IDExMy4yMzggNTUuNzIyMiAxMTMuNDM4IDU1LjU3NTdDMTEzLjYzOSA1NS40MjQzIDExMy43MzkgNTUuMjMxNCAxMTMuNzM5IDU0Ljk5NzFDMTEzLjczOSA1NC44NTA2IDExMy42OTcgNTQuNzIzNiAxMTMuNjE0IDU0LjYxNjJDMTEzLjUzNiA1NC41MDM5IDExMy40MDcgNTQuMzkxNiAxMTMuMjI2IDU0LjI3OTNDMTEzLjA1IDU0LjE2NyAxMTIuNTc3IDUzLjkzNzUgMTExLjgwNSA1My41OTA4QzExMS4xMDcgNTMuMjczNCAxMTAuNTgyIDUyLjk2NTggMTEwLjIzIDUyLjY2OEMxMDkuODg0IDUyLjM3MDEgMTA5LjYyNSA1Mi4wMjgzIDEwOS40NTQgNTEuNjQyNkMxMDkuMjg4IDUxLjI1NjggMTA5LjIwNSA1MC44MDAzIDEwOS4yMDUgNTAuMjcyOUMxMDkuMjA1IDQ5LjI4NjYgMTA5LjU2NCA0OC41MTc2IDExMC4yODIgNDcuOTY1OEMxMTEgNDcuNDE0MSAxMTEuOTg2IDQ3LjEzODIgMTEzLjI0MSA0Ny4xMzgyQzExNC4zNDkgNDcuMTM4MiAxMTUuNDc5IDQ3LjM5NDUgMTE2LjYzMiA0Ny45MDcyTDExNS43NDYgNTAuMTQxMUMxMTQuNzQ1IDQ5LjY4MjEgMTEzLjg4IDQ5LjQ1MjYgMTEzLjE1MyA0OS40NTI2QzExMi43NzcgNDkuNDUyNiAxMTIuNTAzIDQ5LjUxODYgMTEyLjMzMyA0OS42NTA0QzExMi4xNjIgNDkuNzgyMiAxMTIuMDc2IDQ5Ljk0NTggMTEyLjA3NiA1MC4xNDExQzExMi4wNzYgNTAuMzUxMSAxMTIuMTg0IDUwLjUzOTEgMTEyLjM5OCA1MC43MDUxQzExMi42MTggNTAuODcxMSAxMTMuMjA5IDUxLjE3MzggMTE0LjE3MSA1MS42MTMzQzExNS4wOTQgNTIuMDI4MyAxMTUuNzMzIDUyLjQ3NTEgMTE2LjA5IDUyLjk1MzZDMTE2LjQ1MSA1My40MjcyIDExNi42MzIgNTQuMDI1NCAxMTYuNjMyIDU0Ljc0OFpNMTMzLjc0OSA1OEgxMzAuMzI4TDEyOS4zMDMgNTMuMzM0NUMxMjkuMjU0IDUzLjEzOTIgMTI5LjE3NiA1Mi43NTEgMTI5LjA2OCA1Mi4xNjk5QzEyOC45NjYgNTEuNTg4OSAxMjguODkgNTEuMTAzIDEyOC44NDEgNTAuNzEyNEMxMjguODAyIDUxLjAyOTggMTI4LjczOSA1MS40MjUzIDEyOC42NTEgNTEuODk4OUMxMjguNTYzIDUyLjM2NzcgMTI4LjQ3NSA1Mi43OTk4IDEyOC4zODcgNTMuMTk1M0MxMjguMzA0IDUzLjU5MDggMTI3Ljk1IDU1LjE5MjQgMTI3LjMyNSA1OEgxMjMuOTA1TDEyMS4yNTMgNDcuMjkySDEyNC4wNDRMMTI1LjIwOCA1Mi42NjA2QzEyNS40NzIgNTMuODQ3MiAxMjUuNjUzIDU0Ljc5MiAxMjUuNzUgNTUuNDk1MUMxMjUuODE0IDU0Ljk5NzEgMTI1LjkyNiA1NC4zMjA4IDEyNi4wODcgNTMuNDY2M0MxMjYuMjUzIDUyLjYxMTggMTI2LjQwNyA1MS45MDM4IDEyNi41NDkgNTEuMzQyM0wxMjcuNDk0IDQ3LjI5MkgxMzAuMTc0TDEzMS4wOSA1MS4zNDIzQzEzMS4yNDYgNTEuOTkxNyAxMzEuNDA1IDUyLjc0MTIgMTMxLjU2NiA1My41OTA4QzEzMS43MjcgNTQuNDQwNCAxMzEuODM0IDU1LjA3NTIgMTMxLjg4OCA1NS40OTUxQzEzMS45NTIgNTQuOTUzMSAxMzIuMTI1IDU0LjAxMzIgMTMyLjQwOCA1Mi42NzUzTDEzMy41OTUgNDcuMjkySDEzNi4zODVMMTMzLjc0OSA1OFpNMTM3Ljc3IDU4VjQ3LjI5MkgxNDAuNjc3VjU4SDEzNy43N1pNMTUyLjA4OCA1Mi40MTg5QzE1Mi4wODggNTQuMjA2MSAxNTEuNTk1IDU1LjU4MyAxNTAuNjA5IDU2LjU0OThDMTQ5LjYyNyA1Ny41MTY2IDE0OC4yNDYgNTggMTQ2LjQ2MyA1OEgxNDIuOTk5VjQ3LjI5MkgxNDYuNzA1QzE0OC40MjQgNDcuMjkyIDE0OS43NSA0Ny43MzE0IDE1MC42ODIgNDguNjEwNEMxNTEuNjIgNDkuNDg5MyAxNTIuMDg4IDUwLjc1ODggMTUyLjA4OCA1Mi40MTg5Wk0xNDkuMDg1IDUyLjUyMTVDMTQ5LjA4NSA1MS41NCAxNDguODkgNTAuODEyNSAxNDguNSA1MC4zMzg5QzE0OC4xMTQgNDkuODY1MiAxNDcuNTI1IDQ5LjYyODQgMTQ2LjczNCA0OS42Mjg0SDE0NS44OTJWNTUuNjI3SDE0Ni41MzdDMTQ3LjQxNiA1NS42MjcgMTQ4LjA2IDU1LjM3MyAxNDguNDcgNTQuODY1MkMxNDguODggNTQuMzUyNSAxNDkuMDg1IDUzLjU3MTMgMTQ5LjA4NSA1Mi41MjE1Wk0xNTguNzM5IDU4SDE1NS44NDZWNDkuNjU3N0gxNTMuMjMxVjQ3LjI5MkgxNjEuMzQ2VjQ5LjY1NzdIMTU4LjczOVY1OFpNMTcyLjA1NCA1OEgxNjkuMTQ2VjUzLjYzNDhIMTY1Ljc4NVY1OEgxNjIuODc3VjQ3LjI5MkgxNjUuNzg1VjUxLjI2MTdIMTY5LjE0NlY0Ny4yOTJIMTcyLjA1NFY1OFoiIGZpbGw9IiMwRjBGMEYiLz4KPHBhdGggZD0iTTgwLjQ3MjIgNzUuMjkySDgzLjQ5NzFDODQuOTE4IDc1LjI5MiA4NS45NDU4IDc1LjUwNDQgODYuNTgwNiA3NS45MjkyQzg3LjIxNTMgNzYuMzU0IDg3LjUzMjcgNzcuMDI1NCA4Ny41MzI3IDc3Ljk0MzRDODcuNTMyNyA3OC41NzgxIDg3LjM1NDUgNzkuMTAzIDg2Ljk5OCA3OS41MTgxQzg2LjY0NjUgNzkuOTI4MiA4Ni4xMzEzIDgwLjE5NDMgODUuNDUyNiA4MC4zMTY0VjgwLjM4OTZDODcuMDc4NiA4MC42NjggODcuODkxNiA4MS41MjI1IDg3Ljg5MTYgODIuOTUzMUM4Ny44OTE2IDgzLjkxMDIgODcuNTY2OSA4NC42NTcyIDg2LjkxNzUgODUuMTk0M0M4Ni4yNzI5IDg1LjczMTQgODUuMzY5NiA4NiA4NC4yMDc1IDg2SDgwLjQ3MjJWNzUuMjkyWk04MS43MTczIDc5Ljg3N0g4My43NjgxQzg0LjY0NyA3OS44NzcgODUuMjc5MyA3OS43NDAyIDg1LjY2NSA3OS40NjY4Qzg2LjA1MDggNzkuMTg4NSA4Ni4yNDM3IDc4LjcyMjIgODYuMjQzNyA3OC4wNjc5Qzg2LjI0MzcgNzcuNDY3MyA4Ni4wMjg4IDc3LjAzNTIgODUuNTk5MSA3Ni43NzE1Qzg1LjE2OTQgNzYuNTAyOSA4NC40ODU4IDc2LjM2ODcgODMuNTQ4MyA3Ni4zNjg3SDgxLjcxNzNWNzkuODc3Wk04MS43MTczIDgwLjkzMTZWODQuOTM4SDgzLjk1MTJDODQuODE1NCA4NC45MzggODUuNDY0OCA4NC43NzIgODUuODk5NCA4NC40Mzk5Qzg2LjMzODkgODQuMTAzIDg2LjU1ODYgODMuNTc4MSA4Ni41NTg2IDgyLjg2NTJDODYuNTU4NiA4Mi4yMDEyIDg2LjMzNCA4MS43MTI5IDg1Ljg4NDggODEuNDAwNEM4NS40NDA0IDgxLjA4NzkgODQuNzYxNyA4MC45MzE2IDgzLjg0ODYgODAuOTMxNkg4MS43MTczWk05MS40NDM4IDgxLjU0NjlWODZIOTAuMTk4N1Y3NS4yOTJIOTMuMTM1N0M5NC40NDkyIDc1LjI5MiA5NS40MTg1IDc1LjU0MzUgOTYuMDQzNSA3Ni4wNDY0Qzk2LjY3MzMgNzYuNTQ5MyA5Ni45ODgzIDc3LjMwNjIgOTYuOTg4MyA3OC4zMTY5Qzk2Ljk4ODMgNzkuNzMyOSA5Ni4yNzA1IDgwLjY4OTkgOTQuODM1IDgxLjE4OEw5Ny43NDI3IDg2SDk2LjI3MDVMOTMuNjc3NyA4MS41NDY5SDkxLjQ0MzhaTTkxLjQ0MzggODAuNDc3NUg5My4xNTA0Qzk0LjAyOTMgODAuNDc3NSA5NC42NzM4IDgwLjMwNDIgOTUuMDg0IDc5Ljk1NzVDOTUuNDk0MSA3OS42MDYgOTUuNjk5MiA3OS4wODExIDk1LjY5OTIgNzguMzgyOEM5NS42OTkyIDc3LjY3NDggOTUuNDg5MyA3Ny4xNjQ2IDk1LjA2OTMgNzYuODUyMUM5NC42NTQzIDc2LjUzOTYgOTMuOTg1NCA3Ni4zODMzIDkzLjA2MjUgNzYuMzgzM0g5MS40NDM4VjgwLjQ3NzVaTTk5LjQ3MTIgODZWNzUuMjkySDEwMC43MTZWODZIOTkuNDcxMlpNMTEyLjIwOCA4MC41NDM1QzExMi4yMDggODIuMzExIDExMS43MjcgODMuNjYzNiAxMTAuNzY1IDg0LjYwMTFDMTA5LjgwOCA4NS41MzM3IDEwOC40MjkgODYgMTA2LjYyNyA4NkgxMDMuNjYxVjc1LjI5MkgxMDYuOTQyQzEwOC42MDcgNzUuMjkyIDEwOS45MDEgNzUuNzUzNCAxMTAuODI0IDc2LjY3NjNDMTExLjc0NyA3Ny41OTkxIDExMi4yMDggNzguODg4MiAxMTIuMjA4IDgwLjU0MzVaTTExMC44OSA4MC41ODc0QzExMC44OSA3OS4xOTA5IDExMC41MzggNzguMTM4NyAxMDkuODM1IDc3LjQzMDdDMTA5LjEzNyA3Ni43MjI3IDEwOC4wOTcgNzYuMzY4NyAxMDYuNzE1IDc2LjM2ODdIMTA0LjkwNlY4NC45MjMzSDEwNi40MjJDMTA3LjkwNiA4NC45MjMzIDEwOS4wMjIgODQuNTU5NiAxMDkuNzY5IDgzLjgzMkMxMTAuNTE2IDgzLjA5OTYgMTEwLjg5IDgyLjAxODEgMTEwLjg5IDgwLjU4NzRaTTExOS4zMTIgODAuMzg5NkgxMjIuOTUzVjg1LjU5NzJDMTIyLjM4NiA4NS43Nzc4IDEyMS44MSA4NS45MTQ2IDEyMS4yMjQgODYuMDA3M0MxMjAuNjM4IDg2LjEwMDEgMTE5Ljk1OSA4Ni4xNDY1IDExOS4xODggODYuMTQ2NUMxMTcuNTY3IDg2LjE0NjUgMTE2LjMwNSA4NS42NjU1IDExNS40MDEgODQuNzAzNkMxMTQuNDk4IDgzLjczNjggMTE0LjA0NiA4Mi4zODQzIDExNC4wNDYgODAuNjQ2QzExNC4wNDYgNzkuNTMyNyAxMTQuMjY5IDc4LjU1ODYgMTE0LjcxMyA3Ny43MjM2QzExNS4xNjIgNzYuODgzOCAxMTUuODA3IDc2LjI0NDEgMTE2LjY0NiA3NS44MDQ3QzExNy40ODYgNzUuMzYwNCAxMTguNDcgNzUuMTM4MiAxMTkuNTk4IDc1LjEzODJDMTIwLjc0MSA3NS4xMzgyIDEyMS44MDUgNzUuMzQ4MSAxMjIuNzkyIDc1Ljc2ODFMMTIyLjMwOCA3Ni44NjY3QzEyMS4zNDEgNzYuNDU2NSAxMjAuNDExIDc2LjI1MTUgMTE5LjUxOCA3Ni4yNTE1QzExOC4yMTQgNzYuMjUxNSAxMTcuMTk2IDc2LjYzOTYgMTE2LjQ2MyA3Ny40MTZDMTE1LjczMSA3OC4xOTI0IDExNS4zNjUgNzkuMjY5IDExNS4zNjUgODAuNjQ2QzExNS4zNjUgODIuMDkxMyAxMTUuNzE2IDgzLjE4NzUgMTE2LjQxOSA4My45MzQ2QzExNy4xMjcgODQuNjgxNiAxMTguMTY1IDg1LjA1NTIgMTE5LjUzMiA4NS4wNTUyQzEyMC4yNzQgODUuMDU1MiAxMjEgODQuOTY5NyAxMjEuNzA4IDg0Ljc5ODhWODEuNTAyOUgxMTkuMzEyVjgwLjM4OTZaTTEzMS41IDg2SDEyNS41MzFWNzUuMjkySDEzMS41Vjc2LjM5NzlIMTI2Ljc3NlY3OS44NDc3SDEzMS4yMTRWODAuOTQ2M0gxMjYuNzc2Vjg0Ljg4NjdIMTMxLjVWODZaTTE0Ny4xMjMgODZIMTQ1Ljg5MkwxNDMuNzMxIDc4LjgyOTZDMTQzLjYyOSA3OC41MTIyIDE0My41MTQgNzguMTExOCAxNDMuMzg3IDc3LjYyODRDMTQzLjI2IDc3LjE0NSAxNDMuMTk0IDc2Ljg1NDUgMTQzLjE4OSA3Ni43NTY4QzE0My4wODIgNzcuNDAxNCAxNDIuOTExIDc4LjEwNjkgMTQyLjY3NyA3OC44NzM1TDE0MC41ODIgODZIMTM5LjM1MkwxMzYuNTAyIDc1LjI5MkgxMzcuODIxTDEzOS41MTMgODEuOTA1OEMxMzkuNzQ3IDgyLjgzMzUgMTM5LjkxOCA4My42NzMzIDE0MC4wMjUgODQuNDI1M0MxNDAuMTU3IDgzLjUzMTcgMTQwLjM1MyA4Mi42NTc3IDE0MC42MTEgODEuODAzMkwxNDIuNTMgNzUuMjkySDE0My44NDlMMTQ1Ljg2MyA4MS44NjE4QzE0Ni4wOTcgODIuNjE4NyAxNDYuMjk1IDgzLjQ3MzEgMTQ2LjQ1NiA4NC40MjUzQzE0Ni41NDkgODMuNzMxOSAxNDYuNzI1IDgyLjg4NzIgMTQ2Ljk4MyA4MS44OTExTDE0OC42NjggNzUuMjkySDE0OS45ODZMMTQ3LjEyMyA4NlpNMTUxLjY2NCA4NlY3NS4yOTJIMTUyLjkwOVY4NkgxNTEuNjY0Wk0xNjQuNCA4MC41NDM1QzE2NC40IDgyLjMxMSAxNjMuOTE5IDgzLjY2MzYgMTYyLjk1OCA4NC42MDExQzE2MiA4NS41MzM3IDE2MC42MjEgODYgMTU4LjgxOSA4NkgxNTUuODUzVjc1LjI5MkgxNTkuMTM0QzE2MC43OTkgNzUuMjkyIDE2Mi4wOTMgNzUuNzUzNCAxNjMuMDE2IDc2LjY3NjNDMTYzLjkzOSA3Ny41OTkxIDE2NC40IDc4Ljg4ODIgMTY0LjQgODAuNTQzNVpNMTYzLjA4MiA4MC41ODc0QzE2My4wODIgNzkuMTkwOSAxNjIuNzMgNzguMTM4NyAxNjIuMDI3IDc3LjQzMDdDMTYxLjMyOSA3Ni43MjI3IDE2MC4yODkgNzYuMzY4NyAxNTguOTA3IDc2LjM2ODdIMTU3LjA5OFY4NC45MjMzSDE1OC42MTRDMTYwLjA5OSA4NC45MjMzIDE2MS4yMTQgODQuNTU5NiAxNjEuOTYxIDgzLjgzMkMxNjIuNzA4IDgzLjA5OTYgMTYzLjA4MiA4Mi4wMTgxIDE2My4wODIgODAuNTg3NFpNMTcwLjA5MSA4NkgxNjguODQ2Vjc2LjM5NzlIMTY1LjQ1NVY3NS4yOTJIMTczLjQ4MlY3Ni4zOTc5SDE3MC4wOTFWODZaTTE4My4yMzEgODZIMTgxLjk4NlY4MC45NjA5SDE3Ni4zNDZWODZIMTc1LjEwMVY3NS4yOTJIMTc2LjM0NlY3OS44NDc3SDE4MS45ODZWNzUuMjkySDE4My4yMzFWODZaIiBmaWxsPSIjQjBCREM1Ii8+CjxwYXRoIGQ9Ik04My43NjgxIDExNEg4Mi41MjI5VjEwNC4zOThINzkuMTMxOFYxMDMuMjkySDg3LjE1OTJWMTA0LjM5OEg4My43NjgxVjExNFpNOTQuNzQ3MSAxMTRIODguNzc3OFYxMDMuMjkySDk0Ljc0NzFWMTA0LjM5OEg5MC4wMjI5VjEwNy44NDhIOTQuNDYxNFYxMDguOTQ2SDkwLjAyMjlWMTEyLjg4N0g5NC43NDcxVjExNFpNMTAxLjg2NiAxMTRMOTguMjMzNCAxMDQuNTA4SDk4LjE3NDhDOTguMjQzMiAxMDUuMjYgOTguMjc3MyAxMDYuMTUzIDk4LjI3NzMgMTA3LjE4OFYxMTRIOTcuMTI3NFYxMDMuMjkySDk5LjAwMjRMMTAyLjM5NCAxMTIuMTI1SDEwMi40NTJMMTA1Ljg3MyAxMDMuMjkySDEwNy43MzNWMTE0SDEwNi40ODhWMTA3LjEwMUMxMDYuNDg4IDEwNi4zMSAxMDYuNTIyIDEwNS40NSAxMDYuNTkgMTA0LjUyMkgxMDYuNTMyTDEwMi44NyAxMTRIMTAxLjg2NlpNMTE3LjQ2NyAxMDYuNDEyQzExNy40NjcgMTA3LjQ5NiAxMTcuMDk2IDEwOC4zMzEgMTE2LjM1NCAxMDguOTE3QzExNS42MTYgMTA5LjQ5OCAxMTQuNTU5IDEwOS43ODkgMTEzLjE4MiAxMDkuNzg5SDExMS45MjJWMTE0SDExMC42NzdWMTAzLjI5MkgxMTMuNDUzQzExNi4xMjkgMTAzLjI5MiAxMTcuNDY3IDEwNC4zMzIgMTE3LjQ2NyAxMDYuNDEyWk0xMTEuOTIyIDEwOC43MTlIMTEzLjA0M0MxMTQuMTQ2IDEwOC43MTkgMTE0Ljk0NSAxMDguNTQxIDExNS40MzggMTA4LjE4NUMxMTUuOTMxIDEwNy44MjggMTE2LjE3OCAxMDcuMjU3IDExNi4xNzggMTA2LjQ3MUMxMTYuMTc4IDEwNS43NjMgMTE1Ljk0NiAxMDUuMjM1IDExNS40ODIgMTA0Ljg4OUMxMTUuMDE4IDEwNC41NDIgMTE0LjI5NSAxMDQuMzY5IDExMy4zMTQgMTA0LjM2OUgxMTEuOTIyVjEwOC43MTlaTTExOS43MTUgMTE0VjEwMy4yOTJIMTIwLjk2VjExMi44NzJIMTI1LjY4NVYxMTRIMTE5LjcxNVpNMTMzLjQ3OCAxMTRIMTI3LjUwOFYxMDMuMjkySDEzMy40NzhWMTA0LjM5OEgxMjguNzUzVjEwNy44NDhIMTMzLjE5MlYxMDguOTQ2SDEyOC43NTNWMTEyLjg4N0gxMzMuNDc4VjExNFpNMTM5Ljc1NCAxMTRWMTAzLjI5MkgxNDFWMTEyLjg3MkgxNDUuNzI0VjExNEgxMzkuNzU0Wk0xNTMuNTE3IDExNEgxNDcuNTQ3VjEwMy4yOTJIMTUzLjUxN1YxMDQuMzk4SDE0OC43OTJWMTA3Ljg0OEgxNTMuMjMxVjEwOC45NDZIMTQ4Ljc5MlYxMTIuODg3SDE1My41MTdWMTE0Wk0xNjQuMjYxIDExNEgxNjIuODRMMTU2Ljk4OCAxMDUuMDEzSDE1Ni45M0MxNTcuMDA4IDEwNi4wNjggMTU3LjA0NyAxMDcuMDM1IDE1Ny4wNDcgMTA3LjkxNFYxMTRIMTU1Ljg5N1YxMDMuMjkySDE1Ny4zMDNMMTYzLjE0MSAxMTIuMjQySDE2My4xOTlDMTYzLjE4OSAxMTIuMTEgMTYzLjE2NyAxMTEuNjg4IDE2My4xMzMgMTEwLjk3NUMxNjMuMDk5IDExMC4yNTcgMTYzLjA4NyAxMDkuNzQ1IDE2My4wOTcgMTA5LjQzN1YxMDMuMjkySDE2NC4yNjFWMTE0Wk0xNzEuOTE1IDEwOC4zOUgxNzUuNTU1VjExMy41OTdDMTc0Ljk4OSAxMTMuNzc4IDE3NC40MTMgMTEzLjkxNSAxNzMuODI3IDExNC4wMDdDMTczLjI0MSAxMTQuMSAxNzIuNTYyIDExNC4xNDYgMTcxLjc5MSAxMTQuMTQ2QzE3MC4xNjkgMTE0LjE0NiAxNjguOTA3IDExMy42NjYgMTY4LjAwNCAxMTIuNzA0QzE2Ny4xMDEgMTExLjczNyAxNjYuNjQ5IDExMC4zODQgMTY2LjY0OSAxMDguNjQ2QzE2Ni42NDkgMTA3LjUzMyAxNjYuODcxIDEwNi41NTkgMTY3LjMxNSAxMDUuNzI0QzE2Ny43NjUgMTA0Ljg4NCAxNjguNDA5IDEwNC4yNDQgMTY5LjI0OSAxMDMuODA1QzE3MC4wODkgMTAzLjM2IDE3MS4wNzMgMTAzLjEzOCAxNzIuMjAxIDEwMy4xMzhDMTczLjM0MyAxMDMuMTM4IDE3NC40MDggMTAzLjM0OCAxNzUuMzk0IDEwMy43NjhMMTc0LjkxMSAxMDQuODY3QzE3My45NDQgMTA0LjQ1NyAxNzMuMDE0IDEwNC4yNTEgMTcyLjEyIDEwNC4yNTFDMTcwLjgxNiAxMDQuMjUxIDE2OS43OTggMTA0LjY0IDE2OS4wNjYgMTA1LjQxNkMxNjguMzMzIDEwNi4xOTIgMTY3Ljk2NyAxMDcuMjY5IDE2Ny45NjcgMTA4LjY0NkMxNjcuOTY3IDExMC4wOTEgMTY4LjMxOSAxMTEuMTg4IDE2OS4wMjIgMTExLjkzNUMxNjkuNzMgMTEyLjY4MiAxNzAuNzY4IDExMy4wNTUgMTcyLjEzNSAxMTMuMDU1QzE3Mi44NzcgMTEzLjA1NSAxNzMuNjAyIDExMi45NyAxNzQuMzEgMTEyLjc5OVYxMDkuNTAzSDE3MS45MTVWMTA4LjM5Wk0xODYuMjYzIDExNEgxODUuMDE4VjEwOC45NjFIMTc5LjM3OFYxMTRIMTc4LjEzM1YxMDMuMjkySDE3OS4zNzhWMTA3Ljg0OEgxODUuMDE4VjEwMy4yOTJIMTg2LjI2M1YxMTRaTTE5Mi41MDMgMTE0SDE5MS4yNThWMTA0LjM5OEgxODcuODY3VjEwMy4yOTJIMTk1Ljg5NVYxMDQuMzk4SDE5Mi41MDNWMTE0WiIgZmlsbD0iI0IwQkRDNSIvPgo8bWFzayBpZD0ibWFzazBfMV8yMTUxIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxOTIiIHk9IjI3IiB3aWR0aD0iMTEiIGhlaWdodD0iMiI+CjxyZWN0IHg9IjE5MiIgeT0iMjciIHdpZHRoPSIxMSIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzFfMjE1MSkiPgo8cGF0aCBkPSJNMTgxIDU0LjVIMTk4LjA1MVYyNyIgc3Ryb2tlPSIjNDI1QTYwIiBzdHJva2UtZGFzaGFycmF5PSIzIi8+CjwvZz4KPHBhdGggZD0iTTE4Mi41NTQgNTQuNUgxOTguMDUxVjI3IiBzdHJva2U9IiM0MjVBNjAiIHN0cm9rZS1kYXNoYXJyYXk9IjMiLz4KPHJlY3QgeD0iMTk2IiB5PSI1NCIgd2lkdGg9IjIiIGhlaWdodD0iMSIgZmlsbD0iIzQyNUE2MCIvPgo8cGF0aCBkPSJNMTk3LjIxNSA4Mi41SDIzNC43OTFWMjcuMTkxNCIgc3Ryb2tlPSIjQjBCREM1IiBzdHJva2UtZGFzaGFycmF5PSIyLjkiLz4KPG1hc2sgaWQ9Im1hc2sxXzFfMjE1MSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMjI4IiB5PSIyNyIgd2lkdGg9IjExIiBoZWlnaHQ9IjIiPgo8cmVjdCB4PSIyMjgiIHk9IjI3IiB3aWR0aD0iMTEiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMV8xXzIxNTEpIj4KPHBhdGggZD0iTTE5Ny4yMTUgODIuNUgyMzQuNzkxVjI3LjE5MTQiIHN0cm9rZT0iI0IwQkRDNSIgc3Ryb2tlLWRhc2hhcnJheT0iMyIvPgo8L2c+CjxyZWN0IHg9IjIzMiIgeT0iODIiIHdpZHRoPSIzLjMiIGhlaWdodD0iMSIgZmlsbD0iI0IwQkRDNSIvPgo8cGF0aCBkPSJNMjA4LjE1OSAxMTEuNUgyNzAuNjU2VjI3LjE5MTQiIHN0cm9rZT0iI0IwQkRDNSIgc3Ryb2tlLWRhc2hhcnJheT0iMyIvPgo8L3N2Zz4K'} alt="" />
      <div>
        <Link style={{textDecoration: 'none'}}to={'/' + choicePage}>
          <ChoiceSizeButton onClick={() => {
            nextPage({ 'frame_size': 68 }, true, true)
          }} text={'Small'} size={'42-48 mm'} />
        </Link>
        <Link style={{textDecoration: 'none'}}to={'/' + choicePage}>
          <ChoiceSizeButton onClick={() => {
            nextPage({ 'frame_size': 67 }, true, true)
          }} text={'Medium'} size={'49-53 mm'} />
        </Link>
        <Link style={{textDecoration: 'none'}}to={'/' + choicePage}>
          <ChoiceSizeButton onClick={() => {
            nextPage({ 'frame_size': 66 }, true, true)
          }} text={'Large'} size={'54-58 mm'} />
        </Link>
      </div>
      <Link style={{textDecoration: 'none'}}to='/Page42'>
        <ButtonSkip onClick={() => {
          nextPage()
        }} style={{ marginTop: '47px' }} text={"I don't know"} />
      </Link>
    </section>
  )
}

export default Page41